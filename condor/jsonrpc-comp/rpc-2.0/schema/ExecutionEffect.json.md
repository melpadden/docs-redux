```json copy 
{
    "description": "The sequence of execution transforms from a single deploy.",
    "type": "object",
    "required": [
        "operations",
        "transforms"
    ],
    "properties": {
        "operations": {
            "description": "The resulting operations.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/Operation"
            }
        },
        "transforms": {
            "description": "The sequence of execution transforms.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/TransformV1"
            }
        }
    },
    "additionalProperties": false
} 
``` 
