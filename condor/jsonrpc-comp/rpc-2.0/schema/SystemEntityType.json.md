```json copy 
{
    "description": "System contract types.\n\nUsed by converting to a `u32` and passing as the `system_contract_index` argument of `ext_ffi::casper_get_system_contract()`.",
    "oneOf": [
        {
            "description": "Mint contract.",
            "type": "string",
            "enum": [
                "Mint"
            ]
        },
        {
            "description": "Handle Payment contract.",
            "type": "string",
            "enum": [
                "HandlePayment"
            ]
        },
        {
            "description": "Standard Payment contract.",
            "type": "string",
            "enum": [
                "StandardPayment"
            ]
        },
        {
            "description": "Auction contract.",
            "type": "string",
            "enum": [
                "Auction"
            ]
        }
    ]
} 
``` 
