```json copy 
{
    "description": "An enum specifying who pays for the invocation and execution of the entrypoint.",
    "oneOf": [
        {
            "description": "The caller must cover cost",
            "type": "string",
            "enum": [
                "Caller"
            ]
        },
        {
            "description": "Will cover cost to execute self but not cost of any subsequent invoked contracts",
            "type": "string",
            "enum": [
                "SelfOnly"
            ]
        },
        {
            "description": "will cover cost to execute self and the cost of any subsequent invoked contracts",
            "type": "string",
            "enum": [
                "SelfOnward"
            ]
        }
    ]
} 
``` 
