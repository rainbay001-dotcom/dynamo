// SPDX-FileCopyrightText: Copyright (c) 2024-2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

//! Wire-format types for vLLM ZMQ KV event streams.
//!
//! These types mirror the Python `msgspec`-defined structures emitted by vLLM
//! engines over ZMQ PUB sockets. They are independent of the dynamo runtime
//! and can be used by any crate that needs to decode the raw ZMQ payloads.

use std::collections::HashSet;
use std::fmt;
use std::sync::Arc;
use std::sync::atomic::{AtomicU32, Ordering};

use serde::Deserialize;
use serde::Serialize;
use serde::de::{self, Deserializer, IgnoredAny, MapAccess, SeqAccess, Visitor};

use crate::protocols::{
    BlockExtraInfo, BlockHashOptions, BlockMmObjectInfo, ExternalSequenceBlockHash, KvCacheEvent,
    KvCacheEventData, KvCacheRemoveData, KvCacheStoreData, KvCacheStoredBlockData, Placement,
    PlacementEvent, StorageTier, WorkerWithDpRank, compute_block_hash_for_seq,
};

// -------------------------------------------------------------------------
// Types mirroring the Python msgspec-defined structures -------------------
// -------------------------------------------------------------------------

#[derive(Debug, Serialize)]
pub struct KvEventBatch {
    pub ts: f64,
    pub events: Vec<RawKvEvent>,
    #[serde(alias = "dp_rank")]
    pub data_parallel_rank: Option<i32>,
}

impl<'de> Deserialize<'de> for KvEventBatch {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: Deserializer<'de>,
    {
        // Deserialize from array format: [timestamp, [events], data_parallel_rank]
        let arr: (f64, Vec<RawKvEvent>, Option<i32>) = Deserialize::deserialize(deserializer)?;
        Ok(KvEventBatch {
            ts: arr.0,
            events: arr.1,
            data_parallel_rank: arr.2,
        })
    }
}

#[derive(Debug, Serialize, Deserialize, Clone, Copy)]
#[serde(untagged)]
pub enum BlockHashValue {
    Signed(i64),
    Unsigned(u64),
}

impl BlockHashValue {
    pub fn into_u64(self) -> u64 {
        match self {
            BlockHashValue::Signed(v) => v.cast_unsigned(),
            BlockHashValue::Unsigned(v) => v,
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(untagged)]
pub enum KvTokenIds {
    Single(Vec<u32>),
    Bigram(Vec<(u32, u32)>),
}

#[derive(Debug, Serialize, Clone)]
#[serde(tag = "type")] // msgspec encodes variant tag as a string when `tag=True`
pub enum RawKvEvent {
    BlockStored {
        /// Block hashes may be emitted as either signed or unsigned 64-bit values.
        /// We normalize them to `u64` while deserializing to support both producers.
        block_hashes: Vec<BlockHashValue>,
        parent_block_hash: Option<BlockHashValue>,
        token_ids: Vec<u32>,
        block_size: usize,
        #[serde(skip_serializing_if = "Option::is_none")]
        medium: Option<String>,
        /// LoRA adapter name for adapter-aware block hashing
        #[serde(default, skip_serializing_if = "Option::is_none")]
        lora_name: Option<String>,
        /// Multimodal extra info for each block (length should match block_hashes)
        #[serde(default, skip_serializing_if = "Option::is_none")]
        block_mm_infos: Option<Vec<Option<BlockExtraInfo>>>,
        #[serde(skip_serializing_if = "Option::is_none")]
        is_eagle: Option<bool>,
        /// Cache namespace for multi-tenant KV cache isolation. The wire name
        /// stays `cache_salt` for compatibility with TRT-LLM/vLLM producers.
        #[serde(
            default,
            rename = "cache_salt",
            skip_serializing_if = "Option::is_none"
        )]
        cache_namespace: Option<String>,
    },
    BlockRemoved {
        block_hashes: Vec<BlockHashValue>,
        #[serde(skip_serializing_if = "Option::is_none")]
        medium: Option<String>,
    },
    AllBlocksCleared,
}

/// Parse MM hash from extra_keys string:
/// - Only accept canonical vLLM MM identifiers (64-char hex digest)
/// - Convert by taking the first 16 hex chars as u64
pub fn parse_mm_hash_from_extra_key(s: &str) -> Option<u64> {
    // extra_keys mixes MM identifiers with LoRA/cache-namespace/prompt-embed metadata.
    // Only MM identifiers should be mapped into BlockExtraInfo.
    if s.len() == 64 && s.chars().all(|c| c.is_ascii_hexdigit()) {
        return u64::from_str_radix(&s[..16], 16).ok();
    }
    None
}

#[derive(Debug, Deserialize, Clone)]
#[serde(untagged)]
pub enum ExtraKeyItem {
    Hash(String),
    HashWithSignedOffset((String, i64)),
    HashWithUnsignedOffset((String, u64)),
    Bytes(Vec<u8>),
    Signed(i64),
    Unsigned(u64),
    Float(f64),
    Bool(bool),
}

