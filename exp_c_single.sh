#!/bin/bash
# Experiment C: Single A100 80GB worker benchmark
# N=100, c=8, ISL~2048, OSL=256, Qwen/Qwen3-8B

JOBID=1034286
IMAGE=/home/scratch.mkosec_hw/vllm-dev.sqsh
MOUNTS=/home/scratch.mkosec_hw:/scratch
MODEL=Qwen/Qwen3-8B
PORT=8000

> /home/scratch.mkosec_hw/worker_c.log
> /home/scratch.mkosec_hw/bench_c_results.json

echo "[$(date)] Starting single vLLM worker (GPU 0, port ${PORT})..."
srun --jobid=$JOBID --overlap \
  --container-image=$IMAGE \
  --container-mounts=$MOUNTS \
  bash -c "
    export HF_HOME=/scratch/hf_cache
    export HF_HUB_OFFLINE=1
    export CUDA_VISIBLE_DEVICES=0
    source /opt/dynamo/venv/bin/activate
    python3 -m vllm.entrypoints.openai.api_server \
      --model ${MODEL} \
      --port ${PORT} \
      --max-model-len 8192 \
      --gpu-memory-utilization 0.7 \
      --enable-chunked-prefill \
      >> /scratch/worker_c.log 2>&1
  " >> /home/scratch.mkosec_hw/worker_c.log 2>&1 &
SRUN_PID=$!

echo "[$(date)] Waiting for worker health on :${PORT}..."
for i in $(seq 1 120); do
  sleep 5
  if curl -s http://127.0.0.1:${PORT}/health 2>/dev/null | grep -q "{}"; then
    echo "[$(date)] WORKER READY after $((i*5))s"
    break
  fi
  if [ $((i % 12)) -eq 0 ]; then
    echo "[$(date)] Still waiting... ($((i*5))s)"
    tail -3 /home/scratch.mkosec_hw/worker_c.log 2>/dev/null
  fi
done

if ! curl -s http://127.0.0.1:${PORT}/health 2>/dev/null | grep -q "{}"; then
  echo "TIMEOUT"
  tail -20 /home/scratch.mkosec_hw/worker_c.log
  exit 1
fi

echo "[$(date)] Running benchmark N=100 c=8 ISL~2048 OSL=256..."
cat > /tmp/bench_c.py << 'PYEOF'
import asyncio, httpx, time, statistics, json, sys
URL = "http://127.0.0.1:8000/v1/chat/completions"
# ~2048 tokens: "the quick brown fox..." repeated ~48x + padding
PROMPT = ("the quick brown fox jumps over the lazy dog " * 48).strip()
BODY = {
    "model": "Qwen/Qwen3-8B",
    "messages": [{"role": "user", "content": PROMPT}],
    "max_tokens": 256,
    "stream": False
}
N, C = 100, 8

async def one(client, sem):
    async with sem:
        t0 = time.time()
        try:
            r = await client.post(URL, json=BODY, timeout=300)
            return time.time()-t0, r.status_code
        except Exception as e:
            return time.time()-t0, -1

async def main():
    sem = asyncio.Semaphore(C)
    limits = httpx.Limits(max_connections=C+2, max_keepalive_connections=C+2)
    async with httpx.AsyncClient(limits=limits) as c:
        t0 = time.time()
        results = await asyncio.gather(*[one(c, sem) for _ in range(N)])
        T = time.time() - t0

    lats = sorted([r[0] for r in results if r[1] == 200])
    codes = {}
    for r in results:
        codes[str(r[1])] = codes.get(str(r[1]), 0) + 1
    n = len(lats)
    out = {
        "experiment": "Exp C baseline – single A100 80GB, Qwen/Qwen3-8B BF16",
        "hardware": "A100-PCIE-80GB, dlcluster 4u4g-0104",
        "config": {"N": N, "concurrency": C, "ISL_approx": 2048, "OSL": 256, "model": "Qwen/Qwen3-8B"},
        "results": {
            "n_success": n,
            "n_total": N,
            "total_s": round(T, 2),
            "throughput_req_per_s": round(n/T, 3),
            "latency_mean_s": round(statistics.mean(lats), 3),
            "latency_p50_s": round(statistics.median(lats), 3),
            "latency_p95_s": round(lats[min(int(n*0.95), n-1)], 3) if n >= 20 else None,
            "latency_p99_s": round(lats[min(int(n*0.99), n-1)], 3) if n >= 100 else round(lats[-1], 3),
            "http_codes": codes
        }
    }
    print(json.dumps(out, indent=2))
    with open("/home/scratch.mkosec_hw/bench_c_results.json", "w") as f:
        json.dump(out, f, indent=2)
    print("\nBENCHMARK_COMPLETE")

asyncio.run(main())
PYEOF

pip install httpx -q 2>/dev/null
python3 /tmp/bench_c.py
echo "[$(date)] DONE"
