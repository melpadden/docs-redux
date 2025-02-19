```json copy 
{
    "description": "Structure representing a user's account, stored in global state.",
    "type": "object",
    "required": [
        "account_hash",
        "action_thresholds",
        "associated_keys",
        "main_purse",
        "named_keys"
    ],
    "properties": {
        "account_hash": {
            "$ref": "#/components/schemas/AccountHash"
        },
        "named_keys": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/NamedKey"
            }
        },
        "main_purse": {
            "$ref": "#/components/schemas/URef"
        },
        "associated_keys": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/AssociatedKey"
            }
        },
        "action_thresholds": {
            "$ref": "#/components/schemas/ActionThresholds"
        }
    },
    "additionalProperties": false
} 
``` 
