```json copy 
{
    "description": "Thresholds that have to be met when executing an action of a certain type.",
    "type": "object",
    "required": [
        "deployment",
        "key_management"
    ],
    "properties": {
        "deployment": {
            "type": "integer",
            "format": "uint8",
            "minimum": 0
        },
        "key_management": {
            "type": "integer",
            "format": "uint8",
            "minimum": 0
        }
    },
    "additionalProperties": false
} 
``` 
