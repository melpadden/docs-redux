```json copy 
{
    "description": "A Casper value, i.e. a value which can be stored and manipulated by smart contracts.\n\nIt holds the underlying data as a type-erased, serialized `Vec<u8>` and also holds the CLType of the underlying data as a separate member.\n\nThe `parsed` field, representing the original value, is a convenience only available when a CLValue is encoded to JSON, and can always be set to null if preferred.",
    "type": "object",
    "required": [
        "bytes",
        "cl_type"
    ],
    "properties": {
        "cl_type": {
            "$ref": "#/components/schemas/CLType"
        },
        "bytes": {
            "type": "string"
        },
        "parsed": true
    },
    "additionalProperties": false
} 
``` 
