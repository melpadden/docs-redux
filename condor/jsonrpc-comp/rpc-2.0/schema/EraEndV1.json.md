```json copy 
{
    "description": "Information related to the end of an era, and validator weights for the following era.",
    "type": "object",
    "required": [
        "era_report",
        "next_era_validator_weights"
    ],
    "properties": {
        "era_report": {
            "description": "Equivocation, reward and validator inactivity information.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EraReport_for_PublicKey"
                }
            ]
        },
        "next_era_validator_weights": {
            "description": "The validators for the upcoming era and their respective weights.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Array_of_ValidatorWeight"
                }
            ]
        }
    }
} 
``` 
