"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[64097],{85936:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>f,contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>t,toc:()=>i});var c=a(74848),s=a(28453);const r={},d="Direct Token Transfer",t={id:"developers/cli/transfers/direct-token-transfer",title:"Direct Token Transfer",description:"This workflow describes how to use the Casper command-line client to transfer tokens between purses on a Casper network.",source:"@site/versioned_docs/version-1.5.X/developers/cli/transfers/direct-token-transfer.md",sourceDirName:"developers/cli/transfers",slug:"/developers/cli/transfers/direct-token-transfer",permalink:"/1.5.X/developers/cli/transfers/direct-token-transfer",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{},sidebar:"developers",previous:{title:"Transferring Tokens",permalink:"/1.5.X/developers/cli/transfers/"},next:{title:"Transferring Tokens using a Multi-Sig Deploy",permalink:"/1.5.X/developers/cli/transfers/multisig-deploy-transfer"}},f={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Direct Transfer Example",id:"transfer",level:2},{value:"Verifying the Deploy",id:"verify-deploy",level:2},{value:"Verifying the Transfer",id:"verifying-the-transfer",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"direct-token-transfer",children:"Direct Token Transfer"})}),"\n",(0,c.jsx)(n.p,{children:"This workflow describes how to use the Casper command-line client to transfer tokens between purses on a Casper network."}),"\n",(0,c.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,c.jsx)(n.p,{children:"This workflow assumes:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["You meet the general ",(0,c.jsx)(n.a,{href:"/1.5.X/developers/prerequisites",children:"development prerequisites"})]}),"\n",(0,c.jsx)(n.li,{children:"You are using the Casper command-line client"}),"\n",(0,c.jsxs)(n.li,{children:["You have a target ",(0,c.jsx)(n.em,{children:"public key"})]}),"\n",(0,c.jsxs)(n.li,{children:["You have a valid ",(0,c.jsx)(n.em,{children:"node address"})]}),"\n",(0,c.jsxs)(n.li,{children:["You must be able to sign a deploy for the source account using the source ",(0,c.jsx)(n.em,{children:"secret key"})]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"transfer",children:"Direct Transfer Example"}),"\n",(0,c.jsxs)(n.p,{children:["The following ",(0,c.jsx)(n.code,{children:"transfer"})," command allows you to move CSPR from one account's purse to another as denominated in ",(0,c.jsx)(n.a,{href:"/1.5.X/concepts/design/casper-design#tokens-divisibility",children:"Motes"}),". A ",(0,c.jsx)(n.em,{children:"Mote"})," is a denomination of the cryptocurrency CSPR, where 1 CSPR = 1,000,000,000 Motes."]}),"\n",(0,c.jsx)(n.p,{children:"For transfers of at least 2.5 CSPR (2,500,000,000 Motes) from a single sender to a single recipient on a Casper network, the most efficient option is to use the direct transfer capability."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"casper-client transfer \\\n--id <ID> \\\n--transfer-id <TRANSFER_ID> \\\n--node-address [NODE_SERVER_ADDRESS]  \\\n--amount [AMOUNT_TO_TRANSFER] \\\n--secret-key [KEY_PATH]/secret_key.pem \\\n--chain-name [CHAIN_NAME] \\\n--target-account [TARGET_PUBLIC_KEY_HEX] \\\n--payment-amount [PAYMENT_AMOUNT_IN_MOTES]\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Request fields:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"id"})," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"transfer-id"})," -64-BIT INTEGER The ",(0,c.jsx)(n.code,{children:"transfer-id"})," is a memo field, providing additional information about the recipient, which is necessary when transferring tokens to some recipients. For example, if depositing tokens into an account's purse where off-chain management keeps track of individual sub-balances, it is necessary to provide a memo ID uniquely identifying the actual recipient. If this is not necessary for a given recipient, you may pass ",(0,c.jsx)(n.code,{children:"0"})," or some ",(0,c.jsx)(n.code,{children:"u64"})," value that is meaningful to you"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"node-address"})," - Hostname or IP and port of a node on a network bound to a JSON-RPC endpoint [default:<",(0,c.jsx)(n.a,{href:"http://localhost:7777%5C%3E%5C",children:"http://localhost:7777\\>\\"}),"]"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"amount"})," -512-BIT INTEGER The number of motes to transfer (1 CSPR = 1,000,000,000 ",(0,c.jsx)(n.code,{children:"Motes"}),")"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"secret-key"})," - Path to secret key file"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"chain-name"})," - Name of the chain, to avoid the deploy from being accidentally or maliciously included in a different chain"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["The ",(0,c.jsx)(n.em,{children:"chain-name"})," for Testnet is ",(0,c.jsx)(n.strong,{children:"casper-test"})]}),"\n",(0,c.jsxs)(n.li,{children:["The ",(0,c.jsx)(n.em,{children:"chain-name"})," for Mainnet is ",(0,c.jsx)(n.strong,{children:"casper"})]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"target-account"})," - Hex-encoded public key of the account that will receive the funds in its main purse"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"payment-amount"})," - The payment for the transfer in motes. The payment amount varies based on each deploy and network ",(0,c.jsx)(n.a,{href:"/1.5.X/concepts/glossary/C#chainspec",children:"chainspec"}),". For Testnet node version ",(0,c.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml",children:"1.5.1"}),", you can specify 10^8 motes"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Important response fields:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:'"result"."deploy_hash"'})," - The address of the deploy, needed to look up additional information about the transfer"]}),"\n"]}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["Save the returned ",(0,c.jsx)(n.em,{children:"deploy_hash"})," from the output to query information about the transfer deploy later."]})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Example Transfer:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"casper-client transfer -v \\\n--id 3 \\\n--transfer-id 11102023 \\\n--node-address https://rpc.testnet.casperlabs.io/  \\\n--amount 5000000000 \\\n--secret-key ~/KEYS/secret_key.pem \\\n--chain-name casper-test \\\n--target-account 01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986 \\\n--payment-amount 100000000\n"})}),"\n",(0,c.jsxs)(n.details,{children:["\n",(0,c.jsx)(n.summary,{children:"Explore the JSON-RPC request and response generated."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"JSON-RPC Request"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "account_put_deploy",\n  "params": {\n    "deploy": {\n      "hash": "1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c",\n      "header": {\n        "account": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n        "timestamp": "2023-10-12T14:59:40.760Z",\n        "ttl": "30m",\n        "gas_price": 1,\n        "body_hash": "ea7e6a6cbdd4d761827cb627e162896bee3e771beda000550615c9b4fafa3a2d",\n        "dependencies": [],\n        "chain_name": "casper-test"\n      },\n      "payment": {\n        "ModuleBytes": {\n          "module_bytes": "",\n          "args": [\n            [\n              "amount",\n              {\n                "cl_type": "U512",\n                "bytes": "0400e1f505",\n                "parsed": "100000000"\n              }\n            ]\n          ]\n        }\n      },\n      "session": {\n        "Transfer": {\n          "args": [\n            [\n              "amount",\n              {\n                "cl_type": "U512",\n                "bytes": "0500f2052a01",\n                "parsed": "5000000000"\n              }\n            ],\n            [\n              "target",\n              {\n                "cl_type": "PublicKey",\n                "bytes": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986",\n                "parsed": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986"\n              }\n            ],\n            [\n              "id",\n              {\n                "cl_type": {\n                  "Option": "U64"\n                },\n                "bytes": "014767a90000000000",\n                "parsed": 11102023\n              }\n            ]\n          ]\n        }\n      },\n      "approvals": [\n        {\n          "signer": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n          "signature": "01e53cb742ed13ff4f0584a3da0f22f5942a33e010965adf640c91204ae4bc7436f1e5534d338ffa117d193295214816445439781229d24a372085c316eac5e305"\n        }\n      ]\n    }\n  },\n  "id": 3\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"JSON-RPC Response"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 3,\n  "result": {\n    "api_version": "1.5.3",\n    "deploy_hash": "1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c"\n  }\n}\n'})}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"verify-deploy",children:"Verifying the Deploy"}),"\n",(0,c.jsx)(n.p,{children:"A transfer on a Casper network is only executed after it has been included in a finalized block."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy \n--node-address [NODE_SERVER_ADDRESS] [DEPLOY_HASH]\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Important response fields:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:'"result"."execution_results"[0]."transfers[0]"'})," - the address of the executed transfer that the source account initiated. We will use it to look up additional information about the transfer"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:'"result"."execution_results"[0]."block_hash"'})," - contains the block hash of the block that included the transfer. We will require the ",(0,c.jsx)(n.em,{children:"state_root_hash"})," of this block to look up information about the accounts and their purse balances"]}),"\n"]}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["Transfer addresses use a ",(0,c.jsx)(n.code,{children:"transfer-"})," string prefix."]})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Example Query:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy \n--node-address https://rpc.testnet.casperlabs.io \n1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c\n"})}),"\n",(0,c.jsxs)(n.details,{children:["\n",(0,c.jsx)(n.summary,{children:"Explore the JSON-RPC request and response generated."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"JSON-RPC Request"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "info_get_deploy",\n  "params": {\n    "deploy_hash": "1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c",\n    "finalized_approvals": false\n  },\n  "id": -3447643973713335073\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"JSON-RPC Response"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.5.3",\n    "deploy": {\n      "hash": "1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c",\n      "header": {\n        "account": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n        "timestamp": "2023-10-12T14:59:40.760Z",\n        "ttl": "30m",\n        "gas_price": 1,\n        "body_hash": "ea7e6a6cbdd4d761827cb627e162896bee3e771beda000550615c9b4fafa3a2d",\n        "dependencies": [],\n        "chain_name": "casper-test"\n      },\n      "payment": {\n        "ModuleBytes": {\n          "module_bytes": "",\n          "args": [\n            [\n              "amount",\n              {\n                "cl_type": "U512",\n                "bytes": "0400e1f505",\n                "parsed": "100000000"\n              }\n            ]\n          ]\n        }\n      },\n      "session": {\n        "Transfer": {\n          "args": [\n            [\n              "amount",\n              {\n                "cl_type": "U512",\n                "bytes": "0500f2052a01",\n                "parsed": "5000000000"\n              }\n            ],\n            [\n              "target",\n              {\n                "cl_type": "PublicKey",\n                "bytes": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986",\n                "parsed": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986"\n              }\n            ],\n            [\n              "id",\n              {\n                "cl_type": {\n                  "Option": "U64"\n                },\n                "bytes": "014767a90000000000",\n                "parsed": 11102023\n              }\n            ]\n          ]\n        }\n      },\n      "approvals": [\n        {\n          "signer": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n          "signature": "01e53cb742ed13ff4f0584a3da0f22f5942a33e010965adf640c91204ae4bc7436f1e5534d338ffa117d193295214816445439781229d24a372085c316eac5e305"\n        }\n      ]\n    },\n    "execution_results": [\n      {\n        "block_hash": "aac51dad028ba8b3d6fec86a39252bbc4285d513fd57a8af4696ab5390ac5c2b",\n        "result": {\n          "Success": {\n            "effect": {\n              "operations": [],\n              "transforms": [\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-624dbe2395b9d9503fbee82162f1714ebff6b639f96d2084d26d944c354ec4c5",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-9824d60dc3a5c44a20b9fd260a412437933835b52fc683d8ae36e4ec2114843e",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1",\n                  "transform": {\n                    "WriteCLValue": {\n                      "cl_type": "U512",\n                      "bytes": "06621c3e660301",\n                      "parsed": "1114111876194"\n                    }\n                  }\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": {\n                    "AddUInt512": "100000000"\n                  }\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-624dbe2395b9d9503fbee82162f1714ebff6b639f96d2084d26d944c354ec4c5",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-9824d60dc3a5c44a20b9fd260a412437933835b52fc683d8ae36e4ec2114843e",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1",\n                  "transform": {\n                    "WriteCLValue": {\n                      "cl_type": "U512",\n                      "bytes": "06621c3e660301",\n                      "parsed": "1114111876194"\n                    }\n                  }\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": {\n                    "AddUInt512": "100000000"\n                  }\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-9824d60dc3a5c44a20b9fd260a412437933835b52fc683d8ae36e4ec2114843e",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1",\n                  "transform": {\n                    "WriteCLValue": {\n                      "cl_type": "U512",\n                      "bytes": "06622a383c0201",\n                      "parsed": "1109111876194"\n                    }\n                  }\n                },\n                {\n                  "key": "balance-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c",\n                  "transform": {\n                    "AddUInt512": "5000000000"\n                  }\n                },\n                {\n                  "key": "transfer-0de7250864e67aa76626a844dcc931e615284a13a110df3f97cec9e3e97af405",\n                  "transform": {\n                    "WriteTransfer": {\n                      "deploy_hash": "1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c",\n                      "from": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n                      "to": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n                      "source": "uref-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1-007",\n                      "target": "uref-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c-004",\n                      "amount": "5000000000",\n                      "gas": "0",\n                      "id": 11102023\n                    }\n                  }\n                },\n                {\n                  "key": "deploy-1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c",\n                  "transform": {\n                    "WriteDeployInfo": {\n                      "deploy_hash": "1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c",\n                      "transfers": [\n                        "transfer-0de7250864e67aa76626a844dcc931e615284a13a110df3f97cec9e3e97af405"\n                      ],\n                      "from": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n                      "source": "uref-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1-007",\n                      "gas": "100000000"\n                    }\n                  }\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-624dbe2395b9d9503fbee82162f1714ebff6b639f96d2084d26d944c354ec4c5",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-9824d60dc3a5c44a20b9fd260a412437933835b52fc683d8ae36e4ec2114843e",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-da632bfba17f4a7882581de2a37219be71628600ccd0df83f1d42465bd018537",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": {\n                    "WriteCLValue": {\n                      "cl_type": "U512",\n                      "bytes": "00",\n                      "parsed": "0"\n                    }\n                  }\n                },\n                {\n                  "key": "balance-da632bfba17f4a7882581de2a37219be71628600ccd0df83f1d42465bd018537",\n                  "transform": {\n                    "AddUInt512": "100000000"\n                  }\n                }\n              ]\n            },\n            "transfers": [\n              "transfer-0de7250864e67aa76626a844dcc931e615284a13a110df3f97cec9e3e97af405"\n            ],\n            "cost": "100000000"\n          }\n        }\n      }\n    ]\n  },\n  "id": -3447643973713335073\n}\n'})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Refer to the Section on ",(0,c.jsx)(n.a,{href:"/1.5.X/resources/tutorials/beginner/querying-network#querying-deploys",children:"querying deploys"})," for more information."]}),"\n",(0,c.jsx)(n.h2,{id:"verifying-the-transfer",children:"Verifying the Transfer"}),"\n",(0,c.jsxs)(n.p,{children:["In addition to verifying the deploy, you also need to ",(0,c.jsx)(n.a,{href:"/1.5.X/developers/cli/transfers/verify-transfer",children:"verify the transfer details"}),". The deploy may have been successful, but you also need to ensure the source and target accounts were updated correctly."]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>t});var c=a(96540);const s={},r=c.createContext(s);function d(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);