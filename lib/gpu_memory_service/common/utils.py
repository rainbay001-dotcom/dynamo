# SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
# SPDX-License-Identifier: Apache-2.0

"""Shared utilities for GPU Memory Service."""

import logging
import os
import tempfile
from typing import NoReturn

logger = logging.getLogger(__name__)


# Canonical names for GMS-related environment variables. Defined here so
# operator code, launcher code, and engine integration code all reference
# one source of truth — keeping these in lockstep with the Go-side
# constants in deploy/operator/internal/gms/gms.go.
ENV_SCRATCH_KV_ENABLED = "DYN_GMS_SCRATCH_KV_ENABLED"
ENV_VMM_GRANULARITY = "DYN_GMS_VMM_GRANULARITY"
ENV_SCRATCH_SIZE = "DYN_GMS_SCRATCH_SIZE"

_TRUTHY = ("true", "1", "yes")
DEFAULT_SCRATCH_SIZE = 256 * 1024 * 1024


def is_truthy_env(name: str) -> bool:
    """True when the named env var is set to a recognized truthy string."""
    return os.environ.get(name, "").lower() in _TRUTHY


def is_scratch_kv_enabled() -> bool:
    """True when this engine should use two-phase (scratch → real) KV allocation."""
    return is_truthy_env(ENV_SCRATCH_KV_ENABLED)


def parse_byte_size(value: str) -> int:
    """Parse a byte size with optional KiB/MiB/GiB suffixes.

    Examples:
      - "268435456" -> 268435456
      - "256MiB"    -> 268435456
      - "256M"      -> 268435456
    """
    raw = value.strip()
    if not raw:
        raise ValueError("size must not be empty")

    normalized = raw.lower()
    suffixes = (
        ("gib", 1024**3),
        ("gb", 1024**3),
        ("g", 1024**3),
        ("mib", 1024**2),
        ("mb", 1024**2),
        ("m", 1024**2),
        ("kib", 1024),
        ("kb", 1024),
        ("k", 1024),
        ("b", 1),
    )
    multiplier = 1
    number = normalized
    for suffix, suffix_multiplier in suffixes:
        if normalized.endswith(suffix):
            multiplier = suffix_multiplier
            number = normalized[: -len(suffix)]
            break

    number = number.strip()
    if not number:
        raise ValueError(f"invalid size: {value!r}")
    try:
        parsed = int(number, 10)
    except ValueError as exc:
        raise ValueError(f"invalid size: {value!r}") from exc
    if parsed <= 0:
        raise ValueError(f"size must be positive, got {value!r}")
    return parsed * multiplier


def get_scratch_size() -> int:
    """Return the scratchpad size used for client-local scratch mappings."""
    raw = os.environ.get(ENV_SCRATCH_SIZE, "").strip()
    if not raw:
        return DEFAULT_SCRATCH_SIZE
    try:
        return parse_byte_size(raw)
    except ValueError:
        logger.warning(
            "Ignoring invalid %s=%r; using default %d bytes",
            ENV_SCRATCH_SIZE,
            raw,
            DEFAULT_SCRATCH_SIZE,
        )
        return DEFAULT_SCRATCH_SIZE


def fail(message: str, *args, exc_info=None) -> NoReturn:
    logger.critical(message, *args, exc_info=exc_info)
    logging.shutdown()
    os._exit(1)


_uuid_cache: dict[int, str] = {}


def invalidate_uuid_cache() -> None:
    """Clear cached GPU UUIDs. Call after CRIU restore when GPU assignment may change."""
    _uuid_cache.clear()


def get_socket_path(device: int, tag: str = "weights") -> str:
    """Get GMS socket path for the given CUDA device and tag.

    The socket path is based on GPU UUID, making it stable across different
    CUDA_VISIBLE_DEVICES configurations. UUIDs are cached per device index.

    Args:
        device: CUDA device index.

    Returns:
        Socket path
        (e.g., "<tempdir>/gms_GPU-12345678-1234-1234-1234-123456789abc_weights.sock").
    """
    uuid = _uuid_cache.get(device)
    if uuid is None:
        import pynvml  # deferred: not available in all environments

        pynvml.nvmlInit()
        try:
            handle = pynvml.nvmlDeviceGetHandleByIndex(device)
            uuid = pynvml.nvmlDeviceGetUUID(handle)
        finally:
            pynvml.nvmlShutdown()
        _uuid_cache[device] = uuid
    socket_dir = os.environ.get("GMS_SOCKET_DIR") or tempfile.gettempdir()
    return os.path.join(socket_dir, f"gms_{uuid}_{tag}.sock")
