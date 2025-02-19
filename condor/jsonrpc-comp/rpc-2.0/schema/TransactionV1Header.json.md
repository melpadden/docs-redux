```json copy 
{
    "description": "The header portion of a TransactionV1.",
    "type": "object",
    "required": [
        "body_hash",
        "chain_name",
        "initiator_addr",
        "pricing_mode",
        "timestamp",
        "ttl"
    ],
    "properties": {
        "chain_name": {
            "type": "string"
        },
        "timestamp": {
            "$ref": "#/components/schemas/Timestamp"
        },
        "ttl": {
            "$ref": "#/components/schemas/TimeDiff"
        },
        "body_hash": {
            "$ref": "#/components/schemas/Digest"
        },
        "pricing_mode": {
            "$ref": "#/components/schemas/PricingMode"
        },
        "initiator_addr": {
            "$ref": "#/components/schemas/InitiatorAddr"
        }
    },
    "additionalProperties": false
} 
``` 
