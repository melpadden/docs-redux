"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[8061],{84303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(74848),a=n(28453);const o={},s="Calling Contracts",c={id:"developers/writing-onchain-code/calling-contracts",title:"Calling Contracts",description:"Calling a contract on a Casper network requires the use of a transaction. When using the Casper Rust client, JavaScript SDK, or any other client, the intermediary client crafts the transaction for you, using the arguments you provide. This document outlines the various transaction variants through which you can execute Wasm or invoke the execution of on-chain Wasm.",source:"@site/docs/developers/writing-onchain-code/calling-contracts.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/calling-contracts",permalink:"/next/developers/writing-onchain-code/calling-contracts",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1723745091e3,frontMatter:{},sidebar:"developers",previous:{title:"Upgrading and Maintaining Smart Contracts",permalink:"/next/developers/writing-onchain-code/upgrading-contracts"},next:{title:"Contracts and Session Code",permalink:"/next/developers/writing-onchain-code/contract-vs-session"}},i={},d=[{value:"Using Legacy Deploy Variants",id:"using-legacy-deploy-variants",level:2},{value:"ModuleBytes",id:"modulebytes",level:3},{value:"StoredContractByHash",id:"storedcontractbyhash",level:3},{value:"StoredContractByName",id:"storedcontractbyname",level:3},{value:"StoredVersionedContractByHash",id:"storedversionedcontractbyhash",level:3},{value:"StoredVersionedContractByName",id:"storedversionedcontractbyname",level:3},{value:"Transfer",id:"transfer",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"calling-contracts",children:"Calling Contracts"})}),"\n",(0,r.jsx)(t.p,{children:"Calling a contract on a Casper network requires the use of a transaction. When using the Casper Rust client, JavaScript SDK, or any other client, the intermediary client crafts the transaction for you, using the arguments you provide. This document outlines the various transaction variants through which you can execute Wasm or invoke the execution of on-chain Wasm."}),"\n",(0,r.jsx)(t.h2,{id:"using-legacy-deploy-variants",children:"Using Legacy Deploy Variants"}),"\n",(0,r.jsx)(t.h3,{id:"modulebytes",children:"ModuleBytes"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"ModuleBytes"})," is a deploy variant that allows you to pass opaque Wasm bytes to a network. This variant is used to install a contract on the chain or execute Wasm."]}),"\n",(0,r.jsxs)(t.p,{children:["However, you can also use ",(0,r.jsx)(t.code,{children:"ModuleBytes"})," to deploy session code that calls a contract."]}),"\n",(0,r.jsxs)(t.p,{children:["Further information on the structure of ",(0,r.jsx)(t.code,{children:"ModuleBytes"})," can be found in ",(0,r.jsx)(t.a,{href:"/next/developers/json-rpc/types_chain#modulebytes",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"storedcontractbyhash",children:"StoredContractByHash"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"StoredContractByHash"})," is a deploy variant that invokes on-chain Wasm by specifying the contract hash and an entry point within the contract. When you don't need to send additional Wasm, you can use this deploy variant to invoke on-chain Wasm. It accepts any runtime arguments necessary for the entry point in question."]}),"\n",(0,r.jsx)(t.p,{children:"While there is no Wasm associated with this variant, it is still a deploy sent to a node that invokes an installed contract."}),"\n",(0,r.jsxs)(t.p,{children:["Further information on the structure of ",(0,r.jsx)(t.code,{children:"StoredContractByHash"})," can be found ",(0,r.jsx)(t.a,{href:"/next/developers/json-rpc/types_chain#storedcontractbyhash",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"storedcontractbyname",children:"StoredContractByName"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"StoredContractByName"})," is similar to ",(0,r.jsx)(t.code,{children:"StoredContractByHash"}),", with the main difference being the reference used to invoke on-chain Wasm. Where ",(0,r.jsx)(t.code,{children:"StoredContractByHash"})," requires the contract hash, ",(0,r.jsx)(t.code,{children:"StoredContractByName"})," uses a string stored as a ",(0,r.jsx)(t.a,{href:"/next/developers/json-rpc/types_chain#namedkey",children:(0,r.jsx)(t.code,{children:"NamedKey"})})," in the caller's account."]}),"\n",(0,r.jsxs)(t.p,{children:["This allows the caller to more easily reference a contract stored on-chain for later use but requires pre-planning to store the name within their account's ",(0,r.jsx)(t.code,{children:"NamedKeys"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"storedversionedcontractbyhash",children:"StoredVersionedContractByHash"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"StoredVersionedContractByHash"})," is a deploy variant that invokes on-chain Wasm based on the contract package hash rather than the contract hash directly. This variant allows the caller to specify a version within the contract package, but if a specific version is not supplied, it will use the most recent version of the contract within the package."]}),"\n",(0,r.jsxs)(t.p,{children:["This makes ",(0,r.jsx)(t.code,{children:"StoredVersionedContractByHash"})," more stable than ",(0,r.jsx)(t.code,{children:"StoredContractByHash"}),", as any caller will be directed to the most recent version of the internal contract without needing to specify the hash of that specific contract. Callers that regularly interact with a contract that they know will be upgraded can use this variant to ensure they are always using the most up-to-date version."]}),"\n",(0,r.jsxs)(t.p,{children:["DApp developers that use contracts developed by other parties can use ",(0,r.jsx)(t.code,{children:"StoredVersionedContractByHash"})," to avoid interruptions from contract version changes."]}),"\n",(0,r.jsxs)(t.p,{children:["Further information on the structure of ",(0,r.jsx)(t.code,{children:"StoredVersionedContractByHash"})," can be found ",(0,r.jsx)(t.a,{href:"/next/developers/json-rpc/types_chain#storedversioncontractbyhash",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"storedversionedcontractbyname",children:"StoredVersionedContractByName"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"StoredVersionedContractByName"})," combines the functionality of ",(0,r.jsx)(t.code,{children:"StoredContractByName"})," and ",(0,r.jsx)(t.code,{children:"StoredVersionedContractByHash"}),". It allows a developer to store a reference string as a ",(0,r.jsx)(t.code,{children:"NamedKey"})," within their account context that references a contract by its contract package hash."]}),"\n",(0,r.jsxs)(t.p,{children:["Further information on the structure of ",(0,r.jsx)(t.code,{children:"StoredVersionedContractByName"})," can be found ",(0,r.jsx)(t.a,{href:"/next/developers/json-rpc/types_chain#storedversioncontractbyname",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"transfer",children:"Transfer"}),"\n",(0,r.jsxs)(t.p,{children:["Native ",(0,r.jsx)(t.code,{children:"Transfer"}),"s are Wasmless transfers on a Casper network. This is how most transfers take place, albeit through a system like the Rust client that crafts the associated deploy and sends it to the network."]}),"\n",(0,r.jsxs)(t.p,{children:["Further information on the structure of a native ",(0,r.jsx)(t.code,{children:"Transfer"})," can be found ",(0,r.jsx)(t.a,{href:"/next/developers/json-rpc/types_chain#transfer",children:"here"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);