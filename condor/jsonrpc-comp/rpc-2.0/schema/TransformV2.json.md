```json copy 
{
    "description": "A transformation performed while executing a deploy.",
    "type": "object",
    "required": [
        "key",
        "kind"
    ],
    "properties": {
        "key": {
            "$ref": "#/components/schemas/Key"
        },
        "kind": {
            "$ref": "#/components/schemas/TransformKindV2"
        }
    },
    "additionalProperties": false
} 
``` 
