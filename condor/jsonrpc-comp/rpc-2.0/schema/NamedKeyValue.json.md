```json copy 
{
    "description": "A NamedKey value.",
    "type": "object",
    "required": [
        "name",
        "named_key"
    ],
    "properties": {
        "named_key": {
            "description": "The actual `Key` encoded as a CLValue.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CLValue"
                }
            ]
        },
        "name": {
            "description": "The name of the `Key` encoded as a CLValue.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/CLValue"
                }
            ]
        }
    }
} 
``` 
