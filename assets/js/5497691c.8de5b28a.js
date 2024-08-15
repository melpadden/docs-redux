"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[4035],{48025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(74848),r=n(28453);n(86025);const i={title:"Getting Started with Rust"},a="Getting Started with Rust Casper Contracts",o={id:"developers/writing-onchain-code/getting-started",title:"Getting Started with Rust",description:"This guide covers additional prerequisites for writing your first Casper smart contract. You will also build a sample smart contract and run a few basic tests on it on your local machine.",source:"@site/docs/developers/writing-onchain-code/getting-started.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/getting-started",permalink:"/docs-redux/next/developers/writing-onchain-code/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Getting Started with Rust"},sidebar:"developers",previous:{title:"Introduction",permalink:"/docs-redux/next/writing-contracts"},next:{title:"Getting Started with AssemblyScript",permalink:"/docs-redux/next/developers/writing-onchain-code/assembly-script"}},c={},l=[{value:"Creating a Project",id:"creating-a-project",level:2},{value:"Using the nightly toolchain",id:"using-the-nightly-toolchain",level:3},{value:"Available Casper Rust crates",id:"available-casper-rust-crates",level:3},{value:"Available API documentation",id:"available-api-documentation",level:3},{value:"Compiling to Wasm",id:"compiling-to-wasm",level:2},{value:"Testing the Contract",id:"test-the-contract",level:2},{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"Rust Resources",id:"rust-resources",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"getting-started-with-rust-casper-contracts",children:"Getting Started with Rust Casper Contracts"})}),"\n",(0,s.jsx)(t.p,{children:"This guide covers additional prerequisites for writing your first Casper smart contract. You will also build a sample smart contract and run a few basic tests on it on your local machine."}),"\n",(0,s.jsxs)(t.p,{children:["Casper's blockchain is built upon the Rust programming language and compiles to WebAssembly. This guide will walk you through the steps to write your first contract, assuming you have already set up your development environment as described ",(0,s.jsx)(t.a,{href:"/docs-redux/next/developers/prerequisites",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-project",children:"Creating a Project"}),"\n",(0,s.jsxs)(t.p,{children:["You can create a new sample project very easily with the ",(0,s.jsx)(t.code,{children:"cargo casper"})," crate. For example, let's say that I want to create a project named ",(0,s.jsx)(t.strong,{children:"my-project"})," for this tutorial (you can choose a different name if you wish), then I can simply run the command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cargo casper my-project\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you look inside the newly-created ",(0,s.jsx)(t.em,{children:"my-project"})," folder, you will find two crates: ",(0,s.jsx)(t.code,{children:"contract"})," and ",(0,s.jsx)(t.code,{children:"tests"}),". This is a complete basic smart contract that saves a value, passed as an argument, on the blockchain. The ",(0,s.jsx)(t.code,{children:"tests"})," crate provides a runtime environment of the Casper virtual machine, and a basic smart contract test."]}),"\n",(0,s.jsx)(t.h3,{id:"using-the-nightly-toolchain",children:"Using the nightly toolchain"}),"\n",(0,s.jsxs)(t.p,{children:["Navigate to the ",(0,s.jsx)(t.code,{children:"my-project"})," folder and open the ",(0,s.jsx)(t.code,{children:"rust-toolchain"})," file. You will notice that the file's contents specify a nightly version of Rust. Here is an example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"nightly-2022-08-03\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Having the latest nightly toolchain to develop smart contracts in Rust would be best. Please refer to the ",(0,s.jsx)(t.a,{href:"https://rust-lang.github.io/rustup/concepts/channels.html",children:"Rust Documentation on Channels"})," and the ",(0,s.jsx)(t.a,{href:"https://rust-lang.github.io/rustup/concepts/toolchains.html",children:"Rust Documentation on Toolchains"})," for further information."]}),"\n",(0,s.jsxs)(t.p,{children:["As shown in this example, we recommend setting up the ",(0,s.jsx)(t.code,{children:"rust-toolchain"})," file in your project's top-level directory."]}),"\n",(0,s.jsx)(t.p,{children:"You can also install the nightly Rust toolchain with this command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"rustup toolchain install nightly\n"})}),"\n",(0,s.jsx)(t.h3,{id:"available-casper-rust-crates",children:"Available Casper Rust crates"}),"\n",(0,s.jsx)(t.p,{children:"To support smart contract development with Rust, the following crates are published:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://crates.io/crates/casper-contract",children:"casper-contract"})," - a library supporting communication with the blockchain. This is the main library you will need to write smart contracts."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://crates.io/crates/casper-engine-test-support",children:"casper-engine-test-support"})," - a virtual machine against which you can test your smart contracts."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://crates.io/crates/casper-types",children:"casper-types"})," - a library with types we use across the Rust ecosystem."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"A crate is a compilation unit that can be compiled into a binary or a library."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["For a comprehensive list of crates, visit the ",(0,s.jsx)(t.a,{href:"/docs-redux/next/developers/essential-crates",children:"Essential Casper Crates"})," page."]})}),"\n",(0,s.jsx)(t.h3,{id:"available-api-documentation",children:"Available API documentation"}),"\n",(0,s.jsxs)(t.p,{children:["Each of the Casper crates comes with API documentation and examples for each function, located at ",(0,s.jsx)(t.a,{href:"https://docs.rs/releases/search?query=casper",children:"https://docs.rs"}),". The latest contract API documentation can be found ",(0,s.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"compiling-to-wasm",children:"Compiling to Wasm"}),"\n",(0,s.jsx)(t.p,{children:"The Casper blockchain uses WebAssembly (Wasm) in its runtime environment. Compilation targets for Wasm are available for Rust, giving developers access to all the Rust ecosystem tools when developing smart contracts."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Note: Wasm allows for the use of other languages, including but not limited to: C/C++, C#, Go, Julia, Lobster and ZIG."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To compile the smart contract into Wasm, go into the ",(0,s.jsx)(t.em,{children:"my-project"})," folder, and run the following commands:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cd my-project\nmake prepare\nmake build-contract\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can find the compiled contract on this path: ",(0,s.jsx)(t.code,{children:"my-project/contract/target/wasm32-unknown-unknown/release/contract.wasm"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Linting"})}),"\n",(0,s.jsxs)(t.p,{children:["Casper contracts support Rust tooling such as ",(0,s.jsx)(t.code,{children:"clippy"})," for linting contracts. Feel free to use them! You can also use the ",(0,s.jsx)(t.code,{children:"make check-lint"})," command for linting your contract. Run this command inside the ",(0,s.jsx)(t.em,{children:"my-project"})," folder:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"make check-lint\n"})}),"\n",(0,s.jsx)(t.h2,{id:"test-the-contract",children:"Testing the Contract"}),"\n",(0,s.jsxs)(t.p,{children:["In addition to creating the contract, the Casper crate also automatically created sample tests in the ",(0,s.jsx)(t.em,{children:"my-project/tests"})," folder."]}),"\n",(0,s.jsxs)(t.p,{children:["The Casper local environment provides a virtual machine against which you can run your contract for testing. When you run the test crate, it will automatically build the smart contract in release mode and then run a series of tests against it in the Casper runtime environment. The custom build script is named ",(0,s.jsx)(t.em,{children:"build.rs"})," if you are interested in looking more into it."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Since the test script automatically builds the contract, during development you only need to run the command ",(0,s.jsx)(t.code,{children:"make test"})," without the need for ",(0,s.jsx)(t.code,{children:"make build-contract"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"A successful test run indicates that your smart contract environment is set up correctly."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,s.jsx)(t.p,{children:"After the compilation finishes, the test should run and you should see output similar to this message in your terminal:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"running 2 tests\ntest tests::should_error_on_missing_runtime_arg ... ok\ntest tests::should_store_hello_world ... ok\n\ntest result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.09s\n"})}),"\n",(0,s.jsxs)(t.p,{children:["As a brief example, open up ",(0,s.jsx)(t.em,{children:"my-project/contract/src/main.rs"})," in your editor, modify the ",(0,s.jsx)(t.em,{children:"KEY_NAME"})," value in the contract, and then rerun the ",(0,s.jsx)(t.code,{children:"make test"})," command. You should observe that the smart contract recompiles and the test fails now."]}),"\n",(0,s.jsx)(t.h2,{id:"video-walkthrough",children:"Video Walkthrough"}),"\n",(0,s.jsx)(t.p,{children:"The following video tutorial complements this guide."}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed/aIhA5fPIHus",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,s.jsx)(t.h2,{id:"rust-resources",children:"Rust Resources"}),"\n",(0,s.jsx)(t.p,{children:"These Rust resources are excellent and we highly recommend them:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/book/foreword.html",children:"https://doc.rust-lang.org/book/foreword.html"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://rustwasm.github.io/docs/book/",children:"https://rustwasm.github.io/docs/book/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/stable/rust-by-example",children:"https://doc.rust-lang.org/stable/rust-by-example"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);