/// Convert vLLM BlockStored extra_keys to block-level MM infos.
/// extra_keys is a list aligned with blocks:
/// - None => no MM content in that block
/// - ["hash1", "hash2", ...] => one or more MM objects in that block
/// - [[hash, start_offset], ...] => one or more MM objects with block-relative
///   start offsets (vLLM 0.19+)
pub fn extra_keys_to_block_mm_infos(
    extra_keys: Option<Vec<Option<Vec<ExtraKeyItem>>>>,
) -> Option<Vec<Option<BlockExtraInfo>>> {
    let extra_keys = extra_keys?;
    if extra_keys.is_empty() {
        return None;
    }

    let infos: Vec<Option<BlockExtraInfo>> = extra_keys
        .into_iter()
        .map(|block_keys| {
            let mm_objects: Vec<BlockMmObjectInfo> = block_keys
                .unwrap_or_default()
                .iter()
                .filter_map(|key| match key {
                    ExtraKeyItem::Hash(hash)
                    | ExtraKeyItem::HashWithSignedOffset((hash, _))
                    | ExtraKeyItem::HashWithUnsignedOffset((hash, _)) => {
                        parse_mm_hash_from_extra_key(hash)
                    }
                    ExtraKeyItem::Bytes(_)
                    | ExtraKeyItem::Signed(_)
                    | ExtraKeyItem::Unsigned(_)
                    | ExtraKeyItem::Float(_)
                    | ExtraKeyItem::Bool(_) => None,
                })
                .map(|mm_hash| BlockMmObjectInfo {
                    mm_hash,
                    // vLLM extra_keys exposes MM start offsets but not MM lengths.
                    // Dynamo's block hash only depends on mm_hash today, so keep
                    // offsets empty rather than inventing a synthetic range.
                    offsets: vec![],
                })
                .collect();

            if mm_objects.is_empty() {
                None
            } else {
                Some(BlockExtraInfo { mm_objects })
            }
        })
        .collect();

    if infos.iter().all(|i| i.is_none()) {
        return None;
    }

    Some(infos)
}

/// Propagates `cache_namespace` from parent blocks to child `BlockStored`
/// events that don't carry their own namespace on the wire.
///
/// vLLM only stamps `cache_salt` into the FIRST block of a request (see
/// `_gen_*_extra_hash_keys` in vLLM's `kv_cache_utils.py`), because its block
/// hash is Merkle-chained through `parent_block_hash` and the salt only has
/// to be mixed in once. Dynamo's block hash is not parent-chained — salt is
/// mixed into an XXH3 seed and applied per block — so every stored block must
/// know its cache_namespace up front or the indexer's `tokens_hash` will
/// diverge from the router's query-side hash.
///
/// This struct is a thin lookup from external block hash to cache_namespace:
/// maintain one instance per worker's event stream, feed every incoming
/// `RawKvEvent` through [`Self::process`] before `convert_event`, and the
/// `cache_namespace` slot on each event will be populated from the parent
/// chain when the producer (i.e. vLLM) omits it.
///
/// TRT-LLM stamps `cache_salt` on every event as a top-level field, so for
/// the TRT-LLM path the propagator is effectively a no-op that just records
/// the already-present namespace.
#[derive(Debug, Default)]
pub struct CacheNamespacePropagator {
    // Live map: external block hash -> cache_namespace tagged for that block.
    // Bounded by number of live blocks on the worker (GPU memory / block_size).
    by_block: std::collections::HashMap<u64, String>,
}

impl CacheNamespacePropagator {
    pub fn new() -> Self {
        Self::default()
    }

    /// Apply parent-chain inheritance to a `RawKvEvent` in place and update
    /// internal state so descendants can inherit too.
    pub fn process(&mut self, event: &mut RawKvEvent) {
        match event {
            RawKvEvent::BlockStored {
                block_hashes,
                parent_block_hash,
                cache_namespace,
                ..
            } => {
                if cache_namespace.is_none()
                    && let Some(parent) = parent_block_hash
                    && let Some(inherited) = self.by_block.get(&parent.into_u64())
                {
                    *cache_namespace = Some(inherited.clone());
                }
                if let Some(ns) = cache_namespace.as_deref() {
                    for bh in block_hashes.iter() {
                        self.by_block.insert(bh.into_u64(), ns.to_string());
                    }
                }
            }
            RawKvEvent::BlockRemoved { block_hashes, .. } => {
                for bh in block_hashes.iter() {
                    self.by_block.remove(&bh.into_u64());
                }
            }
            RawKvEvent::AllBlocksCleared => {
                self.by_block.clear();
            }
        }
    }

    #[cfg(test)]
    pub fn len(&self) -> usize {
        self.by_block.len()
    }
}

/// Extract `cache_salt` from vLLM `BlockStored.extra_keys`.
///
/// vLLM only stamps `cache_salt` into the FIRST block's extra_keys tuple
/// (`extra_keys[0]`). The tuple order is `lora_name + mm_keys + cache_salt +
/// prompt_embeds_bytes` (see `_gen_*_extra_hash_keys` in vLLM's
/// `kv_cache_utils.py`). To recover the salt we scan the first block's keys
/// and pick the plain-string item that is not a 64-char hex MM digest and not
/// equal to the top-level `lora_name` (passed as `lora_name_hint`).
///
/// vLLM's TRT-LLM counterpart stamps `cache_salt` as a top-level field on every
/// event (see `ZmqKvEventPublisher` in the TRT-LLM publisher), so this helper
/// is only the vLLM-path fallback.
pub fn extract_cache_namespace_from_extra_keys(
    extra_keys: Option<&Vec<Option<Vec<ExtraKeyItem>>>>,
    lora_name_hint: Option<&str>,
) -> Option<String> {
    let first_block_keys = extra_keys?.first()?.as_ref()?;
    for item in first_block_keys {
        if let ExtraKeyItem::Hash(s) = item {
            if parse_mm_hash_from_extra_key(s).is_some() {
                continue;
            }
            if lora_name_hint == Some(s.as_str()) {
                continue;
            }
            return Some(s.clone());
        }
    }
    None
}

