# SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
# SPDX-License-Identifier: Apache-2.0

"""Opt-in request lifecycle JSONL tracing.

This module is intentionally small and dependency-free so hot paths can call it
behind an environment gate without importing tracing frameworks.
"""

from __future__ import annotations

import json
import logging
import os
import threading
import time
from pathlib import Path
from typing import Any

TRACE_MARKER = "dynamo_request_trace"
TRACE_ENV = "DYN_REQUEST_TRACE_LOGGING"
TRACE_DIR_ENV = "DYN_REQUEST_TRACE_DIR"
TRACE_FILE_ENV = "DYN_REQUEST_TRACE_FILE"

_FILE_HANDLES: dict[Path, Any] = {}
_FILE_LOCK = threading.Lock()


def request_trace_enabled() -> bool:
    return os.environ.get(TRACE_ENV, "").lower() in {"1", "true", "yes", "on"}


def _trace_file_path(file_prefix: str) -> Path | None:
    explicit_path = os.environ.get(TRACE_FILE_ENV)
    if explicit_path:
        return Path(explicit_path)

    explicit_dir = os.environ.get(TRACE_DIR_ENV)
    if explicit_dir:
        return Path(explicit_dir) / f"{file_prefix}_{os.getpid()}.jsonl"

    log_dir = Path("/logs")
    if log_dir.is_dir():
        return log_dir / f"{file_prefix}_{os.getpid()}.jsonl"
    return None


def _write_jsonl(path: Path, payload: dict[str, Any]) -> None:
    line = json.dumps(payload, separators=(",", ":"), sort_keys=True)
    with _FILE_LOCK:
        handle = _FILE_HANDLES.get(path)
        if handle is None:
            path.parent.mkdir(parents=True, exist_ok=True)
            handle = path.open("a", encoding="utf-8", buffering=1)
            _FILE_HANDLES[path] = handle
        handle.write(f"{line}\n")


def trace_event(
    logger: logging.Logger,
    event: str,
    request_id: str | None,
    *,
    file_prefix: str = "dynamo_request_trace",
    **fields: Any,
) -> None:
    """Emit one trace event to logs and, when possible, a JSONL sidecar file."""
    if not request_trace_enabled() or not request_id:
        return

    payload = {
        "event": event,
        "request_id": str(request_id),
        "wall_time_ns": time.time_ns(),
        "pid": os.getpid(),
    }
    payload.update({key: value for key, value in fields.items() if value is not None})

    try:
        logger.info(
            "%s %s",
            TRACE_MARKER,
            json.dumps(payload, separators=(",", ":"), sort_keys=True),
        )
        path = _trace_file_path(file_prefix)
        if path is not None:
            _write_jsonl(path, payload)
    except Exception:
        logger.debug("failed to write request trace event", exc_info=True)
