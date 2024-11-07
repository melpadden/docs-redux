"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[95283],{16475:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"resources/advanced/list-cspr","title":"Listing CSPR","description":"This topic describes how to list the Casper token (CSPR) on a cryptocurrency exchange.","source":"@site/versioned_docs/version-2.0.0/resources/advanced/list-cspr.md","sourceDirName":"resources/advanced","slug":"/resources/tutorials/advanced/list-cspr","permalink":"/resources/tutorials/advanced/list-cspr","draft":false,"unlisted":false,"tags":[],"version":"2.0.0","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{"title":"Listing CSPR","slug":"/resources/tutorials/advanced/list-cspr"}}');var r=t(74848),a=t(28453);const o={title:"Listing CSPR",slug:"/resources/tutorials/advanced/list-cspr"},i="Listing CSPR on an Exchange",c={},d=[{value:"Setting up a Node",id:"setting-up-a-node",level:2},{value:"Casper Account",id:"casper-account",level:2},{value:"Understanding Basic Transactions",id:"understanding-basic-transactions",level:2},{value:"Native transfer",id:"native-transfer",level:3},{value:"Bulk or batched Wasm transfer",id:"bulk-or-batched-wasm-transfer",level:3},{value:"Integrating CSPR",id:"integrating-cspr",level:2},{value:"Testing the Integration",id:"testing-the-integration",level:2},{value:"The Casper Protocol",id:"the-casper-protocol",level:2},{value:"Staking Integration for Exchanges",id:"staking-integration-for-exchanges",level:2},{value:"Deploy Structures and Parameters",id:"deploy-structures-and-parameters",level:3},{value:"1. Creating a deploy object",id:"1-creating-a-deploy-object",level:4},{value:"2a. Sign the deploy (Casper Signer)",id:"2a-sign-the-deploy-casper-signer",level:4},{value:"2b. Sign the deploy (Ledger)",id:"2b-sign-the-deploy-ledger",level:4},{value:"Costs and Minimums",id:"costs-and-minimums",level:3},{value:"The Delegation Cap",id:"the-delegation-cap",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"listing-cspr-on-an-exchange",children:"Listing CSPR on an Exchange"})}),"\n",(0,r.jsx)(n.p,{children:"This topic describes how to list the Casper token (CSPR) on a cryptocurrency exchange."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["The Casper Signer has been deprecated and replaced with the ",(0,r.jsx)(n.a,{href:"https://www.casperwallet.io",children:"Casper Wallet"}),". We are in the process of updating this page. Meanwhile, visit the guide on ",(0,r.jsx)(n.a,{href:"https://www.casperwallet.io/develop",children:"Building with the Casper Wallet"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-a-node",children:"Setting up a Node"}),"\n",(0,r.jsxs)(n.p,{children:["While it is not necessary for an exchange to operate their own node on the Casper Mainnet, we recommend that they do so if they expect to handle moderate to high volumes of transaction activity. A node operated by an exchange does not have to be a validating node, it can be read-only. For setup instructions, see ",(0,r.jsx)(n.a,{href:"/operators/setup/basic-node-configuration",children:"Basic Node Setup"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"This setup enables you to have a self-administered gateway to the Casper Mainnet to get data and submit transactions."}),"\n",(0,r.jsx)(n.h2,{id:"casper-account",children:"Casper Account"}),"\n",(0,r.jsxs)(n.p,{children:["You will need a Casper Account to handle the transactions on an exchange. Casper has an ",(0,r.jsx)(n.a,{href:"/concepts/design/casper-design#accounts-head",children:"Account model"})," and instructions on how to ",(0,r.jsx)(n.a,{href:"/concepts/design/casper-design#accounts-creating",children:"create an Account"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For your exchange, you need at least one Account. Each Casper network uses an Account model that holds onto general resources and purses with tokens and provides an on-chain identity. As an exchange, if you are dealing with high volumes of transaction activity, you might need a main account for the exchange platform and sub-accounts for other users."}),"\n",(0,r.jsx)(n.h2,{id:"understanding-basic-transactions",children:"Understanding Basic Transactions"}),"\n",(0,r.jsx)(n.p,{children:"We have a token and transaction model that features different levels of support that range from convenient to robust. Usually, when you are transferring Casper tokens between two parties, the native two-party transfer will suffice."}),"\n",(0,r.jsx)(n.p,{children:"Casper supports native two-party transfers as well as bulk transfers using custom Wasm. The native transfer is ideal when you need to perform a one-to-one transfer between two purses. Whereas the batched Wasm transfer is better suited for making bulk transfers. A batched Wasm transfer allows you to do multiple transfers in a single deploy, making it more cost-effective when sending tokens from one purse to several others."}),"\n",(0,r.jsx)(n.h3,{id:"native-transfer",children:"Native transfer"}),"\n",(0,r.jsxs)(n.p,{children:["You can accomplish a native transfer by sending a native transfer deploy, without any Wasm. Included below is an example of this type of deploy. The included ",(0,r.jsx)(n.code,{children:"payment"})," field describes how we are paying for the deploy, in this case a native transfer, while the ",(0,r.jsx)(n.code,{children:"session"})," field describes the actual transfer."]}),"\n",(0,r.jsxs)(n.details,{children:["\n",(0,r.jsx)(n.summary,{children:"Native Transfer Deploy"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'\n"id": 1,\n    "jsonrpc": "2.0",\n    "method": "account_put_deploy",\n    "params": {\n        "deploy": {\n            "approvals": [\n                {\n                    "signature": "130 chars",\n                    "signer": "010f50b0116f213ef65b99d1bd54483f92bf6131de2f8aceb7e3f825a838292150"\n                }\n            ],\n            "hash": "ec2d477a532e00b08cfa9447b7841a645a27d34ee12ec55318263617e5740713",\n            "header": {\n                "account": "010f50b0116f213ef65b99d1bd54483f92bf6131de2f8aceb7e3f825a838292150",\n                "body_hash": "da35b095640a403324306c59ac6f18a446dfcc28faf753ce58b96b635587dd8e",\n                "chain_name": "casper-net-1",\n                "dependencies": [],\n                "gas_price": 1,\n                "timestamp": "2021-04-20T18:04:40.333Z",\n                "ttl": "1h"\n            },\n            "payment": {\n                "ModuleBytes": {\n                    "args": [\n                        [\n                            "amount",\n                            {\n                                "bytes": "021027",\n                                "cl_type": "U512",\n                                "parsed": "10000"\n                            }\n                        ]\n                    ],\n                    "module_bytes": ""\n                }\n            },\n            "session": {\n                "Transfer": {\n                    "args": [\n                        [\n                            "amount",\n                            {\n                                "bytes": "0400f90295",\n                                "cl_type": "U512",\n                                "parsed": "2500000000"\n                            }\n                        ],\n                        [\n                            "target",\n                            {\n                                "bytes": "8ae68a6902ff3c029cea32bb67ae76b25d26329219e4c9ceb676745981fd3668",\n                                "cl_type": {\n                                    "ByteArray": 32\n                                },\n                                "parsed": "8ae68a6902ff3c029cea32bb67ae76b25d26329219e4c9ceb676745981fd3668"\n                            }\n                        ],\n                        [\n                            "id",\n                            {\n                                "bytes": "00",\n                                "cl_type": {\n                                    "Option": "U64"\n                                },\n                                "parsed": null\n                            }\n                        ]\n                    ]\n                }\n            }\n        }\n    }\n}\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Native transfers are the simplest method to transfer tokens between two purses. For details about the native transfer command, see ",(0,r.jsx)(n.a,{href:"/developers/cli/transfers/direct-token-transfer",children:"Direct Token Transfer"}),". The following command transfers 10 CSPR from ",(0,r.jsx)(n.em,{children:"account A's main purse"})," to ",(0,r.jsx)(n.em,{children:"account B's main purse"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"casper-client transfer \\\n--id 1 \\\n--transfer-id 123456 \\\n--node-address http://<node-ip-address>:7777 \\\n--amount 10000000000 \\\n--secret-key <accountA-secret-key>.pem \\\n--chain-name casper \\\n--target-account <accountB-hex-encoded-public-key> \\\n--payment-amount <payment-in-motes>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The payment amount varies based on the deploy and network ",(0,r.jsx)(n.a,{href:"/concepts/glossary/C#chainspec",children:"chainspec"}),". For node version ",(0,r.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml",children:"1.5.1"}),", wasmless transfers cost 10^8 motes."]}),"\n",(0,r.jsx)(n.h3,{id:"bulk-or-batched-wasm-transfer",children:"Bulk or batched Wasm transfer"}),"\n",(0,r.jsxs)(n.p,{children:["Bulk or batched Wasm transfers allow you to apply some logic before or after the transfer. They also allow for conditional transfers. You may also use them if you are doing a series of transfers between multiple purses. Listed below are five methods for the ",(0,r.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/system/index.html",children:"Rust contract API"}),", which can be used in session code to achieve batched Wasm transfer:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transfer_to_account"}),": Transfers amount of motes from the main purse of the account to the purse of a target account. If the target purse does not exist, the transfer process will create one. Can be called from session code only and not a contract as a contract doesn't have a main purse."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transfer_to_public_key"}),": Transfers amount of motes from the main purse of the caller\u2019s account to the main purse of the target. If the account referenced by the target does not exist, the transfer will create a new account. Can be called from session code only and not from a contract as a contract doesn't have a main purse."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transfer_from_purse_to_purse"}),": Transfers amount of motes from source purse to target purse. If the target does not exist, the transfer fails."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transfer_from_purse_to_public_key"}),": Transfers amount of motes from source to the main purse of target. If the account referenced by the target does not exist, the transfer will create it."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transfer_from_purse_to_account"}),": Transfers amount of motes from source purse to target account's purse. If the target account does not exist, the transfer creates a new account."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more information on how to write session code, see ",(0,r.jsx)(n.a,{href:"/developers/writing-onchain-code/writing-session-code",children:"Writing Session Code"}),". There are equivalent ",(0,r.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/e01b528db64f96fc1d3eac8b3b8e58e1337b398d/smart_contracts/contract_as/assembly/purse.ts#L135-L305",children:"assembly script"})," methods available. Alternatively, you can program directly against the ",(0,r.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/e01b528db64f96fc1d3eac8b3b8e58e1337b398d/smart_contracts/contract/src/ext_ffi.rs#L283-L370",children:"ext-FFI"})," methods."]}),"\n",(0,r.jsx)(n.h2,{id:"integrating-cspr",children:"Integrating CSPR"}),"\n",(0,r.jsxs)(n.p,{children:["You can integrate with the ",(0,r.jsx)(n.a,{href:"/developers/json-rpc/",children:"JSON-RPC API"})," of a node on the Casper Mainnet.\nYou can program directly against the RPC or if you prefer you can choose from the variety of SDK libraries that are available to use on a Casper network see ",(0,r.jsx)(n.a,{href:"/sdk",children:"SDK Libraries"}),".\nCasper also provides a stream server that gives you real-time information about a variety of events occurring on a node. Use of the stream is optional. You might want to use this feature as it notifies you of events instead of requiring you to ask periodically. For more information about various events, see ",(0,r.jsx)(n.a,{href:"/developers/dapps/monitor-and-consume-events",children:"Monitoring and Consuming Events"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"testing-the-integration",children:"Testing the Integration"}),"\n",(0,r.jsxs)(n.p,{children:["Our recommended testing mechanism is to have a test environment that points at the official Casper ",(0,r.jsx)(n.a,{href:"https://testnet.cspr.live/",children:"Testnet"}),". Through this, you may run production like operations of your test exchange against the test environment. However, if you are not doing this and you just want to integrate with the ",(0,r.jsx)(n.a,{href:"https://cspr.live/",children:"Mainnet"}),", then you can do so with your own test accounts."]}),"\n",(0,r.jsx)(n.p,{children:"If you are not going to do a Testnet integration, then we suggest you create some additional test accounts and test the transactions on the Mainnet through your software prior to moving to the general public."}),"\n",(0,r.jsx)(n.h2,{id:"the-casper-protocol",children:"The Casper Protocol"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Casper is integrated with BitGo for enterprise grade custody. If your exchange uses BitGo, support for Casper is available already."}),"\n",(0,r.jsxs)(n.li,{children:["Casper has an execution after consensus model, which means that transactions are executed after they are finalized. Transactions are not orphaned or uncle\u2019d on Casper and neither does chain reorganization happen on it. For more information on the execution process, see ",(0,r.jsx)(n.a,{href:"/concepts/design/casper-design#execution-semantics-head",children:"Execution Semantics"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Exchanges can check finality signatures. Validators send finality signatures after the finalized block is executed and global state is updated. The Casper node streams execution effects and finality signatures through an SSE architecture. For more information about various events, see ",(0,r.jsx)(n.a,{href:"/developers/dapps/monitor-and-consume-events",children:"Monitoring and Consuming Events"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"staking-integration-for-exchanges",children:"Staking Integration for Exchanges"}),"\n",(0,r.jsxs)(n.p,{children:["Exchanges seeking to integrate CSPR staking mechanisms will need to understand the processes of delegation, undelegation and redelegation through deploys on a Casper network. The following outlines the use of the ",(0,r.jsx)(n.a,{href:"https://github.com/casper-ecosystem/casper-js-sdk/",children:"JavaScript SDK"})," to perform these actions, as well as parameters relating to staking. Further information about staking on a Casper network can be found ",(0,r.jsx)(n.a,{href:"/users/delegating",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"deploy-structures-and-parameters",children:"Deploy Structures and Parameters"}),"\n",(0,r.jsx)(n.p,{children:"Staking operations consists of two parts:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/developers/cli/sending-transactions",children:"Creating a deploy object"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/developers/dapps/signing-a-transaction",children:"Signing the deploy"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The staking deploy requires the following information:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The delegator's public key"}),"\n",(0,r.jsx)(n.li,{children:"The validator's public key"}),"\n",(0,r.jsx)(n.li,{children:"The new validator's public key (For redelegation only)"}),"\n",(0,r.jsx)(n.li,{children:"The amount to be delegated"}),"\n",(0,r.jsx)(n.li,{children:"The gas cost"}),"\n",(0,r.jsx)(n.li,{children:"The auction manager contract's hash"}),"\n",(0,r.jsx)(n.li,{children:"The appropriate entry point"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Casper provides a series of prebuilt Wasm files for use in these operations. They are provided for convenience, and you are free to create your own custom deploys. You can find them in our ",(0,r.jsx)(n.a,{href:"https://github.com/casper-network/casper-node",children:"casper-node"})," repository, in the following locations:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/tree/dev/smart_contracts/contracts/client/delegate",children:"Delegate"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/tree/dev/smart_contracts/contracts/client/undelegate",children:"Undelegate"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/tree/dev/smart_contracts/contracts/client/redelegate",children:"Redelegate"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"1-creating-a-deploy-object",children:"1. Creating a deploy object"}),"\n",(0,r.jsxs)(n.p,{children:["To create a deploy using the JavaScript SDK, we will need ",(0,r.jsx)(n.code,{children:"deployParams"}),", ",(0,r.jsx)(n.code,{children:"session"})," and a ",(0,r.jsx)(n.code,{children:"payment"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Deploy params is a ",(0,r.jsx)(n.code,{children:"DeployUtil.DeployParams"})," object created from the delegator's ",(0,r.jsx)(n.code,{children:"publicKey"})," and the network name as shown in the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import { DeployUtil, CLPublicKey } from 'casper-js-sdk';\n\nconst deployParams = new DeployUtil.DeployParams(\n  CLPublicKey.fromHex(publicKeyHex),\n  network_name // 'testnet' | 'mainnet'\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For creating a ",(0,r.jsx)(n.code,{children:"session"})," object, which is ",(0,r.jsx)(n.code,{children:"DeployUtil.ExecutableDeployItem"}),", we need"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"delegator"})," and ",(0,r.jsx)(n.strong,{children:"validator's public keys"})]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"amount"})," of tokens to delegate/undelegate/redelgate"]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"auction manager contract's hash"})]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"entry point"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["First, create a variable ",(0,r.jsx)(n.code,{children:"RuntimeArgs"})," from the public keys and the amount. We will need to use it below in ",(0,r.jsx)(n.code,{children:"session"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import { RuntimeArgs, CLValueBuilder, CLPublicKey } from 'casper-js-sdk';\n\nconst args = RuntimeArgs.fromMap({\n  delegator: CLPublicKey.fromHex(delegatorPublicKeyHex),\n  validator: CLPublicKey.fromHex(validatorPublicKeyHex),\n  amount: CLValueBuilder.u512(amountMotes) // in motes\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Second, create a ",(0,r.jsx)(n.code,{children:"session"})," parameter. It is a ",(0,r.jsx)(n.code,{children:"Uint8Array"})," consisting of the ",(0,r.jsx)(n.code,{children:"auction manager contract's hash"}),", the ",(0,r.jsx)(n.code,{children:"entry points"})," and ",(0,r.jsx)(n.code,{children:"runtime arguments"}),", which we previously created."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"auction manager contract's hash"})," will depend on the network you are using. For Casper's Mainnet and Testnet, the hashes are as follows:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Mainnet"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Testnet"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Your ",(0,r.jsx)(n.code,{children:"entry point"})," will depend on which action you are performing, with the following three available:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"delegate"})," - Initial delegation to a validator"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"undelegate"})," - Undelegating tokens from a validator back to the delegator"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"redelegate"})," - Redelegating tokens to a new validator"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import { decodeBase16, DeployUtil } from 'casper-js-sdk';\n\nconst session = DeployUtil.ExecutableDeployItem.newStoredContractByHash(\n  decodeBase16(auction_manager_contract_hash), // auction manager contract hash\n  contractEntryPoint, // auction manager entry point\n  args\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To create the ",(0,r.jsx)(n.code,{children:"payment"})," parameter for the deploy, we need a deploy cost. The actual costs can be pulled from the network chainspec. Here is the ",(0,r.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.4.8/resources/production/chainspec.toml",children:(0,r.jsx)(n.code,{children:"chainspec for version 1.4.8"})}),". You will need the chainspec for the network version you are using."]}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"DeployUtil.standardPayment"})," method for creating ",(0,r.jsx)(n.code,{children:"payment"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import { DeployUtil } from 'casper-js-sdk';\n\nconst payment = DeployUtil.standardPayment(deployCost);\n"})}),"\n",(0,r.jsx)(n.p,{children:"The last operation is creating the deploy:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import { DeployUtil } from 'casper-js-sdk';\n\nDeployUtil.makeDeploy(deployParams, session, payment);\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Redelegation"}),", occurs the same way as delegation, but with the introduction of a third public_key."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import { RuntimeArgs, CLPublicKey, CLValueBuilder } from 'casper-js-sdk';\n\nconst args = RuntimeArgs.fromMap({\n    delegator: CLPublicKey.fromHex(delegatorPublicKeyHex),\n    validator: CLPublicKey.fromHex(validatorPublicKeyHex),\n    new_validator: CLPublicKey.fromHex(redelegateValidatorPublicKeyHex),\n    amount: CLValueBuilder.u512(amountMotes)\n})\n"})}),"\n",(0,r.jsx)(n.h4,{id:"2a-sign-the-deploy-casper-signer",children:"2a. Sign the deploy (Casper Signer)"}),"\n",(0,r.jsxs)(n.p,{children:["To get the signature, you will need to use ",(0,r.jsx)(n.code,{children:"Signer.sign"})," from the ",(0,r.jsx)(n.a,{href:"https://github.com/casper-ecosystem/casper-js-sdk/",children:"JavaScript SDK"}),". It will return ",(0,r.jsx)(n.code,{children:"Promise<{ deploy }>"}),", which is the signed object."]}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"DeployUtil.deployFromJson"})," to convert the result and sent it to network with:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import { Signer, CasperServiceByJsonRPC, DeployUtil } from 'casper-js-sdk';\n\nconst casperService = new CasperServiceByJsonRPC(GRPC_URL);\nconst deployJson = DeployUtil.deployToJson(deploy);\nSigner.sign(\n    deployJson,\n    accountPublicKey,\n    recipientPublicKey\n).then((signedDeployJson) => {\n    const signedDeploy = DeployUtil.deployFromJson(signedDeployJson);\n    if (signedDeploy.ok) {\n      casperService.deploy(signedDeploy.val! as DeployUtil.Deploy); // sent deploy\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"2b-sign-the-deploy-ledger",children:"2b. Sign the deploy (Ledger)"}),"\n",(0,r.jsxs)(n.p,{children:["You will need to connect with your ",(0,r.jsx)(n.code,{children:"Ledger"})," first to get the signature."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import TransportWebUSB from '@ledgerhq/hw-transport-webusb';\nimport LedgerApp, { ResponseBase } from '@zondax/ledger-casper';\nimport { DeployUtil } from 'casper-js-sdk';\n\nconst getBipPath = (index: number) => {\n  const idx = index.toString();\n  return `m/44'/506'/0'/0/${idx}`;\n};\n\nconst deployBytes = DeployUtil.deployToBytes(deploy) as Buffer;\nconst transport = await TransportWebUSB.create();\nconst ledgerApp = new LedgerApp(transport);\nconst res = await ledgerApp.sign(\n    getBipPath(selectedAccountIndex),\n    deployBytes\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The Signature will be in a property called ",(0,r.jsx)(n.code,{children:"res.signatureRS"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"After that, we can create a signed deploy,"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import { DeployUtil, CLPublicKey } from 'casper-js-sdk';\n\nconst signedDeploy = DeployUtil.setSignature(\n  deploy,\n  signatureRS,\n  CLPublicKey.fromHex(accountPublicKey)\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"We can then send it to a network."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"casperService.deploy(signedDeploy)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"costs-and-minimums",children:"Costs and Minimums"}),"\n",(0,r.jsxs)(n.p,{children:["The following are costs and minimum amounts for version 1.5.1, but up-to-date values should be pulled from the network ",(0,r.jsx)(n.a,{href:"/concepts/glossary/C#chainspec",children:"chainspec"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Transfer Cost: 100,000,000 motes or 0.1 ",(0,r.jsx)(n.strong,{children:"CSPR"})]}),"\n",(0,r.jsxs)(n.p,{children:["Delegation Cost: 2,500,000,000 motes or 2.5 ",(0,r.jsx)(n.strong,{children:"CSPR"})]}),"\n",(0,r.jsxs)(n.p,{children:["Minimum transfer amount: 2,500,000,000 motes, or 2.5 ",(0,r.jsx)(n.strong,{children:"CSPR"})]}),"\n",(0,r.jsxs)(n.p,{children:["Minimum amount required for delegation: 500,000,000,000 motes, or 500 ",(0,r.jsx)(n.strong,{children:"CSPR"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"the-delegation-cap",children:"The Delegation Cap"}),"\n",(0,r.jsxs)(n.p,{children:["Casper includes a delegator limit rule, which limits the number of delegators that a single validator may have at ",(0,r.jsx)(n.code,{children:"953"}),". This is a temporary solution to prevent complications with Casper\u2019s fast sync mechanism - in which high bond counts could break fast sync."]}),"\n",(0,r.jsxs)(n.p,{children:["Validators with a delegator count at or above ",(0,r.jsx)(n.code,{children:"953"})," at the time of the ",(0,r.jsx)(n.strong,{children:"1.4.5"})," upgrade were grandfathered in, however new delegators will not be able to delegate to any validator until the delegator count for that validator falls below ",(0,r.jsx)(n.code,{children:"953"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Existing delegators may continue to delegate additional CSPR, regardless of the current number of delegators staking their ",(0,r.jsx)(n.strong,{children:"CSPR"})," to that validator. However, no new delegators may join the validator until it drops below the ",(0,r.jsx)(n.code,{children:"953"})," limit."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);