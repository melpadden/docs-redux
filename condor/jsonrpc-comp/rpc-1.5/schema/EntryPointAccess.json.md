```json copy 
{
    "description": "Enum describing the possible access control options for a contract entry point (method).",
    "anyOf": [
        {
            "type": "string",
            "enum": [
                "Public"
            ]
        },
        {
            "description": "Only users from the listed groups may call this method. Note: if the list is empty then this method is not callable from outside the contract.",
            "type": "object",
            "required": [
                "Groups"
            ],
            "properties": {
                "Groups": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/Group"
                    }
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
