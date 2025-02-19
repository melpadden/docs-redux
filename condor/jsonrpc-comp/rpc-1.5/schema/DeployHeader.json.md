```json copy 
{
    "description": "The header portion of a [`Deploy`].",
    "type": "object",
    "required": [
        "account",
        "body_hash",
        "chain_name",
        "dependencies",
        "gas_price",
        "timestamp",
        "ttl"
    ],
    "properties": {
        "account": {
            "$ref": "#/components/schemas/PublicKey"
        },
        "timestamp": {
            "$ref": "#/components/schemas/Timestamp"
        },
        "ttl": {
            "$ref": "#/components/schemas/TimeDiff"
        },
        "gas_price": {
            "type": "integer",
            "format": "uint64",
            "minimum": 0
        },
        "body_hash": {
            "$ref": "#/components/schemas/Digest"
        },
        "dependencies": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/DeployHash"
            }
        },
        "chain_name": {
            "type": "string"
        }
    },
    "additionalProperties": false
} 
``` 
