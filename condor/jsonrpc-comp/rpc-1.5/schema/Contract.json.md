```json copy 
{
    "description": "A contract struct that can be serialized as  JSON object.",
    "type": "object",
    "required": [
        "contract_package_hash",
        "contract_wasm_hash",
        "entry_points",
        "named_keys",
        "protocol_version"
    ],
    "properties": {
        "contract_package_hash": {
            "$ref": "#/components/schemas/ContractPackageHash"
        },
        "contract_wasm_hash": {
            "$ref": "#/components/schemas/ContractWasmHash"
        },
        "named_keys": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/NamedKey"
            }
        },
        "entry_points": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/EntryPoint"
            }
        },
        "protocol_version": {
            "type": "string"
        }
    },
    "additionalProperties": false
} 
``` 
