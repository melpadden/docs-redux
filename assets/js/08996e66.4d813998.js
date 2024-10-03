"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[94426],{57450:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var t=a(74848),s=a(28453);const r={},c="SDK Client Library Usage",i={id:"developers/dapps/sdk/client-library-usage",title:"SDK Client Library Usage",description:"Installing the SDKs",source:"@site/docs/developers/dapps/sdk/client-library-usage.md",sourceDirName:"developers/dapps/sdk",slug:"/developers/dapps/sdk/client-library-usage",permalink:"/developers/dapps/sdk/client-library-usage",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{},sidebar:"developers",previous:{title:"SDK Client Libraries",permalink:"/sdk"},next:{title:"JavaScript/TypeScript SDK",permalink:"/developers/dapps/sdk/script-sdk"}},l={},o=[{value:"Installing the SDKs",id:"installing-the-sdks",level:2},{value:"Creating Accounts",id:"creating-accounts",level:2},{value:"Creating new account keys",id:"creating-new-account-keys",level:3},{value:"Exporting the public key and account hash",id:"exporting-the-public-key-and-account-hash",level:3},{value:"Uploading the secret key from a file",id:"uploading-the-secret-key-from-a-file",level:3},{value:"Transferring CSPR",id:"transferring-cspr",level:2},{value:"Installing Contracts",id:"installing-contracts",level:2},{value:"Staking",id:"staking",level:2},{value:"Calling Contracts",id:"calling-contracts",level:2},{value:"Staking",id:"staking-1",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",tabitem:"tabitem",tabs:"tabs",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';"}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"sdk-client-library-usage",children:"SDK Client Library Usage"})}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-sdks",children:"Installing the SDKs"}),"\n",(0,t.jsxs)(n.tabs,{children:["\n",(0,t.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"npm"})," or ",(0,t.jsx)(n.code,{children:"yarn"})," to install the ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/casper-js-sdk",children:"casper-js-sdk"})," package:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install casper-js-sdk\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn install casper-js-sdk\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.tabitem,{value:"python",label:"Python",children:["\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"https://pypi.org/project/pip/",children:(0,t.jsx)(n.code,{children:"pip"})})," to install the ",(0,t.jsx)(n.a,{href:"https://pypi.org/project/pycspr/",children:"pycspr"})," package:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install pycspr\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.tabitem,{value:"rust",label:"Rust",children:["\n",(0,t.jsxs)(n.p,{children:["Include the casper-client dependency to your ",(0,t.jsx)(n.code,{children:"Cargo.toml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[dependencies]\ncasper-client="1.5.1"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["and add it to your ",(0,t.jsx)(n.code,{children:"main.rs"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"extern crate casper_client;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Use types and methods from casper_client:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use casper_client::transfer;\nuse casper_client::put_deploy;\n//...\n"})}),"\n",(0,t.jsx)(n.p,{children:"as casper_client functions are asynchronous, a tokyo runtime is necessary for testing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[dependencies]\ntokio = { version = "^1.27.0", features = ["full"] }\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"creating-accounts",children:"Creating Accounts"}),"\n",(0,t.jsxs)(n.p,{children:["You may use the SDKs to interact with accounts on a Casper network. Accounts can use either an Ed25519 or Secp256k1 digital signature scheme. See the ",(0,t.jsx)(n.a,{href:"/concepts/accounts-and-keys",children:"Accounts and Cryptographic Keys"})," page for more details."]}),"\n",(0,t.jsx)(n.h3,{id:"creating-new-account-keys",children:"Creating new account keys"}),"\n",(0,t.jsxs)(n.tabs,{children:["\n",(0,t.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const { Keys } = require("casper-js-sdk");\nconst keypair = Keys.Ed25519.new();\nconst { publicKey, privateKey } = keypair;\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"Ed25519"})," with ",(0,t.jsx)(n.code,{children:"Secp256K1"})," if you wish."]}),"\n"]}),"\n",(0,t.jsxs)(n.tabitem,{value:"python",label:"Python",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from pycspr.crypto import KeyAlgorithm, get_key_pair\nkeypair = get_key_pair(KeyAlgorithm.ED25519)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"ED25519"})," with ",(0,t.jsx)(n.code,{children:"SECP256K1"})," if you wish."]}),"\n"]}),"\n",(0,t.jsxs)(n.tabitem,{value:"rust",label:"Rust",children:["\n",(0,t.jsxs)(n.p,{children:["Create a keypair and write the files to a specified ",(0,t.jsx)(n.code,{children:"PATH"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'    casper_client::keygen::generate_files("PATH", "ED25519", false).unwrap();\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"ED25519"})," with ",(0,t.jsx)(n.code,{children:"SECP256K1"})," if you wish."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"exporting-the-public-key-and-account-hash",children:"Exporting the public key and account hash"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"keypair"})," variable contains the private and public key pair for the account. You can use, read, or export the public key. You may also want access to the account hash, often used within smart contracts on a Casper network. The following methods show how to extract the public key and account hash."]}),"\n",(0,t.jsxs)(n.tabs,{children:["\n",(0,t.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Create a hexadecimal representation of the public key and account hash.\nconst publicKeyHex = publicKey.toHex();\nconst accountHashHex = publicKey.toAccountHashStr();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that ",(0,t.jsx)(n.code,{children:"accountHashHex"}),' will be prefixed with the text "account-hash-".']}),"\n"]}),"\n",(0,t.jsxs)(n.tabitem,{value:"python",label:"Python",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import pycspr.crypto\n\npublicKeyBytes = keypair.account_key\npublicKeyHex = pycspr.crypto.cl_checksum.encode(publicKeyBytes)\naccountHashBytes = pycspr.crypto.cl_operations.get_account_hash(publicKeyBytes)\naccountHashHex = pycspr.crypto.cl_checksum.encode(accountHashBytes)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"uploading-the-secret-key-from-a-file",children:"Uploading the secret key from a file"}),"\n",(0,t.jsx)(n.p,{children:"To use a specific account, you should not include the private key in the source code; instead, upload the account's secret key from a local file. Update the path to the file in the example below."}),"\n",(0,t.jsxs)(n.tabs,{children:["\n",(0,t.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const { Keys } = require("casper-js-sdk");\nconst keypair = Keys.Ed25519.loadKeyPairFromPrivateFile("./secret_key.pem");\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"Ed25519"})," with ",(0,t.jsx)(n.code,{children:"Secp256K1"})," if you wish."]}),"\n"]}),"\n",(0,t.jsxs)(n.tabitem,{value:"python",label:"Python",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import pycspr\nkeypair = pycspr.parse_private_key(\n    "./secret_key.pem",\n    pycspr.crypto.KeyAlgorithm.ED25519\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"ED25519"})," with ",(0,t.jsx)(n.code,{children:"SECP256K1"})," if you wish."]}),"\n"]}),"\n",(0,t.jsxs)(n.tabitem,{value:"rust",label:"Rust",children:["\n",(0,t.jsx)(n.p,{children:"In Rust, we don't explicitly import the private key as an object, but instead supply its path as an argument when calling functions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'let deploy_params: casper_client::DeployStrParams = casper_client::DeployStrParams{\n    secret_key:"./secret_key.pem",\n    timestamp:"",\n    ...\n};\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"transferring-cspr",children:"Transferring CSPR"}),"\n",(0,t.jsxs)(n.p,{children:["Using the ",(0,t.jsx)(n.code,{children:"keypair"})," created ",(0,t.jsx)(n.a,{href:"#creating-accounts",children:"above"}),", you can sign a deploy that transfers CSPR."]}),"\n",(0,t.jsxs)(n.p,{children:["Replace the ",(0,t.jsx)(n.code,{children:"NODE_ADDRESS"})," and corresponding RPC port with an active node on the network. You can find active online peers for Mainnet on ",(0,t.jsx)(n.a,{href:"https://cspr.live/tools/peers",children:"cspr.live"})," and for Testnet on ",(0,t.jsx)(n.a,{href:"https://testnet.cspr.live/tools/peers",children:"testnet.cspr.live"}),". The RPC port is usually ",(0,t.jsx)(n.code,{children:"7777"}),", but it depends on the network's configuration settings."]}),"\n",(0,t.jsxs)(n.tabs,{children:["\n",(0,t.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const { CasperClient, DeployUtil } = require("casper-js-sdk");\n\nconst casperClient = new CasperClient("http://NODE_ADDRESS:7777/rpc");\nconst receipientPublicKeyHex = "01e8c84f4fbb58d37991ef373c08043a45c44cd7f499453fa2bd3e141cc0113b3c"\n\nconst amount = 2.5e9 // Minimum transfer: 2.5 CSPR\nlet deployParams = new DeployUtil.DeployParams(\n  keypair.publicKey,\n  "casper" // or "casper-test" for Testnet\n);\n\nconst session = DeployUtil.ExecutableDeployItem.newTransferWithOptionalTransferId(\n  amount,\n  recipientPublicKeyHex\n);\n\nconst payment = DeployUtil.standardPayment(0.1e9); // Gas payment in motes: 0.1 CSPR\nconst deploy = DeployUtil.makeDeploy(deployParams, session, payment);\nconst signedDeploy = DeployUtil.signDeploy(deploy, keypair);\n\nconsole.log(await casperClient.putDeploy(signedDeploy));\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.tabitem,{value:"python",label:"Python",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import pycspr\n\nclient = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = 7777))\nrecipientPublicKeyHex = "01e8c84f4fbb58d37991ef373c08043a45c44cd7f499453fa2bd3e141cc0113b3c"\nrecipientPublicKeyBytes = pycspr.crypto.cl_checksum.decode(recipientPublicKeyHex)\n\ndeployParams = pycspr.create_deploy_parameters(\n    account = keypair,\n    chain_name = "casper" # or "casper-test" for Testnet\n)\n\ndeploy = pycspr.create_transfer(\n    params = deployParams,\n    amount = int(2.5e9), # Minimum transfer: 2.5 CSPR\n    target = recipientPublicKeyBytes\n)\n\ndeploy.approve(keypair)\nclient.send_deploy(deploy)\nprint(deploy.hash.hex())\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.tabitem,{value:"rust",label:"Rust",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'extern crate casper_client;\nasync fn send_transfer(){\n    let maybe_rpc_id: &str = "";\n    let node_address: &str = "http://135.181.216.142:7777";\n    let verbosity_level: u64 = 1;\n    let amount: &str = "2500000000";\n    let target_account: &str = recipient;\n    let transfer_id: &str = "1";\n    let deploy_params: casper_client::DeployStrParams = casper_client::DeployStrParams{\n        secret_key:"./sk_testnet.pem",\n        timestamp:"",\n        ttl:"50s",\n        gas_price:"1000000000",\n        chain_name:"casper", // or "casper-test" for testnet\n        dependencies: Vec::new(),\n        session_account: "01daad67ebbcb725e02a1955a6617512b311435a21ca6d523085aa015d2d1b473a"\n\n    };\n    let recipient: &str = "0106ca7c39cd272dbf21a86eeb3b36b7c26e2e9b94af64292419f7862936bca2ca";\n    let payment_params: casper_client::PaymentStrParams = casper_client::PaymentStrParams::with_amount(amount);\n    let result = casper_client::transfer(maybe_rpc_id, node_address, verbosity_level, amount, target_account, transfer_id, deploy_params, payment_params).await.unwrap();\n    println!("Deploy response: {:?}", result);\n}\n\n#[tokio::main]\nasync fn main(){\n    send_transfer().await;\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Once submitted, the above snippet will print the deploy hash in the console."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"installing-contracts",children:"Installing Contracts"}),"\n",(0,t.jsx)(n.p,{children:"To install a contract on the network, you need to sign and send a deploy containing the compiled Wasm."}),"\n",(0,t.jsxs)(n.p,{children:["Replace the ",(0,t.jsx)(n.code,{children:"NODE_ADDRESS"})," and corresponding RPC port with an active node on the network. You can find active online peers for Mainnet on ",(0,t.jsx)(n.a,{href:"https://cspr.live/tools/peers",children:"cspr.live"})," and for Testnet on ",(0,t.jsx)(n.a,{href:"https://testnet.cspr.live/tools/peers",children:"testnet.cspr.live"}),". The RPC port is usually ",(0,t.jsx)(n.code,{children:"7777"}),", but it depends on the network's configuration settings."]}),"\n",(0,t.jsxs)(n.tabs,{children:["\n",(0,t.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const { CasperClient, Contracts, RuntimeArgs, CLValueBuilder } = require("casper-js-sdk")\nconst fs = require("fs")\n\nconst casperClient = new CasperClient("http://NODE_ADDRESS:7777/rpc")\nconst contract = new Contracts.Contract(casperClient)\n\nconst contractWasm = new Uint8Array(fs.readFileSync("/path/to/contract.wasm").buffer)\n\nconst runtimeArguments = RuntimeArgs.fromMap({\n  "argument": CLValueBuilder.string("Hello world!")\n})\n\nconst deploy = contract.install(\n  contractWasm,\n  runtimeArguments,\n  "10000000000", // Gas payment (10 CSPR)\n  keypair.publicKey,\n  "casper", // or "casper-test" for Testnet\n  [keypair]\n)\n\nconsole.log(await casperClient.putDeploy(deploy))\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.tabitem,{value:"python",label:"Python",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import pycspr\nfrom pycspr.types import ModuleBytes, CL_String\n\nclient = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = 7777))\n\ndeployParams = pycspr.create_deploy_parameters(\n    account = keypair,\n    chain_name = "casper" # or "casper-test" for Testnet\n)\npayment = pycspr.create_standard_payment(10000000000) # 10 CSPR\nsession = ModuleBytes(\n    module_bytes = pycspr.read_wasm("/path/to/contract.wasm"),\n    args = {\n        "message": CL_String("Hello world!"),\n    }\n)\n\ndeploy = pycspr.create_deploy(deployParams, payment, session)\n\ndeploy.approve(keypair)\nclient.send_deploy(deploy)\nprint(deploy.hash.hex())\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.tabitem,{value:"rust",label:"Rust",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'extern crate casper_client;\nasync fn put_deploy(){\n    let maybe_rpc: &str = "";\n    let verbosity: u64 = 1;\n    let node_address: &str = "http://135.181.216.142:7777";\n    let deploy_params: casper_client::DeployStrParams = casper_client::DeployStrParams{\n        secret_key:"./sk_testnet.pem",\n        timestamp:"",\n        ttl:"50s",\n        gas_price:"1000000000",\n        chain_name:"casper", // or "casper-test"\n        dependencies: Vec::new(),\n        session_account: "01daad67ebbcb725e02a1955a6617512b311435a21ca6d523085aa015d2d1b473a"\n\n    };\n    // Without session args:\n    // let session_args: Vec<&str> = Vec::new();\n    // With session args:\n    let mut session_args: Vec<&str> = Vec::new();\n    session_args.push("argument:String=\'hello world\'");\n    let session_params: casper_client::SessionStrParams = casper_client::SessionStrParams::with_path("./contract.wasm", session_args, "");\n    let payment_params: casper_client::PaymentStrParams = casper_client::PaymentStrParams::with_amount("10000000000");\n    let result = casper_client::put_deploy(maybe_rpc_id, node_address, verbosity_level, deploy_params, session_params, payment_params).await.unwrap();\n    println!("Deploy response: {:?}", result);\n}\n\n#[tokio::main]\nasync fn main(){\n    send_transfer().await;\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Once submitted, the above snippet will print the deploy hash in the console."}),"\n",(0,t.jsx)(n.h2,{id:"staking",children:"Staking"}),"\n",(0,t.jsx)(n.p,{children:"Token staking is a fundamental aspect of the Casper Network, whereby users lock up tokens as collateral in exchange for the ability to participate in the blockchain's consensus mechanism and earn rewards. This delegated Proof-of-Stake consensus mechanism is crucial for the network's effective operation. With the aid of any of the Casper SDKs, you can delegate your tokens to validators and participate in staking on the network."}),"\n",(0,t.jsxs)(n.p,{children:["The delegation functionality is available as a smart contract, which can be found in the ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node",children:"casper-node"})," repository. To delegate tokens, first clone the repository:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/casper-network/casper-node.git\ncd casper-node/\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then compile the ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/dev/smart_contracts/contracts/client/delegate/src/main.rs",children:"delegate contract"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"make setup-rs\nmake build-contract-rs/delegate\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, assuming that you cloned ",(0,t.jsx)(n.code,{children:"casper-node"})," from your project's root directory, ",(0,t.jsx)(n.code,{children:"cd"})," back into it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd ../\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now in your dApp's backend (or standalone script), load the ",(0,t.jsx)(n.em,{children:"delegate.wasm"}),' file into memory and deploy it with the arguments "amount", "delegator", and "validator" included.']}),"\n",(0,t.jsxs)(n.tabs,{children:["\n",(0,t.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const { CasperClient, Contracts, RuntimeArgs, CLValueBuilder, CLPublicKey } = require("casper-js-sdk");\nconst fs = require("fs");\n\nconst casperClient = new CasperClient("http://NODE_ADDRESS:7777/rpc")\nconst contract = new Contracts.Contract(casperClient)\n\nconst contractWasm = new Uint8Array(fs.readFileSync("./casper-node/target/wasm32-unknown-unknown/release/delegate.wasm").buffer);\n\nconst runtimeArguments = RuntimeArgs.fromMap({\n    "amount": CLValueBuilder.u512(500e9), // Minimum delegation amount: 500 CSPR\n    "delegator": keypair.publicKey,\n    "validator": CLPublicKey.fromHex("01e8c84f4fbb58d37991ef373c08043a45c44cd7f499453fa2bd3e141cc0113b3c")\n});\n\nconst deploy = contract.install(\n    contractWasm,\n    runtimeArguments,\n    "5000000000", // Gas payment (5 CSPR)\n    keypair.publicKey,\n    "casper", // or "casper-test" for testnet\n    [keypair]\n);\n\n(async () => {\n    console.log(await casperClient.putDeploy(deploy));\n})();    \n'})}),"\n"]}),"\n",(0,t.jsxs)(n.tabitem,{value:"python",label:"Python",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import pycspr\n\nvalidator_public_key = pycspr.factory.accounts.create_public_key_from_account_key(\n    bytes.fromhex("01e8c84f4fbb58d37991ef373c08043a45c44cd7f499453fa2bd3e141cc0113b3c")\n)\n\ndeploy_params = pycspr.create_deploy_parameters(\n    account = keypair, # Only the public key is used, see `create_deploy_parameters`\n    chain_name = "casper" # or "casper-test" for testnet\n)\n\ndeploy = pycspr.create_validator_delegation(\n    params = deploy_params,\n    amount = int(500e9), # Minimum delegation amount: 500 CSPR\n    public_key_of_delegator = keypair,\n    public_key_of_validator = validator_public_key,\n    path_to_wasm = "./casper-node/target/wasm32-unknown-unknown/release/delegate.wasm"\n)\n\ndeploy.approve(keypair)\nclient.send_deploy(deploy)\nprint(deploy.hash.hex())\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.tabitem,{value:"rust",label:"Rust",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'extern crate casper_client;\nasync fn put_deploy(){\n    let maybe_rpc: &str = "";\n    let verbosity: u64 = 1;\n    let node_address: &str = "http://135.181.216.142:7777";\n    let deploy_params: casper_client::DeployStrParams = casper_client::DeployStrParams{\n        secret_key:"./sk_testnet.pem",\n        timestamp:"",\n        ttl:"50s",\n        gas_price:"1000000000",\n        chain_name:"casper", // or "casper-test" for testnet\n        dependencies: Vec::new(),\n        session_account: "01daad67ebbcb725e02a1955a6617512b311435a21ca6d523085aa015d2d1b473a"\n\n    };\n    let mut session_args: Vec<&str> = Vec::new();\n    session_args.push("amount:U512=\'500000000000\'");\n    \n    session_args.push("delegator:public_key=\'01daad67ebbcb725e02a1955a6617512b311435a21ca6d523085aa015d2d1b473a\'");\n    session_args.push("validator:public_key=\'validator_public_key\'");\n  \n    let session_params: casper_client::SessionStrParams = casper_client::SessionStrParams::with_path("./delegate.wasm", session_args, "");\n    let payment_params: casper_client::PaymentStrParams = casper_client::PaymentStrParams::with_amount("5000000000");\n    let result = casper_client::put_deploy(maybe_rpc, node_address, verbosity, deploy_params, session_params, payment_params).await.unwrap();\n    println!("Deploy result: {:?}", result);\n}\n\n#[tokio::main]\nasync fn main(){\n    put_deploy().await;\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Once submitted, the above snippet will print the deploy hash in the console."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"calling-contracts",children:"Calling Contracts"}),"\n",(0,t.jsx)(n.p,{children:"Smart contracts on a Casper network are invoked by calling entry points. See below how to use Casper's SDKs to interact with these entry points and update the global state from a dApp:"}),"\n",(0,t.jsxs)(n.tabs,{children:["\n",(0,t.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const casperClient = new CasperClient("http://NODE_ADDRESS:7777/rpc");\nconst contract = new Contracts.Contract(casperClient);\ncontract.setContractHash(\n\t"hash-a3cac24aec9de1bbdb87083587b14d8aeffba5dfed27686512b7bb5dee60445d"\n);\nconst runtimeArguments = RuntimeArgs.fromMap({\n  "message": CLValueBuilder.string("Hello world!")\n})\nconst deploy = contract.callEntrypoint(\n  "update_msg",\n  runtimeArguments,\n  keypair.publicKey,\n  "casper", // or "casper-test" for Testnet\n  "1000000000", // 1 CSPR (10^9 Motes)\n  [keypair]\n);\n(async () => {\n  console.log(await casperClient.putDeploy(deploy))\n})();\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.tabitem,{value:"python",label:"Python",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import pycspr\nclient = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = 7777))\ndeployParams = pycspr.create_deploy_parameters(\n    account = keypair,\n    chain_name = "casper-test"\n)\npayment = pycspr.create_standard_payment(10_000_000_000)\nsession = pycspr.types.StoredContractByHash(\n    entry_point = "update_msg",\n    hash = bytes.fromhex("a3cac24aec9de1bbdb87083587b14d8aeffba5dfed27686512b7bb5dee60445d"),\n    args = {\n        "message": pycspr.types.CL_String("Hello world!"),\n    }\n)\ndeploy = pycspr.create_deploy(deployParams, payment, session)\ndeploy.approve(keypair)\nclient.send_deploy(deploy)\nprint(deploy.hash.hex())\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Once submitted, the above snippet will print the deploy hash in the console."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"staking-1",children:"Staking"}),"\n",(0,t.jsx)(n.p,{children:"Token staking is a fundamental aspect of a Casper network, whereby users lock up tokens as collateral in exchange for the ability to participate in the blockchain's consensus mechanism and earn rewards. This delegated Proof-of-Stake consensus mechanism is crucial for the network's effective operation. With the aid of any of the Casper SDKs, you can delegate your tokens to validators and participate in staking on the network."}),"\n",(0,t.jsxs)(n.p,{children:["The delegation functionality is available as a smart contract, which can be found in the ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node",children:"casper-node"})," repository. To delegate tokens, first clone the repository:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/casper-network/casper-node.git\ncd casper-node/\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then compile the ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/dev/smart_contracts/contracts/client/delegate/src/main.rs",children:"delegate contract"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"make setup-rs\nmake build-contract-rs/delegate\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, navigate back to your project's root directory. In your dApp's backend (or standalone script), load the ",(0,t.jsx)(n.em,{children:"delegate.wasm"}),' file into memory and deploy it with the arguments "amount", "delegator", and "validator" included.']}),"\n",(0,t.jsxs)(n.tabs,{children:["\n",(0,t.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const { CasperClient, Contracts, RuntimeArgs, CLValueBuilder, CLPublicKey } = require("casper-js-sdk");\nconst fs = require("fs");\n\nconst casperClient = new CasperClient("http://NODE_ADDRESS:7777/rpc")\nconst contract = new Contracts.Contract(casperClient)\n\nconst contractWasm = new Uint8Array(fs.readFileSync("./casper-node/target/wasm32-unknown-unknown/release/delegate.wasm").buffer);\n\nconst runtimeArguments = RuntimeArgs.fromMap({\n    "amount": CLValueBuilder.u512(500e9), // Minimum delegation amount: 500 CSPR\n    "delegator": keypair.publicKey,\n    "validator": CLPublicKey.fromHex("01e8c84f4fbb58d37991ef373c08043a45c44cd7f499453fa2bd3e141cc0113b3c")\n});\n\nconst deploy = contract.install(\n    contractWasm,\n    runtimeArguments,\n    "5000000000", // Gas payment (5 CSPR)\n    keypair.publicKey,\n    "casper", // or "casper-test" for testnet\n    [keypair]\n);\n\n(async () => {\n    console.log(await casperClient.putDeploy(deploy));\n})();    \n'})}),"\n"]}),"\n",(0,t.jsxs)(n.tabitem,{value:"python",label:"Python",children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import pycspr\n\nvalidator_public_key = pycspr.factory.accounts.create_public_key_from_account_key(\n    bytes.fromhex("01e8c84f4fbb58d37991ef373c08043a45c44cd7f499453fa2bd3e141cc0113b3c")\n)\n\ndeploy_params = pycspr.create_deploy_parameters(\n    account = keypair, # Only the public key is used, see `create_deploy_parameters`\n    chain_name = "casper" # or "casper-test" for testnet\n)\n\ndeploy = pycspr.create_validator_delegation(\n    params = deploy_params,\n    amount = int(500e9), # Minimum delegation amount: 500 CSPR\n    public_key_of_delegator = keypair,\n    public_key_of_validator = validator_public_key,\n    path_to_wasm = "./casper-node/target/wasm32-unknown-unknown/release/delegate.wasm"\n)\n\ndeploy.approve(keypair)\nclient.send_deploy(deploy)\nprint(deploy.hash.hex())\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Once submitted, the above snippet will print the deploy hash in the console."})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>i});var t=a(96540);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);