// -------------------------------------------------------------------------
// Custom deserializer for RawKvEvent --------------------------------------
// -------------------------------------------------------------------------

/// Our producers use msgspec with `tag=True` and `array_like=True`, which
/// encodes each event as either a tagged map or a tagged tuple. To be tolerant of
/// additional fields that may be appended in the future, we implement a custom
/// deserializer that ignores unknown keys and any extra positional elements.
///
/// This keeps us compatible with older payloads while safely
/// accepting newer ones that include extra metadata.
impl<'de> Deserialize<'de> for RawKvEvent {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: Deserializer<'de>,
    {
        deserializer.deserialize_any(RawKvEventVisitor)
    }
}

struct RawKvEventVisitor;

impl<'de> Visitor<'de> for RawKvEventVisitor {
    type Value = RawKvEvent;

    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str("a kv event encoded as a tagged map or sequence")
    }

    fn visit_map<A>(self, mut map: A) -> Result<Self::Value, A::Error>
    where
        A: MapAccess<'de>,
    {
        let mut event_type: Option<String> = None;
        let mut block_hashes: Option<Vec<BlockHashValue>> = None;
        let mut parent_block_hash: Option<Option<BlockHashValue>> = None;
        let mut token_ids: Option<KvTokenIds> = None;
        let mut block_size: Option<usize> = None;
        let mut medium: Option<Option<String>> = None;
        let mut lora_name: Option<Option<String>> = None;
        let mut extra_keys: Option<Option<Vec<Option<Vec<ExtraKeyItem>>>>> = None;
        let mut block_mm_infos: Option<Option<Vec<Option<BlockExtraInfo>>>> = None;
        let mut cache_namespace: Option<Option<String>> = None;

        while let Some(key) = map.next_key::<String>()? {
            match key.as_str() {
                "type" => {
                    event_type = Some(map.next_value()?);
                }
                "block_hashes" => {
                    block_hashes = Some(map.next_value()?);
                }
                "parent_block_hash" => {
                    parent_block_hash = Some(map.next_value()?);
                }
                "token_ids" => {
                    token_ids = Some(map.next_value()?);
                }
                "block_size" => {
                    block_size = Some(map.next_value()?);
                }
                "medium" => {
                    medium = Some(map.next_value()?);
                }
                "lora_name" => {
                    lora_name = Some(map.next_value()?);
                }
                "extra_keys" => {
                    extra_keys = Some(map.next_value()?);
                }
                "block_mm_infos" => {
                    block_mm_infos = Some(map.next_value()?);
                }
                "cache_salt" => {
                    cache_namespace = Some(map.next_value()?);
                }
                _ => {
                    map.next_value::<IgnoredAny>()?;
                }
            }
        }

        match event_type.as_deref() {
            Some("BlockStored") => {
                let block_hashes =
                    block_hashes.ok_or_else(|| de::Error::missing_field("block_hashes"))?;
                let token_ids = token_ids.ok_or_else(|| de::Error::missing_field("token_ids"))?;
                let (raw_token_ids, is_eagle) = match token_ids {
                    KvTokenIds::Single(tids) => (tids, false),
                    KvTokenIds::Bigram(tids) => {
                        let mut new_tids: Vec<u32> = tids.iter().map(|&(first, _)| first).collect();
                        if !tids.is_empty() {
                            let last_token = tids.last().map(|&(_, second)| second).unwrap();
                            new_tids.push(last_token);
                        }
                        (new_tids, true)
                    }
                };
                let block_size =
                    block_size.ok_or_else(|| de::Error::missing_field("block_size"))?;
                let lora_name = lora_name.unwrap_or(None);
                let extra_keys = extra_keys.unwrap_or(None);
                // Top-level cache_salt (TRT-LLM style) wins; otherwise fall back
                // to scanning vLLM's per-block extra_keys.
                let cache_namespace = cache_namespace.unwrap_or(None).or_else(|| {
                    extract_cache_namespace_from_extra_keys(
                        extra_keys.as_ref(),
                        lora_name.as_deref(),
                    )
                });
                let block_mm_infos = block_mm_infos
                    .unwrap_or(None)
                    .or_else(|| extra_keys_to_block_mm_infos(extra_keys));
                Ok(RawKvEvent::BlockStored {
                    block_hashes,
                    parent_block_hash: parent_block_hash.unwrap_or(None),
                    token_ids: raw_token_ids,
                    block_size,
                    medium: medium.unwrap_or(None),
                    lora_name,
                    block_mm_infos,
                    is_eagle: Some(is_eagle),
                    cache_namespace,
                })
            }
            Some("BlockRemoved") => {
                let block_hashes =
                    block_hashes.ok_or_else(|| de::Error::missing_field("block_hashes"))?;
                Ok(RawKvEvent::BlockRemoved {
                    block_hashes,
                    medium: medium.unwrap_or(None),
                })
            }
            Some("AllBlocksCleared") => Ok(RawKvEvent::AllBlocksCleared),
            Some(other) => Err(de::Error::unknown_variant(
                other,
                &["BlockStored", "BlockRemoved", "AllBlocksCleared"],
            )),
            None => Err(de::Error::missing_field("type")),
        }
    }

    fn visit_seq<A>(self, mut seq: A) -> Result<Self::Value, A::Error>
    where
        A: SeqAccess<'de>,
    {
        let tag: Option<String> = seq.next_element()?;
        let Some(tag) = tag else {
            return Err(de::Error::invalid_length(
                0,
                &"sequence must start with event tag",
            ));
        };

        match tag.as_str() {
            "BlockStored" => {
                let block_hashes: Vec<BlockHashValue> = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(1, &"missing block_hashes"))?;
                let parent_block_hash: Option<BlockHashValue> = seq.next_element()?.unwrap_or(None);
                let token_ids: KvTokenIds = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(3, &"missing token_ids"))?;
                let block_size: usize = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(4, &"missing block_size"))?;
                // Position 5 was lora_id in older formats; consume and discard for compat
                let _lora_id: Option<u64> = seq.next_element()?.unwrap_or(None);
                let medium: Option<String> = seq.next_element()?.unwrap_or(None);
                let lora_name: Option<String> = seq.next_element()?.unwrap_or(None);
                let extra_keys: Option<Vec<Option<Vec<ExtraKeyItem>>>> =
                    seq.next_element()?.unwrap_or(None);
                let block_mm_infos: Option<Vec<Option<BlockExtraInfo>>> =
                    seq.next_element()?.unwrap_or(None);
                let cache_namespace: Option<String> = seq.next_element()?.unwrap_or(None);

                while seq.next_element::<IgnoredAny>()?.is_some() {}

                // Top-level cache_salt wins; otherwise try vLLM-style extra_keys.
                let cache_namespace = cache_namespace.or_else(|| {
                    extract_cache_namespace_from_extra_keys(
                        extra_keys.as_ref(),
                        lora_name.as_deref(),
                    )
                });
                let block_mm_infos =
                    block_mm_infos.or_else(|| extra_keys_to_block_mm_infos(extra_keys));

                let (raw_token_ids, is_eagle) = match token_ids {
                    KvTokenIds::Single(tids) => (tids, false),
                    KvTokenIds::Bigram(tids) => {
                        let mut new_tids: Vec<u32> = tids.iter().map(|&(first, _)| first).collect();
                        if !tids.is_empty() {
                            let last_token = tids.last().map(|&(_, second)| second).unwrap();
                            new_tids.push(last_token);
                        }
                        (new_tids, true)
                    }
                };

                Ok(RawKvEvent::BlockStored {
                    block_hashes,
                    parent_block_hash,
                    token_ids: raw_token_ids,
                    block_size,
                    medium,
                    lora_name,
                    block_mm_infos,
                    is_eagle: Some(is_eagle),
                    cache_namespace,
                })
            }
            "BlockRemoved" => {
                let block_hashes: Vec<BlockHashValue> = seq
                    .next_element()?
                    .ok_or_else(|| de::Error::invalid_length(1, &"missing block_hashes"))?;
                let medium: Option<String> = seq.next_element()?.unwrap_or(None);

                while seq.next_element::<IgnoredAny>()?.is_some() {}

                Ok(RawKvEvent::BlockRemoved {
                    block_hashes,
                    medium,
                })
            }
            "AllBlocksCleared" => {
                while seq.next_element::<IgnoredAny>()?.is_some() {}
                Ok(RawKvEvent::AllBlocksCleared)
            }
            other => Err(de::Error::unknown_variant(
                other,
                &["BlockStored", "BlockRemoved", "AllBlocksCleared"],
            )),
        }
    }
}

