# SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
# SPDX-License-Identifier: Apache-2.0

"""GMS server entry point.

Launches two GMS server processes per GPU (one for weights, one for kv_cache),
then supervises them: terminates the rest if any child exits, and propagates
the first non-zero exit code. Runs until SIGTERM (pod termination kills it)
or until a child exits.
"""

from __future__ import annotations

import argparse
import logging
import os
import signal
import subprocess
import sys
import time

from gpu_memory_service.common.cuda_utils import list_devices
from gpu_memory_service.common.utils import (
    DEFAULT_SCRATCH_SIZE,
    ENV_SCRATCH_SIZE,
    parse_byte_size,
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

_TAGS = ("weights", "kv_cache")


def _parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Launch per-device GPU Memory Service servers.",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
    )
    parser.add_argument(
        "--scratch-size",
        type=parse_byte_size,
        default=None,
        help=(
            "Client-local scratchpad size for scratch aliases. This value is "
            "also used as the scratch alias granularity. Defaults to 256MiB "
            "unless DYN_GMS_SCRATCH_SIZE is set."
        ),
    )
    return parser.parse_args()


def main() -> None:
    args = _parse_args()
    scratch_size = args.scratch_size
    if scratch_size is None:
        scratch_raw = os.environ.get(ENV_SCRATCH_SIZE, "").strip()
        if scratch_raw:
            try:
                scratch_size = parse_byte_size(scratch_raw)
            except ValueError as exc:
                raise SystemExit(f"{ENV_SCRATCH_SIZE}: {exc}") from exc
        else:
            scratch_size = DEFAULT_SCRATCH_SIZE
    os.environ[ENV_SCRATCH_SIZE] = str(scratch_size)
    logger.info("Scratch config: scratch_size=%d MiB", scratch_size // (1 << 20))

    devices = list_devices()
    processes = []
    for device in devices:
        for tag in _TAGS:
            proc = subprocess.Popen(
                [
                    sys.executable,
                    "-m",
                    "gpu_memory_service",
                    "--device",
                    str(device),
                    "--tag",
                    tag,
                ]
            )
            logger.info("Started GMS device=%d tag=%s pid=%d", device, tag, proc.pid)
            processes.append(proc)

    def shutdown() -> None:
        for process in processes:
            if process.poll() is None:
                process.terminate()

    def terminate(*_args) -> None:
        shutdown()
        raise SystemExit(0)

    signal.signal(signal.SIGTERM, terminate)
    signal.signal(signal.SIGINT, terminate)

    while True:
        running = False
        for process in processes:
            exit_code = process.poll()
            if exit_code is None:
                running = True
                continue
            shutdown()
            raise SystemExit(exit_code)

        if not running:
            return
        time.sleep(1)


if __name__ == "__main__":
    main()
