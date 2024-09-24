"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[72035],{1368:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=s(74848),r=s(28453);const i={title:"Testing NFTs"},c="Testing NFT Contracts",o={id:"resources/tokens/cep78/using-casper-client/testing-NFTs",title:"Testing NFTs",description:"Prerequisites",source:"@site/versioned_docs/version-1.5.X/resources/tokens/cep78/using-casper-client/testing-NFTs.md",sourceDirName:"resources/tokens/cep78/using-casper-client",slug:"/resources/tokens/cep78/using-casper-client/testing-NFTs",permalink:"/docs-redux/1.5.X/resources/tokens/cep78/using-casper-client/testing-NFTs",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{title:"Testing NFTs"},sidebar:"resources",previous:{title:"CEP-78 Contract Details",permalink:"/docs-redux/1.5.X/resources/tokens/cep78/using-casper-client/querying-NFTs"},next:{title:"Ownership Lookup",permalink:"/docs-redux/1.5.X/resources/tokens/cep78/reverse-lookup"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Framework Description",id:"framework-description",level:2},{value:"Running the Tests",id:"running-the-tests",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"testing-nft-contracts",children:"Testing NFT Contracts"})}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Install the contract using the ",(0,n.jsx)(t.a,{href:"/docs-redux/1.5.X/resources/tokens/cep78/using-casper-client/quickstart-guide",children:"Quickstart"})," or the ",(0,n.jsx)(t.a,{href:"/docs-redux/1.5.X/resources/tokens/cep78/using-casper-client/full-installation-tutorial",children:"Full Installation"})," tutorials"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"framework-description",children:"Framework Description"}),"\n",(0,n.jsxs)(t.p,{children:["The testing framework in this tutorial uses the ",(0,n.jsx)(t.a,{href:"https://crates.io/crates/casper-engine-test-support",children:"Casper engine test support"})," crate for testing the contract implementation against the Casper execution environment."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/tree/dev/tests/src",children:"tests"})," source folder contains over 150 tests covering a variety of scenarios, including contract installation, minting and burning tokens, sending transfers, upgrading the contract, and listening to events."]}),"\n",(0,n.jsxs)(t.p,{children:["For more details about the test framework and how each test is set up, visit the ",(0,n.jsx)(t.a,{href:"/docs-redux/1.5.X/developers/writing-onchain-code/testing-contracts",children:"Testing Smart Contracts"})," documentation page."]}),"\n",(0,n.jsx)(t.h2,{id:"running-the-tests",children:"Running the Tests"}),"\n",(0,n.jsx)(t.p,{children:"To build and run the tests, issue the following command in the project folder:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The project contains a ",(0,n.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/Makefile",children:"Makefile"}),", which is a custom build script that compiles the contract before running tests in ",(0,n.jsx)(t.em,{children:"release"})," mode. Then, the script copies the ",(0,n.jsx)(t.code,{children:"contract.wasm"})," file to the corresponding version folder in a ",(0,n.jsx)(t.code,{children:"tests/wasm"})," directory. In practice, you only need to run the ",(0,n.jsx)(t.code,{children:"make test"})," command during development without building the contract separately."]}),"\n",(0,n.jsxs)(t.p,{children:["This example uses ",(0,n.jsx)(t.code,{children:"bash"}),". If you use a Rust IDE, you must configure it to run the tests."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);