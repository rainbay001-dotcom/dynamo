# SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
# SPDX-License-Identifier: Apache-2.0

import json
import logging

import pytest

from dynamo.common.utils import request_trace

pytestmark = [
    pytest.mark.unit,
    pytest.mark.gpu_0,
    pytest.mark.pre_merge,
    pytest.mark.post_merge,
]


def _close_trace_files() -> None:
    for handle in request_trace._FILE_HANDLES.values():
        handle.close()
    request_trace._FILE_HANDLES.clear()


def test_trace_event_disabled_does_not_write(monkeypatch, tmp_path):
    monkeypatch.delenv(request_trace.TRACE_ENV, raising=False)
    monkeypatch.setenv(request_trace.TRACE_DIR_ENV, str(tmp_path))

    request_trace.trace_event(logging.getLogger(__name__), "backend_dp_enter", "req-1")

    assert list(tmp_path.iterdir()) == []


def test_trace_event_writes_jsonl(monkeypatch, tmp_path):
    _close_trace_files()
    monkeypatch.setenv(request_trace.TRACE_ENV, "1")
    monkeypatch.setenv(request_trace.TRACE_DIR_ENV, str(tmp_path))
    monkeypatch.delenv(request_trace.TRACE_FILE_ENV, raising=False)

    request_trace.trace_event(
        logging.getLogger(__name__),
        "backend_dp_enter",
        "req-1",
        file_prefix="trace",
        dp_rank=2,
        ignored=None,
    )
    _close_trace_files()

    trace_files = list(tmp_path.glob("trace_*.jsonl"))
    assert len(trace_files) == 1
    payload = json.loads(trace_files[0].read_text(encoding="utf-8"))
    assert payload["event"] == "backend_dp_enter"
    assert payload["request_id"] == "req-1"
    assert payload["dp_rank"] == 2
    assert "wall_time_ns" in payload
    assert "ignored" not in payload
