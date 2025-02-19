```json copy 
{
    "description": "Methods and type signatures supported by a contract.",
    "type": "object",
    "required": [
        "action_thresholds",
        "associated_keys",
        "byte_code_hash",
        "entity_kind",
        "main_purse",
        "message_topics",
        "package_hash",
        "protocol_version"
    ],
    "properties": {
        "protocol_version": {
            "$ref": "#/components/schemas/ProtocolVersion"
        },
        "entity_kind": {
            "$ref": "#/components/schemas/EntityKind"
        },
        "package_hash": {
            "$ref": "#/components/schemas/PackageHash"
        },
        "byte_code_hash": {
            "$ref": "#/components/schemas/ByteCodeHash"
        },
        "main_purse": {
            "$ref": "#/components/schemas/URef"
        },
        "associated_keys": {
            "$ref": "#/components/schemas/EntityAssociatedKeys"
        },
        "action_thresholds": {
            "$ref": "#/components/schemas/EntityActionThresholds"
        },
        "message_topics": {
            "$ref": "#/components/schemas/Array_of_MessageTopic"
        }
    }
} 
``` 
