```json copy 
{
    "description": "A weighted public key.",
    "type": "object",
    "required": [
        "account_hash",
        "weight"
    ],
    "properties": {
        "account_hash": {
            "description": "The account hash of the public key.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/AccountHash"
                }
            ]
        },
        "weight": {
            "description": "The weight assigned to the public key.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/AccountAssociatedKeyWeight"
                }
            ]
        }
    }
} 
``` 
