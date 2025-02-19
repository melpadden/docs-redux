```json copy 
{
    "description": "Context of method execution\n\nMost significant bit represents version i.e. - 0b0 -> 0.x/1.x (session & contracts) - 0b1 -> 2.x and later (introduced installer, utility entry points)",
    "oneOf": [
        {
            "description": "Runs using the calling entity's context. In v1.x this was used for both \"session\" code run using the originating Account's context, and also for \"StoredSession\" code that ran in the caller's context. While this made systemic sense due to the way the runtime context nesting works, this dual usage was very confusing to most human beings.\n\nIn v2.x the renamed Caller variant is exclusively used for wasm run using the initiating account entity's context. Previously installed 1.x stored session code should continue to work as the binary value matches but we no longer allow such logic to be upgraded, nor do we allow new stored session to be installed.",
            "type": "string",
            "enum": [
                "Caller"
            ]
        },
        {
            "description": "Runs using the called entity's context.",
            "type": "string",
            "enum": [
                "Called"
            ]
        },
        {
            "description": "Extract a subset of bytecode and installs it as a new smart contract. Runs using the called entity's context.",
            "type": "string",
            "enum": [
                "Factory"
            ]
        }
    ]
} 
``` 
