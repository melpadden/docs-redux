```json copy 
{
    "description": "A container for contract's Wasm bytes.",
    "type": "object",
    "required": [
        "bytes",
        "kind"
    ],
    "properties": {
        "kind": {
            "$ref": "#/components/schemas/ByteCodeKind"
        },
        "bytes": {
            "$ref": "#/components/schemas/Bytes"
        }
    }
} 
``` 
