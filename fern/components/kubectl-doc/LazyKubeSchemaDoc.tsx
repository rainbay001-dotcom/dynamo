"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

type SchemaComponent = ComponentType;
type SchemaLoader = () => Promise<SchemaComponent>;

const schemaLoaders: Record<string, SchemaLoader> = {
  DynamoCheckpointSchema0: () => import("./generated/DynamoCheckpointSchemas").then((module) => module.DynamoCheckpointSchema0),
  DynamoComponentDeploymentSchema0: () => import("./generated/DynamoComponentDeploymentSchemas").then((module) => module.DynamoComponentDeploymentSchema0),
  DynamoComponentDeploymentSchema1: () => import("./generated/DynamoComponentDeploymentSchemas").then((module) => module.DynamoComponentDeploymentSchema1),
  DynamoGraphDeploymentRequestSchema0: () => import("./generated/DynamoGraphDeploymentRequestSchemas").then((module) => module.DynamoGraphDeploymentRequestSchema0),
  DynamoGraphDeploymentRequestSchema1: () => import("./generated/DynamoGraphDeploymentRequestSchemas").then((module) => module.DynamoGraphDeploymentRequestSchema1),
  DynamoGraphDeploymentScalingAdapterSchema0: () => import("./generated/DynamoGraphDeploymentScalingAdapterSchemas").then((module) => module.DynamoGraphDeploymentScalingAdapterSchema0),
  DynamoGraphDeploymentScalingAdapterSchema1: () => import("./generated/DynamoGraphDeploymentScalingAdapterSchemas").then((module) => module.DynamoGraphDeploymentScalingAdapterSchema1),
  DynamoGraphDeploymentSchema0: () => import("./generated/DynamoGraphDeploymentSchemas").then((module) => module.DynamoGraphDeploymentSchema0),
  DynamoGraphDeploymentSchema1: () => import("./generated/DynamoGraphDeploymentSchemas").then((module) => module.DynamoGraphDeploymentSchema1),
  DynamoModelSchema0: () => import("./generated/DynamoModelSchemas").then((module) => module.DynamoModelSchema0),
  DynamoWorkerMetadataSchema0: () => import("./generated/DynamoWorkerMetadataSchemas").then((module) => module.DynamoWorkerMetadataSchema0),
};

export function LazyKubeSchemaDoc({ name }: { name: string }) {
  const [Component, setComponent] = useState<SchemaComponent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const loader = schemaLoaders[name];

    setComponent(null);
    setError(null);

    if (!loader) {
      setError(`Unknown schema component: ${name}`);
      return () => {
        cancelled = true;
      };
    }

    loader()
      .then((loadedComponent) => {
        if (!cancelled) {
          setComponent(() => loadedComponent);
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

  if (!Component) {
    return <div className="kdoc-fern-lazy">Loading schema...</div>;
  }

  return <Component />;
}
