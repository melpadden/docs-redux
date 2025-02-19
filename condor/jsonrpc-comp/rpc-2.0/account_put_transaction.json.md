```json copy 
{
  "name": "account_put_transaction",
  "summary": "receives a Transaction to be executed by the network",
  "params": [
    {
      "name": "transaction",
      "schema": {
        "description": "The `Transaction`.",
        "$ref": "#/components/schemas/Transaction"
      },
      "required": true
    }
  ],
  "result": {
    "name": "account_put_transaction_result",
    "schema": {
      "description": "Result for \"account_put_transaction\" RPC response.",
      "type": "object",
      "required": [
        "api_version",
        "transaction_hash"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "transaction_hash": {
          "description": "The transaction hash.",
          "$ref": "#/components/schemas/TransactionHash"
        }
      },
      "additionalProperties": false
    }
  },
  "examples": [
    {
      "name": "account_put_transaction_example",
      "params": [
        {
          "name": "transaction",
          "value": {
            "Version1": {
              "hash": "f5582cb81a5abda63ebaa4edb3b05210ecbd63ffb8dd17bfbeb3b867f4014468",
              "header": {
                "chain_name": "casper-example",
                "timestamp": "2020-11-17T00:39:24.072Z",
                "ttl": "1h",
                "body_hash": "aa24833ffbf31d62c8c8c4265349e7c09cd71952fcbce6f7b12daf5e340bf2cc",
                "pricing_mode": {
                  "Fixed": {
                    "gas_price_tolerance": 5
                  }
                },
                "initiator_addr": {
                  "PublicKey": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
                }
              },
              "body": {
                "args": [
                  [
                    "source",
                    {
                      "cl_type": {
                        "Option": "URef"
                      },
                      "bytes": "010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a07",
                      "parsed": "uref-0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a-007"
                    }
                  ],
                  [
                    "target",
                    {
                      "cl_type": "URef",
                      "bytes": "1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b00",
                      "parsed": "uref-1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b-000"
                    }
                  ],
                  [
                    "amount",
                    {
                      "cl_type": "U512",
                      "bytes": "0500ac23fc06",
                      "parsed": "30000000000"
                    }
                  ],
                  [
                    "id",
                    {
                      "cl_type": {
                        "Option": "U64"
                      },
                      "bytes": "01e703000000000000",
                      "parsed": 999
                    }
                  ]
                ],
                "target": "Native",
                "entry_point": "Transfer",
                "transaction_category": 0,
                "scheduling": "Standard"
              },
              "approvals": [
                {
                  "signer": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
                  "signature": "0137d3f468d8f8a6e63f4110d79be29b8c8428e9cd858a92049660e7851ae16a299640d1fc1c930ab6cb424f1a6eec0b194df74bede14f4af1b5133106f1280d0b"
                }
              ]
            }
          }
        }
      ],
      "result": {
        "name": "account_put_transaction_example_result",
        "value": {
          "api_version": "2.0.0",
          "transaction_hash": {
            "Version1": "f5582cb81a5abda63ebaa4edb3b05210ecbd63ffb8dd17bfbeb3b867f4014468"
          }
        }
      }
    }
  ]
}
 
``` 