// -------------------------------------------------------------------------
// Event conversion --------------------------------------------------------
// -------------------------------------------------------------------------

/// Convert a raw event coming from the ZMQ channel into a placement-aware worker event.
pub fn convert_event(
    raw: RawKvEvent,
    event_id: u64,
    kv_block_size: u32,
    worker: WorkerWithDpRank,
    warning_count: &Arc<AtomicU32>,
) -> PlacementEvent {
    let storage_tier = match &raw {
        RawKvEvent::BlockStored { medium, .. } | RawKvEvent::BlockRemoved { medium, .. } => {
            StorageTier::from_kv_medium_or_default(medium.as_deref())
        }
        RawKvEvent::AllBlocksCleared => StorageTier::Device,
    };
    let dp_rank = worker.dp_rank;
    let event = match raw {
        RawKvEvent::BlockStored {
            block_hashes,
            parent_block_hash,
            token_ids,
            block_size,
            lora_name,
            block_mm_infos,
            medium: _,
            is_eagle,
            cache_namespace,
        } => {
            // Reject self-referencing blocks: all block hashes (including parent) must be unique.
            {
                let mut seen = HashSet::with_capacity(block_hashes.len() + 1);
                if let Some(parent) = parent_block_hash {
                    seen.insert(parent.into_u64());
                }
                let has_duplicate = block_hashes.iter().any(|h| !seen.insert(h.into_u64()));
                if has_duplicate {
                    tracing::warn!(
                        event_id,
                        "Self-referencing block detected: duplicate hash in store event; dropping"
                    );
                    // Return an empty Removed instead of Cleared to avoid nuking
                    // the worker's entire index state. An empty Removed is a no-op
                    // in the radix tree (zero iterations, returns Ok(())).
                    return PlacementEvent::new(
                        Placement::local_worker(worker.worker_id, worker.dp_rank, storage_tier),
                        KvCacheEvent {
                            event_id,
                            data: KvCacheEventData::Removed(KvCacheRemoveData {
                                block_hashes: vec![],
                            }),
                            dp_rank,
                        },
                    );
                }
            }

            let num_block_tokens = vec![block_size as u64; block_hashes.len()];
            let block_hashes_u64: Vec<u64> = block_hashes
                .into_iter()
                .map(BlockHashValue::into_u64)
                .collect();
            KvCacheEvent {
                event_id,
                data: KvCacheEventData::Stored(KvCacheStoreData {
                    parent_hash: parent_block_hash
                        .map(BlockHashValue::into_u64)
                        .map(ExternalSequenceBlockHash::from),
                    blocks: create_stored_blocks(
                        kv_block_size,
                        &token_ids,
                        &num_block_tokens,
                        &block_hashes_u64,
                        lora_name.as_deref(),
                        warning_count,
                        block_mm_infos.as_deref(),
                        is_eagle,
                        cache_namespace.as_deref(),
                    ),
                }),
                dp_rank,
            }
        }
        RawKvEvent::BlockRemoved { block_hashes, .. } => {
            let hashes = block_hashes
                .into_iter()
                .map(BlockHashValue::into_u64)
                .map(ExternalSequenceBlockHash::from)
                .collect();
            KvCacheEvent {
                event_id,
                data: KvCacheEventData::Removed(KvCacheRemoveData {
                    block_hashes: hashes,
                }),
                dp_rank,
            }
        }
        RawKvEvent::AllBlocksCleared => KvCacheEvent {
            event_id,
            data: KvCacheEventData::Cleared,
            dp_rank,
        },
    };

    PlacementEvent::new(
        Placement::local_worker(worker.worker_id, worker.dp_rank, storage_tier),
        event,
    )
}

