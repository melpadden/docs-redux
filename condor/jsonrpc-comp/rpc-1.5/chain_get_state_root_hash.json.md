```json copy 
{
  "name": "chain_get_state_root_hash",
  "summary": "returns a state root hash at a given Block",
  "params": [
    {
      "name": "block_identifier",
      "schema": {
        "description": "The block hash.",
        "$ref": "#/components/schemas/BlockIdentifier"
      },
      "required": false
    }
  ],
  "result": {
    "name": "chain_get_state_root_hash_result",
    "schema": {
      "description": "Result for \"chain_get_state_root_hash\" RPC response.",
      "type": "object",
      "required": [
        "api_version"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "state_root_hash": {
          "description": "Hex-encoded hash of the state root.",
          "anyOf": [
            {
              "$ref": "#/components/schemas/Digest"
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "examples": [
    {
      "name": "chain_get_state_root_hash_example",
      "params": [
        {
          "name": "block_identifier",
          "value": {
            "Height": 10
          }
        }
      ],
      "result": {
        "name": "chain_get_state_root_hash_example_result",
        "value": {
          "api_version": "1.5.6",
          "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808"
        }
      }
    }
  ]
}
 
``` 
