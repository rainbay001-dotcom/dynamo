"use client";

import { KubeSchemaDoc } from "@/components/kubectl-doc/KubeSchemaDoc";

const kubectlDocSchemas = [
  {
    "apiVersion": "nvidia.com/v1beta1",
    "group": "nvidia.com",
    "version": "v1beta1",
    "kind": "DynamoGraphDeploymentRequest",
    "resource": "dynamographdeploymentrequests",
    "lines": [
      {
        "index": 0,
        "text": "apiVersion: nvidia.com/v1beta1",
        "description": "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
        "depth": 0,
        "field": "apiVersion",
        "path": "apiVersion",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-apiversion"
      },
      {
        "index": 1,
        "text": "kind: DynamoGraphDeploymentRequest",
        "description": "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
        "depth": 0,
        "field": "kind",
        "path": "kind",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-kind"
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
        "detailId": "field-nvidia-com-v1beta1-metadata"
      },
      {
        "index": 3,
        "text": "  # Name must be unique within a namespace.",
        "description": "Name must be unique within a namespace.",
        "depth": 1,
        "path": "metadata.name",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-name"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-name"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-namespace"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-namespace"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-annotations"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-annotations"
      },
      {
        "index": 11,
        "text": "    # <key>: \"<string>\"",
        "depth": 2,
        "field": "<key>",
        "path": "metadata.annotations.<key>",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-annotations-key"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-creationtimestamp"
      },
      {
        "index": 14,
        "text": "  # creationTimestamp: \"<string>\"",
        "description": "CreationTimestamp is set by the server when a resource is created.",
        "depth": 1,
        "field": "creationTimestamp",
        "path": "metadata.creationTimestamp",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-creationtimestamp"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-deletiongraceperiodseconds"
      },
      {
        "index": 17,
        "text": "  # deletionGracePeriodSeconds: <int64>",
        "description": "Number of seconds allowed for graceful deletion.",
        "depth": 1,
        "field": "deletionGracePeriodSeconds",
        "path": "metadata.deletionGracePeriodSeconds",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-deletiongraceperiodseconds"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-deletiontimestamp"
      },
      {
        "index": 20,
        "text": "  # deletionTimestamp: \"<string>\"",
        "description": "DeletionTimestamp is set by the server when graceful deletion is requested.",
        "depth": 1,
        "field": "deletionTimestamp",
        "path": "metadata.deletionTimestamp",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-deletiontimestamp"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-finalizers"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-finalizers"
      },
      {
        "index": 24,
        "text": "    # - \"<string>\"",
        "depth": 3,
        "path": "metadata.finalizers[]",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-finalizers"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-generatename"
      },
      {
        "index": 27,
        "text": "  # name.",
        "description": "name.",
        "depth": 1,
        "path": "metadata.generateName",
        "detailId": "field-nvidia-com-v1beta1-metadata-generatename"
      },
      {
        "index": 28,
        "text": "  # generateName: \"<string>\"",
        "description": "GenerateName is an optional prefix used by the server to generate a unique name.",
        "depth": 1,
        "field": "generateName",
        "path": "metadata.generateName",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-generatename"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-generation"
      },
      {
        "index": 31,
        "text": "  # generation: <int64>",
        "description": "Generation is a sequence number representing a specific desired state.",
        "depth": 1,
        "field": "generation",
        "path": "metadata.generation",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-generation"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-labels"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-labels"
      },
      {
        "index": 35,
        "text": "    # <key>: \"<string>\"",
        "depth": 2,
        "field": "<key>",
        "path": "metadata.labels.<key>",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-labels-key"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields"
      },
      {
        "index": 39,
        "text": "    # - # APIVersion defines the version of this field set.",
        "description": "APIVersion defines the version of this field set.",
        "depth": 3,
        "path": "metadata.managedFields[].apiVersion",
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields-apiversion"
      },
      {
        "index": 40,
        "text": "      # apiVersion: \"<string>\"",
        "description": "APIVersion defines the version of this field set.",
        "depth": 3,
        "field": "apiVersion",
        "path": "metadata.managedFields[].apiVersion",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields-apiversion"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields-fieldstype"
      },
      {
        "index": 43,
        "text": "      # fieldsType: \"<string>\"",
        "description": "FieldsType is the discriminator for the fields format.",
        "depth": 3,
        "field": "fieldsType",
        "path": "metadata.managedFields[].fieldsType",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields-fieldstype"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields-fieldsv1"
      },
      {
        "index": 46,
        "text": "      # fieldsV1: {} # preserveUnknownFields",
        "description": "FieldsV1 stores a versioned field set.",
        "depth": 3,
        "field": "fieldsV1",
        "path": "metadata.managedFields[].fieldsV1",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields-fieldsv1"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields-manager"
      },
      {
        "index": 49,
        "text": "      # manager: \"<string>\"",
        "description": "Manager identifies the workflow managing these fields.",
        "depth": 3,
        "field": "manager",
        "path": "metadata.managedFields[].manager",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields-manager"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields-operation"
      },
      {
        "index": 52,
        "text": "      # entry.",
        "description": "entry.",
        "depth": 3,
        "path": "metadata.managedFields[].operation",
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields-operation"
      },
      {
        "index": 53,
        "text": "      # operation: \"<string>\"",
        "description": "Operation is the type of operation that produced this managedFields entry.",
        "depth": 3,
        "field": "operation",
        "path": "metadata.managedFields[].operation",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields-operation"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields-subresource"
      },
      {
        "index": 56,
        "text": "      # subresource: \"<string>\"",
        "description": "Subresource is the name of the subresource used to update the object.",
        "depth": 3,
        "field": "subresource",
        "path": "metadata.managedFields[].subresource",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields-subresource"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields-time"
      },
      {
        "index": 59,
        "text": "      # time: \"<string>\"",
        "description": "Time is when this managedFields entry was added.",
        "depth": 3,
        "field": "time",
        "path": "metadata.managedFields[].time",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-managedfields-time"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-ownerreferences"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-ownerreferences"
      },
      {
        "index": 63,
        "text": "    - # API version of the referent.",
        "description": "API version of the referent.",
        "depth": 3,
        "path": "metadata.ownerReferences[].apiVersion",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-ownerreferences-apiversion"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-ownerreferences-apiversion"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-ownerreferences-kind"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-ownerreferences-kind"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-ownerreferences-name"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-ownerreferences-name"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-ownerreferences-uid"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-ownerreferences-uid"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-ownerreferences-blockownerdeletion"
      },
      {
        "index": 76,
        "text": "      # blockOwnerDeletion: <boolean>",
        "description": "BlockOwnerDeletion controls foreground deletion behavior.",
        "depth": 3,
        "field": "blockOwnerDeletion",
        "path": "metadata.ownerReferences[].blockOwnerDeletion",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-ownerreferences-blockownerdeletion"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-ownerreferences-controller"
      },
      {
        "index": 79,
        "text": "      # controller: <boolean>",
        "description": "Controller marks the managing controller owner reference.",
        "depth": 3,
        "field": "controller",
        "path": "metadata.ownerReferences[].controller",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-ownerreferences-controller"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-resourceversion"
      },
      {
        "index": 82,
        "text": "  # resourceVersion: \"<string>\"",
        "description": "ResourceVersion is an opaque internal version value.",
        "depth": 1,
        "field": "resourceVersion",
        "path": "metadata.resourceVersion",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-resourceversion"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-selflink"
      },
      {
        "index": 85,
        "text": "  # selfLink: \"<string>\"",
        "description": "SelfLink is a deprecated read-only field.",
        "depth": 1,
        "field": "selfLink",
        "path": "metadata.selfLink",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-selflink"
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
        "detailId": "field-nvidia-com-v1beta1-metadata-uid"
      },
      {
        "index": 88,
        "text": "  # uid: \"<string>\"",
        "description": "UID is the unique in time and space value for this object.",
        "depth": 1,
        "field": "uid",
        "path": "metadata.uid",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-metadata-uid"
      },
      {
        "index": 89,
        "text": "# Spec defines the desired state for this deployment request.",
        "description": "Spec defines the desired state for this deployment request.",
        "depth": 0,
        "path": "spec",
        "detailId": "field-nvidia-com-v1beta1-spec"
      },
      {
        "index": 90,
        "text": "spec: # optional",
        "description": "Spec defines the desired state for this deployment request.",
        "depth": 0,
        "field": "spec",
        "path": "spec",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1beta1-spec"
      },
      {
        "index": 91,
        "text": "  # Model specifies the model to deploy (e.g., \"Qwen/Qwen3-0.6B\",",
        "description": "Model specifies the model to deploy (e.g., \"Qwen/Qwen3-0.6B\",",
        "depth": 1,
        "path": "spec.model",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-spec-model"
      },
      {
        "index": 92,
        "text": "  # \"meta-llama/Llama-3-70b\"). Can be a HuggingFace ID or a private model name.",
        "description": "\"meta-llama/Llama-3-70b\"). Can be a HuggingFace ID or a private model name.",
        "depth": 1,
        "path": "spec.model",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-spec-model"
      },
      {
        "index": 93,
        "text": "  model: \"<string>\" # required, minLength: 1",
        "description": "Model specifies the model to deploy (e.g., \"Qwen/Qwen3-0.6B\", \"meta-llama/Llama-3-70b\").\nCan be a HuggingFace ID or a private model name.",
        "depth": 1,
        "field": "model",
        "path": "spec.model",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-spec-model"
      },
      {
        "index": 94,
        "text": "",
        "depth": 0,
        "detailId": "line-94"
      },
      {
        "index": 95,
        "text": "  # AutoApply indicates whether to automatically create a DynamoGraphDeployment",
        "description": "AutoApply indicates whether to automatically create a DynamoGraphDeployment",
        "depth": 1,
        "path": "spec.autoApply",
        "detailId": "field-nvidia-com-v1beta1-spec-autoapply"
      },
      {
        "index": 96,
        "text": "  # after profiling completes. If false, the generated spec is stored in status",
        "description": "after profiling completes. If false, the generated spec is stored in status",
        "depth": 1,
        "path": "spec.autoApply",
        "detailId": "field-nvidia-com-v1beta1-spec-autoapply"
      },
      {
        "index": 97,
        "text": "  # for manual review and application.",
        "description": "for manual review and application.",
        "depth": 1,
        "path": "spec.autoApply",
        "detailId": "field-nvidia-com-v1beta1-spec-autoapply"
      },
      {
        "index": 98,
        "text": "  # autoApply: true # default",
        "description": "AutoApply indicates whether to automatically create a DynamoGraphDeployment\nafter profiling completes. If false, the generated spec is stored in status\nfor manual review and application.",
        "depth": 1,
        "field": "autoApply",
        "path": "spec.autoApply",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-autoapply"
      },
      {
        "index": 99,
        "text": "",
        "depth": 0,
        "detailId": "line-99"
      },
      {
        "index": 100,
        "text": "  # Backend specifies the inference backend to use for profiling and deployment.",
        "description": "Backend specifies the inference backend to use for profiling and deployment.",
        "depth": 1,
        "path": "spec.backend",
        "detailId": "field-nvidia-com-v1beta1-spec-backend"
      },
      {
        "index": 101,
        "text": "  # backend: \"auto\" # default",
        "description": "Backend specifies the inference backend to use for profiling and deployment.",
        "depth": 1,
        "field": "backend",
        "path": "spec.backend",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-backend"
      },
      {
        "index": 102,
        "text": "",
        "depth": 0,
        "detailId": "line-102"
      },
      {
        "index": 103,
        "text": "  # Features controls optional Dynamo platform features in the generated",
        "description": "Features controls optional Dynamo platform features in the generated",
        "depth": 1,
        "path": "spec.features",
        "detailId": "field-nvidia-com-v1beta1-spec-features"
      },
      {
        "index": 104,
        "text": "  # deployment.",
        "description": "deployment.",
        "depth": 1,
        "path": "spec.features",
        "detailId": "field-nvidia-com-v1beta1-spec-features"
      },
      {
        "index": 105,
        "text": "  # features:",
        "description": "Features controls optional Dynamo platform features in the generated deployment.",
        "depth": 1,
        "field": "features",
        "path": "spec.features",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1beta1-spec-features"
      },
      {
        "index": 106,
        "text": "    # Mocker configures the simulated (mocker) backend for testing without GPUs.",
        "description": "Mocker configures the simulated (mocker) backend for testing without GPUs.",
        "depth": 2,
        "path": "spec.features.mocker",
        "detailId": "field-nvidia-com-v1beta1-spec-features-mocker"
      },
      {
        "index": 107,
        "text": "    # mocker:",
        "description": "Mocker configures the simulated (mocker) backend for testing without GPUs.",
        "depth": 2,
        "field": "mocker",
        "path": "spec.features.mocker",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1beta1-spec-features-mocker"
      },
      {
        "index": 108,
        "text": "      # Enabled indicates whether to deploy mocker workers instead of real",
        "description": "Enabled indicates whether to deploy mocker workers instead of real",
        "depth": 3,
        "path": "spec.features.mocker.enabled",
        "detailId": "field-nvidia-com-v1beta1-spec-features-mocker-enabled"
      },
      {
        "index": 109,
        "text": "      # inference workers. Useful for large-scale testing without GPUs.",
        "description": "inference workers. Useful for large-scale testing without GPUs.",
        "depth": 3,
        "path": "spec.features.mocker.enabled",
        "detailId": "field-nvidia-com-v1beta1-spec-features-mocker-enabled"
      },
      {
        "index": 110,
        "text": "      # enabled: <boolean>",
        "description": "Enabled indicates whether to deploy mocker workers instead of real inference workers.\nUseful for large-scale testing without GPUs.",
        "depth": 3,
        "field": "enabled",
        "path": "spec.features.mocker.enabled",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-features-mocker-enabled"
      },
      {
        "index": 111,
        "text": "",
        "depth": 0,
        "detailId": "line-111"
      },
      {
        "index": 112,
        "text": "    # Planner is the raw SLA planner configuration passed to the planner",
        "description": "Planner is the raw SLA planner configuration passed to the planner",
        "depth": 2,
        "path": "spec.features.planner",
        "detailId": "field-nvidia-com-v1beta1-spec-features-planner"
      },
      {
        "index": 113,
        "text": "    # service. Its schema is defined by",
        "description": "service. Its schema is defined by",
        "depth": 2,
        "path": "spec.features.planner",
        "detailId": "field-nvidia-com-v1beta1-spec-features-planner"
      },
      {
        "index": 114,
        "text": "    # dynamo.planner.config.planner_config.PlannerConfig. Go treats this as",
        "description": "dynamo.planner.config.planner_config.PlannerConfig. Go treats this as",
        "depth": 2,
        "path": "spec.features.planner",
        "detailId": "field-nvidia-com-v1beta1-spec-features-planner"
      },
      {
        "index": 115,
        "text": "    # opaque bytes; the Planner service validates it at startup. The presence of",
        "description": "opaque bytes; the Planner service validates it at startup. The presence of",
        "depth": 2,
        "path": "spec.features.planner",
        "detailId": "field-nvidia-com-v1beta1-spec-features-planner"
      },
      {
        "index": 116,
        "text": "    # this field (non-null) enables the planner in the generated DGD.",
        "description": "this field (non-null) enables the planner in the generated DGD.",
        "depth": 2,
        "path": "spec.features.planner",
        "detailId": "field-nvidia-com-v1beta1-spec-features-planner"
      },
      {
        "index": 117,
        "text": "    # planner: {} # preserveUnknownFields",
        "description": "Planner is the raw SLA planner configuration passed to the planner service.\nIts schema is defined by dynamo.planner.config.planner_config.PlannerConfig.\nGo treats this as opaque bytes; the Planner service validates it at startup.\nThe presence of this field (non-null) enables the planner in the generated DGD.",
        "depth": 2,
        "field": "planner",
        "path": "spec.features.planner",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-features-planner"
      },
      {
        "index": 118,
        "text": "",
        "depth": 0,
        "detailId": "line-118"
      },
      {
        "index": 119,
        "text": "  # Hardware describes the hardware resources available for profiling and",
        "description": "Hardware describes the hardware resources available for profiling and",
        "depth": 1,
        "path": "spec.hardware",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware"
      },
      {
        "index": 120,
        "text": "  # deployment. Typically auto-filled by the operator from cluster discovery.",
        "description": "deployment. Typically auto-filled by the operator from cluster discovery.",
        "depth": 1,
        "path": "spec.hardware",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware"
      },
      {
        "index": 121,
        "text": "  # hardware:",
        "description": "Hardware describes the hardware resources available for profiling and deployment.\nTypically auto-filled by the operator from cluster discovery.",
        "depth": 1,
        "field": "hardware",
        "path": "spec.hardware",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1beta1-spec-hardware"
      },
      {
        "index": 122,
        "text": "    # GPUSKU selects the GPU type to target. When omitted, auto-detected by",
        "description": "GPUSKU selects the GPU type to target. When omitted, auto-detected by",
        "depth": 2,
        "path": "spec.hardware.gpuSku",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-gpusku"
      },
      {
        "index": 123,
        "text": "    # selecting the GPU with the highest node count, then highest VRAM. In",
        "description": "selecting the GPU with the highest node count, then highest VRAM. In",
        "depth": 2,
        "path": "spec.hardware.gpuSku",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-gpusku"
      },
      {
        "index": 124,
        "text": "    # mixed-GPU clusters, set this to choose which GPU type to use. Discovery",
        "description": "mixed-GPU clusters, set this to choose which GPU type to use. Discovery",
        "depth": 2,
        "path": "spec.hardware.gpuSku",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-gpusku"
      },
      {
        "index": 125,
        "text": "    # and totalGpus are then restricted to nodes matching this SKU.",
        "description": "and totalGpus are then restricted to nodes matching this SKU.",
        "depth": 2,
        "path": "spec.hardware.gpuSku",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-gpusku"
      },
      {
        "index": 126,
        "text": "    # gpuSku: \"<string>\"",
        "description": "GPUSKU selects the GPU type to target.\nWhen omitted, auto-detected by selecting the GPU with the highest\nnode count, then highest VRAM. In mixed-GPU clusters, set this to\nchoose which GPU type to use. Discovery and totalGpus are then\nrestricted to nodes matching this SKU.",
        "depth": 2,
        "field": "gpuSku",
        "path": "spec.hardware.gpuSku",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-gpusku"
      },
      {
        "index": 127,
        "text": "",
        "depth": 0,
        "detailId": "line-127"
      },
      {
        "index": 128,
        "text": "    # Interconnect describes the primary GPU-to-GPU interconnect *within a",
        "description": "Interconnect describes the primary GPU-to-GPU interconnect *within a",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 129,
        "text": "    # node*.",
        "description": "node*.",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 130,
        "text": "    #",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 131,
        "text": "    # Semantics / usage: - This is capability metadata used for profiling,",
        "description": "Semantics / usage: - This is capability metadata used for profiling,",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 132,
        "text": "    # planning, and deployment decisions. - It does NOT configure or enable any",
        "description": "planning, and deployment decisions. - It does NOT configure or enable any",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 133,
        "text": "    # GPU interconnect; it only describes what is available/assumed. - When",
        "description": "GPU interconnect; it only describes what is available/assumed. - When",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 134,
        "text": "    # omitted, the operator may attempt best-effort discovery (currently",
        "description": "omitted, the operator may attempt best-effort discovery (currently",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 135,
        "text": "    # distinguishes \"nvlink\" vs \"pcie\" based on DCGM NVLink link count). If",
        "description": "distinguishes \"nvlink\" vs \"pcie\" based on DCGM NVLink link count). If",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 136,
        "text": "    # discovery is unavailable, it may remain empty.",
        "description": "discovery is unavailable, it may remain empty.",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 137,
        "text": "    #",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 138,
        "text": "    # Impact of wrong / missing values: - If set more optimistically than",
        "description": "Impact of wrong / missing values: - If set more optimistically than",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 139,
        "text": "    # reality (e.g., \"nvlink\" when only PCIe is present), performance models may",
        "description": "reality (e.g., \"nvlink\" when only PCIe is present), performance models may",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 140,
        "text": "    # overestimate intra-node bandwidth and choose overly aggressive parallelism",
        "description": "overestimate intra-node bandwidth and choose overly aggressive parallelism",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 141,
        "text": "    # or layouts, resulting in degraded performance compared to expectations. -",
        "description": "or layouts, resulting in degraded performance compared to expectations. -",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 142,
        "text": "    # If set more pessimistically than reality (e.g., \"pcie\" when NVLink is",
        "description": "If set more pessimistically than reality (e.g., \"pcie\" when NVLink is",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 143,
        "text": "    # present), the system may choose conservative plans and leave performance",
        "description": "present), the system may choose conservative plans and leave performance",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 144,
        "text": "    # on the table. - If unset and undiscovered, consumers should treat the",
        "description": "on the table. - If unset and undiscovered, consumers should treat the",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 145,
        "text": "    # interconnect as unknown and fall back to conservative assumptions.",
        "description": "interconnect as unknown and fall back to conservative assumptions.",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 146,
        "text": "    #",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 147,
        "text": "    # Example values: \"pcie\", \"nvlink\". Other values may be accepted but may not",
        "description": "Example values: \"pcie\", \"nvlink\". Other values may be accepted but may not",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 148,
        "text": "    # be auto-detected.",
        "description": "be auto-detected.",
        "depth": 2,
        "path": "spec.hardware.interconnect",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 149,
        "text": "    # interconnect: \"<string>\"",
        "description": "Interconnect describes the primary GPU-to-GPU interconnect *within a node*.\n\nSemantics / usage:\n  - This is capability metadata used for profiling, planning, and deployment decisions.\n  - It does NOT configure or enable any GPU interconnect; it only describes what is available/assumed.\n  - When omitted, the operator may attempt best-effort discovery (currently distinguishes \"nvlink\"\n    vs \"pcie\" based on DCGM NVLink link count). If discovery is unavailable, it may remain empty.\n\nImpact of wrong / missing values:\n  - If set more optimistically than reality (e.g., \"nvlink\" when only PCIe is present), performance\n    models may overestimate intra-node bandwidth and choose overly aggressive parallelism or layouts,\n    resulting in degraded performance compared to expectations.\n  - If set more pessimistically than reality (e.g., \"pcie\" when NVLink is present), the system may\n    choose conservative plans and leave performance on the table.\n  - If unset and undiscovered, consumers should treat the interconnect as unknown and fall back to\n    conservative assumptions.\n\nExample values: \"pcie\", \"nvlink\". Other values may be accepted but may not be auto-detected.",
        "depth": 2,
        "field": "interconnect",
        "path": "spec.hardware.interconnect",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-interconnect"
      },
      {
        "index": 150,
        "text": "",
        "depth": 0,
        "detailId": "line-150"
      },
      {
        "index": 151,
        "text": "    # NumGPUsPerNode is the number of GPUs per node. When omitted, auto-detected",
        "description": "NumGPUsPerNode is the number of GPUs per node. When omitted, auto-detected",
        "depth": 2,
        "path": "spec.hardware.numGpusPerNode",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-numgpuspernode"
      },
      {
        "index": 152,
        "text": "    # from cluster GPU nodes.",
        "description": "from cluster GPU nodes.",
        "depth": 2,
        "path": "spec.hardware.numGpusPerNode",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-numgpuspernode"
      },
      {
        "index": 153,
        "text": "    # numGpusPerNode: <int32>",
        "description": "NumGPUsPerNode is the number of GPUs per node.\nWhen omitted, auto-detected from cluster GPU nodes.",
        "depth": 2,
        "field": "numGpusPerNode",
        "path": "spec.hardware.numGpusPerNode",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-numgpuspernode"
      },
      {
        "index": 154,
        "text": "",
        "depth": 0,
        "detailId": "line-154"
      },
      {
        "index": 155,
        "text": "    # RDMA indicates whether the cluster has RDMA-capable networking available",
        "description": "RDMA indicates whether the cluster has RDMA-capable networking available",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 156,
        "text": "    # for Dynamo data movement.",
        "description": "for Dynamo data movement.",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 157,
        "text": "    #",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 158,
        "text": "    # Semantics / usage: - This is capability metadata used for profiling,",
        "description": "Semantics / usage: - This is capability metadata used for profiling,",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 159,
        "text": "    # planning, and deployment decisions. - It does NOT install, enable, or",
        "description": "planning, and deployment decisions. - It does NOT install, enable, or",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 160,
        "text": "    # configure RDMA (e.g., drivers, SR-IOV, NVIDIA network operator, GPUDirect",
        "description": "configure RDMA (e.g., drivers, SR-IOV, NVIDIA network operator, GPUDirect",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 161,
        "text": "    # settings). It only expresses availability/intent. - When omitted, the",
        "description": "settings). It only expresses availability/intent. - When omitted, the",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 162,
        "text": "    # operator may attempt best-effort discovery (e.g., via node labels",
        "description": "operator may attempt best-effort discovery (e.g., via node labels",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 163,
        "text": "    # indicating RDMA/SR-IOV capability and/or presence of NVIDIA",
        "description": "indicating RDMA/SR-IOV capability and/or presence of NVIDIA",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 164,
        "text": "    # network-operator RDMA components). If discovery is unavailable, it may",
        "description": "network-operator RDMA components). If discovery is unavailable, it may",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 165,
        "text": "    # remain unset.",
        "description": "remain unset.",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 166,
        "text": "    #",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 167,
        "text": "    # Impact of wrong / missing values: - False positive (set true when RDMA is",
        "description": "Impact of wrong / missing values: - False positive (set true when RDMA is",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 168,
        "text": "    # not actually usable end-to-end) may cause plans or deployments to assume",
        "description": "not actually usable end-to-end) may cause plans or deployments to assume",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 169,
        "text": "    # RDMA is available; depending on the runtime transport selection and",
        "description": "RDMA is available; depending on the runtime transport selection and",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 170,
        "text": "    # fallback behavior, this can lead to connection/setup failures or",
        "description": "fallback behavior, this can lead to connection/setup failures or",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 171,
        "text": "    # performance regressions. - False negative (set false when RDMA is",
        "description": "performance regressions. - False negative (set false when RDMA is",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 172,
        "text": "    # available) will typically avoid RDMA-optimized paths and fall back to",
        "description": "available) will typically avoid RDMA-optimized paths and fall back to",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 173,
        "text": "    # non-RDMA transports, usually remaining functional but potentially slower.",
        "description": "non-RDMA transports, usually remaining functional but potentially slower.",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 174,
        "text": "    # - If unset and undiscovered, consumers should treat RDMA availability as",
        "description": "- If unset and undiscovered, consumers should treat RDMA availability as",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 175,
        "text": "    # unknown and use conservative defaults / fallback transports.",
        "description": "unknown and use conservative defaults / fallback transports.",
        "depth": 2,
        "path": "spec.hardware.rdma",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 176,
        "text": "    # rdma: <boolean>",
        "description": "RDMA indicates whether the cluster has RDMA-capable networking available for Dynamo data movement.\n\nSemantics / usage:\n  - This is capability metadata used for profiling, planning, and deployment decisions.\n  - It does NOT install, enable, or configure RDMA (e.g., drivers, SR-IOV, NVIDIA network operator,\n    GPUDirect settings). It only expresses availability/intent.\n  - When omitted, the operator may attempt best-effort discovery (e.g., via node labels indicating\n    RDMA/SR-IOV capability and/or presence of NVIDIA network-operator RDMA components). If discovery\n    is unavailable, it may remain unset.\n\nImpact of wrong / missing values:\n  - False positive (set true when RDMA is not actually usable end-to-end) may cause plans or\n    deployments to assume RDMA is available; depending on the runtime transport selection and\n    fallback behavior, this can lead to connection/setup failures or performance regressions.\n  - False negative (set false when RDMA is available) will typically avoid RDMA-optimized paths and\n    fall back to non-RDMA transports, usually remaining functional but potentially slower.\n  - If unset and undiscovered, consumers should treat RDMA availability as unknown and use\n    conservative defaults / fallback transports.",
        "depth": 2,
        "field": "rdma",
        "path": "spec.hardware.rdma",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-rdma"
      },
      {
        "index": 177,
        "text": "",
        "depth": 0,
        "detailId": "line-177"
      },
      {
        "index": 178,
        "text": "    # TotalGPUs is the GPU budget for profiling and deployment. The profiler",
        "description": "TotalGPUs is the GPU budget for profiling and deployment. The profiler",
        "depth": 2,
        "path": "spec.hardware.totalGpus",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-totalgpus"
      },
      {
        "index": 179,
        "text": "    # uses this to determine parallelism and replica count. When omitted,",
        "description": "uses this to determine parallelism and replica count. When omitted,",
        "depth": 2,
        "path": "spec.hardware.totalGpus",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-totalgpus"
      },
      {
        "index": 180,
        "text": "    # computed by counting GPUs on discovered nodes (filtered by gpuSku when",
        "description": "computed by counting GPUs on discovered nodes (filtered by gpuSku when",
        "depth": 2,
        "path": "spec.hardware.totalGpus",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-totalgpus"
      },
      {
        "index": 181,
        "text": "    # set), temporarily capped at 32 to limit profiler search space. This cap",
        "description": "set), temporarily capped at 32 to limit profiler search space. This cap",
        "depth": 2,
        "path": "spec.hardware.totalGpus",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-totalgpus"
      },
      {
        "index": 182,
        "text": "    # may be removed in a future release. Set this field explicitly to override.",
        "description": "may be removed in a future release. Set this field explicitly to override.",
        "depth": 2,
        "path": "spec.hardware.totalGpus",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-totalgpus"
      },
      {
        "index": 183,
        "text": "    # totalGpus: <int32>",
        "description": "TotalGPUs is the GPU budget for profiling and deployment.\nThe profiler uses this to determine parallelism and replica count.\nWhen omitted, computed by counting GPUs on discovered nodes\n(filtered by gpuSku when set), temporarily capped at 32 to\nlimit profiler search space. This cap may be removed in a future\nrelease. Set this field explicitly to override.",
        "depth": 2,
        "field": "totalGpus",
        "path": "spec.hardware.totalGpus",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-totalgpus"
      },
      {
        "index": 184,
        "text": "",
        "depth": 0,
        "detailId": "line-184"
      },
      {
        "index": 185,
        "text": "    # VRAMMB is the VRAM per GPU in MiB. When omitted, auto-detected from",
        "description": "VRAMMB is the VRAM per GPU in MiB. When omitted, auto-detected from",
        "depth": 2,
        "path": "spec.hardware.vramMb",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-vrammb"
      },
      {
        "index": 186,
        "text": "    # cluster GPU nodes.",
        "description": "cluster GPU nodes.",
        "depth": 2,
        "path": "spec.hardware.vramMb",
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-vrammb"
      },
      {
        "index": 187,
        "text": "    # vramMb: <number>",
        "description": "VRAMMB is the VRAM per GPU in MiB.\nWhen omitted, auto-detected from cluster GPU nodes.",
        "depth": 2,
        "field": "vramMb",
        "path": "spec.hardware.vramMb",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-hardware-vrammb"
      },
      {
        "index": 188,
        "text": "",
        "depth": 0,
        "detailId": "line-188"
      },
      {
        "index": 189,
        "text": "  # Image is the container image reference for the profiling job (planner",
        "description": "Image is the container image reference for the profiling job (planner",
        "depth": 1,
        "path": "spec.image",
        "detailId": "field-nvidia-com-v1beta1-spec-image"
      },
      {
        "index": 190,
        "text": "  # image). Example: \"nvcr.io/nvidia/ai-dynamo/dynamo-planner:1.1.1\". For Dynamo",
        "description": "image). Example: \"nvcr.io/nvidia/ai-dynamo/dynamo-planner:1.1.1\". For Dynamo",
        "depth": 1,
        "path": "spec.image",
        "detailId": "field-nvidia-com-v1beta1-spec-image"
      },
      {
        "index": 191,
        "text": "  # < 1.1.0, use dynamo-frontend.",
        "description": "< 1.1.0, use dynamo-frontend.",
        "depth": 1,
        "path": "spec.image",
        "detailId": "field-nvidia-com-v1beta1-spec-image"
      },
      {
        "index": 192,
        "text": "  # image: \"<string>\"",
        "description": "Image is the container image reference for the profiling job (planner image).\nExample: \"nvcr.io/nvidia/ai-dynamo/dynamo-planner:1.1.1\".\nFor Dynamo < 1.1.0, use dynamo-frontend.",
        "depth": 1,
        "field": "image",
        "path": "spec.image",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-image"
      },
      {
        "index": 193,
        "text": "",
        "depth": 0,
        "detailId": "line-193"
      },
      {
        "index": 194,
        "text": "  # ModelCache provides optional PVC configuration for pre-downloaded model",
        "description": "ModelCache provides optional PVC configuration for pre-downloaded model",
        "depth": 1,
        "path": "spec.modelCache",
        "detailId": "field-nvidia-com-v1beta1-spec-modelcache"
      },
      {
        "index": 195,
        "text": "  # weights. When provided, weights are loaded from the PVC instead of",
        "description": "weights. When provided, weights are loaded from the PVC instead of",
        "depth": 1,
        "path": "spec.modelCache",
        "detailId": "field-nvidia-com-v1beta1-spec-modelcache"
      },
      {
        "index": 196,
        "text": "  # downloading from HuggingFace.",
        "description": "downloading from HuggingFace.",
        "depth": 1,
        "path": "spec.modelCache",
        "detailId": "field-nvidia-com-v1beta1-spec-modelcache"
      },
      {
        "index": 197,
        "text": "  # modelCache:",
        "description": "ModelCache provides optional PVC configuration for pre-downloaded model weights.\nWhen provided, weights are loaded from the PVC instead of downloading from HuggingFace.",
        "depth": 1,
        "field": "modelCache",
        "path": "spec.modelCache",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1beta1-spec-modelcache"
      },
      {
        "index": 198,
        "text": "    # PVCModelPath is the path to the model checkpoint directory within the PVC",
        "description": "PVCModelPath is the path to the model checkpoint directory within the PVC",
        "depth": 2,
        "path": "spec.modelCache.pvcModelPath",
        "detailId": "field-nvidia-com-v1beta1-spec-modelcache-pvcmodelpath"
      },
      {
        "index": 199,
        "text": "    # (e.g. \"deepseek-r1\" or \"models/Llama-3.1-405B-FP8\").",
        "description": "(e.g. \"deepseek-r1\" or \"models/Llama-3.1-405B-FP8\").",
        "depth": 2,
        "path": "spec.modelCache.pvcModelPath",
        "detailId": "field-nvidia-com-v1beta1-spec-modelcache-pvcmodelpath"
      },
      {
        "index": 200,
        "text": "    # pvcModelPath: \"<string>\"",
        "description": "PVCModelPath is the path to the model checkpoint directory within the PVC\n(e.g. \"deepseek-r1\" or \"models/Llama-3.1-405B-FP8\").",
        "depth": 2,
        "field": "pvcModelPath",
        "path": "spec.modelCache.pvcModelPath",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-modelcache-pvcmodelpath"
      },
      {
        "index": 201,
        "text": "",
        "depth": 0,
        "detailId": "line-201"
      },
      {
        "index": 202,
        "text": "    # PVCMountPath is the mount path for the PVC inside the container.",
        "description": "PVCMountPath is the mount path for the PVC inside the container.",
        "depth": 2,
        "path": "spec.modelCache.pvcMountPath",
        "detailId": "field-nvidia-com-v1beta1-spec-modelcache-pvcmountpath"
      },
      {
        "index": 203,
        "text": "    # pvcMountPath: \"/opt/model-cache\" # default",
        "description": "PVCMountPath is the mount path for the PVC inside the container.",
        "depth": 2,
        "field": "pvcMountPath",
        "path": "spec.modelCache.pvcMountPath",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-modelcache-pvcmountpath"
      },
      {
        "index": 204,
        "text": "",
        "depth": 0,
        "detailId": "line-204"
      },
      {
        "index": 205,
        "text": "    # PVCName is the name of the PersistentVolumeClaim containing model weights.",
        "description": "PVCName is the name of the PersistentVolumeClaim containing model weights.",
        "depth": 2,
        "path": "spec.modelCache.pvcName",
        "detailId": "field-nvidia-com-v1beta1-spec-modelcache-pvcname"
      },
      {
        "index": 206,
        "text": "    # The PVC must exist in the same namespace as the DGDR.",
        "description": "The PVC must exist in the same namespace as the DGDR.",
        "depth": 2,
        "path": "spec.modelCache.pvcName",
        "detailId": "field-nvidia-com-v1beta1-spec-modelcache-pvcname"
      },
      {
        "index": 207,
        "text": "    # pvcName: \"<string>\"",
        "description": "PVCName is the name of the PersistentVolumeClaim containing model weights.\nThe PVC must exist in the same namespace as the DGDR.",
        "depth": 2,
        "field": "pvcName",
        "path": "spec.modelCache.pvcName",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-modelcache-pvcname"
      },
      {
        "index": 208,
        "text": "",
        "depth": 0,
        "detailId": "line-208"
      },
      {
        "index": 209,
        "text": "  # Overrides allows customizing the profiling job and the generated",
        "description": "Overrides allows customizing the profiling job and the generated",
        "depth": 1,
        "path": "spec.overrides",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides"
      },
      {
        "index": 210,
        "text": "  # DynamoGraphDeployment.",
        "description": "DynamoGraphDeployment.",
        "depth": 1,
        "path": "spec.overrides",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides"
      },
      {
        "index": 211,
        "text": "  overrides: # optional",
        "description": "Overrides allows customizing the profiling job and the generated DynamoGraphDeployment.",
        "depth": 1,
        "field": "overrides",
        "path": "spec.overrides",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides"
      },
      {
        "index": 212,
        "text": "    # DGD allows providing a full or partial nvidia.com/v1alpha1",
        "description": "DGD allows providing a full or partial nvidia.com/v1alpha1",
        "depth": 2,
        "path": "spec.overrides.dgd",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 213,
        "text": "    # DynamoGraphDeployment to use as the base for the generated deployment.",
        "description": "DynamoGraphDeployment to use as the base for the generated deployment.",
        "depth": 2,
        "path": "spec.overrides.dgd",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 214,
        "text": "    # Fields from profiling results are merged on top. Use this to override",
        "description": "Fields from profiling results are merged on top. Use this to override",
        "depth": 2,
        "path": "spec.overrides.dgd",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 215,
        "text": "    # backend worker images.",
        "description": "backend worker images.",
        "depth": 2,
        "path": "spec.overrides.dgd",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 216,
        "text": "    #",
        "depth": 2,
        "path": "spec.overrides.dgd",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 217,
        "text": "    # The field is stored as a raw embedded resource rather than a typed",
        "description": "The field is stored as a raw embedded resource rather than a typed",
        "depth": 2,
        "path": "spec.overrides.dgd",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 218,
        "text": "    # *v1alpha1.DynamoGraphDeployment to avoid a circular import: v1alpha1",
        "description": "*v1alpha1.DynamoGraphDeployment to avoid a circular import: v1alpha1",
        "depth": 2,
        "path": "spec.overrides.dgd",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 219,
        "text": "    # already imports v1beta1 as the conversion hub and Go does not allow import",
        "description": "already imports v1beta1 as the conversion hub and Go does not allow import",
        "depth": 2,
        "path": "spec.overrides.dgd",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 220,
        "text": "    # cycles.",
        "description": "cycles.",
        "depth": 2,
        "path": "spec.overrides.dgd",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 221,
        "text": "    #",
        "depth": 2,
        "path": "spec.overrides.dgd",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 222,
        "text": "    # The EmbeddedResource marker tells the API server to validate that the",
        "description": "The EmbeddedResource marker tells the API server to validate that the",
        "depth": 2,
        "path": "spec.overrides.dgd",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 223,
        "text": "    # value is a well-formed Kubernetes object (has apiVersion/kind), but does",
        "description": "value is a well-formed Kubernetes object (has apiVersion/kind), but does",
        "depth": 2,
        "path": "spec.overrides.dgd",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 224,
        "text": "    # not enforce that it is specifically a DynamoGraphDeployment. Full type",
        "description": "not enforce that it is specifically a DynamoGraphDeployment. Full type",
        "depth": 2,
        "path": "spec.overrides.dgd",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 225,
        "text": "    # validation (correct apiVersion, kind, and field schema) is performed by",
        "description": "validation (correct apiVersion, kind, and field schema) is performed by",
        "depth": 2,
        "path": "spec.overrides.dgd",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 226,
        "text": "    # the controller during reconciliation.",
        "description": "the controller during reconciliation.",
        "depth": 2,
        "path": "spec.overrides.dgd",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 227,
        "text": "    # dgd: {} # preserveUnknownFields, embeddedResource",
        "description": "DGD allows providing a full or partial nvidia.com/v1alpha1 DynamoGraphDeployment\nto use as the base for the generated deployment. Fields from profiling results\nare merged on top. Use this to override backend worker images.\n\nThe field is stored as a raw embedded resource rather than a typed\n*v1alpha1.DynamoGraphDeployment to avoid a circular import: v1alpha1 already\nimports v1beta1 as the conversion hub and Go does not allow import cycles.\n\nThe EmbeddedResource marker tells the API server to validate that the value is a\nwell-formed Kubernetes object (has apiVersion/kind), but does not enforce that it\nis specifically a DynamoGraphDeployment. Full type validation (correct apiVersion,\nkind, and field schema) is performed by the controller during reconciliation.",
        "depth": 2,
        "field": "dgd",
        "path": "spec.overrides.dgd",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-dgd"
      },
      {
        "index": 228,
        "text": "",
        "depth": 0,
        "detailId": "line-228"
      },
      {
        "index": 229,
        "text": "    # ProfilingJob allows overriding the profiling Job specification. Fields set",
        "description": "ProfilingJob allows overriding the profiling Job specification. Fields set",
        "depth": 2,
        "path": "spec.overrides.profilingJob",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob"
      },
      {
        "index": 230,
        "text": "    # here are merged into the controller-generated Job spec.",
        "description": "here are merged into the controller-generated Job spec.",
        "depth": 2,
        "path": "spec.overrides.profilingJob",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob"
      },
      {
        "index": 231,
        "text": "    profilingJob: # optional",
        "description": "ProfilingJob allows overriding the profiling Job specification.\nFields set here are merged into the controller-generated Job spec.",
        "depth": 2,
        "field": "profilingJob",
        "path": "spec.overrides.profilingJob",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob"
      },
      {
        "index": 232,
        "text": "      # Describes the pod that will be created when executing a job. The only",
        "description": "Describes the pod that will be created when executing a job. The only",
        "depth": 3,
        "path": "spec.overrides.profilingJob.template",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-template"
      },
      {
        "index": 233,
        "text": "      # allowed template.spec.restartPolicy values are \"Never\" or \"OnFailure\".",
        "description": "allowed template.spec.restartPolicy values are \"Never\" or \"OnFailure\".",
        "depth": 3,
        "path": "spec.overrides.profilingJob.template",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-template"
      },
      {
        "index": 234,
        "text": "      # More info:",
        "description": "More info:",
        "depth": 3,
        "path": "spec.overrides.profilingJob.template",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-template"
      },
      {
        "index": 235,
        "text": "      # https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",
        "description": "https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",
        "depth": 3,
        "path": "spec.overrides.profilingJob.template",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-template"
      },
      {
        "index": 236,
        "text": "      template: # required",
        "description": "Describes the pod that will be created when executing a job.\nThe only allowed template.spec.restartPolicy values are \"Never\" or \"OnFailure\".\nMore info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",
        "depth": 3,
        "field": "template",
        "path": "spec.overrides.profilingJob.template",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-template"
      },
      {
        "index": 242,
        "text": "",
        "depth": 0,
        "detailId": "line-242"
      },
      {
        "index": 245,
        "text": "",
        "depth": 0,
        "detailId": "line-245"
      },
      {
        "index": 248,
        "text": "",
        "depth": 0,
        "detailId": "line-248"
      },
      {
        "index": 251,
        "text": "",
        "depth": 0,
        "detailId": "line-251"
      },
      {
        "index": 262,
        "text": "",
        "depth": 0,
        "detailId": "line-262"
      },
      {
        "index": 275,
        "text": "",
        "depth": 0,
        "detailId": "line-275"
      },
      {
        "index": 288,
        "text": "",
        "depth": 0,
        "detailId": "line-288"
      },
      {
        "index": 295,
        "text": "",
        "depth": 0,
        "detailId": "line-295"
      },
      {
        "index": 306,
        "text": "",
        "depth": 0,
        "detailId": "line-306"
      },
      {
        "index": 314,
        "text": "",
        "depth": 0,
        "detailId": "line-314"
      },
      {
        "index": 321,
        "text": "",
        "depth": 0,
        "detailId": "line-321"
      },
      {
        "index": 324,
        "text": "",
        "depth": 0,
        "detailId": "line-324"
      },
      {
        "index": 334,
        "text": "",
        "depth": 0,
        "detailId": "line-334"
      },
      {
        "index": 338,
        "text": "",
        "depth": 0,
        "detailId": "line-338"
      },
      {
        "index": 348,
        "text": "",
        "depth": 0,
        "detailId": "line-348"
      },
      {
        "index": 353,
        "text": "",
        "depth": 0,
        "detailId": "line-353"
      },
      {
        "index": 356,
        "text": "",
        "depth": 0,
        "detailId": "line-356"
      },
      {
        "index": 367,
        "text": "",
        "depth": 0,
        "detailId": "line-367"
      },
      {
        "index": 375,
        "text": "",
        "depth": 0,
        "detailId": "line-375"
      },
      {
        "index": 379,
        "text": "",
        "depth": 0,
        "detailId": "line-379"
      },
      {
        "index": 383,
        "text": "",
        "depth": 0,
        "detailId": "line-383"
      },
      {
        "index": 389,
        "text": "",
        "depth": 0,
        "detailId": "line-389"
      },
      {
        "index": 396,
        "text": "",
        "depth": 0,
        "detailId": "line-396"
      },
      {
        "index": 399,
        "text": "",
        "depth": 0,
        "detailId": "line-399"
      },
      {
        "index": 415,
        "text": "",
        "depth": 0,
        "detailId": "line-415"
      },
      {
        "index": 418,
        "text": "",
        "depth": 0,
        "detailId": "line-418"
      },
      {
        "index": 423,
        "text": "",
        "depth": 0,
        "detailId": "line-423"
      },
      {
        "index": 432,
        "text": "",
        "depth": 0,
        "detailId": "line-432"
      },
      {
        "index": 435,
        "text": "",
        "depth": 0,
        "detailId": "line-435"
      },
      {
        "index": 442,
        "text": "",
        "depth": 0,
        "detailId": "line-442"
      },
      {
        "index": 448,
        "text": "",
        "depth": 0,
        "detailId": "line-448"
      },
      {
        "index": 469,
        "text": "",
        "depth": 0,
        "detailId": "line-469"
      },
      {
        "index": 476,
        "text": "",
        "depth": 0,
        "detailId": "line-476"
      },
      {
        "index": 480,
        "text": "",
        "depth": 0,
        "detailId": "line-480"
      },
      {
        "index": 488,
        "text": "",
        "depth": 0,
        "detailId": "line-488"
      },
      {
        "index": 491,
        "text": "",
        "depth": 0,
        "detailId": "line-491"
      },
      {
        "index": 494,
        "text": "",
        "depth": 0,
        "detailId": "line-494"
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
        "index": 513,
        "text": "",
        "depth": 0,
        "detailId": "line-513"
      },
      {
        "index": 516,
        "text": "",
        "depth": 0,
        "detailId": "line-516"
      },
      {
        "index": 541,
        "text": "",
        "depth": 0,
        "detailId": "line-541"
      },
      {
        "index": 548,
        "text": "",
        "depth": 0,
        "detailId": "line-548"
      },
      {
        "index": 552,
        "text": "",
        "depth": 0,
        "detailId": "line-552"
      },
      {
        "index": 560,
        "text": "",
        "depth": 0,
        "detailId": "line-560"
      },
      {
        "index": 563,
        "text": "",
        "depth": 0,
        "detailId": "line-563"
      },
      {
        "index": 566,
        "text": "",
        "depth": 0,
        "detailId": "line-566"
      },
      {
        "index": 570,
        "text": "",
        "depth": 0,
        "detailId": "line-570"
      },
      {
        "index": 575,
        "text": "",
        "depth": 0,
        "detailId": "line-575"
      },
      {
        "index": 585,
        "text": "",
        "depth": 0,
        "detailId": "line-585"
      },
      {
        "index": 588,
        "text": "",
        "depth": 0,
        "detailId": "line-588"
      },
      {
        "index": 594,
        "text": "",
        "depth": 0,
        "detailId": "line-594"
      },
      {
        "index": 610,
        "text": "",
        "depth": 0,
        "detailId": "line-610"
      },
      {
        "index": 615,
        "text": "",
        "depth": 0,
        "detailId": "line-615"
      },
      {
        "index": 621,
        "text": "",
        "depth": 0,
        "detailId": "line-621"
      },
      {
        "index": 629,
        "text": "",
        "depth": 0,
        "detailId": "line-629"
      },
      {
        "index": 636,
        "text": "",
        "depth": 0,
        "detailId": "line-636"
      },
      {
        "index": 640,
        "text": "",
        "depth": 0,
        "detailId": "line-640"
      },
      {
        "index": 648,
        "text": "",
        "depth": 0,
        "detailId": "line-648"
      },
      {
        "index": 651,
        "text": "",
        "depth": 0,
        "detailId": "line-651"
      },
      {
        "index": 654,
        "text": "",
        "depth": 0,
        "detailId": "line-654"
      },
      {
        "index": 657,
        "text": "",
        "depth": 0,
        "detailId": "line-657"
      },
      {
        "index": 662,
        "text": "",
        "depth": 0,
        "detailId": "line-662"
      },
      {
        "index": 666,
        "text": "",
        "depth": 0,
        "detailId": "line-666"
      },
      {
        "index": 671,
        "text": "",
        "depth": 0,
        "detailId": "line-671"
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
        "index": 696,
        "text": "",
        "depth": 0,
        "detailId": "line-696"
      },
      {
        "index": 701,
        "text": "",
        "depth": 0,
        "detailId": "line-701"
      },
      {
        "index": 715,
        "text": "",
        "depth": 0,
        "detailId": "line-715"
      },
      {
        "index": 718,
        "text": "",
        "depth": 0,
        "detailId": "line-718"
      },
      {
        "index": 724,
        "text": "",
        "depth": 0,
        "detailId": "line-724"
      },
      {
        "index": 729,
        "text": "",
        "depth": 0,
        "detailId": "line-729"
      },
      {
        "index": 733,
        "text": "",
        "depth": 0,
        "detailId": "line-733"
      },
      {
        "index": 750,
        "text": "",
        "depth": 0,
        "detailId": "line-750"
      },
      {
        "index": 755,
        "text": "",
        "depth": 0,
        "detailId": "line-755"
      },
      {
        "index": 761,
        "text": "",
        "depth": 0,
        "detailId": "line-761"
      },
      {
        "index": 769,
        "text": "",
        "depth": 0,
        "detailId": "line-769"
      },
      {
        "index": 776,
        "text": "",
        "depth": 0,
        "detailId": "line-776"
      },
      {
        "index": 780,
        "text": "",
        "depth": 0,
        "detailId": "line-780"
      },
      {
        "index": 788,
        "text": "",
        "depth": 0,
        "detailId": "line-788"
      },
      {
        "index": 791,
        "text": "",
        "depth": 0,
        "detailId": "line-791"
      },
      {
        "index": 794,
        "text": "",
        "depth": 0,
        "detailId": "line-794"
      },
      {
        "index": 797,
        "text": "",
        "depth": 0,
        "detailId": "line-797"
      },
      {
        "index": 802,
        "text": "",
        "depth": 0,
        "detailId": "line-802"
      },
      {
        "index": 806,
        "text": "",
        "depth": 0,
        "detailId": "line-806"
      },
      {
        "index": 811,
        "text": "",
        "depth": 0,
        "detailId": "line-811"
      },
      {
        "index": 818,
        "text": "",
        "depth": 0,
        "detailId": "line-818"
      },
      {
        "index": 821,
        "text": "",
        "depth": 0,
        "detailId": "line-821"
      },
      {
        "index": 836,
        "text": "",
        "depth": 0,
        "detailId": "line-836"
      },
      {
        "index": 841,
        "text": "",
        "depth": 0,
        "detailId": "line-841"
      },
      {
        "index": 847,
        "text": "",
        "depth": 0,
        "detailId": "line-847"
      },
      {
        "index": 851,
        "text": "",
        "depth": 0,
        "detailId": "line-851"
      },
      {
        "index": 868,
        "text": "",
        "depth": 0,
        "detailId": "line-868"
      },
      {
        "index": 873,
        "text": "",
        "depth": 0,
        "detailId": "line-873"
      },
      {
        "index": 879,
        "text": "",
        "depth": 0,
        "detailId": "line-879"
      },
      {
        "index": 888,
        "text": "",
        "depth": 0,
        "detailId": "line-888"
      },
      {
        "index": 906,
        "text": "",
        "depth": 0,
        "detailId": "line-906"
      },
      {
        "index": 922,
        "text": "",
        "depth": 0,
        "detailId": "line-922"
      },
      {
        "index": 932,
        "text": "",
        "depth": 0,
        "detailId": "line-932"
      },
      {
        "index": 937,
        "text": "",
        "depth": 0,
        "detailId": "line-937"
      },
      {
        "index": 950,
        "text": "",
        "depth": 0,
        "detailId": "line-950"
      },
      {
        "index": 961,
        "text": "",
        "depth": 0,
        "detailId": "line-961"
      },
      {
        "index": 967,
        "text": "",
        "depth": 0,
        "detailId": "line-967"
      },
      {
        "index": 976,
        "text": "",
        "depth": 0,
        "detailId": "line-976"
      },
      {
        "index": 980,
        "text": "",
        "depth": 0,
        "detailId": "line-980"
      },
      {
        "index": 986,
        "text": "",
        "depth": 0,
        "detailId": "line-986"
      },
      {
        "index": 994,
        "text": "",
        "depth": 0,
        "detailId": "line-994"
      },
      {
        "index": 999,
        "text": "",
        "depth": 0,
        "detailId": "line-999"
      },
      {
        "index": 1007,
        "text": "",
        "depth": 0,
        "detailId": "line-1007"
      },
      {
        "index": 1016,
        "text": "",
        "depth": 0,
        "detailId": "line-1016"
      },
      {
        "index": 1024,
        "text": "",
        "depth": 0,
        "detailId": "line-1024"
      },
      {
        "index": 1035,
        "text": "",
        "depth": 0,
        "detailId": "line-1035"
      },
      {
        "index": 1038,
        "text": "",
        "depth": 0,
        "detailId": "line-1038"
      },
      {
        "index": 1041,
        "text": "",
        "depth": 0,
        "detailId": "line-1041"
      },
      {
        "index": 1044,
        "text": "",
        "depth": 0,
        "detailId": "line-1044"
      },
      {
        "index": 1058,
        "text": "",
        "depth": 0,
        "detailId": "line-1058"
      },
      {
        "index": 1066,
        "text": "",
        "depth": 0,
        "detailId": "line-1066"
      },
      {
        "index": 1078,
        "text": "",
        "depth": 0,
        "detailId": "line-1078"
      },
      {
        "index": 1082,
        "text": "",
        "depth": 0,
        "detailId": "line-1082"
      },
      {
        "index": 1090,
        "text": "",
        "depth": 0,
        "detailId": "line-1090"
      },
      {
        "index": 1098,
        "text": "",
        "depth": 0,
        "detailId": "line-1098"
      },
      {
        "index": 1120,
        "text": "",
        "depth": 0,
        "detailId": "line-1120"
      },
      {
        "index": 1125,
        "text": "",
        "depth": 0,
        "detailId": "line-1125"
      },
      {
        "index": 1131,
        "text": "",
        "depth": 0,
        "detailId": "line-1131"
      },
      {
        "index": 1139,
        "text": "",
        "depth": 0,
        "detailId": "line-1139"
      },
      {
        "index": 1146,
        "text": "",
        "depth": 0,
        "detailId": "line-1146"
      },
      {
        "index": 1150,
        "text": "",
        "depth": 0,
        "detailId": "line-1150"
      },
      {
        "index": 1158,
        "text": "",
        "depth": 0,
        "detailId": "line-1158"
      },
      {
        "index": 1161,
        "text": "",
        "depth": 0,
        "detailId": "line-1161"
      },
      {
        "index": 1164,
        "text": "",
        "depth": 0,
        "detailId": "line-1164"
      },
      {
        "index": 1167,
        "text": "",
        "depth": 0,
        "detailId": "line-1167"
      },
      {
        "index": 1172,
        "text": "",
        "depth": 0,
        "detailId": "line-1172"
      },
      {
        "index": 1176,
        "text": "",
        "depth": 0,
        "detailId": "line-1176"
      },
      {
        "index": 1181,
        "text": "",
        "depth": 0,
        "detailId": "line-1181"
      },
      {
        "index": 1188,
        "text": "",
        "depth": 0,
        "detailId": "line-1188"
      },
      {
        "index": 1191,
        "text": "",
        "depth": 0,
        "detailId": "line-1191"
      },
      {
        "index": 1206,
        "text": "",
        "depth": 0,
        "detailId": "line-1206"
      },
      {
        "index": 1211,
        "text": "",
        "depth": 0,
        "detailId": "line-1211"
      },
      {
        "index": 1216,
        "text": "",
        "depth": 0,
        "detailId": "line-1216"
      },
      {
        "index": 1228,
        "text": "",
        "depth": 0,
        "detailId": "line-1228"
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
        "index": 1251,
        "text": "",
        "depth": 0,
        "detailId": "line-1251"
      },
      {
        "index": 1258,
        "text": "",
        "depth": 0,
        "detailId": "line-1258"
      },
      {
        "index": 1262,
        "text": "",
        "depth": 0,
        "detailId": "line-1262"
      },
      {
        "index": 1269,
        "text": "",
        "depth": 0,
        "detailId": "line-1269"
      },
      {
        "index": 1272,
        "text": "",
        "depth": 0,
        "detailId": "line-1272"
      },
      {
        "index": 1280,
        "text": "",
        "depth": 0,
        "detailId": "line-1280"
      },
      {
        "index": 1284,
        "text": "",
        "depth": 0,
        "detailId": "line-1284"
      },
      {
        "index": 1307,
        "text": "",
        "depth": 0,
        "detailId": "line-1307"
      },
      {
        "index": 1311,
        "text": "",
        "depth": 0,
        "detailId": "line-1311"
      },
      {
        "index": 1318,
        "text": "",
        "depth": 0,
        "detailId": "line-1318"
      },
      {
        "index": 1323,
        "text": "",
        "depth": 0,
        "detailId": "line-1323"
      },
      {
        "index": 1329,
        "text": "",
        "depth": 0,
        "detailId": "line-1329"
      },
      {
        "index": 1354,
        "text": "",
        "depth": 0,
        "detailId": "line-1354"
      },
      {
        "index": 1359,
        "text": "",
        "depth": 0,
        "detailId": "line-1359"
      },
      {
        "index": 1369,
        "text": "",
        "depth": 0,
        "detailId": "line-1369"
      },
      {
        "index": 1374,
        "text": "",
        "depth": 0,
        "detailId": "line-1374"
      },
      {
        "index": 1379,
        "text": "",
        "depth": 0,
        "detailId": "line-1379"
      },
      {
        "index": 1389,
        "text": "",
        "depth": 0,
        "detailId": "line-1389"
      },
      {
        "index": 1393,
        "text": "",
        "depth": 0,
        "detailId": "line-1393"
      },
      {
        "index": 1408,
        "text": "",
        "depth": 0,
        "detailId": "line-1408"
      },
      {
        "index": 1413,
        "text": "",
        "depth": 0,
        "detailId": "line-1413"
      },
      {
        "index": 1423,
        "text": "",
        "depth": 0,
        "detailId": "line-1423"
      },
      {
        "index": 1428,
        "text": "",
        "depth": 0,
        "detailId": "line-1428"
      },
      {
        "index": 1433,
        "text": "",
        "depth": 0,
        "detailId": "line-1433"
      },
      {
        "index": 1443,
        "text": "",
        "depth": 0,
        "detailId": "line-1443"
      },
      {
        "index": 1471,
        "text": "",
        "depth": 0,
        "detailId": "line-1471"
      },
      {
        "index": 1480,
        "text": "",
        "depth": 0,
        "detailId": "line-1480"
      },
      {
        "index": 1485,
        "text": "",
        "depth": 0,
        "detailId": "line-1485"
      },
      {
        "index": 1493,
        "text": "",
        "depth": 0,
        "detailId": "line-1493"
      },
      {
        "index": 1501,
        "text": "",
        "depth": 0,
        "detailId": "line-1501"
      },
      {
        "index": 1515,
        "text": "",
        "depth": 0,
        "detailId": "line-1515"
      },
      {
        "index": 1530,
        "text": "",
        "depth": 0,
        "detailId": "line-1530"
      },
      {
        "index": 1543,
        "text": "",
        "depth": 0,
        "detailId": "line-1543"
      },
      {
        "index": 1548,
        "text": "",
        "depth": 0,
        "detailId": "line-1548"
      },
      {
        "index": 1556,
        "text": "",
        "depth": 0,
        "detailId": "line-1556"
      },
      {
        "index": 1564,
        "text": "",
        "depth": 0,
        "detailId": "line-1564"
      },
      {
        "index": 1572,
        "text": "",
        "depth": 0,
        "detailId": "line-1572"
      },
      {
        "index": 1576,
        "text": "",
        "depth": 0,
        "detailId": "line-1576"
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
        "index": 1723,
        "text": "",
        "depth": 0,
        "detailId": "line-1723"
      },
      {
        "index": 1732,
        "text": "",
        "depth": 0,
        "detailId": "line-1732"
      },
      {
        "index": 1737,
        "text": "",
        "depth": 0,
        "detailId": "line-1737"
      },
      {
        "index": 1745,
        "text": "",
        "depth": 0,
        "detailId": "line-1745"
      },
      {
        "index": 1753,
        "text": "",
        "depth": 0,
        "detailId": "line-1753"
      },
      {
        "index": 1767,
        "text": "",
        "depth": 0,
        "detailId": "line-1767"
      },
      {
        "index": 1782,
        "text": "",
        "depth": 0,
        "detailId": "line-1782"
      },
      {
        "index": 1795,
        "text": "",
        "depth": 0,
        "detailId": "line-1795"
      },
      {
        "index": 1800,
        "text": "",
        "depth": 0,
        "detailId": "line-1800"
      },
      {
        "index": 1808,
        "text": "",
        "depth": 0,
        "detailId": "line-1808"
      },
      {
        "index": 1816,
        "text": "",
        "depth": 0,
        "detailId": "line-1816"
      },
      {
        "index": 1824,
        "text": "",
        "depth": 0,
        "detailId": "line-1824"
      },
      {
        "index": 1828,
        "text": "",
        "depth": 0,
        "detailId": "line-1828"
      },
      {
        "index": 1847,
        "text": "",
        "depth": 0,
        "detailId": "line-1847"
      },
      {
        "index": 1856,
        "text": "",
        "depth": 0,
        "detailId": "line-1856"
      },
      {
        "index": 1861,
        "text": "",
        "depth": 0,
        "detailId": "line-1861"
      },
      {
        "index": 1869,
        "text": "",
        "depth": 0,
        "detailId": "line-1869"
      },
      {
        "index": 1877,
        "text": "",
        "depth": 0,
        "detailId": "line-1877"
      },
      {
        "index": 1891,
        "text": "",
        "depth": 0,
        "detailId": "line-1891"
      },
      {
        "index": 1905,
        "text": "",
        "depth": 0,
        "detailId": "line-1905"
      },
      {
        "index": 1918,
        "text": "",
        "depth": 0,
        "detailId": "line-1918"
      },
      {
        "index": 1923,
        "text": "",
        "depth": 0,
        "detailId": "line-1923"
      },
      {
        "index": 1931,
        "text": "",
        "depth": 0,
        "detailId": "line-1931"
      },
      {
        "index": 1939,
        "text": "",
        "depth": 0,
        "detailId": "line-1939"
      },
      {
        "index": 1947,
        "text": "",
        "depth": 0,
        "detailId": "line-1947"
      },
      {
        "index": 1951,
        "text": "",
        "depth": 0,
        "detailId": "line-1951"
      },
      {
        "index": 1961,
        "text": "",
        "depth": 0,
        "detailId": "line-1961"
      },
      {
        "index": 1969,
        "text": "",
        "depth": 0,
        "detailId": "line-1969"
      },
      {
        "index": 1972,
        "text": "",
        "depth": 0,
        "detailId": "line-1972"
      },
      {
        "index": 1978,
        "text": "",
        "depth": 0,
        "detailId": "line-1978"
      },
      {
        "index": 1986,
        "text": "",
        "depth": 0,
        "detailId": "line-1986"
      },
      {
        "index": 1991,
        "text": "",
        "depth": 0,
        "detailId": "line-1991"
      },
      {
        "index": 2003,
        "text": "",
        "depth": 0,
        "detailId": "line-2003"
      },
      {
        "index": 2016,
        "text": "",
        "depth": 0,
        "detailId": "line-2016"
      },
      {
        "index": 2029,
        "text": "",
        "depth": 0,
        "detailId": "line-2029"
      },
      {
        "index": 2036,
        "text": "",
        "depth": 0,
        "detailId": "line-2036"
      },
      {
        "index": 2047,
        "text": "",
        "depth": 0,
        "detailId": "line-2047"
      },
      {
        "index": 2055,
        "text": "",
        "depth": 0,
        "detailId": "line-2055"
      },
      {
        "index": 2062,
        "text": "",
        "depth": 0,
        "detailId": "line-2062"
      },
      {
        "index": 2065,
        "text": "",
        "depth": 0,
        "detailId": "line-2065"
      },
      {
        "index": 2075,
        "text": "",
        "depth": 0,
        "detailId": "line-2075"
      },
      {
        "index": 2079,
        "text": "",
        "depth": 0,
        "detailId": "line-2079"
      },
      {
        "index": 2089,
        "text": "",
        "depth": 0,
        "detailId": "line-2089"
      },
      {
        "index": 2094,
        "text": "",
        "depth": 0,
        "detailId": "line-2094"
      },
      {
        "index": 2097,
        "text": "",
        "depth": 0,
        "detailId": "line-2097"
      },
      {
        "index": 2108,
        "text": "",
        "depth": 0,
        "detailId": "line-2108"
      },
      {
        "index": 2116,
        "text": "",
        "depth": 0,
        "detailId": "line-2116"
      },
      {
        "index": 2120,
        "text": "",
        "depth": 0,
        "detailId": "line-2120"
      },
      {
        "index": 2124,
        "text": "",
        "depth": 0,
        "detailId": "line-2124"
      },
      {
        "index": 2130,
        "text": "",
        "depth": 0,
        "detailId": "line-2130"
      },
      {
        "index": 2137,
        "text": "",
        "depth": 0,
        "detailId": "line-2137"
      },
      {
        "index": 2140,
        "text": "",
        "depth": 0,
        "detailId": "line-2140"
      },
      {
        "index": 2156,
        "text": "",
        "depth": 0,
        "detailId": "line-2156"
      },
      {
        "index": 2159,
        "text": "",
        "depth": 0,
        "detailId": "line-2159"
      },
      {
        "index": 2164,
        "text": "",
        "depth": 0,
        "detailId": "line-2164"
      },
      {
        "index": 2173,
        "text": "",
        "depth": 0,
        "detailId": "line-2173"
      },
      {
        "index": 2176,
        "text": "",
        "depth": 0,
        "detailId": "line-2176"
      },
      {
        "index": 2180,
        "text": "",
        "depth": 0,
        "detailId": "line-2180"
      },
      {
        "index": 2186,
        "text": "",
        "depth": 0,
        "detailId": "line-2186"
      },
      {
        "index": 2206,
        "text": "",
        "depth": 0,
        "detailId": "line-2206"
      },
      {
        "index": 2213,
        "text": "",
        "depth": 0,
        "detailId": "line-2213"
      },
      {
        "index": 2217,
        "text": "",
        "depth": 0,
        "detailId": "line-2217"
      },
      {
        "index": 2225,
        "text": "",
        "depth": 0,
        "detailId": "line-2225"
      },
      {
        "index": 2228,
        "text": "",
        "depth": 0,
        "detailId": "line-2228"
      },
      {
        "index": 2231,
        "text": "",
        "depth": 0,
        "detailId": "line-2231"
      },
      {
        "index": 2235,
        "text": "",
        "depth": 0,
        "detailId": "line-2235"
      },
      {
        "index": 2240,
        "text": "",
        "depth": 0,
        "detailId": "line-2240"
      },
      {
        "index": 2250,
        "text": "",
        "depth": 0,
        "detailId": "line-2250"
      },
      {
        "index": 2253,
        "text": "",
        "depth": 0,
        "detailId": "line-2253"
      },
      {
        "index": 2278,
        "text": "",
        "depth": 0,
        "detailId": "line-2278"
      },
      {
        "index": 2285,
        "text": "",
        "depth": 0,
        "detailId": "line-2285"
      },
      {
        "index": 2289,
        "text": "",
        "depth": 0,
        "detailId": "line-2289"
      },
      {
        "index": 2297,
        "text": "",
        "depth": 0,
        "detailId": "line-2297"
      },
      {
        "index": 2300,
        "text": "",
        "depth": 0,
        "detailId": "line-2300"
      },
      {
        "index": 2303,
        "text": "",
        "depth": 0,
        "detailId": "line-2303"
      },
      {
        "index": 2307,
        "text": "",
        "depth": 0,
        "detailId": "line-2307"
      },
      {
        "index": 2312,
        "text": "",
        "depth": 0,
        "detailId": "line-2312"
      },
      {
        "index": 2322,
        "text": "",
        "depth": 0,
        "detailId": "line-2322"
      },
      {
        "index": 2325,
        "text": "",
        "depth": 0,
        "detailId": "line-2325"
      },
      {
        "index": 2331,
        "text": "",
        "depth": 0,
        "detailId": "line-2331"
      },
      {
        "index": 2345,
        "text": "",
        "depth": 0,
        "detailId": "line-2345"
      },
      {
        "index": 2350,
        "text": "",
        "depth": 0,
        "detailId": "line-2350"
      },
      {
        "index": 2356,
        "text": "",
        "depth": 0,
        "detailId": "line-2356"
      },
      {
        "index": 2364,
        "text": "",
        "depth": 0,
        "detailId": "line-2364"
      },
      {
        "index": 2371,
        "text": "",
        "depth": 0,
        "detailId": "line-2371"
      },
      {
        "index": 2375,
        "text": "",
        "depth": 0,
        "detailId": "line-2375"
      },
      {
        "index": 2383,
        "text": "",
        "depth": 0,
        "detailId": "line-2383"
      },
      {
        "index": 2386,
        "text": "",
        "depth": 0,
        "detailId": "line-2386"
      },
      {
        "index": 2389,
        "text": "",
        "depth": 0,
        "detailId": "line-2389"
      },
      {
        "index": 2392,
        "text": "",
        "depth": 0,
        "detailId": "line-2392"
      },
      {
        "index": 2397,
        "text": "",
        "depth": 0,
        "detailId": "line-2397"
      },
      {
        "index": 2401,
        "text": "",
        "depth": 0,
        "detailId": "line-2401"
      },
      {
        "index": 2406,
        "text": "",
        "depth": 0,
        "detailId": "line-2406"
      },
      {
        "index": 2413,
        "text": "",
        "depth": 0,
        "detailId": "line-2413"
      },
      {
        "index": 2416,
        "text": "",
        "depth": 0,
        "detailId": "line-2416"
      },
      {
        "index": 2431,
        "text": "",
        "depth": 0,
        "detailId": "line-2431"
      },
      {
        "index": 2436,
        "text": "",
        "depth": 0,
        "detailId": "line-2436"
      },
      {
        "index": 2443,
        "text": "",
        "depth": 0,
        "detailId": "line-2443"
      },
      {
        "index": 2446,
        "text": "",
        "depth": 0,
        "detailId": "line-2446"
      },
      {
        "index": 2452,
        "text": "",
        "depth": 0,
        "detailId": "line-2452"
      },
      {
        "index": 2457,
        "text": "",
        "depth": 0,
        "detailId": "line-2457"
      },
      {
        "index": 2461,
        "text": "",
        "depth": 0,
        "detailId": "line-2461"
      },
      {
        "index": 2475,
        "text": "",
        "depth": 0,
        "detailId": "line-2475"
      },
      {
        "index": 2480,
        "text": "",
        "depth": 0,
        "detailId": "line-2480"
      },
      {
        "index": 2486,
        "text": "",
        "depth": 0,
        "detailId": "line-2486"
      },
      {
        "index": 2494,
        "text": "",
        "depth": 0,
        "detailId": "line-2494"
      },
      {
        "index": 2501,
        "text": "",
        "depth": 0,
        "detailId": "line-2501"
      },
      {
        "index": 2505,
        "text": "",
        "depth": 0,
        "detailId": "line-2505"
      },
      {
        "index": 2513,
        "text": "",
        "depth": 0,
        "detailId": "line-2513"
      },
      {
        "index": 2516,
        "text": "",
        "depth": 0,
        "detailId": "line-2516"
      },
      {
        "index": 2519,
        "text": "",
        "depth": 0,
        "detailId": "line-2519"
      },
      {
        "index": 2522,
        "text": "",
        "depth": 0,
        "detailId": "line-2522"
      },
      {
        "index": 2527,
        "text": "",
        "depth": 0,
        "detailId": "line-2527"
      },
      {
        "index": 2531,
        "text": "",
        "depth": 0,
        "detailId": "line-2531"
      },
      {
        "index": 2536,
        "text": "",
        "depth": 0,
        "detailId": "line-2536"
      },
      {
        "index": 2543,
        "text": "",
        "depth": 0,
        "detailId": "line-2543"
      },
      {
        "index": 2546,
        "text": "",
        "depth": 0,
        "detailId": "line-2546"
      },
      {
        "index": 2561,
        "text": "",
        "depth": 0,
        "detailId": "line-2561"
      },
      {
        "index": 2566,
        "text": "",
        "depth": 0,
        "detailId": "line-2566"
      },
      {
        "index": 2572,
        "text": "",
        "depth": 0,
        "detailId": "line-2572"
      },
      {
        "index": 2576,
        "text": "",
        "depth": 0,
        "detailId": "line-2576"
      },
      {
        "index": 2592,
        "text": "",
        "depth": 0,
        "detailId": "line-2592"
      },
      {
        "index": 2597,
        "text": "",
        "depth": 0,
        "detailId": "line-2597"
      },
      {
        "index": 2603,
        "text": "",
        "depth": 0,
        "detailId": "line-2603"
      },
      {
        "index": 2612,
        "text": "",
        "depth": 0,
        "detailId": "line-2612"
      },
      {
        "index": 2617,
        "text": "",
        "depth": 0,
        "detailId": "line-2617"
      },
      {
        "index": 2626,
        "text": "",
        "depth": 0,
        "detailId": "line-2626"
      },
      {
        "index": 2636,
        "text": "",
        "depth": 0,
        "detailId": "line-2636"
      },
      {
        "index": 2641,
        "text": "",
        "depth": 0,
        "detailId": "line-2641"
      },
      {
        "index": 2654,
        "text": "",
        "depth": 0,
        "detailId": "line-2654"
      },
      {
        "index": 2665,
        "text": "",
        "depth": 0,
        "detailId": "line-2665"
      },
      {
        "index": 2671,
        "text": "",
        "depth": 0,
        "detailId": "line-2671"
      },
      {
        "index": 2680,
        "text": "",
        "depth": 0,
        "detailId": "line-2680"
      },
      {
        "index": 2684,
        "text": "",
        "depth": 0,
        "detailId": "line-2684"
      },
      {
        "index": 2690,
        "text": "",
        "depth": 0,
        "detailId": "line-2690"
      },
      {
        "index": 2698,
        "text": "",
        "depth": 0,
        "detailId": "line-2698"
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
        "index": 2720,
        "text": "",
        "depth": 0,
        "detailId": "line-2720"
      },
      {
        "index": 2728,
        "text": "",
        "depth": 0,
        "detailId": "line-2728"
      },
      {
        "index": 2739,
        "text": "",
        "depth": 0,
        "detailId": "line-2739"
      },
      {
        "index": 2742,
        "text": "",
        "depth": 0,
        "detailId": "line-2742"
      },
      {
        "index": 2745,
        "text": "",
        "depth": 0,
        "detailId": "line-2745"
      },
      {
        "index": 2748,
        "text": "",
        "depth": 0,
        "detailId": "line-2748"
      },
      {
        "index": 2762,
        "text": "",
        "depth": 0,
        "detailId": "line-2762"
      },
      {
        "index": 2770,
        "text": "",
        "depth": 0,
        "detailId": "line-2770"
      },
      {
        "index": 2782,
        "text": "",
        "depth": 0,
        "detailId": "line-2782"
      },
      {
        "index": 2786,
        "text": "",
        "depth": 0,
        "detailId": "line-2786"
      },
      {
        "index": 2794,
        "text": "",
        "depth": 0,
        "detailId": "line-2794"
      },
      {
        "index": 2802,
        "text": "",
        "depth": 0,
        "detailId": "line-2802"
      },
      {
        "index": 2816,
        "text": "",
        "depth": 0,
        "detailId": "line-2816"
      },
      {
        "index": 2821,
        "text": "",
        "depth": 0,
        "detailId": "line-2821"
      },
      {
        "index": 2827,
        "text": "",
        "depth": 0,
        "detailId": "line-2827"
      },
      {
        "index": 2835,
        "text": "",
        "depth": 0,
        "detailId": "line-2835"
      },
      {
        "index": 2842,
        "text": "",
        "depth": 0,
        "detailId": "line-2842"
      },
      {
        "index": 2846,
        "text": "",
        "depth": 0,
        "detailId": "line-2846"
      },
      {
        "index": 2854,
        "text": "",
        "depth": 0,
        "detailId": "line-2854"
      },
      {
        "index": 2857,
        "text": "",
        "depth": 0,
        "detailId": "line-2857"
      },
      {
        "index": 2860,
        "text": "",
        "depth": 0,
        "detailId": "line-2860"
      },
      {
        "index": 2863,
        "text": "",
        "depth": 0,
        "detailId": "line-2863"
      },
      {
        "index": 2868,
        "text": "",
        "depth": 0,
        "detailId": "line-2868"
      },
      {
        "index": 2872,
        "text": "",
        "depth": 0,
        "detailId": "line-2872"
      },
      {
        "index": 2877,
        "text": "",
        "depth": 0,
        "detailId": "line-2877"
      },
      {
        "index": 2884,
        "text": "",
        "depth": 0,
        "detailId": "line-2884"
      },
      {
        "index": 2887,
        "text": "",
        "depth": 0,
        "detailId": "line-2887"
      },
      {
        "index": 2902,
        "text": "",
        "depth": 0,
        "detailId": "line-2902"
      },
      {
        "index": 2907,
        "text": "",
        "depth": 0,
        "detailId": "line-2907"
      },
      {
        "index": 2912,
        "text": "",
        "depth": 0,
        "detailId": "line-2912"
      },
      {
        "index": 2924,
        "text": "",
        "depth": 0,
        "detailId": "line-2924"
      },
      {
        "index": 2935,
        "text": "",
        "depth": 0,
        "detailId": "line-2935"
      },
      {
        "index": 2944,
        "text": "",
        "depth": 0,
        "detailId": "line-2944"
      },
      {
        "index": 2954,
        "text": "",
        "depth": 0,
        "detailId": "line-2954"
      },
      {
        "index": 2958,
        "text": "",
        "depth": 0,
        "detailId": "line-2958"
      },
      {
        "index": 2965,
        "text": "",
        "depth": 0,
        "detailId": "line-2965"
      },
      {
        "index": 2969,
        "text": "",
        "depth": 0,
        "detailId": "line-2969"
      },
      {
        "index": 2977,
        "text": "",
        "depth": 0,
        "detailId": "line-2977"
      },
      {
        "index": 2980,
        "text": "",
        "depth": 0,
        "detailId": "line-2980"
      },
      {
        "index": 2988,
        "text": "",
        "depth": 0,
        "detailId": "line-2988"
      },
      {
        "index": 2992,
        "text": "",
        "depth": 0,
        "detailId": "line-2992"
      },
      {
        "index": 3015,
        "text": "",
        "depth": 0,
        "detailId": "line-3015"
      },
      {
        "index": 3019,
        "text": "",
        "depth": 0,
        "detailId": "line-3019"
      },
      {
        "index": 3026,
        "text": "",
        "depth": 0,
        "detailId": "line-3026"
      },
      {
        "index": 3031,
        "text": "",
        "depth": 0,
        "detailId": "line-3031"
      },
      {
        "index": 3037,
        "text": "",
        "depth": 0,
        "detailId": "line-3037"
      },
      {
        "index": 3041,
        "text": "",
        "depth": 0,
        "detailId": "line-3041"
      },
      {
        "index": 3044,
        "text": "",
        "depth": 0,
        "detailId": "line-3044"
      },
      {
        "index": 3052,
        "text": "",
        "depth": 0,
        "detailId": "line-3052"
      },
      {
        "index": 3055,
        "text": "",
        "depth": 0,
        "detailId": "line-3055"
      },
      {
        "index": 3067,
        "text": "",
        "depth": 0,
        "detailId": "line-3067"
      },
      {
        "index": 3071,
        "text": "",
        "depth": 0,
        "detailId": "line-3071"
      },
      {
        "index": 3084,
        "text": "",
        "depth": 0,
        "detailId": "line-3084"
      },
      {
        "index": 3097,
        "text": "",
        "depth": 0,
        "detailId": "line-3097"
      },
      {
        "index": 3115,
        "text": "",
        "depth": 0,
        "detailId": "line-3115"
      },
      {
        "index": 3128,
        "text": "",
        "depth": 0,
        "detailId": "line-3128"
      },
      {
        "index": 3141,
        "text": "",
        "depth": 0,
        "detailId": "line-3141"
      },
      {
        "index": 3148,
        "text": "",
        "depth": 0,
        "detailId": "line-3148"
      },
      {
        "index": 3159,
        "text": "",
        "depth": 0,
        "detailId": "line-3159"
      },
      {
        "index": 3167,
        "text": "",
        "depth": 0,
        "detailId": "line-3167"
      },
      {
        "index": 3174,
        "text": "",
        "depth": 0,
        "detailId": "line-3174"
      },
      {
        "index": 3177,
        "text": "",
        "depth": 0,
        "detailId": "line-3177"
      },
      {
        "index": 3187,
        "text": "",
        "depth": 0,
        "detailId": "line-3187"
      },
      {
        "index": 3191,
        "text": "",
        "depth": 0,
        "detailId": "line-3191"
      },
      {
        "index": 3201,
        "text": "",
        "depth": 0,
        "detailId": "line-3201"
      },
      {
        "index": 3206,
        "text": "",
        "depth": 0,
        "detailId": "line-3206"
      },
      {
        "index": 3209,
        "text": "",
        "depth": 0,
        "detailId": "line-3209"
      },
      {
        "index": 3220,
        "text": "",
        "depth": 0,
        "detailId": "line-3220"
      },
      {
        "index": 3228,
        "text": "",
        "depth": 0,
        "detailId": "line-3228"
      },
      {
        "index": 3232,
        "text": "",
        "depth": 0,
        "detailId": "line-3232"
      },
      {
        "index": 3236,
        "text": "",
        "depth": 0,
        "detailId": "line-3236"
      },
      {
        "index": 3242,
        "text": "",
        "depth": 0,
        "detailId": "line-3242"
      },
      {
        "index": 3249,
        "text": "",
        "depth": 0,
        "detailId": "line-3249"
      },
      {
        "index": 3252,
        "text": "",
        "depth": 0,
        "detailId": "line-3252"
      },
      {
        "index": 3268,
        "text": "",
        "depth": 0,
        "detailId": "line-3268"
      },
      {
        "index": 3271,
        "text": "",
        "depth": 0,
        "detailId": "line-3271"
      },
      {
        "index": 3276,
        "text": "",
        "depth": 0,
        "detailId": "line-3276"
      },
      {
        "index": 3285,
        "text": "",
        "depth": 0,
        "detailId": "line-3285"
      },
      {
        "index": 3288,
        "text": "",
        "depth": 0,
        "detailId": "line-3288"
      },
      {
        "index": 3295,
        "text": "",
        "depth": 0,
        "detailId": "line-3295"
      },
      {
        "index": 3301,
        "text": "",
        "depth": 0,
        "detailId": "line-3301"
      },
      {
        "index": 3322,
        "text": "",
        "depth": 0,
        "detailId": "line-3322"
      },
      {
        "index": 3329,
        "text": "",
        "depth": 0,
        "detailId": "line-3329"
      },
      {
        "index": 3333,
        "text": "",
        "depth": 0,
        "detailId": "line-3333"
      },
      {
        "index": 3341,
        "text": "",
        "depth": 0,
        "detailId": "line-3341"
      },
      {
        "index": 3344,
        "text": "",
        "depth": 0,
        "detailId": "line-3344"
      },
      {
        "index": 3347,
        "text": "",
        "depth": 0,
        "detailId": "line-3347"
      },
      {
        "index": 3351,
        "text": "",
        "depth": 0,
        "detailId": "line-3351"
      },
      {
        "index": 3356,
        "text": "",
        "depth": 0,
        "detailId": "line-3356"
      },
      {
        "index": 3366,
        "text": "",
        "depth": 0,
        "detailId": "line-3366"
      },
      {
        "index": 3369,
        "text": "",
        "depth": 0,
        "detailId": "line-3369"
      },
      {
        "index": 3394,
        "text": "",
        "depth": 0,
        "detailId": "line-3394"
      },
      {
        "index": 3401,
        "text": "",
        "depth": 0,
        "detailId": "line-3401"
      },
      {
        "index": 3405,
        "text": "",
        "depth": 0,
        "detailId": "line-3405"
      },
      {
        "index": 3413,
        "text": "",
        "depth": 0,
        "detailId": "line-3413"
      },
      {
        "index": 3416,
        "text": "",
        "depth": 0,
        "detailId": "line-3416"
      },
      {
        "index": 3419,
        "text": "",
        "depth": 0,
        "detailId": "line-3419"
      },
      {
        "index": 3423,
        "text": "",
        "depth": 0,
        "detailId": "line-3423"
      },
      {
        "index": 3428,
        "text": "",
        "depth": 0,
        "detailId": "line-3428"
      },
      {
        "index": 3438,
        "text": "",
        "depth": 0,
        "detailId": "line-3438"
      },
      {
        "index": 3441,
        "text": "",
        "depth": 0,
        "detailId": "line-3441"
      },
      {
        "index": 3447,
        "text": "",
        "depth": 0,
        "detailId": "line-3447"
      },
      {
        "index": 3463,
        "text": "",
        "depth": 0,
        "detailId": "line-3463"
      },
      {
        "index": 3468,
        "text": "",
        "depth": 0,
        "detailId": "line-3468"
      },
      {
        "index": 3474,
        "text": "",
        "depth": 0,
        "detailId": "line-3474"
      },
      {
        "index": 3482,
        "text": "",
        "depth": 0,
        "detailId": "line-3482"
      },
      {
        "index": 3489,
        "text": "",
        "depth": 0,
        "detailId": "line-3489"
      },
      {
        "index": 3493,
        "text": "",
        "depth": 0,
        "detailId": "line-3493"
      },
      {
        "index": 3501,
        "text": "",
        "depth": 0,
        "detailId": "line-3501"
      },
      {
        "index": 3504,
        "text": "",
        "depth": 0,
        "detailId": "line-3504"
      },
      {
        "index": 3507,
        "text": "",
        "depth": 0,
        "detailId": "line-3507"
      },
      {
        "index": 3510,
        "text": "",
        "depth": 0,
        "detailId": "line-3510"
      },
      {
        "index": 3515,
        "text": "",
        "depth": 0,
        "detailId": "line-3515"
      },
      {
        "index": 3519,
        "text": "",
        "depth": 0,
        "detailId": "line-3519"
      },
      {
        "index": 3524,
        "text": "",
        "depth": 0,
        "detailId": "line-3524"
      },
      {
        "index": 3531,
        "text": "",
        "depth": 0,
        "detailId": "line-3531"
      },
      {
        "index": 3534,
        "text": "",
        "depth": 0,
        "detailId": "line-3534"
      },
      {
        "index": 3549,
        "text": "",
        "depth": 0,
        "detailId": "line-3549"
      },
      {
        "index": 3554,
        "text": "",
        "depth": 0,
        "detailId": "line-3554"
      },
      {
        "index": 3568,
        "text": "",
        "depth": 0,
        "detailId": "line-3568"
      },
      {
        "index": 3571,
        "text": "",
        "depth": 0,
        "detailId": "line-3571"
      },
      {
        "index": 3577,
        "text": "",
        "depth": 0,
        "detailId": "line-3577"
      },
      {
        "index": 3582,
        "text": "",
        "depth": 0,
        "detailId": "line-3582"
      },
      {
        "index": 3586,
        "text": "",
        "depth": 0,
        "detailId": "line-3586"
      },
      {
        "index": 3603,
        "text": "",
        "depth": 0,
        "detailId": "line-3603"
      },
      {
        "index": 3608,
        "text": "",
        "depth": 0,
        "detailId": "line-3608"
      },
      {
        "index": 3614,
        "text": "",
        "depth": 0,
        "detailId": "line-3614"
      },
      {
        "index": 3622,
        "text": "",
        "depth": 0,
        "detailId": "line-3622"
      },
      {
        "index": 3629,
        "text": "",
        "depth": 0,
        "detailId": "line-3629"
      },
      {
        "index": 3633,
        "text": "",
        "depth": 0,
        "detailId": "line-3633"
      },
      {
        "index": 3641,
        "text": "",
        "depth": 0,
        "detailId": "line-3641"
      },
      {
        "index": 3644,
        "text": "",
        "depth": 0,
        "detailId": "line-3644"
      },
      {
        "index": 3647,
        "text": "",
        "depth": 0,
        "detailId": "line-3647"
      },
      {
        "index": 3650,
        "text": "",
        "depth": 0,
        "detailId": "line-3650"
      },
      {
        "index": 3655,
        "text": "",
        "depth": 0,
        "detailId": "line-3655"
      },
      {
        "index": 3659,
        "text": "",
        "depth": 0,
        "detailId": "line-3659"
      },
      {
        "index": 3664,
        "text": "",
        "depth": 0,
        "detailId": "line-3664"
      },
      {
        "index": 3671,
        "text": "",
        "depth": 0,
        "detailId": "line-3671"
      },
      {
        "index": 3674,
        "text": "",
        "depth": 0,
        "detailId": "line-3674"
      },
      {
        "index": 3689,
        "text": "",
        "depth": 0,
        "detailId": "line-3689"
      },
      {
        "index": 3694,
        "text": "",
        "depth": 0,
        "detailId": "line-3694"
      },
      {
        "index": 3700,
        "text": "",
        "depth": 0,
        "detailId": "line-3700"
      },
      {
        "index": 3704,
        "text": "",
        "depth": 0,
        "detailId": "line-3704"
      },
      {
        "index": 3721,
        "text": "",
        "depth": 0,
        "detailId": "line-3721"
      },
      {
        "index": 3726,
        "text": "",
        "depth": 0,
        "detailId": "line-3726"
      },
      {
        "index": 3732,
        "text": "",
        "depth": 0,
        "detailId": "line-3732"
      },
      {
        "index": 3741,
        "text": "",
        "depth": 0,
        "detailId": "line-3741"
      },
      {
        "index": 3759,
        "text": "",
        "depth": 0,
        "detailId": "line-3759"
      },
      {
        "index": 3775,
        "text": "",
        "depth": 0,
        "detailId": "line-3775"
      },
      {
        "index": 3785,
        "text": "",
        "depth": 0,
        "detailId": "line-3785"
      },
      {
        "index": 3790,
        "text": "",
        "depth": 0,
        "detailId": "line-3790"
      },
      {
        "index": 3803,
        "text": "",
        "depth": 0,
        "detailId": "line-3803"
      },
      {
        "index": 3814,
        "text": "",
        "depth": 0,
        "detailId": "line-3814"
      },
      {
        "index": 3820,
        "text": "",
        "depth": 0,
        "detailId": "line-3820"
      },
      {
        "index": 3829,
        "text": "",
        "depth": 0,
        "detailId": "line-3829"
      },
      {
        "index": 3833,
        "text": "",
        "depth": 0,
        "detailId": "line-3833"
      },
      {
        "index": 3839,
        "text": "",
        "depth": 0,
        "detailId": "line-3839"
      },
      {
        "index": 3847,
        "text": "",
        "depth": 0,
        "detailId": "line-3847"
      },
      {
        "index": 3852,
        "text": "",
        "depth": 0,
        "detailId": "line-3852"
      },
      {
        "index": 3860,
        "text": "",
        "depth": 0,
        "detailId": "line-3860"
      },
      {
        "index": 3869,
        "text": "",
        "depth": 0,
        "detailId": "line-3869"
      },
      {
        "index": 3877,
        "text": "",
        "depth": 0,
        "detailId": "line-3877"
      },
      {
        "index": 3888,
        "text": "",
        "depth": 0,
        "detailId": "line-3888"
      },
      {
        "index": 3891,
        "text": "",
        "depth": 0,
        "detailId": "line-3891"
      },
      {
        "index": 3894,
        "text": "",
        "depth": 0,
        "detailId": "line-3894"
      },
      {
        "index": 3897,
        "text": "",
        "depth": 0,
        "detailId": "line-3897"
      },
      {
        "index": 3911,
        "text": "",
        "depth": 0,
        "detailId": "line-3911"
      },
      {
        "index": 3919,
        "text": "",
        "depth": 0,
        "detailId": "line-3919"
      },
      {
        "index": 3931,
        "text": "",
        "depth": 0,
        "detailId": "line-3931"
      },
      {
        "index": 3935,
        "text": "",
        "depth": 0,
        "detailId": "line-3935"
      },
      {
        "index": 3943,
        "text": "",
        "depth": 0,
        "detailId": "line-3943"
      },
      {
        "index": 3951,
        "text": "",
        "depth": 0,
        "detailId": "line-3951"
      },
      {
        "index": 3973,
        "text": "",
        "depth": 0,
        "detailId": "line-3973"
      },
      {
        "index": 3978,
        "text": "",
        "depth": 0,
        "detailId": "line-3978"
      },
      {
        "index": 3984,
        "text": "",
        "depth": 0,
        "detailId": "line-3984"
      },
      {
        "index": 3992,
        "text": "",
        "depth": 0,
        "detailId": "line-3992"
      },
      {
        "index": 3999,
        "text": "",
        "depth": 0,
        "detailId": "line-3999"
      },
      {
        "index": 4003,
        "text": "",
        "depth": 0,
        "detailId": "line-4003"
      },
      {
        "index": 4011,
        "text": "",
        "depth": 0,
        "detailId": "line-4011"
      },
      {
        "index": 4014,
        "text": "",
        "depth": 0,
        "detailId": "line-4014"
      },
      {
        "index": 4017,
        "text": "",
        "depth": 0,
        "detailId": "line-4017"
      },
      {
        "index": 4020,
        "text": "",
        "depth": 0,
        "detailId": "line-4020"
      },
      {
        "index": 4025,
        "text": "",
        "depth": 0,
        "detailId": "line-4025"
      },
      {
        "index": 4029,
        "text": "",
        "depth": 0,
        "detailId": "line-4029"
      },
      {
        "index": 4034,
        "text": "",
        "depth": 0,
        "detailId": "line-4034"
      },
      {
        "index": 4041,
        "text": "",
        "depth": 0,
        "detailId": "line-4041"
      },
      {
        "index": 4044,
        "text": "",
        "depth": 0,
        "detailId": "line-4044"
      },
      {
        "index": 4059,
        "text": "",
        "depth": 0,
        "detailId": "line-4059"
      },
      {
        "index": 4064,
        "text": "",
        "depth": 0,
        "detailId": "line-4064"
      },
      {
        "index": 4069,
        "text": "",
        "depth": 0,
        "detailId": "line-4069"
      },
      {
        "index": 4081,
        "text": "",
        "depth": 0,
        "detailId": "line-4081"
      },
      {
        "index": 4090,
        "text": "",
        "depth": 0,
        "detailId": "line-4090"
      },
      {
        "index": 4100,
        "text": "",
        "depth": 0,
        "detailId": "line-4100"
      },
      {
        "index": 4104,
        "text": "",
        "depth": 0,
        "detailId": "line-4104"
      },
      {
        "index": 4111,
        "text": "",
        "depth": 0,
        "detailId": "line-4111"
      },
      {
        "index": 4115,
        "text": "",
        "depth": 0,
        "detailId": "line-4115"
      },
      {
        "index": 4122,
        "text": "",
        "depth": 0,
        "detailId": "line-4122"
      },
      {
        "index": 4125,
        "text": "",
        "depth": 0,
        "detailId": "line-4125"
      },
      {
        "index": 4133,
        "text": "",
        "depth": 0,
        "detailId": "line-4133"
      },
      {
        "index": 4137,
        "text": "",
        "depth": 0,
        "detailId": "line-4137"
      },
      {
        "index": 4160,
        "text": "",
        "depth": 0,
        "detailId": "line-4160"
      },
      {
        "index": 4164,
        "text": "",
        "depth": 0,
        "detailId": "line-4164"
      },
      {
        "index": 4171,
        "text": "",
        "depth": 0,
        "detailId": "line-4171"
      },
      {
        "index": 4176,
        "text": "",
        "depth": 0,
        "detailId": "line-4176"
      },
      {
        "index": 4185,
        "text": "",
        "depth": 0,
        "detailId": "line-4185"
      },
      {
        "index": 4192,
        "text": "",
        "depth": 0,
        "detailId": "line-4192"
      },
      {
        "index": 4227,
        "text": "",
        "depth": 0,
        "detailId": "line-4227"
      },
      {
        "index": 4240,
        "text": "",
        "depth": 0,
        "detailId": "line-4240"
      },
      {
        "index": 4245,
        "text": "",
        "depth": 0,
        "detailId": "line-4245"
      },
      {
        "index": 4252,
        "text": "",
        "depth": 0,
        "detailId": "line-4252"
      },
      {
        "index": 4260,
        "text": "",
        "depth": 0,
        "detailId": "line-4260"
      },
      {
        "index": 4270,
        "text": "",
        "depth": 0,
        "detailId": "line-4270"
      },
      {
        "index": 4283,
        "text": "",
        "depth": 0,
        "detailId": "line-4283"
      },
      {
        "index": 4290,
        "text": "",
        "depth": 0,
        "detailId": "line-4290"
      },
      {
        "index": 4308,
        "text": "",
        "depth": 0,
        "detailId": "line-4308"
      },
      {
        "index": 4331,
        "text": "",
        "depth": 0,
        "detailId": "line-4331"
      },
      {
        "index": 4336,
        "text": "",
        "depth": 0,
        "detailId": "line-4336"
      },
      {
        "index": 4342,
        "text": "",
        "depth": 0,
        "detailId": "line-4342"
      },
      {
        "index": 4351,
        "text": "",
        "depth": 0,
        "detailId": "line-4351"
      },
      {
        "index": 4357,
        "text": "",
        "depth": 0,
        "detailId": "line-4357"
      },
      {
        "index": 4366,
        "text": "",
        "depth": 0,
        "detailId": "line-4366"
      },
      {
        "index": 4370,
        "text": "",
        "depth": 0,
        "detailId": "line-4370"
      },
      {
        "index": 4382,
        "text": "",
        "depth": 0,
        "detailId": "line-4382"
      },
      {
        "index": 4396,
        "text": "",
        "depth": 0,
        "detailId": "line-4396"
      },
      {
        "index": 4402,
        "text": "",
        "depth": 0,
        "detailId": "line-4402"
      },
      {
        "index": 4415,
        "text": "",
        "depth": 0,
        "detailId": "line-4415"
      },
      {
        "index": 4425,
        "text": "",
        "depth": 0,
        "detailId": "line-4425"
      },
      {
        "index": 4432,
        "text": "",
        "depth": 0,
        "detailId": "line-4432"
      },
      {
        "index": 4441,
        "text": "",
        "depth": 0,
        "detailId": "line-4441"
      },
      {
        "index": 4449,
        "text": "",
        "depth": 0,
        "detailId": "line-4449"
      },
      {
        "index": 4483,
        "text": "",
        "depth": 0,
        "detailId": "line-4483"
      },
      {
        "index": 4493,
        "text": "",
        "depth": 0,
        "detailId": "line-4493"
      },
      {
        "index": 4496,
        "text": "",
        "depth": 0,
        "detailId": "line-4496"
      },
      {
        "index": 4499,
        "text": "",
        "depth": 0,
        "detailId": "line-4499"
      },
      {
        "index": 4502,
        "text": "",
        "depth": 0,
        "detailId": "line-4502"
      },
      {
        "index": 4513,
        "text": "",
        "depth": 0,
        "detailId": "line-4513"
      },
      {
        "index": 4520,
        "text": "",
        "depth": 0,
        "detailId": "line-4520"
      },
      {
        "index": 4533,
        "text": "",
        "depth": 0,
        "detailId": "line-4533"
      },
      {
        "index": 4541,
        "text": "",
        "depth": 0,
        "detailId": "line-4541"
      },
      {
        "index": 4549,
        "text": "",
        "depth": 0,
        "detailId": "line-4549"
      },
      {
        "index": 4552,
        "text": "",
        "depth": 0,
        "detailId": "line-4552"
      },
      {
        "index": 4564,
        "text": "",
        "depth": 0,
        "detailId": "line-4564"
      },
      {
        "index": 4568,
        "text": "",
        "depth": 0,
        "detailId": "line-4568"
      },
      {
        "index": 4576,
        "text": "",
        "depth": 0,
        "detailId": "line-4576"
      },
      {
        "index": 4583,
        "text": "",
        "depth": 0,
        "detailId": "line-4583"
      },
      {
        "index": 4587,
        "text": "",
        "depth": 0,
        "detailId": "line-4587"
      },
      {
        "index": 4592,
        "text": "",
        "depth": 0,
        "detailId": "line-4592"
      },
      {
        "index": 4602,
        "text": "",
        "depth": 0,
        "detailId": "line-4602"
      },
      {
        "index": 4610,
        "text": "",
        "depth": 0,
        "detailId": "line-4610"
      },
      {
        "index": 4615,
        "text": "",
        "depth": 0,
        "detailId": "line-4615"
      },
      {
        "index": 4626,
        "text": "",
        "depth": 0,
        "detailId": "line-4626"
      },
      {
        "index": 4633,
        "text": "",
        "depth": 0,
        "detailId": "line-4633"
      },
      {
        "index": 4638,
        "text": "",
        "depth": 0,
        "detailId": "line-4638"
      },
      {
        "index": 4644,
        "text": "",
        "depth": 0,
        "detailId": "line-4644"
      },
      {
        "index": 4652,
        "text": "",
        "depth": 0,
        "detailId": "line-4652"
      },
      {
        "index": 4657,
        "text": "",
        "depth": 0,
        "detailId": "line-4657"
      },
      {
        "index": 4681,
        "text": "",
        "depth": 0,
        "detailId": "line-4681"
      },
      {
        "index": 4693,
        "text": "",
        "depth": 0,
        "detailId": "line-4693"
      },
      {
        "index": 4710,
        "text": "",
        "depth": 0,
        "detailId": "line-4710"
      },
      {
        "index": 4720,
        "text": "",
        "depth": 0,
        "detailId": "line-4720"
      },
      {
        "index": 4725,
        "text": "",
        "depth": 0,
        "detailId": "line-4725"
      },
      {
        "index": 4733,
        "text": "",
        "depth": 0,
        "detailId": "line-4733"
      },
      {
        "index": 4741,
        "text": "",
        "depth": 0,
        "detailId": "line-4741"
      },
      {
        "index": 4758,
        "text": "",
        "depth": 0,
        "detailId": "line-4758"
      },
      {
        "index": 4781,
        "text": "",
        "depth": 0,
        "detailId": "line-4781"
      },
      {
        "index": 4792,
        "text": "",
        "depth": 0,
        "detailId": "line-4792"
      },
      {
        "index": 4802,
        "text": "",
        "depth": 0,
        "detailId": "line-4802"
      },
      {
        "index": 4810,
        "text": "",
        "depth": 0,
        "detailId": "line-4810"
      },
      {
        "index": 4822,
        "text": "",
        "depth": 0,
        "detailId": "line-4822"
      },
      {
        "index": 4829,
        "text": "",
        "depth": 0,
        "detailId": "line-4829"
      },
      {
        "index": 4836,
        "text": "",
        "depth": 0,
        "detailId": "line-4836"
      },
      {
        "index": 4841,
        "text": "",
        "depth": 0,
        "detailId": "line-4841"
      },
      {
        "index": 4849,
        "text": "",
        "depth": 0,
        "detailId": "line-4849"
      },
      {
        "index": 4852,
        "text": "",
        "depth": 0,
        "detailId": "line-4852"
      },
      {
        "index": 4856,
        "text": "",
        "depth": 0,
        "detailId": "line-4856"
      },
      {
        "index": 4861,
        "text": "",
        "depth": 0,
        "detailId": "line-4861"
      },
      {
        "index": 4867,
        "text": "",
        "depth": 0,
        "detailId": "line-4867"
      },
      {
        "index": 4871,
        "text": "",
        "depth": 0,
        "detailId": "line-4871"
      },
      {
        "index": 4880,
        "text": "",
        "depth": 0,
        "detailId": "line-4880"
      },
      {
        "index": 4883,
        "text": "",
        "depth": 0,
        "detailId": "line-4883"
      },
      {
        "index": 4887,
        "text": "",
        "depth": 0,
        "detailId": "line-4887"
      },
      {
        "index": 4897,
        "text": "",
        "depth": 0,
        "detailId": "line-4897"
      },
      {
        "index": 4901,
        "text": "",
        "depth": 0,
        "detailId": "line-4901"
      },
      {
        "index": 4907,
        "text": "",
        "depth": 0,
        "detailId": "line-4907"
      },
      {
        "index": 4912,
        "text": "",
        "depth": 0,
        "detailId": "line-4912"
      },
      {
        "index": 4923,
        "text": "",
        "depth": 0,
        "detailId": "line-4923"
      },
      {
        "index": 4928,
        "text": "",
        "depth": 0,
        "detailId": "line-4928"
      },
      {
        "index": 4938,
        "text": "",
        "depth": 0,
        "detailId": "line-4938"
      },
      {
        "index": 4945,
        "text": "",
        "depth": 0,
        "detailId": "line-4945"
      },
      {
        "index": 4950,
        "text": "",
        "depth": 0,
        "detailId": "line-4950"
      },
      {
        "index": 4960,
        "text": "",
        "depth": 0,
        "detailId": "line-4960"
      },
      {
        "index": 4973,
        "text": "",
        "depth": 0,
        "detailId": "line-4973"
      },
      {
        "index": 4986,
        "text": "",
        "depth": 0,
        "detailId": "line-4986"
      },
      {
        "index": 4991,
        "text": "",
        "depth": 0,
        "detailId": "line-4991"
      },
      {
        "index": 5001,
        "text": "",
        "depth": 0,
        "detailId": "line-5001"
      },
      {
        "index": 5008,
        "text": "",
        "depth": 0,
        "detailId": "line-5008"
      },
      {
        "index": 5012,
        "text": "",
        "depth": 0,
        "detailId": "line-5012"
      },
      {
        "index": 5020,
        "text": "",
        "depth": 0,
        "detailId": "line-5020"
      },
      {
        "index": 5025,
        "text": "",
        "depth": 0,
        "detailId": "line-5025"
      },
      {
        "index": 5039,
        "text": "",
        "depth": 0,
        "detailId": "line-5039"
      },
      {
        "index": 5043,
        "text": "",
        "depth": 0,
        "detailId": "line-5043"
      },
      {
        "index": 5049,
        "text": "",
        "depth": 0,
        "detailId": "line-5049"
      },
      {
        "index": 5063,
        "text": "",
        "depth": 0,
        "detailId": "line-5063"
      },
      {
        "index": 5071,
        "text": "",
        "depth": 0,
        "detailId": "line-5071"
      },
      {
        "index": 5078,
        "text": "",
        "depth": 0,
        "detailId": "line-5078"
      },
      {
        "index": 5082,
        "text": "",
        "depth": 0,
        "detailId": "line-5082"
      },
      {
        "index": 5092,
        "text": "",
        "depth": 0,
        "detailId": "line-5092"
      },
      {
        "index": 5099,
        "text": "",
        "depth": 0,
        "detailId": "line-5099"
      },
      {
        "index": 5103,
        "text": "",
        "depth": 0,
        "detailId": "line-5103"
      },
      {
        "index": 5107,
        "text": "",
        "depth": 0,
        "detailId": "line-5107"
      },
      {
        "index": 5118,
        "text": "",
        "depth": 0,
        "detailId": "line-5118"
      },
      {
        "index": 5128,
        "text": "",
        "depth": 0,
        "detailId": "line-5128"
      },
      {
        "index": 5186,
        "text": "",
        "depth": 0,
        "detailId": "line-5186"
      },
      {
        "index": 5202,
        "text": "",
        "depth": 0,
        "detailId": "line-5202"
      },
      {
        "index": 5205,
        "text": "",
        "depth": 0,
        "detailId": "line-5205"
      },
      {
        "index": 5211,
        "text": "",
        "depth": 0,
        "detailId": "line-5211"
      },
      {
        "index": 5242,
        "text": "",
        "depth": 0,
        "detailId": "line-5242"
      },
      {
        "index": 5245,
        "text": "",
        "depth": 0,
        "detailId": "line-5245"
      },
      {
        "index": 5251,
        "text": "",
        "depth": 0,
        "detailId": "line-5251"
      },
      {
        "index": 5261,
        "text": "",
        "depth": 0,
        "detailId": "line-5261"
      },
      {
        "index": 5275,
        "text": "",
        "depth": 0,
        "detailId": "line-5275"
      },
      {
        "index": 5284,
        "text": "",
        "depth": 0,
        "detailId": "line-5284"
      },
      {
        "index": 5293,
        "text": "",
        "depth": 0,
        "detailId": "line-5293"
      },
      {
        "index": 5298,
        "text": "",
        "depth": 0,
        "detailId": "line-5298"
      },
      {
        "index": 5306,
        "text": "",
        "depth": 0,
        "detailId": "line-5306"
      },
      {
        "index": 5314,
        "text": "",
        "depth": 0,
        "detailId": "line-5314"
      },
      {
        "index": 5319,
        "text": "",
        "depth": 0,
        "detailId": "line-5319"
      },
      {
        "index": 5337,
        "text": "",
        "depth": 0,
        "detailId": "line-5337"
      },
      {
        "index": 5342,
        "text": "",
        "depth": 0,
        "detailId": "line-5342"
      },
      {
        "index": 5346,
        "text": "",
        "depth": 0,
        "detailId": "line-5346"
      },
      {
        "index": 5353,
        "text": "",
        "depth": 0,
        "detailId": "line-5353"
      },
      {
        "index": 5356,
        "text": "",
        "depth": 0,
        "detailId": "line-5356"
      },
      {
        "index": 5359,
        "text": "",
        "depth": 0,
        "detailId": "line-5359"
      },
      {
        "index": 5362,
        "text": "",
        "depth": 0,
        "detailId": "line-5362"
      },
      {
        "index": 5371,
        "text": "",
        "depth": 0,
        "detailId": "line-5371"
      },
      {
        "index": 5374,
        "text": "",
        "depth": 0,
        "detailId": "line-5374"
      },
      {
        "index": 5378,
        "text": "",
        "depth": 0,
        "detailId": "line-5378"
      },
      {
        "index": 5382,
        "text": "",
        "depth": 0,
        "detailId": "line-5382"
      },
      {
        "index": 5388,
        "text": "",
        "depth": 0,
        "detailId": "line-5388"
      },
      {
        "index": 5395,
        "text": "",
        "depth": 0,
        "detailId": "line-5395"
      },
      {
        "index": 5401,
        "text": "",
        "depth": 0,
        "detailId": "line-5401"
      },
      {
        "index": 5406,
        "text": "",
        "depth": 0,
        "detailId": "line-5406"
      },
      {
        "index": 5410,
        "text": "",
        "depth": 0,
        "detailId": "line-5410"
      },
      {
        "index": 5423,
        "text": "",
        "depth": 0,
        "detailId": "line-5423"
      },
      {
        "index": 5432,
        "text": "",
        "depth": 0,
        "detailId": "line-5432"
      },
      {
        "index": 5436,
        "text": "",
        "depth": 0,
        "detailId": "line-5436"
      },
      {
        "index": 5448,
        "text": "",
        "depth": 0,
        "detailId": "line-5448"
      },
      {
        "index": 5455,
        "text": "",
        "depth": 0,
        "detailId": "line-5455"
      },
      {
        "index": 5463,
        "text": "",
        "depth": 0,
        "detailId": "line-5463"
      },
      {
        "index": 5468,
        "text": "",
        "depth": 0,
        "detailId": "line-5468"
      },
      {
        "index": 5477,
        "text": "",
        "depth": 0,
        "detailId": "line-5477"
      },
      {
        "index": 5484,
        "text": "",
        "depth": 0,
        "detailId": "line-5484"
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
        "index": 5499,
        "text": "",
        "depth": 0,
        "detailId": "line-5499"
      },
      {
        "index": 5504,
        "text": "",
        "depth": 0,
        "detailId": "line-5504"
      },
      {
        "index": 5516,
        "text": "",
        "depth": 0,
        "detailId": "line-5516"
      },
      {
        "index": 5520,
        "text": "",
        "depth": 0,
        "detailId": "line-5520"
      },
      {
        "index": 5562,
        "text": "",
        "depth": 0,
        "detailId": "line-5562"
      },
      {
        "index": 5573,
        "text": "",
        "depth": 0,
        "detailId": "line-5573"
      },
      {
        "index": 5580,
        "text": "",
        "depth": 0,
        "detailId": "line-5580"
      },
      {
        "index": 5583,
        "text": "",
        "depth": 0,
        "detailId": "line-5583"
      },
      {
        "index": 5588,
        "text": "",
        "depth": 0,
        "detailId": "line-5588"
      },
      {
        "index": 5592,
        "text": "",
        "depth": 0,
        "detailId": "line-5592"
      },
      {
        "index": 5596,
        "text": "",
        "depth": 0,
        "detailId": "line-5596"
      },
      {
        "index": 5603,
        "text": "",
        "depth": 0,
        "detailId": "line-5603"
      },
      {
        "index": 5609,
        "text": "",
        "depth": 0,
        "detailId": "line-5609"
      },
      {
        "index": 5613,
        "text": "",
        "depth": 0,
        "detailId": "line-5613"
      },
      {
        "index": 5619,
        "text": "",
        "depth": 0,
        "detailId": "line-5619"
      },
      {
        "index": 5623,
        "text": "",
        "depth": 0,
        "detailId": "line-5623"
      },
      {
        "index": 5633,
        "text": "",
        "depth": 0,
        "detailId": "line-5633"
      },
      {
        "index": 5641,
        "text": "",
        "depth": 0,
        "detailId": "line-5641"
      },
      {
        "index": 5645,
        "text": "",
        "depth": 0,
        "detailId": "line-5645"
      },
      {
        "index": 5650,
        "text": "",
        "depth": 0,
        "detailId": "line-5650"
      },
      {
        "index": 5659,
        "text": "",
        "depth": 0,
        "detailId": "line-5659"
      },
      {
        "index": 5663,
        "text": "",
        "depth": 0,
        "detailId": "line-5663"
      },
      {
        "index": 5672,
        "text": "",
        "depth": 0,
        "detailId": "line-5672"
      },
      {
        "index": 5678,
        "text": "",
        "depth": 0,
        "detailId": "line-5678"
      },
      {
        "index": 5687,
        "text": "",
        "depth": 0,
        "detailId": "line-5687"
      },
      {
        "index": 5693,
        "text": "",
        "depth": 0,
        "detailId": "line-5693"
      },
      {
        "index": 5697,
        "text": "",
        "depth": 0,
        "detailId": "line-5697"
      },
      {
        "index": 5710,
        "text": "",
        "depth": 0,
        "detailId": "line-5710"
      },
      {
        "index": 5733,
        "text": "",
        "depth": 0,
        "detailId": "line-5733"
      },
      {
        "index": 5745,
        "text": "",
        "depth": 0,
        "detailId": "line-5745"
      },
      {
        "index": 5750,
        "text": "",
        "depth": 0,
        "detailId": "line-5750"
      },
      {
        "index": 5758,
        "text": "",
        "depth": 0,
        "detailId": "line-5758"
      },
      {
        "index": 5766,
        "text": "",
        "depth": 0,
        "detailId": "line-5766"
      },
      {
        "index": 5770,
        "text": "",
        "depth": 0,
        "detailId": "line-5770"
      },
      {
        "index": 5778,
        "text": "",
        "depth": 0,
        "detailId": "line-5778"
      },
      {
        "index": 5784,
        "text": "",
        "depth": 0,
        "detailId": "line-5784"
      },
      {
        "index": 5799,
        "text": "",
        "depth": 0,
        "detailId": "line-5799"
      },
      {
        "index": 5805,
        "text": "",
        "depth": 0,
        "detailId": "line-5805"
      },
      {
        "index": 5816,
        "text": "",
        "depth": 0,
        "detailId": "line-5816"
      },
      {
        "index": 5823,
        "text": "",
        "depth": 0,
        "detailId": "line-5823"
      },
      {
        "index": 5827,
        "text": "",
        "depth": 0,
        "detailId": "line-5827"
      },
      {
        "index": 5838,
        "text": "",
        "depth": 0,
        "detailId": "line-5838"
      },
      {
        "index": 5846,
        "text": "",
        "depth": 0,
        "detailId": "line-5846"
      },
      {
        "index": 5850,
        "text": "",
        "depth": 0,
        "detailId": "line-5850"
      },
      {
        "index": 5860,
        "text": "",
        "depth": 0,
        "detailId": "line-5860"
      },
      {
        "index": 5868,
        "text": "",
        "depth": 0,
        "detailId": "line-5868"
      },
      {
        "index": 5872,
        "text": "",
        "depth": 0,
        "detailId": "line-5872"
      },
      {
        "index": 5876,
        "text": "",
        "depth": 0,
        "detailId": "line-5876"
      },
      {
        "index": 5922,
        "text": "",
        "depth": 0,
        "detailId": "line-5922"
      },
      {
        "index": 5926,
        "text": "",
        "depth": 0,
        "detailId": "line-5926"
      },
      {
        "index": 5936,
        "text": "",
        "depth": 0,
        "detailId": "line-5936"
      },
      {
        "index": 5955,
        "text": "",
        "depth": 0,
        "detailId": "line-5955"
      },
      {
        "index": 5964,
        "text": "",
        "depth": 0,
        "detailId": "line-5964"
      },
      {
        "index": 5983,
        "text": "",
        "depth": 0,
        "detailId": "line-5983"
      },
      {
        "index": 5998,
        "text": "",
        "depth": 0,
        "detailId": "line-5998"
      },
      {
        "index": 6004,
        "text": "",
        "depth": 0,
        "detailId": "line-6004"
      },
      {
        "index": 6015,
        "text": "",
        "depth": 0,
        "detailId": "line-6015"
      },
      {
        "index": 6022,
        "text": "",
        "depth": 0,
        "detailId": "line-6022"
      },
      {
        "index": 6026,
        "text": "",
        "depth": 0,
        "detailId": "line-6026"
      },
      {
        "index": 6033,
        "text": "",
        "depth": 0,
        "detailId": "line-6033"
      },
      {
        "index": 6040,
        "text": "",
        "depth": 0,
        "detailId": "line-6040"
      },
      {
        "index": 6050,
        "text": "",
        "depth": 0,
        "detailId": "line-6050"
      },
      {
        "index": 6060,
        "text": "",
        "depth": 0,
        "detailId": "line-6060"
      },
      {
        "index": 6064,
        "text": "",
        "depth": 0,
        "detailId": "line-6064"
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
        "index": 6076,
        "text": "",
        "depth": 0,
        "detailId": "line-6076"
      },
      {
        "index": 6079,
        "text": "",
        "depth": 0,
        "detailId": "line-6079"
      },
      {
        "index": 6087,
        "text": "",
        "depth": 0,
        "detailId": "line-6087"
      },
      {
        "index": 6092,
        "text": "",
        "depth": 0,
        "detailId": "line-6092"
      },
      {
        "index": 6099,
        "text": "",
        "depth": 0,
        "detailId": "line-6099"
      },
      {
        "index": 6104,
        "text": "",
        "depth": 0,
        "detailId": "line-6104"
      },
      {
        "index": 6108,
        "text": "",
        "depth": 0,
        "detailId": "line-6108"
      },
      {
        "index": 6113,
        "text": "",
        "depth": 0,
        "detailId": "line-6113"
      },
      {
        "index": 6124,
        "text": "",
        "depth": 0,
        "detailId": "line-6124"
      },
      {
        "index": 6128,
        "text": "",
        "depth": 0,
        "detailId": "line-6128"
      },
      {
        "index": 6135,
        "text": "",
        "depth": 0,
        "detailId": "line-6135"
      },
      {
        "index": 6146,
        "text": "",
        "depth": 0,
        "detailId": "line-6146"
      },
      {
        "index": 6150,
        "text": "",
        "depth": 0,
        "detailId": "line-6150"
      },
      {
        "index": 6155,
        "text": "",
        "depth": 0,
        "detailId": "line-6155"
      },
      {
        "index": 6159,
        "text": "",
        "depth": 0,
        "detailId": "line-6159"
      },
      {
        "index": 6163,
        "text": "",
        "depth": 0,
        "detailId": "line-6163"
      },
      {
        "index": 6167,
        "text": "",
        "depth": 0,
        "detailId": "line-6167"
      },
      {
        "index": 6172,
        "text": "",
        "depth": 0,
        "detailId": "line-6172"
      },
      {
        "index": 6176,
        "text": "",
        "depth": 0,
        "detailId": "line-6176"
      },
      {
        "index": 6180,
        "text": "",
        "depth": 0,
        "detailId": "line-6180"
      },
      {
        "index": 6194,
        "text": "",
        "depth": 0,
        "detailId": "line-6194"
      },
      {
        "index": 6207,
        "text": "",
        "depth": 0,
        "detailId": "line-6207"
      },
      {
        "index": 6212,
        "text": "",
        "depth": 0,
        "detailId": "line-6212"
      },
      {
        "index": 6222,
        "text": "",
        "depth": 0,
        "detailId": "line-6222"
      },
      {
        "index": 6226,
        "text": "",
        "depth": 0,
        "detailId": "line-6226"
      },
      {
        "index": 6231,
        "text": "",
        "depth": 0,
        "detailId": "line-6231"
      },
      {
        "index": 6241,
        "text": "",
        "depth": 0,
        "detailId": "line-6241"
      },
      {
        "index": 6245,
        "text": "",
        "depth": 0,
        "detailId": "line-6245"
      },
      {
        "index": 6256,
        "text": "",
        "depth": 0,
        "detailId": "line-6256"
      },
      {
        "index": 6260,
        "text": "",
        "depth": 0,
        "detailId": "line-6260"
      },
      {
        "index": 6270,
        "text": "",
        "depth": 0,
        "detailId": "line-6270"
      },
      {
        "index": 6278,
        "text": "",
        "depth": 0,
        "detailId": "line-6278"
      },
      {
        "index": 6283,
        "text": "",
        "depth": 0,
        "detailId": "line-6283"
      },
      {
        "index": 6287,
        "text": "",
        "depth": 0,
        "detailId": "line-6287"
      },
      {
        "index": 6291,
        "text": "",
        "depth": 0,
        "detailId": "line-6291"
      },
      {
        "index": 6292,
        "text": "      # Specifies the duration in seconds relative to the startTime that the job",
        "description": "Specifies the duration in seconds relative to the startTime that the job",
        "depth": 3,
        "path": "spec.overrides.profilingJob.activeDeadlineSeconds",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-activedeadlineseconds"
      },
      {
        "index": 6293,
        "text": "      # may be continuously active before the system tries to terminate it;",
        "description": "may be continuously active before the system tries to terminate it;",
        "depth": 3,
        "path": "spec.overrides.profilingJob.activeDeadlineSeconds",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-activedeadlineseconds"
      },
      {
        "index": 6294,
        "text": "      # value must be positive integer. If a Job is suspended (at creation or",
        "description": "value must be positive integer. If a Job is suspended (at creation or",
        "depth": 3,
        "path": "spec.overrides.profilingJob.activeDeadlineSeconds",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-activedeadlineseconds"
      },
      {
        "index": 6295,
        "text": "      # through an update), this timer will effectively be stopped and reset",
        "description": "through an update), this timer will effectively be stopped and reset",
        "depth": 3,
        "path": "spec.overrides.profilingJob.activeDeadlineSeconds",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-activedeadlineseconds"
      },
      {
        "index": 6296,
        "text": "      # when the Job is resumed again.",
        "description": "when the Job is resumed again.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.activeDeadlineSeconds",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-activedeadlineseconds"
      },
      {
        "index": 6297,
        "text": "      # activeDeadlineSeconds: <int64>",
        "description": "Specifies the duration in seconds relative to the startTime that the job\nmay be continuously active before the system tries to terminate it; value\nmust be positive integer. If a Job is suspended (at creation or through an\nupdate), this timer will effectively be stopped and reset when the Job is\nresumed again.",
        "depth": 3,
        "field": "activeDeadlineSeconds",
        "path": "spec.overrides.profilingJob.activeDeadlineSeconds",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-activedeadlineseconds"
      },
      {
        "index": 6298,
        "text": "",
        "depth": 0,
        "detailId": "line-6298"
      },
      {
        "index": 6299,
        "text": "      # Specifies the number of retries before marking this job failed. Defaults",
        "description": "Specifies the number of retries before marking this job failed. Defaults",
        "depth": 3,
        "path": "spec.overrides.profilingJob.backoffLimit",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-backofflimit"
      },
      {
        "index": 6300,
        "text": "      # to 6, unless backoffLimitPerIndex (only Indexed Job) is specified. When",
        "description": "to 6, unless backoffLimitPerIndex (only Indexed Job) is specified. When",
        "depth": 3,
        "path": "spec.overrides.profilingJob.backoffLimit",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-backofflimit"
      },
      {
        "index": 6301,
        "text": "      # backoffLimitPerIndex is specified, backoffLimit defaults to 2147483647.",
        "description": "backoffLimitPerIndex is specified, backoffLimit defaults to 2147483647.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.backoffLimit",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-backofflimit"
      },
      {
        "index": 6302,
        "text": "      # backoffLimit: <int32>",
        "description": "Specifies the number of retries before marking this job failed.\nDefaults to 6, unless backoffLimitPerIndex (only Indexed Job) is specified.\nWhen backoffLimitPerIndex is specified, backoffLimit defaults to 2147483647.",
        "depth": 3,
        "field": "backoffLimit",
        "path": "spec.overrides.profilingJob.backoffLimit",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-backofflimit"
      },
      {
        "index": 6303,
        "text": "",
        "depth": 0,
        "detailId": "line-6303"
      },
      {
        "index": 6304,
        "text": "      # Specifies the limit for the number of retries within an index before",
        "description": "Specifies the limit for the number of retries within an index before",
        "depth": 3,
        "path": "spec.overrides.profilingJob.backoffLimitPerIndex",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-backofflimitperindex"
      },
      {
        "index": 6305,
        "text": "      # marking this index as failed. When enabled the number of failures per",
        "description": "marking this index as failed. When enabled the number of failures per",
        "depth": 3,
        "path": "spec.overrides.profilingJob.backoffLimitPerIndex",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-backofflimitperindex"
      },
      {
        "index": 6306,
        "text": "      # index is kept in the pod's batch.kubernetes.io/job-index-failure-count",
        "description": "index is kept in the pod's batch.kubernetes.io/job-index-failure-count",
        "depth": 3,
        "path": "spec.overrides.profilingJob.backoffLimitPerIndex",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-backofflimitperindex"
      },
      {
        "index": 6307,
        "text": "      # annotation. It can only be set when Job's completionMode=Indexed, and",
        "description": "annotation. It can only be set when Job's completionMode=Indexed, and",
        "depth": 3,
        "path": "spec.overrides.profilingJob.backoffLimitPerIndex",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-backofflimitperindex"
      },
      {
        "index": 6308,
        "text": "      # the Pod's restart policy is Never. The field is immutable.",
        "description": "the Pod's restart policy is Never. The field is immutable.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.backoffLimitPerIndex",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-backofflimitperindex"
      },
      {
        "index": 6309,
        "text": "      # backoffLimitPerIndex: <int32>",
        "description": "Specifies the limit for the number of retries within an\nindex before marking this index as failed. When enabled the number of\nfailures per index is kept in the pod's\nbatch.kubernetes.io/job-index-failure-count annotation. It can only\nbe set when Job's completionMode=Indexed, and the Pod's restart\npolicy is Never. The field is immutable.",
        "depth": 3,
        "field": "backoffLimitPerIndex",
        "path": "spec.overrides.profilingJob.backoffLimitPerIndex",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-backofflimitperindex"
      },
      {
        "index": 6310,
        "text": "",
        "depth": 0,
        "detailId": "line-6310"
      },
      {
        "index": 6311,
        "text": "      # completionMode specifies how Pod completions are tracked. It can be",
        "description": "completionMode specifies how Pod completions are tracked. It can be",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6312,
        "text": "      # `NonIndexed` (default) or `Indexed`.",
        "description": "`NonIndexed` (default) or `Indexed`.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6313,
        "text": "      #",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6314,
        "text": "      # `NonIndexed` means that the Job is considered complete when there have",
        "description": "`NonIndexed` means that the Job is considered complete when there have",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6315,
        "text": "      # been .spec.completions successfully completed Pods. Each Pod completion",
        "description": "been .spec.completions successfully completed Pods. Each Pod completion",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6316,
        "text": "      # is homologous to each other.",
        "description": "is homologous to each other.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6317,
        "text": "      #",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6318,
        "text": "      # `Indexed` means that the Pods of a Job get an associated completion",
        "description": "`Indexed` means that the Pods of a Job get an associated completion",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6319,
        "text": "      # index from 0 to (.spec.completions - 1), available in the annotation",
        "description": "index from 0 to (.spec.completions - 1), available in the annotation",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6320,
        "text": "      # batch.kubernetes.io/job-completion-index. The Job is considered complete",
        "description": "batch.kubernetes.io/job-completion-index. The Job is considered complete",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6321,
        "text": "      # when there is one successfully completed Pod for each index. When value",
        "description": "when there is one successfully completed Pod for each index. When value",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6322,
        "text": "      # is `Indexed`, .spec.completions must be specified and",
        "description": "is `Indexed`, .spec.completions must be specified and",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6323,
        "text": "      # `.spec.parallelism` must be less than or equal to 10^5. In addition, The",
        "description": "`.spec.parallelism` must be less than or equal to 10^5. In addition, The",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6324,
        "text": "      # Pod name takes the form `$(job-name)-$(index)-$(random-string)`, the Pod",
        "description": "Pod name takes the form `$(job-name)-$(index)-$(random-string)`, the Pod",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6325,
        "text": "      # hostname takes the form `$(job-name)-$(index)`.",
        "description": "hostname takes the form `$(job-name)-$(index)`.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6326,
        "text": "      #",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6327,
        "text": "      # More completion modes can be added in the future. If the Job controller",
        "description": "More completion modes can be added in the future. If the Job controller",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6328,
        "text": "      # observes a mode that it doesn't recognize, which is possible during",
        "description": "observes a mode that it doesn't recognize, which is possible during",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6329,
        "text": "      # upgrades due to version skew, the controller skips updates for the Job.",
        "description": "upgrades due to version skew, the controller skips updates for the Job.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completionMode",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6330,
        "text": "      # completionMode: \"<string>\"",
        "description": "completionMode specifies how Pod completions are tracked. It can be\n`NonIndexed` (default) or `Indexed`.\n\n`NonIndexed` means that the Job is considered complete when there have\nbeen .spec.completions successfully completed Pods. Each Pod completion is\nhomologous to each other.\n\n`Indexed` means that the Pods of a\nJob get an associated completion index from 0 to (.spec.completions - 1),\navailable in the annotation batch.kubernetes.io/job-completion-index.\nThe Job is considered complete when there is one successfully completed Pod\nfor each index.\nWhen value is `Indexed`, .spec.completions must be specified and\n`.spec.parallelism` must be less than or equal to 10^5.\nIn addition, The Pod name takes the form\n`$(job-name)-$(index)-$(random-string)`,\nthe Pod hostname takes the form `$(job-name)-$(index)`.\n\nMore completion modes can be added in the future.\nIf the Job controller observes a mode that it doesn't recognize, which\nis possible during upgrades due to version skew, the controller\nskips updates for the Job.",
        "depth": 3,
        "field": "completionMode",
        "path": "spec.overrides.profilingJob.completionMode",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode"
      },
      {
        "index": 6331,
        "text": "",
        "depth": 0,
        "detailId": "line-6331"
      },
      {
        "index": 6332,
        "text": "      # Specifies the desired number of successfully finished pods the job",
        "description": "Specifies the desired number of successfully finished pods the job",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completions",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completions"
      },
      {
        "index": 6333,
        "text": "      # should be run with. Setting to null means that the success of any pod",
        "description": "should be run with. Setting to null means that the success of any pod",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completions",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completions"
      },
      {
        "index": 6334,
        "text": "      # signals the success of all pods, and allows parallelism to have any",
        "description": "signals the success of all pods, and allows parallelism to have any",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completions",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completions"
      },
      {
        "index": 6335,
        "text": "      # positive value. Setting to 1 means that parallelism is limited to 1 and",
        "description": "positive value. Setting to 1 means that parallelism is limited to 1 and",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completions",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completions"
      },
      {
        "index": 6336,
        "text": "      # the success of that pod signals the success of the job. More info:",
        "description": "the success of that pod signals the success of the job. More info:",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completions",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completions"
      },
      {
        "index": 6337,
        "text": "      # https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",
        "description": "https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",
        "depth": 3,
        "path": "spec.overrides.profilingJob.completions",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completions"
      },
      {
        "index": 6338,
        "text": "      # completions: <int32>",
        "description": "Specifies the desired number of successfully finished pods the\njob should be run with.  Setting to null means that the success of any\npod signals the success of all pods, and allows parallelism to have any positive\nvalue.  Setting to 1 means that parallelism is limited to 1 and the success of that\npod signals the success of the job.\nMore info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",
        "depth": 3,
        "field": "completions",
        "path": "spec.overrides.profilingJob.completions",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completions"
      },
      {
        "index": 6339,
        "text": "",
        "depth": 0,
        "detailId": "line-6339"
      },
      {
        "index": 6340,
        "text": "      # ManagedBy field indicates the controller that manages a Job. The k8s Job",
        "description": "ManagedBy field indicates the controller that manages a Job. The k8s Job",
        "depth": 3,
        "path": "spec.overrides.profilingJob.managedBy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-managedby"
      },
      {
        "index": 6341,
        "text": "      # controller reconciles jobs which don't have this field at all or the",
        "description": "controller reconciles jobs which don't have this field at all or the",
        "depth": 3,
        "path": "spec.overrides.profilingJob.managedBy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-managedby"
      },
      {
        "index": 6342,
        "text": "      # field value is the reserved string `kubernetes.io/job-controller`, but",
        "description": "field value is the reserved string `kubernetes.io/job-controller`, but",
        "depth": 3,
        "path": "spec.overrides.profilingJob.managedBy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-managedby"
      },
      {
        "index": 6343,
        "text": "      # skips reconciling Jobs with a custom value for this field. The value",
        "description": "skips reconciling Jobs with a custom value for this field. The value",
        "depth": 3,
        "path": "spec.overrides.profilingJob.managedBy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-managedby"
      },
      {
        "index": 6344,
        "text": "      # must be a valid domain-prefixed path (e.g. acme.io/foo) - all characters",
        "description": "must be a valid domain-prefixed path (e.g. acme.io/foo) - all characters",
        "depth": 3,
        "path": "spec.overrides.profilingJob.managedBy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-managedby"
      },
      {
        "index": 6345,
        "text": "      # before the first \"/\" must be a valid subdomain as defined by RFC 1123.",
        "description": "before the first \"/\" must be a valid subdomain as defined by RFC 1123.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.managedBy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-managedby"
      },
      {
        "index": 6346,
        "text": "      # All characters trailing the first \"/\" must be valid HTTP Path characters",
        "description": "All characters trailing the first \"/\" must be valid HTTP Path characters",
        "depth": 3,
        "path": "spec.overrides.profilingJob.managedBy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-managedby"
      },
      {
        "index": 6347,
        "text": "      # as defined by RFC 3986. The value cannot exceed 63 characters. This",
        "description": "as defined by RFC 3986. The value cannot exceed 63 characters. This",
        "depth": 3,
        "path": "spec.overrides.profilingJob.managedBy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-managedby"
      },
      {
        "index": 6348,
        "text": "      # field is immutable.",
        "description": "field is immutable.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.managedBy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-managedby"
      },
      {
        "index": 6349,
        "text": "      #",
        "depth": 3,
        "path": "spec.overrides.profilingJob.managedBy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-managedby"
      },
      {
        "index": 6350,
        "text": "      # This field is beta-level. The job controller accepts setting the field",
        "description": "This field is beta-level. The job controller accepts setting the field",
        "depth": 3,
        "path": "spec.overrides.profilingJob.managedBy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-managedby"
      },
      {
        "index": 6351,
        "text": "      # when the feature gate JobManagedBy is enabled (enabled by default).",
        "description": "when the feature gate JobManagedBy is enabled (enabled by default).",
        "depth": 3,
        "path": "spec.overrides.profilingJob.managedBy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-managedby"
      },
      {
        "index": 6352,
        "text": "      # managedBy: \"<string>\"",
        "description": "ManagedBy field indicates the controller that manages a Job. The k8s Job\ncontroller reconciles jobs which don't have this field at all or the field\nvalue is the reserved string `kubernetes.io/job-controller`, but skips\nreconciling Jobs with a custom value for this field.\nThe value must be a valid domain-prefixed path (e.g. acme.io/foo) -\nall characters before the first \"/\" must be a valid subdomain as defined\nby RFC 1123. All characters trailing the first \"/\" must be valid HTTP Path\ncharacters as defined by RFC 3986. The value cannot exceed 63 characters.\nThis field is immutable.\n\nThis field is beta-level. The job controller accepts setting the field\nwhen the feature gate JobManagedBy is enabled (enabled by default).",
        "depth": 3,
        "field": "managedBy",
        "path": "spec.overrides.profilingJob.managedBy",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-managedby"
      },
      {
        "index": 6353,
        "text": "",
        "depth": 0,
        "detailId": "line-6353"
      },
      {
        "index": 6354,
        "text": "      # manualSelector controls generation of pod labels and pod selectors.",
        "description": "manualSelector controls generation of pod labels and pod selectors.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.manualSelector",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-manualselector"
      },
      {
        "index": 6355,
        "text": "      # Leave `manualSelector` unset unless you are certain what you are doing.",
        "description": "Leave `manualSelector` unset unless you are certain what you are doing.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.manualSelector",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-manualselector"
      },
      {
        "index": 6356,
        "text": "      # When false or unset, the system pick labels unique to this job and",
        "description": "When false or unset, the system pick labels unique to this job and",
        "depth": 3,
        "path": "spec.overrides.profilingJob.manualSelector",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-manualselector"
      },
      {
        "index": 6357,
        "text": "      # appends those labels to the pod template. When true, the user is",
        "description": "appends those labels to the pod template. When true, the user is",
        "depth": 3,
        "path": "spec.overrides.profilingJob.manualSelector",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-manualselector"
      },
      {
        "index": 6358,
        "text": "      # responsible for picking unique labels and specifying the selector.",
        "description": "responsible for picking unique labels and specifying the selector.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.manualSelector",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-manualselector"
      },
      {
        "index": 6359,
        "text": "      # Failure to pick a unique label may cause this and other jobs to not",
        "description": "Failure to pick a unique label may cause this and other jobs to not",
        "depth": 3,
        "path": "spec.overrides.profilingJob.manualSelector",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-manualselector"
      },
      {
        "index": 6360,
        "text": "      # function correctly. However, You may see `manualSelector=true` in jobs",
        "description": "function correctly. However, You may see `manualSelector=true` in jobs",
        "depth": 3,
        "path": "spec.overrides.profilingJob.manualSelector",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-manualselector"
      },
      {
        "index": 6361,
        "text": "      # that were created with the old `extensions/v1beta1` API. More info:",
        "description": "that were created with the old `extensions/v1beta1` API. More info:",
        "depth": 3,
        "path": "spec.overrides.profilingJob.manualSelector",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-manualselector"
      },
      {
        "index": 6362,
        "text": "      # https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector",
        "description": "https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector",
        "depth": 3,
        "path": "spec.overrides.profilingJob.manualSelector",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-manualselector"
      },
      {
        "index": 6363,
        "text": "      # manualSelector: <boolean>",
        "description": "manualSelector controls generation of pod labels and pod selectors.\nLeave `manualSelector` unset unless you are certain what you are doing.\nWhen false or unset, the system pick labels unique to this job\nand appends those labels to the pod template.  When true,\nthe user is responsible for picking unique labels and specifying\nthe selector.  Failure to pick a unique label may cause this\nand other jobs to not function correctly.  However, You may see\n`manualSelector=true` in jobs that were created with the old `extensions/v1beta1`\nAPI.\nMore info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector",
        "depth": 3,
        "field": "manualSelector",
        "path": "spec.overrides.profilingJob.manualSelector",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-manualselector"
      },
      {
        "index": 6364,
        "text": "",
        "depth": 0,
        "detailId": "line-6364"
      },
      {
        "index": 6365,
        "text": "      # Specifies the maximal number of failed indexes before marking the Job as",
        "description": "Specifies the maximal number of failed indexes before marking the Job as",
        "depth": 3,
        "path": "spec.overrides.profilingJob.maxFailedIndexes",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-maxfailedindexes"
      },
      {
        "index": 6366,
        "text": "      # failed, when backoffLimitPerIndex is set. Once the number of failed",
        "description": "failed, when backoffLimitPerIndex is set. Once the number of failed",
        "depth": 3,
        "path": "spec.overrides.profilingJob.maxFailedIndexes",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-maxfailedindexes"
      },
      {
        "index": 6367,
        "text": "      # indexes exceeds this number the entire Job is marked as Failed and its",
        "description": "indexes exceeds this number the entire Job is marked as Failed and its",
        "depth": 3,
        "path": "spec.overrides.profilingJob.maxFailedIndexes",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-maxfailedindexes"
      },
      {
        "index": 6368,
        "text": "      # execution is terminated. When left as null the job continues execution",
        "description": "execution is terminated. When left as null the job continues execution",
        "depth": 3,
        "path": "spec.overrides.profilingJob.maxFailedIndexes",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-maxfailedindexes"
      },
      {
        "index": 6369,
        "text": "      # of all of its indexes and is marked with the `Complete` Job condition.",
        "description": "of all of its indexes and is marked with the `Complete` Job condition.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.maxFailedIndexes",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-maxfailedindexes"
      },
      {
        "index": 6370,
        "text": "      # It can only be specified when backoffLimitPerIndex is set. It can be",
        "description": "It can only be specified when backoffLimitPerIndex is set. It can be",
        "depth": 3,
        "path": "spec.overrides.profilingJob.maxFailedIndexes",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-maxfailedindexes"
      },
      {
        "index": 6371,
        "text": "      # null or up to completions. It is required and must be less than or equal",
        "description": "null or up to completions. It is required and must be less than or equal",
        "depth": 3,
        "path": "spec.overrides.profilingJob.maxFailedIndexes",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-maxfailedindexes"
      },
      {
        "index": 6372,
        "text": "      # to 10^4 when is completions greater than 10^5.",
        "description": "to 10^4 when is completions greater than 10^5.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.maxFailedIndexes",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-maxfailedindexes"
      },
      {
        "index": 6373,
        "text": "      # maxFailedIndexes: <int32>",
        "description": "Specifies the maximal number of failed indexes before marking the Job as\nfailed, when backoffLimitPerIndex is set. Once the number of failed\nindexes exceeds this number the entire Job is marked as Failed and its\nexecution is terminated. When left as null the job continues execution of\nall of its indexes and is marked with the `Complete` Job condition.\nIt can only be specified when backoffLimitPerIndex is set.\nIt can be null or up to completions. It is required and must be\nless than or equal to 10^4 when is completions greater than 10^5.",
        "depth": 3,
        "field": "maxFailedIndexes",
        "path": "spec.overrides.profilingJob.maxFailedIndexes",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-maxfailedindexes"
      },
      {
        "index": 6374,
        "text": "",
        "depth": 0,
        "detailId": "line-6374"
      },
      {
        "index": 6375,
        "text": "      # Specifies the maximum desired number of pods the job should run at any",
        "description": "Specifies the maximum desired number of pods the job should run at any",
        "depth": 3,
        "path": "spec.overrides.profilingJob.parallelism",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-parallelism"
      },
      {
        "index": 6376,
        "text": "      # given time. The actual number of pods running in steady state will be",
        "description": "given time. The actual number of pods running in steady state will be",
        "depth": 3,
        "path": "spec.overrides.profilingJob.parallelism",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-parallelism"
      },
      {
        "index": 6377,
        "text": "      # less than this number when ((.spec.completions - .status.successful) <",
        "description": "less than this number when ((.spec.completions - .status.successful) <",
        "depth": 3,
        "path": "spec.overrides.profilingJob.parallelism",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-parallelism"
      },
      {
        "index": 6378,
        "text": "      # .spec.parallelism), i.e. when the work left to do is less than max",
        "description": ".spec.parallelism), i.e. when the work left to do is less than max",
        "depth": 3,
        "path": "spec.overrides.profilingJob.parallelism",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-parallelism"
      },
      {
        "index": 6379,
        "text": "      # parallelism. More info:",
        "description": "parallelism. More info:",
        "depth": 3,
        "path": "spec.overrides.profilingJob.parallelism",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-parallelism"
      },
      {
        "index": 6380,
        "text": "      # https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",
        "description": "https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",
        "depth": 3,
        "path": "spec.overrides.profilingJob.parallelism",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-parallelism"
      },
      {
        "index": 6381,
        "text": "      # parallelism: <int32>",
        "description": "Specifies the maximum desired number of pods the job should\nrun at any given time. The actual number of pods running in steady state will\nbe less than this number when ((.spec.completions - .status.successful) < .spec.parallelism),\ni.e. when the work left to do is less than max parallelism.\nMore info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",
        "depth": 3,
        "field": "parallelism",
        "path": "spec.overrides.profilingJob.parallelism",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-parallelism"
      },
      {
        "index": 6382,
        "text": "",
        "depth": 0,
        "detailId": "line-6382"
      },
      {
        "index": 6383,
        "text": "      # Specifies the policy of handling failed pods. In particular, it allows",
        "description": "Specifies the policy of handling failed pods. In particular, it allows",
        "depth": 3,
        "path": "spec.overrides.profilingJob.podFailurePolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podfailurepolicy"
      },
      {
        "index": 6384,
        "text": "      # to specify the set of actions and conditions which need to be satisfied",
        "description": "to specify the set of actions and conditions which need to be satisfied",
        "depth": 3,
        "path": "spec.overrides.profilingJob.podFailurePolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podfailurepolicy"
      },
      {
        "index": 6385,
        "text": "      # to take the associated action. If empty, the default behaviour applies -",
        "description": "to take the associated action. If empty, the default behaviour applies -",
        "depth": 3,
        "path": "spec.overrides.profilingJob.podFailurePolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podfailurepolicy"
      },
      {
        "index": 6386,
        "text": "      # the counter of failed pods, represented by the jobs's .status.failed",
        "description": "the counter of failed pods, represented by the jobs's .status.failed",
        "depth": 3,
        "path": "spec.overrides.profilingJob.podFailurePolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podfailurepolicy"
      },
      {
        "index": 6387,
        "text": "      # field, is incremented and it is checked against the backoffLimit. This",
        "description": "field, is incremented and it is checked against the backoffLimit. This",
        "depth": 3,
        "path": "spec.overrides.profilingJob.podFailurePolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podfailurepolicy"
      },
      {
        "index": 6388,
        "text": "      # field cannot be used in combination with restartPolicy=OnFailure.",
        "description": "field cannot be used in combination with restartPolicy=OnFailure.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.podFailurePolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podfailurepolicy"
      },
      {
        "index": 6389,
        "text": "      podFailurePolicy: # optional",
        "description": "Specifies the policy of handling failed pods. In particular, it allows to\nspecify the set of actions and conditions which need to be\nsatisfied to take the associated action.\nIf empty, the default behaviour applies - the counter of failed pods,\nrepresented by the jobs's .status.failed field, is incremented and it is\nchecked against the backoffLimit. This field cannot be used in combination\nwith restartPolicy=OnFailure.",
        "depth": 3,
        "field": "podFailurePolicy",
        "path": "spec.overrides.profilingJob.podFailurePolicy",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podfailurepolicy"
      },
      {
        "index": 6409,
        "text": "",
        "depth": 0,
        "detailId": "line-6409"
      },
      {
        "index": 6427,
        "text": "",
        "depth": 0,
        "detailId": "line-6427"
      },
      {
        "index": 6436,
        "text": "",
        "depth": 0,
        "detailId": "line-6436"
      },
      {
        "index": 6442,
        "text": "",
        "depth": 0,
        "detailId": "line-6442"
      },
      {
        "index": 6452,
        "text": "",
        "depth": 0,
        "detailId": "line-6452"
      },
      {
        "index": 6457,
        "text": "",
        "depth": 0,
        "detailId": "line-6457"
      },
      {
        "index": 6458,
        "text": "      # podReplacementPolicy specifies when to create replacement Pods. Possible",
        "description": "podReplacementPolicy specifies when to create replacement Pods. Possible",
        "depth": 3,
        "path": "spec.overrides.profilingJob.podReplacementPolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podreplacementpolicy"
      },
      {
        "index": 6459,
        "text": "      # values are: - TerminatingOrFailed means that we recreate pods when they",
        "description": "values are: - TerminatingOrFailed means that we recreate pods when they",
        "depth": 3,
        "path": "spec.overrides.profilingJob.podReplacementPolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podreplacementpolicy"
      },
      {
        "index": 6460,
        "text": "      # are terminating (has a metadata.deletionTimestamp) or failed. - Failed",
        "description": "are terminating (has a metadata.deletionTimestamp) or failed. - Failed",
        "depth": 3,
        "path": "spec.overrides.profilingJob.podReplacementPolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podreplacementpolicy"
      },
      {
        "index": 6461,
        "text": "      # means to wait until a previously created Pod is fully terminated (has",
        "description": "means to wait until a previously created Pod is fully terminated (has",
        "depth": 3,
        "path": "spec.overrides.profilingJob.podReplacementPolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podreplacementpolicy"
      },
      {
        "index": 6462,
        "text": "      # phase Failed or Succeeded) before creating a replacement Pod.",
        "description": "phase Failed or Succeeded) before creating a replacement Pod.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.podReplacementPolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podreplacementpolicy"
      },
      {
        "index": 6463,
        "text": "      #",
        "depth": 3,
        "path": "spec.overrides.profilingJob.podReplacementPolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podreplacementpolicy"
      },
      {
        "index": 6464,
        "text": "      # When using podFailurePolicy, Failed is the the only allowed value.",
        "description": "When using podFailurePolicy, Failed is the the only allowed value.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.podReplacementPolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podreplacementpolicy"
      },
      {
        "index": 6465,
        "text": "      # TerminatingOrFailed and Failed are allowed values when podFailurePolicy",
        "description": "TerminatingOrFailed and Failed are allowed values when podFailurePolicy",
        "depth": 3,
        "path": "spec.overrides.profilingJob.podReplacementPolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podreplacementpolicy"
      },
      {
        "index": 6466,
        "text": "      # is not in use.",
        "description": "is not in use.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.podReplacementPolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podreplacementpolicy"
      },
      {
        "index": 6467,
        "text": "      # podReplacementPolicy: \"<string>\"",
        "description": "podReplacementPolicy specifies when to create replacement Pods.\nPossible values are:\n- TerminatingOrFailed means that we recreate pods\n  when they are terminating (has a metadata.deletionTimestamp) or failed.\n- Failed means to wait until a previously created Pod is fully terminated (has phase\n  Failed or Succeeded) before creating a replacement Pod.\n\nWhen using podFailurePolicy, Failed is the the only allowed value.\nTerminatingOrFailed and Failed are allowed values when podFailurePolicy is not in use.",
        "depth": 3,
        "field": "podReplacementPolicy",
        "path": "spec.overrides.profilingJob.podReplacementPolicy",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podreplacementpolicy"
      },
      {
        "index": 6468,
        "text": "",
        "depth": 0,
        "detailId": "line-6468"
      },
      {
        "index": 6469,
        "text": "      # A label query over pods that should match the pod count. Normally, the",
        "description": "A label query over pods that should match the pod count. Normally, the",
        "depth": 3,
        "path": "spec.overrides.profilingJob.selector",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-selector"
      },
      {
        "index": 6470,
        "text": "      # system sets this field for you. More info:",
        "description": "system sets this field for you. More info:",
        "depth": 3,
        "path": "spec.overrides.profilingJob.selector",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-selector"
      },
      {
        "index": 6471,
        "text": "      # https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors",
        "description": "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors",
        "depth": 3,
        "path": "spec.overrides.profilingJob.selector",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-selector"
      },
      {
        "index": 6472,
        "text": "      selector: # optional, mapType: atomic",
        "description": "A label query over pods that should match the pod count.\nNormally, the system sets this field for you.\nMore info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors",
        "depth": 3,
        "field": "selector",
        "path": "spec.overrides.profilingJob.selector",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-selector"
      },
      {
        "index": 6478,
        "text": "",
        "depth": 0,
        "detailId": "line-6478"
      },
      {
        "index": 6482,
        "text": "",
        "depth": 0,
        "detailId": "line-6482"
      },
      {
        "index": 6489,
        "text": "",
        "depth": 0,
        "detailId": "line-6489"
      },
      {
        "index": 6496,
        "text": "",
        "depth": 0,
        "detailId": "line-6496"
      },
      {
        "index": 6497,
        "text": "      # successPolicy specifies the policy when the Job can be declared as",
        "description": "successPolicy specifies the policy when the Job can be declared as",
        "depth": 3,
        "path": "spec.overrides.profilingJob.successPolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-successpolicy"
      },
      {
        "index": 6498,
        "text": "      # succeeded. If empty, the default behavior applies - the Job is declared",
        "description": "succeeded. If empty, the default behavior applies - the Job is declared",
        "depth": 3,
        "path": "spec.overrides.profilingJob.successPolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-successpolicy"
      },
      {
        "index": 6499,
        "text": "      # as succeeded only when the number of succeeded pods equals to the",
        "description": "as succeeded only when the number of succeeded pods equals to the",
        "depth": 3,
        "path": "spec.overrides.profilingJob.successPolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-successpolicy"
      },
      {
        "index": 6500,
        "text": "      # completions. When the field is specified, it must be immutable and works",
        "description": "completions. When the field is specified, it must be immutable and works",
        "depth": 3,
        "path": "spec.overrides.profilingJob.successPolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-successpolicy"
      },
      {
        "index": 6501,
        "text": "      # only for the Indexed Jobs. Once the Job meets the SuccessPolicy, the",
        "description": "only for the Indexed Jobs. Once the Job meets the SuccessPolicy, the",
        "depth": 3,
        "path": "spec.overrides.profilingJob.successPolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-successpolicy"
      },
      {
        "index": 6502,
        "text": "      # lingering pods are terminated.",
        "description": "lingering pods are terminated.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.successPolicy",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-successpolicy"
      },
      {
        "index": 6503,
        "text": "      successPolicy: # optional",
        "description": "successPolicy specifies the policy when the Job can be declared as succeeded.\nIf empty, the default behavior applies - the Job is declared as succeeded\nonly when the number of succeeded pods equals to the completions.\nWhen the field is specified, it must be immutable and works only for the Indexed Jobs.\nOnce the Job meets the SuccessPolicy, the lingering pods are terminated.",
        "depth": 3,
        "field": "successPolicy",
        "path": "spec.overrides.profilingJob.successPolicy",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-successpolicy"
      },
      {
        "index": 6523,
        "text": "",
        "depth": 0,
        "detailId": "line-6523"
      },
      {
        "index": 6536,
        "text": "",
        "depth": 0,
        "detailId": "line-6536"
      },
      {
        "index": 6537,
        "text": "      # suspend specifies whether the Job controller should create Pods or not.",
        "description": "suspend specifies whether the Job controller should create Pods or not.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.suspend",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-suspend"
      },
      {
        "index": 6538,
        "text": "      # If a Job is created with suspend set to true, no Pods are created by the",
        "description": "If a Job is created with suspend set to true, no Pods are created by the",
        "depth": 3,
        "path": "spec.overrides.profilingJob.suspend",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-suspend"
      },
      {
        "index": 6539,
        "text": "      # Job controller. If a Job is suspended after creation (i.e. the flag goes",
        "description": "Job controller. If a Job is suspended after creation (i.e. the flag goes",
        "depth": 3,
        "path": "spec.overrides.profilingJob.suspend",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-suspend"
      },
      {
        "index": 6540,
        "text": "      # from false to true), the Job controller will delete all active Pods",
        "description": "from false to true), the Job controller will delete all active Pods",
        "depth": 3,
        "path": "spec.overrides.profilingJob.suspend",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-suspend"
      },
      {
        "index": 6541,
        "text": "      # associated with this Job. Users must design their workload to gracefully",
        "description": "associated with this Job. Users must design their workload to gracefully",
        "depth": 3,
        "path": "spec.overrides.profilingJob.suspend",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-suspend"
      },
      {
        "index": 6542,
        "text": "      # handle this. Suspending a Job will reset the StartTime field of the Job,",
        "description": "handle this. Suspending a Job will reset the StartTime field of the Job,",
        "depth": 3,
        "path": "spec.overrides.profilingJob.suspend",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-suspend"
      },
      {
        "index": 6543,
        "text": "      # effectively resetting the ActiveDeadlineSeconds timer too. Defaults to",
        "description": "effectively resetting the ActiveDeadlineSeconds timer too. Defaults to",
        "depth": 3,
        "path": "spec.overrides.profilingJob.suspend",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-suspend"
      },
      {
        "index": 6544,
        "text": "      # false.",
        "description": "false.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.suspend",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-suspend"
      },
      {
        "index": 6545,
        "text": "      # suspend: <boolean>",
        "description": "suspend specifies whether the Job controller should create Pods or not. If\na Job is created with suspend set to true, no Pods are created by the Job\ncontroller. If a Job is suspended after creation (i.e. the flag goes from\nfalse to true), the Job controller will delete all active Pods associated\nwith this Job. Users must design their workload to gracefully handle this.\nSuspending a Job will reset the StartTime field of the Job, effectively\nresetting the ActiveDeadlineSeconds timer too. Defaults to false.",
        "depth": 3,
        "field": "suspend",
        "path": "spec.overrides.profilingJob.suspend",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-suspend"
      },
      {
        "index": 6546,
        "text": "",
        "depth": 0,
        "detailId": "line-6546"
      },
      {
        "index": 6547,
        "text": "      # ttlSecondsAfterFinished limits the lifetime of a Job that has finished",
        "description": "ttlSecondsAfterFinished limits the lifetime of a Job that has finished",
        "depth": 3,
        "path": "spec.overrides.profilingJob.ttlSecondsAfterFinished",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-ttlsecondsafterfinished"
      },
      {
        "index": 6548,
        "text": "      # execution (either Complete or Failed). If this field is set,",
        "description": "execution (either Complete or Failed). If this field is set,",
        "depth": 3,
        "path": "spec.overrides.profilingJob.ttlSecondsAfterFinished",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-ttlsecondsafterfinished"
      },
      {
        "index": 6549,
        "text": "      # ttlSecondsAfterFinished after the Job finishes, it is eligible to be",
        "description": "ttlSecondsAfterFinished after the Job finishes, it is eligible to be",
        "depth": 3,
        "path": "spec.overrides.profilingJob.ttlSecondsAfterFinished",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-ttlsecondsafterfinished"
      },
      {
        "index": 6550,
        "text": "      # automatically deleted. When the Job is being deleted, its lifecycle",
        "description": "automatically deleted. When the Job is being deleted, its lifecycle",
        "depth": 3,
        "path": "spec.overrides.profilingJob.ttlSecondsAfterFinished",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-ttlsecondsafterfinished"
      },
      {
        "index": 6551,
        "text": "      # guarantees (e.g. finalizers) will be honored. If this field is unset,",
        "description": "guarantees (e.g. finalizers) will be honored. If this field is unset,",
        "depth": 3,
        "path": "spec.overrides.profilingJob.ttlSecondsAfterFinished",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-ttlsecondsafterfinished"
      },
      {
        "index": 6552,
        "text": "      # the Job won't be automatically deleted. If this field is set to zero,",
        "description": "the Job won't be automatically deleted. If this field is set to zero,",
        "depth": 3,
        "path": "spec.overrides.profilingJob.ttlSecondsAfterFinished",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-ttlsecondsafterfinished"
      },
      {
        "index": 6553,
        "text": "      # the Job becomes eligible to be deleted immediately after it finishes.",
        "description": "the Job becomes eligible to be deleted immediately after it finishes.",
        "depth": 3,
        "path": "spec.overrides.profilingJob.ttlSecondsAfterFinished",
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-ttlsecondsafterfinished"
      },
      {
        "index": 6554,
        "text": "      # ttlSecondsAfterFinished: <int32>",
        "description": "ttlSecondsAfterFinished limits the lifetime of a Job that has finished\nexecution (either Complete or Failed). If this field is set,\nttlSecondsAfterFinished after the Job finishes, it is eligible to be\nautomatically deleted. When the Job is being deleted, its lifecycle\nguarantees (e.g. finalizers) will be honored. If this field is unset,\nthe Job won't be automatically deleted. If this field is set to zero,\nthe Job becomes eligible to be deleted immediately after it finishes.",
        "depth": 3,
        "field": "ttlSecondsAfterFinished",
        "path": "spec.overrides.profilingJob.ttlSecondsAfterFinished",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-ttlsecondsafterfinished"
      },
      {
        "index": 6555,
        "text": "",
        "depth": 0,
        "detailId": "line-6555"
      },
      {
        "index": 6556,
        "text": "  # SearchStrategy controls the profiling search depth. \"rapid\" performs a fast",
        "description": "SearchStrategy controls the profiling search depth. \"rapid\" performs a fast",
        "depth": 1,
        "path": "spec.searchStrategy",
        "detailId": "field-nvidia-com-v1beta1-spec-searchstrategy"
      },
      {
        "index": 6557,
        "text": "  # sweep; \"thorough\" explores more configurations.",
        "description": "sweep; \"thorough\" explores more configurations.",
        "depth": 1,
        "path": "spec.searchStrategy",
        "detailId": "field-nvidia-com-v1beta1-spec-searchstrategy"
      },
      {
        "index": 6558,
        "text": "  # searchStrategy: \"rapid\" # default",
        "description": "SearchStrategy controls the profiling search depth.\n\"rapid\" performs a fast sweep; \"thorough\" explores more configurations.",
        "depth": 1,
        "field": "searchStrategy",
        "path": "spec.searchStrategy",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-searchstrategy"
      },
      {
        "index": 6559,
        "text": "",
        "depth": 0,
        "detailId": "line-6559"
      },
      {
        "index": 6560,
        "text": "  # SLA defines service-level agreement targets that drive profiling",
        "description": "SLA defines service-level agreement targets that drive profiling",
        "depth": 1,
        "path": "spec.sla",
        "detailId": "field-nvidia-com-v1beta1-spec-sla"
      },
      {
        "index": 6561,
        "text": "  # optimization.",
        "description": "optimization.",
        "depth": 1,
        "path": "spec.sla",
        "detailId": "field-nvidia-com-v1beta1-spec-sla"
      },
      {
        "index": 6562,
        "text": "  # sla:",
        "description": "SLA defines service-level agreement targets that drive profiling optimization.",
        "depth": 1,
        "field": "sla",
        "path": "spec.sla",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1beta1-spec-sla"
      },
      {
        "index": 6563,
        "text": "    # E2ELatency is the target end-to-end request latency in milliseconds.",
        "description": "E2ELatency is the target end-to-end request latency in milliseconds.",
        "depth": 2,
        "path": "spec.sla.e2eLatency",
        "detailId": "field-nvidia-com-v1beta1-spec-sla-e2elatency"
      },
      {
        "index": 6564,
        "text": "    # Alternative to specifying TTFT + ITL.",
        "description": "Alternative to specifying TTFT + ITL.",
        "depth": 2,
        "path": "spec.sla.e2eLatency",
        "detailId": "field-nvidia-com-v1beta1-spec-sla-e2elatency"
      },
      {
        "index": 6565,
        "text": "    # e2eLatency: <number>",
        "description": "E2ELatency is the target end-to-end request latency in milliseconds.\nAlternative to specifying TTFT + ITL.",
        "depth": 2,
        "field": "e2eLatency",
        "path": "spec.sla.e2eLatency",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-sla-e2elatency"
      },
      {
        "index": 6566,
        "text": "",
        "depth": 0,
        "detailId": "line-6566"
      },
      {
        "index": 6567,
        "text": "    # ITL is the Inter-Token Latency target in milliseconds.",
        "description": "ITL is the Inter-Token Latency target in milliseconds.",
        "depth": 2,
        "path": "spec.sla.itl",
        "detailId": "field-nvidia-com-v1beta1-spec-sla-itl"
      },
      {
        "index": 6568,
        "text": "    # itl: <number>",
        "description": "ITL is the Inter-Token Latency target in milliseconds.",
        "depth": 2,
        "field": "itl",
        "path": "spec.sla.itl",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-sla-itl"
      },
      {
        "index": 6569,
        "text": "",
        "depth": 0,
        "detailId": "line-6569"
      },
      {
        "index": 6570,
        "text": "    # OptimizationType is the optimization target for SLA profiling. Valid",
        "description": "OptimizationType is the optimization target for SLA profiling. Valid",
        "depth": 2,
        "path": "spec.sla.optimizationType",
        "detailId": "field-nvidia-com-v1beta1-spec-sla-optimizationtype"
      },
      {
        "index": 6571,
        "text": "    # values: latency, throughput.",
        "description": "values: latency, throughput.",
        "depth": 2,
        "path": "spec.sla.optimizationType",
        "detailId": "field-nvidia-com-v1beta1-spec-sla-optimizationtype"
      },
      {
        "index": 6572,
        "text": "    # optimizationType: \"latency\" # enum: \"throughput\"",
        "description": "OptimizationType is the optimization target for SLA profiling.\nValid values: latency, throughput.",
        "depth": 2,
        "field": "optimizationType",
        "path": "spec.sla.optimizationType",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-sla-optimizationtype"
      },
      {
        "index": 6573,
        "text": "",
        "depth": 0,
        "detailId": "line-6573"
      },
      {
        "index": 6574,
        "text": "    # TTFT is the Time To First Token target in milliseconds.",
        "description": "TTFT is the Time To First Token target in milliseconds.",
        "depth": 2,
        "path": "spec.sla.ttft",
        "detailId": "field-nvidia-com-v1beta1-spec-sla-ttft"
      },
      {
        "index": 6575,
        "text": "    # ttft: <number>",
        "description": "TTFT is the Time To First Token target in milliseconds.",
        "depth": 2,
        "field": "ttft",
        "path": "spec.sla.ttft",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-sla-ttft"
      },
      {
        "index": 6576,
        "text": "",
        "depth": 0,
        "detailId": "line-6576"
      },
      {
        "index": 6577,
        "text": "  # Workload defines the expected workload characteristics for SLA-based",
        "description": "Workload defines the expected workload characteristics for SLA-based",
        "depth": 1,
        "path": "spec.workload",
        "detailId": "field-nvidia-com-v1beta1-spec-workload"
      },
      {
        "index": 6578,
        "text": "  # profiling.",
        "description": "profiling.",
        "depth": 1,
        "path": "spec.workload",
        "detailId": "field-nvidia-com-v1beta1-spec-workload"
      },
      {
        "index": 6579,
        "text": "  # workload:",
        "description": "Workload defines the expected workload characteristics for SLA-based profiling.",
        "depth": 1,
        "field": "workload",
        "path": "spec.workload",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1beta1-spec-workload"
      },
      {
        "index": 6580,
        "text": "    # Concurrency is the target concurrency level. Required (or RequestRate)",
        "description": "Concurrency is the target concurrency level. Required (or RequestRate)",
        "depth": 2,
        "path": "spec.workload.concurrency",
        "detailId": "field-nvidia-com-v1beta1-spec-workload-concurrency"
      },
      {
        "index": 6581,
        "text": "    # when the planner is disabled.",
        "description": "when the planner is disabled.",
        "depth": 2,
        "path": "spec.workload.concurrency",
        "detailId": "field-nvidia-com-v1beta1-spec-workload-concurrency"
      },
      {
        "index": 6582,
        "text": "    # concurrency: <number>",
        "description": "Concurrency is the target concurrency level.\nRequired (or RequestRate) when the planner is disabled.",
        "depth": 2,
        "field": "concurrency",
        "path": "spec.workload.concurrency",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-workload-concurrency"
      },
      {
        "index": 6583,
        "text": "",
        "depth": 0,
        "detailId": "line-6583"
      },
      {
        "index": 6584,
        "text": "    # ISL is the Input Sequence Length (number of tokens).",
        "description": "ISL is the Input Sequence Length (number of tokens).",
        "depth": 2,
        "path": "spec.workload.isl",
        "detailId": "field-nvidia-com-v1beta1-spec-workload-isl"
      },
      {
        "index": 6585,
        "text": "    # isl: 4000 # default",
        "description": "ISL is the Input Sequence Length (number of tokens).",
        "depth": 2,
        "field": "isl",
        "path": "spec.workload.isl",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-workload-isl"
      },
      {
        "index": 6586,
        "text": "",
        "depth": 0,
        "detailId": "line-6586"
      },
      {
        "index": 6587,
        "text": "    # OSL is the Output Sequence Length (number of tokens).",
        "description": "OSL is the Output Sequence Length (number of tokens).",
        "depth": 2,
        "path": "spec.workload.osl",
        "detailId": "field-nvidia-com-v1beta1-spec-workload-osl"
      },
      {
        "index": 6588,
        "text": "    # osl: 1000 # default",
        "description": "OSL is the Output Sequence Length (number of tokens).",
        "depth": 2,
        "field": "osl",
        "path": "spec.workload.osl",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-workload-osl"
      },
      {
        "index": 6589,
        "text": "",
        "depth": 0,
        "detailId": "line-6589"
      },
      {
        "index": 6590,
        "text": "    # RequestRate is the target request rate (req/s). Required (or Concurrency)",
        "description": "RequestRate is the target request rate (req/s). Required (or Concurrency)",
        "depth": 2,
        "path": "spec.workload.requestRate",
        "detailId": "field-nvidia-com-v1beta1-spec-workload-requestrate"
      },
      {
        "index": 6591,
        "text": "    # when the planner is disabled.",
        "description": "when the planner is disabled.",
        "depth": 2,
        "path": "spec.workload.requestRate",
        "detailId": "field-nvidia-com-v1beta1-spec-workload-requestrate"
      },
      {
        "index": 6592,
        "text": "    # requestRate: <number>",
        "description": "RequestRate is the target request rate (req/s).\nRequired (or Concurrency) when the planner is disabled.",
        "depth": 2,
        "field": "requestRate",
        "path": "spec.workload.requestRate",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-spec-workload-requestrate"
      },
      {
        "index": 6593,
        "text": "",
        "depth": 0,
        "detailId": "line-6593"
      },
      {
        "index": 6594,
        "text": "# Status reflects the current observed state of this deployment request.",
        "description": "Status reflects the current observed state of this deployment request.",
        "depth": 0,
        "path": "status",
        "detailId": "field-nvidia-com-v1beta1-status"
      },
      {
        "index": 6595,
        "text": "status: # optional",
        "description": "Status reflects the current observed state of this deployment request.",
        "depth": 0,
        "field": "status",
        "path": "status",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1beta1-status"
      },
      {
        "index": 6596,
        "text": "  # Conditions contains the latest observed conditions of the deployment",
        "description": "Conditions contains the latest observed conditions of the deployment",
        "depth": 1,
        "path": "status.conditions",
        "detailId": "field-nvidia-com-v1beta1-status-conditions"
      },
      {
        "index": 6597,
        "text": "  # request. Standard condition types include: Succeeded, Validation, Profiling,",
        "description": "request. Standard condition types include: Succeeded, Validation, Profiling,",
        "depth": 1,
        "path": "status.conditions",
        "detailId": "field-nvidia-com-v1beta1-status-conditions"
      },
      {
        "index": 6598,
        "text": "  # SpecGenerated, DeploymentReady.",
        "description": "SpecGenerated, DeploymentReady.",
        "depth": 1,
        "path": "status.conditions",
        "detailId": "field-nvidia-com-v1beta1-status-conditions"
      },
      {
        "index": 6599,
        "text": "  conditions: # optional, listType: map, listMapKeys: type",
        "description": "Conditions contains the latest observed conditions of the deployment request.\nStandard condition types include: Succeeded, Validation, Profiling, SpecGenerated, DeploymentReady.",
        "depth": 1,
        "field": "conditions",
        "path": "status.conditions",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions"
      },
      {
        "index": 6600,
        "text": "    - # lastTransitionTime is the last time the condition transitioned from one",
        "description": "lastTransitionTime is the last time the condition transitioned from one",
        "depth": 3,
        "path": "status.conditions[].lastTransitionTime",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-lasttransitiontime"
      },
      {
        "index": 6601,
        "text": "      # status to another. This should be when the underlying condition changed.",
        "description": "status to another. This should be when the underlying condition changed.",
        "depth": 3,
        "path": "status.conditions[].lastTransitionTime",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-lasttransitiontime"
      },
      {
        "index": 6602,
        "text": "      # If that is not known, then using the time when the API field changed is",
        "description": "If that is not known, then using the time when the API field changed is",
        "depth": 3,
        "path": "status.conditions[].lastTransitionTime",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-lasttransitiontime"
      },
      {
        "index": 6603,
        "text": "      # acceptable.",
        "description": "acceptable.",
        "depth": 3,
        "path": "status.conditions[].lastTransitionTime",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-lasttransitiontime"
      },
      {
        "index": 6604,
        "text": "      lastTransitionTime: \"<string>\" # required",
        "description": "lastTransitionTime is the last time the condition transitioned from one status to another.\nThis should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.",
        "depth": 3,
        "field": "lastTransitionTime",
        "path": "status.conditions[].lastTransitionTime",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-lasttransitiontime"
      },
      {
        "index": 6605,
        "text": "",
        "depth": 0,
        "detailId": "line-6605"
      },
      {
        "index": 6606,
        "text": "      # message is a human readable message indicating details about the",
        "description": "message is a human readable message indicating details about the",
        "depth": 3,
        "path": "status.conditions[].message",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-message"
      },
      {
        "index": 6607,
        "text": "      # transition. This may be an empty string.",
        "description": "transition. This may be an empty string.",
        "depth": 3,
        "path": "status.conditions[].message",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-message"
      },
      {
        "index": 6608,
        "text": "      message: \"<string>\" # required, maxLength: 32768",
        "description": "message is a human readable message indicating details about the transition.\nThis may be an empty string.",
        "depth": 3,
        "field": "message",
        "path": "status.conditions[].message",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-message"
      },
      {
        "index": 6609,
        "text": "",
        "depth": 0,
        "detailId": "line-6609"
      },
      {
        "index": 6610,
        "text": "      # reason contains a programmatic identifier indicating the reason for the",
        "description": "reason contains a programmatic identifier indicating the reason for the",
        "depth": 3,
        "path": "status.conditions[].reason",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-reason"
      },
      {
        "index": 6611,
        "text": "      # condition's last transition. Producers of specific condition types may",
        "description": "condition's last transition. Producers of specific condition types may",
        "depth": 3,
        "path": "status.conditions[].reason",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-reason"
      },
      {
        "index": 6612,
        "text": "      # define expected values and meanings for this field, and whether the",
        "description": "define expected values and meanings for this field, and whether the",
        "depth": 3,
        "path": "status.conditions[].reason",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-reason"
      },
      {
        "index": 6613,
        "text": "      # values are considered a guaranteed API. The value should be a CamelCase",
        "description": "values are considered a guaranteed API. The value should be a CamelCase",
        "depth": 3,
        "path": "status.conditions[].reason",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-reason"
      },
      {
        "index": 6614,
        "text": "      # string. This field may not be empty.",
        "description": "string. This field may not be empty.",
        "depth": 3,
        "path": "status.conditions[].reason",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-reason"
      },
      {
        "index": 6615,
        "text": "      reason: \"<string>\" # required, minLength: 1, maxLength: 1024",
        "description": "reason contains a programmatic identifier indicating the reason for the condition's last transition.\nProducers of specific condition types may define expected values and meanings for this field,\nand whether the values are considered a guaranteed API.\nThe value should be a CamelCase string.\nThis field may not be empty.",
        "depth": 3,
        "field": "reason",
        "path": "status.conditions[].reason",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-reason"
      },
      {
        "index": 6616,
        "text": "",
        "depth": 0,
        "detailId": "line-6616"
      },
      {
        "index": 6617,
        "text": "      # status of the condition, one of True, False, Unknown.",
        "description": "status of the condition, one of True, False, Unknown.",
        "depth": 3,
        "path": "status.conditions[].status",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-status"
      },
      {
        "index": 6618,
        "text": "      status: \"True\" # required, enum: \"False\" | \"Unknown\"",
        "description": "status of the condition, one of True, False, Unknown.",
        "depth": 3,
        "field": "status",
        "path": "status.conditions[].status",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-status"
      },
      {
        "index": 6619,
        "text": "",
        "depth": 0,
        "detailId": "line-6619"
      },
      {
        "index": 6620,
        "text": "      # type of condition in CamelCase or in foo.example.com/CamelCase.",
        "description": "type of condition in CamelCase or in foo.example.com/CamelCase.",
        "depth": 3,
        "path": "status.conditions[].type",
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-type"
      },
      {
        "index": 6621,
        "text": "      type: \"<string>\" # required, maxLength: 316",
        "description": "type of condition in CamelCase or in foo.example.com/CamelCase.",
        "depth": 3,
        "field": "type",
        "path": "status.conditions[].type",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-type"
      },
      {
        "index": 6622,
        "text": "",
        "depth": 0,
        "detailId": "line-6622"
      },
      {
        "index": 6623,
        "text": "      # observedGeneration represents the .metadata.generation that the",
        "description": "observedGeneration represents the .metadata.generation that the",
        "depth": 3,
        "path": "status.conditions[].observedGeneration",
        "detailId": "field-nvidia-com-v1beta1-status-conditions-observedgeneration"
      },
      {
        "index": 6624,
        "text": "      # condition was set based upon. For instance, if .metadata.generation is",
        "description": "condition was set based upon. For instance, if .metadata.generation is",
        "depth": 3,
        "path": "status.conditions[].observedGeneration",
        "detailId": "field-nvidia-com-v1beta1-status-conditions-observedgeneration"
      },
      {
        "index": 6625,
        "text": "      # currently 12, but the .status.conditions[x].observedGeneration is 9, the",
        "description": "currently 12, but the .status.conditions[x].observedGeneration is 9, the",
        "depth": 3,
        "path": "status.conditions[].observedGeneration",
        "detailId": "field-nvidia-com-v1beta1-status-conditions-observedgeneration"
      },
      {
        "index": 6626,
        "text": "      # condition is out of date with respect to the current state of the",
        "description": "condition is out of date with respect to the current state of the",
        "depth": 3,
        "path": "status.conditions[].observedGeneration",
        "detailId": "field-nvidia-com-v1beta1-status-conditions-observedgeneration"
      },
      {
        "index": 6627,
        "text": "      # instance.",
        "description": "instance.",
        "depth": 3,
        "path": "status.conditions[].observedGeneration",
        "detailId": "field-nvidia-com-v1beta1-status-conditions-observedgeneration"
      },
      {
        "index": 6628,
        "text": "      # observedGeneration: <int64> # minimum: 0",
        "description": "observedGeneration represents the .metadata.generation that the condition was set based upon.\nFor instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date\nwith respect to the current state of the instance.",
        "depth": 3,
        "field": "observedGeneration",
        "path": "status.conditions[].observedGeneration",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-status-conditions-observedgeneration"
      },
      {
        "index": 6629,
        "text": "",
        "depth": 0,
        "detailId": "line-6629"
      },
      {
        "index": 6630,
        "text": "  # DeploymentInfo tracks the state of the deployed DynamoGraphDeployment.",
        "description": "DeploymentInfo tracks the state of the deployed DynamoGraphDeployment.",
        "depth": 1,
        "path": "status.deploymentInfo",
        "detailId": "field-nvidia-com-v1beta1-status-deploymentinfo"
      },
      {
        "index": 6631,
        "text": "  # Populated when a DGD has been created (either via autoApply or manually).",
        "description": "Populated when a DGD has been created (either via autoApply or manually).",
        "depth": 1,
        "path": "status.deploymentInfo",
        "detailId": "field-nvidia-com-v1beta1-status-deploymentinfo"
      },
      {
        "index": 6632,
        "text": "  # deploymentInfo:",
        "description": "DeploymentInfo tracks the state of the deployed DynamoGraphDeployment.\nPopulated when a DGD has been created (either via autoApply or manually).",
        "depth": 1,
        "field": "deploymentInfo",
        "path": "status.deploymentInfo",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1beta1-status-deploymentinfo"
      },
      {
        "index": 6633,
        "text": "    # AvailableReplicas is the number of replicas that are available and ready.",
        "description": "AvailableReplicas is the number of replicas that are available and ready.",
        "depth": 2,
        "path": "status.deploymentInfo.availableReplicas",
        "detailId": "field-nvidia-com-v1beta1-status-deploymentinfo-availablereplicas"
      },
      {
        "index": 6634,
        "text": "    # availableReplicas: <int32>",
        "description": "AvailableReplicas is the number of replicas that are available and ready.",
        "depth": 2,
        "field": "availableReplicas",
        "path": "status.deploymentInfo.availableReplicas",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-status-deploymentinfo-availablereplicas"
      },
      {
        "index": 6635,
        "text": "",
        "depth": 0,
        "detailId": "line-6635"
      },
      {
        "index": 6636,
        "text": "    # Replicas is the desired number of replicas.",
        "description": "Replicas is the desired number of replicas.",
        "depth": 2,
        "path": "status.deploymentInfo.replicas",
        "detailId": "field-nvidia-com-v1beta1-status-deploymentinfo-replicas"
      },
      {
        "index": 6637,
        "text": "    # replicas: <int32>",
        "description": "Replicas is the desired number of replicas.",
        "depth": 2,
        "field": "replicas",
        "path": "status.deploymentInfo.replicas",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-status-deploymentinfo-replicas"
      },
      {
        "index": 6638,
        "text": "",
        "depth": 0,
        "detailId": "line-6638"
      },
      {
        "index": 6639,
        "text": "  # DGDName is the name of the generated or created DynamoGraphDeployment.",
        "description": "DGDName is the name of the generated or created DynamoGraphDeployment.",
        "depth": 1,
        "path": "status.dgdName",
        "detailId": "field-nvidia-com-v1beta1-status-dgdname"
      },
      {
        "index": 6640,
        "text": "  # dgdName: \"<string>\"",
        "description": "DGDName is the name of the generated or created DynamoGraphDeployment.",
        "depth": 1,
        "field": "dgdName",
        "path": "status.dgdName",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-status-dgdname"
      },
      {
        "index": 6641,
        "text": "",
        "depth": 0,
        "detailId": "line-6641"
      },
      {
        "index": 6642,
        "text": "  # ObservedGeneration is the most recent generation observed by the controller.",
        "description": "ObservedGeneration is the most recent generation observed by the controller.",
        "depth": 1,
        "path": "status.observedGeneration",
        "detailId": "field-nvidia-com-v1beta1-status-observedgeneration"
      },
      {
        "index": 6643,
        "text": "  # observedGeneration: <int64>",
        "description": "ObservedGeneration is the most recent generation observed by the controller.",
        "depth": 1,
        "field": "observedGeneration",
        "path": "status.observedGeneration",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-status-observedgeneration"
      },
      {
        "index": 6644,
        "text": "",
        "depth": 0,
        "detailId": "line-6644"
      },
      {
        "index": 6645,
        "text": "  # Phase is the high-level lifecycle phase of the deployment request.",
        "description": "Phase is the high-level lifecycle phase of the deployment request.",
        "depth": 1,
        "path": "status.phase",
        "detailId": "field-nvidia-com-v1beta1-status-phase"
      },
      {
        "index": 6646,
        "text": "  # phase: \"Pending\" # enum: \"Profiling\" | \"Ready\" | \"Deploying\" | \"Deployed\" |",
        "description": "Phase is the high-level lifecycle phase of the deployment request.",
        "depth": 1,
        "field": "phase",
        "path": "status.phase",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-status-phase"
      },
      {
        "index": 6647,
        "text": "                     # \"Failed\"",
        "description": "Phase is the high-level lifecycle phase of the deployment request.",
        "depth": 1,
        "path": "status.phase",
        "metadata": true,
        "detailId": "field-nvidia-com-v1beta1-status-phase"
      },
      {
        "index": 6648,
        "text": "",
        "depth": 0,
        "detailId": "line-6648"
      },
      {
        "index": 6649,
        "text": "  # ProfilingJobName is the name of the Kubernetes Job running the profiler.",
        "description": "ProfilingJobName is the name of the Kubernetes Job running the profiler.",
        "depth": 1,
        "path": "status.profilingJobName",
        "detailId": "field-nvidia-com-v1beta1-status-profilingjobname"
      },
      {
        "index": 6650,
        "text": "  # profilingJobName: \"<string>\"",
        "description": "ProfilingJobName is the name of the Kubernetes Job running the profiler.",
        "depth": 1,
        "field": "profilingJobName",
        "path": "status.profilingJobName",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-status-profilingjobname"
      },
      {
        "index": 6651,
        "text": "",
        "depth": 0,
        "detailId": "line-6651"
      },
      {
        "index": 6652,
        "text": "  # ProfilingPhase indicates the current sub-phase of the profiling pipeline.",
        "description": "ProfilingPhase indicates the current sub-phase of the profiling pipeline.",
        "depth": 1,
        "path": "status.profilingPhase",
        "detailId": "field-nvidia-com-v1beta1-status-profilingphase"
      },
      {
        "index": 6653,
        "text": "  # Only meaningful when Phase is \"Profiling\". Cleared when profiling completes",
        "description": "Only meaningful when Phase is \"Profiling\". Cleared when profiling completes",
        "depth": 1,
        "path": "status.profilingPhase",
        "detailId": "field-nvidia-com-v1beta1-status-profilingphase"
      },
      {
        "index": 6654,
        "text": "  # or fails.",
        "description": "or fails.",
        "depth": 1,
        "path": "status.profilingPhase",
        "detailId": "field-nvidia-com-v1beta1-status-profilingphase"
      },
      {
        "index": 6655,
        "text": "  # profilingPhase: \"Initializing\" # enum: \"SweepingPrefill\" | \"SweepingDecode\"",
        "description": "ProfilingPhase indicates the current sub-phase of the profiling pipeline.\nOnly meaningful when Phase is \"Profiling\". Cleared when profiling completes or fails.",
        "depth": 1,
        "field": "profilingPhase",
        "path": "status.profilingPhase",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-status-profilingphase"
      },
      {
        "index": 6656,
        "text": "                                   # | \"SelectingConfig\" | \"BuildingCurves\" |",
        "description": "ProfilingPhase indicates the current sub-phase of the profiling pipeline.\nOnly meaningful when Phase is \"Profiling\". Cleared when profiling completes or fails.",
        "depth": 1,
        "path": "status.profilingPhase",
        "metadata": true,
        "detailId": "field-nvidia-com-v1beta1-status-profilingphase"
      },
      {
        "index": 6657,
        "text": "                                   # \"GeneratingDGD\" | \"Done\"",
        "description": "ProfilingPhase indicates the current sub-phase of the profiling pipeline.\nOnly meaningful when Phase is \"Profiling\". Cleared when profiling completes or fails.",
        "depth": 1,
        "path": "status.profilingPhase",
        "metadata": true,
        "detailId": "field-nvidia-com-v1beta1-status-profilingphase"
      },
      {
        "index": 6658,
        "text": "",
        "depth": 0,
        "detailId": "line-6658"
      },
      {
        "index": 6659,
        "text": "  # ProfilingResults contains the output of the profiling process including",
        "description": "ProfilingResults contains the output of the profiling process including",
        "depth": 1,
        "path": "status.profilingResults",
        "detailId": "field-nvidia-com-v1beta1-status-profilingresults"
      },
      {
        "index": 6660,
        "text": "  # Pareto-optimal configurations and the selected deployment configuration.",
        "description": "Pareto-optimal configurations and the selected deployment configuration.",
        "depth": 1,
        "path": "status.profilingResults",
        "detailId": "field-nvidia-com-v1beta1-status-profilingresults"
      },
      {
        "index": 6661,
        "text": "  profilingResults: # optional",
        "description": "ProfilingResults contains the output of the profiling process including\nPareto-optimal configurations and the selected deployment configuration.",
        "depth": 1,
        "field": "profilingResults",
        "path": "status.profilingResults",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1beta1-status-profilingresults"
      },
      {
        "index": 6662,
        "text": "    # Pareto is the list of Pareto-optimal deployment configurations discovered",
        "description": "Pareto is the list of Pareto-optimal deployment configurations discovered",
        "depth": 2,
        "path": "status.profilingResults.pareto",
        "detailId": "field-nvidia-com-v1beta1-status-profilingresults-pareto"
      },
      {
        "index": 6663,
        "text": "    # during profiling. Each entry represents a different cost/performance",
        "description": "during profiling. Each entry represents a different cost/performance",
        "depth": 2,
        "path": "status.profilingResults.pareto",
        "detailId": "field-nvidia-com-v1beta1-status-profilingresults-pareto"
      },
      {
        "index": 6664,
        "text": "    # trade-off.",
        "description": "trade-off.",
        "depth": 2,
        "path": "status.profilingResults.pareto",
        "detailId": "field-nvidia-com-v1beta1-status-profilingresults-pareto"
      },
      {
        "index": 6665,
        "text": "    pareto: # optional",
        "description": "Pareto is the list of Pareto-optimal deployment configurations discovered during profiling.\nEach entry represents a different cost/performance trade-off.",
        "depth": 2,
        "field": "pareto",
        "path": "status.profilingResults.pareto",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-status-profilingresults-pareto"
      },
      {
        "index": 6668,
        "text": "",
        "depth": 0,
        "detailId": "line-6668"
      },
      {
        "index": 6669,
        "text": "    # SelectedConfig is the recommended configuration chosen by the profiler",
        "description": "SelectedConfig is the recommended configuration chosen by the profiler",
        "depth": 2,
        "path": "status.profilingResults.selectedConfig",
        "detailId": "field-nvidia-com-v1beta1-status-profilingresults-selectedconfig"
      },
      {
        "index": 6670,
        "text": "    # based on the SLA targets. This is the configuration used for deployment",
        "description": "based on the SLA targets. This is the configuration used for deployment",
        "depth": 2,
        "path": "status.profilingResults.selectedConfig",
        "detailId": "field-nvidia-com-v1beta1-status-profilingresults-selectedconfig"
      },
      {
        "index": 6671,
        "text": "    # when autoApply is true.",
        "description": "when autoApply is true.",
        "depth": 2,
        "path": "status.profilingResults.selectedConfig",
        "detailId": "field-nvidia-com-v1beta1-status-profilingresults-selectedconfig"
      },
      {
        "index": 6672,
        "text": "    # selectedConfig: {} # preserveUnknownFields",
        "description": "SelectedConfig is the recommended configuration chosen by the profiler\nbased on the SLA targets. This is the configuration used for deployment\nwhen autoApply is true.",
        "depth": 2,
        "field": "selectedConfig",
        "path": "status.profilingResults.selectedConfig",
        "code": true,
        "detailId": "field-nvidia-com-v1beta1-status-profilingresults-selectedconfig"
      }
    ],
    "fields": [
      {
        "id": "field-nvidia-com-v1beta1-apiversion",
        "path": "apiVersion",
        "type": "string",
        "required": true,
        "description": "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources"
      },
      {
        "id": "field-nvidia-com-v1beta1-kind",
        "path": "kind",
        "type": "string",
        "required": true,
        "description": "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata",
        "path": "metadata",
        "type": "object",
        "required": true,
        "description": "Standard Kubernetes object metadata.",
        "metadata": [
          "requiredFields: name, namespace"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-annotations",
        "path": "metadata.annotations",
        "type": "object",
        "required": false,
        "description": "Annotations is an unstructured key value map stored with a resource."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-annotations-key",
        "path": "metadata.annotations.<key>",
        "type": "string",
        "required": false
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-creationtimestamp",
        "path": "metadata.creationTimestamp",
        "type": "string/date-time",
        "required": false,
        "description": "CreationTimestamp is set by the server when a resource is created.",
        "metadata": [
          "format: date-time"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-deletiongraceperiodseconds",
        "path": "metadata.deletionGracePeriodSeconds",
        "type": "integer/int64",
        "required": false,
        "description": "Number of seconds allowed for graceful deletion.",
        "metadata": [
          "format: int64"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-deletiontimestamp",
        "path": "metadata.deletionTimestamp",
        "type": "string/date-time",
        "required": false,
        "description": "DeletionTimestamp is set by the server when graceful deletion is requested.",
        "metadata": [
          "format: date-time"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-finalizers",
        "path": "metadata.finalizers",
        "type": "array<string>",
        "required": false,
        "description": "Finalizers must be empty before the object is deleted from the registry."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-finalizers",
        "path": "metadata.finalizers[]",
        "type": "string",
        "required": true
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-generatename",
        "path": "metadata.generateName",
        "type": "string",
        "required": false,
        "description": "GenerateName is an optional prefix used by the server to generate a unique name."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-generation",
        "path": "metadata.generation",
        "type": "integer/int64",
        "required": false,
        "description": "Generation is a sequence number representing a specific desired state.",
        "metadata": [
          "format: int64"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-labels",
        "path": "metadata.labels",
        "type": "object",
        "required": false,
        "description": "Labels are key value pairs used to organize and select objects."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-labels-key",
        "path": "metadata.labels.<key>",
        "type": "string",
        "required": false
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-managedfields",
        "path": "metadata.managedFields",
        "type": "array<object>",
        "required": false,
        "description": "ManagedFields records which actor manages which fields."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-managedfields-apiversion",
        "path": "metadata.managedFields[].apiVersion",
        "type": "string",
        "required": false,
        "description": "APIVersion defines the version of this field set."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-managedfields-fieldstype",
        "path": "metadata.managedFields[].fieldsType",
        "type": "string",
        "required": false,
        "description": "FieldsType is the discriminator for the fields format."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-managedfields-fieldsv1",
        "path": "metadata.managedFields[].fieldsV1",
        "type": "object",
        "required": false,
        "description": "FieldsV1 stores a versioned field set.",
        "metadata": [
          "x-kubernetes-preserve-unknown-fields"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-managedfields-manager",
        "path": "metadata.managedFields[].manager",
        "type": "string",
        "required": false,
        "description": "Manager identifies the workflow managing these fields."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-managedfields-operation",
        "path": "metadata.managedFields[].operation",
        "type": "string",
        "required": false,
        "description": "Operation is the type of operation that produced this managedFields entry."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-managedfields-subresource",
        "path": "metadata.managedFields[].subresource",
        "type": "string",
        "required": false,
        "description": "Subresource is the name of the subresource used to update the object."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-managedfields-time",
        "path": "metadata.managedFields[].time",
        "type": "string/date-time",
        "required": false,
        "description": "Time is when this managedFields entry was added.",
        "metadata": [
          "format: date-time"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-name",
        "path": "metadata.name",
        "type": "string",
        "required": true,
        "description": "Name must be unique within a namespace."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-namespace",
        "path": "metadata.namespace",
        "type": "string",
        "required": true,
        "description": "Namespace defines the space within which each name must be unique."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-ownerreferences",
        "path": "metadata.ownerReferences",
        "type": "array<object>",
        "required": false,
        "description": "OwnerReferences lists objects depended on by this object."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-ownerreferences-apiversion",
        "path": "metadata.ownerReferences[].apiVersion",
        "type": "string",
        "required": true,
        "description": "API version of the referent."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-ownerreferences-blockownerdeletion",
        "path": "metadata.ownerReferences[].blockOwnerDeletion",
        "type": "boolean",
        "required": false,
        "description": "BlockOwnerDeletion controls foreground deletion behavior."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-ownerreferences-controller",
        "path": "metadata.ownerReferences[].controller",
        "type": "boolean",
        "required": false,
        "description": "Controller marks the managing controller owner reference."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-ownerreferences-kind",
        "path": "metadata.ownerReferences[].kind",
        "type": "string",
        "required": true,
        "description": "Kind of the referent."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-ownerreferences-name",
        "path": "metadata.ownerReferences[].name",
        "type": "string",
        "required": true,
        "description": "Name of the referent."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-ownerreferences-uid",
        "path": "metadata.ownerReferences[].uid",
        "type": "string",
        "required": true,
        "description": "UID of the referent."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-resourceversion",
        "path": "metadata.resourceVersion",
        "type": "string",
        "required": false,
        "description": "ResourceVersion is an opaque internal version value."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-selflink",
        "path": "metadata.selfLink",
        "type": "string",
        "required": false,
        "description": "SelfLink is a deprecated read-only field."
      },
      {
        "id": "field-nvidia-com-v1beta1-metadata-uid",
        "path": "metadata.uid",
        "type": "string",
        "required": false,
        "description": "UID is the unique in time and space value for this object."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec",
        "path": "spec",
        "type": "object",
        "required": false,
        "description": "Spec defines the desired state for this deployment request.",
        "metadata": [
          "requiredFields: model"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-autoapply",
        "path": "spec.autoApply",
        "type": "boolean",
        "required": false,
        "description": "AutoApply indicates whether to automatically create a DynamoGraphDeployment\nafter profiling completes. If false, the generated spec is stored in status\nfor manual review and application.",
        "metadata": [
          "default: true"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-backend",
        "path": "spec.backend",
        "type": "string",
        "required": false,
        "description": "Backend specifies the inference backend to use for profiling and deployment.",
        "metadata": [
          "default: \"auto\""
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-features",
        "path": "spec.features",
        "type": "object",
        "required": false,
        "description": "Features controls optional Dynamo platform features in the generated deployment."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-features-mocker",
        "path": "spec.features.mocker",
        "type": "object",
        "required": false,
        "description": "Mocker configures the simulated (mocker) backend for testing without GPUs."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-features-mocker-enabled",
        "path": "spec.features.mocker.enabled",
        "type": "boolean",
        "required": false,
        "description": "Enabled indicates whether to deploy mocker workers instead of real inference workers.\nUseful for large-scale testing without GPUs."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-features-planner",
        "path": "spec.features.planner",
        "type": "object",
        "required": false,
        "description": "Planner is the raw SLA planner configuration passed to the planner service.\nIts schema is defined by dynamo.planner.config.planner_config.PlannerConfig.\nGo treats this as opaque bytes; the Planner service validates it at startup.\nThe presence of this field (non-null) enables the planner in the generated DGD.",
        "metadata": [
          "x-kubernetes-preserve-unknown-fields"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-hardware",
        "path": "spec.hardware",
        "type": "object",
        "required": false,
        "description": "Hardware describes the hardware resources available for profiling and deployment.\nTypically auto-filled by the operator from cluster discovery."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-hardware-gpusku",
        "path": "spec.hardware.gpuSku",
        "type": "string",
        "required": false,
        "description": "GPUSKU selects the GPU type to target.\nWhen omitted, auto-detected by selecting the GPU with the highest\nnode count, then highest VRAM. In mixed-GPU clusters, set this to\nchoose which GPU type to use. Discovery and totalGpus are then\nrestricted to nodes matching this SKU."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-hardware-interconnect",
        "path": "spec.hardware.interconnect",
        "type": "string",
        "required": false,
        "description": "Interconnect describes the primary GPU-to-GPU interconnect *within a node*.\n\nSemantics / usage:\n  - This is capability metadata used for profiling, planning, and deployment decisions.\n  - It does NOT configure or enable any GPU interconnect; it only describes what is available/assumed.\n  - When omitted, the operator may attempt best-effort discovery (currently distinguishes \"nvlink\"\n    vs \"pcie\" based on DCGM NVLink link count). If discovery is unavailable, it may remain empty.\n\nImpact of wrong / missing values:\n  - If set more optimistically than reality (e.g., \"nvlink\" when only PCIe is present), performance\n    models may overestimate intra-node bandwidth and choose overly aggressive parallelism or layouts,\n    resulting in degraded performance compared to expectations.\n  - If set more pessimistically than reality (e.g., \"pcie\" when NVLink is present), the system may\n    choose conservative plans and leave performance on the table.\n  - If unset and undiscovered, consumers should treat the interconnect as unknown and fall back to\n    conservative assumptions.\n\nExample values: \"pcie\", \"nvlink\". Other values may be accepted but may not be auto-detected."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-hardware-numgpuspernode",
        "path": "spec.hardware.numGpusPerNode",
        "type": "integer/int32",
        "required": false,
        "description": "NumGPUsPerNode is the number of GPUs per node.\nWhen omitted, auto-detected from cluster GPU nodes.",
        "metadata": [
          "format: int32"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-hardware-rdma",
        "path": "spec.hardware.rdma",
        "type": "boolean",
        "required": false,
        "description": "RDMA indicates whether the cluster has RDMA-capable networking available for Dynamo data movement.\n\nSemantics / usage:\n  - This is capability metadata used for profiling, planning, and deployment decisions.\n  - It does NOT install, enable, or configure RDMA (e.g., drivers, SR-IOV, NVIDIA network operator,\n    GPUDirect settings). It only expresses availability/intent.\n  - When omitted, the operator may attempt best-effort discovery (e.g., via node labels indicating\n    RDMA/SR-IOV capability and/or presence of NVIDIA network-operator RDMA components). If discovery\n    is unavailable, it may remain unset.\n\nImpact of wrong / missing values:\n  - False positive (set true when RDMA is not actually usable end-to-end) may cause plans or\n    deployments to assume RDMA is available; depending on the runtime transport selection and\n    fallback behavior, this can lead to connection/setup failures or performance regressions.\n  - False negative (set false when RDMA is available) will typically avoid RDMA-optimized paths and\n    fall back to non-RDMA transports, usually remaining functional but potentially slower.\n  - If unset and undiscovered, consumers should treat RDMA availability as unknown and use\n    conservative defaults / fallback transports."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-hardware-totalgpus",
        "path": "spec.hardware.totalGpus",
        "type": "integer/int32",
        "required": false,
        "description": "TotalGPUs is the GPU budget for profiling and deployment.\nThe profiler uses this to determine parallelism and replica count.\nWhen omitted, computed by counting GPUs on discovered nodes\n(filtered by gpuSku when set), temporarily capped at 32 to\nlimit profiler search space. This cap may be removed in a future\nrelease. Set this field explicitly to override.",
        "metadata": [
          "format: int32"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-hardware-vrammb",
        "path": "spec.hardware.vramMb",
        "type": "number",
        "required": false,
        "description": "VRAMMB is the VRAM per GPU in MiB.\nWhen omitted, auto-detected from cluster GPU nodes."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-image",
        "path": "spec.image",
        "type": "string",
        "required": false,
        "description": "Image is the container image reference for the profiling job (planner image).\nExample: \"nvcr.io/nvidia/ai-dynamo/dynamo-planner:1.1.1\".\nFor Dynamo < 1.1.0, use dynamo-frontend."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-model",
        "path": "spec.model",
        "type": "string",
        "required": true,
        "description": "Model specifies the model to deploy (e.g., \"Qwen/Qwen3-0.6B\", \"meta-llama/Llama-3-70b\").\nCan be a HuggingFace ID or a private model name.",
        "metadata": [
          "minLength: 1"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-modelcache",
        "path": "spec.modelCache",
        "type": "object",
        "required": false,
        "description": "ModelCache provides optional PVC configuration for pre-downloaded model weights.\nWhen provided, weights are loaded from the PVC instead of downloading from HuggingFace."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-modelcache-pvcmodelpath",
        "path": "spec.modelCache.pvcModelPath",
        "type": "string",
        "required": false,
        "description": "PVCModelPath is the path to the model checkpoint directory within the PVC\n(e.g. \"deepseek-r1\" or \"models/Llama-3.1-405B-FP8\")."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-modelcache-pvcmountpath",
        "path": "spec.modelCache.pvcMountPath",
        "type": "string",
        "required": false,
        "description": "PVCMountPath is the mount path for the PVC inside the container.",
        "metadata": [
          "default: \"/opt/model-cache\""
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-modelcache-pvcname",
        "path": "spec.modelCache.pvcName",
        "type": "string",
        "required": false,
        "description": "PVCName is the name of the PersistentVolumeClaim containing model weights.\nThe PVC must exist in the same namespace as the DGDR."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides",
        "path": "spec.overrides",
        "type": "object",
        "required": false,
        "description": "Overrides allows customizing the profiling job and the generated DynamoGraphDeployment."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-dgd",
        "path": "spec.overrides.dgd",
        "type": "object",
        "required": false,
        "description": "DGD allows providing a full or partial nvidia.com/v1alpha1 DynamoGraphDeployment\nto use as the base for the generated deployment. Fields from profiling results\nare merged on top. Use this to override backend worker images.\n\nThe field is stored as a raw embedded resource rather than a typed\n*v1alpha1.DynamoGraphDeployment to avoid a circular import: v1alpha1 already\nimports v1beta1 as the conversion hub and Go does not allow import cycles.\n\nThe EmbeddedResource marker tells the API server to validate that the value is a\nwell-formed Kubernetes object (has apiVersion/kind), but does not enforce that it\nis specifically a DynamoGraphDeployment. Full type validation (correct apiVersion,\nkind, and field schema) is performed by the controller during reconciliation.",
        "metadata": [
          "x-kubernetes-preserve-unknown-fields",
          "x-kubernetes-embedded-resource"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob",
        "path": "spec.overrides.profilingJob",
        "type": "object",
        "required": false,
        "description": "ProfilingJob allows overriding the profiling Job specification.\nFields set here are merged into the controller-generated Job spec.",
        "metadata": [
          "requiredFields: template"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-activedeadlineseconds",
        "path": "spec.overrides.profilingJob.activeDeadlineSeconds",
        "type": "integer/int64",
        "required": false,
        "description": "Specifies the duration in seconds relative to the startTime that the job\nmay be continuously active before the system tries to terminate it; value\nmust be positive integer. If a Job is suspended (at creation or through an\nupdate), this timer will effectively be stopped and reset when the Job is\nresumed again.",
        "metadata": [
          "format: int64"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-backofflimit",
        "path": "spec.overrides.profilingJob.backoffLimit",
        "type": "integer/int32",
        "required": false,
        "description": "Specifies the number of retries before marking this job failed.\nDefaults to 6, unless backoffLimitPerIndex (only Indexed Job) is specified.\nWhen backoffLimitPerIndex is specified, backoffLimit defaults to 2147483647.",
        "metadata": [
          "format: int32"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-backofflimitperindex",
        "path": "spec.overrides.profilingJob.backoffLimitPerIndex",
        "type": "integer/int32",
        "required": false,
        "description": "Specifies the limit for the number of retries within an\nindex before marking this index as failed. When enabled the number of\nfailures per index is kept in the pod's\nbatch.kubernetes.io/job-index-failure-count annotation. It can only\nbe set when Job's completionMode=Indexed, and the Pod's restart\npolicy is Never. The field is immutable.",
        "metadata": [
          "format: int32"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completionmode",
        "path": "spec.overrides.profilingJob.completionMode",
        "type": "string",
        "required": false,
        "description": "completionMode specifies how Pod completions are tracked. It can be\n`NonIndexed` (default) or `Indexed`.\n\n`NonIndexed` means that the Job is considered complete when there have\nbeen .spec.completions successfully completed Pods. Each Pod completion is\nhomologous to each other.\n\n`Indexed` means that the Pods of a\nJob get an associated completion index from 0 to (.spec.completions - 1),\navailable in the annotation batch.kubernetes.io/job-completion-index.\nThe Job is considered complete when there is one successfully completed Pod\nfor each index.\nWhen value is `Indexed`, .spec.completions must be specified and\n`.spec.parallelism` must be less than or equal to 10^5.\nIn addition, The Pod name takes the form\n`$(job-name)-$(index)-$(random-string)`,\nthe Pod hostname takes the form `$(job-name)-$(index)`.\n\nMore completion modes can be added in the future.\nIf the Job controller observes a mode that it doesn't recognize, which\nis possible during upgrades due to version skew, the controller\nskips updates for the Job."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-completions",
        "path": "spec.overrides.profilingJob.completions",
        "type": "integer/int32",
        "required": false,
        "description": "Specifies the desired number of successfully finished pods the\njob should be run with.  Setting to null means that the success of any\npod signals the success of all pods, and allows parallelism to have any positive\nvalue.  Setting to 1 means that parallelism is limited to 1 and the success of that\npod signals the success of the job.\nMore info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",
        "metadata": [
          "format: int32"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-managedby",
        "path": "spec.overrides.profilingJob.managedBy",
        "type": "string",
        "required": false,
        "description": "ManagedBy field indicates the controller that manages a Job. The k8s Job\ncontroller reconciles jobs which don't have this field at all or the field\nvalue is the reserved string `kubernetes.io/job-controller`, but skips\nreconciling Jobs with a custom value for this field.\nThe value must be a valid domain-prefixed path (e.g. acme.io/foo) -\nall characters before the first \"/\" must be a valid subdomain as defined\nby RFC 1123. All characters trailing the first \"/\" must be valid HTTP Path\ncharacters as defined by RFC 3986. The value cannot exceed 63 characters.\nThis field is immutable.\n\nThis field is beta-level. The job controller accepts setting the field\nwhen the feature gate JobManagedBy is enabled (enabled by default)."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-manualselector",
        "path": "spec.overrides.profilingJob.manualSelector",
        "type": "boolean",
        "required": false,
        "description": "manualSelector controls generation of pod labels and pod selectors.\nLeave `manualSelector` unset unless you are certain what you are doing.\nWhen false or unset, the system pick labels unique to this job\nand appends those labels to the pod template.  When true,\nthe user is responsible for picking unique labels and specifying\nthe selector.  Failure to pick a unique label may cause this\nand other jobs to not function correctly.  However, You may see\n`manualSelector=true` in jobs that were created with the old `extensions/v1beta1`\nAPI.\nMore info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector"
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-maxfailedindexes",
        "path": "spec.overrides.profilingJob.maxFailedIndexes",
        "type": "integer/int32",
        "required": false,
        "description": "Specifies the maximal number of failed indexes before marking the Job as\nfailed, when backoffLimitPerIndex is set. Once the number of failed\nindexes exceeds this number the entire Job is marked as Failed and its\nexecution is terminated. When left as null the job continues execution of\nall of its indexes and is marked with the `Complete` Job condition.\nIt can only be specified when backoffLimitPerIndex is set.\nIt can be null or up to completions. It is required and must be\nless than or equal to 10^4 when is completions greater than 10^5.",
        "metadata": [
          "format: int32"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-parallelism",
        "path": "spec.overrides.profilingJob.parallelism",
        "type": "integer/int32",
        "required": false,
        "description": "Specifies the maximum desired number of pods the job should\nrun at any given time. The actual number of pods running in steady state will\nbe less than this number when ((.spec.completions - .status.successful) < .spec.parallelism),\ni.e. when the work left to do is less than max parallelism.\nMore info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",
        "metadata": [
          "format: int32"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podfailurepolicy",
        "path": "spec.overrides.profilingJob.podFailurePolicy",
        "type": "object",
        "required": false,
        "description": "Specifies the policy of handling failed pods. In particular, it allows to\nspecify the set of actions and conditions which need to be\nsatisfied to take the associated action.\nIf empty, the default behaviour applies - the counter of failed pods,\nrepresented by the jobs's .status.failed field, is incremented and it is\nchecked against the backoffLimit. This field cannot be used in combination\nwith restartPolicy=OnFailure.",
        "metadata": [
          "requiredFields: rules"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-podreplacementpolicy",
        "path": "spec.overrides.profilingJob.podReplacementPolicy",
        "type": "string",
        "required": false,
        "description": "podReplacementPolicy specifies when to create replacement Pods.\nPossible values are:\n- TerminatingOrFailed means that we recreate pods\n  when they are terminating (has a metadata.deletionTimestamp) or failed.\n- Failed means to wait until a previously created Pod is fully terminated (has phase\n  Failed or Succeeded) before creating a replacement Pod.\n\nWhen using podFailurePolicy, Failed is the the only allowed value.\nTerminatingOrFailed and Failed are allowed values when podFailurePolicy is not in use."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-selector",
        "path": "spec.overrides.profilingJob.selector",
        "type": "object",
        "required": false,
        "description": "A label query over pods that should match the pod count.\nNormally, the system sets this field for you.\nMore info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors",
        "metadata": [
          "x-kubernetes-map-type: atomic"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-successpolicy",
        "path": "spec.overrides.profilingJob.successPolicy",
        "type": "object",
        "required": false,
        "description": "successPolicy specifies the policy when the Job can be declared as succeeded.\nIf empty, the default behavior applies - the Job is declared as succeeded\nonly when the number of succeeded pods equals to the completions.\nWhen the field is specified, it must be immutable and works only for the Indexed Jobs.\nOnce the Job meets the SuccessPolicy, the lingering pods are terminated.",
        "metadata": [
          "requiredFields: rules"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-suspend",
        "path": "spec.overrides.profilingJob.suspend",
        "type": "boolean",
        "required": false,
        "description": "suspend specifies whether the Job controller should create Pods or not. If\na Job is created with suspend set to true, no Pods are created by the Job\ncontroller. If a Job is suspended after creation (i.e. the flag goes from\nfalse to true), the Job controller will delete all active Pods associated\nwith this Job. Users must design their workload to gracefully handle this.\nSuspending a Job will reset the StartTime field of the Job, effectively\nresetting the ActiveDeadlineSeconds timer too. Defaults to false."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-template",
        "path": "spec.overrides.profilingJob.template",
        "type": "object",
        "required": true,
        "description": "Describes the pod that will be created when executing a job.\nThe only allowed template.spec.restartPolicy values are \"Never\" or \"OnFailure\".\nMore info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-overrides-profilingjob-ttlsecondsafterfinished",
        "path": "spec.overrides.profilingJob.ttlSecondsAfterFinished",
        "type": "integer/int32",
        "required": false,
        "description": "ttlSecondsAfterFinished limits the lifetime of a Job that has finished\nexecution (either Complete or Failed). If this field is set,\nttlSecondsAfterFinished after the Job finishes, it is eligible to be\nautomatically deleted. When the Job is being deleted, its lifecycle\nguarantees (e.g. finalizers) will be honored. If this field is unset,\nthe Job won't be automatically deleted. If this field is set to zero,\nthe Job becomes eligible to be deleted immediately after it finishes.",
        "metadata": [
          "format: int32"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-searchstrategy",
        "path": "spec.searchStrategy",
        "type": "string",
        "required": false,
        "description": "SearchStrategy controls the profiling search depth.\n\"rapid\" performs a fast sweep; \"thorough\" explores more configurations.",
        "metadata": [
          "default: \"rapid\""
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-sla",
        "path": "spec.sla",
        "type": "object",
        "required": false,
        "description": "SLA defines service-level agreement targets that drive profiling optimization."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-sla-e2elatency",
        "path": "spec.sla.e2eLatency",
        "type": "number",
        "required": false,
        "description": "E2ELatency is the target end-to-end request latency in milliseconds.\nAlternative to specifying TTFT + ITL."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-sla-itl",
        "path": "spec.sla.itl",
        "type": "number",
        "required": false,
        "description": "ITL is the Inter-Token Latency target in milliseconds."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-sla-optimizationtype",
        "path": "spec.sla.optimizationType",
        "type": "string",
        "required": false,
        "description": "OptimizationType is the optimization target for SLA profiling.\nValid values: latency, throughput.",
        "metadata": [
          "enum: \"latency\" | \"throughput\""
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-sla-ttft",
        "path": "spec.sla.ttft",
        "type": "number",
        "required": false,
        "description": "TTFT is the Time To First Token target in milliseconds."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-workload",
        "path": "spec.workload",
        "type": "object",
        "required": false,
        "description": "Workload defines the expected workload characteristics for SLA-based profiling."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-workload-concurrency",
        "path": "spec.workload.concurrency",
        "type": "number",
        "required": false,
        "description": "Concurrency is the target concurrency level.\nRequired (or RequestRate) when the planner is disabled."
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-workload-isl",
        "path": "spec.workload.isl",
        "type": "integer/int32",
        "required": false,
        "description": "ISL is the Input Sequence Length (number of tokens).",
        "metadata": [
          "default: 4000",
          "format: int32"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-workload-osl",
        "path": "spec.workload.osl",
        "type": "integer/int32",
        "required": false,
        "description": "OSL is the Output Sequence Length (number of tokens).",
        "metadata": [
          "default: 1000",
          "format: int32"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-spec-workload-requestrate",
        "path": "spec.workload.requestRate",
        "type": "number",
        "required": false,
        "description": "RequestRate is the target request rate (req/s).\nRequired (or Concurrency) when the planner is disabled."
      },
      {
        "id": "field-nvidia-com-v1beta1-status",
        "path": "status",
        "type": "object",
        "required": false,
        "description": "Status reflects the current observed state of this deployment request."
      },
      {
        "id": "field-nvidia-com-v1beta1-status-conditions",
        "path": "status.conditions",
        "type": "array<object>",
        "required": false,
        "description": "Conditions contains the latest observed conditions of the deployment request.\nStandard condition types include: Succeeded, Validation, Profiling, SpecGenerated, DeploymentReady.",
        "metadata": [
          "x-kubernetes-list-type: map",
          "x-kubernetes-list-map-keys: type"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-status-conditions-lasttransitiontime",
        "path": "status.conditions[].lastTransitionTime",
        "type": "string/date-time",
        "required": true,
        "description": "lastTransitionTime is the last time the condition transitioned from one status to another.\nThis should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.",
        "metadata": [
          "format: date-time"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-status-conditions-message",
        "path": "status.conditions[].message",
        "type": "string",
        "required": true,
        "description": "message is a human readable message indicating details about the transition.\nThis may be an empty string.",
        "metadata": [
          "maxLength: 32768"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-status-conditions-observedgeneration",
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
        "id": "field-nvidia-com-v1beta1-status-conditions-reason",
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
        "id": "field-nvidia-com-v1beta1-status-conditions-status",
        "path": "status.conditions[].status",
        "type": "string",
        "required": true,
        "description": "status of the condition, one of True, False, Unknown.",
        "metadata": [
          "enum: \"True\" | \"False\" | \"Unknown\""
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-status-conditions-type",
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
        "id": "field-nvidia-com-v1beta1-status-deploymentinfo",
        "path": "status.deploymentInfo",
        "type": "object",
        "required": false,
        "description": "DeploymentInfo tracks the state of the deployed DynamoGraphDeployment.\nPopulated when a DGD has been created (either via autoApply or manually)."
      },
      {
        "id": "field-nvidia-com-v1beta1-status-deploymentinfo-availablereplicas",
        "path": "status.deploymentInfo.availableReplicas",
        "type": "integer/int32",
        "required": false,
        "description": "AvailableReplicas is the number of replicas that are available and ready.",
        "metadata": [
          "format: int32"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-status-deploymentinfo-replicas",
        "path": "status.deploymentInfo.replicas",
        "type": "integer/int32",
        "required": false,
        "description": "Replicas is the desired number of replicas.",
        "metadata": [
          "format: int32"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-status-dgdname",
        "path": "status.dgdName",
        "type": "string",
        "required": false,
        "description": "DGDName is the name of the generated or created DynamoGraphDeployment."
      },
      {
        "id": "field-nvidia-com-v1beta1-status-observedgeneration",
        "path": "status.observedGeneration",
        "type": "integer/int64",
        "required": false,
        "description": "ObservedGeneration is the most recent generation observed by the controller.",
        "metadata": [
          "format: int64"
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-status-phase",
        "path": "status.phase",
        "type": "string",
        "required": false,
        "description": "Phase is the high-level lifecycle phase of the deployment request.",
        "metadata": [
          "enum: \"Pending\" | \"Profiling\" | \"Ready\" | \"Deploying\" | \"Deployed\" | \"Failed\""
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-status-profilingjobname",
        "path": "status.profilingJobName",
        "type": "string",
        "required": false,
        "description": "ProfilingJobName is the name of the Kubernetes Job running the profiler."
      },
      {
        "id": "field-nvidia-com-v1beta1-status-profilingphase",
        "path": "status.profilingPhase",
        "type": "string",
        "required": false,
        "description": "ProfilingPhase indicates the current sub-phase of the profiling pipeline.\nOnly meaningful when Phase is \"Profiling\". Cleared when profiling completes or fails.",
        "metadata": [
          "enum: \"Initializing\" | \"SweepingPrefill\" | \"SweepingDecode\" | \"SelectingConfig\" | \"BuildingCurves\" | \"GeneratingDGD\" | \"Done\""
        ]
      },
      {
        "id": "field-nvidia-com-v1beta1-status-profilingresults",
        "path": "status.profilingResults",
        "type": "object",
        "required": false,
        "description": "ProfilingResults contains the output of the profiling process including\nPareto-optimal configurations and the selected deployment configuration."
      },
      {
        "id": "field-nvidia-com-v1beta1-status-profilingresults-pareto",
        "path": "status.profilingResults.pareto",
        "type": "array<object>",
        "required": false,
        "description": "Pareto is the list of Pareto-optimal deployment configurations discovered during profiling.\nEach entry represents a different cost/performance trade-off."
      },
      {
        "id": "field-nvidia-com-v1beta1-status-profilingresults-selectedconfig",
        "path": "status.profilingResults.selectedConfig",
        "type": "object",
        "required": false,
        "description": "SelectedConfig is the recommended configuration chosen by the profiler\nbased on the SLA targets. This is the configuration used for deployment\nwhen autoApply is true.",
        "metadata": [
          "x-kubernetes-preserve-unknown-fields"
        ]
      }
    ],
    "truncated": true,
    "truncationDepth": 3
  },
  {
    "apiVersion": "nvidia.com/v1alpha1",
    "group": "nvidia.com",
    "version": "v1alpha1",
    "kind": "DynamoGraphDeploymentRequest",
    "resource": "dynamographdeploymentrequests",
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
        "text": "kind: DynamoGraphDeploymentRequest",
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
        "text": "# Spec defines the desired state for this deployment request.",
        "description": "Spec defines the desired state for this deployment request.",
        "depth": 0,
        "path": "spec",
        "detailId": "field-nvidia-com-v1alpha1-spec"
      },
      {
        "index": 90,
        "text": "spec: # optional",
        "description": "Spec defines the desired state for this deployment request.",
        "depth": 0,
        "field": "spec",
        "path": "spec",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1alpha1-spec"
      },
      {
        "index": 91,
        "text": "  # Backend specifies the inference backend for profiling. The controller",
        "description": "Backend specifies the inference backend for profiling. The controller",
        "depth": 1,
        "path": "spec.backend",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-backend"
      },
      {
        "index": 92,
        "text": "  # automatically sets this value in profilingConfig.config.engine.backend.",
        "description": "automatically sets this value in profilingConfig.config.engine.backend.",
        "depth": 1,
        "path": "spec.backend",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-backend"
      },
      {
        "index": 93,
        "text": "  # Profiling runs on real GPUs or via AIC simulation to collect performance",
        "description": "Profiling runs on real GPUs or via AIC simulation to collect performance",
        "depth": 1,
        "path": "spec.backend",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-backend"
      },
      {
        "index": 94,
        "text": "  # data.",
        "description": "data.",
        "depth": 1,
        "path": "spec.backend",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-backend"
      },
      {
        "index": 95,
        "text": "  backend: \"auto\" # required, enum: \"vllm\" | \"sglang\" | \"trtllm\"",
        "description": "Backend specifies the inference backend for profiling.\nThe controller automatically sets this value in profilingConfig.config.engine.backend.\nProfiling runs on real GPUs or via AIC simulation to collect performance data.",
        "depth": 1,
        "field": "backend",
        "path": "spec.backend",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-backend"
      },
      {
        "index": 96,
        "text": "",
        "depth": 0,
        "detailId": "line-96"
      },
      {
        "index": 97,
        "text": "  # Model specifies the model to deploy (e.g., \"Qwen/Qwen3-0.6B\",",
        "description": "Model specifies the model to deploy (e.g., \"Qwen/Qwen3-0.6B\",",
        "depth": 1,
        "path": "spec.model",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-model"
      },
      {
        "index": 98,
        "text": "  # \"meta-llama/Llama-3-70b\"). This is a high-level identifier for easy",
        "description": "\"meta-llama/Llama-3-70b\"). This is a high-level identifier for easy",
        "depth": 1,
        "path": "spec.model",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-model"
      },
      {
        "index": 99,
        "text": "  # reference in kubectl output and logs. The controller automatically sets this",
        "description": "reference in kubectl output and logs. The controller automatically sets this",
        "depth": 1,
        "path": "spec.model",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-model"
      },
      {
        "index": 100,
        "text": "  # value in profilingConfig.config.deployment.model.",
        "description": "value in profilingConfig.config.deployment.model.",
        "depth": 1,
        "path": "spec.model",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-model"
      },
      {
        "index": 101,
        "text": "  model: \"<string>\" # required",
        "description": "Model specifies the model to deploy (e.g., \"Qwen/Qwen3-0.6B\", \"meta-llama/Llama-3-70b\").\nThis is a high-level identifier for easy reference in kubectl output and logs.\nThe controller automatically sets this value in profilingConfig.config.deployment.model.",
        "depth": 1,
        "field": "model",
        "path": "spec.model",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-model"
      },
      {
        "index": 102,
        "text": "",
        "depth": 0,
        "detailId": "line-102"
      },
      {
        "index": 103,
        "text": "  # ProfilingConfig provides the complete configuration for the profiling job.",
        "description": "ProfilingConfig provides the complete configuration for the profiling job.",
        "depth": 1,
        "path": "spec.profilingConfig",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig"
      },
      {
        "index": 104,
        "text": "  # Note: GPU discovery is automatically attempted to detect GPU resources from",
        "description": "Note: GPU discovery is automatically attempted to detect GPU resources from",
        "depth": 1,
        "path": "spec.profilingConfig",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig"
      },
      {
        "index": 105,
        "text": "  # Kubernetes cluster nodes. If the operator has node read permissions",
        "description": "Kubernetes cluster nodes. If the operator has node read permissions",
        "depth": 1,
        "path": "spec.profilingConfig",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig"
      },
      {
        "index": 106,
        "text": "  # (cluster-wide or explicitly granted), discovered GPU configuration is used",
        "description": "(cluster-wide or explicitly granted), discovered GPU configuration is used",
        "depth": 1,
        "path": "spec.profilingConfig",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig"
      },
      {
        "index": 107,
        "text": "  # as defaults when hardware configuration is not manually specified",
        "description": "as defaults when hardware configuration is not manually specified",
        "depth": 1,
        "path": "spec.profilingConfig",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig"
      },
      {
        "index": 108,
        "text": "  # (minNumGpusPerEngine, maxNumGpusPerEngine, numGpusPerNode). User-specified",
        "description": "(minNumGpusPerEngine, maxNumGpusPerEngine, numGpusPerNode). User-specified",
        "depth": 1,
        "path": "spec.profilingConfig",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig"
      },
      {
        "index": 109,
        "text": "  # values always take precedence over auto-discovered values. If GPU discovery",
        "description": "values always take precedence over auto-discovered values. If GPU discovery",
        "depth": 1,
        "path": "spec.profilingConfig",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig"
      },
      {
        "index": 110,
        "text": "  # fails (e.g., namespace-restricted operator without node permissions), manual",
        "description": "fails (e.g., namespace-restricted operator without node permissions), manual",
        "depth": 1,
        "path": "spec.profilingConfig",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig"
      },
      {
        "index": 111,
        "text": "  # hardware config is required. This configuration is passed directly to the",
        "description": "hardware config is required. This configuration is passed directly to the",
        "depth": 1,
        "path": "spec.profilingConfig",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig"
      },
      {
        "index": 112,
        "text": "  # profiler. The structure matches the profile_sla config format exactly (see",
        "description": "profiler. The structure matches the profile_sla config format exactly (see",
        "depth": 1,
        "path": "spec.profilingConfig",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig"
      },
      {
        "index": 113,
        "text": "  # ProfilingConfigSpec for schema). Note: deployment.model and engine.backend",
        "description": "ProfilingConfigSpec for schema). Note: deployment.model and engine.backend",
        "depth": 1,
        "path": "spec.profilingConfig",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig"
      },
      {
        "index": 114,
        "text": "  # are automatically set from the high-level modelName and backend fields and",
        "description": "are automatically set from the high-level modelName and backend fields and",
        "depth": 1,
        "path": "spec.profilingConfig",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig"
      },
      {
        "index": 115,
        "text": "  # should not be specified in this config.",
        "description": "should not be specified in this config.",
        "depth": 1,
        "path": "spec.profilingConfig",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig"
      },
      {
        "index": 116,
        "text": "  profilingConfig: # required",
        "description": "ProfilingConfig provides the complete configuration for the profiling job.\nNote: GPU discovery is automatically attempted to detect GPU resources from Kubernetes\ncluster nodes. If the operator has node read permissions (cluster-wide or explicitly granted),\ndiscovered GPU configuration is used as defaults when hardware configuration is not manually\nspecified (minNumGpusPerEngine, maxNumGpusPerEngine, numGpusPerNode). User-specified values\nalways take precedence over auto-discovered values. If GPU discovery fails (e.g.,\nnamespace-restricted operator without node permissions), manual hardware config is required.\nThis configuration is passed directly to the profiler.\nThe structure matches the profile_sla config format exactly (see ProfilingConfigSpec for schema).\nNote: deployment.model and engine.backend are automatically set from the high-level\nmodelName and backend fields and should not be specified in this config.",
        "depth": 1,
        "field": "profilingConfig",
        "path": "spec.profilingConfig",
        "code": true,
        "required": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig"
      },
      {
        "index": 117,
        "text": "    # ProfilerImage specifies the container image to use for profiling jobs.",
        "description": "ProfilerImage specifies the container image to use for profiling jobs.",
        "depth": 2,
        "path": "spec.profilingConfig.profilerImage",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-profilerimage"
      },
      {
        "index": 118,
        "text": "    # This image contains the profiler code and dependencies needed for",
        "description": "This image contains the profiler code and dependencies needed for",
        "depth": 2,
        "path": "spec.profilingConfig.profilerImage",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-profilerimage"
      },
      {
        "index": 119,
        "text": "    # SLA-based profiling. Example:",
        "description": "SLA-based profiling. Example:",
        "depth": 2,
        "path": "spec.profilingConfig.profilerImage",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-profilerimage"
      },
      {
        "index": 120,
        "text": "    # \"nvcr.io/nvidia/ai-dynamo/vllm-runtime:1.1.1\"",
        "description": "\"nvcr.io/nvidia/ai-dynamo/vllm-runtime:1.1.1\"",
        "depth": 2,
        "path": "spec.profilingConfig.profilerImage",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-profilerimage"
      },
      {
        "index": 121,
        "text": "    profilerImage: \"<string>\" # required",
        "description": "ProfilerImage specifies the container image to use for profiling jobs.\nThis image contains the profiler code and dependencies needed for SLA-based profiling.\nExample: \"nvcr.io/nvidia/ai-dynamo/vllm-runtime:1.1.1\"",
        "depth": 2,
        "field": "profilerImage",
        "path": "spec.profilingConfig.profilerImage",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-profilerimage"
      },
      {
        "index": 122,
        "text": "",
        "depth": 0,
        "detailId": "line-122"
      },
      {
        "index": 123,
        "text": "    # Config is the profiling configuration as arbitrary JSON/YAML. This will be",
        "description": "Config is the profiling configuration as arbitrary JSON/YAML. This will be",
        "depth": 2,
        "path": "spec.profilingConfig.config",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-config"
      },
      {
        "index": 124,
        "text": "    # passed directly to the profiler. The profiler will validate the",
        "description": "passed directly to the profiler. The profiler will validate the",
        "depth": 2,
        "path": "spec.profilingConfig.config",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-config"
      },
      {
        "index": 125,
        "text": "    # configuration and report any errors.",
        "description": "configuration and report any errors.",
        "depth": 2,
        "path": "spec.profilingConfig.config",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-config"
      },
      {
        "index": 126,
        "text": "    # config: {} # preserveUnknownFields",
        "description": "Config is the profiling configuration as arbitrary JSON/YAML. This will be passed directly to the profiler.\nThe profiler will validate the configuration and report any errors.",
        "depth": 2,
        "field": "config",
        "path": "spec.profilingConfig.config",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-config"
      },
      {
        "index": 127,
        "text": "",
        "depth": 0,
        "detailId": "line-127"
      },
      {
        "index": 128,
        "text": "    # ConfigMapRef is an optional reference to a ConfigMap containing the",
        "description": "ConfigMapRef is an optional reference to a ConfigMap containing the",
        "depth": 2,
        "path": "spec.profilingConfig.configMapRef",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-configmapref"
      },
      {
        "index": 129,
        "text": "    # DynamoGraphDeployment base config file (disagg.yaml). This is separate",
        "description": "DynamoGraphDeployment base config file (disagg.yaml). This is separate",
        "depth": 2,
        "path": "spec.profilingConfig.configMapRef",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-configmapref"
      },
      {
        "index": 130,
        "text": "    # from the profiling config above. The path to this config will be set as",
        "description": "from the profiling config above. The path to this config will be set as",
        "depth": 2,
        "path": "spec.profilingConfig.configMapRef",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-configmapref"
      },
      {
        "index": 131,
        "text": "    # engine.config in the profiling config.",
        "description": "engine.config in the profiling config.",
        "depth": 2,
        "path": "spec.profilingConfig.configMapRef",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-configmapref"
      },
      {
        "index": 132,
        "text": "    configMapRef: # optional",
        "description": "ConfigMapRef is an optional reference to a ConfigMap containing the DynamoGraphDeployment\nbase config file (disagg.yaml). This is separate from the profiling config above.\nThe path to this config will be set as engine.config in the profiling config.",
        "depth": 2,
        "field": "configMapRef",
        "path": "spec.profilingConfig.configMapRef",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-configmapref"
      },
      {
        "index": 133,
        "text": "      # Name of the ConfigMap containing the desired data.",
        "description": "Name of the ConfigMap containing the desired data.",
        "depth": 3,
        "path": "spec.profilingConfig.configMapRef.name",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-configmapref-name"
      },
      {
        "index": 134,
        "text": "      name: \"<string>\" # required",
        "description": "Name of the ConfigMap containing the desired data.",
        "depth": 3,
        "field": "name",
        "path": "spec.profilingConfig.configMapRef.name",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-configmapref-name"
      },
      {
        "index": 135,
        "text": "",
        "depth": 0,
        "detailId": "line-135"
      },
      {
        "index": 136,
        "text": "      # Key in the ConfigMap to select. If not specified, defaults to",
        "description": "Key in the ConfigMap to select. If not specified, defaults to",
        "depth": 3,
        "path": "spec.profilingConfig.configMapRef.key",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-configmapref-key"
      },
      {
        "index": 137,
        "text": "      # \"disagg.yaml\".",
        "description": "\"disagg.yaml\".",
        "depth": 3,
        "path": "spec.profilingConfig.configMapRef.key",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-configmapref-key"
      },
      {
        "index": 138,
        "text": "      # key: \"disagg.yaml\" # default",
        "description": "Key in the ConfigMap to select. If not specified, defaults to \"disagg.yaml\".",
        "depth": 3,
        "field": "key",
        "path": "spec.profilingConfig.configMapRef.key",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-configmapref-key"
      },
      {
        "index": 139,
        "text": "",
        "depth": 0,
        "detailId": "line-139"
      },
      {
        "index": 140,
        "text": "    # NodeSelector is a selector which must match a node's labels for the",
        "description": "NodeSelector is a selector which must match a node's labels for the",
        "depth": 2,
        "path": "spec.profilingConfig.nodeSelector",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-nodeselector"
      },
      {
        "index": 141,
        "text": "    # profiling pod to be scheduled on that node. For example, to schedule on",
        "description": "profiling pod to be scheduled on that node. For example, to schedule on",
        "depth": 2,
        "path": "spec.profilingConfig.nodeSelector",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-nodeselector"
      },
      {
        "index": 142,
        "text": "    # ARM64 nodes, use {\"kubernetes.io/arch\": \"arm64\"}.",
        "description": "ARM64 nodes, use {\"kubernetes.io/arch\": \"arm64\"}.",
        "depth": 2,
        "path": "spec.profilingConfig.nodeSelector",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-nodeselector"
      },
      {
        "index": 143,
        "text": "    # nodeSelector:",
        "description": "NodeSelector is a selector which must match a node's labels for the profiling pod to be scheduled on that node.\nFor example, to schedule on ARM64 nodes, use {\"kubernetes.io/arch\": \"arm64\"}.",
        "depth": 2,
        "field": "nodeSelector",
        "path": "spec.profilingConfig.nodeSelector",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-nodeselector"
      },
      {
        "index": 144,
        "text": "      # <key>: \"<string>\"",
        "depth": 3,
        "field": "<key>",
        "path": "spec.profilingConfig.nodeSelector.<key>",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-nodeselector-key"
      },
      {
        "index": 145,
        "text": "",
        "depth": 0,
        "detailId": "line-145"
      },
      {
        "index": 146,
        "text": "    # OutputPVC is an optional PersistentVolumeClaim name for storing profiling",
        "description": "OutputPVC is an optional PersistentVolumeClaim name for storing profiling",
        "depth": 2,
        "path": "spec.profilingConfig.outputPVC",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-outputpvc"
      },
      {
        "index": 147,
        "text": "    # output. If specified, all profiling artifacts (logs, plots, configs, raw",
        "description": "output. If specified, all profiling artifacts (logs, plots, configs, raw",
        "depth": 2,
        "path": "spec.profilingConfig.outputPVC",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-outputpvc"
      },
      {
        "index": 148,
        "text": "    # data) will be written to this PVC instead of an ephemeral emptyDir volume.",
        "description": "data) will be written to this PVC instead of an ephemeral emptyDir volume.",
        "depth": 2,
        "path": "spec.profilingConfig.outputPVC",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-outputpvc"
      },
      {
        "index": 149,
        "text": "    # This allows users to access complete profiling results after the job",
        "description": "This allows users to access complete profiling results after the job",
        "depth": 2,
        "path": "spec.profilingConfig.outputPVC",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-outputpvc"
      },
      {
        "index": 150,
        "text": "    # completes by mounting the PVC. The PVC must exist in the same namespace as",
        "description": "completes by mounting the PVC. The PVC must exist in the same namespace as",
        "depth": 2,
        "path": "spec.profilingConfig.outputPVC",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-outputpvc"
      },
      {
        "index": 151,
        "text": "    # the DGDR. If not specified, profiling uses emptyDir and only essential",
        "description": "the DGDR. If not specified, profiling uses emptyDir and only essential",
        "depth": 2,
        "path": "spec.profilingConfig.outputPVC",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-outputpvc"
      },
      {
        "index": 152,
        "text": "    # data is saved to ConfigMaps. Note: ConfigMaps are still created regardless",
        "description": "data is saved to ConfigMaps. Note: ConfigMaps are still created regardless",
        "depth": 2,
        "path": "spec.profilingConfig.outputPVC",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-outputpvc"
      },
      {
        "index": 153,
        "text": "    # of this setting for planner integration.",
        "description": "of this setting for planner integration.",
        "depth": 2,
        "path": "spec.profilingConfig.outputPVC",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-outputpvc"
      },
      {
        "index": 154,
        "text": "    # outputPVC: \"<string>\"",
        "description": "OutputPVC is an optional PersistentVolumeClaim name for storing profiling output.\nIf specified, all profiling artifacts (logs, plots, configs, raw data) will be written\nto this PVC instead of an ephemeral emptyDir volume. This allows users to access\ncomplete profiling results after the job completes by mounting the PVC.\nThe PVC must exist in the same namespace as the DGDR.\nIf not specified, profiling uses emptyDir and only essential data is saved to ConfigMaps.\nNote: ConfigMaps are still created regardless of this setting for planner integration.",
        "depth": 2,
        "field": "outputPVC",
        "path": "spec.profilingConfig.outputPVC",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-outputpvc"
      },
      {
        "index": 155,
        "text": "",
        "depth": 0,
        "detailId": "line-155"
      },
      {
        "index": 156,
        "text": "    # Resources specifies the compute resource requirements for the profiling",
        "description": "Resources specifies the compute resource requirements for the profiling",
        "depth": 2,
        "path": "spec.profilingConfig.resources",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources"
      },
      {
        "index": 157,
        "text": "    # job container. If not specified, no resource requests or limits are set.",
        "description": "job container. If not specified, no resource requests or limits are set.",
        "depth": 2,
        "path": "spec.profilingConfig.resources",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources"
      },
      {
        "index": 158,
        "text": "    resources: # optional",
        "description": "Resources specifies the compute resource requirements for the profiling job container.\nIf not specified, no resource requests or limits are set.",
        "depth": 2,
        "field": "resources",
        "path": "spec.profilingConfig.resources",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources"
      },
      {
        "index": 159,
        "text": "      # Claims lists the names of resources, defined in spec.resourceClaims,",
        "description": "Claims lists the names of resources, defined in spec.resourceClaims,",
        "depth": 3,
        "path": "spec.profilingConfig.resources.claims",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-claims"
      },
      {
        "index": 160,
        "text": "      # that are used by this container.",
        "description": "that are used by this container.",
        "depth": 3,
        "path": "spec.profilingConfig.resources.claims",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-claims"
      },
      {
        "index": 161,
        "text": "      #",
        "depth": 3,
        "path": "spec.profilingConfig.resources.claims",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-claims"
      },
      {
        "index": 162,
        "text": "      # This field depends on the DynamicResourceAllocation feature gate.",
        "description": "This field depends on the DynamicResourceAllocation feature gate.",
        "depth": 3,
        "path": "spec.profilingConfig.resources.claims",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-claims"
      },
      {
        "index": 163,
        "text": "      #",
        "depth": 3,
        "path": "spec.profilingConfig.resources.claims",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-claims"
      },
      {
        "index": 164,
        "text": "      # This field is immutable. It can only be set for containers.",
        "description": "This field is immutable. It can only be set for containers.",
        "depth": 3,
        "path": "spec.profilingConfig.resources.claims",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-claims"
      },
      {
        "index": 165,
        "text": "      claims: # optional, listType: map, listMapKeys: name",
        "description": "Claims lists the names of resources, defined in spec.resourceClaims,\nthat are used by this container.\n\nThis field depends on the\nDynamicResourceAllocation feature gate.\n\nThis field is immutable. It can only be set for containers.",
        "depth": 3,
        "field": "claims",
        "path": "spec.profilingConfig.resources.claims",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-claims"
      },
      {
        "index": 170,
        "text": "",
        "depth": 0,
        "detailId": "line-170"
      },
      {
        "index": 175,
        "text": "",
        "depth": 0,
        "detailId": "line-175"
      },
      {
        "index": 176,
        "text": "      # Limits describes the maximum amount of compute resources allowed. More",
        "description": "Limits describes the maximum amount of compute resources allowed. More",
        "depth": 3,
        "path": "spec.profilingConfig.resources.limits",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-limits"
      },
      {
        "index": 177,
        "text": "      # info:",
        "description": "info:",
        "depth": 3,
        "path": "spec.profilingConfig.resources.limits",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-limits"
      },
      {
        "index": 178,
        "text": "      # https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
        "description": "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
        "depth": 3,
        "path": "spec.profilingConfig.resources.limits",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-limits"
      },
      {
        "index": 179,
        "text": "      # limits:",
        "description": "Limits describes the maximum amount of compute resources allowed.\nMore info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
        "depth": 3,
        "field": "limits",
        "path": "spec.profilingConfig.resources.limits",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-limits"
      },
      {
        "index": 181,
        "text": "",
        "depth": 0,
        "detailId": "line-181"
      },
      {
        "index": 182,
        "text": "      # Requests describes the minimum amount of compute resources required. If",
        "description": "Requests describes the minimum amount of compute resources required. If",
        "depth": 3,
        "path": "spec.profilingConfig.resources.requests",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-requests"
      },
      {
        "index": 183,
        "text": "      # Requests is omitted for a container, it defaults to Limits if that is",
        "description": "Requests is omitted for a container, it defaults to Limits if that is",
        "depth": 3,
        "path": "spec.profilingConfig.resources.requests",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-requests"
      },
      {
        "index": 184,
        "text": "      # explicitly specified, otherwise to an implementation-defined value.",
        "description": "explicitly specified, otherwise to an implementation-defined value.",
        "depth": 3,
        "path": "spec.profilingConfig.resources.requests",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-requests"
      },
      {
        "index": 185,
        "text": "      # Requests cannot exceed Limits. More info:",
        "description": "Requests cannot exceed Limits. More info:",
        "depth": 3,
        "path": "spec.profilingConfig.resources.requests",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-requests"
      },
      {
        "index": 186,
        "text": "      # https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
        "description": "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
        "depth": 3,
        "path": "spec.profilingConfig.resources.requests",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-requests"
      },
      {
        "index": 187,
        "text": "      # requests:",
        "description": "Requests describes the minimum amount of compute resources required.\nIf Requests is omitted for a container, it defaults to Limits if that is explicitly specified,\notherwise to an implementation-defined value. Requests cannot exceed Limits.\nMore info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
        "depth": 3,
        "field": "requests",
        "path": "spec.profilingConfig.resources.requests",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-requests"
      },
      {
        "index": 189,
        "text": "",
        "depth": 0,
        "detailId": "line-189"
      },
      {
        "index": 190,
        "text": "    # Tolerations allows the profiling job to be scheduled on nodes with",
        "description": "Tolerations allows the profiling job to be scheduled on nodes with",
        "depth": 2,
        "path": "spec.profilingConfig.tolerations",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-tolerations"
      },
      {
        "index": 191,
        "text": "    # matching taints. For example, to schedule on GPU nodes, add a toleration",
        "description": "matching taints. For example, to schedule on GPU nodes, add a toleration",
        "depth": 2,
        "path": "spec.profilingConfig.tolerations",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-tolerations"
      },
      {
        "index": 192,
        "text": "    # for the nvidia.com/gpu taint.",
        "description": "for the nvidia.com/gpu taint.",
        "depth": 2,
        "path": "spec.profilingConfig.tolerations",
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-tolerations"
      },
      {
        "index": 193,
        "text": "    # tolerations:",
        "description": "Tolerations allows the profiling job to be scheduled on nodes with matching taints.\nFor example, to schedule on GPU nodes, add a toleration for the nvidia.com/gpu taint.",
        "depth": 2,
        "field": "tolerations",
        "path": "spec.profilingConfig.tolerations",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-profilingconfig-tolerations"
      },
      {
        "index": 198,
        "text": "",
        "depth": 0,
        "detailId": "line-198"
      },
      {
        "index": 203,
        "text": "",
        "depth": 0,
        "detailId": "line-203"
      },
      {
        "index": 209,
        "text": "",
        "depth": 0,
        "detailId": "line-209"
      },
      {
        "index": 216,
        "text": "",
        "depth": 0,
        "detailId": "line-216"
      },
      {
        "index": 220,
        "text": "",
        "depth": 0,
        "detailId": "line-220"
      },
      {
        "index": 221,
        "text": "  # AutoApply indicates whether to automatically create a DynamoGraphDeployment",
        "description": "AutoApply indicates whether to automatically create a DynamoGraphDeployment",
        "depth": 1,
        "path": "spec.autoApply",
        "detailId": "field-nvidia-com-v1alpha1-spec-autoapply"
      },
      {
        "index": 222,
        "text": "  # after profiling completes. If false, only the spec is generated and stored",
        "description": "after profiling completes. If false, only the spec is generated and stored",
        "depth": 1,
        "path": "spec.autoApply",
        "detailId": "field-nvidia-com-v1alpha1-spec-autoapply"
      },
      {
        "index": 223,
        "text": "  # in status. Users can then manually create a DGD using the generated spec.",
        "description": "in status. Users can then manually create a DGD using the generated spec.",
        "depth": 1,
        "path": "spec.autoApply",
        "detailId": "field-nvidia-com-v1alpha1-spec-autoapply"
      },
      {
        "index": 224,
        "text": "  # autoApply: false # default",
        "description": "AutoApply indicates whether to automatically create a DynamoGraphDeployment\nafter profiling completes. If false, only the spec is generated and stored in status.\nUsers can then manually create a DGD using the generated spec.",
        "depth": 1,
        "field": "autoApply",
        "path": "spec.autoApply",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-autoapply"
      },
      {
        "index": 225,
        "text": "",
        "depth": 0,
        "detailId": "line-225"
      },
      {
        "index": 226,
        "text": "  # DeploymentOverrides allows customizing metadata for the auto-created DGD.",
        "description": "DeploymentOverrides allows customizing metadata for the auto-created DGD.",
        "depth": 1,
        "path": "spec.deploymentOverrides",
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides"
      },
      {
        "index": 227,
        "text": "  # Only applicable when AutoApply is true.",
        "description": "Only applicable when AutoApply is true.",
        "depth": 1,
        "path": "spec.deploymentOverrides",
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides"
      },
      {
        "index": 228,
        "text": "  # deploymentOverrides:",
        "description": "DeploymentOverrides allows customizing metadata for the auto-created DGD.\nOnly applicable when AutoApply is true.",
        "depth": 1,
        "field": "deploymentOverrides",
        "path": "spec.deploymentOverrides",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides"
      },
      {
        "index": 229,
        "text": "    # Annotations are additional annotations to add to the DynamoGraphDeployment",
        "description": "Annotations are additional annotations to add to the DynamoGraphDeployment",
        "depth": 2,
        "path": "spec.deploymentOverrides.annotations",
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-annotations"
      },
      {
        "index": 230,
        "text": "    # metadata.",
        "description": "metadata.",
        "depth": 2,
        "path": "spec.deploymentOverrides.annotations",
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-annotations"
      },
      {
        "index": 231,
        "text": "    # annotations:",
        "description": "Annotations are additional annotations to add to the DynamoGraphDeployment metadata.",
        "depth": 2,
        "field": "annotations",
        "path": "spec.deploymentOverrides.annotations",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-annotations"
      },
      {
        "index": 232,
        "text": "      # <key>: \"<string>\"",
        "depth": 3,
        "field": "<key>",
        "path": "spec.deploymentOverrides.annotations.<key>",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-annotations-key"
      },
      {
        "index": 233,
        "text": "",
        "depth": 0,
        "detailId": "line-233"
      },
      {
        "index": 234,
        "text": "    # Labels are additional labels to add to the DynamoGraphDeployment metadata.",
        "description": "Labels are additional labels to add to the DynamoGraphDeployment metadata.",
        "depth": 2,
        "path": "spec.deploymentOverrides.labels",
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-labels"
      },
      {
        "index": 235,
        "text": "    # These are merged with auto-generated labels from the profiling process.",
        "description": "These are merged with auto-generated labels from the profiling process.",
        "depth": 2,
        "path": "spec.deploymentOverrides.labels",
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-labels"
      },
      {
        "index": 236,
        "text": "    # labels:",
        "description": "Labels are additional labels to add to the DynamoGraphDeployment metadata.\nThese are merged with auto-generated labels from the profiling process.",
        "depth": 2,
        "field": "labels",
        "path": "spec.deploymentOverrides.labels",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-labels"
      },
      {
        "index": 237,
        "text": "      # <key>: \"<string>\"",
        "depth": 3,
        "field": "<key>",
        "path": "spec.deploymentOverrides.labels.<key>",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-labels-key"
      },
      {
        "index": 238,
        "text": "",
        "depth": 0,
        "detailId": "line-238"
      },
      {
        "index": 239,
        "text": "    # Name is the desired name for the created DynamoGraphDeployment. If not",
        "description": "Name is the desired name for the created DynamoGraphDeployment. If not",
        "depth": 2,
        "path": "spec.deploymentOverrides.name",
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-name"
      },
      {
        "index": 240,
        "text": "    # specified, defaults to the DGDR name.",
        "description": "specified, defaults to the DGDR name.",
        "depth": 2,
        "path": "spec.deploymentOverrides.name",
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-name"
      },
      {
        "index": 241,
        "text": "    # name: \"<string>\"",
        "description": "Name is the desired name for the created DynamoGraphDeployment.\nIf not specified, defaults to the DGDR name.",
        "depth": 2,
        "field": "name",
        "path": "spec.deploymentOverrides.name",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-name"
      },
      {
        "index": 242,
        "text": "",
        "depth": 0,
        "detailId": "line-242"
      },
      {
        "index": 243,
        "text": "    # Namespace is the desired namespace for the created DynamoGraphDeployment.",
        "description": "Namespace is the desired namespace for the created DynamoGraphDeployment.",
        "depth": 2,
        "path": "spec.deploymentOverrides.namespace",
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-namespace"
      },
      {
        "index": 244,
        "text": "    # If not specified, defaults to the DGDR namespace.",
        "description": "If not specified, defaults to the DGDR namespace.",
        "depth": 2,
        "path": "spec.deploymentOverrides.namespace",
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-namespace"
      },
      {
        "index": 245,
        "text": "    # namespace: \"<string>\"",
        "description": "Namespace is the desired namespace for the created DynamoGraphDeployment.\nIf not specified, defaults to the DGDR namespace.",
        "depth": 2,
        "field": "namespace",
        "path": "spec.deploymentOverrides.namespace",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-namespace"
      },
      {
        "index": 246,
        "text": "",
        "depth": 0,
        "detailId": "line-246"
      },
      {
        "index": 247,
        "text": "    # WorkersImage specifies the container image to use for",
        "description": "WorkersImage specifies the container image to use for",
        "depth": 2,
        "path": "spec.deploymentOverrides.workersImage",
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-workersimage"
      },
      {
        "index": 248,
        "text": "    # DynamoGraphDeployment worker components. This image is used for both",
        "description": "DynamoGraphDeployment worker components. This image is used for both",
        "depth": 2,
        "path": "spec.deploymentOverrides.workersImage",
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-workersimage"
      },
      {
        "index": 249,
        "text": "    # temporary DGDs created during online profiling and the final DGD. If",
        "description": "temporary DGDs created during online profiling and the final DGD. If",
        "depth": 2,
        "path": "spec.deploymentOverrides.workersImage",
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-workersimage"
      },
      {
        "index": 250,
        "text": "    # omitted, the image from the base config file (e.g., disagg.yaml) is used.",
        "description": "omitted, the image from the base config file (e.g., disagg.yaml) is used.",
        "depth": 2,
        "path": "spec.deploymentOverrides.workersImage",
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-workersimage"
      },
      {
        "index": 251,
        "text": "    # Example: \"nvcr.io/nvidia/ai-dynamo/vllm-runtime:1.1.1\"",
        "description": "Example: \"nvcr.io/nvidia/ai-dynamo/vllm-runtime:1.1.1\"",
        "depth": 2,
        "path": "spec.deploymentOverrides.workersImage",
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-workersimage"
      },
      {
        "index": 252,
        "text": "    # workersImage: \"<string>\"",
        "description": "WorkersImage specifies the container image to use for DynamoGraphDeployment worker components.\nThis image is used for both temporary DGDs created during online profiling and the final DGD.\nIf omitted, the image from the base config file (e.g., disagg.yaml) is used.\nExample: \"nvcr.io/nvidia/ai-dynamo/vllm-runtime:1.1.1\"",
        "depth": 2,
        "field": "workersImage",
        "path": "spec.deploymentOverrides.workersImage",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-workersimage"
      },
      {
        "index": 253,
        "text": "",
        "depth": 0,
        "detailId": "line-253"
      },
      {
        "index": 254,
        "text": "  # EnableGPUDiscovery controls whether the operator attempts to discover GPU",
        "description": "EnableGPUDiscovery controls whether the operator attempts to discover GPU",
        "depth": 1,
        "path": "spec.enableGpuDiscovery",
        "detailId": "field-nvidia-com-v1alpha1-spec-enablegpudiscovery"
      },
      {
        "index": 255,
        "text": "  # hardware from cluster nodes. DEPRECATED: This field is deprecated and will",
        "description": "hardware from cluster nodes. DEPRECATED: This field is deprecated and will",
        "depth": 1,
        "path": "spec.enableGpuDiscovery",
        "detailId": "field-nvidia-com-v1alpha1-spec-enablegpudiscovery"
      },
      {
        "index": 256,
        "text": "  # be removed in v1beta1. GPU discovery is now always attempted automatically.",
        "description": "be removed in v1beta1. GPU discovery is now always attempted automatically.",
        "depth": 1,
        "path": "spec.enableGpuDiscovery",
        "detailId": "field-nvidia-com-v1alpha1-spec-enablegpudiscovery"
      },
      {
        "index": 257,
        "text": "  # Setting this field has no effect - the operator will always try to discover",
        "description": "Setting this field has no effect - the operator will always try to discover",
        "depth": 1,
        "path": "spec.enableGpuDiscovery",
        "detailId": "field-nvidia-com-v1alpha1-spec-enablegpudiscovery"
      },
      {
        "index": 258,
        "text": "  # GPU hardware when node read permissions are available. If discovery is",
        "description": "GPU hardware when node read permissions are available. If discovery is",
        "depth": 1,
        "path": "spec.enableGpuDiscovery",
        "detailId": "field-nvidia-com-v1alpha1-spec-enablegpudiscovery"
      },
      {
        "index": 259,
        "text": "  # unavailable (e.g., namespace-scoped operator without permissions), manual",
        "description": "unavailable (e.g., namespace-scoped operator without permissions), manual",
        "depth": 1,
        "path": "spec.enableGpuDiscovery",
        "detailId": "field-nvidia-com-v1alpha1-spec-enablegpudiscovery"
      },
      {
        "index": 260,
        "text": "  # hardware configuration is required regardless of this setting.",
        "description": "hardware configuration is required regardless of this setting.",
        "depth": 1,
        "path": "spec.enableGpuDiscovery",
        "detailId": "field-nvidia-com-v1alpha1-spec-enablegpudiscovery"
      },
      {
        "index": 261,
        "text": "  # enableGpuDiscovery: true # default",
        "description": "EnableGPUDiscovery controls whether the operator attempts to discover GPU hardware from cluster nodes.\nDEPRECATED: This field is deprecated and will be removed in v1beta1. GPU discovery is now always\nattempted automatically. Setting this field has no effect - the operator will always try to discover\nGPU hardware when node read permissions are available. If discovery is unavailable (e.g., namespace-scoped\noperator without permissions), manual hardware configuration is required regardless of this setting.",
        "depth": 1,
        "field": "enableGpuDiscovery",
        "path": "spec.enableGpuDiscovery",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-enablegpudiscovery"
      },
      {
        "index": 262,
        "text": "",
        "depth": 0,
        "detailId": "line-262"
      },
      {
        "index": 263,
        "text": "  # UseMocker indicates whether to deploy a mocker DynamoGraphDeployment instead",
        "description": "UseMocker indicates whether to deploy a mocker DynamoGraphDeployment instead",
        "depth": 1,
        "path": "spec.useMocker",
        "detailId": "field-nvidia-com-v1alpha1-spec-usemocker"
      },
      {
        "index": 264,
        "text": "  # of a real backend deployment. When true, the deployment uses simulated",
        "description": "of a real backend deployment. When true, the deployment uses simulated",
        "depth": 1,
        "path": "spec.useMocker",
        "detailId": "field-nvidia-com-v1alpha1-spec-usemocker"
      },
      {
        "index": 265,
        "text": "  # engines that don't require GPUs, using the profiling data to simulate",
        "description": "engines that don't require GPUs, using the profiling data to simulate",
        "depth": 1,
        "path": "spec.useMocker",
        "detailId": "field-nvidia-com-v1alpha1-spec-usemocker"
      },
      {
        "index": 266,
        "text": "  # realistic timing behavior. Mocker is available in all backend images and",
        "description": "realistic timing behavior. Mocker is available in all backend images and",
        "depth": 1,
        "path": "spec.useMocker",
        "detailId": "field-nvidia-com-v1alpha1-spec-usemocker"
      },
      {
        "index": 267,
        "text": "  # useful for large-scale experiments. Profiling still runs against the real",
        "description": "useful for large-scale experiments. Profiling still runs against the real",
        "depth": 1,
        "path": "spec.useMocker",
        "detailId": "field-nvidia-com-v1alpha1-spec-usemocker"
      },
      {
        "index": 268,
        "text": "  # backend (specified above) to collect performance data.",
        "description": "backend (specified above) to collect performance data.",
        "depth": 1,
        "path": "spec.useMocker",
        "detailId": "field-nvidia-com-v1alpha1-spec-usemocker"
      },
      {
        "index": 269,
        "text": "  # useMocker: false # default",
        "description": "UseMocker indicates whether to deploy a mocker DynamoGraphDeployment instead of\na real backend deployment. When true, the deployment uses simulated engines that\ndon't require GPUs, using the profiling data to simulate realistic timing behavior.\nMocker is available in all backend images and useful for large-scale experiments.\nProfiling still runs against the real backend (specified above) to collect performance data.",
        "depth": 1,
        "field": "useMocker",
        "path": "spec.useMocker",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-spec-usemocker"
      },
      {
        "index": 270,
        "text": "",
        "depth": 0,
        "detailId": "line-270"
      },
      {
        "index": 271,
        "text": "# Status reflects the current observed state of this deployment request.",
        "description": "Status reflects the current observed state of this deployment request.",
        "depth": 0,
        "path": "status",
        "detailId": "field-nvidia-com-v1alpha1-status"
      },
      {
        "index": 272,
        "text": "status: # optional",
        "description": "Status reflects the current observed state of this deployment request.",
        "depth": 0,
        "field": "status",
        "path": "status",
        "code": true,
        "foldable": true,
        "collapsed": true,
        "detailId": "field-nvidia-com-v1alpha1-status"
      },
      {
        "index": 273,
        "text": "  # State is a high-level textual status of the deployment request lifecycle.",
        "description": "State is a high-level textual status of the deployment request lifecycle.",
        "depth": 1,
        "path": "status.state",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-state"
      },
      {
        "index": 274,
        "text": "  state: \"Initializing\" # default, required, enum: \"Pending\" | \"Profiling\" |",
        "description": "State is a high-level textual status of the deployment request lifecycle.",
        "depth": 1,
        "field": "state",
        "path": "status.state",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-state"
      },
      {
        "index": 275,
        "text": "                        # \"Deploying\" | \"Ready\" | \"DeploymentDeleted\" | \"Failed\"",
        "description": "State is a high-level textual status of the deployment request lifecycle.",
        "depth": 1,
        "path": "status.state",
        "metadata": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-state"
      },
      {
        "index": 276,
        "text": "",
        "depth": 0,
        "detailId": "line-276"
      },
      {
        "index": 277,
        "text": "  # Backend is extracted from profilingConfig.config.engine.backend for display",
        "description": "Backend is extracted from profilingConfig.config.engine.backend for display",
        "depth": 1,
        "path": "status.backend",
        "detailId": "field-nvidia-com-v1alpha1-status-backend"
      },
      {
        "index": 278,
        "text": "  # purposes. This field is populated by the controller and shown in kubectl",
        "description": "purposes. This field is populated by the controller and shown in kubectl",
        "depth": 1,
        "path": "status.backend",
        "detailId": "field-nvidia-com-v1alpha1-status-backend"
      },
      {
        "index": 279,
        "text": "  # output.",
        "description": "output.",
        "depth": 1,
        "path": "status.backend",
        "detailId": "field-nvidia-com-v1alpha1-status-backend"
      },
      {
        "index": 280,
        "text": "  # backend: \"<string>\"",
        "description": "Backend is extracted from profilingConfig.config.engine.backend for display purposes.\nThis field is populated by the controller and shown in kubectl output.",
        "depth": 1,
        "field": "backend",
        "path": "status.backend",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-backend"
      },
      {
        "index": 281,
        "text": "",
        "depth": 0,
        "detailId": "line-281"
      },
      {
        "index": 282,
        "text": "  # Conditions contains the latest observed conditions of the deployment",
        "description": "Conditions contains the latest observed conditions of the deployment",
        "depth": 1,
        "path": "status.conditions",
        "detailId": "field-nvidia-com-v1alpha1-status-conditions"
      },
      {
        "index": 283,
        "text": "  # request. Standard condition types include: Validation, Profiling,",
        "description": "request. Standard condition types include: Validation, Profiling,",
        "depth": 1,
        "path": "status.conditions",
        "detailId": "field-nvidia-com-v1alpha1-status-conditions"
      },
      {
        "index": 284,
        "text": "  # SpecGenerated, DeploymentReady. Conditions are merged by type on patch",
        "description": "SpecGenerated, DeploymentReady. Conditions are merged by type on patch",
        "depth": 1,
        "path": "status.conditions",
        "detailId": "field-nvidia-com-v1alpha1-status-conditions"
      },
      {
        "index": 285,
        "text": "  # updates.",
        "description": "updates.",
        "depth": 1,
        "path": "status.conditions",
        "detailId": "field-nvidia-com-v1alpha1-status-conditions"
      },
      {
        "index": 286,
        "text": "  conditions: # optional",
        "description": "Conditions contains the latest observed conditions of the deployment request.\nStandard condition types include: Validation, Profiling, SpecGenerated, DeploymentReady.\nConditions are merged by type on patch updates.",
        "depth": 1,
        "field": "conditions",
        "path": "status.conditions",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions"
      },
      {
        "index": 287,
        "text": "    - # lastTransitionTime is the last time the condition transitioned from one",
        "description": "lastTransitionTime is the last time the condition transitioned from one",
        "depth": 3,
        "path": "status.conditions[].lastTransitionTime",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-lasttransitiontime"
      },
      {
        "index": 288,
        "text": "      # status to another. This should be when the underlying condition changed.",
        "description": "status to another. This should be when the underlying condition changed.",
        "depth": 3,
        "path": "status.conditions[].lastTransitionTime",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-lasttransitiontime"
      },
      {
        "index": 289,
        "text": "      # If that is not known, then using the time when the API field changed is",
        "description": "If that is not known, then using the time when the API field changed is",
        "depth": 3,
        "path": "status.conditions[].lastTransitionTime",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-lasttransitiontime"
      },
      {
        "index": 290,
        "text": "      # acceptable.",
        "description": "acceptable.",
        "depth": 3,
        "path": "status.conditions[].lastTransitionTime",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-lasttransitiontime"
      },
      {
        "index": 291,
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
        "index": 292,
        "text": "",
        "depth": 0,
        "detailId": "line-292"
      },
      {
        "index": 293,
        "text": "      # message is a human readable message indicating details about the",
        "description": "message is a human readable message indicating details about the",
        "depth": 3,
        "path": "status.conditions[].message",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-message"
      },
      {
        "index": 294,
        "text": "      # transition. This may be an empty string.",
        "description": "transition. This may be an empty string.",
        "depth": 3,
        "path": "status.conditions[].message",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-message"
      },
      {
        "index": 295,
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
        "index": 296,
        "text": "",
        "depth": 0,
        "detailId": "line-296"
      },
      {
        "index": 297,
        "text": "      # reason contains a programmatic identifier indicating the reason for the",
        "description": "reason contains a programmatic identifier indicating the reason for the",
        "depth": 3,
        "path": "status.conditions[].reason",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-reason"
      },
      {
        "index": 298,
        "text": "      # condition's last transition. Producers of specific condition types may",
        "description": "condition's last transition. Producers of specific condition types may",
        "depth": 3,
        "path": "status.conditions[].reason",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-reason"
      },
      {
        "index": 299,
        "text": "      # define expected values and meanings for this field, and whether the",
        "description": "define expected values and meanings for this field, and whether the",
        "depth": 3,
        "path": "status.conditions[].reason",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-reason"
      },
      {
        "index": 300,
        "text": "      # values are considered a guaranteed API. The value should be a CamelCase",
        "description": "values are considered a guaranteed API. The value should be a CamelCase",
        "depth": 3,
        "path": "status.conditions[].reason",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-reason"
      },
      {
        "index": 301,
        "text": "      # string. This field may not be empty.",
        "description": "string. This field may not be empty.",
        "depth": 3,
        "path": "status.conditions[].reason",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-reason"
      },
      {
        "index": 302,
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
        "index": 303,
        "text": "",
        "depth": 0,
        "detailId": "line-303"
      },
      {
        "index": 304,
        "text": "      # status of the condition, one of True, False, Unknown.",
        "description": "status of the condition, one of True, False, Unknown.",
        "depth": 3,
        "path": "status.conditions[].status",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-status"
      },
      {
        "index": 305,
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
        "index": 306,
        "text": "",
        "depth": 0,
        "detailId": "line-306"
      },
      {
        "index": 307,
        "text": "      # type of condition in CamelCase or in foo.example.com/CamelCase.",
        "description": "type of condition in CamelCase or in foo.example.com/CamelCase.",
        "depth": 3,
        "path": "status.conditions[].type",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-type"
      },
      {
        "index": 308,
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
        "index": 309,
        "text": "",
        "depth": 0,
        "detailId": "line-309"
      },
      {
        "index": 310,
        "text": "      # observedGeneration represents the .metadata.generation that the",
        "description": "observedGeneration represents the .metadata.generation that the",
        "depth": 3,
        "path": "status.conditions[].observedGeneration",
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-observedgeneration"
      },
      {
        "index": 311,
        "text": "      # condition was set based upon. For instance, if .metadata.generation is",
        "description": "condition was set based upon. For instance, if .metadata.generation is",
        "depth": 3,
        "path": "status.conditions[].observedGeneration",
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-observedgeneration"
      },
      {
        "index": 312,
        "text": "      # currently 12, but the .status.conditions[x].observedGeneration is 9, the",
        "description": "currently 12, but the .status.conditions[x].observedGeneration is 9, the",
        "depth": 3,
        "path": "status.conditions[].observedGeneration",
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-observedgeneration"
      },
      {
        "index": 313,
        "text": "      # condition is out of date with respect to the current state of the",
        "description": "condition is out of date with respect to the current state of the",
        "depth": 3,
        "path": "status.conditions[].observedGeneration",
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-observedgeneration"
      },
      {
        "index": 314,
        "text": "      # instance.",
        "description": "instance.",
        "depth": 3,
        "path": "status.conditions[].observedGeneration",
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-observedgeneration"
      },
      {
        "index": 315,
        "text": "      # observedGeneration: <int64> # minimum: 0",
        "description": "observedGeneration represents the .metadata.generation that the condition was set based upon.\nFor instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date\nwith respect to the current state of the instance.",
        "depth": 3,
        "field": "observedGeneration",
        "path": "status.conditions[].observedGeneration",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-conditions-observedgeneration"
      },
      {
        "index": 316,
        "text": "",
        "depth": 0,
        "detailId": "line-316"
      },
      {
        "index": 317,
        "text": "  # Deployment tracks the auto-created DGD when AutoApply is true. Contains",
        "description": "Deployment tracks the auto-created DGD when AutoApply is true. Contains",
        "depth": 1,
        "path": "status.deployment",
        "detailId": "field-nvidia-com-v1alpha1-status-deployment"
      },
      {
        "index": 318,
        "text": "  # name, namespace, state, and creation status of the managed DGD.",
        "description": "name, namespace, state, and creation status of the managed DGD.",
        "depth": 1,
        "path": "status.deployment",
        "detailId": "field-nvidia-com-v1alpha1-status-deployment"
      },
      {
        "index": 319,
        "text": "  deployment: # optional",
        "description": "Deployment tracks the auto-created DGD when AutoApply is true.\nContains name, namespace, state, and creation status of the managed DGD.",
        "depth": 1,
        "field": "deployment",
        "path": "status.deployment",
        "code": true,
        "foldable": true,
        "detailId": "field-nvidia-com-v1alpha1-status-deployment"
      },
      {
        "index": 320,
        "text": "    # State is the current state of the DynamoGraphDeployment. This value is",
        "description": "State is the current state of the DynamoGraphDeployment. This value is",
        "depth": 2,
        "path": "status.deployment.state",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-deployment-state"
      },
      {
        "index": 321,
        "text": "    # mirrored from the DGD's status.state field.",
        "description": "mirrored from the DGD's status.state field.",
        "depth": 2,
        "path": "status.deployment.state",
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-deployment-state"
      },
      {
        "index": 322,
        "text": "    state: \"initializing\" # default, required, enum: \"pending\" | \"successful\" |",
        "description": "State is the current state of the DynamoGraphDeployment.\nThis value is mirrored from the DGD's status.state field.",
        "depth": 2,
        "field": "state",
        "path": "status.deployment.state",
        "code": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-deployment-state"
      },
      {
        "index": 323,
        "text": "                          # \"failed\"",
        "description": "State is the current state of the DynamoGraphDeployment.\nThis value is mirrored from the DGD's status.state field.",
        "depth": 2,
        "path": "status.deployment.state",
        "metadata": true,
        "required": true,
        "detailId": "field-nvidia-com-v1alpha1-status-deployment-state"
      },
      {
        "index": 324,
        "text": "",
        "depth": 0,
        "detailId": "line-324"
      },
      {
        "index": 325,
        "text": "    # Created indicates whether the DGD has been successfully created. Used to",
        "description": "Created indicates whether the DGD has been successfully created. Used to",
        "depth": 2,
        "path": "status.deployment.created",
        "detailId": "field-nvidia-com-v1alpha1-status-deployment-created"
      },
      {
        "index": 326,
        "text": "    # prevent recreation if the DGD is manually deleted by users.",
        "description": "prevent recreation if the DGD is manually deleted by users.",
        "depth": 2,
        "path": "status.deployment.created",
        "detailId": "field-nvidia-com-v1alpha1-status-deployment-created"
      },
      {
        "index": 327,
        "text": "    # created: <boolean>",
        "description": "Created indicates whether the DGD has been successfully created.\nUsed to prevent recreation if the DGD is manually deleted by users.",
        "depth": 2,
        "field": "created",
        "path": "status.deployment.created",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-deployment-created"
      },
      {
        "index": 328,
        "text": "",
        "depth": 0,
        "detailId": "line-328"
      },
      {
        "index": 329,
        "text": "    # Name is the name of the created DynamoGraphDeployment.",
        "description": "Name is the name of the created DynamoGraphDeployment.",
        "depth": 2,
        "path": "status.deployment.name",
        "detailId": "field-nvidia-com-v1alpha1-status-deployment-name"
      },
      {
        "index": 330,
        "text": "    # name: \"<string>\"",
        "description": "Name is the name of the created DynamoGraphDeployment.",
        "depth": 2,
        "field": "name",
        "path": "status.deployment.name",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-deployment-name"
      },
      {
        "index": 331,
        "text": "",
        "depth": 0,
        "detailId": "line-331"
      },
      {
        "index": 332,
        "text": "    # Namespace is the namespace of the created DynamoGraphDeployment.",
        "description": "Namespace is the namespace of the created DynamoGraphDeployment.",
        "depth": 2,
        "path": "status.deployment.namespace",
        "detailId": "field-nvidia-com-v1alpha1-status-deployment-namespace"
      },
      {
        "index": 333,
        "text": "    # namespace: \"<string>\"",
        "description": "Namespace is the namespace of the created DynamoGraphDeployment.",
        "depth": 2,
        "field": "namespace",
        "path": "status.deployment.namespace",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-deployment-namespace"
      },
      {
        "index": 334,
        "text": "",
        "depth": 0,
        "detailId": "line-334"
      },
      {
        "index": 335,
        "text": "  # GeneratedDeployment contains the full generated DynamoGraphDeployment",
        "description": "GeneratedDeployment contains the full generated DynamoGraphDeployment",
        "depth": 1,
        "path": "status.generatedDeployment",
        "detailId": "field-nvidia-com-v1alpha1-status-generateddeployment"
      },
      {
        "index": 336,
        "text": "  # specification including metadata, based on profiling results. Users can",
        "description": "specification including metadata, based on profiling results. Users can",
        "depth": 1,
        "path": "status.generatedDeployment",
        "detailId": "field-nvidia-com-v1alpha1-status-generateddeployment"
      },
      {
        "index": 337,
        "text": "  # extract this to create a DGD manually, or it's used automatically when",
        "description": "extract this to create a DGD manually, or it's used automatically when",
        "depth": 1,
        "path": "status.generatedDeployment",
        "detailId": "field-nvidia-com-v1alpha1-status-generateddeployment"
      },
      {
        "index": 338,
        "text": "  # autoApply is true. Stored as RawExtension to preserve all fields including",
        "description": "autoApply is true. Stored as RawExtension to preserve all fields including",
        "depth": 1,
        "path": "status.generatedDeployment",
        "detailId": "field-nvidia-com-v1alpha1-status-generateddeployment"
      },
      {
        "index": 339,
        "text": "  # metadata. For mocker backends, this contains the mocker DGD spec.",
        "description": "metadata. For mocker backends, this contains the mocker DGD spec.",
        "depth": 1,
        "path": "status.generatedDeployment",
        "detailId": "field-nvidia-com-v1alpha1-status-generateddeployment"
      },
      {
        "index": 340,
        "text": "  # generatedDeployment: {} # preserveUnknownFields, embeddedResource",
        "description": "GeneratedDeployment contains the full generated DynamoGraphDeployment specification\nincluding metadata, based on profiling results. Users can extract this to create\na DGD manually, or it's used automatically when autoApply is true.\nStored as RawExtension to preserve all fields including metadata.\nFor mocker backends, this contains the mocker DGD spec.",
        "depth": 1,
        "field": "generatedDeployment",
        "path": "status.generatedDeployment",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-generateddeployment"
      },
      {
        "index": 341,
        "text": "",
        "depth": 0,
        "detailId": "line-341"
      },
      {
        "index": 342,
        "text": "  # ObservedGeneration reflects the generation of the most recently observed",
        "description": "ObservedGeneration reflects the generation of the most recently observed",
        "depth": 1,
        "path": "status.observedGeneration",
        "detailId": "field-nvidia-com-v1alpha1-status-observedgeneration"
      },
      {
        "index": 343,
        "text": "  # spec. Used to detect spec changes and enforce immutability after profiling",
        "description": "spec. Used to detect spec changes and enforce immutability after profiling",
        "depth": 1,
        "path": "status.observedGeneration",
        "detailId": "field-nvidia-com-v1alpha1-status-observedgeneration"
      },
      {
        "index": 344,
        "text": "  # starts.",
        "description": "starts.",
        "depth": 1,
        "path": "status.observedGeneration",
        "detailId": "field-nvidia-com-v1alpha1-status-observedgeneration"
      },
      {
        "index": 345,
        "text": "  # observedGeneration: <int64>",
        "description": "ObservedGeneration reflects the generation of the most recently observed spec.\nUsed to detect spec changes and enforce immutability after profiling starts.",
        "depth": 1,
        "field": "observedGeneration",
        "path": "status.observedGeneration",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-observedgeneration"
      },
      {
        "index": 346,
        "text": "",
        "depth": 0,
        "detailId": "line-346"
      },
      {
        "index": 347,
        "text": "  # ProfilingResults contains a reference to the ConfigMap holding profiling",
        "description": "ProfilingResults contains a reference to the ConfigMap holding profiling",
        "depth": 1,
        "path": "status.profilingResults",
        "detailId": "field-nvidia-com-v1alpha1-status-profilingresults"
      },
      {
        "index": 348,
        "text": "  # data. Format: \"configmap/\\<name\\>\"",
        "description": "data. Format: \"configmap/\\<name\\>\"",
        "depth": 1,
        "path": "status.profilingResults",
        "detailId": "field-nvidia-com-v1alpha1-status-profilingresults"
      },
      {
        "index": 349,
        "text": "  # profilingResults: \"<string>\"",
        "description": "ProfilingResults contains a reference to the ConfigMap holding profiling data.\nFormat: \"configmap/\\<name\\>\"",
        "depth": 1,
        "field": "profilingResults",
        "path": "status.profilingResults",
        "code": true,
        "detailId": "field-nvidia-com-v1alpha1-status-profilingresults"
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
        "description": "Spec defines the desired state for this deployment request.",
        "metadata": [
          "requiredFields: backend, model, profilingConfig"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-autoapply",
        "path": "spec.autoApply",
        "type": "boolean",
        "required": false,
        "description": "AutoApply indicates whether to automatically create a DynamoGraphDeployment\nafter profiling completes. If false, only the spec is generated and stored in status.\nUsers can then manually create a DGD using the generated spec.",
        "metadata": [
          "default: false"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-backend",
        "path": "spec.backend",
        "type": "string",
        "required": true,
        "description": "Backend specifies the inference backend for profiling.\nThe controller automatically sets this value in profilingConfig.config.engine.backend.\nProfiling runs on real GPUs or via AIC simulation to collect performance data.",
        "metadata": [
          "enum: \"auto\" | \"vllm\" | \"sglang\" | \"trtllm\""
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-deploymentoverrides",
        "path": "spec.deploymentOverrides",
        "type": "object",
        "required": false,
        "description": "DeploymentOverrides allows customizing metadata for the auto-created DGD.\nOnly applicable when AutoApply is true."
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-annotations",
        "path": "spec.deploymentOverrides.annotations",
        "type": "object",
        "required": false,
        "description": "Annotations are additional annotations to add to the DynamoGraphDeployment metadata."
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-annotations-key",
        "path": "spec.deploymentOverrides.annotations.<key>",
        "type": "string",
        "required": false
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-labels",
        "path": "spec.deploymentOverrides.labels",
        "type": "object",
        "required": false,
        "description": "Labels are additional labels to add to the DynamoGraphDeployment metadata.\nThese are merged with auto-generated labels from the profiling process."
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-labels-key",
        "path": "spec.deploymentOverrides.labels.<key>",
        "type": "string",
        "required": false
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-name",
        "path": "spec.deploymentOverrides.name",
        "type": "string",
        "required": false,
        "description": "Name is the desired name for the created DynamoGraphDeployment.\nIf not specified, defaults to the DGDR name."
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-namespace",
        "path": "spec.deploymentOverrides.namespace",
        "type": "string",
        "required": false,
        "description": "Namespace is the desired namespace for the created DynamoGraphDeployment.\nIf not specified, defaults to the DGDR namespace."
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-deploymentoverrides-workersimage",
        "path": "spec.deploymentOverrides.workersImage",
        "type": "string",
        "required": false,
        "description": "WorkersImage specifies the container image to use for DynamoGraphDeployment worker components.\nThis image is used for both temporary DGDs created during online profiling and the final DGD.\nIf omitted, the image from the base config file (e.g., disagg.yaml) is used.\nExample: \"nvcr.io/nvidia/ai-dynamo/vllm-runtime:1.1.1\""
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-enablegpudiscovery",
        "path": "spec.enableGpuDiscovery",
        "type": "boolean",
        "required": false,
        "description": "EnableGPUDiscovery controls whether the operator attempts to discover GPU hardware from cluster nodes.\nDEPRECATED: This field is deprecated and will be removed in v1beta1. GPU discovery is now always\nattempted automatically. Setting this field has no effect - the operator will always try to discover\nGPU hardware when node read permissions are available. If discovery is unavailable (e.g., namespace-scoped\noperator without permissions), manual hardware configuration is required regardless of this setting.",
        "metadata": [
          "default: true"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-model",
        "path": "spec.model",
        "type": "string",
        "required": true,
        "description": "Model specifies the model to deploy (e.g., \"Qwen/Qwen3-0.6B\", \"meta-llama/Llama-3-70b\").\nThis is a high-level identifier for easy reference in kubectl output and logs.\nThe controller automatically sets this value in profilingConfig.config.deployment.model."
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-profilingconfig",
        "path": "spec.profilingConfig",
        "type": "object",
        "required": true,
        "description": "ProfilingConfig provides the complete configuration for the profiling job.\nNote: GPU discovery is automatically attempted to detect GPU resources from Kubernetes\ncluster nodes. If the operator has node read permissions (cluster-wide or explicitly granted),\ndiscovered GPU configuration is used as defaults when hardware configuration is not manually\nspecified (minNumGpusPerEngine, maxNumGpusPerEngine, numGpusPerNode). User-specified values\nalways take precedence over auto-discovered values. If GPU discovery fails (e.g.,\nnamespace-restricted operator without node permissions), manual hardware config is required.\nThis configuration is passed directly to the profiler.\nThe structure matches the profile_sla config format exactly (see ProfilingConfigSpec for schema).\nNote: deployment.model and engine.backend are automatically set from the high-level\nmodelName and backend fields and should not be specified in this config.",
        "metadata": [
          "requiredFields: profilerImage"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-profilingconfig-config",
        "path": "spec.profilingConfig.config",
        "type": "object",
        "required": false,
        "description": "Config is the profiling configuration as arbitrary JSON/YAML. This will be passed directly to the profiler.\nThe profiler will validate the configuration and report any errors.",
        "metadata": [
          "x-kubernetes-preserve-unknown-fields"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-profilingconfig-configmapref",
        "path": "spec.profilingConfig.configMapRef",
        "type": "object",
        "required": false,
        "description": "ConfigMapRef is an optional reference to a ConfigMap containing the DynamoGraphDeployment\nbase config file (disagg.yaml). This is separate from the profiling config above.\nThe path to this config will be set as engine.config in the profiling config.",
        "metadata": [
          "requiredFields: name"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-profilingconfig-configmapref-key",
        "path": "spec.profilingConfig.configMapRef.key",
        "type": "string",
        "required": false,
        "description": "Key in the ConfigMap to select. If not specified, defaults to \"disagg.yaml\".",
        "metadata": [
          "default: \"disagg.yaml\""
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-profilingconfig-configmapref-name",
        "path": "spec.profilingConfig.configMapRef.name",
        "type": "string",
        "required": true,
        "description": "Name of the ConfigMap containing the desired data."
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-profilingconfig-nodeselector",
        "path": "spec.profilingConfig.nodeSelector",
        "type": "object",
        "required": false,
        "description": "NodeSelector is a selector which must match a node's labels for the profiling pod to be scheduled on that node.\nFor example, to schedule on ARM64 nodes, use {\"kubernetes.io/arch\": \"arm64\"}."
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-profilingconfig-nodeselector-key",
        "path": "spec.profilingConfig.nodeSelector.<key>",
        "type": "string",
        "required": false
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-profilingconfig-outputpvc",
        "path": "spec.profilingConfig.outputPVC",
        "type": "string",
        "required": false,
        "description": "OutputPVC is an optional PersistentVolumeClaim name for storing profiling output.\nIf specified, all profiling artifacts (logs, plots, configs, raw data) will be written\nto this PVC instead of an ephemeral emptyDir volume. This allows users to access\ncomplete profiling results after the job completes by mounting the PVC.\nThe PVC must exist in the same namespace as the DGDR.\nIf not specified, profiling uses emptyDir and only essential data is saved to ConfigMaps.\nNote: ConfigMaps are still created regardless of this setting for planner integration."
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-profilingconfig-profilerimage",
        "path": "spec.profilingConfig.profilerImage",
        "type": "string",
        "required": true,
        "description": "ProfilerImage specifies the container image to use for profiling jobs.\nThis image contains the profiler code and dependencies needed for SLA-based profiling.\nExample: \"nvcr.io/nvidia/ai-dynamo/vllm-runtime:1.1.1\""
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources",
        "path": "spec.profilingConfig.resources",
        "type": "object",
        "required": false,
        "description": "Resources specifies the compute resource requirements for the profiling job container.\nIf not specified, no resource requests or limits are set."
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-claims",
        "path": "spec.profilingConfig.resources.claims",
        "type": "array<object>",
        "required": false,
        "description": "Claims lists the names of resources, defined in spec.resourceClaims,\nthat are used by this container.\n\nThis field depends on the\nDynamicResourceAllocation feature gate.\n\nThis field is immutable. It can only be set for containers.",
        "metadata": [
          "x-kubernetes-list-type: map",
          "x-kubernetes-list-map-keys: name"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-limits",
        "path": "spec.profilingConfig.resources.limits",
        "type": "object",
        "required": false,
        "description": "Limits describes the maximum amount of compute resources allowed.\nMore info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-profilingconfig-resources-requests",
        "path": "spec.profilingConfig.resources.requests",
        "type": "object",
        "required": false,
        "description": "Requests describes the minimum amount of compute resources required.\nIf Requests is omitted for a container, it defaults to Limits if that is explicitly specified,\notherwise to an implementation-defined value. Requests cannot exceed Limits.\nMore info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-profilingconfig-tolerations",
        "path": "spec.profilingConfig.tolerations",
        "type": "array<object>",
        "required": false,
        "description": "Tolerations allows the profiling job to be scheduled on nodes with matching taints.\nFor example, to schedule on GPU nodes, add a toleration for the nvidia.com/gpu taint."
      },
      {
        "id": "field-nvidia-com-v1alpha1-spec-usemocker",
        "path": "spec.useMocker",
        "type": "boolean",
        "required": false,
        "description": "UseMocker indicates whether to deploy a mocker DynamoGraphDeployment instead of\na real backend deployment. When true, the deployment uses simulated engines that\ndon't require GPUs, using the profiling data to simulate realistic timing behavior.\nMocker is available in all backend images and useful for large-scale experiments.\nProfiling still runs against the real backend (specified above) to collect performance data.",
        "metadata": [
          "default: false"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-status",
        "path": "status",
        "type": "object",
        "required": false,
        "description": "Status reflects the current observed state of this deployment request.",
        "metadata": [
          "requiredFields: state"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-backend",
        "path": "status.backend",
        "type": "string",
        "required": false,
        "description": "Backend is extracted from profilingConfig.config.engine.backend for display purposes.\nThis field is populated by the controller and shown in kubectl output."
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-conditions",
        "path": "status.conditions",
        "type": "array<object>",
        "required": false,
        "description": "Conditions contains the latest observed conditions of the deployment request.\nStandard condition types include: Validation, Profiling, SpecGenerated, DeploymentReady.\nConditions are merged by type on patch updates."
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
        "id": "field-nvidia-com-v1alpha1-status-deployment",
        "path": "status.deployment",
        "type": "object",
        "required": false,
        "description": "Deployment tracks the auto-created DGD when AutoApply is true.\nContains name, namespace, state, and creation status of the managed DGD.",
        "metadata": [
          "requiredFields: state"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-deployment-created",
        "path": "status.deployment.created",
        "type": "boolean",
        "required": false,
        "description": "Created indicates whether the DGD has been successfully created.\nUsed to prevent recreation if the DGD is manually deleted by users."
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-deployment-name",
        "path": "status.deployment.name",
        "type": "string",
        "required": false,
        "description": "Name is the name of the created DynamoGraphDeployment."
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-deployment-namespace",
        "path": "status.deployment.namespace",
        "type": "string",
        "required": false,
        "description": "Namespace is the namespace of the created DynamoGraphDeployment."
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-deployment-state",
        "path": "status.deployment.state",
        "type": "string",
        "required": true,
        "description": "State is the current state of the DynamoGraphDeployment.\nThis value is mirrored from the DGD's status.state field.",
        "metadata": [
          "default: \"initializing\"",
          "enum: \"initializing\" | \"pending\" | \"successful\" | \"failed\""
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-generateddeployment",
        "path": "status.generatedDeployment",
        "type": "object",
        "required": false,
        "description": "GeneratedDeployment contains the full generated DynamoGraphDeployment specification\nincluding metadata, based on profiling results. Users can extract this to create\na DGD manually, or it's used automatically when autoApply is true.\nStored as RawExtension to preserve all fields including metadata.\nFor mocker backends, this contains the mocker DGD spec.",
        "metadata": [
          "x-kubernetes-preserve-unknown-fields",
          "x-kubernetes-embedded-resource"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-observedgeneration",
        "path": "status.observedGeneration",
        "type": "integer/int64",
        "required": false,
        "description": "ObservedGeneration reflects the generation of the most recently observed spec.\nUsed to detect spec changes and enforce immutability after profiling starts.",
        "metadata": [
          "format: int64"
        ]
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-profilingresults",
        "path": "status.profilingResults",
        "type": "string",
        "required": false,
        "description": "ProfilingResults contains a reference to the ConfigMap holding profiling data.\nFormat: \"configmap/\\<name\\>\""
      },
      {
        "id": "field-nvidia-com-v1alpha1-status-state",
        "path": "status.state",
        "type": "string",
        "required": true,
        "description": "State is a high-level textual status of the deployment request lifecycle.",
        "metadata": [
          "default: \"Initializing\"",
          "enum: \"Initializing\" | \"Pending\" | \"Profiling\" | \"Deploying\" | \"Ready\" | \"DeploymentDeleted\" | \"Failed\""
        ]
      }
    ],
    "truncated": true,
    "truncationDepth": 3
  }
];

export function DynamoGraphDeploymentRequestSchema0() {
  return <KubeSchemaDoc data={kubectlDocSchemas[0]} filtering={true} />;
}

export function DynamoGraphDeploymentRequestSchema1() {
  return <KubeSchemaDoc data={kubectlDocSchemas[1]} filtering={true} />;
}
