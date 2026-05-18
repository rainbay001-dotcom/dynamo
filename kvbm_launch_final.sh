#!/bin/bash
set -e
# Critical: nixl_cu13 + POSIX backend (not UCX which fails on b100_preprod)
NW13=/opt/dynamo/venv/lib/python3.12/site-packages/.nixl_cu13.mesonpy.libs
mkdir -p /tmp/nixl-cu13/lib64
ln -sf "$NW13/libnixl.so" /tmp/nixl-cu13/lib64/libnixl.so

export LD_LIBRARY_PATH="/usr/local/ucx/lib:$NW13:$NW13/plugins:/opt/nvidia/nvda_nixl/lib64"
export NIXL_PREFIX=/tmp/nixl-cu13
export NIXL_PLUGIN_DIR="$NW13/plugins"
export PYTHONPATH=/scratch/worktrees/dynamo-pfaas/lib/bindings/kvbm/python
export HF_HOME=/scratch/hf_cache
export HF_HUB_OFFLINE=1

echo "[$(date)] LD_LIBRARY_PATH=$LD_LIBRARY_PATH" >> /scratch/workers.log
echo "[$(date)] NIXL_PLUGIN_DIR=$NIXL_PLUGIN_DIR" >> /scratch/workers.log
echo "[$(date)] Plugins: $(ls $NIXL_PLUGIN_DIR 2>/dev/null | grep -E 'POSIX|UCX' | tr '\n' ' ')" >> /scratch/workers.log

KV_P='{"kv_connector":"DynamoConnector","kv_role":"kv_both","kv_load_failure_policy":"recompute","kv_connector_module_path":"kvbm.v2.vllm.schedulers.connector","kv_connector_extra_config":{"leader":{"disagg":{"hub_url":"http://127.0.0.1:1337","role":"prefill"},"cache":{"host":{"cache_size_gb":40.0}},"tokio":{"worker_threads":4}},"worker":{"nixl":{"backends":{"POSIX":{}}},"tokio":{"worker_threads":4}}}}'
KV_D='{"kv_connector":"DynamoConnector","kv_role":"kv_both","kv_load_failure_policy":"recompute","kv_connector_module_path":"kvbm.v2.vllm.schedulers.connector","kv_connector_extra_config":{"leader":{"disagg":{"hub_url":"http://127.0.0.1:1337","role":"decode"},"cache":{"host":{"cache_size_gb":40.0}},"tokio":{"worker_threads":4}},"worker":{"nixl":{"backends":{"POSIX":{}}},"tokio":{"worker_threads":4}}}}'
COMMON="--model Qwen/Qwen3-8B --max-model-len 8192 --gpu-memory-utilization 0.45 --enable-chunked-prefill --no-enable-prefix-caching"

source /opt/dynamo/venv/bin/activate

echo "[$(date)] Starting prefill GPU 0 port 8001" >> /scratch/workers.log
CUDA_VISIBLE_DEVICES=0 python3 -m vllm.entrypoints.openai.api_server $COMMON \
  --port 8001 --kv-transfer-config "$KV_P" >> /scratch/p.log 2>&1 &

echo "[$(date)] Starting decode GPU 1 port 8000" >> /scratch/workers.log
CUDA_VISIBLE_DEVICES=1 python3 -m vllm.entrypoints.openai.api_server $COMMON \
  --port 8000 --kv-transfer-config "$KV_D" >> /scratch/d.log 2>&1 &

echo "[$(date)] Waiting..." >> /scratch/workers.log
wait