pub fn create_stored_block_from_parts(
    kv_block_size: u32,
    block_hash: u64,
    token_ids: &[u32],
    lora_name: Option<&str>,
    mm_extra_info: Option<BlockExtraInfo>,
    is_eagle: Option<bool>,
    cache_namespace: Option<&str>,
) -> KvCacheStoredBlockData {
    let block_mm_infos = mm_extra_info.as_ref().map(|info| vec![Some(info.clone())]);
    let tokens_hash = compute_block_hash_for_seq(
        token_ids,
        kv_block_size,
        BlockHashOptions {
            block_mm_infos: block_mm_infos.as_deref(),
            lora_name,
            is_eagle,
            cache_namespace,
        },
    )[0];

    tracing::trace!(
        "Creating stored block: external_block_hash={}, tokens_hash={}, token_ids={:?}, kv_block_size={}, mm_extra_info={:?}",
        block_hash,
        tokens_hash.0,
        token_ids,
        kv_block_size,
        mm_extra_info
    );
    KvCacheStoredBlockData {
        block_hash: ExternalSequenceBlockHash::from(block_hash),
        tokens_hash,
        mm_extra_info,
    }
}

#[allow(clippy::too_many_arguments)]
pub fn create_stored_blocks(
    kv_block_size: u32,
    token_ids: &[u32],
    num_block_tokens: &[u64],
    block_hashes: &[u64],
    lora_name: Option<&str>,
    warning_count: &Arc<AtomicU32>,
    block_mm_infos: Option<&[Option<BlockExtraInfo>]>,
    is_eagle: Option<bool>,
    cache_namespace: Option<&str>,
) -> Vec<KvCacheStoredBlockData> {
    let mut blocks: Vec<KvCacheStoredBlockData> = Vec::new();

    let mut token_offset: usize = 0;
    let append = is_eagle.unwrap_or(false) as usize;

    for (block_idx, (num_tokens_it, block_hash_it)) in
        num_block_tokens.iter().zip(block_hashes.iter()).enumerate()
    {
        if *num_tokens_it != kv_block_size as u64 {
            if warning_count.fetch_add(1, Ordering::Relaxed) < 3 {
                tracing::warn!(
                    "Block not published. Block size must be {} tokens to be published. Block size is: {}",
                    kv_block_size,
                    *num_tokens_it
                );
            }
            break;
        }

        let end = token_offset + append + *num_tokens_it as usize;
        if end > token_ids.len() {
            if warning_count.fetch_add(1, Ordering::Relaxed) < 3 {
                tracing::warn!(
                    "Block not published. token_ids too short: need {}, got {}",
                    end,
                    token_ids.len()
                );
            }
            break;
        }

        let tokens = &token_ids[token_offset..end];
        let mm_extra_info = block_mm_infos
            .and_then(|infos| infos.get(block_idx))
            .and_then(|opt| opt.clone());

        blocks.push(create_stored_block_from_parts(
            kv_block_size,
            *block_hash_it,
            tokens,
            lora_name,
            mm_extra_info,
            is_eagle,
            cache_namespace,
        ));
        token_offset += *num_tokens_it as usize;
    }

    blocks
}

#[cfg(test)]
mod tests {
    use std::sync::Arc;
    use std::sync::atomic::AtomicU32;

    use rmp_serde::{from_slice, to_vec};

    use super::*;

    #[test]
    fn test_deserialize_bigram_block_stored_sequence() {
        let raw_event = (
            "BlockStored",
            vec![BlockHashValue::Unsigned(11), BlockHashValue::Unsigned(12)],
            Option::<BlockHashValue>::None,
            vec![(10u32, 11u32), (11, 12), (12, 13), (13, 14)],
            2usize,
            Option::<u64>::None,
            Option::<String>::None,
            Option::<String>::None,
        );
        let encoded = to_vec(&raw_event).unwrap();
        let event: RawKvEvent = from_slice(&encoded).unwrap();

        match event {
            RawKvEvent::BlockStored {
                token_ids,
                block_size,
                is_eagle,
                ..
            } => {
                assert_eq!(token_ids, vec![10, 11, 12, 13, 14]);
                assert_eq!(block_size, 2);
                assert_eq!(is_eagle, Some(true));
            }
            other => panic!("expected BlockStored, got {other:?}"),
        }
    }

