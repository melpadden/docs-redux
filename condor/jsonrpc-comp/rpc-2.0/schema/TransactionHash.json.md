```json copy 
{
    "description": "A versioned wrapper for a transaction hash or deploy hash.",
    "oneOf": [
        {
            "description": "A deploy hash.",
            "type": "object",
            "required": [
                "Deploy"
            ],
            "properties": {
                "Deploy": {
                    "$ref": "#/components/schemas/DeployHash"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "A version 1 transaction hash.",
            "type": "object",
            "required": [
                "Version1"
            ],
            "properties": {
                "Version1": {
                    "$ref": "#/components/schemas/TransactionV1Hash"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
