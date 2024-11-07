"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[91651],{89277:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"resources/beginner/cep18","title":"Fungible Tokens","description":"This tutorial assumes that you have worked through the following examples. If you have not already done so, then we recommend that you do so now:","source":"@site/docs/resources/beginner/cep18.md","sourceDirName":"resources/beginner","slug":"/resources/tutorials/beginner/cep18","permalink":"/next/resources/tutorials/beginner/cep18","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{"title":"Fungible Tokens","slug":"/resources/tutorials/beginner/cep18"},"sidebar":"tutorials","previous":{"title":"Contract Upgrades","permalink":"/next/resources/tutorials/beginner/upgrade-contract"},"next":{"title":"AWS Casper Nodes","permalink":"/next/resources/tutorials/beginner/aws-node"}}');var a=t(74848),o=t(28453);const r={title:"Fungible Tokens",slug:"/resources/tutorials/beginner/cep18"},i="Fungible Tokens (CEP-18) Implementation and Usage",l={},c=[{value:"Outline of the Tutorial",id:"outline",level:2},{value:"ERC-20 Standard",id:"erc20-standard",level:2},{value:"Interaction of ERC-20 Based Tokens with the Uniswap Standard",id:"erc20-uniswap",level:2},{value:"ERC-20 Implementations on Casper and Implications for Decentralized Exchanges",id:"erc20-implications",level:2},{value:"The Casper CEP-18 Standard",id:"cep18-standard",level:2},{value:"Creating a CEP-18 Token on the Testnet",id:"cep18-testnet",level:2},{value:"Clone and Compile the CEP-18 Contract",id:"cep18-contract-clone",level:3},{value:"Install the CEP-18 Contract",id:"cep18-contract-install",level:3},{value:"Query the Entry Points in the CEP-18 contract",id:"cep18-contract-clone",level:3},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"fungible-tokens-cep-18-implementation-and-usage",children:"Fungible Tokens (CEP-18) Implementation and Usage"})}),"\n",(0,a.jsx)(n.p,{children:"This tutorial assumes that you have worked through the following examples. If you have not already done so, then we recommend that you do so now:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/next/developers/prerequisites",children:"Developer Prerequisites"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/next/developers/writing-onchain-code/getting-started",children:"Getting Started with Rust"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/next/developers/writing-onchain-code/simple-contract",children:"Writing a Basic Smart Contract in Rust"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"outline",children:"Outline of the Tutorial"}),"\n",(0,a.jsx)(n.p,{children:"This tutorial explains the purpose of the ERC-20 standard and the Casper CEP-18 Fungible Token implementation, which serves the same purpose for Casper blockchains. It explains the implications of not adhering to the standard and why it is important to base dApps on one common standard implementation supported by the underlying blockchain protocol."}),"\n",(0,a.jsx)(n.h2,{id:"erc20-standard",children:"ERC-20 Standard"}),"\n",(0,a.jsx)(n.p,{children:"The ERC-20 (Ethereum Request for Comment 20) standard is a technical specification used for creating and implementing tokens on the Ethereum blockchain."}),"\n",(0,a.jsx)(n.p,{children:"It outlines a set of rules and interfaces that tokens must adhere to in order to be compatible with the broader Ethereum ecosystem. ERC-20 tokens have become the most widely adopted and recognized token standard on Ethereum network and other Blockchain protocols like NEAR or Solana.\nSome key points of the ERC-20 standard include:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A set of functions and events that a token contract must implement to enable basic functionalities such as transferring tokens between addresses, checking token balances, and approving third-party spending of tokens. These functions include transfer(), balanceOf(), approve(), transferFrom(), and others. The tokens are not sent between wallet addresses. Instead, the token contract creates an owner list to track how many tokens are owned by which owner address."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Optional metadata functions like ",(0,a.jsx)(n.code,{children:"name()"}),", ",(0,a.jsx)(n.code,{children:"symbol()"}),", and ",(0,a.jsx)(n.code,{children:"decimals()"}),", which provide additional information about the token. These functions allow for the retrieval of token name, ticker symbol, and decimal places for proper display and identification purposes."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A common set of rules for token developers to follow concerning security and consistency. This helps prevent potential vulnerabilities and ensures that tokens behave predictably across different platforms and wallets.\nBy adhering to the ERC-20 standard, token developers can leverage the existing infrastructure, wallets, and exchanges that support ERC-20 tokens."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Each blockchain protocol should have one official supported implementation of the ERC-20 Standard as to allow the interoperability of the assets between the protocols."}),"\n",(0,a.jsx)(n.h2,{id:"erc20-uniswap",children:"Interaction of ERC-20 Based Tokens with the Uniswap Standard"}),"\n",(0,a.jsx)(n.p,{children:"By conforming to the ERC-20 specification it is possible to leverage the functionality of decentralized exchange (DEX) implementations like Uniswap V2."}),"\n",(0,a.jsx)(n.p,{children:"Uniswap V2 uses ERC-20 tokens in the following scenarios:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Listing Tokens \u2013 Any ERC-20 token can be listed on Uniswap V2 if it complies with the ERC-20 standard."}),"\n",(0,a.jsx)(n.li,{children:"Liquidity Pools \u2013 any two pairs of ERC-20 tokens can be used to create a liquidity pool."}),"\n",(0,a.jsxs)(n.li,{children:["Uniswap V2 uses the ERC-20 standard ",(0,a.jsx)(n.code,{children:"transfer()"})," function to allow an exchange of tokens within the liquidity pools."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"erc20-implications",children:"ERC-20 Implementations on Casper and Implications for Decentralized Exchanges"}),"\n",(0,a.jsx)(n.p,{children:"There exist at least two different implementations of the ERC-20 Standard on Casper networks."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/Rengo-Labs/casper-erc20",children:"Rengo-Labs implementation"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/FriendlyMarket/casper-erc20",children:"Friendly Market implementation"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"While both implement the ERC-20 specification using a common set of rules devised from the original ERC-20 Ethereum standard, using different implementations of the standard can introduce complexities and potential risks."}),"\n",(0,a.jsx)(n.p,{children:"The following considerations should be applied when trying to create an ERC-20 Token:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Interoperability \u2013 Different implementations of the ERC-20 standard can hinder seamless integration between tokens, dApps or wallets."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Project Security Audits \u2013 Well-established standards usually undergo a thorough security audit. This ensures a higher level of security and reduces the risk of vulnerabilities."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Ecosystem \u2013 The longer a blockchain network exists, the more widespread a standard implementation like ERC-20 becomes. Using a different implementation may limit availability of supported projects and require additional effort for integration."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The CEP-18 Casper Fungible Token Standard establishes a single implementation of the ERC-20 Standard for Casper networks to avoid disparities and incompatibilities."}),"\n",(0,a.jsx)(n.h2,{id:"cep18-standard",children:"The Casper CEP-18 Standard"}),"\n",(0,a.jsx)(n.p,{children:"The CEP-18 Token Standard is a Casper network compliant implementation of ERC-20 that provides the following contract methods to interact with the token contract:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"allowance"})," - Returns the amount of owner\u2019s tokens allowed to be spent by the spender"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"approve"})," - Allows a spender to transfer up to an amount of the direct caller\u2019s tokens"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"balance_of"})," - Returns the token balance of the owner"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"decimals"})," - Returns the decimal places applied to the balance of the token"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"name"})," - Returns the name of the token"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"symbol"})," - Returns the symbol of the token"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"total_supply"})," - Returns the total supply of the token"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"transfer"})," - Transfers an amount of tokens from the direct caller to a recipient"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"transfer_from"})," - Transfers an amount of tokens from the owner to a recipient, if the direct caller has been previously approved to spend the specified amount on behalf of the owner"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For more detail on these methods, there is a reference implementation available on ",(0,a.jsx)(n.a,{href:"https://github.com/casper-ecosystem/cep18",children:"GitHub"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"cep18-testnet",children:"Creating a CEP-18 Token on the Testnet"}),"\n",(0,a.jsx)(n.h3,{id:"cep18-contract-clone",children:"Clone and Compile the CEP-18 Contract"}),"\n",(0,a.jsx)(n.p,{children:"Building on the construction of a CEP-18 token as explained above, we will be installing our own token contract in global state."}),"\n",(0,a.jsxs)(n.p,{children:["If you are unsure how to interact with Casper Contracts please refer to the following tutorial: ",(0,a.jsx)(n.a,{href:"/next/developers/writing-onchain-code/simple-contract",children:"Writing a Basic Smart Contract in Rust"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"We will clone the token repository and prepare the token contract for sending in a Deploy."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Clone the Fungible Token contract from the repository."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\tgit clone https://github.com/casper-ecosystem/cep18.git\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Make any necessary changes to the code for your customization requirements."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Compile the contract to create the target .wasm file and build the Wasm."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"    cd cep18\n    make prepare\n    make build-contract\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["If the ",(0,a.jsx)(n.code,{children:"build-contract"})," finishes with an error ",(0,a.jsx)(n.code,{children:"wasm-strip: command not found"}),", make sure you install an additional package on MacOS:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"    brew install wabt\n"})})]}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Build and verify the compiled contract."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\tmake test\n"})}),"\n",(0,a.jsx)(n.h3,{id:"cep18-contract-install",children:"Install the CEP-18 Contract"}),"\n",(0,a.jsx)(n.p,{children:"As it is important to understand the potential costs of your Deploy, you should send several on Testnet to familiarize yourself before sending a Deploy to Mainnet."}),"\n",(0,a.jsx)(n.p,{children:"Use the following template to install the contract on the Testnet:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\ncasper-client put-deploy \\\n    --node-address http://<HOST:PORT> \\\n    --chain-name [NETWORK_NAME]] \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount [AMOUNT] \\\n    --session-path [WASM_FILE_PATH]/[File_Name].wasm\n    --session-arg <"NAME:TYPE=\'VALUE\'" OR "NAME:TYPE=null">\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"Check if the request to the Testnet can be made and get a snapshot of the network with the state root hash:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\ncasper-client get-state-root-hash --node-address http://78.46.32.13:7777  \n\n"})}),"\n",(0,a.jsx)(n.p,{children:"You should obtain a response similar to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'{\n  "id": 3323991011802671610,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.15",\n    "state_root_hash": "9b43fd7388559c078f363403972cb079d69786259bf6c5cd9cd7adcc14029d74"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"An exemplary deploy to the Casper Testnet is as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\ncasper-client put-deploy \\\n--node-address http://78.46.32.13:7777 \\\n--chain-name casper-test \\\n--secret-key "./keys/secret_key.pem" \\\n--payment-amount 150000000000 \\\n--session-path "./target/wasm32-unknown-unknown/release/cep18.wasm" \\\n--session-arg "name:string=\'CHF Coin\'" \\\n--session-arg "symbol:string=\'CHFC\'" \\\n--session-arg "decimals:u8=\'10\'" \\\n--session-arg "total_supply:u256=\'1000\'"\n\n'})}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["Always be mindful of the ",(0,a.jsx)(n.code,{children:"--secret-key"})," and ",(0,a.jsx)(n.code,{children:"--session-path"})," arguments.\nPath provided to the arguments should always be with regard to the current folder, where the command is executed."]}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"keys"})," folder is not a part of the CEP18 folder structure. Optionally you should provide a folder where your keys are stored."]})]}),"\n",(0,a.jsxs)(n.p,{children:["The response from the ",(0,a.jsx)(n.code,{children:"put-deploy"})," command should look like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\n{\n  "id": 5066914343373494745,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.15",\n    "deploy_hash": "19853d1569fec2b0fa36e81f2f24bea77ccf039a399071cb7d4b377202a073d6"\n  }\n}\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Using the ",(0,a.jsx)(n.code,{children:"deploy_hash"})," the state of the deploy can be checked:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\ncasper-client get-deploy \\\n    --node-address http://78.46.32.13:7777 19853d1569fec2b0fa36e81f2f24bea77ccf039a399071cb7d4b377202a073d6\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"In the execution results we can see, that the deploy was successful:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\n... \n "execution_results": [\n      {\n        "block_hash": "426a8823c1018e75f8c3823d580116269fd272f20e60561dff0565375a95316d",\n        "result": {\n          "Success": {\n            "cost": "140416131900",\n            "effect": {\n              "operations": [],\n...\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Be always mindful of the payment amount during the deploy process. If the amount is too small, then the deploy will fail with ",(0,a.jsx)(n.code,{children:"Out of gas error"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"cep18-contract-clone",children:"Query the Entry Points in the CEP-18 contract"}),"\n",(0,a.jsx)(n.p,{children:"Get the state root hash from the network:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address http://78.46.32.13:7777\n"})}),"\n",(0,a.jsx)(n.p,{children:"Your response should look similar to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'{\n  "id": 2950480729544096556,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.15",\n    "state_root_hash": "7706d906fce25dcdadb2a9453f5243a6c72c4444e6c826cf2941157333a48705"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"With the state root hash and the account hash which performed the deploy, you can query the contract arguments."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state --node-address http://78.46.32.13:7777 \\\n--state-root-hash 7706d906fce25dcdadb2a9453f5243a6c72c4444e6c826cf2941157333a48705 \\\n--key account-hash-ee57bb3b39eb66b74a1dcf12f3f0e7d8e906e34b11f85dc05497bf33fbf3a1f9 \\\n-q "cep18_contract_hash_CHF Coin/name"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The above command will query the contract for the name. The template for the query is ",(0,a.jsx)(n.code,{children:"contract_name/named_key"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"You will obtain the following response:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'{\n  "id": -7058786841478812744,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.15",\n    "block_header": null,\n    "merkle_proof": "[94526 hex chars]",\n    "stored_value": {\n      "CLValue": {\n        "bytes": "0800000043484620436f696e",\n        "cl_type": "String",\n        "parsed": "CHF Coin"\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Try to query the contract for other Named Keys and check how the contract behaves."}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(n.p,{children:"In this tutorial, we:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Explained the ERC20 standard and what the implications are for not using the standard implementations."}),"\n",(0,a.jsx)(n.li,{children:"Developed a CEP-18 Rust contract on a Casper network and defined the proper arguments for the deploy."}),"\n",(0,a.jsx)(n.li,{children:"Installed the contract on the Testnet"}),"\n",(0,a.jsxs)(n.li,{children:["Called an entry point on the contract to get the value of the Named Key ",(0,a.jsx)(n.code,{children:"name"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(96540);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);