    #[test]
    fn test_convert_event_bigram_emits_eagle_windows() {
        let raw_event = RawKvEvent::BlockStored {
            block_hashes: vec![BlockHashValue::Unsigned(21), BlockHashValue::Unsigned(22)],
            parent_block_hash: None,
            token_ids: vec![10, 11, 12, 13, 14],
            block_size: 2,
            medium: None,
            lora_name: None,
            block_mm_infos: None,
            is_eagle: Some(true),
            cache_namespace: None,
        };
        let warning_count = Arc::new(AtomicU32::new(0));
        let placement_event =
            convert_event(raw_event, 7, 2, WorkerWithDpRank::new(3, 0), &warning_count);

        match placement_event.event.data {
            KvCacheEventData::Stored(store_data) => {
                assert_eq!(store_data.blocks.len(), 2);
                assert_eq!(
                    store_data.blocks[0].block_hash,
                    ExternalSequenceBlockHash(21)
                );
                assert_eq!(
                    store_data.blocks[1].block_hash,
                    ExternalSequenceBlockHash(22)
                );

                let expected_first = compute_block_hash_for_seq(
                    &[10, 11, 12],
                    2,
                    BlockHashOptions {
                        is_eagle: Some(true),
                        ..Default::default()
                    },
                );
                let expected_second = compute_block_hash_for_seq(
                    &[12, 13, 14],
                    2,
                    BlockHashOptions {
                        is_eagle: Some(true),
                        ..Default::default()
                    },
                );

                assert_eq!(store_data.blocks[0].tokens_hash, expected_first[0]);
                assert_eq!(store_data.blocks[1].tokens_hash, expected_second[0]);
            }
            other => panic!("expected Stored event, got {other:?}"),
        }
    }

    #[test]
    fn test_deserialize_block_stored_with_cache_salt_map() {
        // Wire-format key stays `cache_salt` (TRT-LLM/vLLM compat); internally
        // we deserialize it into the `cache_namespace` Rust field.
        let json = serde_json::json!({
            "type": "BlockStored",
            "block_hashes": [100i64],
            "parent_block_hash": null,
            "token_ids": [1u32, 2, 3, 4],
            "block_size": 4,
            "cache_salt": "tenant-A"
        });
        let encoded = serde_json::to_vec(&json).unwrap();
        let event: RawKvEvent = serde_json::from_slice(&encoded).unwrap();

        match event {
            RawKvEvent::BlockStored {
                cache_namespace, ..
            } => {
                assert_eq!(cache_namespace.as_deref(), Some("tenant-A"));
            }
            other => panic!("expected BlockStored, got {other:?}"),
        }
    }

    #[test]
    fn test_deserialize_block_stored_without_cache_salt_map() {
        let json = serde_json::json!({
            "type": "BlockStored",
            "block_hashes": [100i64],
            "parent_block_hash": null,
            "token_ids": [1u32, 2, 3, 4],
            "block_size": 4
        });
        let encoded = serde_json::to_vec(&json).unwrap();
        let event: RawKvEvent = serde_json::from_slice(&encoded).unwrap();

        match event {
            RawKvEvent::BlockStored {
                cache_namespace, ..
            } => {
                assert_eq!(cache_namespace, None);
            }
            other => panic!("expected BlockStored, got {other:?}"),
        }
    }

    /// vLLM emits cache_salt inside the first block's extra_keys tuple rather
    /// than as a top-level field; make sure we recover it.
    #[test]
    fn test_deserialize_vllm_cache_salt_from_extra_keys_map() {
        let json = serde_json::json!({
            "type": "BlockStored",
            "block_hashes": [100i64, 101i64],
            "parent_block_hash": null,
            "token_ids": [1u32, 2, 3, 4, 5, 6, 7, 8],
            "block_size": 4,
            "extra_keys": [["tenant-vllm"], null],
        });
        let encoded = serde_json::to_vec(&json).unwrap();
        let event: RawKvEvent = serde_json::from_slice(&encoded).unwrap();

        match event {
            RawKvEvent::BlockStored {
                cache_namespace, ..
            } => {
                assert_eq!(cache_namespace.as_deref(), Some("tenant-vllm"));
            }
            other => panic!("expected BlockStored, got {other:?}"),
        }
    }

    /// When a vLLM request uses LoRA, lora_name shows up both as a top-level
    /// field AND as the first entry of every block's extra_keys tuple. Make
    /// sure we filter that out and keep only the cache_salt.
    #[test]
    fn test_deserialize_vllm_cache_salt_with_lora_filters_lora_name() {
        let json = serde_json::json!({
            "type": "BlockStored",
            "block_hashes": [100i64],
            "parent_block_hash": null,
            "token_ids": [1u32, 2, 3, 4],
            "block_size": 4,
            "lora_name": "lora-x",
            "extra_keys": [["lora-x", "tenant-vllm"]],
        });
        let encoded = serde_json::to_vec(&json).unwrap();
        let event: RawKvEvent = serde_json::from_slice(&encoded).unwrap();

        match event {
            RawKvEvent::BlockStored {
                cache_namespace,
                lora_name,
                ..
            } => {
                assert_eq!(lora_name.as_deref(), Some("lora-x"));
                assert_eq!(cache_namespace.as_deref(), Some("tenant-vllm"));
            }
            other => panic!("expected BlockStored, got {other:?}"),
        }
    }

