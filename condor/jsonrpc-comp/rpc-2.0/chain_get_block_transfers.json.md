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
            "Hash": "0707070707070707070707070707070707070707070707070707070707070707"
          }
        }
      ],
      "result": {
        "name": "chain_get_block_transfers_example_result",
        "value": {
          "api_version": "2.0.0",
          "block_hash": "0707070707070707070707070707070707070707070707070707070707070707",
          "transfers": [
            {
              "Version2": {
                "transaction_hash": {
                  "Version1": "0101010101010101010101010101010101010101010101010101010101010101"
                },
                "from": {
                  "AccountHash": "account-hash-0202020202020202020202020202020202020202020202020202020202020202"
                },
                "to": "account-hash-0303030303030303030303030303030303030303030303030303030303030303",
                "source": "uref-0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a-007",
                "target": "uref-1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b-000",
                "amount": "1000000000000",
                "gas": "2500000000",
                "id": 999
              }
            }
          ]
        }
      }
    }
  ]
}
 
``` 
