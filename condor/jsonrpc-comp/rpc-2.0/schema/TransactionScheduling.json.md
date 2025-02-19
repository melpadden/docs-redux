```json copy 
{
    "description": "Scheduling mode of a Transaction.",
    "oneOf": [
        {
            "description": "No special scheduling applied.",
            "type": "string",
            "enum": [
                "Standard"
            ]
        },
        {
            "description": "Execution should be scheduled for the specified era.",
            "type": "object",
            "required": [
                "FutureEra"
            ],
            "properties": {
                "FutureEra": {
                    "$ref": "#/components/schemas/EraId"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Execution should be scheduled for the specified timestamp or later.",
            "type": "object",
            "required": [
                "FutureTimestamp"
            ],
            "properties": {
                "FutureTimestamp": {
                    "$ref": "#/components/schemas/Timestamp"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
