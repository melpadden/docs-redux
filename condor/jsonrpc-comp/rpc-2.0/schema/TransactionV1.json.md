```json copy 
{
    "description": "A unit of work sent by a client to the network, which when executed can cause global state to be altered.",
    "type": "object",
    "required": [
        "approvals",
        "body",
        "hash",
        "header"
    ],
    "properties": {
        "hash": {
            "$ref": "#/components/schemas/TransactionV1Hash"
        },
        "header": {
            "$ref": "#/components/schemas/TransactionV1Header"
        },
        "body": {
            "$ref": "#/components/schemas/TransactionV1Body"
        },
        "approvals": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/Approval"
            },
            "uniqueItems": true
        }
    },
    "additionalProperties": false
} 
``` 
