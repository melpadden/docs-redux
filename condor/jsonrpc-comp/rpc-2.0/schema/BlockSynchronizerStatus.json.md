```json copy 
{
    "description": "The status of the block synchronizer.",
    "type": "object",
    "properties": {
        "historical": {
            "description": "The status of syncing a historical block, if any.",
            "anyOf": [
                {
                    "$ref": "#/components/schemas/BlockSyncStatus"
                },
                {
                    "type": "null"
                }
            ]
        },
        "forward": {
            "description": "The status of syncing a forward block, if any.",
            "anyOf": [
                {
                    "$ref": "#/components/schemas/BlockSyncStatus"
                },
                {
                    "type": "null"
                }
            ]
        }
    },
    "additionalProperties": false
} 
``` 
