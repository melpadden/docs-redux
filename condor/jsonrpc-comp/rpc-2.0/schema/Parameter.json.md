```json copy 
{
    "description": "Parameter to a method",
    "type": "object",
    "required": [
        "cl_type",
        "name"
    ],
    "properties": {
        "name": {
            "type": "string"
        },
        "cl_type": {
            "$ref": "#/components/schemas/CLType"
        }
    }
} 
``` 
