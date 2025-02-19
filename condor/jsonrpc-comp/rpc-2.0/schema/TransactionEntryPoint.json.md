```json copy 
{
    "description": "Entry point of a Transaction.",
    "oneOf": [
        {
            "description": "The standard `call` entry point used in session code.",
            "type": "string",
            "enum": [
                "Call"
            ]
        },
        {
            "description": "A non-native, arbitrary entry point.",
            "type": "object",
            "required": [
                "Custom"
            ],
            "properties": {
                "Custom": {
                    "type": "string"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "The `transfer` native entry point, used to transfer `Motes` from a source purse to a target purse.",
            "type": "string",
            "enum": [
                "Transfer"
            ]
        },
        {
            "description": "The `add_bid` native entry point, used to create or top off a bid purse.",
            "type": "string",
            "enum": [
                "AddBid"
            ]
        },
        {
            "description": "The `withdraw_bid` native entry point, used to decrease a stake.",
            "type": "string",
            "enum": [
                "WithdrawBid"
            ]
        },
        {
            "description": "The `delegate` native entry point, used to add a new delegator or increase an existing delegator's stake.",
            "type": "string",
            "enum": [
                "Delegate"
            ]
        },
        {
            "description": "The `undelegate` native entry point, used to reduce a delegator's stake or remove the delegator if the remaining stake is 0.",
            "type": "string",
            "enum": [
                "Undelegate"
            ]
        },
        {
            "description": "The `redelegate` native entry point, used to reduce a delegator's stake or remove the delegator if the remaining stake is 0, and after the unbonding delay, automatically delegate to a new validator.",
            "type": "string",
            "enum": [
                "Redelegate"
            ]
        },
        {
            "description": "The `activate_bid` native entry point, used to used to reactivate an inactive bid.",
            "type": "string",
            "enum": [
                "ActivateBid"
            ]
        },
        {
            "description": "The `change_bid_public_key` native entry point, used to change a bid's public key.",
            "type": "string",
            "enum": [
                "ChangeBidPublicKey"
            ]
        }
    ]
} 
``` 
