```json copy 
{
    "type": "object",
    "required": [
        "entry_point",
        "name"
    ],
    "properties": {
        "name": {
            "type": "string"
        },
        "entry_point": {
            "allOf": [
                {
                    "$ref": "#/components/schemas/EntryPoint"
                }
            ]
        }
    }
} 
``` 
