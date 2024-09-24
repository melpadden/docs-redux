"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[33341],{72282:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var t=a(74848),c=a(28453);const r={title:"CEP-78 Contract Details"},d="Querying NFT Contracts",s={id:"resources/tokens/cep78/using-casper-client/querying-NFTs",title:"CEP-78 Contract Details",description:"This document covers different commands to query and interact with an NFT (CEP-78) contract instance.",source:"@site/versioned_docs/version-1.5.X/resources/tokens/cep78/using-casper-client/querying-NFTs.md",sourceDirName:"resources/tokens/cep78/using-casper-client",slug:"/resources/tokens/cep78/using-casper-client/querying-NFTs",permalink:"/docs-redux/1.5.X/resources/tokens/cep78/using-casper-client/querying-NFTs",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{title:"CEP-78 Contract Details"},sidebar:"resources",previous:{title:"Interaction Workflow",permalink:"/docs-redux/1.5.X/resources/tokens/cep78/using-casper-client/interacting-with-NFTs"},next:{title:"Testing NFTs",permalink:"/docs-redux/1.5.X/resources/tokens/cep78/using-casper-client/testing-NFTs"}},o={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Querying the Contract",id:"querying-the-contract",level:2},{value:"Next Steps",id:"next-steps",level:2}];function l(n){const e={a:"a",b:"b",code:"code",details:"details",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",summary:"summary",ul:"ul",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"import useBaseUrl from '@docusaurus/useBaseUrl';"}),"\n",(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"querying-nft-contracts",children:"Querying NFT Contracts"})}),"\n",(0,t.jsx)(e.p,{children:"This document covers different commands to query and interact with an NFT (CEP-78) contract instance."}),"\n",(0,t.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Install the contract using the ",(0,t.jsx)(e.a,{href:"/docs-redux/1.5.X/resources/tokens/cep78/using-casper-client/quickstart-guide",children:"Quickstart"})," or the ",(0,t.jsx)(e.a,{href:"/docs-redux/1.5.X/resources/tokens/cep78/using-casper-client/full-installation-tutorial",children:"Full Installation"})," tutorials"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"querying-the-contract",children:"Querying the Contract"}),"\n",(0,t.jsx)(e.p,{children:"First, identify the contract hash by looking at the account that installed the contract. Under the account's named keys, you will see a named key for the contract hash, representing the stored contract. Copy this value and save it for future queries."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:a(11659).A+"",width:"2186",height:"712"})}),"\n",(0,t.jsx)(e.p,{children:"Next, query the contract details."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"casper-client query-global-state -n http://localhost:11101/rpc/"})}),"\n"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"--key [CONTRACT_HASH]"})}),"\n",(0,t.jsxs)(e.p,{children:["The contract hash, found within the ",(0,t.jsx)(e.code,{children:"NamedKeys"})," of the account that sent the installing deploy."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"--state-root-hash [STATE_ROOT_HASH]"})}),"\n",(0,t.jsxs)(e.p,{children:["The most up-to-date state root hash, which can be found by using the ",(0,t.jsx)(e.code,{children:"get-state-root-hash"})," command in the Casper client."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.details,{children:["\n",(0,t.jsx)(e.summary,{children:(0,t.jsx)(e.b,{children:"Expand to see the query and sample contract"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"casper-client query-global-state -n http://localhost:11101/rpc/ \\\n--key hash-378a43e38bc5129d8aa3bcd04f5c9a97be73f85b5be574182ac1346f04520796 \\\n--state-root-hash 2a8cfc20d24b4bc629ea6d26cc820560a1baf3d4275079d5382242c9fa1e86fe\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": -5355991397545050403,\n  "result": {\n    "api_version": "1.5.6",\n    "block_header": null,\n    "stored_value": {\n      "Contract": {\n        "contract_package_hash": "contract-package-2b61207cd0e94ce1b1d40801b0abb1ab55fd7dae94c9dcf670292243f3791a30",\n        "contract_wasm_hash": "contract-wasm-845d3d08e29642afba35704bcb6e38f3c40f1469763bff7a88674c9a5be3f01b",\n        "named_keys": [\n          {\n            "name": "acl_package_mode",\n            "key": "uref-5e950cdd5497633c1d03284ec6e70ce436744cc172d6e26e21e4e474d1b34312-007"\n          },\n          {\n            "name": "acl_whitelist",\n            "key": "uref-77b5861bdc04f3c63417dd2ed1943f659f6180603982a24587f79cbc38801cf4-007"\n          },\n          {\n            "name": "allow_minting",\n            "key": "uref-dca79aa4244d0123ad52799fc4f922b2ae9fc023c9e56f999979f535a792eef5-007"\n          },\n          {\n            "name": "approved",\n            "key": "uref-76aac8f7224c5c1624b4255fff59ecc8ee2c7a1ba460b4f70945d7548abbffd0-007"\n          },\n          {\n            "name": "balances",\n            "key": "uref-3d271bac2030ddee54bf4ea92b9b854d800a10a0df5d6e328a045be19af27538-007"\n          },\n          {\n            "name": "burn_mode",\n            "key": "uref-eb1a7f69592881587805fde2d53e8e5b3dcbabd81311faa7b9d19ea731f83d9b-007"\n          },\n          {\n            "name": "burnt_tokens",\n            "key": "uref-0c144d231ac070adb2668f2a9f3d0eba32c7468efa879f0f29c832c63698966b-007"\n          },\n          {\n            "name": "cep78_CEP-78-collection2",\n            "key": "uref-ac99c07d666f45ff5c86a2c1bb6cc44b612ddd5d39a9de88045b441ff6e6b327-007"\n          },\n          {\n            "name": "collection_name",\n            "key": "uref-5aed76a73089e7e32f6fbf5d9a9597843215d4810cd5822c0f5c6e65a0bbb7a3-007"\n          },\n          {\n            "name": "collection_symbol",\n            "key": "uref-ba4247cc0354644474758d1292924c5115c61c8012cae3f094a91060d9dff779-007"\n          },\n          {\n            "name": "events_mode",\n            "key": "uref-51acad53fd1a6ce6a52cf83ed7f921565311ed86cd362969bacf9457b6bf5c1a-007"\n          },\n          {\n            "name": "hash_by_index",\n            "key": "uref-e280dd23c847724422543b0d70f1ed4c95c8da9e1a71927ae39add652859775c-007"\n          },\n          {\n            "name": "holder_mode",\n            "key": "uref-8443151d736bb3268815ad7848708d44ccc661799f969697c64b1cddb5ce89a7-007"\n          },\n          {\n            "name": "identifier_mode",\n            "key": "uref-f53ea99b60ae6d046a6fb0d996475714ef03ed33b39674a8fe016c8324116baf-007"\n          },\n          {\n            "name": "index_by_hash",\n            "key": "uref-6299c9322631f374fc1a5e20920641b23f437a3c0ba8da22cc23cba11b0fa3a5-007"\n          },\n          {\n            "name": "installer",\n            "key": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655"\n          },\n          {\n            "name": "json_schema",\n            "key": "uref-772103052d4559fcc2f8f2c2568eb75214462d463009106938e6f20e1cc0a7c0-007"\n          },\n          {\n            "name": "metadata_cep78",\n            "key": "uref-2c2176a9efd465d2e4d5de05d75d029e03040d0a5668c4e08facb0cd3442d30a-007"\n          },\n          {\n            "name": "metadata_custom_validated",\n            "key": "uref-575108b0258e92ebede1e50345b608d42963bdac24379022be20b76cfde15301-007"\n          },\n          {\n            "name": "metadata_mutability",\n            "key": "uref-2ca963a70a69df2db931b8761b4de13bd22e2fc54a415b0b57d4204c9b90dde9-007"\n          },\n          {\n            "name": "metadata_nft721",\n            "key": "uref-eb37c0fe3b53fa5c72b02976f2840b7bf3692954fc830f8a10dc538d0c506e63-007"\n          },\n          {\n            "name": "metadata_raw",\n            "key": "uref-cdb17062423b769a7b0bc18fe0a2202b68d2ba77786291018a24fd53f4532ab8-007"\n          },\n          {\n            "name": "minting_mode",\n            "key": "uref-3b45a30c98d90de2c62812c6689aa2fac0cb4d08772fcfdee0584c5db2b1d12a-007"\n          },\n          {\n            "name": "nft_kind",\n            "key": "uref-e02c29a6120d5da7f14fb664ca60c3ade56a3171a670c292d0a4ea0f9ae4f0c8-007"\n          },\n          {\n            "name": "nft_metadata_kind",\n            "key": "uref-45e1bc671353ae58c41a703055959da243deefc7f4c3f121f3f9828d97475bda-007"\n          },\n          {\n            "name": "nft_metadata_kinds",\n            "key": "uref-05c0eb8e7ef4caa6f228e8ee91874dc64926b95926d839b458fdce356063a817-007"\n          },\n          {\n            "name": "number_of_minted_tokens",\n            "key": "uref-f86e2c4057cc17d93593fb203a923d67e5bc68e6428a6d94f6eab0c35450653d-007"\n          },\n          {\n            "name": "operator_burn_mode",\n            "key": "uref-f226eed9d0c5fcf58e6b481d45417721e35435c2ef5eb4d26d215209149438ba-007"\n          },\n          {\n            "name": "operators",\n            "key": "uref-ff8ad952307b57a051ef6cb597a55cc2007e587c575584addf6a6fc12c0efd7b-007"\n          },\n          {\n            "name": "ownership_mode",\n            "key": "uref-89711af74265427dc65d7c5a421cedde82de69d192cad36f34efa36504108572-007"\n          },\n          {\n            "name": "package_operator_mode",\n            "key": "uref-05c2868f179f6b2323f1d4ea069858956c9666d14073748aae4a748d27a8a894-007"\n          },\n          {\n            "name": "page_table",\n            "key": "uref-00efcfa874a60b5b615b3c6d781cf69c3559b5372d15457fe4a3bb6d07c66acd-007"\n          },\n          {\n            "name": "receipt_name",\n            "key": "uref-1ec63ea6442d9b4ef40d926280f8b72704b763d3ef7cdaccd9ecb04af5562d99-007"\n          },\n          {\n            "name": "reporting_mode",\n            "key": "uref-4d851152d7b89dff805dcf6eb61a33870dab9345084a5874575476a584d71b83-007"\n          },\n          {\n            "name": "rlo_mflag",\n            "key": "uref-2e3b8aafb27aae47c9b7d3728d20d8815b706e2245c23b84f0e712cd1d1e9124-007"\n          },\n          {\n            "name": "token_issuers",\n            "key": "uref-5700d04b36eb1f50204c0d1d05c8ed6aae77eaeaa8a425c78f5a24cbae2e4d26-007"\n          },\n          {\n            "name": "token_owners",\n            "key": "uref-ff53b7094bcb6659b558d31fdf63f837b05c0ee6030bfe18ad4c3fb0462b9b17-007"\n          },\n          {\n            "name": "total_token_supply",\n            "key": "uref-e5f06deadcbfe5a469e7c162346580744746bfdc0ec67002e0ecba5b11096827-007"\n          },\n          {\n            "name": "whitelist_mode",\n            "key": "uref-a77f2ac1f5e72c6b096ca414ae2c986a5387442ddf8e89a35b787a756adc4bb4-007"\n          }\n        ],\n        "entry_points": [\n          {\n            "name": "approve",\n            "args": [\n              {\n                "name": "spender",\n                "cl_type": "Key"\n              }\n            ],\n            "ret": "Unit",\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "balance_of",\n            "args": [\n              {\n                "name": "token_owner",\n                "cl_type": "Key"\n              }\n            ],\n            "ret": "U64",\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "burn",\n            "args": [],\n            "ret": "Unit",\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "get_approved",\n            "args": [],\n            "ret": {\n              "Option": "Key"\n            },\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "init",\n            "args": [\n              {\n                "name": "collection_name",\n                "cl_type": "String"\n              },\n              {\n                "name": "collection_symbol",\n                "cl_type": "String"\n              },\n              {\n                "name": "total_token_supply",\n                "cl_type": "U64"\n              },\n              {\n                "name": "allow_minting",\n                "cl_type": "Bool"\n              },\n              {\n                "name": "minting_mode",\n                "cl_type": "U8"\n              },\n              {\n                "name": "ownership_mode",\n                "cl_type": "U8"\n              },\n              {\n                "name": "nft_kind",\n                "cl_type": "U8"\n              },\n              {\n                "name": "holder_mode",\n                "cl_type": "U8"\n              },\n              {\n                "name": "whitelist_mode",\n                "cl_type": "U8"\n              },\n              {\n                "name": "acl_whitelist",\n                "cl_type": {\n                  "List": "Key"\n                }\n              },\n              {\n                "name": "acl_package_mode",\n                "cl_type": "Bool"\n              },\n              {\n                "name": "package_operator_mode",\n                "cl_type": "Bool"\n              },\n              {\n                "name": "json_schema",\n                "cl_type": "String"\n              },\n              {\n                "name": "receipt_name",\n                "cl_type": "String"\n              },\n              {\n                "name": "identifier_mode",\n                "cl_type": "U8"\n              },\n              {\n                "name": "burn_mode",\n                "cl_type": "U8"\n              },\n              {\n                "name": "operator_burn_mode",\n                "cl_type": "Bool"\n              },\n              {\n                "name": "nft_metadata_kind",\n                "cl_type": "U8"\n              },\n              {\n                "name": "metadata_mutability",\n                "cl_type": "U8"\n              },\n              {\n                "name": "owner_reverse_lookup_mode",\n                "cl_type": "U8"\n              },\n              {\n                "name": "events_mode",\n                "cl_type": "U8"\n              },\n              {\n                "name": "transfer_filter_contract",\n                "cl_type": {\n                  "Option": "Key"\n                }\n              }\n            ],\n            "ret": "Unit",\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "is_approved_for_all",\n            "args": [\n              {\n                "name": "token_owner",\n                "cl_type": "Key"\n              },\n              {\n                "name": "operator",\n                "cl_type": "Key"\n              }\n            ],\n            "ret": "Bool",\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "metadata",\n            "args": [],\n            "ret": "String",\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "migrate",\n            "args": [\n              {\n                "name": "cep78_package_key",\n                "cl_type": "Any"\n              }\n            ],\n            "ret": "Unit",\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "mint",\n            "args": [\n              {\n                "name": "token_owner",\n                "cl_type": "Key"\n              },\n              {\n                "name": "token_meta_data",\n                "cl_type": "String"\n              }\n            ],\n            "ret": {\n              "Tuple3": [\n                "String",\n                "Key",\n                "String"\n              ]\n            },\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "owner_of",\n            "args": [],\n            "ret": "Key",\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "register_owner",\n            "args": [],\n            "ret": {\n              "Tuple2": [\n                "String",\n                "URef"\n              ]\n            },\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "revoke",\n            "args": [],\n            "ret": "Unit",\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "set_approval_for_all",\n            "args": [\n              {\n                "name": "approve_all",\n                "cl_type": "Bool"\n              },\n              {\n                "name": "operator",\n                "cl_type": "Key"\n              }\n            ],\n            "ret": "Unit",\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "set_token_metadata",\n            "args": [\n              {\n                "name": "token_meta_data",\n                "cl_type": "String"\n              }\n            ],\n            "ret": "Unit",\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "set_variables",\n            "args": [\n              {\n                "name": "allow_minting",\n                "cl_type": "Bool"\n              },\n              {\n                "name": "contract_whitelist",\n                "cl_type": {\n                  "List": {\n                    "ByteArray": 32\n                  }\n                }\n              },\n              {\n                "name": "acl_whitelist",\n                "cl_type": {\n                  "List": "Key"\n                }\n              },\n              {\n                "name": "acl_package_mode",\n                "cl_type": "Bool"\n              },\n              {\n                "name": "package_operator_mode",\n                "cl_type": "Bool"\n              },\n              {\n                "name": "operator_burn_mode",\n                "cl_type": "Bool"\n              }\n            ],\n            "ret": "Unit",\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "transfer",\n            "args": [\n              {\n                "name": "source_key",\n                "cl_type": "Key"\n              },\n              {\n                "name": "target_key",\n                "cl_type": "Key"\n              }\n            ],\n            "ret": {\n              "Tuple2": [\n                "String",\n                "Key"\n              ]\n            },\n            "access": "Public",\n            "entry_point_type": "Contract"\n          },\n          {\n            "name": "updated_receipts",\n            "args": [],\n            "ret": {\n              "List": {\n                "Tuple2": [\n                  "String",\n                  "Key"\n                ]\n              }\n            },\n            "access": "Public",\n            "entry_point_type": "Contract"\n          }\n        ],\n        "protocol_version": "1.5.6"\n      }\n    },\n    "merkle_proof": "[33244 hex chars]"\n  }\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Learn to ",(0,t.jsx)(e.a,{href:"/docs-redux/1.5.X/resources/tokens/cep78/using-casper-client/interacting-with-NFTs",children:"Mint, Transfer, and Burn"})," NFT tokens"]}),"\n"]})]})}function f(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},11659:(n,e,a)=>{a.d(e,{A:()=>t});const t=a.p+"assets/images/the-nft-contract-hash-aa17b5fda876c3e0e39d11a605b4ad01.png"},28453:(n,e,a)=>{a.d(e,{R:()=>d,x:()=>s});var t=a(96540);const c={},r=t.createContext(c);function d(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:d(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);