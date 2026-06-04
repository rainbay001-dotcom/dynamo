"use client";

import { KubeSchemaDoc } from "@/components/kubectl-doc/KubeSchemaDoc";

const kubectlDocSchemas = [
  {
    "apiVersion": "nvidia.com/v1alpha1",
    "group": "nvidia.com",
    "version": "v1alpha1",
    "kind": "DynamoCheckpoint",
    "resource": "dynamocheckpoints",
    "lines": [
      {
        "index": 0,
        "text": "apiVersion: nvidia.com/v1alpha1",
        "description": "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
        "depth": 0,
        "field": "apiVersion",
        "path": "apiVersion",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-apiversion"
      },
      {
        "index": 1,
        "text": "kind: DynamoCheckpoint",
        "description": "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
        "depth": 0,
        "field": "kind",
        "path": "kind",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-kind"
      },
      {
        "index": 2,
        "text": "metadata:",
        "description": "Standard Kubernetes object metadata.",
        "depth": 0,
        "field": "metadata",
        "path": "metadata",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata"
      },
      {
        "index": 3,
        "text": "  # Name must be unique within a namespace.",
        "description": "Name must be unique within a namespace.",
        "depth": 1,
        "path": "metadata.name",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-name"
      },
      {
        "index": 4,
        "text": "  name: \"<string>\" # required",
        "description": "Name must be unique within a namespace.",
        "depth": 1,
        "field": "name",
        "path": "metadata.name",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-name"
      },
      {
        "index": 5,
        "text": "",
        "depth": 0,
        "detailId": "line-5"
      },
      {
        "index": 6,
        "text": "  # Namespace defines the space within which each name must be unique.",
        "description": "Namespace defines the space within which each name must be unique.",
        "depth": 1,
        "path": "metadata.namespace",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-namespace"
      },
      {
        "index": 7,
        "text": "  namespace: \"<string>\" # required",
        "description": "Namespace defines the space within which each name must be unique.",
        "depth": 1,
        "field": "namespace",
        "path": "metadata.namespace",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-namespace"
      },
      {
        "index": 8,
        "text": "",
        "depth": 0,
        "detailId": "line-8"
      },
      {
        "index": 9,
        "text": "  # Annotations is an unstructured key value map stored with a resource.",
        "description": "Annotations is an unstructured key value map stored with a resource.",
        "depth": 1,
        "path": "metadata.annotations",
        "detailId": "field-nvidia-com-v1alpha1-metadata-annotations"
      },
      {
        "index": 10,
        "text": "  # annotations:",
        "description": "Annotations is an unstructured key value map stored with a resource.",
        "depth": 1,
        "field": "annotations",
        "path": "metadata.annotations",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-annotations"
      },
      {
        "index": 11,
        "text": "    # <key>: \"<string>\"",
        "depth": 2,
        "field": "<key>",
        "path": "metadata.annotations.<key>",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-annotations-key"
      },
      {
        "index": 12,
        "text": "",
        "depth": 0,
        "detailId": "line-12"
      },
      {
        "index": 13,
        "text": "  # CreationTimestamp is set by the server when a resource is created.",
        "description": "CreationTimestamp is set by the server when a resource is created.",
        "depth": 1,
        "path": "metadata.creationTimestamp",
        "detailId": "field-nvidia-com-v1alpha1-metadata-creationtimestamp"
      },
      {
        "index": 14,
        "text": "  # creationTimestamp: \"<string>\"",
        "description": "CreationTimestamp is set by the server when a resource is created.",
        "depth": 1,
        "field": "creationTimestamp",
        "path": "metadata.creationTimestamp",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-creationtimestamp"
      },
      {
        "index": 15,
        "text": "",
        "depth": 0,
        "detailId": "line-15"
      },
      {
        "index": 16,
        "text": "  # Number of seconds allowed for graceful deletion.",
        "description": "Number of seconds allowed for graceful deletion.",
        "depth": 1,
        "path": "metadata.deletionGracePeriodSeconds",
        "detailId": "field-nvidia-com-v1alpha1-metadata-deletiongraceperiodseconds"
      },
      {
        "index": 17,
        "text": "  # deletionGracePeriodSeconds: <int64>",
        "description": "Number of seconds allowed for graceful deletion.",
        "depth": 1,
        "field": "deletionGracePeriodSeconds",
        "path": "metadata.deletionGracePeriodSeconds",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-deletiongraceperiodseconds"
      },
      {
        "index": 18,
        "text": "",
        "depth": 0,
        "detailId": "line-18"
      },
      {
        "index": 19,
        "text": "  # DeletionTimestamp is set by the server when graceful deletion is requested.",
        "description": "DeletionTimestamp is set by the server when graceful deletion is requested.",
        "depth": 1,
        "path": "metadata.deletionTimestamp",
        "detailId": "field-nvidia-com-v1alpha1-metadata-deletiontimestamp"
      },
      {
        "index": 20,
        "text": "  # deletionTimestamp: \"<string>\"",
        "description": "DeletionTimestamp is set by the server when graceful deletion is requested.",
        "depth": 1,
        "field": "deletionTimestamp",
        "path": "metadata.deletionTimestamp",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-deletiontimestamp"
      },
      {
        "index": 21,
        "text": "",
        "depth": 0,
        "detailId": "line-21"
      },
      {
        "index": 22,
        "text": "  # Finalizers must be empty before the object is deleted from the registry.",
        "description": "Finalizers must be empty before the object is deleted from the registry.",
        "depth": 1,
        "path": "metadata.finalizers",
        "detailId": "field-nvidia-com-v1alpha1-metadata-finalizers"
      },
      {
        "index": 23,
        "text": "  # finalizers:",
        "description": "Finalizers must be empty before the object is deleted from the registry.",
        "depth": 1,
        "field": "finalizers",
        "path": "metadata.finalizers",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-finalizers"
      },
      {
        "index": 24,
        "text": "    # - \"<string>\"",
        "depth": 3,
        "path": "metadata.finalizers[]",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-finalizers"
      },
      {
        "index": 25,
        "text": "",
        "depth": 0,
        "detailId": "line-25"
      },
      {
        "index": 26,
        "text": "  # GenerateName is an optional prefix used by the server to generate a unique",
        "description": "GenerateName is an optional prefix used by the server to generate a unique",
        "depth": 1,
        "path": "metadata.generateName",
        "detailId": "field-nvidia-com-v1alpha1-metadata-generatename"
      },
      {
        "index": 27,
        "text": "  # name.",
        "description": "name.",
        "depth": 1,
        "path": "metadata.generateName",
        "detailId": "field-nvidia-com-v1alpha1-metadata-generatename"
      },
      {
        "index": 28,
        "text": "  # generateName: \"<string>\"",
        "description": "GenerateName is an optional prefix used by the server to generate a unique name.",
        "depth": 1,
        "field": "generateName",
        "path": "metadata.generateName",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-generatename"
      },
      {
        "index": 29,
        "text": "",
        "depth": 0,
        "detailId": "line-29"
      },
      {
        "index": 30,
        "text": "  # Generation is a sequence number representing a specific desired state.",
        "description": "Generation is a sequence number representing a specific desired state.",
        "depth": 1,
        "path": "metadata.generation",
        "detailId": "field-nvidia-com-v1alpha1-metadata-generation"
      },
      {
        "index": 31,
        "text": "  # generation: <int64>",
        "description": "Generation is a sequence number representing a specific desired state.",
        "depth": 1,
        "field": "generation",
        "path": "metadata.generation",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-generation"
      },
      {
        "index": 32,
        "text": "",
        "depth": 0,
        "detailId": "line-32"
      },
      {
        "index": 33,
        "text": "  # Labels are key value pairs used to organize and select objects.",
        "description": "Labels are key value pairs used to organize and select objects.",
        "depth": 1,
        "path": "metadata.labels",
        "detailId": "field-nvidia-com-v1alpha1-metadata-labels"
      },
      {
        "index": 34,
        "text": "  # labels:",
        "description": "Labels are key value pairs used to organize and select objects.",
        "depth": 1,
        "field": "labels",
        "path": "metadata.labels",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-labels"
      },
      {
        "index": 35,
        "text": "    # <key>: \"<string>\"",
        "depth": 2,
        "field": "<key>",
        "path": "metadata.labels.<key>",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-labels-key"
      },
      {
        "index": 36,
        "text": "",
        "depth": 0,
        "detailId": "line-36"
      },
      {
        "index": 37,
        "text": "  # ManagedFields records which actor manages which fields.",
        "description": "ManagedFields records which actor manages which fields.",
        "depth": 1,
        "path": "metadata.managedFields",
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields"
      },
      {
        "index": 38,
        "text": "  # managedFields:",
        "description": "ManagedFields records which actor manages which fields.",
        "depth": 1,
        "field": "managedFields",
        "path": "metadata.managedFields",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields"
      },
      {
        "index": 39,
        "text": "    # - # APIVersion defines the version of this field set.",
        "description": "APIVersion defines the version of this field set.",
        "depth": 3,
        "path": "metadata.managedFields[].apiVersion",
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields-apiversion"
      },
      {
        "index": 40,
        "text": "      # apiVersion: \"<string>\"",
        "description": "APIVersion defines the version of this field set.",
        "depth": 3,
        "field": "apiVersion",
        "path": "metadata.managedFields[].apiVersion",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields-apiversion"
      },
      {
        "index": 41,
        "text": "",
        "depth": 0,
        "detailId": "line-41"
      },
      {
        "index": 42,
        "text": "      # FieldsType is the discriminator for the fields format.",
        "description": "FieldsType is the discriminator for the fields format.",
        "depth": 3,
        "path": "metadata.managedFields[].fieldsType",
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields-fieldstype"
      },
      {
        "index": 43,
        "text": "      # fieldsType: \"<string>\"",
        "description": "FieldsType is the discriminator for the fields format.",
        "depth": 3,
        "field": "fieldsType",
        "path": "metadata.managedFields[].fieldsType",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields-fieldstype"
      },
      {
        "index": 44,
        "text": "",
        "depth": 0,
        "detailId": "line-44"
      },
      {
        "index": 45,
        "text": "      # FieldsV1 stores a versioned field set.",
        "description": "FieldsV1 stores a versioned field set.",
        "depth": 3,
        "path": "metadata.managedFields[].fieldsV1",
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields-fieldsv1"
      },
      {
        "index": 46,
        "text": "      # fieldsV1: {} # preserveUnknownFields",
        "description": "FieldsV1 stores a versioned field set.",
        "depth": 3,
        "field": "fieldsV1",
        "path": "metadata.managedFields[].fieldsV1",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields-fieldsv1"
      },
      {
        "index": 47,
        "text": "",
        "depth": 0,
        "detailId": "line-47"
      },
      {
        "index": 48,
        "text": "      # Manager identifies the workflow managing these fields.",
        "description": "Manager identifies the workflow managing these fields.",
        "depth": 3,
        "path": "metadata.managedFields[].manager",
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields-manager"
      },
      {
        "index": 49,
        "text": "      # manager: \"<string>\"",
        "description": "Manager identifies the workflow managing these fields.",
        "depth": 3,
        "field": "manager",
        "path": "metadata.managedFields[].manager",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields-manager"
      },
      {
        "index": 50,
        "text": "",
        "depth": 0,
        "detailId": "line-50"
      },
      {
        "index": 51,
        "text": "      # Operation is the type of operation that produced this managedFields",
        "description": "Operation is the type of operation that produced this managedFields",
        "depth": 3,
        "path": "metadata.managedFields[].operation",
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields-operation"
      },
      {
        "index": 52,
        "text": "      # entry.",
        "description": "entry.",
        "depth": 3,
        "path": "metadata.managedFields[].operation",
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields-operation"
      },
      {
        "index": 53,
        "text": "      # operation: \"<string>\"",
        "description": "Operation is the type of operation that produced this managedFields entry.",
        "depth": 3,
        "field": "operation",
        "path": "metadata.managedFields[].operation",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields-operation"
      },
      {
        "index": 54,
        "text": "",
        "depth": 0,
        "detailId": "line-54"
      },
      {
        "index": 55,
        "text": "      # Subresource is the name of the subresource used to update the object.",
        "description": "Subresource is the name of the subresource used to update the object.",
        "depth": 3,
        "path": "metadata.managedFields[].subresource",
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields-subresource"
      },
      {
        "index": 56,
        "text": "      # subresource: \"<string>\"",
        "description": "Subresource is the name of the subresource used to update the object.",
        "depth": 3,
        "field": "subresource",
        "path": "metadata.managedFields[].subresource",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields-subresource"
      },
      {
        "index": 57,
        "text": "",
        "depth": 0,
        "detailId": "line-57"
      },
      {
        "index": 58,
        "text": "      # Time is when this managedFields entry was added.",
        "description": "Time is when this managedFields entry was added.",
        "depth": 3,
        "path": "metadata.managedFields[].time",
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields-time"
      },
      {
        "index": 59,
        "text": "      # time: \"<string>\"",
        "description": "Time is when this managedFields entry was added.",
        "depth": 3,
        "field": "time",
        "path": "metadata.managedFields[].time",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-managedfields-time"
      },
      {
        "index": 60,
        "text": "",
        "depth": 0,
        "detailId": "line-60"
      },
      {
        "index": 61,
        "text": "  # OwnerReferences lists objects depended on by this object.",
        "description": "OwnerReferences lists objects depended on by this object.",
        "depth": 1,
        "path": "metadata.ownerReferences",
        "detailId": "field-nvidia-com-v1alpha1-metadata-ownerreferences"
      },
      {
        "index": 62,
        "text": "  ownerReferences: # optional",
        "description": "OwnerReferences lists objects depended on by this object.",
        "depth": 1,
        "field": "ownerReferences",
        "path": "metadata.ownerReferences",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-ownerreferences"
      },
      {
        "index": 63,
        "text": "    - # API version of the referent.",
        "description": "API version of the referent.",
        "depth": 3,
        "path": "metadata.ownerReferences[].apiVersion",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-ownerreferences-apiversion"
      },
      {
        "index": 64,
        "text": "      apiVersion: \"<string>\" # required",
        "description": "API version of the referent.",
        "depth": 3,
        "field": "apiVersion",
        "path": "metadata.ownerReferences[].apiVersion",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-ownerreferences-apiversion"
      },
      {
        "index": 65,
        "text": "",
        "depth": 0,
        "detailId": "line-65"
      },
      {
        "index": 66,
        "text": "      # Kind of the referent.",
        "description": "Kind of the referent.",
        "depth": 3,
        "path": "metadata.ownerReferences[].kind",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-ownerreferences-kind"
      },
      {
        "index": 67,
        "text": "      kind: \"<string>\" # required",
        "description": "Kind of the referent.",
        "depth": 3,
        "field": "kind",
        "path": "metadata.ownerReferences[].kind",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-ownerreferences-kind"
      },
      {
        "index": 68,
        "text": "",
        "depth": 0,
        "detailId": "line-68"
      },
      {
        "index": 69,
        "text": "      # Name of the referent.",
        "description": "Name of the referent.",
        "depth": 3,
        "path": "metadata.ownerReferences[].name",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-ownerreferences-name"
      },
      {
        "index": 70,
        "text": "      name: \"<string>\" # required",
        "description": "Name of the referent.",
        "depth": 3,
        "field": "name",
        "path": "metadata.ownerReferences[].name",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-ownerreferences-name"
      },
      {
        "index": 71,
        "text": "",
        "depth": 0,
        "detailId": "line-71"
      },
      {
        "index": 72,
        "text": "      # UID of the referent.",
        "description": "UID of the referent.",
        "depth": 3,
        "path": "metadata.ownerReferences[].uid",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-ownerreferences-uid"
      },
      {
        "index": 73,
        "text": "      uid: \"<string>\" # required",
        "description": "UID of the referent.",
        "depth": 3,
        "field": "uid",
        "path": "metadata.ownerReferences[].uid",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-ownerreferences-uid"
      },
      {
        "index": 74,
        "text": "",
        "depth": 0,
        "detailId": "line-74"
      },
      {
        "index": 75,
        "text": "      # BlockOwnerDeletion controls foreground deletion behavior.",
        "description": "BlockOwnerDeletion controls foreground deletion behavior.",
        "depth": 3,
        "path": "metadata.ownerReferences[].blockOwnerDeletion",
        "detailId": "field-nvidia-com-v1alpha1-metadata-ownerreferences-blockownerdeletion"
      },
      {
        "index": 76,
        "text": "      # blockOwnerDeletion: <boolean>",
        "description": "BlockOwnerDeletion controls foreground deletion behavior.",
        "depth": 3,
        "field": "blockOwnerDeletion",
        "path": "metadata.ownerReferences[].blockOwnerDeletion",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-ownerreferences-blockownerdeletion"
      },
      {
        "index": 77,
        "text": "",
        "depth": 0,
        "detailId": "line-77"
      },
      {
        "index": 78,
        "text": "      # Controller marks the managing controller owner reference.",
        "description": "Controller marks the managing controller owner reference.",
        "depth": 3,
        "path": "metadata.ownerReferences[].controller",
        "detailId": "field-nvidia-com-v1alpha1-metadata-ownerreferences-controller"
      },
      {
        "index": 79,
        "text": "      # controller: <boolean>",
        "description": "Controller marks the managing controller owner reference.",
        "depth": 3,
        "field": "controller",
        "path": "metadata.ownerReferences[].controller",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-ownerreferences-controller"
      },
      {
        "index": 80,
        "text": "",
        "depth": 0,
        "detailId": "line-80"
      },
      {
        "index": 81,
        "text": "  # ResourceVersion is an opaque internal version value.",
        "description": "ResourceVersion is an opaque internal version value.",
        "depth": 1,
        "path": "metadata.resourceVersion",
        "detailId": "field-nvidia-com-v1alpha1-metadata-resourceversion"
      },
      {
        "index": 82,
        "text": "  # resourceVersion: \"<string>\"",
        "description": "ResourceVersion is an opaque internal version value.",
        "depth": 1,
        "field": "resourceVersion",
        "path": "metadata.resourceVersion",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-resourceversion"
      },
      {
        "index": 83,
        "text": "",
        "depth": 0,
        "detailId": "line-83"
      },
      {
        "index": 84,
        "text": "  # SelfLink is a deprecated read-only field.",
        "description": "SelfLink is a deprecated read-only field.",
        "depth": 1,
        "path": "metadata.selfLink",
        "detailId": "field-nvidia-com-v1alpha1-metadata-selflink"
      },
      {
        "index": 85,
        "text": "  # selfLink: \"<string>\"",
        "description": "SelfLink is a deprecated read-only field.",
        "depth": 1,
        "field": "selfLink",
        "path": "metadata.selfLink",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-selflink"
      },
      {
        "index": 86,
        "text": "",
        "depth": 0,
        "detailId": "line-86"
      },
      {
        "index": 87,
        "text": "  # UID is the unique in time and space value for this object.",
        "description": "UID is the unique in time and space value for this object.",
        "depth": 1,
        "path": "metadata.uid",
        "detailId": "field-nvidia-com-v1alpha1-metadata-uid"
      },
      {
        "index": 88,
        "text": "  # uid: \"<string>\"",
        "description": "UID is the unique in time and space value for this object.",
        "depth": 1,
        "field": "uid",
        "path": "metadata.uid",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-metadata-uid"
      },
      {
        "index": 89,
        "text": "# DynamoCheckpointSpec defines the desired state of DynamoCheckpoint",
        "description": "DynamoCheckpointSpec defines the desired state of DynamoCheckpoint",
        "depth": 0,
        "path": "spec",
        "detailId": "field-nvidia-com-v1alpha1-spec"
      },
      {
        "index": 90,
        "text": "spec: # optional",
        "description": "DynamoCheckpointSpec defines the desired state of DynamoCheckpoint",
        "depth": 0,
        "field": "spec",
        "path": "spec",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1alpha1-spec"
      },
      {
        "index": 91,
        "text": "  # Identity defines the inputs that determine checkpoint equivalence",
        "description": "Identity defines the inputs that determine checkpoint equivalence",
        "depth": 1,
        "path": "spec.identity",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-identity"
      },
      {
        "index": 92,
        "text": "  identity: # required",
        "description": "Identity defines the inputs that determine checkpoint equivalence",
        "depth": 1,
        "field": "identity",
        "path": "spec.identity",
        "code": true,
        "required": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-identity"
      },
      {
        "index": 93,
        "text": "    # BackendFramework is the runtime framework (vllm, sglang, trtllm)",
        "description": "BackendFramework is the runtime framework (vllm, sglang, trtllm)",
        "depth": 2,
        "path": "spec.identity.backendFramework",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-backendframework"
      },
      {
        "index": 94,
        "text": "    backendFramework: \"vllm\" # required, enum: \"sglang\" | \"trtllm\"",
        "description": "BackendFramework is the runtime framework (vllm, sglang, trtllm)",
        "depth": 2,
        "field": "backendFramework",
        "path": "spec.identity.backendFramework",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-backendframework"
      },
      {
        "index": 95,
        "text": "",
        "depth": 0,
        "detailId": "line-95"
      },
      {
        "index": 96,
        "text": "    # Model is the model identifier (e.g., \"meta-llama/Llama-3-70B\")",
        "description": "Model is the model identifier (e.g., \"meta-llama/Llama-3-70B\")",
        "depth": 2,
        "path": "spec.identity.model",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-model"
      },
      {
        "index": 97,
        "text": "    model: \"<string>\" # required",
        "description": "Model is the model identifier (e.g., \"meta-llama/Llama-3-70B\")",
        "depth": 2,
        "field": "model",
        "path": "spec.identity.model",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-model"
      },
      {
        "index": 98,
        "text": "",
        "depth": 0,
        "detailId": "line-98"
      },
      {
        "index": 99,
        "text": "    # Dtype is the data type (fp16, bf16, fp8, etc.)",
        "description": "Dtype is the data type (fp16, bf16, fp8, etc.)",
        "depth": 2,
        "path": "spec.identity.dtype",
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-dtype"
      },
      {
        "index": 100,
        "text": "    # dtype: \"<string>\"",
        "description": "Dtype is the data type (fp16, bf16, fp8, etc.)",
        "depth": 2,
        "field": "dtype",
        "path": "spec.identity.dtype",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-dtype"
      },
      {
        "index": 101,
        "text": "",
        "depth": 0,
        "detailId": "line-101"
      },
      {
        "index": 102,
        "text": "    # DynamoVersion is the Dynamo platform version (optional) If not specified,",
        "description": "DynamoVersion is the Dynamo platform version (optional) If not specified,",
        "depth": 2,
        "path": "spec.identity.dynamoVersion",
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-dynamoversion"
      },
      {
        "index": 103,
        "text": "    # version is not included in identity hash This ensures checkpoint",
        "description": "version is not included in identity hash This ensures checkpoint",
        "depth": 2,
        "path": "spec.identity.dynamoVersion",
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-dynamoversion"
      },
      {
        "index": 104,
        "text": "    # compatibility across Dynamo releases",
        "description": "compatibility across Dynamo releases",
        "depth": 2,
        "path": "spec.identity.dynamoVersion",
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-dynamoversion"
      },
      {
        "index": 105,
        "text": "    # dynamoVersion: \"<string>\"",
        "description": "DynamoVersion is the Dynamo platform version (optional)\nIf not specified, version is not included in identity hash\nThis ensures checkpoint compatibility across Dynamo releases",
        "depth": 2,
        "field": "dynamoVersion",
        "path": "spec.identity.dynamoVersion",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-dynamoversion"
      },
      {
        "index": 106,
        "text": "",
        "depth": 0,
        "detailId": "line-106"
      },
      {
        "index": 107,
        "text": "    # ExtraParameters are additional parameters that affect the checkpoint hash",
        "description": "ExtraParameters are additional parameters that affect the checkpoint hash",
        "depth": 2,
        "path": "spec.identity.extraParameters",
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-extraparameters"
      },
      {
        "index": 108,
        "text": "    # Use for any framework-specific or custom parameters not covered above",
        "description": "Use for any framework-specific or custom parameters not covered above",
        "depth": 2,
        "path": "spec.identity.extraParameters",
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-extraparameters"
      },
      {
        "index": 109,
        "text": "    # extraParameters:",
        "description": "ExtraParameters are additional parameters that affect the checkpoint hash\nUse for any framework-specific or custom parameters not covered above",
        "depth": 2,
        "field": "extraParameters",
        "path": "spec.identity.extraParameters",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-extraparameters"
      },
      {
        "index": 110,
        "text": "      # <key>: \"<string>\"",
        "depth": 3,
        "field": "<key>",
        "path": "spec.identity.extraParameters.<key>",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-extraparameters-key"
      },
      {
        "index": 111,
        "text": "",
        "depth": 0,
        "detailId": "line-111"
      },
      {
        "index": 112,
        "text": "    # MaxModelLen is the maximum sequence length",
        "description": "MaxModelLen is the maximum sequence length",
        "depth": 2,
        "path": "spec.identity.maxModelLen",
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-maxmodellen"
      },
      {
        "index": 113,
        "text": "    # maxModelLen: <int32> # minimum: 1",
        "description": "MaxModelLen is the maximum sequence length",
        "depth": 2,
        "field": "maxModelLen",
        "path": "spec.identity.maxModelLen",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-maxmodellen"
      },
      {
        "index": 114,
        "text": "",
        "depth": 0,
        "detailId": "line-114"
      },
      {
        "index": 115,
        "text": "    # PipelineParallelSize is the pipeline parallel configuration",
        "description": "PipelineParallelSize is the pipeline parallel configuration",
        "depth": 2,
        "path": "spec.identity.pipelineParallelSize",
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-pipelineparallelsize"
      },
      {
        "index": 116,
        "text": "    # pipelineParallelSize: 1 # default, minimum: 1",
        "description": "PipelineParallelSize is the pipeline parallel configuration",
        "depth": 2,
        "field": "pipelineParallelSize",
        "path": "spec.identity.pipelineParallelSize",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-pipelineparallelsize"
      },
      {
        "index": 117,
        "text": "",
        "depth": 0,
        "detailId": "line-117"
      },
      {
        "index": 118,
        "text": "    # TensorParallelSize is the tensor parallel configuration",
        "description": "TensorParallelSize is the tensor parallel configuration",
        "depth": 2,
        "path": "spec.identity.tensorParallelSize",
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-tensorparallelsize"
      },
      {
        "index": 119,
        "text": "    # tensorParallelSize: 1 # default, minimum: 1",
        "description": "TensorParallelSize is the tensor parallel configuration",
        "depth": 2,
        "field": "tensorParallelSize",
        "path": "spec.identity.tensorParallelSize",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-identity-tensorparallelsize"
      },
      {
        "index": 120,
        "text": "",
        "depth": 0,
        "detailId": "line-120"
      },
      {
        "index": 121,
        "text": "  # Job defines the configuration for the checkpoint creation Job",
        "description": "Job defines the configuration for the checkpoint creation Job",
        "depth": 1,
        "path": "spec.job",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job"
      },
      {
        "index": 122,
        "text": "  job: # required",
        "description": "Job defines the configuration for the checkpoint creation Job",
        "depth": 1,
        "field": "job",
        "path": "spec.job",
        "code": true,
        "required": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job"
      },
      {
        "index": 123,
        "text": "    # PodTemplateSpec allows customizing the checkpoint Job pod This should",
        "description": "PodTemplateSpec allows customizing the checkpoint Job pod This should",
        "depth": 2,
        "path": "spec.job.podTemplateSpec",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job-podtemplatespec"
      },
      {
        "index": 124,
        "text": "    # include the container that runs the workload to be checkpointed and any",
        "description": "include the container that runs the workload to be checkpointed and any",
        "depth": 2,
        "path": "spec.job.podTemplateSpec",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job-podtemplatespec"
      },
      {
        "index": 125,
        "text": "    # workload/runtime env, service account, GMS, or DRA wiring needed by that",
        "description": "workload/runtime env, service account, GMS, or DRA wiring needed by that",
        "depth": 2,
        "path": "spec.job.podTemplateSpec",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job-podtemplatespec"
      },
      {
        "index": 126,
        "text": "    # container. Auto-created checkpoints from DynamoGraphDeployment render",
        "description": "container. Auto-created checkpoints from DynamoGraphDeployment render",
        "depth": 2,
        "path": "spec.job.podTemplateSpec",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job-podtemplatespec"
      },
      {
        "index": 127,
        "text": "    # Dynamo defaults before creating the DynamoCheckpoint.",
        "description": "Dynamo defaults before creating the DynamoCheckpoint.",
        "depth": 2,
        "path": "spec.job.podTemplateSpec",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job-podtemplatespec"
      },
      {
        "index": 128,
        "text": "    podTemplateSpec: # required",
        "description": "PodTemplateSpec allows customizing the checkpoint Job pod\nThis should include the container that runs the workload to be checkpointed\nand any workload/runtime env, service account, GMS, or DRA wiring needed\nby that container. Auto-created checkpoints from DynamoGraphDeployment\nrender Dynamo defaults before creating the DynamoCheckpoint.",
        "depth": 2,
        "field": "podTemplateSpec",
        "path": "spec.job.podTemplateSpec",
        "code": true,
        "required": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job-podtemplatespec"
      },
      {
        "index": 129,
        "text": "      # Standard object's metadata. More info:",
        "description": "Standard object's metadata. More info:",
        "depth": 3,
        "path": "spec.job.podTemplateSpec.metadata",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-podtemplatespec-metadata"
      },
      {
        "index": 130,
        "text": "      # https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata",
        "description": "https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata",
        "depth": 3,
        "path": "spec.job.podTemplateSpec.metadata",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-podtemplatespec-metadata"
      },
      {
        "index": 131,
        "text": "      # metadata:",
        "description": "Standard object's metadata.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata",
        "depth": 3,
        "field": "metadata",
        "path": "spec.job.podTemplateSpec.metadata",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job-podtemplatespec-metadata"
      },
      {
        "index": 134,
        "text": "",
        "depth": 0,
        "detailId": "line-134"
      },
      {
        "index": 137,
        "text": "",
        "depth": 0,
        "detailId": "line-137"
      },
      {
        "index": 140,
        "text": "",
        "depth": 0,
        "detailId": "line-140"
      },
      {
        "index": 143,
        "text": "",
        "depth": 0,
        "detailId": "line-143"
      },
      {
        "index": 144,
        "text": "      # Specification of the desired behavior of the pod. More info:",
        "description": "Specification of the desired behavior of the pod. More info:",
        "depth": 3,
        "path": "spec.job.podTemplateSpec.spec",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-podtemplatespec-spec"
      },
      {
        "index": 145,
        "text": "      # https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status",
        "description": "https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status",
        "depth": 3,
        "path": "spec.job.podTemplateSpec.spec",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-podtemplatespec-spec"
      },
      {
        "index": 146,
        "text": "      spec: # optional",
        "description": "Specification of the desired behavior of the pod.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status",
        "depth": 3,
        "field": "spec",
        "path": "spec.job.podTemplateSpec.spec",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job-podtemplatespec-spec"
      },
      {
        "index": 154,
        "text": "",
        "depth": 0,
        "detailId": "line-154"
      },
      {
        "index": 167,
        "text": "",
        "depth": 0,
        "detailId": "line-167"
      },
      {
        "index": 180,
        "text": "",
        "depth": 0,
        "detailId": "line-180"
      },
      {
        "index": 187,
        "text": "",
        "depth": 0,
        "detailId": "line-187"
      },
      {
        "index": 198,
        "text": "",
        "depth": 0,
        "detailId": "line-198"
      },
      {
        "index": 206,
        "text": "",
        "depth": 0,
        "detailId": "line-206"
      },
      {
        "index": 213,
        "text": "",
        "depth": 0,
        "detailId": "line-213"
      },
      {
        "index": 216,
        "text": "",
        "depth": 0,
        "detailId": "line-216"
      },
      {
        "index": 225,
        "text": "",
        "depth": 0,
        "detailId": "line-225"
      },
      {
        "index": 229,
        "text": "",
        "depth": 0,
        "detailId": "line-229"
      },
      {
        "index": 239,
        "text": "",
        "depth": 0,
        "detailId": "line-239"
      },
      {
        "index": 244,
        "text": "",
        "depth": 0,
        "detailId": "line-244"
      },
      {
        "index": 247,
        "text": "",
        "depth": 0,
        "detailId": "line-247"
      },
      {
        "index": 257,
        "text": "",
        "depth": 0,
        "detailId": "line-257"
      },
      {
        "index": 265,
        "text": "",
        "depth": 0,
        "detailId": "line-265"
      },
      {
        "index": 269,
        "text": "",
        "depth": 0,
        "detailId": "line-269"
      },
      {
        "index": 273,
        "text": "",
        "depth": 0,
        "detailId": "line-273"
      },
      {
        "index": 279,
        "text": "",
        "depth": 0,
        "detailId": "line-279"
      },
      {
        "index": 286,
        "text": "",
        "depth": 0,
        "detailId": "line-286"
      },
      {
        "index": 289,
        "text": "",
        "depth": 0,
        "detailId": "line-289"
      },
      {
        "index": 305,
        "text": "",
        "depth": 0,
        "detailId": "line-305"
      },
      {
        "index": 308,
        "text": "",
        "depth": 0,
        "detailId": "line-308"
      },
      {
        "index": 313,
        "text": "",
        "depth": 0,
        "detailId": "line-313"
      },
      {
        "index": 322,
        "text": "",
        "depth": 0,
        "detailId": "line-322"
      },
      {
        "index": 325,
        "text": "",
        "depth": 0,
        "detailId": "line-325"
      },
      {
        "index": 332,
        "text": "",
        "depth": 0,
        "detailId": "line-332"
      },
      {
        "index": 338,
        "text": "",
        "depth": 0,
        "detailId": "line-338"
      },
      {
        "index": 359,
        "text": "",
        "depth": 0,
        "detailId": "line-359"
      },
      {
        "index": 366,
        "text": "",
        "depth": 0,
        "detailId": "line-366"
      },
      {
        "index": 370,
        "text": "",
        "depth": 0,
        "detailId": "line-370"
      },
      {
        "index": 378,
        "text": "",
        "depth": 0,
        "detailId": "line-378"
      },
      {
        "index": 381,
        "text": "",
        "depth": 0,
        "detailId": "line-381"
      },
      {
        "index": 384,
        "text": "",
        "depth": 0,
        "detailId": "line-384"
      },
      {
        "index": 387,
        "text": "",
        "depth": 0,
        "detailId": "line-387"
      },
      {
        "index": 392,
        "text": "",
        "depth": 0,
        "detailId": "line-392"
      },
      {
        "index": 402,
        "text": "",
        "depth": 0,
        "detailId": "line-402"
      },
      {
        "index": 405,
        "text": "",
        "depth": 0,
        "detailId": "line-405"
      },
      {
        "index": 430,
        "text": "",
        "depth": 0,
        "detailId": "line-430"
      },
      {
        "index": 437,
        "text": "",
        "depth": 0,
        "detailId": "line-437"
      },
      {
        "index": 441,
        "text": "",
        "depth": 0,
        "detailId": "line-441"
      },
      {
        "index": 449,
        "text": "",
        "depth": 0,
        "detailId": "line-449"
      },
      {
        "index": 452,
        "text": "",
        "depth": 0,
        "detailId": "line-452"
      },
      {
        "index": 455,
        "text": "",
        "depth": 0,
        "detailId": "line-455"
      },
      {
        "index": 458,
        "text": "",
        "depth": 0,
        "detailId": "line-458"
      },
      {
        "index": 463,
        "text": "",
        "depth": 0,
        "detailId": "line-463"
      },
      {
        "index": 473,
        "text": "",
        "depth": 0,
        "detailId": "line-473"
      },
      {
        "index": 476,
        "text": "",
        "depth": 0,
        "detailId": "line-476"
      },
      {
        "index": 482,
        "text": "",
        "depth": 0,
        "detailId": "line-482"
      },
      {
        "index": 498,
        "text": "",
        "depth": 0,
        "detailId": "line-498"
      },
      {
        "index": 503,
        "text": "",
        "depth": 0,
        "detailId": "line-503"
      },
      {
        "index": 509,
        "text": "",
        "depth": 0,
        "detailId": "line-509"
      },
      {
        "index": 517,
        "text": "",
        "depth": 0,
        "detailId": "line-517"
      },
      {
        "index": 524,
        "text": "",
        "depth": 0,
        "detailId": "line-524"
      },
      {
        "index": 528,
        "text": "",
        "depth": 0,
        "detailId": "line-528"
      },
      {
        "index": 536,
        "text": "",
        "depth": 0,
        "detailId": "line-536"
      },
      {
        "index": 539,
        "text": "",
        "depth": 0,
        "detailId": "line-539"
      },
      {
        "index": 542,
        "text": "",
        "depth": 0,
        "detailId": "line-542"
      },
      {
        "index": 545,
        "text": "",
        "depth": 0,
        "detailId": "line-545"
      },
      {
        "index": 550,
        "text": "",
        "depth": 0,
        "detailId": "line-550"
      },
      {
        "index": 554,
        "text": "",
        "depth": 0,
        "detailId": "line-554"
      },
      {
        "index": 559,
        "text": "",
        "depth": 0,
        "detailId": "line-559"
      },
      {
        "index": 566,
        "text": "",
        "depth": 0,
        "detailId": "line-566"
      },
      {
        "index": 569,
        "text": "",
        "depth": 0,
        "detailId": "line-569"
      },
      {
        "index": 584,
        "text": "",
        "depth": 0,
        "detailId": "line-584"
      },
      {
        "index": 589,
        "text": "",
        "depth": 0,
        "detailId": "line-589"
      },
      {
        "index": 602,
        "text": "",
        "depth": 0,
        "detailId": "line-602"
      },
      {
        "index": 605,
        "text": "",
        "depth": 0,
        "detailId": "line-605"
      },
      {
        "index": 611,
        "text": "",
        "depth": 0,
        "detailId": "line-611"
      },
      {
        "index": 616,
        "text": "",
        "depth": 0,
        "detailId": "line-616"
      },
      {
        "index": 620,
        "text": "",
        "depth": 0,
        "detailId": "line-620"
      },
      {
        "index": 637,
        "text": "",
        "depth": 0,
        "detailId": "line-637"
      },
      {
        "index": 642,
        "text": "",
        "depth": 0,
        "detailId": "line-642"
      },
      {
        "index": 648,
        "text": "",
        "depth": 0,
        "detailId": "line-648"
      },
      {
        "index": 656,
        "text": "",
        "depth": 0,
        "detailId": "line-656"
      },
      {
        "index": 663,
        "text": "",
        "depth": 0,
        "detailId": "line-663"
      },
      {
        "index": 667,
        "text": "",
        "depth": 0,
        "detailId": "line-667"
      },
      {
        "index": 675,
        "text": "",
        "depth": 0,
        "detailId": "line-675"
      },
      {
        "index": 678,
        "text": "",
        "depth": 0,
        "detailId": "line-678"
      },
      {
        "index": 681,
        "text": "",
        "depth": 0,
        "detailId": "line-681"
      },
      {
        "index": 684,
        "text": "",
        "depth": 0,
        "detailId": "line-684"
      },
      {
        "index": 689,
        "text": "",
        "depth": 0,
        "detailId": "line-689"
      },
      {
        "index": 693,
        "text": "",
        "depth": 0,
        "detailId": "line-693"
      },
      {
        "index": 698,
        "text": "",
        "depth": 0,
        "detailId": "line-698"
      },
      {
        "index": 705,
        "text": "",
        "depth": 0,
        "detailId": "line-705"
      },
      {
        "index": 708,
        "text": "",
        "depth": 0,
        "detailId": "line-708"
      },
      {
        "index": 723,
        "text": "",
        "depth": 0,
        "detailId": "line-723"
      },
      {
        "index": 728,
        "text": "",
        "depth": 0,
        "detailId": "line-728"
      },
      {
        "index": 734,
        "text": "",
        "depth": 0,
        "detailId": "line-734"
      },
      {
        "index": 738,
        "text": "",
        "depth": 0,
        "detailId": "line-738"
      },
      {
        "index": 755,
        "text": "",
        "depth": 0,
        "detailId": "line-755"
      },
      {
        "index": 760,
        "text": "",
        "depth": 0,
        "detailId": "line-760"
      },
      {
        "index": 766,
        "text": "",
        "depth": 0,
        "detailId": "line-766"
      },
      {
        "index": 775,
        "text": "",
        "depth": 0,
        "detailId": "line-775"
      },
      {
        "index": 793,
        "text": "",
        "depth": 0,
        "detailId": "line-793"
      },
      {
        "index": 809,
        "text": "",
        "depth": 0,
        "detailId": "line-809"
      },
      {
        "index": 819,
        "text": "",
        "depth": 0,
        "detailId": "line-819"
      },
      {
        "index": 824,
        "text": "",
        "depth": 0,
        "detailId": "line-824"
      },
      {
        "index": 837,
        "text": "",
        "depth": 0,
        "detailId": "line-837"
      },
      {
        "index": 848,
        "text": "",
        "depth": 0,
        "detailId": "line-848"
      },
      {
        "index": 854,
        "text": "",
        "depth": 0,
        "detailId": "line-854"
      },
      {
        "index": 863,
        "text": "",
        "depth": 0,
        "detailId": "line-863"
      },
      {
        "index": 867,
        "text": "",
        "depth": 0,
        "detailId": "line-867"
      },
      {
        "index": 873,
        "text": "",
        "depth": 0,
        "detailId": "line-873"
      },
      {
        "index": 880,
        "text": "",
        "depth": 0,
        "detailId": "line-880"
      },
      {
        "index": 885,
        "text": "",
        "depth": 0,
        "detailId": "line-885"
      },
      {
        "index": 892,
        "text": "",
        "depth": 0,
        "detailId": "line-892"
      },
      {
        "index": 901,
        "text": "",
        "depth": 0,
        "detailId": "line-901"
      },
      {
        "index": 909,
        "text": "",
        "depth": 0,
        "detailId": "line-909"
      },
      {
        "index": 920,
        "text": "",
        "depth": 0,
        "detailId": "line-920"
      },
      {
        "index": 923,
        "text": "",
        "depth": 0,
        "detailId": "line-923"
      },
      {
        "index": 926,
        "text": "",
        "depth": 0,
        "detailId": "line-926"
      },
      {
        "index": 929,
        "text": "",
        "depth": 0,
        "detailId": "line-929"
      },
      {
        "index": 942,
        "text": "",
        "depth": 0,
        "detailId": "line-942"
      },
      {
        "index": 949,
        "text": "",
        "depth": 0,
        "detailId": "line-949"
      },
      {
        "index": 961,
        "text": "",
        "depth": 0,
        "detailId": "line-961"
      },
      {
        "index": 965,
        "text": "",
        "depth": 0,
        "detailId": "line-965"
      },
      {
        "index": 973,
        "text": "",
        "depth": 0,
        "detailId": "line-973"
      },
      {
        "index": 980,
        "text": "",
        "depth": 0,
        "detailId": "line-980"
      },
      {
        "index": 1001,
        "text": "",
        "depth": 0,
        "detailId": "line-1001"
      },
      {
        "index": 1006,
        "text": "",
        "depth": 0,
        "detailId": "line-1006"
      },
      {
        "index": 1012,
        "text": "",
        "depth": 0,
        "detailId": "line-1012"
      },
      {
        "index": 1020,
        "text": "",
        "depth": 0,
        "detailId": "line-1020"
      },
      {
        "index": 1027,
        "text": "",
        "depth": 0,
        "detailId": "line-1027"
      },
      {
        "index": 1031,
        "text": "",
        "depth": 0,
        "detailId": "line-1031"
      },
      {
        "index": 1039,
        "text": "",
        "depth": 0,
        "detailId": "line-1039"
      },
      {
        "index": 1042,
        "text": "",
        "depth": 0,
        "detailId": "line-1042"
      },
      {
        "index": 1045,
        "text": "",
        "depth": 0,
        "detailId": "line-1045"
      },
      {
        "index": 1048,
        "text": "",
        "depth": 0,
        "detailId": "line-1048"
      },
      {
        "index": 1053,
        "text": "",
        "depth": 0,
        "detailId": "line-1053"
      },
      {
        "index": 1057,
        "text": "",
        "depth": 0,
        "detailId": "line-1057"
      },
      {
        "index": 1062,
        "text": "",
        "depth": 0,
        "detailId": "line-1062"
      },
      {
        "index": 1069,
        "text": "",
        "depth": 0,
        "detailId": "line-1069"
      },
      {
        "index": 1072,
        "text": "",
        "depth": 0,
        "detailId": "line-1072"
      },
      {
        "index": 1087,
        "text": "",
        "depth": 0,
        "detailId": "line-1087"
      },
      {
        "index": 1092,
        "text": "",
        "depth": 0,
        "detailId": "line-1092"
      },
      {
        "index": 1097,
        "text": "",
        "depth": 0,
        "detailId": "line-1097"
      },
      {
        "index": 1108,
        "text": "",
        "depth": 0,
        "detailId": "line-1108"
      },
      {
        "index": 1117,
        "text": "",
        "depth": 0,
        "detailId": "line-1117"
      },
      {
        "index": 1127,
        "text": "",
        "depth": 0,
        "detailId": "line-1127"
      },
      {
        "index": 1131,
        "text": "",
        "depth": 0,
        "detailId": "line-1131"
      },
      {
        "index": 1138,
        "text": "",
        "depth": 0,
        "detailId": "line-1138"
      },
      {
        "index": 1141,
        "text": "",
        "depth": 0,
        "detailId": "line-1141"
      },
      {
        "index": 1148,
        "text": "",
        "depth": 0,
        "detailId": "line-1148"
      },
      {
        "index": 1151,
        "text": "",
        "depth": 0,
        "detailId": "line-1151"
      },
      {
        "index": 1159,
        "text": "",
        "depth": 0,
        "detailId": "line-1159"
      },
      {
        "index": 1163,
        "text": "",
        "depth": 0,
        "detailId": "line-1163"
      },
      {
        "index": 1186,
        "text": "",
        "depth": 0,
        "detailId": "line-1186"
      },
      {
        "index": 1190,
        "text": "",
        "depth": 0,
        "detailId": "line-1190"
      },
      {
        "index": 1197,
        "text": "",
        "depth": 0,
        "detailId": "line-1197"
      },
      {
        "index": 1202,
        "text": "",
        "depth": 0,
        "detailId": "line-1202"
      },
      {
        "index": 1208,
        "text": "",
        "depth": 0,
        "detailId": "line-1208"
      },
      {
        "index": 1232,
        "text": "",
        "depth": 0,
        "detailId": "line-1232"
      },
      {
        "index": 1237,
        "text": "",
        "depth": 0,
        "detailId": "line-1237"
      },
      {
        "index": 1247,
        "text": "",
        "depth": 0,
        "detailId": "line-1247"
      },
      {
        "index": 1252,
        "text": "",
        "depth": 0,
        "detailId": "line-1252"
      },
      {
        "index": 1257,
        "text": "",
        "depth": 0,
        "detailId": "line-1257"
      },
      {
        "index": 1267,
        "text": "",
        "depth": 0,
        "detailId": "line-1267"
      },
      {
        "index": 1271,
        "text": "",
        "depth": 0,
        "detailId": "line-1271"
      },
      {
        "index": 1286,
        "text": "",
        "depth": 0,
        "detailId": "line-1286"
      },
      {
        "index": 1291,
        "text": "",
        "depth": 0,
        "detailId": "line-1291"
      },
      {
        "index": 1301,
        "text": "",
        "depth": 0,
        "detailId": "line-1301"
      },
      {
        "index": 1306,
        "text": "",
        "depth": 0,
        "detailId": "line-1306"
      },
      {
        "index": 1311,
        "text": "",
        "depth": 0,
        "detailId": "line-1311"
      },
      {
        "index": 1321,
        "text": "",
        "depth": 0,
        "detailId": "line-1321"
      },
      {
        "index": 1347,
        "text": "",
        "depth": 0,
        "detailId": "line-1347"
      },
      {
        "index": 1356,
        "text": "",
        "depth": 0,
        "detailId": "line-1356"
      },
      {
        "index": 1361,
        "text": "",
        "depth": 0,
        "detailId": "line-1361"
      },
      {
        "index": 1369,
        "text": "",
        "depth": 0,
        "detailId": "line-1369"
      },
      {
        "index": 1377,
        "text": "",
        "depth": 0,
        "detailId": "line-1377"
      },
      {
        "index": 1391,
        "text": "",
        "depth": 0,
        "detailId": "line-1391"
      },
      {
        "index": 1405,
        "text": "",
        "depth": 0,
        "detailId": "line-1405"
      },
      {
        "index": 1418,
        "text": "",
        "depth": 0,
        "detailId": "line-1418"
      },
      {
        "index": 1423,
        "text": "",
        "depth": 0,
        "detailId": "line-1423"
      },
      {
        "index": 1431,
        "text": "",
        "depth": 0,
        "detailId": "line-1431"
      },
      {
        "index": 1439,
        "text": "",
        "depth": 0,
        "detailId": "line-1439"
      },
      {
        "index": 1447,
        "text": "",
        "depth": 0,
        "detailId": "line-1447"
      },
      {
        "index": 1451,
        "text": "",
        "depth": 0,
        "detailId": "line-1451"
      },
      {
        "index": 1469,
        "text": "",
        "depth": 0,
        "detailId": "line-1469"
      },
      {
        "index": 1478,
        "text": "",
        "depth": 0,
        "detailId": "line-1478"
      },
      {
        "index": 1483,
        "text": "",
        "depth": 0,
        "detailId": "line-1483"
      },
      {
        "index": 1491,
        "text": "",
        "depth": 0,
        "detailId": "line-1491"
      },
      {
        "index": 1499,
        "text": "",
        "depth": 0,
        "detailId": "line-1499"
      },
      {
        "index": 1512,
        "text": "",
        "depth": 0,
        "detailId": "line-1512"
      },
      {
        "index": 1525,
        "text": "",
        "depth": 0,
        "detailId": "line-1525"
      },
      {
        "index": 1538,
        "text": "",
        "depth": 0,
        "detailId": "line-1538"
      },
      {
        "index": 1543,
        "text": "",
        "depth": 0,
        "detailId": "line-1543"
      },
      {
        "index": 1551,
        "text": "",
        "depth": 0,
        "detailId": "line-1551"
      },
      {
        "index": 1559,
        "text": "",
        "depth": 0,
        "detailId": "line-1559"
      },
      {
        "index": 1567,
        "text": "",
        "depth": 0,
        "detailId": "line-1567"
      },
      {
        "index": 1594,
        "text": "",
        "depth": 0,
        "detailId": "line-1594"
      },
      {
        "index": 1603,
        "text": "",
        "depth": 0,
        "detailId": "line-1603"
      },
      {
        "index": 1608,
        "text": "",
        "depth": 0,
        "detailId": "line-1608"
      },
      {
        "index": 1616,
        "text": "",
        "depth": 0,
        "detailId": "line-1616"
      },
      {
        "index": 1624,
        "text": "",
        "depth": 0,
        "detailId": "line-1624"
      },
      {
        "index": 1638,
        "text": "",
        "depth": 0,
        "detailId": "line-1638"
      },
      {
        "index": 1652,
        "text": "",
        "depth": 0,
        "detailId": "line-1652"
      },
      {
        "index": 1665,
        "text": "",
        "depth": 0,
        "detailId": "line-1665"
      },
      {
        "index": 1670,
        "text": "",
        "depth": 0,
        "detailId": "line-1670"
      },
      {
        "index": 1678,
        "text": "",
        "depth": 0,
        "detailId": "line-1678"
      },
      {
        "index": 1686,
        "text": "",
        "depth": 0,
        "detailId": "line-1686"
      },
      {
        "index": 1694,
        "text": "",
        "depth": 0,
        "detailId": "line-1694"
      },
      {
        "index": 1698,
        "text": "",
        "depth": 0,
        "detailId": "line-1698"
      },
      {
        "index": 1716,
        "text": "",
        "depth": 0,
        "detailId": "line-1716"
      },
      {
        "index": 1725,
        "text": "",
        "depth": 0,
        "detailId": "line-1725"
      },
      {
        "index": 1730,
        "text": "",
        "depth": 0,
        "detailId": "line-1730"
      },
      {
        "index": 1738,
        "text": "",
        "depth": 0,
        "detailId": "line-1738"
      },
      {
        "index": 1746,
        "text": "",
        "depth": 0,
        "detailId": "line-1746"
      },
      {
        "index": 1759,
        "text": "",
        "depth": 0,
        "detailId": "line-1759"
      },
      {
        "index": 1772,
        "text": "",
        "depth": 0,
        "detailId": "line-1772"
      },
      {
        "index": 1785,
        "text": "",
        "depth": 0,
        "detailId": "line-1785"
      },
      {
        "index": 1790,
        "text": "",
        "depth": 0,
        "detailId": "line-1790"
      },
      {
        "index": 1798,
        "text": "",
        "depth": 0,
        "detailId": "line-1798"
      },
      {
        "index": 1806,
        "text": "",
        "depth": 0,
        "detailId": "line-1806"
      },
      {
        "index": 1814,
        "text": "",
        "depth": 0,
        "detailId": "line-1814"
      },
      {
        "index": 1818,
        "text": "",
        "depth": 0,
        "detailId": "line-1818"
      },
      {
        "index": 1827,
        "text": "",
        "depth": 0,
        "detailId": "line-1827"
      },
      {
        "index": 1835,
        "text": "",
        "depth": 0,
        "detailId": "line-1835"
      },
      {
        "index": 1838,
        "text": "",
        "depth": 0,
        "detailId": "line-1838"
      },
      {
        "index": 1844,
        "text": "",
        "depth": 0,
        "detailId": "line-1844"
      },
      {
        "index": 1852,
        "text": "",
        "depth": 0,
        "detailId": "line-1852"
      },
      {
        "index": 1857,
        "text": "",
        "depth": 0,
        "detailId": "line-1857"
      },
      {
        "index": 1869,
        "text": "",
        "depth": 0,
        "detailId": "line-1869"
      },
      {
        "index": 1882,
        "text": "",
        "depth": 0,
        "detailId": "line-1882"
      },
      {
        "index": 1895,
        "text": "",
        "depth": 0,
        "detailId": "line-1895"
      },
      {
        "index": 1902,
        "text": "",
        "depth": 0,
        "detailId": "line-1902"
      },
      {
        "index": 1913,
        "text": "",
        "depth": 0,
        "detailId": "line-1913"
      },
      {
        "index": 1921,
        "text": "",
        "depth": 0,
        "detailId": "line-1921"
      },
      {
        "index": 1928,
        "text": "",
        "depth": 0,
        "detailId": "line-1928"
      },
      {
        "index": 1931,
        "text": "",
        "depth": 0,
        "detailId": "line-1931"
      },
      {
        "index": 1940,
        "text": "",
        "depth": 0,
        "detailId": "line-1940"
      },
      {
        "index": 1944,
        "text": "",
        "depth": 0,
        "detailId": "line-1944"
      },
      {
        "index": 1954,
        "text": "",
        "depth": 0,
        "detailId": "line-1954"
      },
      {
        "index": 1959,
        "text": "",
        "depth": 0,
        "detailId": "line-1959"
      },
      {
        "index": 1962,
        "text": "",
        "depth": 0,
        "detailId": "line-1962"
      },
      {
        "index": 1972,
        "text": "",
        "depth": 0,
        "detailId": "line-1972"
      },
      {
        "index": 1980,
        "text": "",
        "depth": 0,
        "detailId": "line-1980"
      },
      {
        "index": 1984,
        "text": "",
        "depth": 0,
        "detailId": "line-1984"
      },
      {
        "index": 1988,
        "text": "",
        "depth": 0,
        "detailId": "line-1988"
      },
      {
        "index": 1994,
        "text": "",
        "depth": 0,
        "detailId": "line-1994"
      },
      {
        "index": 2001,
        "text": "",
        "depth": 0,
        "detailId": "line-2001"
      },
      {
        "index": 2004,
        "text": "",
        "depth": 0,
        "detailId": "line-2004"
      },
      {
        "index": 2020,
        "text": "",
        "depth": 0,
        "detailId": "line-2020"
      },
      {
        "index": 2023,
        "text": "",
        "depth": 0,
        "detailId": "line-2023"
      },
      {
        "index": 2028,
        "text": "",
        "depth": 0,
        "detailId": "line-2028"
      },
      {
        "index": 2037,
        "text": "",
        "depth": 0,
        "detailId": "line-2037"
      },
      {
        "index": 2040,
        "text": "",
        "depth": 0,
        "detailId": "line-2040"
      },
      {
        "index": 2044,
        "text": "",
        "depth": 0,
        "detailId": "line-2044"
      },
      {
        "index": 2050,
        "text": "",
        "depth": 0,
        "detailId": "line-2050"
      },
      {
        "index": 2070,
        "text": "",
        "depth": 0,
        "detailId": "line-2070"
      },
      {
        "index": 2077,
        "text": "",
        "depth": 0,
        "detailId": "line-2077"
      },
      {
        "index": 2081,
        "text": "",
        "depth": 0,
        "detailId": "line-2081"
      },
      {
        "index": 2089,
        "text": "",
        "depth": 0,
        "detailId": "line-2089"
      },
      {
        "index": 2092,
        "text": "",
        "depth": 0,
        "detailId": "line-2092"
      },
      {
        "index": 2095,
        "text": "",
        "depth": 0,
        "detailId": "line-2095"
      },
      {
        "index": 2098,
        "text": "",
        "depth": 0,
        "detailId": "line-2098"
      },
      {
        "index": 2103,
        "text": "",
        "depth": 0,
        "detailId": "line-2103"
      },
      {
        "index": 2113,
        "text": "",
        "depth": 0,
        "detailId": "line-2113"
      },
      {
        "index": 2116,
        "text": "",
        "depth": 0,
        "detailId": "line-2116"
      },
      {
        "index": 2141,
        "text": "",
        "depth": 0,
        "detailId": "line-2141"
      },
      {
        "index": 2148,
        "text": "",
        "depth": 0,
        "detailId": "line-2148"
      },
      {
        "index": 2152,
        "text": "",
        "depth": 0,
        "detailId": "line-2152"
      },
      {
        "index": 2160,
        "text": "",
        "depth": 0,
        "detailId": "line-2160"
      },
      {
        "index": 2163,
        "text": "",
        "depth": 0,
        "detailId": "line-2163"
      },
      {
        "index": 2166,
        "text": "",
        "depth": 0,
        "detailId": "line-2166"
      },
      {
        "index": 2169,
        "text": "",
        "depth": 0,
        "detailId": "line-2169"
      },
      {
        "index": 2174,
        "text": "",
        "depth": 0,
        "detailId": "line-2174"
      },
      {
        "index": 2184,
        "text": "",
        "depth": 0,
        "detailId": "line-2184"
      },
      {
        "index": 2187,
        "text": "",
        "depth": 0,
        "detailId": "line-2187"
      },
      {
        "index": 2193,
        "text": "",
        "depth": 0,
        "detailId": "line-2193"
      },
      {
        "index": 2207,
        "text": "",
        "depth": 0,
        "detailId": "line-2207"
      },
      {
        "index": 2212,
        "text": "",
        "depth": 0,
        "detailId": "line-2212"
      },
      {
        "index": 2218,
        "text": "",
        "depth": 0,
        "detailId": "line-2218"
      },
      {
        "index": 2226,
        "text": "",
        "depth": 0,
        "detailId": "line-2226"
      },
      {
        "index": 2233,
        "text": "",
        "depth": 0,
        "detailId": "line-2233"
      },
      {
        "index": 2237,
        "text": "",
        "depth": 0,
        "detailId": "line-2237"
      },
      {
        "index": 2245,
        "text": "",
        "depth": 0,
        "detailId": "line-2245"
      },
      {
        "index": 2248,
        "text": "",
        "depth": 0,
        "detailId": "line-2248"
      },
      {
        "index": 2251,
        "text": "",
        "depth": 0,
        "detailId": "line-2251"
      },
      {
        "index": 2254,
        "text": "",
        "depth": 0,
        "detailId": "line-2254"
      },
      {
        "index": 2259,
        "text": "",
        "depth": 0,
        "detailId": "line-2259"
      },
      {
        "index": 2263,
        "text": "",
        "depth": 0,
        "detailId": "line-2263"
      },
      {
        "index": 2268,
        "text": "",
        "depth": 0,
        "detailId": "line-2268"
      },
      {
        "index": 2275,
        "text": "",
        "depth": 0,
        "detailId": "line-2275"
      },
      {
        "index": 2278,
        "text": "",
        "depth": 0,
        "detailId": "line-2278"
      },
      {
        "index": 2293,
        "text": "",
        "depth": 0,
        "detailId": "line-2293"
      },
      {
        "index": 2298,
        "text": "",
        "depth": 0,
        "detailId": "line-2298"
      },
      {
        "index": 2305,
        "text": "",
        "depth": 0,
        "detailId": "line-2305"
      },
      {
        "index": 2308,
        "text": "",
        "depth": 0,
        "detailId": "line-2308"
      },
      {
        "index": 2314,
        "text": "",
        "depth": 0,
        "detailId": "line-2314"
      },
      {
        "index": 2319,
        "text": "",
        "depth": 0,
        "detailId": "line-2319"
      },
      {
        "index": 2323,
        "text": "",
        "depth": 0,
        "detailId": "line-2323"
      },
      {
        "index": 2337,
        "text": "",
        "depth": 0,
        "detailId": "line-2337"
      },
      {
        "index": 2342,
        "text": "",
        "depth": 0,
        "detailId": "line-2342"
      },
      {
        "index": 2348,
        "text": "",
        "depth": 0,
        "detailId": "line-2348"
      },
      {
        "index": 2356,
        "text": "",
        "depth": 0,
        "detailId": "line-2356"
      },
      {
        "index": 2363,
        "text": "",
        "depth": 0,
        "detailId": "line-2363"
      },
      {
        "index": 2367,
        "text": "",
        "depth": 0,
        "detailId": "line-2367"
      },
      {
        "index": 2375,
        "text": "",
        "depth": 0,
        "detailId": "line-2375"
      },
      {
        "index": 2378,
        "text": "",
        "depth": 0,
        "detailId": "line-2378"
      },
      {
        "index": 2381,
        "text": "",
        "depth": 0,
        "detailId": "line-2381"
      },
      {
        "index": 2384,
        "text": "",
        "depth": 0,
        "detailId": "line-2384"
      },
      {
        "index": 2389,
        "text": "",
        "depth": 0,
        "detailId": "line-2389"
      },
      {
        "index": 2393,
        "text": "",
        "depth": 0,
        "detailId": "line-2393"
      },
      {
        "index": 2398,
        "text": "",
        "depth": 0,
        "detailId": "line-2398"
      },
      {
        "index": 2405,
        "text": "",
        "depth": 0,
        "detailId": "line-2405"
      },
      {
        "index": 2408,
        "text": "",
        "depth": 0,
        "detailId": "line-2408"
      },
      {
        "index": 2423,
        "text": "",
        "depth": 0,
        "detailId": "line-2423"
      },
      {
        "index": 2428,
        "text": "",
        "depth": 0,
        "detailId": "line-2428"
      },
      {
        "index": 2434,
        "text": "",
        "depth": 0,
        "detailId": "line-2434"
      },
      {
        "index": 2438,
        "text": "",
        "depth": 0,
        "detailId": "line-2438"
      },
      {
        "index": 2454,
        "text": "",
        "depth": 0,
        "detailId": "line-2454"
      },
      {
        "index": 2459,
        "text": "",
        "depth": 0,
        "detailId": "line-2459"
      },
      {
        "index": 2465,
        "text": "",
        "depth": 0,
        "detailId": "line-2465"
      },
      {
        "index": 2474,
        "text": "",
        "depth": 0,
        "detailId": "line-2474"
      },
      {
        "index": 2479,
        "text": "",
        "depth": 0,
        "detailId": "line-2479"
      },
      {
        "index": 2488,
        "text": "",
        "depth": 0,
        "detailId": "line-2488"
      },
      {
        "index": 2498,
        "text": "",
        "depth": 0,
        "detailId": "line-2498"
      },
      {
        "index": 2503,
        "text": "",
        "depth": 0,
        "detailId": "line-2503"
      },
      {
        "index": 2516,
        "text": "",
        "depth": 0,
        "detailId": "line-2516"
      },
      {
        "index": 2527,
        "text": "",
        "depth": 0,
        "detailId": "line-2527"
      },
      {
        "index": 2533,
        "text": "",
        "depth": 0,
        "detailId": "line-2533"
      },
      {
        "index": 2542,
        "text": "",
        "depth": 0,
        "detailId": "line-2542"
      },
      {
        "index": 2546,
        "text": "",
        "depth": 0,
        "detailId": "line-2546"
      },
      {
        "index": 2552,
        "text": "",
        "depth": 0,
        "detailId": "line-2552"
      },
      {
        "index": 2559,
        "text": "",
        "depth": 0,
        "detailId": "line-2559"
      },
      {
        "index": 2564,
        "text": "",
        "depth": 0,
        "detailId": "line-2564"
      },
      {
        "index": 2571,
        "text": "",
        "depth": 0,
        "detailId": "line-2571"
      },
      {
        "index": 2580,
        "text": "",
        "depth": 0,
        "detailId": "line-2580"
      },
      {
        "index": 2588,
        "text": "",
        "depth": 0,
        "detailId": "line-2588"
      },
      {
        "index": 2599,
        "text": "",
        "depth": 0,
        "detailId": "line-2599"
      },
      {
        "index": 2602,
        "text": "",
        "depth": 0,
        "detailId": "line-2602"
      },
      {
        "index": 2605,
        "text": "",
        "depth": 0,
        "detailId": "line-2605"
      },
      {
        "index": 2608,
        "text": "",
        "depth": 0,
        "detailId": "line-2608"
      },
      {
        "index": 2621,
        "text": "",
        "depth": 0,
        "detailId": "line-2621"
      },
      {
        "index": 2628,
        "text": "",
        "depth": 0,
        "detailId": "line-2628"
      },
      {
        "index": 2640,
        "text": "",
        "depth": 0,
        "detailId": "line-2640"
      },
      {
        "index": 2644,
        "text": "",
        "depth": 0,
        "detailId": "line-2644"
      },
      {
        "index": 2652,
        "text": "",
        "depth": 0,
        "detailId": "line-2652"
      },
      {
        "index": 2659,
        "text": "",
        "depth": 0,
        "detailId": "line-2659"
      },
      {
        "index": 2673,
        "text": "",
        "depth": 0,
        "detailId": "line-2673"
      },
      {
        "index": 2678,
        "text": "",
        "depth": 0,
        "detailId": "line-2678"
      },
      {
        "index": 2684,
        "text": "",
        "depth": 0,
        "detailId": "line-2684"
      },
      {
        "index": 2692,
        "text": "",
        "depth": 0,
        "detailId": "line-2692"
      },
      {
        "index": 2699,
        "text": "",
        "depth": 0,
        "detailId": "line-2699"
      },
      {
        "index": 2703,
        "text": "",
        "depth": 0,
        "detailId": "line-2703"
      },
      {
        "index": 2711,
        "text": "",
        "depth": 0,
        "detailId": "line-2711"
      },
      {
        "index": 2714,
        "text": "",
        "depth": 0,
        "detailId": "line-2714"
      },
      {
        "index": 2717,
        "text": "",
        "depth": 0,
        "detailId": "line-2717"
      },
      {
        "index": 2720,
        "text": "",
        "depth": 0,
        "detailId": "line-2720"
      },
      {
        "index": 2725,
        "text": "",
        "depth": 0,
        "detailId": "line-2725"
      },
      {
        "index": 2729,
        "text": "",
        "depth": 0,
        "detailId": "line-2729"
      },
      {
        "index": 2734,
        "text": "",
        "depth": 0,
        "detailId": "line-2734"
      },
      {
        "index": 2741,
        "text": "",
        "depth": 0,
        "detailId": "line-2741"
      },
      {
        "index": 2744,
        "text": "",
        "depth": 0,
        "detailId": "line-2744"
      },
      {
        "index": 2759,
        "text": "",
        "depth": 0,
        "detailId": "line-2759"
      },
      {
        "index": 2764,
        "text": "",
        "depth": 0,
        "detailId": "line-2764"
      },
      {
        "index": 2769,
        "text": "",
        "depth": 0,
        "detailId": "line-2769"
      },
      {
        "index": 2780,
        "text": "",
        "depth": 0,
        "detailId": "line-2780"
      },
      {
        "index": 2791,
        "text": "",
        "depth": 0,
        "detailId": "line-2791"
      },
      {
        "index": 2800,
        "text": "",
        "depth": 0,
        "detailId": "line-2800"
      },
      {
        "index": 2810,
        "text": "",
        "depth": 0,
        "detailId": "line-2810"
      },
      {
        "index": 2814,
        "text": "",
        "depth": 0,
        "detailId": "line-2814"
      },
      {
        "index": 2821,
        "text": "",
        "depth": 0,
        "detailId": "line-2821"
      },
      {
        "index": 2824,
        "text": "",
        "depth": 0,
        "detailId": "line-2824"
      },
      {
        "index": 2832,
        "text": "",
        "depth": 0,
        "detailId": "line-2832"
      },
      {
        "index": 2835,
        "text": "",
        "depth": 0,
        "detailId": "line-2835"
      },
      {
        "index": 2843,
        "text": "",
        "depth": 0,
        "detailId": "line-2843"
      },
      {
        "index": 2847,
        "text": "",
        "depth": 0,
        "detailId": "line-2847"
      },
      {
        "index": 2870,
        "text": "",
        "depth": 0,
        "detailId": "line-2870"
      },
      {
        "index": 2874,
        "text": "",
        "depth": 0,
        "detailId": "line-2874"
      },
      {
        "index": 2881,
        "text": "",
        "depth": 0,
        "detailId": "line-2881"
      },
      {
        "index": 2886,
        "text": "",
        "depth": 0,
        "detailId": "line-2886"
      },
      {
        "index": 2892,
        "text": "",
        "depth": 0,
        "detailId": "line-2892"
      },
      {
        "index": 2896,
        "text": "",
        "depth": 0,
        "detailId": "line-2896"
      },
      {
        "index": 2899,
        "text": "",
        "depth": 0,
        "detailId": "line-2899"
      },
      {
        "index": 2907,
        "text": "",
        "depth": 0,
        "detailId": "line-2907"
      },
      {
        "index": 2910,
        "text": "",
        "depth": 0,
        "detailId": "line-2910"
      },
      {
        "index": 2921,
        "text": "",
        "depth": 0,
        "detailId": "line-2921"
      },
      {
        "index": 2925,
        "text": "",
        "depth": 0,
        "detailId": "line-2925"
      },
      {
        "index": 2938,
        "text": "",
        "depth": 0,
        "detailId": "line-2938"
      },
      {
        "index": 2951,
        "text": "",
        "depth": 0,
        "detailId": "line-2951"
      },
      {
        "index": 2969,
        "text": "",
        "depth": 0,
        "detailId": "line-2969"
      },
      {
        "index": 2982,
        "text": "",
        "depth": 0,
        "detailId": "line-2982"
      },
      {
        "index": 2995,
        "text": "",
        "depth": 0,
        "detailId": "line-2995"
      },
      {
        "index": 3002,
        "text": "",
        "depth": 0,
        "detailId": "line-3002"
      },
      {
        "index": 3013,
        "text": "",
        "depth": 0,
        "detailId": "line-3013"
      },
      {
        "index": 3021,
        "text": "",
        "depth": 0,
        "detailId": "line-3021"
      },
      {
        "index": 3028,
        "text": "",
        "depth": 0,
        "detailId": "line-3028"
      },
      {
        "index": 3031,
        "text": "",
        "depth": 0,
        "detailId": "line-3031"
      },
      {
        "index": 3040,
        "text": "",
        "depth": 0,
        "detailId": "line-3040"
      },
      {
        "index": 3044,
        "text": "",
        "depth": 0,
        "detailId": "line-3044"
      },
      {
        "index": 3054,
        "text": "",
        "depth": 0,
        "detailId": "line-3054"
      },
      {
        "index": 3059,
        "text": "",
        "depth": 0,
        "detailId": "line-3059"
      },
      {
        "index": 3062,
        "text": "",
        "depth": 0,
        "detailId": "line-3062"
      },
      {
        "index": 3072,
        "text": "",
        "depth": 0,
        "detailId": "line-3072"
      },
      {
        "index": 3080,
        "text": "",
        "depth": 0,
        "detailId": "line-3080"
      },
      {
        "index": 3084,
        "text": "",
        "depth": 0,
        "detailId": "line-3084"
      },
      {
        "index": 3088,
        "text": "",
        "depth": 0,
        "detailId": "line-3088"
      },
      {
        "index": 3094,
        "text": "",
        "depth": 0,
        "detailId": "line-3094"
      },
      {
        "index": 3101,
        "text": "",
        "depth": 0,
        "detailId": "line-3101"
      },
      {
        "index": 3104,
        "text": "",
        "depth": 0,
        "detailId": "line-3104"
      },
      {
        "index": 3120,
        "text": "",
        "depth": 0,
        "detailId": "line-3120"
      },
      {
        "index": 3123,
        "text": "",
        "depth": 0,
        "detailId": "line-3123"
      },
      {
        "index": 3128,
        "text": "",
        "depth": 0,
        "detailId": "line-3128"
      },
      {
        "index": 3137,
        "text": "",
        "depth": 0,
        "detailId": "line-3137"
      },
      {
        "index": 3140,
        "text": "",
        "depth": 0,
        "detailId": "line-3140"
      },
      {
        "index": 3147,
        "text": "",
        "depth": 0,
        "detailId": "line-3147"
      },
      {
        "index": 3153,
        "text": "",
        "depth": 0,
        "detailId": "line-3153"
      },
      {
        "index": 3174,
        "text": "",
        "depth": 0,
        "detailId": "line-3174"
      },
      {
        "index": 3181,
        "text": "",
        "depth": 0,
        "detailId": "line-3181"
      },
      {
        "index": 3185,
        "text": "",
        "depth": 0,
        "detailId": "line-3185"
      },
      {
        "index": 3193,
        "text": "",
        "depth": 0,
        "detailId": "line-3193"
      },
      {
        "index": 3196,
        "text": "",
        "depth": 0,
        "detailId": "line-3196"
      },
      {
        "index": 3199,
        "text": "",
        "depth": 0,
        "detailId": "line-3199"
      },
      {
        "index": 3202,
        "text": "",
        "depth": 0,
        "detailId": "line-3202"
      },
      {
        "index": 3207,
        "text": "",
        "depth": 0,
        "detailId": "line-3207"
      },
      {
        "index": 3217,
        "text": "",
        "depth": 0,
        "detailId": "line-3217"
      },
      {
        "index": 3220,
        "text": "",
        "depth": 0,
        "detailId": "line-3220"
      },
      {
        "index": 3245,
        "text": "",
        "depth": 0,
        "detailId": "line-3245"
      },
      {
        "index": 3252,
        "text": "",
        "depth": 0,
        "detailId": "line-3252"
      },
      {
        "index": 3256,
        "text": "",
        "depth": 0,
        "detailId": "line-3256"
      },
      {
        "index": 3264,
        "text": "",
        "depth": 0,
        "detailId": "line-3264"
      },
      {
        "index": 3267,
        "text": "",
        "depth": 0,
        "detailId": "line-3267"
      },
      {
        "index": 3270,
        "text": "",
        "depth": 0,
        "detailId": "line-3270"
      },
      {
        "index": 3273,
        "text": "",
        "depth": 0,
        "detailId": "line-3273"
      },
      {
        "index": 3278,
        "text": "",
        "depth": 0,
        "detailId": "line-3278"
      },
      {
        "index": 3288,
        "text": "",
        "depth": 0,
        "detailId": "line-3288"
      },
      {
        "index": 3291,
        "text": "",
        "depth": 0,
        "detailId": "line-3291"
      },
      {
        "index": 3297,
        "text": "",
        "depth": 0,
        "detailId": "line-3297"
      },
      {
        "index": 3313,
        "text": "",
        "depth": 0,
        "detailId": "line-3313"
      },
      {
        "index": 3318,
        "text": "",
        "depth": 0,
        "detailId": "line-3318"
      },
      {
        "index": 3324,
        "text": "",
        "depth": 0,
        "detailId": "line-3324"
      },
      {
        "index": 3332,
        "text": "",
        "depth": 0,
        "detailId": "line-3332"
      },
      {
        "index": 3339,
        "text": "",
        "depth": 0,
        "detailId": "line-3339"
      },
      {
        "index": 3343,
        "text": "",
        "depth": 0,
        "detailId": "line-3343"
      },
      {
        "index": 3351,
        "text": "",
        "depth": 0,
        "detailId": "line-3351"
      },
      {
        "index": 3354,
        "text": "",
        "depth": 0,
        "detailId": "line-3354"
      },
      {
        "index": 3357,
        "text": "",
        "depth": 0,
        "detailId": "line-3357"
      },
      {
        "index": 3360,
        "text": "",
        "depth": 0,
        "detailId": "line-3360"
      },
      {
        "index": 3365,
        "text": "",
        "depth": 0,
        "detailId": "line-3365"
      },
      {
        "index": 3369,
        "text": "",
        "depth": 0,
        "detailId": "line-3369"
      },
      {
        "index": 3374,
        "text": "",
        "depth": 0,
        "detailId": "line-3374"
      },
      {
        "index": 3381,
        "text": "",
        "depth": 0,
        "detailId": "line-3381"
      },
      {
        "index": 3384,
        "text": "",
        "depth": 0,
        "detailId": "line-3384"
      },
      {
        "index": 3399,
        "text": "",
        "depth": 0,
        "detailId": "line-3399"
      },
      {
        "index": 3404,
        "text": "",
        "depth": 0,
        "detailId": "line-3404"
      },
      {
        "index": 3417,
        "text": "",
        "depth": 0,
        "detailId": "line-3417"
      },
      {
        "index": 3420,
        "text": "",
        "depth": 0,
        "detailId": "line-3420"
      },
      {
        "index": 3426,
        "text": "",
        "depth": 0,
        "detailId": "line-3426"
      },
      {
        "index": 3431,
        "text": "",
        "depth": 0,
        "detailId": "line-3431"
      },
      {
        "index": 3435,
        "text": "",
        "depth": 0,
        "detailId": "line-3435"
      },
      {
        "index": 3452,
        "text": "",
        "depth": 0,
        "detailId": "line-3452"
      },
      {
        "index": 3457,
        "text": "",
        "depth": 0,
        "detailId": "line-3457"
      },
      {
        "index": 3463,
        "text": "",
        "depth": 0,
        "detailId": "line-3463"
      },
      {
        "index": 3471,
        "text": "",
        "depth": 0,
        "detailId": "line-3471"
      },
      {
        "index": 3478,
        "text": "",
        "depth": 0,
        "detailId": "line-3478"
      },
      {
        "index": 3482,
        "text": "",
        "depth": 0,
        "detailId": "line-3482"
      },
      {
        "index": 3490,
        "text": "",
        "depth": 0,
        "detailId": "line-3490"
      },
      {
        "index": 3493,
        "text": "",
        "depth": 0,
        "detailId": "line-3493"
      },
      {
        "index": 3496,
        "text": "",
        "depth": 0,
        "detailId": "line-3496"
      },
      {
        "index": 3499,
        "text": "",
        "depth": 0,
        "detailId": "line-3499"
      },
      {
        "index": 3504,
        "text": "",
        "depth": 0,
        "detailId": "line-3504"
      },
      {
        "index": 3508,
        "text": "",
        "depth": 0,
        "detailId": "line-3508"
      },
      {
        "index": 3513,
        "text": "",
        "depth": 0,
        "detailId": "line-3513"
      },
      {
        "index": 3520,
        "text": "",
        "depth": 0,
        "detailId": "line-3520"
      },
      {
        "index": 3523,
        "text": "",
        "depth": 0,
        "detailId": "line-3523"
      },
      {
        "index": 3538,
        "text": "",
        "depth": 0,
        "detailId": "line-3538"
      },
      {
        "index": 3543,
        "text": "",
        "depth": 0,
        "detailId": "line-3543"
      },
      {
        "index": 3549,
        "text": "",
        "depth": 0,
        "detailId": "line-3549"
      },
      {
        "index": 3553,
        "text": "",
        "depth": 0,
        "detailId": "line-3553"
      },
      {
        "index": 3570,
        "text": "",
        "depth": 0,
        "detailId": "line-3570"
      },
      {
        "index": 3575,
        "text": "",
        "depth": 0,
        "detailId": "line-3575"
      },
      {
        "index": 3581,
        "text": "",
        "depth": 0,
        "detailId": "line-3581"
      },
      {
        "index": 3590,
        "text": "",
        "depth": 0,
        "detailId": "line-3590"
      },
      {
        "index": 3608,
        "text": "",
        "depth": 0,
        "detailId": "line-3608"
      },
      {
        "index": 3624,
        "text": "",
        "depth": 0,
        "detailId": "line-3624"
      },
      {
        "index": 3634,
        "text": "",
        "depth": 0,
        "detailId": "line-3634"
      },
      {
        "index": 3639,
        "text": "",
        "depth": 0,
        "detailId": "line-3639"
      },
      {
        "index": 3652,
        "text": "",
        "depth": 0,
        "detailId": "line-3652"
      },
      {
        "index": 3663,
        "text": "",
        "depth": 0,
        "detailId": "line-3663"
      },
      {
        "index": 3669,
        "text": "",
        "depth": 0,
        "detailId": "line-3669"
      },
      {
        "index": 3678,
        "text": "",
        "depth": 0,
        "detailId": "line-3678"
      },
      {
        "index": 3682,
        "text": "",
        "depth": 0,
        "detailId": "line-3682"
      },
      {
        "index": 3688,
        "text": "",
        "depth": 0,
        "detailId": "line-3688"
      },
      {
        "index": 3695,
        "text": "",
        "depth": 0,
        "detailId": "line-3695"
      },
      {
        "index": 3700,
        "text": "",
        "depth": 0,
        "detailId": "line-3700"
      },
      {
        "index": 3707,
        "text": "",
        "depth": 0,
        "detailId": "line-3707"
      },
      {
        "index": 3716,
        "text": "",
        "depth": 0,
        "detailId": "line-3716"
      },
      {
        "index": 3724,
        "text": "",
        "depth": 0,
        "detailId": "line-3724"
      },
      {
        "index": 3735,
        "text": "",
        "depth": 0,
        "detailId": "line-3735"
      },
      {
        "index": 3738,
        "text": "",
        "depth": 0,
        "detailId": "line-3738"
      },
      {
        "index": 3741,
        "text": "",
        "depth": 0,
        "detailId": "line-3741"
      },
      {
        "index": 3744,
        "text": "",
        "depth": 0,
        "detailId": "line-3744"
      },
      {
        "index": 3757,
        "text": "",
        "depth": 0,
        "detailId": "line-3757"
      },
      {
        "index": 3764,
        "text": "",
        "depth": 0,
        "detailId": "line-3764"
      },
      {
        "index": 3776,
        "text": "",
        "depth": 0,
        "detailId": "line-3776"
      },
      {
        "index": 3780,
        "text": "",
        "depth": 0,
        "detailId": "line-3780"
      },
      {
        "index": 3788,
        "text": "",
        "depth": 0,
        "detailId": "line-3788"
      },
      {
        "index": 3795,
        "text": "",
        "depth": 0,
        "detailId": "line-3795"
      },
      {
        "index": 3816,
        "text": "",
        "depth": 0,
        "detailId": "line-3816"
      },
      {
        "index": 3821,
        "text": "",
        "depth": 0,
        "detailId": "line-3821"
      },
      {
        "index": 3827,
        "text": "",
        "depth": 0,
        "detailId": "line-3827"
      },
      {
        "index": 3835,
        "text": "",
        "depth": 0,
        "detailId": "line-3835"
      },
      {
        "index": 3842,
        "text": "",
        "depth": 0,
        "detailId": "line-3842"
      },
      {
        "index": 3846,
        "text": "",
        "depth": 0,
        "detailId": "line-3846"
      },
      {
        "index": 3854,
        "text": "",
        "depth": 0,
        "detailId": "line-3854"
      },
      {
        "index": 3857,
        "text": "",
        "depth": 0,
        "detailId": "line-3857"
      },
      {
        "index": 3860,
        "text": "",
        "depth": 0,
        "detailId": "line-3860"
      },
      {
        "index": 3863,
        "text": "",
        "depth": 0,
        "detailId": "line-3863"
      },
      {
        "index": 3868,
        "text": "",
        "depth": 0,
        "detailId": "line-3868"
      },
      {
        "index": 3872,
        "text": "",
        "depth": 0,
        "detailId": "line-3872"
      },
      {
        "index": 3877,
        "text": "",
        "depth": 0,
        "detailId": "line-3877"
      },
      {
        "index": 3884,
        "text": "",
        "depth": 0,
        "detailId": "line-3884"
      },
      {
        "index": 3887,
        "text": "",
        "depth": 0,
        "detailId": "line-3887"
      },
      {
        "index": 3902,
        "text": "",
        "depth": 0,
        "detailId": "line-3902"
      },
      {
        "index": 3907,
        "text": "",
        "depth": 0,
        "detailId": "line-3907"
      },
      {
        "index": 3912,
        "text": "",
        "depth": 0,
        "detailId": "line-3912"
      },
      {
        "index": 3923,
        "text": "",
        "depth": 0,
        "detailId": "line-3923"
      },
      {
        "index": 3932,
        "text": "",
        "depth": 0,
        "detailId": "line-3932"
      },
      {
        "index": 3942,
        "text": "",
        "depth": 0,
        "detailId": "line-3942"
      },
      {
        "index": 3946,
        "text": "",
        "depth": 0,
        "detailId": "line-3946"
      },
      {
        "index": 3953,
        "text": "",
        "depth": 0,
        "detailId": "line-3953"
      },
      {
        "index": 3956,
        "text": "",
        "depth": 0,
        "detailId": "line-3956"
      },
      {
        "index": 3963,
        "text": "",
        "depth": 0,
        "detailId": "line-3963"
      },
      {
        "index": 3966,
        "text": "",
        "depth": 0,
        "detailId": "line-3966"
      },
      {
        "index": 3974,
        "text": "",
        "depth": 0,
        "detailId": "line-3974"
      },
      {
        "index": 3978,
        "text": "",
        "depth": 0,
        "detailId": "line-3978"
      },
      {
        "index": 4001,
        "text": "",
        "depth": 0,
        "detailId": "line-4001"
      },
      {
        "index": 4005,
        "text": "",
        "depth": 0,
        "detailId": "line-4005"
      },
      {
        "index": 4012,
        "text": "",
        "depth": 0,
        "detailId": "line-4012"
      },
      {
        "index": 4017,
        "text": "",
        "depth": 0,
        "detailId": "line-4017"
      },
      {
        "index": 4026,
        "text": "",
        "depth": 0,
        "detailId": "line-4026"
      },
      {
        "index": 4033,
        "text": "",
        "depth": 0,
        "detailId": "line-4033"
      },
      {
        "index": 4068,
        "text": "",
        "depth": 0,
        "detailId": "line-4068"
      },
      {
        "index": 4081,
        "text": "",
        "depth": 0,
        "detailId": "line-4081"
      },
      {
        "index": 4086,
        "text": "",
        "depth": 0,
        "detailId": "line-4086"
      },
      {
        "index": 4093,
        "text": "",
        "depth": 0,
        "detailId": "line-4093"
      },
      {
        "index": 4101,
        "text": "",
        "depth": 0,
        "detailId": "line-4101"
      },
      {
        "index": 4111,
        "text": "",
        "depth": 0,
        "detailId": "line-4111"
      },
      {
        "index": 4124,
        "text": "",
        "depth": 0,
        "detailId": "line-4124"
      },
      {
        "index": 4131,
        "text": "",
        "depth": 0,
        "detailId": "line-4131"
      },
      {
        "index": 4149,
        "text": "",
        "depth": 0,
        "detailId": "line-4149"
      },
      {
        "index": 4172,
        "text": "",
        "depth": 0,
        "detailId": "line-4172"
      },
      {
        "index": 4177,
        "text": "",
        "depth": 0,
        "detailId": "line-4177"
      },
      {
        "index": 4183,
        "text": "",
        "depth": 0,
        "detailId": "line-4183"
      },
      {
        "index": 4191,
        "text": "",
        "depth": 0,
        "detailId": "line-4191"
      },
      {
        "index": 4197,
        "text": "",
        "depth": 0,
        "detailId": "line-4197"
      },
      {
        "index": 4206,
        "text": "",
        "depth": 0,
        "detailId": "line-4206"
      },
      {
        "index": 4210,
        "text": "",
        "depth": 0,
        "detailId": "line-4210"
      },
      {
        "index": 4222,
        "text": "",
        "depth": 0,
        "detailId": "line-4222"
      },
      {
        "index": 4236,
        "text": "",
        "depth": 0,
        "detailId": "line-4236"
      },
      {
        "index": 4242,
        "text": "",
        "depth": 0,
        "detailId": "line-4242"
      },
      {
        "index": 4255,
        "text": "",
        "depth": 0,
        "detailId": "line-4255"
      },
      {
        "index": 4265,
        "text": "",
        "depth": 0,
        "detailId": "line-4265"
      },
      {
        "index": 4272,
        "text": "",
        "depth": 0,
        "detailId": "line-4272"
      },
      {
        "index": 4281,
        "text": "",
        "depth": 0,
        "detailId": "line-4281"
      },
      {
        "index": 4289,
        "text": "",
        "depth": 0,
        "detailId": "line-4289"
      },
      {
        "index": 4323,
        "text": "",
        "depth": 0,
        "detailId": "line-4323"
      },
      {
        "index": 4333,
        "text": "",
        "depth": 0,
        "detailId": "line-4333"
      },
      {
        "index": 4336,
        "text": "",
        "depth": 0,
        "detailId": "line-4336"
      },
      {
        "index": 4339,
        "text": "",
        "depth": 0,
        "detailId": "line-4339"
      },
      {
        "index": 4342,
        "text": "",
        "depth": 0,
        "detailId": "line-4342"
      },
      {
        "index": 4353,
        "text": "",
        "depth": 0,
        "detailId": "line-4353"
      },
      {
        "index": 4360,
        "text": "",
        "depth": 0,
        "detailId": "line-4360"
      },
      {
        "index": 4372,
        "text": "",
        "depth": 0,
        "detailId": "line-4372"
      },
      {
        "index": 4380,
        "text": "",
        "depth": 0,
        "detailId": "line-4380"
      },
      {
        "index": 4388,
        "text": "",
        "depth": 0,
        "detailId": "line-4388"
      },
      {
        "index": 4391,
        "text": "",
        "depth": 0,
        "detailId": "line-4391"
      },
      {
        "index": 4403,
        "text": "",
        "depth": 0,
        "detailId": "line-4403"
      },
      {
        "index": 4407,
        "text": "",
        "depth": 0,
        "detailId": "line-4407"
      },
      {
        "index": 4415,
        "text": "",
        "depth": 0,
        "detailId": "line-4415"
      },
      {
        "index": 4422,
        "text": "",
        "depth": 0,
        "detailId": "line-4422"
      },
      {
        "index": 4426,
        "text": "",
        "depth": 0,
        "detailId": "line-4426"
      },
      {
        "index": 4431,
        "text": "",
        "depth": 0,
        "detailId": "line-4431"
      },
      {
        "index": 4441,
        "text": "",
        "depth": 0,
        "detailId": "line-4441"
      },
      {
        "index": 4448,
        "text": "",
        "depth": 0,
        "detailId": "line-4448"
      },
      {
        "index": 4453,
        "text": "",
        "depth": 0,
        "detailId": "line-4453"
      },
      {
        "index": 4464,
        "text": "",
        "depth": 0,
        "detailId": "line-4464"
      },
      {
        "index": 4471,
        "text": "",
        "depth": 0,
        "detailId": "line-4471"
      },
      {
        "index": 4476,
        "text": "",
        "depth": 0,
        "detailId": "line-4476"
      },
      {
        "index": 4482,
        "text": "",
        "depth": 0,
        "detailId": "line-4482"
      },
      {
        "index": 4489,
        "text": "",
        "depth": 0,
        "detailId": "line-4489"
      },
      {
        "index": 4494,
        "text": "",
        "depth": 0,
        "detailId": "line-4494"
      },
      {
        "index": 4518,
        "text": "",
        "depth": 0,
        "detailId": "line-4518"
      },
      {
        "index": 4530,
        "text": "",
        "depth": 0,
        "detailId": "line-4530"
      },
      {
        "index": 4547,
        "text": "",
        "depth": 0,
        "detailId": "line-4547"
      },
      {
        "index": 4557,
        "text": "",
        "depth": 0,
        "detailId": "line-4557"
      },
      {
        "index": 4561,
        "text": "",
        "depth": 0,
        "detailId": "line-4561"
      },
      {
        "index": 4569,
        "text": "",
        "depth": 0,
        "detailId": "line-4569"
      },
      {
        "index": 4577,
        "text": "",
        "depth": 0,
        "detailId": "line-4577"
      },
      {
        "index": 4594,
        "text": "",
        "depth": 0,
        "detailId": "line-4594"
      },
      {
        "index": 4616,
        "text": "",
        "depth": 0,
        "detailId": "line-4616"
      },
      {
        "index": 4627,
        "text": "",
        "depth": 0,
        "detailId": "line-4627"
      },
      {
        "index": 4637,
        "text": "",
        "depth": 0,
        "detailId": "line-4637"
      },
      {
        "index": 4645,
        "text": "",
        "depth": 0,
        "detailId": "line-4645"
      },
      {
        "index": 4657,
        "text": "",
        "depth": 0,
        "detailId": "line-4657"
      },
      {
        "index": 4664,
        "text": "",
        "depth": 0,
        "detailId": "line-4664"
      },
      {
        "index": 4671,
        "text": "",
        "depth": 0,
        "detailId": "line-4671"
      },
      {
        "index": 4676,
        "text": "",
        "depth": 0,
        "detailId": "line-4676"
      },
      {
        "index": 4684,
        "text": "",
        "depth": 0,
        "detailId": "line-4684"
      },
      {
        "index": 4687,
        "text": "",
        "depth": 0,
        "detailId": "line-4687"
      },
      {
        "index": 4691,
        "text": "",
        "depth": 0,
        "detailId": "line-4691"
      },
      {
        "index": 4696,
        "text": "",
        "depth": 0,
        "detailId": "line-4696"
      },
      {
        "index": 4702,
        "text": "",
        "depth": 0,
        "detailId": "line-4702"
      },
      {
        "index": 4706,
        "text": "",
        "depth": 0,
        "detailId": "line-4706"
      },
      {
        "index": 4715,
        "text": "",
        "depth": 0,
        "detailId": "line-4715"
      },
      {
        "index": 4718,
        "text": "",
        "depth": 0,
        "detailId": "line-4718"
      },
      {
        "index": 4722,
        "text": "",
        "depth": 0,
        "detailId": "line-4722"
      },
      {
        "index": 4732,
        "text": "",
        "depth": 0,
        "detailId": "line-4732"
      },
      {
        "index": 4736,
        "text": "",
        "depth": 0,
        "detailId": "line-4736"
      },
      {
        "index": 4741,
        "text": "",
        "depth": 0,
        "detailId": "line-4741"
      },
      {
        "index": 4746,
        "text": "",
        "depth": 0,
        "detailId": "line-4746"
      },
      {
        "index": 4757,
        "text": "",
        "depth": 0,
        "detailId": "line-4757"
      },
      {
        "index": 4762,
        "text": "",
        "depth": 0,
        "detailId": "line-4762"
      },
      {
        "index": 4772,
        "text": "",
        "depth": 0,
        "detailId": "line-4772"
      },
      {
        "index": 4778,
        "text": "",
        "depth": 0,
        "detailId": "line-4778"
      },
      {
        "index": 4783,
        "text": "",
        "depth": 0,
        "detailId": "line-4783"
      },
      {
        "index": 4793,
        "text": "",
        "depth": 0,
        "detailId": "line-4793"
      },
      {
        "index": 4805,
        "text": "",
        "depth": 0,
        "detailId": "line-4805"
      },
      {
        "index": 4817,
        "text": "",
        "depth": 0,
        "detailId": "line-4817"
      },
      {
        "index": 4822,
        "text": "",
        "depth": 0,
        "detailId": "line-4822"
      },
      {
        "index": 4832,
        "text": "",
        "depth": 0,
        "detailId": "line-4832"
      },
      {
        "index": 4839,
        "text": "",
        "depth": 0,
        "detailId": "line-4839"
      },
      {
        "index": 4843,
        "text": "",
        "depth": 0,
        "detailId": "line-4843"
      },
      {
        "index": 4851,
        "text": "",
        "depth": 0,
        "detailId": "line-4851"
      },
      {
        "index": 4856,
        "text": "",
        "depth": 0,
        "detailId": "line-4856"
      },
      {
        "index": 4870,
        "text": "",
        "depth": 0,
        "detailId": "line-4870"
      },
      {
        "index": 4874,
        "text": "",
        "depth": 0,
        "detailId": "line-4874"
      },
      {
        "index": 4880,
        "text": "",
        "depth": 0,
        "detailId": "line-4880"
      },
      {
        "index": 4894,
        "text": "",
        "depth": 0,
        "detailId": "line-4894"
      },
      {
        "index": 4902,
        "text": "",
        "depth": 0,
        "detailId": "line-4902"
      },
      {
        "index": 4908,
        "text": "",
        "depth": 0,
        "detailId": "line-4908"
      },
      {
        "index": 4912,
        "text": "",
        "depth": 0,
        "detailId": "line-4912"
      },
      {
        "index": 4921,
        "text": "",
        "depth": 0,
        "detailId": "line-4921"
      },
      {
        "index": 4928,
        "text": "",
        "depth": 0,
        "detailId": "line-4928"
      },
      {
        "index": 4932,
        "text": "",
        "depth": 0,
        "detailId": "line-4932"
      },
      {
        "index": 4936,
        "text": "",
        "depth": 0,
        "detailId": "line-4936"
      },
      {
        "index": 4947,
        "text": "",
        "depth": 0,
        "detailId": "line-4947"
      },
      {
        "index": 4956,
        "text": "",
        "depth": 0,
        "detailId": "line-4956"
      },
      {
        "index": 5014,
        "text": "",
        "depth": 0,
        "detailId": "line-5014"
      },
      {
        "index": 5030,
        "text": "",
        "depth": 0,
        "detailId": "line-5030"
      },
      {
        "index": 5033,
        "text": "",
        "depth": 0,
        "detailId": "line-5033"
      },
      {
        "index": 5039,
        "text": "",
        "depth": 0,
        "detailId": "line-5039"
      },
      {
        "index": 5070,
        "text": "",
        "depth": 0,
        "detailId": "line-5070"
      },
      {
        "index": 5073,
        "text": "",
        "depth": 0,
        "detailId": "line-5073"
      },
      {
        "index": 5079,
        "text": "",
        "depth": 0,
        "detailId": "line-5079"
      },
      {
        "index": 5089,
        "text": "",
        "depth": 0,
        "detailId": "line-5089"
      },
      {
        "index": 5103,
        "text": "",
        "depth": 0,
        "detailId": "line-5103"
      },
      {
        "index": 5112,
        "text": "",
        "depth": 0,
        "detailId": "line-5112"
      },
      {
        "index": 5121,
        "text": "",
        "depth": 0,
        "detailId": "line-5121"
      },
      {
        "index": 5126,
        "text": "",
        "depth": 0,
        "detailId": "line-5126"
      },
      {
        "index": 5134,
        "text": "",
        "depth": 0,
        "detailId": "line-5134"
      },
      {
        "index": 5142,
        "text": "",
        "depth": 0,
        "detailId": "line-5142"
      },
      {
        "index": 5147,
        "text": "",
        "depth": 0,
        "detailId": "line-5147"
      },
      {
        "index": 5165,
        "text": "",
        "depth": 0,
        "detailId": "line-5165"
      },
      {
        "index": 5170,
        "text": "",
        "depth": 0,
        "detailId": "line-5170"
      },
      {
        "index": 5174,
        "text": "",
        "depth": 0,
        "detailId": "line-5174"
      },
      {
        "index": 5181,
        "text": "",
        "depth": 0,
        "detailId": "line-5181"
      },
      {
        "index": 5184,
        "text": "",
        "depth": 0,
        "detailId": "line-5184"
      },
      {
        "index": 5187,
        "text": "",
        "depth": 0,
        "detailId": "line-5187"
      },
      {
        "index": 5190,
        "text": "",
        "depth": 0,
        "detailId": "line-5190"
      },
      {
        "index": 5198,
        "text": "",
        "depth": 0,
        "detailId": "line-5198"
      },
      {
        "index": 5201,
        "text": "",
        "depth": 0,
        "detailId": "line-5201"
      },
      {
        "index": 5205,
        "text": "",
        "depth": 0,
        "detailId": "line-5205"
      },
      {
        "index": 5209,
        "text": "",
        "depth": 0,
        "detailId": "line-5209"
      },
      {
        "index": 5215,
        "text": "",
        "depth": 0,
        "detailId": "line-5215"
      },
      {
        "index": 5222,
        "text": "",
        "depth": 0,
        "detailId": "line-5222"
      },
      {
        "index": 5227,
        "text": "",
        "depth": 0,
        "detailId": "line-5227"
      },
      {
        "index": 5232,
        "text": "",
        "depth": 0,
        "detailId": "line-5232"
      },
      {
        "index": 5236,
        "text": "",
        "depth": 0,
        "detailId": "line-5236"
      },
      {
        "index": 5249,
        "text": "",
        "depth": 0,
        "detailId": "line-5249"
      },
      {
        "index": 5258,
        "text": "",
        "depth": 0,
        "detailId": "line-5258"
      },
      {
        "index": 5262,
        "text": "",
        "depth": 0,
        "detailId": "line-5262"
      },
      {
        "index": 5274,
        "text": "",
        "depth": 0,
        "detailId": "line-5274"
      },
      {
        "index": 5281,
        "text": "",
        "depth": 0,
        "detailId": "line-5281"
      },
      {
        "index": 5289,
        "text": "",
        "depth": 0,
        "detailId": "line-5289"
      },
      {
        "index": 5294,
        "text": "",
        "depth": 0,
        "detailId": "line-5294"
      },
      {
        "index": 5302,
        "text": "",
        "depth": 0,
        "detailId": "line-5302"
      },
      {
        "index": 5309,
        "text": "",
        "depth": 0,
        "detailId": "line-5309"
      },
      {
        "index": 5312,
        "text": "",
        "depth": 0,
        "detailId": "line-5312"
      },
      {
        "index": 5319,
        "text": "",
        "depth": 0,
        "detailId": "line-5319"
      },
      {
        "index": 5323,
        "text": "",
        "depth": 0,
        "detailId": "line-5323"
      },
      {
        "index": 5328,
        "text": "",
        "depth": 0,
        "detailId": "line-5328"
      },
      {
        "index": 5340,
        "text": "",
        "depth": 0,
        "detailId": "line-5340"
      },
      {
        "index": 5344,
        "text": "",
        "depth": 0,
        "detailId": "line-5344"
      },
      {
        "index": 5386,
        "text": "",
        "depth": 0,
        "detailId": "line-5386"
      },
      {
        "index": 5397,
        "text": "",
        "depth": 0,
        "detailId": "line-5397"
      },
      {
        "index": 5404,
        "text": "",
        "depth": 0,
        "detailId": "line-5404"
      },
      {
        "index": 5407,
        "text": "",
        "depth": 0,
        "detailId": "line-5407"
      },
      {
        "index": 5412,
        "text": "",
        "depth": 0,
        "detailId": "line-5412"
      },
      {
        "index": 5416,
        "text": "",
        "depth": 0,
        "detailId": "line-5416"
      },
      {
        "index": 5420,
        "text": "",
        "depth": 0,
        "detailId": "line-5420"
      },
      {
        "index": 5427,
        "text": "",
        "depth": 0,
        "detailId": "line-5427"
      },
      {
        "index": 5433,
        "text": "",
        "depth": 0,
        "detailId": "line-5433"
      },
      {
        "index": 5437,
        "text": "",
        "depth": 0,
        "detailId": "line-5437"
      },
      {
        "index": 5443,
        "text": "",
        "depth": 0,
        "detailId": "line-5443"
      },
      {
        "index": 5447,
        "text": "",
        "depth": 0,
        "detailId": "line-5447"
      },
      {
        "index": 5457,
        "text": "",
        "depth": 0,
        "detailId": "line-5457"
      },
      {
        "index": 5465,
        "text": "",
        "depth": 0,
        "detailId": "line-5465"
      },
      {
        "index": 5469,
        "text": "",
        "depth": 0,
        "detailId": "line-5469"
      },
      {
        "index": 5474,
        "text": "",
        "depth": 0,
        "detailId": "line-5474"
      },
      {
        "index": 5483,
        "text": "",
        "depth": 0,
        "detailId": "line-5483"
      },
      {
        "index": 5487,
        "text": "",
        "depth": 0,
        "detailId": "line-5487"
      },
      {
        "index": 5495,
        "text": "",
        "depth": 0,
        "detailId": "line-5495"
      },
      {
        "index": 5500,
        "text": "",
        "depth": 0,
        "detailId": "line-5500"
      },
      {
        "index": 5509,
        "text": "",
        "depth": 0,
        "detailId": "line-5509"
      },
      {
        "index": 5514,
        "text": "",
        "depth": 0,
        "detailId": "line-5514"
      },
      {
        "index": 5518,
        "text": "",
        "depth": 0,
        "detailId": "line-5518"
      },
      {
        "index": 5531,
        "text": "",
        "depth": 0,
        "detailId": "line-5531"
      },
      {
        "index": 5554,
        "text": "",
        "depth": 0,
        "detailId": "line-5554"
      },
      {
        "index": 5566,
        "text": "",
        "depth": 0,
        "detailId": "line-5566"
      },
      {
        "index": 5571,
        "text": "",
        "depth": 0,
        "detailId": "line-5571"
      },
      {
        "index": 5579,
        "text": "",
        "depth": 0,
        "detailId": "line-5579"
      },
      {
        "index": 5587,
        "text": "",
        "depth": 0,
        "detailId": "line-5587"
      },
      {
        "index": 5591,
        "text": "",
        "depth": 0,
        "detailId": "line-5591"
      },
      {
        "index": 5599,
        "text": "",
        "depth": 0,
        "detailId": "line-5599"
      },
      {
        "index": 5605,
        "text": "",
        "depth": 0,
        "detailId": "line-5605"
      },
      {
        "index": 5620,
        "text": "",
        "depth": 0,
        "detailId": "line-5620"
      },
      {
        "index": 5625,
        "text": "",
        "depth": 0,
        "detailId": "line-5625"
      },
      {
        "index": 5636,
        "text": "",
        "depth": 0,
        "detailId": "line-5636"
      },
      {
        "index": 5643,
        "text": "",
        "depth": 0,
        "detailId": "line-5643"
      },
      {
        "index": 5647,
        "text": "",
        "depth": 0,
        "detailId": "line-5647"
      },
      {
        "index": 5658,
        "text": "",
        "depth": 0,
        "detailId": "line-5658"
      },
      {
        "index": 5666,
        "text": "",
        "depth": 0,
        "detailId": "line-5666"
      },
      {
        "index": 5670,
        "text": "",
        "depth": 0,
        "detailId": "line-5670"
      },
      {
        "index": 5680,
        "text": "",
        "depth": 0,
        "detailId": "line-5680"
      },
      {
        "index": 5688,
        "text": "",
        "depth": 0,
        "detailId": "line-5688"
      },
      {
        "index": 5692,
        "text": "",
        "depth": 0,
        "detailId": "line-5692"
      },
      {
        "index": 5696,
        "text": "",
        "depth": 0,
        "detailId": "line-5696"
      },
      {
        "index": 5741,
        "text": "",
        "depth": 0,
        "detailId": "line-5741"
      },
      {
        "index": 5744,
        "text": "",
        "depth": 0,
        "detailId": "line-5744"
      },
      {
        "index": 5754,
        "text": "",
        "depth": 0,
        "detailId": "line-5754"
      },
      {
        "index": 5772,
        "text": "",
        "depth": 0,
        "detailId": "line-5772"
      },
      {
        "index": 5781,
        "text": "",
        "depth": 0,
        "detailId": "line-5781"
      },
      {
        "index": 5799,
        "text": "",
        "depth": 0,
        "detailId": "line-5799"
      },
      {
        "index": 5814,
        "text": "",
        "depth": 0,
        "detailId": "line-5814"
      },
      {
        "index": 5819,
        "text": "",
        "depth": 0,
        "detailId": "line-5819"
      },
      {
        "index": 5830,
        "text": "",
        "depth": 0,
        "detailId": "line-5830"
      },
      {
        "index": 5837,
        "text": "",
        "depth": 0,
        "detailId": "line-5837"
      },
      {
        "index": 5841,
        "text": "",
        "depth": 0,
        "detailId": "line-5841"
      },
      {
        "index": 5848,
        "text": "",
        "depth": 0,
        "detailId": "line-5848"
      },
      {
        "index": 5855,
        "text": "",
        "depth": 0,
        "detailId": "line-5855"
      },
      {
        "index": 5865,
        "text": "",
        "depth": 0,
        "detailId": "line-5865"
      },
      {
        "index": 5875,
        "text": "",
        "depth": 0,
        "detailId": "line-5875"
      },
      {
        "index": 5879,
        "text": "",
        "depth": 0,
        "detailId": "line-5879"
      },
      {
        "index": 5882,
        "text": "",
        "depth": 0,
        "detailId": "line-5882"
      },
      {
        "index": 5886,
        "text": "",
        "depth": 0,
        "detailId": "line-5886"
      },
      {
        "index": 5891,
        "text": "",
        "depth": 0,
        "detailId": "line-5891"
      },
      {
        "index": 5894,
        "text": "",
        "depth": 0,
        "detailId": "line-5894"
      },
      {
        "index": 5902,
        "text": "",
        "depth": 0,
        "detailId": "line-5902"
      },
      {
        "index": 5907,
        "text": "",
        "depth": 0,
        "detailId": "line-5907"
      },
      {
        "index": 5914,
        "text": "",
        "depth": 0,
        "detailId": "line-5914"
      },
      {
        "index": 5919,
        "text": "",
        "depth": 0,
        "detailId": "line-5919"
      },
      {
        "index": 5923,
        "text": "",
        "depth": 0,
        "detailId": "line-5923"
      },
      {
        "index": 5928,
        "text": "",
        "depth": 0,
        "detailId": "line-5928"
      },
      {
        "index": 5939,
        "text": "",
        "depth": 0,
        "detailId": "line-5939"
      },
      {
        "index": 5943,
        "text": "",
        "depth": 0,
        "detailId": "line-5943"
      },
      {
        "index": 5950,
        "text": "",
        "depth": 0,
        "detailId": "line-5950"
      },
      {
        "index": 5961,
        "text": "",
        "depth": 0,
        "detailId": "line-5961"
      },
      {
        "index": 5965,
        "text": "",
        "depth": 0,
        "detailId": "line-5965"
      },
      {
        "index": 5970,
        "text": "",
        "depth": 0,
        "detailId": "line-5970"
      },
      {
        "index": 5974,
        "text": "",
        "depth": 0,
        "detailId": "line-5974"
      },
      {
        "index": 5978,
        "text": "",
        "depth": 0,
        "detailId": "line-5978"
      },
      {
        "index": 5982,
        "text": "",
        "depth": 0,
        "detailId": "line-5982"
      },
      {
        "index": 5986,
        "text": "",
        "depth": 0,
        "detailId": "line-5986"
      },
      {
        "index": 5990,
        "text": "",
        "depth": 0,
        "detailId": "line-5990"
      },
      {
        "index": 5994,
        "text": "",
        "depth": 0,
        "detailId": "line-5994"
      },
      {
        "index": 6007,
        "text": "",
        "depth": 0,
        "detailId": "line-6007"
      },
      {
        "index": 6019,
        "text": "",
        "depth": 0,
        "detailId": "line-6019"
      },
      {
        "index": 6024,
        "text": "",
        "depth": 0,
        "detailId": "line-6024"
      },
      {
        "index": 6034,
        "text": "",
        "depth": 0,
        "detailId": "line-6034"
      },
      {
        "index": 6038,
        "text": "",
        "depth": 0,
        "detailId": "line-6038"
      },
      {
        "index": 6043,
        "text": "",
        "depth": 0,
        "detailId": "line-6043"
      },
      {
        "index": 6052,
        "text": "",
        "depth": 0,
        "detailId": "line-6052"
      },
      {
        "index": 6056,
        "text": "",
        "depth": 0,
        "detailId": "line-6056"
      },
      {
        "index": 6067,
        "text": "",
        "depth": 0,
        "detailId": "line-6067"
      },
      {
        "index": 6071,
        "text": "",
        "depth": 0,
        "detailId": "line-6071"
      },
      {
        "index": 6081,
        "text": "",
        "depth": 0,
        "detailId": "line-6081"
      },
      {
        "index": 6089,
        "text": "",
        "depth": 0,
        "detailId": "line-6089"
      },
      {
        "index": 6094,
        "text": "",
        "depth": 0,
        "detailId": "line-6094"
      },
      {
        "index": 6098,
        "text": "",
        "depth": 0,
        "detailId": "line-6098"
      },
      {
        "index": 6102,
        "text": "",
        "depth": 0,
        "detailId": "line-6102"
      },
      {
        "index": 6103,
        "text": "    # ActiveDeadlineSeconds specifies the maximum time the Job can run",
        "description": "ActiveDeadlineSeconds specifies the maximum time the Job can run",
        "depth": 2,
        "path": "spec.job.activeDeadlineSeconds",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-activedeadlineseconds"
      },
      {
        "index": 6104,
        "text": "    # activeDeadlineSeconds: 3600 # default, minimum: 1",
        "description": "ActiveDeadlineSeconds specifies the maximum time the Job can run",
        "depth": 2,
        "field": "activeDeadlineSeconds",
        "path": "spec.job.activeDeadlineSeconds",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job-activedeadlineseconds"
      },
      {
        "index": 6105,
        "text": "",
        "depth": 0,
        "detailId": "line-6105"
      },
      {
        "index": 6106,
        "text": "    # Deprecated: BackoffLimit is ignored. Checkpoint Jobs never retry.",
        "description": "Deprecated: BackoffLimit is ignored. Checkpoint Jobs never retry.",
        "depth": 2,
        "path": "spec.job.backoffLimit",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-backofflimit"
      },
      {
        "index": 6107,
        "text": "    # backoffLimit: <int32> # minimum: 0",
        "description": "Deprecated: BackoffLimit is ignored. Checkpoint Jobs never retry.",
        "depth": 2,
        "field": "backoffLimit",
        "path": "spec.job.backoffLimit",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job-backofflimit"
      },
      {
        "index": 6108,
        "text": "",
        "depth": 0,
        "detailId": "line-6108"
      },
      {
        "index": 6109,
        "text": "    # SharedMemory controls the tmpfs mounted at /dev/shm for the checkpoint Job",
        "description": "SharedMemory controls the tmpfs mounted at /dev/shm for the checkpoint Job",
        "depth": 2,
        "path": "spec.job.sharedMemory",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-sharedmemory"
      },
      {
        "index": 6110,
        "text": "    # pod. When omitted, checkpoint Jobs use the same default 8Gi tmpfs as",
        "description": "pod. When omitted, checkpoint Jobs use the same default 8Gi tmpfs as",
        "depth": 2,
        "path": "spec.job.sharedMemory",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-sharedmemory"
      },
      {
        "index": 6111,
        "text": "    # Dynamo components.",
        "description": "Dynamo components.",
        "depth": 2,
        "path": "spec.job.sharedMemory",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-sharedmemory"
      },
      {
        "index": 6112,
        "text": "    # sharedMemory:",
        "description": "SharedMemory controls the tmpfs mounted at /dev/shm for the checkpoint Job pod.\nWhen omitted, checkpoint Jobs use the same default 8Gi tmpfs as Dynamo components.",
        "depth": 2,
        "field": "sharedMemory",
        "path": "spec.job.sharedMemory",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job-sharedmemory"
      },
      {
        "index": 6113,
        "text": "      # Disabled, when true, opts out of mounting a shared-memory medium for the",
        "description": "Disabled, when true, opts out of mounting a shared-memory medium for the",
        "depth": 3,
        "path": "spec.job.sharedMemory.disabled",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-sharedmemory-disabled"
      },
      {
        "index": 6114,
        "text": "      # component. When false (or unset), shared memory is enabled and Size is",
        "description": "component. When false (or unset), shared memory is enabled and Size is",
        "depth": 3,
        "path": "spec.job.sharedMemory.disabled",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-sharedmemory-disabled"
      },
      {
        "index": 6115,
        "text": "      # required (enforced by the validating webhook). Size is ignored when",
        "description": "required (enforced by the validating webhook). Size is ignored when",
        "depth": 3,
        "path": "spec.job.sharedMemory.disabled",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-sharedmemory-disabled"
      },
      {
        "index": 6116,
        "text": "      # Disabled is true.",
        "description": "Disabled is true.",
        "depth": 3,
        "path": "spec.job.sharedMemory.disabled",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-sharedmemory-disabled"
      },
      {
        "index": 6117,
        "text": "      # disabled: <boolean>",
        "description": "Disabled, when true, opts out of mounting a shared-memory medium for the\ncomponent. When false (or unset), shared memory is enabled and Size is\nrequired (enforced by the validating webhook). Size is ignored when\nDisabled is true.",
        "depth": 3,
        "field": "disabled",
        "path": "spec.job.sharedMemory.disabled",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job-sharedmemory-disabled"
      },
      {
        "index": 6118,
        "text": "",
        "depth": 0,
        "detailId": "line-6118"
      },
      {
        "index": 6119,
        "text": "      # size: <int-or-string> # intOrString",
        "depth": 3,
        "field": "size",
        "path": "spec.job.sharedMemory.size",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job-sharedmemory-size"
      },
      {
        "index": 6120,
        "text": "",
        "depth": 0,
        "detailId": "line-6120"
      },
      {
        "index": 6121,
        "text": "    # TargetContainerName is the container in PodTemplateSpec to snapshot.",
        "description": "TargetContainerName is the container in PodTemplateSpec to snapshot.",
        "depth": 2,
        "path": "spec.job.targetContainerName",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-targetcontainername"
      },
      {
        "index": 6122,
        "text": "    # targetContainerName: \"main\" # default, minLength: 1, maxLength: 63",
        "description": "TargetContainerName is the container in PodTemplateSpec to snapshot.",
        "depth": 2,
        "field": "targetContainerName",
        "path": "spec.job.targetContainerName",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job-targetcontainername"
      },
      {
        "index": 6123,
        "text": "",
        "depth": 0,
        "detailId": "line-6123"
      },
      {
        "index": 6124,
        "text": "    # Deprecated: TTLSecondsAfterFinished is ignored. Checkpoint Jobs use a",
        "description": "Deprecated: TTLSecondsAfterFinished is ignored. Checkpoint Jobs use a",
        "depth": 2,
        "path": "spec.job.ttlSecondsAfterFinished",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-ttlsecondsafterfinished"
      },
      {
        "index": 6125,
        "text": "    # fixed 300 second TTL.",
        "description": "fixed 300 second TTL.",
        "depth": 2,
        "path": "spec.job.ttlSecondsAfterFinished",
        "detailId": "field-nvidia-com-v1alpha1-spec-job-ttlsecondsafterfinished"
      },
      {
        "index": 6126,
        "text": "    # ttlSecondsAfterFinished: <int32> # minimum: 0",
        "description": "Deprecated: TTLSecondsAfterFinished is ignored. Checkpoint Jobs use a fixed\n300 second TTL.",
        "depth": 2,
        "field": "ttlSecondsAfterFinished",
        "path": "spec.job.ttlSecondsAfterFinished",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-job-ttlsecondsafterfinished"
      },
      {
        "index": 6127,
        "text": "",
        "depth": 0,
        "detailId": "line-6127"
      },
      {
        "index": 6128,
        "text": "  # GPUMemoryService records checkpoint-time GPU Memory Service metadata for a",
        "description": "GPUMemoryService records checkpoint-time GPU Memory Service metadata for a",
        "depth": 1,
        "path": "spec.gpuMemoryService",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice"
      },
      {
        "index": 6129,
        "text": "  # prepared checkpoint Job pod. The DynamoCheckpoint controller does not inject",
        "description": "prepared checkpoint Job pod. The DynamoCheckpoint controller does not inject",
        "depth": 1,
        "path": "spec.gpuMemoryService",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice"
      },
      {
        "index": 6130,
        "text": "  # GMS/DRA resources; auto-created checkpoints from DynamoGraphDeployment",
        "description": "GMS/DRA resources; auto-created checkpoints from DynamoGraphDeployment",
        "depth": 1,
        "path": "spec.gpuMemoryService",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice"
      },
      {
        "index": 6131,
        "text": "  # prepare the pod template before creating this object. Manual GMS-enabled",
        "description": "prepare the pod template before creating this object. Manual GMS-enabled",
        "depth": 1,
        "path": "spec.gpuMemoryService",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice"
      },
      {
        "index": 6132,
        "text": "  # checkpoints must provide the prepared pod template; the controller fails the",
        "description": "checkpoints must provide the prepared pod template; the controller fails the",
        "depth": 1,
        "path": "spec.gpuMemoryService",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice"
      },
      {
        "index": 6133,
        "text": "  # checkpoint if the required GMS/DRA wiring is missing. This field is",
        "description": "checkpoint if the required GMS/DRA wiring is missing. This field is",
        "depth": 1,
        "path": "spec.gpuMemoryService",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice"
      },
      {
        "index": 6134,
        "text": "  # intentionally outside spec.identity, so it does not affect the checkpoint",
        "description": "intentionally outside spec.identity, so it does not affect the checkpoint",
        "depth": 1,
        "path": "spec.gpuMemoryService",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice"
      },
      {
        "index": 6135,
        "text": "  # identity hash or deduplication.",
        "description": "identity hash or deduplication.",
        "depth": 1,
        "path": "spec.gpuMemoryService",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice"
      },
      {
        "index": 6136,
        "text": "  gpuMemoryService: # optional",
        "description": "GPUMemoryService records checkpoint-time GPU Memory Service metadata for\na prepared checkpoint Job pod. The DynamoCheckpoint controller does not\ninject GMS/DRA resources; auto-created checkpoints from\nDynamoGraphDeployment prepare the pod template before creating this object.\nManual GMS-enabled checkpoints must provide the prepared pod template; the\ncontroller fails the checkpoint if the required GMS/DRA wiring is missing.\nThis field is intentionally outside spec.identity, so it does not affect\nthe checkpoint identity hash or deduplication.",
        "depth": 1,
        "field": "gpuMemoryService",
        "path": "spec.gpuMemoryService",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice"
      },
      {
        "index": 6137,
        "text": "    # Enabled activates GMS wiring. GPU resources on client containers are",
        "description": "Enabled activates GMS wiring. GPU resources on client containers are",
        "depth": 2,
        "path": "spec.gpuMemoryService.enabled",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-enabled"
      },
      {
        "index": 6138,
        "text": "    # replaced with a DRA ResourceClaim for shared GPU access.",
        "description": "replaced with a DRA ResourceClaim for shared GPU access.",
        "depth": 2,
        "path": "spec.gpuMemoryService.enabled",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-enabled"
      },
      {
        "index": 6139,
        "text": "    enabled: <boolean> # required",
        "description": "Enabled activates GMS wiring. GPU resources on client containers are\nreplaced with a DRA ResourceClaim for shared GPU access.",
        "depth": 2,
        "field": "enabled",
        "path": "spec.gpuMemoryService.enabled",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-enabled"
      },
      {
        "index": 6140,
        "text": "",
        "depth": 0,
        "detailId": "line-6140"
      },
      {
        "index": 6141,
        "text": "    # DeviceClassName is the DRA DeviceClass to request GPUs from.",
        "description": "DeviceClassName is the DRA DeviceClass to request GPUs from.",
        "depth": 2,
        "path": "spec.gpuMemoryService.deviceClassName",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-deviceclassname"
      },
      {
        "index": 6142,
        "text": "    # deviceClassName: \"gpu.nvidia.com\" # default",
        "description": "DeviceClassName is the DRA DeviceClass to request GPUs from.",
        "depth": 2,
        "field": "deviceClassName",
        "path": "spec.gpuMemoryService.deviceClassName",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-deviceclassname"
      },
      {
        "index": 6143,
        "text": "",
        "depth": 0,
        "detailId": "line-6143"
      },
      {
        "index": 6144,
        "text": "    # ExtraClientContainers lists additional user-declared containers that",
        "description": "ExtraClientContainers lists additional user-declared containers that",
        "depth": 2,
        "path": "spec.gpuMemoryService.extraClientContainers",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-extraclientcontainers"
      },
      {
        "index": 6145,
        "text": "    # should be wired as GMS clients in pods rendered from the enclosing spec.",
        "description": "should be wired as GMS clients in pods rendered from the enclosing spec.",
        "depth": 2,
        "path": "spec.gpuMemoryService.extraClientContainers",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-extraclientcontainers"
      },
      {
        "index": 6146,
        "text": "    # DGD/DCD services apply this to service pods. Auto-created checkpoints",
        "description": "DGD/DCD services apply this to service pods. Auto-created checkpoints",
        "depth": 2,
        "path": "spec.gpuMemoryService.extraClientContainers",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-extraclientcontainers"
      },
      {
        "index": 6147,
        "text": "    # apply checkpoint job clients before creating the DynamoCheckpoint; manual",
        "description": "apply checkpoint job clients before creating the DynamoCheckpoint; manual",
        "depth": 2,
        "path": "spec.gpuMemoryService.extraClientContainers",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-extraclientcontainers"
      },
      {
        "index": 6148,
        "text": "    # DynamoCheckpoint users must provide an already-prepared pod template. In",
        "description": "DynamoCheckpoint users must provide an already-prepared pod template. In",
        "depth": 2,
        "path": "spec.gpuMemoryService.extraClientContainers",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-extraclientcontainers"
      },
      {
        "index": 6149,
        "text": "    # each rendered pod, only matching container names are wired; absent names",
        "description": "each rendered pod, only matching container names are wired; absent names",
        "depth": 2,
        "path": "spec.gpuMemoryService.extraClientContainers",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-extraclientcontainers"
      },
      {
        "index": 6150,
        "text": "    # are ignored.",
        "description": "are ignored.",
        "depth": 2,
        "path": "spec.gpuMemoryService.extraClientContainers",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-extraclientcontainers"
      },
      {
        "index": 6151,
        "text": "    # extraClientContainers: # listType: set",
        "description": "ExtraClientContainers lists additional user-declared containers that should\nbe wired as GMS clients in pods rendered from the enclosing spec.\nDGD/DCD services apply this to service pods. Auto-created checkpoints\napply checkpoint job clients before creating the DynamoCheckpoint; manual\nDynamoCheckpoint users must provide an already-prepared pod template.\nIn each rendered pod, only matching container names are wired; absent\nnames are ignored.",
        "depth": 2,
        "field": "extraClientContainers",
        "path": "spec.gpuMemoryService.extraClientContainers",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-extraclientcontainers"
      },
      {
        "index": 6153,
        "text": "",
        "depth": 0,
        "detailId": "line-6153"
      },
      {
        "index": 6154,
        "text": "    # ExtraClientPods declares additional GMS client pods for inter-pod GMS.",
        "description": "ExtraClientPods declares additional GMS client pods for inter-pod GMS.",
        "depth": 2,
        "path": "spec.gpuMemoryService.extraClientPods",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-extraclientpods"
      },
      {
        "index": 6155,
        "text": "    # This field is reserved for future use and is rejected until inter-pod",
        "description": "This field is reserved for future use and is rejected until inter-pod",
        "depth": 2,
        "path": "spec.gpuMemoryService.extraClientPods",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-extraclientpods"
      },
      {
        "index": 6156,
        "text": "    # client orchestration is wired.",
        "description": "client orchestration is wired.",
        "depth": 2,
        "path": "spec.gpuMemoryService.extraClientPods",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-extraclientpods"
      },
      {
        "index": 6157,
        "text": "    extraClientPods: # optional, listType: map, listMapKeys: name",
        "description": "ExtraClientPods declares additional GMS client pods for inter-pod GMS. This field is\nreserved for future use and is rejected until inter-pod client orchestration is wired.",
        "depth": 2,
        "field": "extraClientPods",
        "path": "spec.gpuMemoryService.extraClientPods",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-extraclientpods"
      },
      {
        "index": 6160,
        "text": "",
        "depth": 0,
        "detailId": "line-6160"
      },
      {
        "index": 6163,
        "text": "",
        "depth": 0,
        "detailId": "line-6163"
      },
      {
        "index": 6164,
        "text": "    # Mode selects the GMS deployment topology.",
        "description": "Mode selects the GMS deployment topology.",
        "depth": 2,
        "path": "spec.gpuMemoryService.mode",
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-mode"
      },
      {
        "index": 6165,
        "text": "    # mode: \"intraPod\" # default, enum: \"interPod\"",
        "description": "Mode selects the GMS deployment topology.",
        "depth": 2,
        "field": "mode",
        "path": "spec.gpuMemoryService.mode",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-mode"
      },
      {
        "index": 6166,
        "text": "",
        "depth": 0,
        "detailId": "line-6166"
      },
      {
        "index": 6167,
        "text": "# DynamoCheckpointStatus defines the observed state of DynamoCheckpoint",
        "description": "DynamoCheckpointStatus defines the observed state of DynamoCheckpoint",
        "depth": 0,
        "path": "status",
        "detailId": "field-nvidia-com-v1alpha1-status"
      },
      {
        "index": 6168,
        "text": "status: # optional",
        "description": "DynamoCheckpointStatus defines the observed state of DynamoCheckpoint",
        "depth": 0,
        "field": "status",
        "path": "status",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-status"
      },
      {
        "index": 6169,
        "text": "  # DEPRECATED: Conditions are deprecated. Use status.phase instead.",
        "description": "DEPRECATED: Conditions are deprecated. Use status.phase instead.",
        "depth": 1,
        "path": "status.conditions",
        "detailId": "field-nvidia-com-v1alpha1-status-conditions"
      },
      {
        "index": 6170,
        "text": "  conditions: # optional",
        "description": "DEPRECATED: Conditions are deprecated. Use status.phase instead.",
        "depth": 1,
        "field": "conditions",
        "path": "status.conditions",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions"
      },
      {
        "index": 6171,
        "text": "    - # lastTransitionTime is the last time the condition transitioned from one",
        "description": "lastTransitionTime is the last time the condition transitioned from one",
        "depth": 3,
        "path": "status.conditions[].lastTransitionTime",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-lasttransitiontime"
      },
      {
        "index": 6172,
        "text": "      # status to another. This should be when the underlying condition changed.",
        "description": "status to another. This should be when the underlying condition changed.",
        "depth": 3,
        "path": "status.conditions[].lastTransitionTime",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-lasttransitiontime"
      },
      {
        "index": 6173,
        "text": "      # If that is not known, then using the time when the API field changed is",
        "description": "If that is not known, then using the time when the API field changed is",
        "depth": 3,
        "path": "status.conditions[].lastTransitionTime",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-lasttransitiontime"
      },
      {
        "index": 6174,
        "text": "      # acceptable.",
        "description": "acceptable.",
        "depth": 3,
        "path": "status.conditions[].lastTransitionTime",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-lasttransitiontime"
      },
      {
        "index": 6175,
        "text": "      lastTransitionTime: \"<string>\" # required",
        "description": "lastTransitionTime is the last time the condition transitioned from one status to another.\nThis should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.",
        "depth": 3,
        "field": "lastTransitionTime",
        "path": "status.conditions[].lastTransitionTime",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-lasttransitiontime"
      },
      {
        "index": 6176,
        "text": "",
        "depth": 0,
        "detailId": "line-6176"
      },
      {
        "index": 6177,
        "text": "      # message is a human readable message indicating details about the",
        "description": "message is a human readable message indicating details about the",
        "depth": 3,
        "path": "status.conditions[].message",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-message"
      },
      {
        "index": 6178,
        "text": "      # transition. This may be an empty string.",
        "description": "transition. This may be an empty string.",
        "depth": 3,
        "path": "status.conditions[].message",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-message"
      },
      {
        "index": 6179,
        "text": "      message: \"<string>\" # required, maxLength: 32768",
        "description": "message is a human readable message indicating details about the transition.\nThis may be an empty string.",
        "depth": 3,
        "field": "message",
        "path": "status.conditions[].message",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-message"
      },
      {
        "index": 6180,
        "text": "",
        "depth": 0,
        "detailId": "line-6180"
      },
      {
        "index": 6181,
        "text": "      # reason contains a programmatic identifier indicating the reason for the",
        "description": "reason contains a programmatic identifier indicating the reason for the",
        "depth": 3,
        "path": "status.conditions[].reason",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-reason"
      },
      {
        "index": 6182,
        "text": "      # condition's last transition. Producers of specific condition types may",
        "description": "condition's last transition. Producers of specific condition types may",
        "depth": 3,
        "path": "status.conditions[].reason",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-reason"
      },
      {
        "index": 6183,
        "text": "      # define expected values and meanings for this field, and whether the",
        "description": "define expected values and meanings for this field, and whether the",
        "depth": 3,
        "path": "status.conditions[].reason",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-reason"
      },
      {
        "index": 6184,
        "text": "      # values are considered a guaranteed API. The value should be a CamelCase",
        "description": "values are considered a guaranteed API. The value should be a CamelCase",
        "depth": 3,
        "path": "status.conditions[].reason",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-reason"
      },
      {
        "index": 6185,
        "text": "      # string. This field may not be empty.",
        "description": "string. This field may not be empty.",
        "depth": 3,
        "path": "status.conditions[].reason",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-reason"
      },
      {
        "index": 6186,
        "text": "      reason: \"<string>\" # required, minLength: 1, maxLength: 1024",
        "description": "reason contains a programmatic identifier indicating the reason for the condition's last transition.\nProducers of specific condition types may define expected values and meanings for this field,\nand whether the values are considered a guaranteed API.\nThe value should be a CamelCase string.\nThis field may not be empty.",
        "depth": 3,
        "field": "reason",
        "path": "status.conditions[].reason",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-reason"
      },
      {
        "index": 6187,
        "text": "",
        "depth": 0,
        "detailId": "line-6187"
      },
      {
        "index": 6188,
        "text": "      # status of the condition, one of True, False, Unknown.",
        "description": "status of the condition, one of True, False, Unknown.",
        "depth": 3,
        "path": "status.conditions[].status",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-status"
      },
      {
        "index": 6189,
        "text": "      status: \"True\" # required, enum: \"False\" | \"Unknown\"",
        "description": "status of the condition, one of True, False, Unknown.",
        "depth": 3,
        "field": "status",
        "path": "status.conditions[].status",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-status"
      },
      {
        "index": 6190,
        "text": "",
        "depth": 0,
        "detailId": "line-6190"
      },
      {
        "index": 6191,
        "text": "      # type of condition in CamelCase or in foo.example.com/CamelCase.",
        "description": "type of condition in CamelCase or in foo.example.com/CamelCase.",
        "depth": 3,
        "path": "status.conditions[].type",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-type"
      },
      {
        "index": 6192,
        "text": "      type: \"<string>\" # required, maxLength: 316",
        "description": "type of condition in CamelCase or in foo.example.com/CamelCase.",
        "depth": 3,
        "field": "type",
        "path": "status.conditions[].type",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-type"
      },
      {
        "index": 6193,
        "text": "",
        "depth": 0,
        "detailId": "line-6193"
      },
      {
        "index": 6194,
        "text": "      # observedGeneration represents the .metadata.generation that the",
        "description": "observedGeneration represents the .metadata.generation that the",
        "depth": 3,
        "path": "status.conditions[].observedGeneration",
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-observedgeneration"
      },
      {
        "index": 6195,
        "text": "      # condition was set based upon. For instance, if .metadata.generation is",
        "description": "condition was set based upon. For instance, if .metadata.generation is",
        "depth": 3,
        "path": "status.conditions[].observedGeneration",
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-observedgeneration"
      },
      {
        "index": 6196,
        "text": "      # currently 12, but the .status.conditions[x].observedGeneration is 9, the",
        "description": "currently 12, but the .status.conditions[x].observedGeneration is 9, the",
        "depth": 3,
        "path": "status.conditions[].observedGeneration",
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-observedgeneration"
      },
      {
        "index": 6197,
        "text": "      # condition is out of date with respect to the current state of the",
        "description": "condition is out of date with respect to the current state of the",
        "depth": 3,
        "path": "status.conditions[].observedGeneration",
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-observedgeneration"
      },
      {
        "index": 6198,
        "text": "      # instance.",
        "description": "instance.",
        "depth": 3,
        "path": "status.conditions[].observedGeneration",
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-observedgeneration"
      },
      {
        "index": 6199,
        "text": "      # observedGeneration: <int64> # minimum: 0",
        "description": "observedGeneration represents the .metadata.generation that the condition was set based upon.\nFor instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date\nwith respect to the current state of the instance.",
        "depth": 3,
        "field": "observedGeneration",
        "path": "status.conditions[].observedGeneration",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-observedgeneration"
      },
      {
        "index": 6200,
        "text": "",
        "depth": 0,
        "detailId": "line-6200"
      },
      {
        "index": 6201,
        "text": "  # CreatedAt is the timestamp when the checkpoint became ready",
        "description": "CreatedAt is the timestamp when the checkpoint became ready",
        "depth": 1,
        "path": "status.createdAt",
        "detailId": "field-nvidia-com-v1alpha1-status-createdat"
      },
      {
        "index": 6202,
        "text": "  # createdAt: \"<string>\"",
        "description": "CreatedAt is the timestamp when the checkpoint became ready",
        "depth": 1,
        "field": "createdAt",
        "path": "status.createdAt",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-createdat"
      },
      {
        "index": 6203,
        "text": "",
        "depth": 0,
        "detailId": "line-6203"
      },
      {
        "index": 6204,
        "text": "  # IdentityHash is the computed hash of the checkpoint identity This hash is",
        "description": "IdentityHash is the computed hash of the checkpoint identity This hash is",
        "depth": 1,
        "path": "status.identityHash",
        "detailId": "field-nvidia-com-v1alpha1-status-identityhash"
      },
      {
        "index": 6205,
        "text": "  # used to identify equivalent checkpoints",
        "description": "used to identify equivalent checkpoints",
        "depth": 1,
        "path": "status.identityHash",
        "detailId": "field-nvidia-com-v1alpha1-status-identityhash"
      },
      {
        "index": 6206,
        "text": "  # identityHash: \"<string>\"",
        "description": "IdentityHash is the computed hash of the checkpoint identity\nThis hash is used to identify equivalent checkpoints",
        "depth": 1,
        "field": "identityHash",
        "path": "status.identityHash",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-identityhash"
      },
      {
        "index": 6207,
        "text": "",
        "depth": 0,
        "detailId": "line-6207"
      },
      {
        "index": 6208,
        "text": "  # JobName is the name of the checkpoint creation Job",
        "description": "JobName is the name of the checkpoint creation Job",
        "depth": 1,
        "path": "status.jobName",
        "detailId": "field-nvidia-com-v1alpha1-status-jobname"
      },
      {
        "index": 6209,
        "text": "  # jobName: \"<string>\"",
        "description": "JobName is the name of the checkpoint creation Job",
        "depth": 1,
        "field": "jobName",
        "path": "status.jobName",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-jobname"
      },
      {
        "index": 6210,
        "text": "",
        "depth": 0,
        "detailId": "line-6210"
      },
      {
        "index": 6211,
        "text": "  # Deprecated: Location is ignored and no longer populated. It is retained only",
        "description": "Deprecated: Location is ignored and no longer populated. It is retained only",
        "depth": 1,
        "path": "status.location",
        "detailId": "field-nvidia-com-v1alpha1-status-location"
      },
      {
        "index": 6212,
        "text": "  # so older objects continue to validate.",
        "description": "so older objects continue to validate.",
        "depth": 1,
        "path": "status.location",
        "detailId": "field-nvidia-com-v1alpha1-status-location"
      },
      {
        "index": 6213,
        "text": "  # location: \"<string>\"",
        "description": "Deprecated: Location is ignored and no longer populated. It is retained\nonly so older objects continue to validate.",
        "depth": 1,
        "field": "location",
        "path": "status.location",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-location"
      },
      {
        "index": 6214,
        "text": "",
        "depth": 0,
        "detailId": "line-6214"
      },
      {
        "index": 6215,
        "text": "  # Message provides additional information about the current state",
        "description": "Message provides additional information about the current state",
        "depth": 1,
        "path": "status.message",
        "detailId": "field-nvidia-com-v1alpha1-status-message"
      },
      {
        "index": 6216,
        "text": "  # message: \"<string>\"",
        "description": "Message provides additional information about the current state",
        "depth": 1,
        "field": "message",
        "path": "status.message",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-message"
      },
      {
        "index": 6217,
        "text": "",
        "depth": 0,
        "detailId": "line-6217"
      },
      {
        "index": 6218,
        "text": "  # Phase represents the current phase of the checkpoint lifecycle",
        "description": "Phase represents the current phase of the checkpoint lifecycle",
        "depth": 1,
        "path": "status.phase",
        "detailId": "field-nvidia-com-v1alpha1-status-phase"
      },
      {
        "index": 6219,
        "text": "  # phase: \"Pending\" # enum: \"Creating\" | \"Ready\" | \"Failed\"",
        "description": "Phase represents the current phase of the checkpoint lifecycle",
        "depth": 1,
        "field": "phase",
        "path": "status.phase",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-phase"
      },
      {
        "index": 6220,
        "text": "",
        "depth": 0,
        "detailId": "line-6220"
      },
      {
        "index": 6221,
        "text": "  # Deprecated: StorageType is ignored and no longer populated. It is retained",
        "description": "Deprecated: StorageType is ignored and no longer populated. It is retained",
        "depth": 1,
        "path": "status.storageType",
        "detailId": "field-nvidia-com-v1alpha1-status-storagetype"
      },
      {
        "index": 6222,
        "text": "  # only so older objects continue to validate.",
        "description": "only so older objects continue to validate.",
        "depth": 1,
        "path": "status.storageType",
        "detailId": "field-nvidia-com-v1alpha1-status-storagetype"
      },
      {
        "index": 6223,
        "text": "  # storageType: \"pvc\" # enum: \"s3\" | \"oci\"",
        "description": "Deprecated: StorageType is ignored and no longer populated. It is retained\nonly so older objects continue to validate.",
        "depth": 1,
        "field": "storageType",
        "path": "status.storageType",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-storagetype"
      }
    ],
    "fields": [
      {
        "id": "field-nvidia-com-v1alpha1-apiversion",
        "path": "apiVersion",
        "type": "string",
        "required": true,
        "description": "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources"
      },
      {
        "id": "field-nvidia-com-v1alpha1-kind",
        "path": "kind",
        "type": "string",
        "required": true,
        "description": "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata",
        "path": "metadata",
        "type": "object",
        "required": true,
        "description": "Standard Kubernetes object metadata.",
        "metadata": [
          "requiredFields: name, namespace"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-annotations",
        "path": "metadata.annotations",
        "type": "object",
        "required": false,
        "description": "Annotations is an unstructured key value map stored with a resource."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-annotations-key",
        "path": "metadata.annotations.<key>",
        "type": "string",
        "required": false
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-creationtimestamp",
        "path": "metadata.creationTimestamp",
        "type": "string/date-time",
        "required": false,
        "description": "CreationTimestamp is set by the server when a resource is created.",
        "metadata": [
          "format: date-time"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-deletiongraceperiodseconds",
        "path": "metadata.deletionGracePeriodSeconds",
        "type": "integer/int64",
        "required": false,
        "description": "Number of seconds allowed for graceful deletion.",
        "metadata": [
          "format: int64"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-deletiontimestamp",
        "path": "metadata.deletionTimestamp",
        "type": "string/date-time",
        "required": false,
        "description": "DeletionTimestamp is set by the server when graceful deletion is requested.",
        "metadata": [
          "format: date-time"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-finalizers",
        "path": "metadata.finalizers",
        "type": "array<string>",
        "required": false,
        "description": "Finalizers must be empty before the object is deleted from the registry."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-finalizers",
        "path": "metadata.finalizers[]",
        "type": "string",
        "required": true
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-generatename",
        "path": "metadata.generateName",
        "type": "string",
        "required": false,
        "description": "GenerateName is an optional prefix used by the server to generate a unique name."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-generation",
        "path": "metadata.generation",
        "type": "integer/int64",
        "required": false,
        "description": "Generation is a sequence number representing a specific desired state.",
        "metadata": [
          "format: int64"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-labels",
        "path": "metadata.labels",
        "type": "object",
        "required": false,
        "description": "Labels are key value pairs used to organize and select objects."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-labels-key",
        "path": "metadata.labels.<key>",
        "type": "string",
        "required": false
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-managedfields",
        "path": "metadata.managedFields",
        "type": "array<object>",
        "required": false,
        "description": "ManagedFields records which actor manages which fields."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-managedfields-apiversion",
        "path": "metadata.managedFields[].apiVersion",
        "type": "string",
        "required": false,
        "description": "APIVersion defines the version of this field set."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-managedfields-fieldstype",
        "path": "metadata.managedFields[].fieldsType",
        "type": "string",
        "required": false,
        "description": "FieldsType is the discriminator for the fields format."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-managedfields-fieldsv1",
        "path": "metadata.managedFields[].fieldsV1",
        "type": "object",
        "required": false,
        "description": "FieldsV1 stores a versioned field set.",
        "metadata": [
          "x-kubernetes-preserve-unknown-fields"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-managedfields-manager",
        "path": "metadata.managedFields[].manager",
        "type": "string",
        "required": false,
        "description": "Manager identifies the workflow managing these fields."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-managedfields-operation",
        "path": "metadata.managedFields[].operation",
        "type": "string",
        "required": false,
        "description": "Operation is the type of operation that produced this managedFields entry."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-managedfields-subresource",
        "path": "metadata.managedFields[].subresource",
        "type": "string",
        "required": false,
        "description": "Subresource is the name of the subresource used to update the object."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-managedfields-time",
        "path": "metadata.managedFields[].time",
        "type": "string/date-time",
        "required": false,
        "description": "Time is when this managedFields entry was added.",
        "metadata": [
          "format: date-time"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-name",
        "path": "metadata.name",
        "type": "string",
        "required": true,
        "description": "Name must be unique within a namespace."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-namespace",
        "path": "metadata.namespace",
        "type": "string",
        "required": true,
        "description": "Namespace defines the space within which each name must be unique."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-ownerreferences",
        "path": "metadata.ownerReferences",
        "type": "array<object>",
        "required": false,
        "description": "OwnerReferences lists objects depended on by this object."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-ownerreferences-apiversion",
        "path": "metadata.ownerReferences[].apiVersion",
        "type": "string",
        "required": true,
        "description": "API version of the referent."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-ownerreferences-blockownerdeletion",
        "path": "metadata.ownerReferences[].blockOwnerDeletion",
        "type": "boolean",
        "required": false,
        "description": "BlockOwnerDeletion controls foreground deletion behavior."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-ownerreferences-controller",
        "path": "metadata.ownerReferences[].controller",
        "type": "boolean",
        "required": false,
        "description": "Controller marks the managing controller owner reference."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-ownerreferences-kind",
        "path": "metadata.ownerReferences[].kind",
        "type": "string",
        "required": true,
        "description": "Kind of the referent."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-ownerreferences-name",
        "path": "metadata.ownerReferences[].name",
        "type": "string",
        "required": true,
        "description": "Name of the referent."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-ownerreferences-uid",
        "path": "metadata.ownerReferences[].uid",
        "type": "string",
        "required": true,
        "description": "UID of the referent."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-resourceversion",
        "path": "metadata.resourceVersion",
        "type": "string",
        "required": false,
        "description": "ResourceVersion is an opaque internal version value."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-selflink",
        "path": "metadata.selfLink",
        "type": "string",
        "required": false,
        "description": "SelfLink is a deprecated read-only field."
      },
      {
        "id": "field-nvidia-com-v1alpha1-metadata-uid",
        "path": "metadata.uid",
        "type": "string",
        "required": false,
        "description": "UID is the unique in time and space value for this object."
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec",
        "path": "spec",
        "type": "object",
        "required": false,
        "description": "DynamoCheckpointSpec defines the desired state of DynamoCheckpoint",
        "metadata": [
          "requiredFields: identity, job"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-gpumemoryservice",
        "path": "spec.gpuMemoryService",
        "type": "object",
        "required": false,
        "description": "GPUMemoryService records checkpoint-time GPU Memory Service metadata for\na prepared checkpoint Job pod. The DynamoCheckpoint controller does not\ninject GMS/DRA resources; auto-created checkpoints from\nDynamoGraphDeployment prepare the pod template before creating this object.\nManual GMS-enabled checkpoints must provide the prepared pod template; the\ncontroller fails the checkpoint if the required GMS/DRA wiring is missing.\nThis field is intentionally outside spec.identity, so it does not affect\nthe checkpoint identity hash or deduplication.",
        "metadata": [
          "requiredFields: enabled",
          "x-kubernetes-validations[0].rule: !has(self.extraClientContainers) || size(self.extraClientContainers) == 0 || self.mode == 'intraPod'",
          "x-kubernetes-validations[0].message: extraClientContainers is only supported with mode=intraPod",
          "x-kubernetes-validations[1].rule: !has(self.extraClientPods) || size(self.extraClientPods) == 0 || self.mode == 'interPod'",
          "x-kubernetes-validations[1].message: extraClientPods is only supported with mode=interPod",
          "x-kubernetes-validations[2].rule: !has(self.extraClientPods) || size(self.extraClientPods) == 0",
          "x-kubernetes-validations[2].message: extraClientPods is reserved for inter-pod GMS and is not implemented yet"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-deviceclassname",
        "path": "spec.gpuMemoryService.deviceClassName",
        "type": "string",
        "required": false,
        "description": "DeviceClassName is the DRA DeviceClass to request GPUs from.",
        "metadata": [
          "default: \"gpu.nvidia.com\""
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-enabled",
        "path": "spec.gpuMemoryService.enabled",
        "type": "boolean",
        "required": true,
        "description": "Enabled activates GMS wiring. GPU resources on client containers are\nreplaced with a DRA ResourceClaim for shared GPU access."
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-extraclientcontainers",
        "path": "spec.gpuMemoryService.extraClientContainers",
        "type": "array<string>",
        "required": false,
        "description": "ExtraClientContainers lists additional user-declared containers that should\nbe wired as GMS clients in pods rendered from the enclosing spec.\nDGD/DCD services apply this to service pods. Auto-created checkpoints\napply checkpoint job clients before creating the DynamoCheckpoint; manual\nDynamoCheckpoint users must provide an already-prepared pod template.\nIn each rendered pod, only matching container names are wired; absent\nnames are ignored.",
        "metadata": [
          "x-kubernetes-list-type: set"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-extraclientcontainers",
        "path": "spec.gpuMemoryService.extraClientContainers[]",
        "type": "string",
        "required": true,
        "metadata": [
          "minLength: 1",
          "maxLength: 63",
          "pattern: ^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-extraclientpods",
        "path": "spec.gpuMemoryService.extraClientPods",
        "type": "array<object>",
        "required": false,
        "description": "ExtraClientPods declares additional GMS client pods for inter-pod GMS. This field is\nreserved for future use and is rejected until inter-pod client orchestration is wired.",
        "metadata": [
          "x-kubernetes-list-type: map",
          "x-kubernetes-list-map-keys: name"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-gpumemoryservice-mode",
        "path": "spec.gpuMemoryService.mode",
        "type": "string",
        "required": false,
        "description": "Mode selects the GMS deployment topology.",
        "metadata": [
          "default: \"intraPod\"",
          "enum: \"intraPod\" | \"interPod\""
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-identity",
        "path": "spec.identity",
        "type": "object",
        "required": true,
        "description": "Identity defines the inputs that determine checkpoint equivalence",
        "metadata": [
          "requiredFields: backendFramework, model"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-identity-backendframework",
        "path": "spec.identity.backendFramework",
        "type": "string",
        "required": true,
        "description": "BackendFramework is the runtime framework (vllm, sglang, trtllm)",
        "metadata": [
          "enum: \"vllm\" | \"sglang\" | \"trtllm\""
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-identity-dtype",
        "path": "spec.identity.dtype",
        "type": "string",
        "required": false,
        "description": "Dtype is the data type (fp16, bf16, fp8, etc.)"
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-identity-dynamoversion",
        "path": "spec.identity.dynamoVersion",
        "type": "string",
        "required": false,
        "description": "DynamoVersion is the Dynamo platform version (optional)\nIf not specified, version is not included in identity hash\nThis ensures checkpoint compatibility across Dynamo releases"
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-identity-extraparameters",
        "path": "spec.identity.extraParameters",
        "type": "object",
        "required": false,
        "description": "ExtraParameters are additional parameters that affect the checkpoint hash\nUse for any framework-specific or custom parameters not covered above"
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-identity-extraparameters-key",
        "path": "spec.identity.extraParameters.<key>",
        "type": "string",
        "required": false
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-identity-maxmodellen",
        "path": "spec.identity.maxModelLen",
        "type": "integer/int32",
        "required": false,
        "description": "MaxModelLen is the maximum sequence length",
        "metadata": [
          "format: int32",
          "minimum: 1"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-identity-model",
        "path": "spec.identity.model",
        "type": "string",
        "required": true,
        "description": "Model is the model identifier (e.g., \"meta-llama/Llama-3-70B\")"
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-identity-pipelineparallelsize",
        "path": "spec.identity.pipelineParallelSize",
        "type": "integer/int32",
        "required": false,
        "description": "PipelineParallelSize is the pipeline parallel configuration",
        "metadata": [
          "default: 1",
          "format: int32",
          "minimum: 1"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-identity-tensorparallelsize",
        "path": "spec.identity.tensorParallelSize",
        "type": "integer/int32",
        "required": false,
        "description": "TensorParallelSize is the tensor parallel configuration",
        "metadata": [
          "default: 1",
          "format: int32",
          "minimum: 1"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-job",
        "path": "spec.job",
        "type": "object",
        "required": true,
        "description": "Job defines the configuration for the checkpoint creation Job",
        "metadata": [
          "requiredFields: podTemplateSpec"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-job-activedeadlineseconds",
        "path": "spec.job.activeDeadlineSeconds",
        "type": "integer/int64",
        "required": false,
        "description": "ActiveDeadlineSeconds specifies the maximum time the Job can run",
        "metadata": [
          "default: 3600",
          "format: int64",
          "minimum: 1"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-job-backofflimit",
        "path": "spec.job.backoffLimit",
        "type": "integer/int32",
        "required": false,
        "description": "Deprecated: BackoffLimit is ignored. Checkpoint Jobs never retry.",
        "metadata": [
          "format: int32",
          "minimum: 0"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-job-podtemplatespec",
        "path": "spec.job.podTemplateSpec",
        "type": "object",
        "required": true,
        "description": "PodTemplateSpec allows customizing the checkpoint Job pod\nThis should include the container that runs the workload to be checkpointed\nand any workload/runtime env, service account, GMS, or DRA wiring needed\nby that container. Auto-created checkpoints from DynamoGraphDeployment\nrender Dynamo defaults before creating the DynamoCheckpoint."
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-job-podtemplatespec-metadata",
        "path": "spec.job.podTemplateSpec.metadata",
        "type": "object",
        "required": false,
        "description": "Standard object's metadata.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata"
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-job-podtemplatespec-spec",
        "path": "spec.job.podTemplateSpec.spec",
        "type": "object",
        "required": false,
        "description": "Specification of the desired behavior of the pod.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status",
        "metadata": [
          "requiredFields: containers"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-job-sharedmemory",
        "path": "spec.job.sharedMemory",
        "type": "object",
        "required": false,
        "description": "SharedMemory controls the tmpfs mounted at /dev/shm for the checkpoint Job pod.\nWhen omitted, checkpoint Jobs use the same default 8Gi tmpfs as Dynamo components.",
        "metadata": [
          "x-kubernetes-validations[0].rule: (has(self.disabled) && self.disabled) || (has(self.size) && quantity(self.size).isGreaterThan(quantity('0')))",
          "x-kubernetes-validations[0].message: size is required when disabled is false"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-job-sharedmemory-disabled",
        "path": "spec.job.sharedMemory.disabled",
        "type": "boolean",
        "required": false,
        "description": "Disabled, when true, opts out of mounting a shared-memory medium for the\ncomponent. When false (or unset), shared memory is enabled and Size is\nrequired (enforced by the validating webhook). Size is ignored when\nDisabled is true."
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-job-sharedmemory-size",
        "path": "spec.job.sharedMemory.size",
        "type": "int-or-string",
        "required": false,
        "metadata": [
          "pattern: ^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
          "x-kubernetes-int-or-string"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-job-targetcontainername",
        "path": "spec.job.targetContainerName",
        "type": "string",
        "required": false,
        "description": "TargetContainerName is the container in PodTemplateSpec to snapshot.",
        "metadata": [
          "default: \"main\"",
          "minLength: 1",
          "maxLength: 63",
          "pattern: ^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-job-ttlsecondsafterfinished",
        "path": "spec.job.ttlSecondsAfterFinished",
        "type": "integer/int32",
        "required": false,
        "description": "Deprecated: TTLSecondsAfterFinished is ignored. Checkpoint Jobs use a fixed\n300 second TTL.",
        "metadata": [
          "format: int32",
          "minimum: 0"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-status",
        "path": "status",
        "type": "object",
        "required": false,
        "description": "DynamoCheckpointStatus defines the observed state of DynamoCheckpoint"
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-conditions",
        "path": "status.conditions",
        "type": "array<object>",
        "required": false,
        "description": "DEPRECATED: Conditions are deprecated. Use status.phase instead."
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-conditions-lasttransitiontime",
        "path": "status.conditions[].lastTransitionTime",
        "type": "string/date-time",
        "required": true,
        "description": "lastTransitionTime is the last time the condition transitioned from one status to another.\nThis should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.",
        "metadata": [
          "format: date-time"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-conditions-message",
        "path": "status.conditions[].message",
        "type": "string",
        "required": true,
        "description": "message is a human readable message indicating details about the transition.\nThis may be an empty string.",
        "metadata": [
          "maxLength: 32768"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-conditions-observedgeneration",
        "path": "status.conditions[].observedGeneration",
        "type": "integer/int64",
        "required": false,
        "description": "observedGeneration represents the .metadata.generation that the condition was set based upon.\nFor instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date\nwith respect to the current state of the instance.",
        "metadata": [
          "format: int64",
          "minimum: 0"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-conditions-reason",
        "path": "status.conditions[].reason",
        "type": "string",
        "required": true,
        "description": "reason contains a programmatic identifier indicating the reason for the condition's last transition.\nProducers of specific condition types may define expected values and meanings for this field,\nand whether the values are considered a guaranteed API.\nThe value should be a CamelCase string.\nThis field may not be empty.",
        "metadata": [
          "minLength: 1",
          "maxLength: 1024",
          "pattern: ^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-conditions-status",
        "path": "status.conditions[].status",
        "type": "string",
        "required": true,
        "description": "status of the condition, one of True, False, Unknown.",
        "metadata": [
          "enum: \"True\" | \"False\" | \"Unknown\""
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-conditions-type",
        "path": "status.conditions[].type",
        "type": "string",
        "required": true,
        "description": "type of condition in CamelCase or in foo.example.com/CamelCase.",
        "metadata": [
          "maxLength: 316",
          "pattern: ^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-createdat",
        "path": "status.createdAt",
        "type": "string/date-time",
        "required": false,
        "description": "CreatedAt is the timestamp when the checkpoint became ready",
        "metadata": [
          "format: date-time"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-identityhash",
        "path": "status.identityHash",
        "type": "string",
        "required": false,
        "description": "IdentityHash is the computed hash of the checkpoint identity\nThis hash is used to identify equivalent checkpoints"
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-jobname",
        "path": "status.jobName",
        "type": "string",
        "required": false,
        "description": "JobName is the name of the checkpoint creation Job"
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-location",
        "path": "status.location",
        "type": "string",
        "required": false,
        "description": "Deprecated: Location is ignored and no longer populated. It is retained\nonly so older objects continue to validate."
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-message",
        "path": "status.message",
        "type": "string",
        "required": false,
        "description": "Message provides additional information about the current state"
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-phase",
        "path": "status.phase",
        "type": "string",
        "required": false,
        "description": "Phase represents the current phase of the checkpoint lifecycle",
        "metadata": [
          "enum: \"Pending\" | \"Creating\" | \"Ready\" | \"Failed\""
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-storagetype",
        "path": "status.storageType",
        "type": "string",
        "required": false,
        "description": "Deprecated: StorageType is ignored and no longer populated. It is retained\nonly so older objects continue to validate.",
        "metadata": [
          "enum: \"pvc\" | \"s3\" | \"oci\""
        ]
      }
    ],
    "truncated": true,
    "truncationDepth": 3
  }
];

export function DynamoCheckpointSchema0() {
  return <KubeSchemaDoc data={kubectlDocSchemas[0]} filtering={true} />;
}
