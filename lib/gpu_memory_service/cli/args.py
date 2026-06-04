# SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
# SPDX-License-Identifier: Apache-2.0

"""Argument parsing for GPU Memory Service server."""

import argparse
import logging
import os
from dataclasses import dataclass
from typing import Optional

from gpu_memory_service.common.utils import (
    DEFAULT_SCRATCH_SIZE,
    ENV_SCRATCH_SIZE,
    get_socket_path,
    parse_byte_size,
)

logger = logging.getLogger(__name__)


@dataclass
class Config:
    """Configuration for GPU Memory Service server."""

    device: int
    tag: str
    socket_path: str
    alloc_retry_interval: float
    alloc_retry_timeout: Optional[float]
    scratch_size: int
    verbose: bool


def parse_args() -> Config:
    """Parse command line arguments for GPU Memory Service server."""
    parser = argparse.ArgumentParser(
        description="GPU Memory Service allocation server."
    )

    parser.add_argument(
        "--device",
        type=int,
        required=True,
        help="CUDA device ID to manage memory for.",
    )
    parser.add_argument(
        "--tag",
        type=str,
        default="weights",
        help="Logical GMS tag for this server (default: weights).",
    )
    parser.add_argument(
        "--socket-path",
        type=str,
        default=None,
        help="Path for Unix domain socket. Default uses GPU UUID for stability.",
    )
    parser.add_argument(
        "--verbose",
        "-v",
        action="store_true",
        help="Enable verbose logging.",
    )
    parser.add_argument(
        "--alloc-retry-interval",
        type=float,
        default=0.5,
        help="Seconds to sleep between allocation retries on CUDA OOM (default: 0.5).",
    )
    parser.add_argument(
        "--alloc-retry-timeout",
        type=float,
        default=60.0,
        help="Max seconds to wait for allocation retries before failing (default: 60.0). "
        "Pass an explicit large value if you need essentially-unbounded retry.",
    )
    parser.add_argument(
        "--scratch-size",
        type=parse_byte_size,
        default=None,
        help=(
            "Client-local scratchpad size for scratch aliases. This value is "
            "also used as the scratch alias granularity. Supports byte values or "
            "KiB/MiB/GiB suffixes (default: 256MiB)."
        ),
    )

    args = parser.parse_args()

    # Use UUID-based socket path by default (stable across CUDA_VISIBLE_DEVICES)
    socket_path = args.socket_path or get_socket_path(args.device, args.tag)
    if args.alloc_retry_interval <= 0:
        parser.error("--alloc-retry-interval must be > 0")
    if args.alloc_retry_timeout is not None and args.alloc_retry_timeout <= 0:
        parser.error("--alloc-retry-timeout must be > 0 when set")
    scratch_size = args.scratch_size
    if scratch_size is None:
        scratch_raw = os.environ.get(ENV_SCRATCH_SIZE, "").strip()
        if scratch_raw:
            try:
                scratch_size = parse_byte_size(scratch_raw)
            except ValueError as exc:
                parser.error(f"{ENV_SCRATCH_SIZE}: {exc}")
        else:
            scratch_size = DEFAULT_SCRATCH_SIZE
    os.environ[ENV_SCRATCH_SIZE] = str(scratch_size)

    return Config(
        device=args.device,
        tag=args.tag,
        socket_path=socket_path,
        alloc_retry_interval=args.alloc_retry_interval,
        alloc_retry_timeout=args.alloc_retry_timeout,
        scratch_size=scratch_size,
        verbose=args.verbose,
    )
