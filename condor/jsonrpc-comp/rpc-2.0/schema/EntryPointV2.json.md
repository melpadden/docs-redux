```json copy 
{
    "description": "The entry point for the V2 Casper VM.",
    "type": "object",
    "required": [
        "flags",
        "function_index"
    ],
    "properties": {
        "function_index": {
            "description": "The selector.",
            "type": "integer",
            "format": "uint32",
            "minimum": 0
        },
        "flags": {
            "description": "The flags.",
            "type": "integer",
            "format": "uint32",
            "minimum": 0
        }
    }
} 
``` 
