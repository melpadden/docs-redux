```json copy 
{
    "description": "The versioned result of executing a single deploy.",
    "oneOf": [
        {
            "description": "Version 1 of execution result type.",
            "type": "object",
            "required": [
                "Version1"
            ],
            "properties": {
                "Version1": {
                    "$ref": "#/components/schemas/ExecutionResultV1"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Version 2 of execution result type.",
            "type": "object",
            "required": [
                "Version2"
            ],
            "properties": {
                "Version2": {
                    "$ref": "#/components/schemas/ExecutionResultV2"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
