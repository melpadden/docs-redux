```json copy 
{
    "description": "Identifier for an era.",
    "oneOf": [
        {
            "type": "object",
            "required": [
                "Era"
            ],
            "properties": {
                "Era": {
                    "$ref": "#/components/schemas/EraId"
                }
            },
            "additionalProperties": false
        },
        {
            "type": "object",
            "required": [
                "Block"
            ],
            "properties": {
                "Block": {
                    "$ref": "#/components/schemas/BlockIdentifier"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
