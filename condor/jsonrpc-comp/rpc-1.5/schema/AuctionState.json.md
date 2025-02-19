```json copy 
{
    "description": "Data structure summarizing auction contract data.",
    "type": "object",
    "required": [
        "bids",
        "block_height",
        "era_validators",
        "state_root_hash"
    ],
    "properties": {
        "state_root_hash": {
            "description": "Global state hash.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Digest"
                }
            ]
        },
        "block_height": {
            "description": "Block height.",
            "type": "integer",
            "format": "uint64",
            "minimum": 0
        },
        "era_validators": {
            "description": "Era validators.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/JsonEraValidators"
            }
        },
        "bids": {
            "description": "All bids contained within a vector.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/JsonBids"
            }
        }
    },
    "additionalProperties": false
} 
``` 
