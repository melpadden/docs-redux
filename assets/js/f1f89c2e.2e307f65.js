"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[62021],{24434:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=s(74848),a=s(28453);const c={title:"Calling Contracts"},r="Calling Smart Contracts with the Rust Client",i={id:"developers/cli/calling-contracts",title:"Calling Contracts",description:"Smart contracts exist as stored on-chain logic, allowing disparate users to call the included entry points. This tutorial covers different ways to call Casper contracts with the Casper command-line client and the put-deploy command. Each section below includes a short video demonstrating some example output.",source:"@site/versioned_docs/version-1.5.X/developers/cli/calling-contracts.md",sourceDirName:"developers/cli",slug:"/developers/cli/calling-contracts",permalink:"/1.5.X/developers/cli/calling-contracts",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{title:"Calling Contracts"},sidebar:"developers",previous:{title:"Querying Global State",permalink:"/1.5.X/developers/cli/querying-global-state"},next:{title:"OpCode Costs Tables",permalink:"/1.5.X/developers/cli/opcode-costs"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Calling Contracts by Contract Hash",id:"calling-contracts-by-hash",level:2},{value:"Calling Contracts with Session Arguments",id:"calling-contracts-with-session-args",level:2},{value:"Calling Contracts by Package Hash",id:"calling-contracts-by-package-hash",level:2},{value:"Calling Contracts by Contract Name",id:"calling-contracts-by-name",level:2},{value:"Calling Contracts by Package Name",id:"calling-contracts-by-package-name",level:2},{value:"Calling a Contract using Wasm",id:"calling-a-contract-using-wasm",level:2},{value:"Calling Contracts that Return a Value",id:"calling-contracts-that-return-a-value",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",header:"header",iframe:"iframe",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"import useBaseUrl from '@docusaurus/useBaseUrl';"}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"calling-smart-contracts-with-the-rust-client",children:"Calling Smart Contracts with the Rust Client"})}),"\n",(0,t.jsxs)(n.p,{children:["Smart contracts exist as stored on-chain logic, allowing disparate users to call the included entry points. This tutorial covers different ways to call Casper contracts with the ",(0,t.jsx)(n.a,{href:"/1.5.X/developers/prerequisites#install-casper-client",children:"Casper command-line client"})," and the ",(0,t.jsx)(n.code,{children:"put-deploy"})," command. Each section below includes a short video demonstrating some example output."]}),"\n",(0,t.jsxs)(n.p,{children:["The following examples use two contracts on ",(0,t.jsx)(n.a,{href:"https://testnet.cspr.live/",children:"Testnet"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/counter/blob/master/contract-v1/src/main.rs",children:"Counter contract"})," described while ",(0,t.jsx)(n.a,{href:"/1.5.X/developers/writing-onchain-code/simple-contract",children:"Writing a Basic Smart Contract in Rust"}),". You will need to ",(0,t.jsx)(n.a,{href:"/1.5.X/developers/cli/installing-contracts",children:"install this contract"})," on Testnet"]}),"\n",(0,t.jsxs)(n.li,{children:["The Auction contract found in ",(0,t.jsx)(n.a,{href:"https://testnet.cspr.live/contract-package/e375d42c29c0e4b2baefa63cf2d70af34439eda851e08129d8515515d63bd6a9",children:"this contract package"}),", already installed on Testnet as a system contract. The examples will call its ",(0,t.jsx)(n.code,{children:"delegate"})," entry point"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You know how to ",(0,t.jsx)(n.a,{href:"/1.5.X/developers/cli/sending-deploys",children:"send and verify deploys"})]}),"\n",(0,t.jsxs)(n.li,{children:["You know how to ",(0,t.jsx)(n.a,{href:"/1.5.X/developers/cli/installing-contracts",children:"install contracts and query global state"})," using the ",(0,t.jsx)(n.a,{href:"/1.5.X/developers/prerequisites#install-casper-client",children:"default Casper client"})]}),"\n",(0,t.jsxs)(n.li,{children:["Install the ",(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/counter/blob/master/contract-v1/src/main.rs",children:"Counter contract"})," on Testnet if you have not done so already"]}),"\n",(0,t.jsxs)(n.li,{children:["Review the ",(0,t.jsx)(n.a,{href:"https://testnet.cspr.live/contract-package/e375d42c29c0e4b2baefa63cf2d70af34439eda851e08129d8515515d63bd6a9",children:"system Auction contract"})," on Testnet"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"calling-contracts-by-hash",children:"Calling Contracts by Contract Hash"}),"\n",(0,t.jsxs)(n.p,{children:["After ",(0,t.jsx)(n.a,{href:"/1.5.X/developers/cli/installing-contracts",children:"installing a contract"})," in global state, you can use the contract's hash to call one of its entry points. The following usage of ",(0,t.jsx)(n.code,{children:"put-deploy"})," allows you to call an entry point and receive a deploy hash. The hash is needed to verify that the deploy was processed successfully."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name [CHAIN_NAME] \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-hash [HEX_STRING] \\\n    --session-entry-point [ENTRY_POINT_FUNCTION]\n"})}),"\n",(0,t.jsx)(n.p,{children:"The arguments used above are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port for JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"chain-name"})," - The chain name of the network where you wish to send the deploy. For Mainnet, use ",(0,t.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,t.jsx)(n.em,{children:"casper-test"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the deploy"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"payment-amount"})," - The payment for the deploy in motes"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-hash"})," - Hex-encoded hash of the stored contract to be called as the session"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-entry-point"})," - Name of the method that will be used when calling the session contract"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example - Calling the Counter contract by hash:"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"--session-hash"}),' option identifies a stored contract with an entry-point called "counter-inc".']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'casper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 100000000 \\\n    --session-hash hash-22228188b85b6ee4a4a41c7e98225c3918139e9a5eb4b865711f2e409d85e88e \\\n    --session-entry-point "counter-inc"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This ",(0,t.jsx)(n.code,{children:"put-deploy"})," command is nearly identical to the command used to ",(0,t.jsx)(n.a,{href:"/1.5.X/developers/cli/installing-contracts#installing-contract-code",children:"install the contract"}),". Here, instead of ",(0,t.jsx)(n.code,{children:"session-path"})," pointing to the Wasm binary, we have ",(0,t.jsx)(n.code,{children:"session-hash"})," and ",(0,t.jsx)(n.code,{children:"session-entry-point"})," identifying the on-chain contract and its associated entry point. No Wasm file is needed in this example since the contract is already on the blockchain, and the entry point doesn\u2019t return a value. If an entry point returns a value, use code to ",(0,t.jsx)(n.a,{href:"/1.5.X/resources/tutorials/advanced/return-values-tutorial",children:"interact with runtime return values"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The payment amount varies based on each deploy and network ",(0,t.jsx)(n.a,{href:"/1.5.X/concepts/glossary/C#chainspec",children:"chainspec"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["The following sample response contains a ",(0,t.jsx)(n.code,{children:"deploy_hash"}),", needed to verify the changes in global state, as described ",(0,t.jsx)(n.a,{href:"/1.5.X/developers/cli/installing-contracts#querying-global-state",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Sample response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'{\n  "id": 1197172763279676268,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "deploy_hash": "24b58fbc0cbbfa3be978e7b78b9b37fc1d17c887b1abed2b2e2e704f7ee5427c"\n  }\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Video - Calling a contract by hash:"})}),"\n",(0,t.jsx)(n.p,{children:"This video shows how to query a previously installed Counter contract by hash."}),"\n",(0,t.jsxs)(n.p,{align:"center",children:["\n",(0,t.jsx)(n.iframe,{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=11",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"calling-contracts-with-session-args",children:"Calling Contracts with Session Arguments"}),"\n",(0,t.jsxs)(n.p,{children:["When calling contract entry points, you may need to pass in information using session arguments. The ",(0,t.jsx)(n.code,{children:"put-deploy"})," command allows you to do this with the ",(0,t.jsx)(n.code,{children:"--session-arg"})," option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name [CHAIN_NAME] \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-hash [HEX_STRING] \\\n    --session-entry-point [ENTRY_POINT_FUNCTION] \\\n    --session-arg ["NAME:TYPE=\'VALUE\'" OR "NAME:TYPE=null"]...\n'})}),"\n",(0,t.jsx)(n.p,{children:"The arguments of interest are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-hash"})," - Hex-encoded hash of the stored contract to be called as the session"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-entry-point"})," - Name of the method that will be used when calling the session contract"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-arg"})," - For simple CLTypes, a named and typed arg is passed to the Wasm code. To see an example for each type, run: 'casper-client put-deploy --show-arg-examples'"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example - Calling the Auction contract using session arguments:"})}),"\n",(0,t.jsxs)(n.p,{children:["This example demonstrates how to call the Auction contract's entry point ",(0,t.jsx)(n.code,{children:"delegate"})," with three arguments:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The argument ",(0,t.jsx)(n.code,{children:"validator"})," is the public key of the validator to whom the tokens will be delegated"]}),"\n",(0,t.jsxs)(n.li,{children:["The argument ",(0,t.jsx)(n.code,{children:"amount"})," is the number of tokens to be delegated"]}),"\n",(0,t.jsxs)(n.li,{children:["The argument ",(0,t.jsx)(n.code,{children:"delegator"})," is the public key of the account delegating tokens to a validator"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To make the call, we use the contract hash, ",(0,t.jsx)(n.code,{children:"hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2"}),", and the ",(0,t.jsx)(n.code,{children:"--session-hash"})," option."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'casper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 2500000000 \\\n    --session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n    --session-entry-point "delegate" \\\n    --session-arg "validator:public_key=\'0145fb72c75e1b459839555d70356a5e6172e706efa204d86c86050e2f7878960f\'" \\\n    --session-arg "amount:u512=\'500000000000\'" \\\n    --session-arg "delegator:public_key=\'0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf\'"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Video - Calling a contract with session arguments:"})}),"\n",(0,t.jsx)(n.p,{children:"This video shows how to call a modified Counter contract using session arguments."}),"\n",(0,t.jsxs)(n.p,{align:"center",children:["\n",(0,t.jsx)(n.iframe,{width:"400",height:"225",src:"https://www.youtube.com/embed/XB_ojY1_0Uo",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"calling-contracts-by-package-hash",children:"Calling Contracts by Package Hash"}),"\n",(0,t.jsxs)(n.p,{children:["You can also call an entry point in a contract that is part of a contract package (see ",(0,t.jsx)(n.a,{href:"/1.5.X/developers/writing-onchain-code/upgrading-contracts",children:"contract upgrades"}),"). Call ",(0,t.jsx)(n.code,{children:"put-deploy"})," using the stored package hash, the entry point you wish to access, the contract version number, and any runtime arguments. The call defaults to the highest enabled version if no version was specified."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name [CHAIN_NAME] \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-package-hash [HEX_STRING] \\\n    --session-entry-point [ENTRY_POINT_FUNCTION] \\\n    --session-version [INTEGER]\n"})}),"\n",(0,t.jsx)(n.p,{children:"The arguments of interest are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-package-hash"})," - Hex-encoded hash of the stored package to be called as the session"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-entry-point"})," - Name of the method that will be used when calling the session contract"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-version"})," - Version of the called session contract. The latest will be used by default"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1 - Calling the Counter using the package hash and version:"})}),"\n",(0,t.jsx)(n.p,{children:'In this example, we call the Counter contract by its package hash and version number. The entry point invoked is "counter-inc".'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'casper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 100000000 \\\n    --session-package-hash hash-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e \\\n    --session-entry-point "counter-inc" \\\n    --session-version 1\n'})}),"\n",(0,t.jsx)(n.p,{children:"To find the contract package hash, look at the account's named keys associated with the contract. Here is an example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "key": "hash-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e",\n    "name": "counter_package_name"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2 - Calling the Auction using the package hash and version:"})}),"\n",(0,t.jsxs)(n.p,{children:["This example demonstrates how to call the Auction contract's ",(0,t.jsx)(n.code,{children:"delegate"})," entry point by specifying the package hash using the ",(0,t.jsx)(n.code,{children:"--session-package-hash"})," option. The call defaults to the highest enabled version since no version was specified with the ",(0,t.jsx)(n.code,{children:"--session-version"})," option."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'casper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 2500000000 \\\n    --session-package-hash hash-e375d42c29c0e4b2baefa63cf2d70af34439eda851e08129d8515515d63bd6a9 \\\n    --session-entry-point "delegate" \\\n    --session-arg "validator:public_key=\'0145fb72c75e1b459839555d70356a5e6172e706efa204d86c86050e2f7878960f\'" \\\n    --session-arg "amount:u512=\'500000000000\'" \\\n    --session-arg "delegator:public_key=\'0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf\'"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Video - Calling a contract using the package hash:"})}),"\n",(0,t.jsx)(n.p,{children:"The video shows how to query the previously installed Counter contract package."}),"\n",(0,t.jsxs)(n.p,{align:"center",children:["\n",(0,t.jsx)(n.iframe,{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=15",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"calling-contracts-by-name",children:"Calling Contracts by Contract Name"}),"\n",(0,t.jsxs)(n.p,{children:["We can also reference a contract using a key as the contract name. When you write the contract, use the ",(0,t.jsx)(n.code,{children:"put_key"})," function to add the ContractHash under the contract's ",(0,t.jsx)(n.a,{href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.NamedKeys.html#",children:"NamedKeys"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Having a key enables you to call a contract's entry-point in global state by using the ",(0,t.jsx)(n.code,{children:"put-deploy"})," command as illustrated here:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name [CHAIN_NAME] \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-name [NAMED_KEY_FOR_SMART_CONTRACT] \\\n    --session-entry-point [ENTRY_POINT_FUNCTION]\n"})}),"\n",(0,t.jsx)(n.p,{children:"The arguments of interest are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-name"})," - Name of the stored contract (associated with the executing account) to be called as the session"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-entry-point"})," - Name of the method that will be used when calling the session contract"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1 - Calling the Counter contract using a named key:"})}),"\n",(0,t.jsxs)(n.p,{children:['This example uses the Counter contract stored in global state under the "counter" named key. The code stores the ContractHash into a URef, which can be referenced once the contract is installed in global state. The full implementation is available on ',(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/counter/blob/934a452ccba8c5cf12f8bde706736400e047fba5/contract-v1/src/main.rs#L110",children:"GitHub"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"runtime::put_key(CONTRACT_KEY, stored_contract_hash.into());\n"})}),"\n",(0,t.jsx)(n.p,{children:'The following command invokes the entry point "counter_inc" and the contract stored under the "counter" named key.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'casper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount 100000000 \\\n    --session-name "counter" \\\n    --session-entry-point "counter_inc"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The sample response will contain a ",(0,t.jsx)(n.code,{children:"deploy_hash"}),", which you need to use as described ",(0,t.jsx)(n.a,{href:"/1.5.X/developers/cli/installing-contracts#querying-global-state",children:"here"})," to verify the changes in global state."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2 - Calling the Auction contract using a named key:"})}),"\n",(0,t.jsxs)(n.p,{children:['This example uses the system Auction contract stored in global state under the "auction" key and its ',(0,t.jsx)(n.code,{children:"delegate"})," entry point."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'casper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 2500000000 \\\n    --session-name "auction" \\\n    --session-entry-point "delegate" \\\n    --session-arg "validator:public_key=\'0145fb72c75e1b459839555d70356a5e6172e706efa204d86c86050e2f7878960f\'" \\\n    --session-arg "amount:u512=\'500000000000\'" \\\n    --session-arg "delegator:public_key=\'0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf\'"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Video - Calling a contract using a named key:"})}),"\n",(0,t.jsx)(n.p,{children:"This short video shows how to query the previously installed Counter contract using a named key, which is the name used to reference the contract."}),"\n",(0,t.jsxs)(n.p,{align:"center",children:["\n",(0,t.jsx)(n.iframe,{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=12",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"calling-contracts-by-package-name",children:"Calling Contracts by Package Name"}),"\n",(0,t.jsxs)(n.p,{children:["To call an entry point in a contract by referencing the contract package name, you can use the ",(0,t.jsx)(n.code,{children:"session-package-name"}),", ",(0,t.jsx)(n.code,{children:"session-entry-point"}),", and ",(0,t.jsx)(n.code,{children:"session-version"})," arguments. This will enable you to access the entry point in global state by using the ",(0,t.jsx)(n.code,{children:"put-deploy"})," command as illustrated here:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name [CHAIN_NAME] \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-package-name [NAMED_KEY_FOR_PACKAGE] \\\n    --session-entry-point [ENTRY_POINT_FUNCTION] \\\n    --session-version [INTEGER]\n"})}),"\n",(0,t.jsx)(n.p,{children:"The arguments of interest are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-package-name"})," - Name of the stored package to be called as the session"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-entry-point"})," - Name of the method that will be used when calling the session contract"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-version"})," - Version of the called session contract. The latest will be used by default"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1 - Specifying the package name and version number:"})}),"\n",(0,t.jsx)(n.p,{children:'This example calls the entry point "counter-inc" as part of the contract package name "counter_package_name", version 1, without any runtime arguments.'}),"\n",(0,t.jsxs)(n.p,{children:["You should have previously created the contract by using ",(0,t.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_contract.html",children:"new_contract"}),", and provided the contract package name as the ",(0,t.jsx)(n.code,{children:"hash_name"})," argument of ",(0,t.jsx)(n.code,{children:"new_contract"}),"."]}),"\n",(0,t.jsx)(n.p,{children:'This example code stores the "contract_package_name" into a NamedKey, which you can reference once you install the contract in global state.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'    let (stored_contract_hash, contract_version) =\n        storage::new_contract(counter_entry_points, \n            Some(counter_named_keys), \n            Some("counter_package_name".to_string()),\n            Some("counter_access_uref".to_string())\n    );\n'})}),"\n",(0,t.jsx)(n.p,{children:"Here is the command to call the contract using the package name:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'casper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 100000000 \\\n    --session-package-name "counter_package_name" \\\n    --session-entry-point "counter-inc" \\\n    --session-version 1\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2 - Calling the package without specifying the version:"})}),"\n",(0,t.jsxs)(n.p,{children:["This example demonstrates how to call a contract that is part of the ",(0,t.jsx)(n.code,{children:"erc20_test_call"}),' package using runtime arguments. The call invokes the "check_balance_of" entry point and defaults to the highest enabled version since no version was specified.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'    casper-client put-deploy \\\n    --node-address http://3.143.158.19:7777 \\\n    --chain-name integration-test \\\n    --secret-key ~/casper/demo/user_a/secret_key.pem \\\n    --payment-amount 1000000000 \\\n    --session-package-name "erc20_test_call" \\\n    --session-entry-point "check_balance_of" \\\n    --session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n    --session-arg "address:key=\'account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd\'" \n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Video - Calling a contract using the package name:"})}),"\n",(0,t.jsx)(n.p,{children:"This video demonstrates how to call versioned contracts by package name."}),"\n",(0,t.jsxs)(n.p,{align:"center",children:["\n",(0,t.jsx)(n.iframe,{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=16",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"calling-a-contract-using-wasm",children:"Calling a Contract using Wasm"}),"\n",(0,t.jsxs)(n.p,{children:["Session code or contract code (compiled to Wasm) can act on a contract and change its state. The ",(0,t.jsx)(n.code,{children:"put-deploy"})," command supports this mechanism as well:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name [CHAIN_NAME] \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-path [PATH]/[FILE_NAME].wasm\n"})}),"\n",(0,t.jsx)(n.p,{children:"The argument of interest is:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-path"})," - The path to the compiled Wasm on your computer"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example - Session code acting on a contract:"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/1.5.X/counter",children:"Counter Contract Tutorial"})," shows how to change the state of a contract (counter-v1.wasm) using session code (counter-call.wasm)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"\ncasper-client put-deploy \\\n    --node-address http://65.21.235.219:7777 \\\n    --chain-name casper-test \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount 25000000000 \\\n    --session-path [PATH_TO_YOUR_COMPILED_WASM]/counter-call.wasm\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Video - Calling a contract using Wasm:"})}),"\n",(0,t.jsxs)(n.p,{align:"center",children:["\n",(0,t.jsx)(n.iframe,{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=13",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"calling-contracts-that-return-a-value",children:"Calling Contracts that Return a Value"}),"\n",(0,t.jsxs)(n.p,{children:["Visit the ",(0,t.jsx)(n.a,{href:"/1.5.X/resources/tutorials/advanced/return-values-tutorial",children:"Interacting with Runtime Return Values"})," tutorial to learn how to call a contract that returns a value using session code or contract code."]}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/1.5.X/counter",children:"Counter Contract Tutorial"})," takes you through a detailed walkthrough on how to query global state to verify a contract's state"]}),"\n",(0,t.jsxs)(n.li,{children:["Learn more about ",(0,t.jsx)(n.a,{href:"/1.5.X/developers/cli/delegate",children:"Delegating with the Casper Client"})]}),"\n",(0,t.jsxs)(n.li,{children:["Look into the ",(0,t.jsx)(n.a,{href:"/resources/",children:"Resources for Smart Contract Authors"})]}),"\n",(0,t.jsxs)(n.li,{children:["See the ",(0,t.jsx)(n.a,{href:"/developers",children:"Developer How To Guides"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var t=s(96540);const a={},c=t.createContext(a);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);