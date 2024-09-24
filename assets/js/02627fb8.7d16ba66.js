"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[49900],{43934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var r=n(74848),s=n(28453);const c={title:"Factory Contracts"},a="Writing Contracts using the Factory Pattern",o={id:"developers/writing-onchain-code/factory-pattern",title:"Factory Contracts",description:"This guide presents a factory pattern for simple counter contracts to showcase the Casper APIs that support this pattern. The example contract in this guide is a modified counter contract found here.",source:"@site/versioned_docs/version-2.0.0/developers/writing-onchain-code/factory-pattern.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/factory-pattern",permalink:"/2.0.0/developers/writing-onchain-code/factory-pattern",draft:!1,unlisted:!1,tags:[],version:"2.0.0",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1726493368e3,frontMatter:{title:"Factory Contracts"},sidebar:"developers",previous:{title:"Contract Hash vs. Package Hash",permalink:"/2.0.0/developers/writing-onchain-code/contract-hash-vs-package-hash"},next:{title:"Best Practices for Casper Smart Contract Authors",permalink:"/2.0.0/developers/writing-onchain-code/best-practices"}},i={},h=[{value:"The Counter Factory Example",id:"the-counter-factory-example",level:2},{value:"Unit tests",id:"unit-tests",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",details:"details",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",summary:"summary",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"writing-contracts-using-the-factory-pattern",children:"Writing Contracts using the Factory Pattern"})}),"\n",(0,r.jsxs)(t.p,{children:["This guide presents a ",(0,r.jsx)(t.a,{href:"https://github.com/casper-network/ceps/pull/86/files",children:"factory pattern"})," for simple counter contracts to showcase the Casper APIs that support this pattern. The example contract in this guide is a modified counter contract found ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/gh-2064-factory-pattern/smart_contracts/contracts/test/counter-factory/src/main.rs",children:"here"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The factory pattern is a widely recognized software design concept used in various programming contexts. DApp developers may use factory implementations to create smart contracts from a given source (or factory), such as a factory method or entry point. A factory pattern ensures that the contracts produced maintain a specified behavior, such as specific entry points and arguments. In general, factories produce other smart contracts according to a template."}),"\n",(0,r.jsxs)(t.p,{children:["Casper factories are created using the entry point type called ",(0,r.jsx)(t.code,{children:"EntryPointType::Install"}),", which marks an entry point as a factory method responsible for creating and installing contracts on the chain. An installer entry point will derive new Wasm based on the original session Wasm and create a new contract with different sets of entry points as required. In other words, these installer entry points marked with ",(0,r.jsx)(t.code,{children:"EntryPointType::Install"})," are the contract factories. When referring to the factory contract on this page, we mean the contract containing the factory entry points."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"EntryPointAccess::Template"})," marks an entry point that exists in the bytecode but is not callable. Thus, regular entry points can be referenced from within installer entry points marked with ",(0,r.jsx)(t.code,{children:"EntryPointType::Install"}),". In object-oriented terms, entry points marked with ",(0,r.jsx)(t.code,{children:"EntryPointAccess::Template"})," act as virtual abstract methods and cannot be called from session code."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["This factory pattern poses a known drawback when using Wasm. All the smart contracts created with the factory pattern share the same Wasm installed on the chain. Thus, developers cannot modify the Wasm once installed and create modified contracts using the factory pattern. Developers must specify all the possible entry points in the parent contract and tag them with the ",(0,r.jsx)(t.code,{children:"EntryPointAccess::Template"})," marker."]})}),"\n",(0,r.jsx)(t.h2,{id:"the-counter-factory-example",children:"The Counter Factory Example"}),"\n",(0,r.jsxs)(t.p,{children:["This section dives into a ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/gh-2064-factory-pattern/smart_contracts/contracts/test/counter-factory/src/main.rs",children:"simple counter that uses factory methods"})," to describe how to implement the factory pattern on a Casper network. The ",(0,r.jsx)(t.a,{href:"/2.0.0/resources/beginner/counter-testnet/walkthrough",children:"Counter on the Testnet Tutorial"})," demonstrates the non-factory version of the counter contract."]}),"\n",(0,r.jsxs)(t.p,{children:["Let's start by exploring the ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/smart_contracts/contracts/test/counter-factory/src/main.rs#L115",children:"session code"}),", where the contract entry points are defined."]}),"\n",(0,r.jsxs)(t.p,{children:["Two installer entry points are marked with ",(0,r.jsx)(t.code,{children:"EntryPointType::Install"}),", meaning these entry points will produce new counter contracts once this Wasm is installed in global state. They are also marked with ",(0,r.jsx)(t.code,{children:"EntryPointAccess::Public"})," so that they can be called from the session code."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"let entry_point: EntryPoint = EntryPoint::new(\n    CONTRACT_FACTORY_ENTRY_POINT.to_string(),\n    Parameters::new(),\n    CLType::Unit,\n    EntryPointAccess::Public,\n    EntryPointType::Install,\n);\nentry_points.add_entry_point(entry_point);\nlet entry_point: EntryPoint = EntryPoint::new(\n    CONTRACT_FACTORY_DEFAULT_ENTRY_POINT.to_string(),\n    Parameters::new(),\n    CLType::Unit,\n    EntryPointAccess::Public,\n    EntryPointType::Install,\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["These two installers show how to declare multiple factory entry points and use them to initialize the Wasm they produce with different values. On ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/smart_contracts/contracts/test/counter-factory/src/main.rs#L61C19-L61C35",children:"line 61"}),", the ",(0,r.jsx)(t.code,{children:"contract_factory"})," entry point creates a counter contract with a given name and initial value."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'#[no_mangle]\npub extern "C" fn contract_factory() {\n    let name: String = runtime::get_named_arg(ARG_NAME);\n    let initial_value: U512 = runtime::get_named_arg(ARG_INITIAL_VALUE);\n    installer(name, initial_value);\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["On ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/smart_contracts/contracts/test/counter-factory/src/main.rs#L68",children:"line 68"}),", the ",(0,r.jsx)(t.code,{children:"contract_factory_default"})," entry point creates a counter contract with a given name and a zero initial value."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'#[no_mangle]\npub extern "C" fn contract_factory_default() {\n    let name: String = runtime::get_named_arg(ARG_NAME);\n    installer(name, U512::zero());\n}\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"The factory pattern can produce contracts with different entry points. Suppose the session code defines entry points A, B, C, and D as templates. One installer factory entry point could use entry points A and B to create a contract, and the other installer entry point might use entry points C and D. Such support at the API level enables the implementation of more complex use cases."})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/smart_contracts/contracts/test/counter-factory/src/main.rs#L73",children:"installer function"})," creates a new counter contract by specifying its named keys and entry points. The named keys include the counter's initial value, and the entry points define the counter's ",(0,r.jsx)(t.code,{children:"decrement"})," and ",(0,r.jsx)(t.code,{children:"increment"})," functionality. These entry points are defined just like in any other smart contract, with ",(0,r.jsx)(t.code,{children:"EntryPointAccess::Public"})," and ",(0,r.jsx)(t.code,{children:"EntryPointType::Contract"}),", and they are callable for all the counters created. To learn how to call the ",(0,r.jsx)(t.code,{children:"increment"})," and ",(0,r.jsx)(t.code,{children:"decrement"})," functions, see the ",(0,r.jsx)(t.a,{href:"/2.0.0/resources/beginner/counter-testnet/walkthrough",children:"Counter on the Testnet Tutorial"}),", which is the non-factory version of the counter contract."]}),"\n",(0,r.jsxs)(t.details,{children:["\n",(0,r.jsx)(t.summary,{children:"Sample installer code for a counter factory"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"fn installer(name: String, initial_value: U512) {\n    let named_keys = {\n        let new_uref = storage::new_uref(initial_value);\n        let mut named_keys = NamedKeys::new();\n        named_keys.insert(CURRENT_VALUE_KEY.to_string(), new_uref.into());\n        named_keys\n    };\n\n    let entry_points = {\n        let mut entry_points = EntryPoints::new();\n        let entry_point: EntryPoint = EntryPoint::new(\n            INCREASE_ENTRY_POINT.to_string(),\n            Parameters::new(),\n            CLType::Unit,\n            EntryPointAccess::Public,\n            EntryPointType::Contract,\n        );\n        entry_points.add_entry_point(entry_point);\n        let entry_point: EntryPoint = EntryPoint::new(\n            DECREASE_ENTRY_POINT.to_string(),\n            Parameters::new(),\n            CLType::Unit,\n            EntryPointAccess::Public,\n            EntryPointType::Contract,\n        );\n        entry_points.add_entry_point(entry_point);\n\n        entry_points\n    };\n\n    let (contract_hash, contract_version) = storage::new_contract(\n        entry_points,\n        Some(named_keys),\n        Some(PACKAGE_HASH_KEY_NAME.to_string()),\n        Some(ACCESS_KEY_NAME.to_string()),\n    );\n\n    runtime::put_key(CONTRACT_VERSION, storage::new_uref(contract_version).into());\n    runtime::put_key(&name, contract_hash.into());\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["It is important to note that the installer logic ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/smart_contracts/contracts/test/counter-factory/src/main.rs#L110-L111",children:"saves the newly created contract version and contract hash"})," under the factory contract's named keys. The installer logic runs within the factory contract context, not as part of the session code running within the account context. For more details, see the ",(0,r.jsx)(t.a,{href:"/2.0.0/developers/writing-onchain-code/contract-vs-session#comparing-session-and-contract",children:"comparison between session and contract context"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"runtime::put_key(CONTRACT_VERSION, storage::new_uref(contract_version).into());\nruntime::put_key(&name, contract_hash.into());\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For example, if you install the factory counter contract, you will see only one named key for this contract in your account, with the two installer entry points ",(0,r.jsx)(t.code,{children:"contract_factory"})," and ",(0,r.jsx)(t.code,{children:"contract_factory_default"}),". See ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/smart_contracts/contracts/test/counter-factory/src/main.rs#L155C1-L163",children:"lines 155-163"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you call the installer three times to create 3 different counters, you will see 3 named keys for each counter in the factory contract's named keys. The counter contracts produced will have the ",(0,r.jsx)(t.code,{children:"increment"})," and ",(0,r.jsx)(t.code,{children:"decrement"})," entry points."]}),"\n",(0,r.jsxs)(t.p,{children:["As explained above, developers must define all the possible non-installer entry points in the factory contract and tag them with the ",(0,r.jsx)(t.code,{children:"EntryPointAccess::Template"})," and ",(0,r.jsx)(t.code,{children:"EntryPointType::Contract"})," markers. See ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/smart_contracts/contracts/test/counter-factory/src/main.rs#L135C9-L149C11",children:"lines 135-139"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"let entry_point: EntryPoint = EntryPoint::new(\n    INCREASE_ENTRY_POINT.to_string(),\n    Parameters::new(),\n    CLType::Unit,\n    EntryPointAccess::Template,\n    EntryPointType::Contract,\n);\nentry_points.add_entry_point(entry_point);\nlet entry_point: EntryPoint = EntryPoint::new(\n    DECREASE_ENTRY_POINT.to_string(),\n    Parameters::new(),\n    CLType::Unit,\n    EntryPointAccess::Template,\n    EntryPointType::Contract,\n);\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Suppose developers forget to declare an entry point in the outermost session logic (the ",(0,r.jsx)(t.code,{children:"call"})," function) and mark it with ",(0,r.jsx)(t.code,{children:"EntryPointAccess::Template"}),"; that Wasm export will be removed when the factory contract is installed in global state. Creating the entry point in the installer logic is not sufficient."]})}),"\n",(0,r.jsx)(t.h3,{id:"unit-tests",children:"Unit tests"}),"\n",(0,r.jsxs)(t.p,{children:["Developers can test contracts that follow the factory pattern using the Casper testing framework described under ",(0,r.jsx)(t.a,{href:"/2.0.0/developers/writing-onchain-code/testing-contracts",children:"Unit Testing Smart Contracts"}),". The testing process is the same, but this section highlights a particular test called ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/execution_engine_testing/tests/src/test/counter_factory.rs#L116C4-L116C42",children:"should_install_and_use_factory_pattern"})," found in the ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/gh-2064-factory-pattern/execution_engine_testing/tests/src/test/counter_factory.rs",children:"unit test suite"})," of the counter factory. As the name suggests, the test installs a contract that uses the factory pattern and checks its behavior."]}),"\n",(0,r.jsxs)(t.p,{children:["On ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/execution_engine_testing/tests/src/test/counter_factory.rs#L120",children:"line 120"}),", the test starts building a request to call the ",(0,r.jsx)(t.code,{children:"contract_factory"})," entry point with counter name ",(0,r.jsx)(t.code,{children:"new-counter-1"})," and value 1. On ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/execution_engine_testing/tests/src/test/counter_factory.rs#L134",children:"line 134"}),", the test calls another factory entry point called ",(0,r.jsx)(t.code,{children:"contract_factory_default"})," with counter name ",(0,r.jsx)(t.code,{children:"new-counter-2"}),". The default counter value is 0."]}),"\n",(0,r.jsx)(t.p,{children:"Once the requests are processed, the test checks the contract hashes of the contracts created:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The factory contract on ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/execution_engine_testing/tests/src/test/counter_factory.rs#L146",children:"line 146"})]}),"\n",(0,r.jsxs)(t.li,{children:["The first counter on ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/execution_engine_testing/tests/src/test/counter_factory.rs#L157",children:"line 157"})]}),"\n",(0,r.jsxs)(t.li,{children:["The second counter on ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/execution_engine_testing/tests/src/test/counter_factory.rs#L168",children:"line 168"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The test proceeds to get the contract Wasm for each counter produced and test the Wasm exports, which are the ",(0,r.jsx)(t.code,{children:"increment"})," and ",(0,r.jsx)(t.code,{children:"decrement"})," entry points in each counter contract."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"setup"})," function on ",(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/execution_engine_testing/tests/src/test/counter_factory.rs#L209",children:"line 209"})," is a helper function for installing the factory contract on the chain and getting the contract factory hash."]}),"\n",(0,r.jsx)(t.p,{children:"The other tests in this file are also interesting:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/execution_engine_testing/tests/src/test/counter_factory.rs#L25",children:"should_not_call_undefined_entrypoints_on_factory"})," - This test verifies that entry points marked as a template cannot be called directly from the factory contract"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/mpapierski/casper-node/blob/a4d7d5a4f67e7860b2e8c57d74c864860b4e74c8/execution_engine_testing/tests/src/test/counter_factory.rs#L87C4-L87C54",children:"contract_factory_wasm_should_have_expected_exports"})," - This test checks the entry points declared in the contract factory"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/2.0.0/developers/writing-onchain-code/best-practices",children:"Best Practices for Casper Smart Contract Authors"})," - An outline of best practices when developing smart contracts on a Casper network"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const s={},c=r.createContext(s);function a(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);