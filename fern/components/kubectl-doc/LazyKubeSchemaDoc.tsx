"use client";

import { useEffect, useState } from "react";

import { KubeSchemaDoc } from "./KubeSchemaDoc";
import type { KubeSchemaDocument } from "./KubeSchemaDoc";

const schemaSources: Record<string, string> = {
  "DynamoCheckpointSchema0": "../../assets/kubectl-doc/generated/DynamoCheckpointSchema0.json",
  "DynamoComponentDeploymentSchema0": "../../assets/kubectl-doc/generated/DynamoComponentDeploymentSchema0.json",
  "DynamoComponentDeploymentSchema1": "../../assets/kubectl-doc/generated/DynamoComponentDeploymentSchema1.json",
  "DynamoGraphDeploymentRequestSchema0": "../../assets/kubectl-doc/generated/DynamoGraphDeploymentRequestSchema0.json",
  "DynamoGraphDeploymentRequestSchema1": "../../assets/kubectl-doc/generated/DynamoGraphDeploymentRequestSchema1.json",
  "DynamoGraphDeploymentScalingAdapterSchema0": "../../assets/kubectl-doc/generated/DynamoGraphDeploymentScalingAdapterSchema0.json",
  "DynamoGraphDeploymentScalingAdapterSchema1": "../../assets/kubectl-doc/generated/DynamoGraphDeploymentScalingAdapterSchema1.json",
  "DynamoGraphDeploymentSchema0": "../../assets/kubectl-doc/generated/DynamoGraphDeploymentSchema0.json",
  "DynamoGraphDeploymentSchema1": "../../assets/kubectl-doc/generated/DynamoGraphDeploymentSchema1.json",
  "DynamoModelSchema0": "../../assets/kubectl-doc/generated/DynamoModelSchema0.json",
  "DynamoWorkerMetadataSchema0": "../../assets/kubectl-doc/generated/DynamoWorkerMetadataSchema0.json",
};

function resolveSchemaSource(source: string) {
  if (source.startsWith("http://") || source.startsWith("https://") || source.startsWith("/")) {
    return source;
  }

  return new URL(source, window.location.href.replace(/\/$/, "")).toString();
}

export function LazyKubeSchemaDoc({ name, filtering = true }: { name: string; filtering?: boolean }) {
  const [data, setData] = useState<KubeSchemaDocument | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const source = schemaSources[name];

    setData(null);
    setError(null);

    if (!source) {
      setError(`Unknown schema document: ${name}`);
      return () => {
        cancelled = true;
      };
    }

    fetch(resolveSchemaSource(source))
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json() as Promise<KubeSchemaDocument>;
      })
      .then((schema) => {
        if (!cancelled) {
          setData(schema);
        }
      })
      .catch((loadError: unknown) => {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : String(loadError));
        }
      });

    return () => {
      cancelled = true;
    };
  }, [name]);

  if (error) {
    return <div className="kdoc-fern-lazy kdoc-fern-lazy-error">Schema failed to load: {error}</div>;
  }

  if (!data) {
    return <div className="kdoc-fern-lazy">Loading schema...</div>;
  }

  return <KubeSchemaDoc data={data} filtering={filtering} />;
}
