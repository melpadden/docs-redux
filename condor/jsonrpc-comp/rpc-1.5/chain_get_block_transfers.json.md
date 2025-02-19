```json copy 
{
  "name": "chain_get_block_transfers",
  "summary": "returns all transfers for a Block from the network",
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
    "name": "chain_get_block_transfers_result",
    "schema": {
      "description": "Result for \"chain_get_block_transfers\" RPC response.",
      "type": "object",
      "required": [
        "api_version"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "block_hash": {
          "description": "The block hash, if found.",
          "anyOf": [
            {
              "$ref": "#/components/schemas/BlockHash"
            },
            {
              "type": "null"
            }
          ]
        },
        "transfers": {
          "description": "The block's transfers, if found.",
          "type": [
            "array",
            "null"
          ],
          "items": {
            "$ref": "#/components/schemas/Transfer"
          }
        }
      },
      "additionalProperties": false
    }
  },
  "examples": [
    {
      "name": "chain_get_block_transfers_example",
      "params": [
        {
          "name": "block_identifier",
          "value": {
            "Hash": "13c2d7a68ecdd4b74bf4393c88915c836c863fc4bf11d7f2bd930a1bbccacdcb"
          }
        }
      ],
      "result": {
        "name": "chain_get_block_transfers_example_result",
        "value": {
          "api_version": "1.5.6",
          "block_hash": "13c2d7a68ecdd4b74bf4393c88915c836c863fc4bf11d7f2bd930a1bbccacdcb",
          "transfers": [
            {
              "deploy_hash": "0000000000000000000000000000000000000000000000000000000000000000",
              "from": "account-hash-0000000000000000000000000000000000000000000000000000000000000000",
              "to": null,
              "source": "uref-0000000000000000000000000000000000000000000000000000000000000000-000",
              "target": "uref-0000000000000000000000000000000000000000000000000000000000000000-000",
              "amount": "0",
              "gas": "0",
              "id": null
            }
          ]
        }
      }
    }
  ]
}
 
``` 
