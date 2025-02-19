```json copy 
{
    "description": "Serialization and deserialization errors.",
    "oneOf": [
        {
            "description": "Early end of stream while deserializing.",
            "type": "string",
            "enum": [
                "EarlyEndOfStream"
            ]
        },
        {
            "description": "Formatting error while deserializing.",
            "type": "string",
            "enum": [
                "Formatting"
            ]
        },
        {
            "description": "Not all input bytes were consumed in [`deserialize`].",
            "type": "string",
            "enum": [
                "LeftOverBytes"
            ]
        },
        {
            "description": "Out of memory error.",
            "type": "string",
            "enum": [
                "OutOfMemory"
            ]
        },
        {
            "description": "No serialized representation is available for a value.",
            "type": "string",
            "enum": [
                "NotRepresentable"
            ]
        },
        {
            "description": "Exceeded a recursion depth limit.",
            "type": "string",
            "enum": [
                "ExceededRecursionDepth"
            ]
        }
    ]
} 
``` 
