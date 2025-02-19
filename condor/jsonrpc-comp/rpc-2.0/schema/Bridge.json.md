```json copy 
{
    "description": "A bridge record pointing to a new `ValidatorBid` after the public key was changed.",
    "type": "object",
    "required": [
        "era_id",
        "new_validator_public_key",
        "old_validator_public_key"
    ],
    "properties": {
        "old_validator_public_key": {
            "description": "Previous validator public key associated with the bid.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/PublicKey"
                }
            ]
        },
        "new_validator_public_key": {
            "description": "New validator public key associated with the bid.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/PublicKey"
                }
            ]
        },
        "era_id": {
            "description": "Era when bridge record was created.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EraId"
                }
            ]
        }
    },
    "additionalProperties": false
} 
``` 