    /// Multimodal + cache_salt: the 64-char hex MM digest should not be picked
    /// up as cache_salt, and block_mm_infos should still populate.
    #[test]
    fn test_deserialize_vllm_cache_salt_with_mm_hash() {
        let mm_hash = "0123456789abcdef".repeat(4);
        assert_eq!(mm_hash.len(), 64);
        let json = serde_json::json!({
            "type": "BlockStored",
            "block_hashes": [100i64],
            "parent_block_hash": null,
            "token_ids": [1u32, 2, 3, 4],
            "block_size": 4,
            "extra_keys": [[mm_hash.clone(), "tenant-vllm"]],
        });
        let encoded = serde_json::to_vec(&json).unwrap();
        let event: RawKvEvent = serde_json::from_slice(&encoded).unwrap();

        match event {
            RawKvEvent::BlockStored {
                cache_namespace,
                block_mm_infos,
                ..
            } => {
                assert_eq!(cache_namespace.as_deref(), Some("tenant-vllm"));
                let infos = block_mm_infos.expect("mm infos present");
                let first = infos[0].as_ref().expect("first block has mm info");
                assert_eq!(first.mm_objects.len(), 1);
            }
            other => panic!("expected BlockStored, got {other:?}"),
        }
    }

    /// Top-level cache_salt must win over extra_keys fallback (TRT-LLM path).
    #[test]
    fn test_deserialize_top_level_cache_salt_wins_over_extra_keys() {
        let json = serde_json::json!({
            "type": "BlockStored",
            "block_hashes": [100i64],
            "parent_block_hash": null,
            "token_ids": [1u32, 2, 3, 4],
            "block_size": 4,
            "cache_salt": "winner",
            "extra_keys": [["loser"]],
        });
        let encoded = serde_json::to_vec(&json).unwrap();
        let event: RawKvEvent = serde_json::from_slice(&encoded).unwrap();

        match event {
            RawKvEvent::BlockStored {
                cache_namespace, ..
            } => {
                assert_eq!(cache_namespace.as_deref(), Some("winner"));
            }
            other => panic!("expected BlockStored, got {other:?}"),
        }
    }

    /// vLLM's msgspec emits events as tuples (array_like=True). Verify the
    /// sequence visitor also falls back to extra_keys.
    #[test]
    fn test_deserialize_vllm_cache_salt_from_extra_keys_seq() {
        // Tuple layout: (tag, block_hashes, parent_block_hash, token_ids,
        //                block_size, lora_id, medium, lora_name, extra_keys)
        let raw_event = (
            "BlockStored",
            vec![BlockHashValue::Unsigned(42)],
            Option::<BlockHashValue>::None,
            vec![1u32, 2, 3, 4],
            4usize,
            Option::<u64>::None,  // lora_id (deprecated)
            Option::<String>::None, // medium
            Option::<String>::None, // lora_name
            Some(vec![Some(vec![ExtraKeyItemForTest::S(
                "tenant-seq".to_string(),
            )])]),
        );
        let encoded = rmp_serde::to_vec(&raw_event).unwrap();
        let event: RawKvEvent = rmp_serde::from_slice(&encoded).unwrap();

        match event {
            RawKvEvent::BlockStored {
                cache_namespace, ..
            } => {
                assert_eq!(cache_namespace.as_deref(), Some("tenant-seq"));
            }
            other => panic!("expected BlockStored, got {other:?}"),
        }
    }

    /// Helper wrapper to serialize an `ExtraKeyItem::Hash` via msgpack in tests
    /// without pulling in `Serialize` on the production enum.
    #[derive(serde::Serialize)]
    #[serde(untagged)]
    enum ExtraKeyItemForTest {
        S(String),
    }

    fn stored(
        block_hashes: Vec<u64>,
        parent: Option<u64>,
        cache_namespace: Option<&str>,
    ) -> RawKvEvent {
        RawKvEvent::BlockStored {
            block_hashes: block_hashes
                .into_iter()
                .map(BlockHashValue::Unsigned)
                .collect(),
            parent_block_hash: parent.map(BlockHashValue::Unsigned),
            token_ids: vec![0u32; 4],
            block_size: 4,
            medium: None,
            lora_name: None,
            block_mm_infos: None,
            is_eagle: Some(false),
            cache_namespace: cache_namespace.map(str::to_owned),
        }
    }

    /// Child BlockStored without its own namespace must inherit from parent.
    #[test]
    fn test_propagator_inherits_from_parent() {
        let mut prop = CacheNamespacePropagator::new();

        let mut first = stored(vec![10, 11], None, Some("tenant-A"));
        prop.process(&mut first);
        match &first {
            RawKvEvent::BlockStored {
                cache_namespace, ..
            } => assert_eq!(cache_namespace.as_deref(), Some("tenant-A")),
            _ => panic!(),
        }

        let mut second = stored(vec![12], Some(11), None);
        prop.process(&mut second);
        match &second {
            RawKvEvent::BlockStored {
                cache_namespace, ..
            } => assert_eq!(cache_namespace.as_deref(), Some("tenant-A")),
            _ => panic!(),
        }

        // Grandchild chain should still inherit.
        let mut third = stored(vec![13], Some(12), None);
        prop.process(&mut third);
        match &third {
            RawKvEvent::BlockStored {
                cache_namespace, ..
            } => assert_eq!(cache_namespace.as_deref(), Some("tenant-A")),
            _ => panic!(),
        }
    }

    /// Events without any namespace stay unnamespaced.
    #[test]
    fn test_propagator_no_namespace_is_noop() {
        let mut prop = CacheNamespacePropagator::new();

        let mut first = stored(vec![20, 21], None, None);
        prop.process(&mut first);
        let mut second = stored(vec![22], Some(21), None);
        prop.process(&mut second);

        for ev in &[first, second] {
            match ev {
                RawKvEvent::BlockStored {
                    cache_namespace, ..
                } => assert_eq!(cache_namespace, &None),
                _ => panic!(),
            }
        }
    }

