```json copy 
{
    "description": "The type of operation performed while executing a deploy.",
    "oneOf": [
        {
            "description": "A read operation.",
            "type": "string",
            "enum": [
                "Read"
            ]
        },
        {
            "description": "A write operation.",
            "type": "string",
            "enum": [
                "Write"
            ]
        },
        {
            "description": "An addition.",
            "type": "string",
            "enum": [
                "Add"
            ]
        },
        {
            "description": "An operation which has no effect.",
            "type": "string",
            "enum": [
                "NoOp"
            ]
        },
        {
            "description": "A prune operation.",
            "type": "string",
            "enum": [
                "Prune"
            ]
        }
    ]
} 
``` 
