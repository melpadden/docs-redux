"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[90236],{92694:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var a=s(74848),r=s(28453);const t={},d="Verifying a Transfer",c={id:"developers/cli/transfers/verify-transfer",title:"Verifying a Transfer",description:"Prerequisites",source:"@site/versioned_docs/version-2.0.0/developers/cli/transfers/verify-transfer.md",sourceDirName:"developers/cli/transfers",slug:"/developers/cli/transfers/verify-transfer",permalink:"/developers/cli/transfers/verify-transfer",draft:!1,unlisted:!1,tags:[],version:"2.0.0",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{},sidebar:"developers",previous:{title:"Transferring Tokens using a Multi-Sig Deploy",permalink:"/developers/cli/transfers/multisig-deploy-transfer"},next:{title:"Delegating Tokens",permalink:"/developers/cli/delegate"}},i={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Query the State Root Hash",id:"query-the-state-root-hash",level:2},{value:"Query the Transfer Details",id:"query-transfer-details",level:2},{value:"Query the Account State",id:"query-account-state",level:2},{value:"Query the Purse Balance",id:"get-purse-balance",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"verifying-a-transfer",children:"Verifying a Transfer"})}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"Before verifying a transfer, make sure you have:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Initiated a ",(0,a.jsx)(n.a,{href:"/developers/cli/transfers/direct-token-transfer",children:"Direct Transfer"})," or ",(0,a.jsx)(n.a,{href:"/developers/cli/transfers/multisig-deploy-transfer",children:"Multi-sig Deploy Transfer"})]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.em,{children:"deploy_hash"})," of the transfer you want to verify"]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.em,{children:"public key"})," of the source and target accounts"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"query-the-state-root-hash",children:"Query the State Root Hash"}),"\n",(0,a.jsx)(n.p,{children:"The state root hash is an identifier of the current network state. It gives a snapshot of the blockchain state at a moment in time. You can use the state root hash to query the network state after sending a deploy."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example Query:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address https://rpc.testnet.casperlabs.io \n"})}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Sample output of the get-state-root-hash command"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 6458079936180872466,\n  "result": {\n    "api_version": "1.5.3",\n    "state_root_hash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n  }\n}\n'})}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"After sending deploys to the network, you must get the new state root hash to see the changes reflected. Otherwise, you will be looking at events in the past."})}),"\n",(0,a.jsx)(n.h2,{id:"query-transfer-details",children:"Query the Transfer Details"}),"\n",(0,a.jsxs)(n.p,{children:["A transfer is executed as part of a deploy. In a Casper network, deploys can contain multiple transfers. Execution of the deploy includes writing information about each individual transfer to global state. A unique hash known as the ",(0,a.jsx)(n.code,{children:"transfer-address"})," identifies each transfer. The ",(0,a.jsx)(n.code,{children:"transfer-address"})," consists of a formatted string with a ",(0,a.jsx)(n.code,{children:"transfer-"})," prefix."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Transfer hash",src:s(96306).A+"",width:"1558",height:"1228"})}),"\n",(0,a.jsxs)(n.p,{children:["First, use the ",(0,a.jsx)(n.code,{children:"get-deploy"})," command and the ",(0,a.jsx)(n.em,{children:"deploy_hash"})," to identify the corresponding transfer:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy \\\n--node-address [NODE_SERVER_ADDRESS]  \\\n[DEPLOY_HASH]\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Important response fields:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:'"result"."execution_results"."result"."Success"."transfers"'})," - List of transfers contained in a successful deploy"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"After obtaining the transfer identifier, query the transfer details."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n--id [ID] \\\n--node-address [NODE_SERVER_ADDRESS]  \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [TRANSFER_HASH]\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Request fields:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"id"})," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"node-address"})," - An IP address of a node on the network"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"state-root-hash"})," - The hex-encoded hash of the state root"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"key"})," - The base key for the query. This must be a properly formatted transfer address with a ",(0,a.jsx)(n.code,{children:"transfer-"})," prefix, i.e., ",(0,a.jsx)(n.code,{children:"transfer-ab3e11fd612ccf9ddf5ddb3e5c0b3d3b5e5c0921fd1b45e8c657a63f01d6adcb"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"-v"})," option generates verbose output, printing the RPC request and response generated. Let's explore an example below."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example Query:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state -v \\\n--id 3 \\\n--node-address https://rpc.testnet.casperlabs.io/  \\\n--state-root-hash fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1 \\\n--key transfer-ab3e11fd612ccf9ddf5ddb3e5c0b3d3b5e5c0921fd1b45e8c657a63f01d6adcb\n"})}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Explore the JSON-RPC request and response generated."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Request"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "query_global_state",\n  "params": {\n    "state_identifier": {\n      "StateRootHash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n    },\n    "key": "transfer-ab3e11fd612ccf9ddf5ddb3e5c0b3d3b5e5c0921fd1b45e8c657a63f01d6adcb",\n    "path": []\n  },\n  "id": 3\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Response"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.5.3",\n    "block_header": null,\n    "stored_value": {\n      "Transfer": {\n        "deploy_hash": "4eedbb5cf4a571748cf7ae9c2f17777364a01f80f79f3633a0cec32b7e8cf2e3",\n        "from": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n        "to": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n        "source": "uref-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1-007",\n        "target": "uref-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c-004",\n        "amount": "5000000000",\n        "gas": "0",\n        "id": 11102023\n      }\n    },\n    "merkle_proof": "[42526 hex chars]"\n  },\n  "id": 3\n}\n'})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The query responds with more information about the transfer: its deploy hash, the account which executed the transfer, the source and target purses, and the target account. You can verify that the transfer processed successfully using this additional information."}),"\n",(0,a.jsx)(n.h2,{id:"query-account-state",children:"Query the Account State"}),"\n",(0,a.jsxs)(n.p,{children:["Next, query for information about the ",(0,a.jsx)(n.em,{children:"Source"})," account, using the ",(0,a.jsx)(n.code,{children:"state-root-hash"})," of the block containing the transfer:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n--id [ID] \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [SOURCE_PUBLIC_KEY]\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Request fields:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"id"})," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"node-address"})," - An IP address of a node on the network"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"state-root-hash"})," - Hex-encoded hash of the network state"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"key"})," - The base key for the query. This must be a properly formatted public key, account hash, contract address hash, URef, transfer hash, or deploy-info hash"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Important response fields:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:'"result"."stored_value"."Account"."main_purse"'})," - the address of the main purse containing the sender's tokens. In this example, this purse is the source of the tokens transferred"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Source Account Query:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state -v \\\n--id 4 \\\n--node-address https://rpc.testnet.casperlabs.io/  \\\n--state-root-hash fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1 \\\n--key 0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf\n"})}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Explore the JSON-RPC request and response generated."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Request"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "query_global_state",\n  "params": {\n    "state_identifier": {\n      "StateRootHash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n    },\n    "key": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n    "path": []\n  },\n  "id": 4\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Response"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.5.3",\n    "block_header": null,\n    "stored_value": {\n      "Account": {\n        "account_hash": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n        "named_keys": [...],\n        "main_purse": "uref-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1-007",\n        "associated_keys": [\n          {\n            "account_hash": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n            "weight": 1\n          }\n        ],\n        "action_thresholds": {\n          "deployment": 1,\n          "key_management": 1\n        }\n      }\n    },\n    "merkle_proof": "[31406 hex chars]"\n  },\n  "id": 4\n}\n'})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Target Account Query:"})}),"\n",(0,a.jsxs)(n.p,{children:["Repeat the same step to query information about the ",(0,a.jsx)(n.em,{children:"Target"})," account:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state -v \\\n--id 5 \\\n--node-address https://rpc.testnet.casperlabs.io/  \\\n--state-root-hash fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1 \\\n--key 01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986\n"})}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Explore the JSON-RPC request and response generated."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Request"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "query_global_state",\n  "params": {\n    "state_identifier": {\n      "StateRootHash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n    },\n    "key": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n    "path": []\n  },\n  "id": 5\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Response"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.5.3",\n    "block_header": null,\n    "stored_value": {\n      "Account": {\n        "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n        "named_keys": [...],\n        "main_purse": "uref-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c-007",\n        "associated_keys": [...],\n        "action_thresholds": {\n          "deployment": 2,\n          "key_management": 3\n        }\n      }\n    },\n    "merkle_proof": "[32060 hex chars]"\n  },\n  "id": 5\n}\n'})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"get-purse-balance",children:"Query the Purse Balance"}),"\n",(0,a.jsxs)(n.p,{children:["All accounts on a Casper network have a purse associated with the Casper system mint, which is the ",(0,a.jsx)(n.em,{children:"main purse"}),". The balance associated with a given purse is recorded in global state, and the value can be queried using the ",(0,a.jsx)(n.code,{children:"query-balance"})," command and the purse identifier, which can be a public key or account hash, implying the main purse of the given account should be used. Alternatively, the purse's URef can be used. For full details, run the following help command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-balance --help\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Verify the source purse balance using the ",(0,a.jsx)(n.code,{children:"query-balance"})," command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-balance \\\n--id 6 \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HAHS] \\\n--purse-identifier [SOURCE_PUBLIC_KEY_HEX] \n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Request fields:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"id"})," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"node-address"})," - An IP address of a node on the network"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"state-root-hash"})," - Hex-encoded hash of the state root"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"purse-identifier"})," - A public key or account hash, implying the main purse of the given account should be used. Alternatively, the purse's URef"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Query Source Account Example:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-balance -v --id 6 \\\n--node-address https://rpc.testnet.casperlabs.io/ \\\n--state-root-hash fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1 \\\n--purse-identifier account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655\n"})}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Explore the sample JSON-RPC request and response generated."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Request"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "query_balance",\n  "params": {\n    "state_identifier": {\n      "StateRootHash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n    },\n    "purse_identifier": {\n      "main_purse_under_account_hash": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655"\n    }\n  },\n  "id": 6\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Response"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.5.3",\n    "balance": "1109111876194"\n  },\n  "id": 6\n}\n'})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Similarly, query the balance of the target purse."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client get-balance \\\n--id 7 \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HAHS] \\\n--purse-identifier [TARGET_PUBLIC_KEY_HEX] \n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Target Account Example:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-balance -v --id 7 \\\n--node-address https://rpc.testnet.casperlabs.io/ \\\n--state-root-hash fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1 \\\n--purse-identifier account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7\n"})}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Explore the sample JSON-RPC request and response generated."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Request"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "query_balance",\n  "params": {\n    "state_identifier": {\n      "StateRootHash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n    },\n    "purse_identifier": {\n      "main_purse_under_account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7"\n    }\n  },\n  "id": 7\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Response"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.5.3",\n    "balance": "46200000000"\n  },\n  "id": 7\n}\n'})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},96306:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/transfer-hash-example-b8695f1d7d28b36e8e8cf67b26df6945.png"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var a=s(96540);const r={},t=a.createContext(r);function d(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);