    /// Two concurrent chains with different namespaces must not cross over.
    #[test]
    fn test_propagator_keeps_separate_chains_isolated() {
        let mut prop = CacheNamespacePropagator::new();

        let mut a0 = stored(vec![100], None, Some("A"));
        let mut b0 = stored(vec![200], None, Some("B"));
        prop.process(&mut a0);
        prop.process(&mut b0);

        let mut a1 = stored(vec![101], Some(100), None);
        let mut b1 = stored(vec![201], Some(200), None);
        prop.process(&mut a1);
        prop.process(&mut b1);

        match &a1 {
            RawKvEvent::BlockStored {
                cache_namespace, ..
            } => assert_eq!(cache_namespace.as_deref(), Some("A")),
            _ => panic!(),
        }
        match &b1 {
            RawKvEvent::BlockStored {
                cache_namespace, ..
            } => assert_eq!(cache_namespace.as_deref(), Some("B")),
            _ => panic!(),
        }
    }

    /// Event's own namespace wins over an inherited one (child override).
    #[test]
    fn test_propagator_own_namespace_wins() {
        let mut prop = CacheNamespacePropagator::new();

        let mut first = stored(vec![30], None, Some("tenant-A"));
        prop.process(&mut first);
        let mut second = stored(vec![31], Some(30), Some("tenant-B"));
        prop.process(&mut second);
        match &second {
            RawKvEvent::BlockStored {
                cache_namespace, ..
            } => assert_eq!(cache_namespace.as_deref(), Some("tenant-B")),
            _ => panic!(),
        }

        // Grandchild inherits from the overridden namespace.
        let mut third = stored(vec![32], Some(31), None);
        prop.process(&mut third);
        match &third {
            RawKvEvent::BlockStored {
                cache_namespace, ..
            } => assert_eq!(cache_namespace.as_deref(), Some("tenant-B")),
            _ => panic!(),
        }
    }

    /// BlockRemoved should free namespace state so memory doesn't leak.
    #[test]
    fn test_propagator_block_removed_cleans_state() {
        let mut prop = CacheNamespacePropagator::new();

        let mut first = stored(vec![40, 41], None, Some("tenant-A"));
        prop.process(&mut first);
        assert_eq!(prop.len(), 2);

        let mut removed = RawKvEvent::BlockRemoved {
            block_hashes: vec![
                BlockHashValue::Unsigned(40),
                BlockHashValue::Unsigned(41),
            ],
            medium: None,
        };
        prop.process(&mut removed);
        assert_eq!(prop.len(), 0);
    }

    /// AllBlocksCleared drops everything.
    #[test]
    fn test_propagator_all_blocks_cleared() {
        let mut prop = CacheNamespacePropagator::new();

        let mut first = stored(vec![50], None, Some("tenant-A"));
        let mut second = stored(vec![60], None, Some("tenant-B"));
        prop.process(&mut first);
        prop.process(&mut second);
        assert!(prop.len() > 0);

        let mut cleared = RawKvEvent::AllBlocksCleared;
        prop.process(&mut cleared);
        assert_eq!(prop.len(), 0);
    }

    /// After full pipeline (propagator → convert_event), the child block's
    /// tokens_hash equals what `compute_block_hash_for_seq` would produce with
    /// the parent's namespace.
    #[test]
    fn test_propagator_end_to_end_makes_tokens_hash_salted() {
        let mut prop = CacheNamespacePropagator::new();
        let warning_count = Arc::new(AtomicU32::new(0));

        let mut first = RawKvEvent::BlockStored {
            block_hashes: vec![BlockHashValue::Unsigned(1000)],
            parent_block_hash: None,
            token_ids: vec![1u32, 2, 3, 4],
            block_size: 4,
            medium: None,
            lora_name: None,
            block_mm_infos: None,
            is_eagle: Some(false),
            cache_namespace: Some("tenant-A".to_string()),
        };
        prop.process(&mut first);
        let _ =
            convert_event(first, 0, 4, WorkerWithDpRank::new(1, 0), &warning_count);

        let mut child = RawKvEvent::BlockStored {
            block_hashes: vec![BlockHashValue::Unsigned(1001)],
            parent_block_hash: Some(BlockHashValue::Unsigned(1000)),
            token_ids: vec![5u32, 6, 7, 8],
            block_size: 4,
            medium: None,
            lora_name: None,
            block_mm_infos: None,
            is_eagle: Some(false),
            cache_namespace: None,
        };
        prop.process(&mut child);

        let placement = convert_event(
            child,
            1,
            4,
            WorkerWithDpRank::new(1, 0),
            &warning_count,
        );
        let expected = compute_block_hash_for_seq(
            &[5, 6, 7, 8],
            4,
            BlockHashOptions {
                cache_namespace: Some("tenant-A"),
                ..Default::default()
            },
        )[0];
        match placement.event.data {
            KvCacheEventData::Stored(store) => {
                assert_eq!(store.blocks[0].tokens_hash, expected);
            }
            _ => panic!("expected Stored"),
        }
    }

    #[test]
    fn test_convert_event_cache_namespace_affects_tokens_hash() {
        let token_ids = vec![1u32, 2, 3, 4];
        let block_hash = 42u64;
        let kv_block_size = 4u32;

        let unnamespaced = create_stored_block_from_parts(
            kv_block_size,
            block_hash,
            &token_ids,
            None,
            None,
            None,
            None,
        );
        let namespaced = create_stored_block_from_parts(
            kv_block_size,
            block_hash,
            &token_ids,
            None,
            None,
            None,
            Some("tenant-A"),
        );

        assert_ne!(
            unnamespaced.tokens_hash, namespaced.tokens_hash,
            "cache_namespace should produce different tokens_hash"
        );
    }
}
