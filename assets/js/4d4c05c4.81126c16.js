"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[46928],{90719:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(74848),s=t(28453);const i={title:"Introduction",slug:"/writing-contracts"},c="Writing On-Chain Code",o={id:"developers/writing-onchain-code/index",title:"Introduction",description:"This section shows you how to write session code and smart contracts in Rust and WebAssembly (Wasm) for a Casper network. When referring to session code, these documents outline logic that executes in the context of an account. In contrast, smart contracts consist of logic installed on-chain, for use by multiple parties. There is a large overlap between the processes of writing session code versus contract code, with some semantic differences outlined in their respective documentation. The Video Series for Writing On-Chain Code accompanies the topics below.",source:"@site/versioned_docs/version-2.0.0/developers/writing-onchain-code/index.md",sourceDirName:"developers/writing-onchain-code",slug:"/writing-contracts",permalink:"/2.0.0/writing-contracts",draft:!1,unlisted:!1,tags:[],version:"2.0.0",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{title:"Introduction",slug:"/writing-contracts"},sidebar:"developers",previous:{title:"Essential Rust Crates",permalink:"/2.0.0/developers/essential-crates"},next:{title:"Getting Started with Rust",permalink:"/2.0.0/developers/writing-onchain-code/getting-started"}},a={},d=[{value:"Interacting with Contracts on the Blockchain",id:"interacting-with-contracts-on-the-blockchain",level:2},{value:"Tutorials",id:"tutorials",level:2}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",iframe:"iframe",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"writing-on-chain-code",children:"Writing On-Chain Code"})}),"\n",(0,r.jsxs)(e.p,{children:["This section shows you how to write session code and smart contracts in Rust and WebAssembly (Wasm) for a Casper network. When referring to session code, these documents outline logic that executes in the context of an account. In contrast, smart contracts consist of logic installed on-chain, for use by multiple parties. There is a large overlap between the processes of writing session code versus contract code, with some semantic differences outlined in their respective documentation. The ",(0,r.jsx)(e.a,{href:"https://www.youtube.com/playlist?list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj",children:"Video Series for Writing On-Chain Code"})," accompanies the topics below."]}),"\n",(0,r.jsxs)(e.p,{align:"center",children:["\n",(0,r.jsx)(e.iframe,{width:"400",height:"225",src:"https://www.youtube.com/embed/JoOjhSOnQzk",position:"middle",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Title"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/writing-onchain-code/getting-started",children:"Getting Started with Rust"})}),(0,r.jsx)(e.td,{children:"An introduction to using Rust with the Casper Platform"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/writing-onchain-code/assembly-script",children:"Getting Started with AssemblyScript"})}),(0,r.jsx)(e.td,{children:"An introduction to using AssemblyScript with the Casper Platform"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/writing-onchain-code/simple-contract",children:"Writing a Basic Smart Contract in Rust"})}),(0,r.jsx)(e.td,{children:"An example of a smart contract built in Rust"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/writing-onchain-code/testing-contracts",children:"Unit Testing Smart Contracts"})}),(0,r.jsx)(e.td,{children:"Steps to test contract code using the unit testing framework"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/writing-onchain-code/upgrading-contracts",children:"Upgrading and Maintaining Smart Contracts"})}),(0,r.jsx)(e.td,{children:"An introduction to versioning smart contracts"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/writing-onchain-code/calling-contracts",children:"Calling Contracts"})}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/writing-onchain-code/contract-vs-session",children:"Smart Contracts and Session Code"})}),(0,r.jsx)(e.td,{children:"Understand what session code is and when you would use it over contract code"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/writing-onchain-code/writing-session-code",children:"Writing Session Code"})}),(0,r.jsx)(e.td,{children:"An introduction to writing session code"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/writing-onchain-code/testing-session-code",children:"Unit Testing Session Code"})}),(0,r.jsx)(e.td,{children:"Steps to test session code using the unit testing framework"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/writing-onchain-code/emitting-contract-events",children:"Contract-Level Events"})}),(0,r.jsx)(e.td,{children:"Enabling smart contracts to emit messages while executing on the blockchain"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/writing-onchain-code/contract-hash-vs-package-hash",children:"Using Contract Hash vs. Package Hash"})}),(0,r.jsxs)(e.td,{children:["Advantages and disadvantages of using ",(0,r.jsx)(e.code,{children:"contract_hash"})," vs. ",(0,r.jsx)(e.code,{children:"contract_package_hash"})," when calling a contract"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/writing-onchain-code/factory-pattern",children:"The Factory Pattern for Smart Contracts"})}),(0,r.jsx)(e.td,{children:"Learn to implement the contract factory pattern on a Casper network"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/writing-onchain-code/best-practices",children:"Best Practices for Casper Smart Contract Authors"})}),(0,r.jsx)(e.td,{children:"An outline of best practices when developing smart contracts on a Casper network"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"interacting-with-contracts-on-the-blockchain",children:"Interacting with Contracts on the Blockchain"}),"\n",(0,r.jsxs)(e.p,{children:["Additionally, the section on ",(0,r.jsx)(e.a,{href:"/2.0.0/developers/cli/",children:"Interacting with the Blockchain"})," covers installing and calling contracts using the Casper command-line client written in Rust."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Title"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/cli/installing-contracts",children:"Installing Smart Contracts and Querying Global State"})}),(0,r.jsx)(e.td,{children:"A guide on installing smart contracts and querying global state"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/cli/calling-contracts",children:"Calling Smart Contracts with the Rust Client"})}),(0,r.jsx)(e.td,{children:"Steps to call a smart contract with the Rust command-line client"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/concepts/dictionaries",children:"Reading and Writing to Dictionaries"})}),(0,r.jsx)(e.td,{children:"Information on Dictionaries and how to read and write to them on the Casper Platform."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/developers/cli/execution-error-codes",children:"Execution Error Codes"})}),(0,r.jsx)(e.td,{children:"Possible error codes when writing smart contracts."})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"tutorials",children:"Tutorials"}),"\n",(0,r.jsx)(e.p,{children:"The following tutorials outline some aspects of writing smart contracts on a Casper network."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Title"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/resources/tutorials/beginner/getting-started-tutorial",children:"Getting Started Video"})}),(0,r.jsx)(e.td,{children:"Step-by-step video tutorial for setting up the Casper development environment"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/counter-testnet",children:"A Counter on the Testnet"})}),(0,r.jsx)(e.td,{children:"An example contract that maintains a counter variable on the Casper Testnet"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/resources/tutorials/beginner/upgrade-contract",children:"Smart Contract Upgrades"})}),(0,r.jsx)(e.td,{children:"Learn how to upgrade smart contracts"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/README.md",children:"NFTs on Casper with the CEP-78 NFT Standard"})}),(0,r.jsx)(e.td,{children:"Implementing the Casper CEP-78 NFT standard"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/casper-ecosystem/cep18/blob/master/docs/full-tutorial.md",children:"Fungible Tokens on Casper"})}),(0,r.jsx)(e.td,{children:"Implement the Casper Fungible Token standard"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/resources/tutorials/advanced/return-values-tutorial",children:"Interacting with Runtime Return Values"})}),(0,r.jsx)(e.td,{children:"Learning how to return a value using contract code"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/resources/advanced/list-auth-keys-tutorial",children:"Working with Authorization Keys"})}),(0,r.jsx)(e.td,{children:"Retrieving and using the authorization keys associated with a transaction"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/2.0.0/resources/tutorials/advanced/transfer-token-to-contract",children:"Safely Transfer Tokens to a Contract"})}),(0,r.jsx)(e.td,{children:"How to handle tokens via a contract"})]})]})]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);