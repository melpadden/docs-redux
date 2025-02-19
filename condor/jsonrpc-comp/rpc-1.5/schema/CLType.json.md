```json copy 
{
    "description": "Casper types, i.e. types which can be stored and manipulated by smart contracts.\n\nProvides a description of the underlying data type of a [`CLValue`](crate::CLValue).",
    "anyOf": [
        {
            "type": "string",
            "enum": [
                "Bool",
                "I32",
                "I64",
                "U8",
                "U32",
                "U64",
                "U128",
                "U256",
                "U512",
                "Unit",
                "String",
                "Key",
                "URef",
                "PublicKey",
                "Any"
            ]
        },
        {
            "description": "`Option` of a `CLType`.",
            "type": "object",
            "required": [
                "Option"
            ],
            "properties": {
                "Option": {
                    "$ref": "#/components/schemas/CLType"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Variable-length list of a single `CLType` (comparable to a `Vec`).",
            "type": "object",
            "required": [
                "List"
            ],
            "properties": {
                "List": {
                    "$ref": "#/components/schemas/CLType"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Fixed-length list of a single `CLType` (comparable to a Rust array).",
            "type": "object",
            "required": [
                "ByteArray"
            ],
            "properties": {
                "ByteArray": {
                    "type": "integer",
                    "format": "uint32",
                    "minimum": 0
                }
            },
            "additionalProperties": false
        },
        {
            "description": "`Result` with `Ok` and `Err` variants of `CLType`s.",
            "type": "object",
            "required": [
                "Result"
            ],
            "properties": {
                "Result": {
                    "type": "object",
                    "required": [
                        "err",
                        "ok"
                    ],
                    "properties": {
                        "ok": {
                            "$ref": "#/components/schemas/CLType"
                        },
                        "err": {
                            "$ref": "#/components/schemas/CLType"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Map with keys of a single `CLType` and values of a single `CLType`.",
            "type": "object",
            "required": [
                "Map"
            ],
            "properties": {
                "Map": {
                    "type": "object",
                    "required": [
                        "key",
                        "value"
                    ],
                    "properties": {
                        "key": {
                            "$ref": "#/components/schemas/CLType"
                        },
                        "value": {
                            "$ref": "#/components/schemas/CLType"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        {
            "description": "1-ary tuple of a `CLType`.",
            "type": "object",
            "required": [
                "Tuple1"
            ],
            "properties": {
                "Tuple1": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CLType"
                    },
                    "maxItems": 1,
                    "minItems": 1
                }
            },
            "additionalProperties": false
        },
        {
            "description": "2-ary tuple of `CLType`s.",
            "type": "object",
            "required": [
                "Tuple2"
            ],
            "properties": {
                "Tuple2": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CLType"
                    },
                    "maxItems": 2,
                    "minItems": 2
                }
            },
            "additionalProperties": false
        },
        {
            "description": "3-ary tuple of `CLType`s.",
            "type": "object",
            "required": [
                "Tuple3"
            ],
            "properties": {
                "Tuple3": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CLType"
                    },
                    "maxItems": 3,
                    "minItems": 3
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
