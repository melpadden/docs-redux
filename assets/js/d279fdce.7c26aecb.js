"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[35559],{67352:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=t(74848),i=t(28453);const r={},c="Testing Session Code",o={id:"developers/writing-onchain-code/testing-session-code",title:"Testing Session Code",description:"This section describes how to test session code using the Casper unit-testing framework. The writing session code section is a prerequisite for this tutorial, which uses the example code described here.",source:"@site/versioned_docs/version-1.5.X/developers/writing-onchain-code/testing-session-code.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/testing-session-code",permalink:"/1.5.X/developers/writing-onchain-code/testing-session-code",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{},sidebar:"developers",previous:{title:"Writing Session Code",permalink:"/1.5.X/developers/writing-onchain-code/writing-session-code"},next:{title:"Contract Hash vs. Package Hash",permalink:"/1.5.X/developers/writing-onchain-code/contract-hash-vs-package-hash"}},a={},d=[{value:"Specifying Dependencies in Cargo.toml",id:"specifying-dependencies",level:2},{value:"Writing the Tests",id:"writing-the-tests",level:2},{value:"Importing Required Packages",id:"importing-required-packages",level:3},{value:"Defining The Constants",id:"defining-the-constants",level:3},{value:"Creating a Test Function",id:"creating-a-test-function",level:3},{value:"Running the Test",id:"running-the-test",level:3},{value:"Other Examples",id:"other-examples",level:3},{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",iframe:"iframe",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"testing-session-code",children:"Testing Session Code"})}),"\n",(0,n.jsxs)(s.p,{children:["This section describes how to test session code using the Casper unit-testing framework. The ",(0,n.jsx)(s.a,{href:"/1.5.X/developers/writing-onchain-code/writing-session-code",children:"writing session code"})," section is a prerequisite for this tutorial, which uses the example code described ",(0,n.jsx)(s.a,{href:"/1.5.X/developers/writing-onchain-code/writing-session-code#writing-session-code",children:"here"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"specifying-dependencies",children:"Specifying Dependencies in Cargo.toml"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.a,{href:"https://github.com/casper-ecosystem/two-party-multi-sig/blob/main/tests/Cargo.toml",children:"Cargo.toml"})," sample file in the ",(0,n.jsx)(s.code,{children:"tests"})," directory contains the test framework dependencies. Specify the dependencies for your tests similarly and update the crate versions. Dependencies may vary with each project. These are the basic dependencies the testing framework requires:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:'[dev-dependencies]\ncasper-engine-test-support = { version = "2.2.0", features = ["test-support"] }\ncasper-execution-engine = "2.0.0"\ncasper-types = "1.5.0"\n'})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"casper-execution-engine"})," - This crate imports the execution engine functionality, enabling Wasm execution within the test framework. Each node contains an instance of an execution engine, and the testing framework simulates this behavior."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"casper-engine-test-support"})," - A helper crate that provides the interface to write tests and interact with an instance of the execution engine."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"casper-types"})," - Types shared by many Casper crates for use on a Casper network."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"writing-the-tests",children:"Writing the Tests"}),"\n",(0,n.jsxs)(s.p,{children:["Tests for this example session code reside in the ",(0,n.jsx)(s.a,{href:"https://github.com/casper-ecosystem/two-party-multi-sig/blob/main/tests/src/integration_tests.rs",children:"tests/src/integration-tests.rs"})," file."]}),"\n",(0,n.jsxs)(s.p,{children:["Notice that this file contains an empty ",(0,n.jsx)(s.code,{children:"main"})," method to initialize the test program. Alternatively, we could use the ",(0,n.jsx)(s.code,{children:"#![no_main]"})," annotation at the top of the file, as we did ",(0,n.jsx)(s.a,{href:"https://github.com/casper-ecosystem/two-party-multi-sig/blob/236bb18b9e98da7f9d8706f5e4825494845cfec2/contract/src/main.rs#L1-L2",children:"here"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:'fn main() {\n panic!("Execute \\"cargo test\\" to test the contract, not \\"cargo run\\".");\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"#[cfg(test)]"})," attribute tells the Rust compiler to compile and run the tests only when invoking ",(0,n.jsx)(s.code,{children:"cargo test"}),", not while debugging or releasing. All testing functions reside within the grouping mechanism ",(0,n.jsx)(s.code,{children:"mod tests"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"#[cfg(test)]\nmod tests {\n    // The entire test program resides here\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"importing-required-packages",children:"Importing Required Packages"}),"\n",(0,n.jsx)(s.p,{children:"Next, import the packages required for the tests to run. The example tests use these packages:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"    use casper_engine_test_support::{\n        ExecuteRequestBuilder, InMemoryWasmTestBuilder, DEFAULT_ACCOUNT_ADDR,\n        DEFAULT_RUN_GENESIS_REQUEST,\n    };\n    use casper_types::account::AccountHash;\n    use casper_types::{runtime_args, RuntimeArgs};\n"})}),"\n",(0,n.jsx)(s.h3,{id:"defining-the-constants",children:"Defining The Constants"}),"\n",(0,n.jsx)(s.p,{children:"The names of the runtime arguments are defined as constants. Using the exact names as in the original contract class is mandatory to define these constants. These are dictated by the arguments specified by the session code. If your session code takes in different arguments, you should define them as constants at this point."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:'const ASSOCIATED_ACCOUNT_HASH: AccountHash = AccountHash::new([1u8; 32]); // hash of the associated account\nconst ASSOCIATED_ACCOUNT: &str = "deployment-account"; // the associated account argument\nconst CONTRACT_WASM: &str = "contract.wasm"; // file to pass to the instance of the EE\n'})}),"\n",(0,n.jsx)(s.h3,{id:"creating-a-test-function",children:"Creating a Test Function"}),"\n",(0,n.jsxs)(s.p,{children:["In this step, we create a program to test the session code. The bodies of test functions typically perform some setup, run the code, then verify the results using assertions. Each test function is annotated with the ",(0,n.jsx)(s.code,{children:"#[test]"})," attribute."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"#[test]\nfn <unit-test-name>{\n   // Test function implementation\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["This ",(0,n.jsx)(s.a,{href:"https://github.com/casper-ecosystem/two-party-multi-sig/blob/236bb18b9e98da7f9d8706f5e4825494845cfec2/tests/src/integration_tests.rs#L15-L55",children:"unit test"})," is a good example of testing session code. At a high level, the test follows this process:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Initialize an instance of the execution engine and the ",(0,n.jsx)(s.code,{children:"InMemoryWasmTestBuilder"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"    let mut builder = InMemoryWasmTestBuilder::default();\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsx)(s.li,{children:"Execute the genesis process."}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"    builder.run_genesis(&*DEFAULT_RUN_GENESIS_REQUEST).commit();\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Execute the test-specific logic. In this example, retrieve information about the account running the session code and its associated keys. For full details, visit ",(0,n.jsx)(s.a,{href:"https://github.com/casper-ecosystem/two-party-multi-sig/blob/236bb18b9e98da7f9d8706f5e4825494845cfec2/tests/src/integration_tests.rs#L15-L55",children:"GitHub"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Retrieve runtime arguments, which should be the same as defined in the contract."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Create the execution request that sets up the session code to be processed. In this example, the ",(0,n.jsx)(s.code,{children:"CONTRACT_WASM"})," is the session code."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"    let execute_request =\n        ExecuteRequestBuilder::standard(*DEFAULT_ACCOUNT_ADDR, CONTRACT_WASM, runtime_args)\n            .build();\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"6",children:["\n",(0,n.jsx)(s.li,{children:"Invoke the execution engine to process the session code."}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"    builder.exec(execute_request).expect_success().commit();\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"7",children:["\n",(0,n.jsx)(s.li,{children:"Verify that the results match the expected output. This example checks the associated keys."}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"    assert!(associated_keys.contains_key(&ASSOCIATED_ACCOUNT_HASH));\n"})}),"\n",(0,n.jsx)(s.h3,{id:"running-the-test",children:"Running the Test"}),"\n",(0,n.jsxs)(s.p,{children:["This example uses a ",(0,n.jsx)(s.code,{children:"Makefile"})," to run the tests."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Under the hood, the ",(0,n.jsx)(s.code,{children:"Makefile"})," generates a ",(0,n.jsx)(s.code,{children:"tests/wasm"})," folder, copies the Wasm to the folder, and runs the tests with ",(0,n.jsx)(s.code,{children:"cargo test"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"mkdir -p tests/wasm\ncp contract/target/wasm32-unknown-unknown/release/contract.wasm tests/wasm\ncd tests && cargo test\n"})}),"\n",(0,n.jsx)(s.h3,{id:"other-examples",children:"Other Examples"}),"\n",(0,n.jsxs)(s.p,{children:["In the ",(0,n.jsx)(s.a,{href:"https://github.com/casper-ecosystem/counter/blob/master/tests/src/integration_tests.rs",children:"counter unit tests"}),", we use session code to call the contract. The code loads the account that pays for the session code, the session code Wasm, and the runtime arguments. Then, the code invokes the execution engine to process the session code."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"    // Use session code to increment the counter.\n    let session_code_request = ExecuteRequestBuilder::standard(\n        *DEFAULT_ACCOUNT_ADDR,\n        COUNTER_CALL_WASM,\n        runtime_args! {\n            CONTRACT_KEY => contract_v1_hash\n        },\n    )\n    .build();\n\n    builder.exec(session_code_request)\n        .expect_success()\n        .commit();\n"})}),"\n",(0,n.jsx)(s.p,{children:"The verification step looks like this:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:'\n    let incremented_count = builder\n        .query(None, count_key, &[])\n        .expect("should be stored value.")\n        .as_cl_value()\n        .expect("should be cl value.")\n        .clone()\n        .into_t::<i32>()\n        .expect("should be i32.");\n\n    assert_eq!(incremented_count, 1);\n'})}),"\n",(0,n.jsxs)(s.p,{children:["For many more examples, visit the ",(0,n.jsx)(s.a,{href:"https://github.com/casper-network/casper-node/tree/dev/smart_contracts/contracts/test",children:"casper-node"})," GitHub repository."]}),"\n",(0,n.jsx)(s.h2,{id:"video-walkthrough",children:"Video Walkthrough"}),"\n",(0,n.jsxs)(s.p,{children:["The following brief video describes testing the ",(0,n.jsx)(s.a,{href:"https://github.com/casper-ecosystem/two-party-multi-sig/",children:"sample session code"})," for configuring an account."]}),"\n",(0,n.jsxs)(s.p,{align:"center",children:["\n",(0,n.jsx)(s.iframe,{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=5",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Learn to ",(0,n.jsx)(s.a,{href:"/1.5.X/developers/cli/installing-contracts",children:"install a contract and query global state"}),"."]}),"\n"]})]})}function l(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>o});var n=t(96540);const i={},r=n.createContext(i);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);