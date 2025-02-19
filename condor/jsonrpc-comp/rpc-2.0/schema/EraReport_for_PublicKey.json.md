```json copy 
{
    "description": "Equivocation, reward and validator inactivity information.",
    "type": "object",
    "required": [
        "equivocators",
        "inactive_validators",
        "rewards"
    ],
    "properties": {
        "equivocators": {
            "description": "The set of equivocators.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/PublicKey"
            }
        },
        "rewards": {
            "description": "Rewards for finalization of earlier blocks.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Array_of_EraReward"
                }
            ]
        },
        "inactive_validators": {
            "description": "Validators that haven't produced any unit during the era.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/PublicKey"
            }
        }
    }
} 
``` 
