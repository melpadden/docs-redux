```json copy 
{
    "description": "JSON representation of a block header.",
    "type": "object",
    "required": [
        "accumulated_seed",
        "body_hash",
        "era_id",
        "height",
        "parent_hash",
        "protocol_version",
        "random_bit",
        "state_root_hash",
        "timestamp"
    ],
    "properties": {
        "parent_hash": {
            "description": "The parent hash.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BlockHash"
                }
            ]
        },
        "state_root_hash": {
            "description": "The state root hash.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Digest"
                }
            ]
        },
        "body_hash": {
            "description": "The body hash.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Digest"
                }
            ]
        },
        "random_bit": {
            "description": "Randomness bit.",
            "type": "boolean"
        },
        "accumulated_seed": {
            "description": "Accumulated seed.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Digest"
                }
            ]
        },
        "era_end": {
            "description": "The era end.",
            "anyOf": [
                {
                    "$ref": "#/components/schemas/JsonEraEnd"
                },
                {
                    "type": "null"
                }
            ]
        },
        "timestamp": {
            "description": "The block timestamp.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Timestamp"
                }
            ]
        },
        "era_id": {
            "description": "The block era id.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EraId"
                }
            ]
        },
        "height": {
            "description": "The block height.",
            "type": "integer",
            "format": "uint64",
            "minimum": 0
        },
        "protocol_version": {
            "description": "The protocol version.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ProtocolVersion"
                }
            ]
        }
    },
    "additionalProperties": false
} 
``` 
