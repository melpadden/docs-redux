"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[15255],{58592:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=s(74848),r=s(28453);const o={},i="Writing Session Code",c={id:"developers/writing-onchain-code/writing-session-code",title:"Writing Session Code",description:"This section explains how to write session code. To review the definition of session code and the differences between session code and contract code, see Comparing Session Code and Contract Code. Session code can be written in any programming language that compiles to Wasm. However, the examples in this topic use Rust.",source:"@site/docs/developers/writing-onchain-code/writing-session-code.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/writing-session-code",permalink:"/developers/writing-onchain-code/writing-session-code",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{},sidebar:"developers",previous:{title:"Contracts and Session Code",permalink:"/developers/writing-onchain-code/contract-vs-session"},next:{title:"Testing Session Code",permalink:"/developers/writing-onchain-code/testing-session-code"}},a={},d=[{value:"Creating the Directory Structure",id:"directory-structure",level:2},{value:"Example 1: Writing Session Code",id:"writing-session-code",level:2},{value:"Dependencies in <code>Cargo.toml</code>",id:"dependencies-in-cargotoml",level:3},{value:"Updating the <code>main.rs</code> File",id:"updating-the-mainrs-file",level:3},{value:"Example 2: Calling a Contract with Session Code",id:"calling-contracts-with-session-code",level:2},{value:"Example 3: Transfers using Session Code",id:"transfers-using-session-code",level:2},{value:"Compiling Session Code",id:"compiling-session-code",level:2},{value:"Executing Session Code",id:"executing-session-code",level:2},{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",iframe:"iframe",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"writing-session-code",children:"Writing Session Code"})}),"\n",(0,t.jsxs)(n.p,{children:["This section explains how to write session code. To review the definition of session code and the differences between session code and contract code, see ",(0,t.jsx)(n.a,{href:"/developers/writing-onchain-code/contract-vs-session#what-is-session-code",children:"Comparing Session Code and Contract Code"}),". Session code can be written in any programming language that compiles to Wasm. However, the examples in this topic use Rust."]}),"\n",(0,t.jsx)(n.h2,{id:"directory-structure",children:"Creating the Directory Structure"}),"\n",(0,t.jsxs)(n.p,{children:["For writing session code, we use the same project structure used for writing contracts, described ",(0,t.jsx)(n.a,{href:"/developers/writing-onchain-code/simple-contract#directory-structure",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"writing-session-code",children:"Example 1: Writing Session Code"}),"\n",(0,t.jsxs)(n.p,{children:["The following steps illustrate the process of writing session code using an example repository containing sample session code for configuring an account: ",(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/two-party-multi-sig/",children:"https://github.com/casper-ecosystem/two-party-multi-sig/"}),". The sample code adds an associated key to the account and updates the action thresholds. Remember that an ",(0,t.jsx)(n.a,{href:"/concepts/design/casper-design#accounts-head",children:"Account"})," on a Casper network can add associated accounts and set up a multi-signature scheme for deploys. To follow along, clone the repository."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/casper-ecosystem/two-party-multi-sig/\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Before executing session code, ensure that you know exactly what the session code is doing. If you don't know what it is meant for, it could be doing something malicious."})}),"\n",(0,t.jsxs)(n.h3,{id:"dependencies-in-cargotoml",children:["Dependencies in ",(0,t.jsx)(n.code,{children:"Cargo.toml"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Cargo.toml"})," file includes the dependencies and versions the session code requires. At a minimum, you need to import the latest versions of the ",(0,t.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/",children:"casper-contract"})," and ",(0,t.jsx)(n.a,{href:"https://docs.rs/casper-types/latest/casper_types/",children:"casper-types"})," crates. The following dependencies and version numbers are only examples and must be adjusted based on your requirements."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'casper-contract = "1.4.4"'})," - Provides the SDK for the execution engine (EE). The latest version of the crate is published ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/casper-contract",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'casper-types = "1.5.0"'})," - Includes types shared by many Casper crates for use on a Casper network. This crate is necessary for the EE to understand and interpret the session code. The latest version of the crate is published ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/casper-types",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"updating-the-mainrs-file",children:["Updating the ",(0,t.jsx)(n.code,{children:"main.rs"})," File"]}),"\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:"contract/src/main.rs"})," file that contains the sample session code. Notice these directives at the top of the file:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"#![no_std]"})," - Specifies not to import the standard library."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"#![no_main]"})," - Indicates the ",(0,t.jsx)(n.code,{children:"main"})," function is not required since the session code has only one entry point as the ",(0,t.jsx)(n.code,{children:"call"})," function."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Next, review the imported crates and other required libraries."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#![no_std]\n#![no_main]\n\nuse casper_contract::contract_api::{account, runtime};\nuse casper_contract::unwrap_or_revert::UnwrapOrRevert;\nuse casper_types::account::{AccountHash, ActionType, Weight};\n"})}),"\n",(0,t.jsx)(n.p,{children:"After the imported libraries, we usually find the constants."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'const ASSOCIATED_ACCOUNT: &str = "deployment-account";\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Next, we see the ",(0,t.jsx)(n.code,{children:"call"})," function, the only entry point in this example session code. The ",(0,t.jsx)(n.code,{children:"#[no_mangle]"})," flag ensures that the function name is retained as a string in the Wasm binary. For session code, this flag retains the ",(0,t.jsx)(n.code,{children:"call"})," string and marks the entry point for the execution engine. Explore the call function details by opening the cloned project."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'#[no_mangle]\npub extern "C" fn call() {\n    // Open the repository for details\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When compiled, the ",(0,t.jsx)(n.code,{children:"call"})," function could be used from another library. For example, a C library could link to the resulting Wasm."]}),"\n",(0,t.jsx)(n.h2,{id:"calling-contracts-with-session-code",children:"Example 2: Calling a Contract with Session Code"}),"\n",(0,t.jsxs)(n.p,{children:["Another example of session code is the ",(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/counter/blob/master/counter-call/src/main.rs",children:"counter-call/src/main.rs"})," file, in the ",(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/counter",children:"counter"})," repository. This example shows how we commonly use session code to invoke logic stored within a smart contract. To follow along, clone the repository."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/casper-ecosystem/counter/\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Observe how the project is set up and review the dependencies in the ",(0,t.jsx)(n.code,{children:"counter/counter-call/Cargo.toml"})," file. Then, open the ",(0,t.jsx)(n.code,{children:"counter/counter-call/src/main.rs"})," file containing the session code. Notice the directives at the top of the file, the required dependencies, and the declared constants."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"call"})," function interacts with the contract's ",(0,t.jsx)(n.code,{children:"counter_inc"})," and ",(0,t.jsx)(n.code,{children:"counter_get"})," entry points. This is how the session's ",(0,t.jsx)(n.code,{children:"call"})," entry point triggers the logic stored inside the counter contract."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"    // Call the counter to get the current value.\n    let current_counter_value: u32 =\n        runtime::call_contract(contract_hash, COUNTER_GET, RuntimeArgs::new());\n\n    // Call the counter to increment the value.\n    let _: () = runtime::call_contract(contract_hash, COUNTER_INC, RuntimeArgs::new());\n"})}),"\n",(0,t.jsx)(n.h2,{id:"transfers-using-session-code",children:"Example 3: Transfers using Session Code"}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we use session code to perform a transfer using the ",(0,t.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/system/fn.transfer_from_purse_to_purse.html",children:"transfer_from_purse_to_purse"})," system function. The entire session code is available in ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/67c9c9bb84fdfc3f2d12103e25f0058104342bc0/smart_contracts/contracts/bench/transfer-to-purse/src/main.rs#L14",children:"GitHub"}),", but this is the ",(0,t.jsx)(n.code,{children:"call"})," function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'#[no_mangle]\npub extern "C" fn call() {\n    let target_purse: URef = runtime::get_named_arg(ARG_TARGET_PURSE);\n    let amount: U512 = runtime::get_named_arg(ARG_AMOUNT);\n\n    let source_purse = account::get_main_purse();\n\n    system::transfer_from_purse_to_purse(source_purse, target_purse, amount, None)\n        .unwrap_or_revert();\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Another system function is ",(0,t.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/system/fn.transfer_to_public_key.html",children:"transfer_to_public_key"}),". The full session code example is on ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/67c9c9bb84fdfc3f2d12103e25f0058104342bc0/smart_contracts/contracts/client/transfer-to-public-key/src/main.rs#L16",children:"GitHub"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'#[no_mangle]\npub extern "C" fn call() {\n    let account_hash: PublicKey = runtime::get_named_arg(ARG_TARGET);\n    let transfer_amount: U512 = runtime::get_named_arg(ARG_AMOUNT);\n    system::transfer_to_public_key(account_hash, transfer_amount, None).unwrap_or_revert();\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Other transfer functions are available here:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/system/fn.transfer_to_account.html",children:"transfer_to_account"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/system/fn.transfer_from_purse_to_account.html",children:"transfer_from_purse_to_account"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/system/fn.transfer_from_purse_to_public_key.html",children:"transfer_from_purse_to_public_key"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"compiling-session-code",children:"Compiling Session Code"}),"\n",(0,t.jsxs)(n.p,{children:["Before running session code to interact with a contract or other entities on the network, you must compile it to Wasm. Run the following command in the directory hosting the ",(0,t.jsx)(n.code,{children:"Cargo.toml"})," file and ",(0,t.jsx)(n.code,{children:"src"})," folder."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cargo build --release --target wasm32-unknown-unknown\n"})}),"\n",(0,t.jsx)(n.p,{children:"For the examples above, you may use the Makefiles provided:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"make build-contract\n"})}),"\n",(0,t.jsx)(n.h2,{id:"executing-session-code",children:"Executing Session Code"}),"\n",(0,t.jsxs)(n.p,{children:["Before running session code on a live Casper network, test it as described ",(0,t.jsx)(n.a,{href:"/developers/writing-onchain-code/testing-session-code",children:"here"}),". You can also set up a local network using ",(0,t.jsx)(n.a,{href:"/developers/dapps/setup-nctl",children:"NCTL"})," for additional tests."]}),"\n",(0,t.jsxs)(n.p,{children:["Session code can execute on a Casper network via a ",(0,t.jsx)(n.a,{href:"/concepts/glossary/D#deploy",children:"Deploy"}),". All deploys can be broadly categorized as some unit of work that, when executed and committed, affects change to the network's global state."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/developers/prerequisites#install-casper-client",children:"Casper command-line client"})," and its ",(0,t.jsx)(n.code,{children:"put-deploy"})," command provide one way to execute session code."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy \\\n    --node-address <HOST:PORT> \\\n    --chain-name <NETWORK-NAME> \\\n    --secret-key <PATH> \\\n    --payment-amount <PAYMENT-AMOUNT> \\\n    --session-path <SESSION-PATH> \\\n    --session-arg <"NAME:TYPE=\'VALUE\'" OR "NAME:TYPE=null">\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port for JSON-RPC servers on Mainnet and Testnet is 7777."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the deploy."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"chain-name"})," - The network where the deploy should be sent. For Mainnet, use ",(0,t.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,t.jsx)(n.em,{children:"casper-test"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"payment-amount"})," - Payment for the deploy in motes. The payment amount varies based on the deploy and network ",(0,t.jsx)(n.a,{href:"/concepts/glossary/C#chainspec",children:"chainspec"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-path"})," - Path to the contract Wasm, pointing to the compiled contract."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-arg"})," - A named and typed argument passed to the Wasm code."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"--help"})," option to view an updated list of supported arguments."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy --help\n"})}),"\n",(0,t.jsx)(n.h2,{id:"video-walkthrough",children:"Video Walkthrough"}),"\n",(0,t.jsxs)(n.p,{children:["The following brief video describes ",(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/two-party-multi-sig/",children:"sample session code"})," for configuring an account."]}),"\n",(0,t.jsxs)(n.p,{align:"center",children:["\n",(0,t.jsx)(n.iframe,{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=4",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Learn to ",(0,t.jsx)(n.a,{href:"/developers/writing-onchain-code/testing-session-code",children:"test session code"})," using the Casper testing framework."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);