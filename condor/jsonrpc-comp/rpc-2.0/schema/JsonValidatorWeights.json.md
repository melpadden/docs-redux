```json copy 
{
    "description": "A validator's weight.",
    "type": "object",
    "required": [
        "public_key",
        "weight"
    ],
    "properties": {
        "public_key": {
            "$ref": "#/components/schemas/PublicKey"
        },
        "weight": {
            "$ref": "#/components/schemas/U512"
        }
    },
    "additionalProperties": false
} 
``` 
