"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[24281],{58376:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var t=s(74848),o=s(28453);const i={},c="Contracts and Session Code",r={id:"developers/writing-onchain-code/contract-vs-session",title:"Contracts and Session Code",description:"What is Session Code?",source:"@site/versioned_docs/version-2.0.0/developers/writing-onchain-code/contract-vs-session.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/contract-vs-session",permalink:"/docs-redux/2.0.0/developers/writing-onchain-code/contract-vs-session",draft:!1,unlisted:!1,tags:[],version:"2.0.0",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1726493368e3,frontMatter:{},sidebar:"developers",previous:{title:"Calling Contracts",permalink:"/docs-redux/2.0.0/developers/writing-onchain-code/calling-contracts"},next:{title:"Writing Session Code",permalink:"/docs-redux/2.0.0/developers/writing-onchain-code/writing-session-code"}},d={},a=[{value:"What is Session Code?",id:"what-is-session-code",level:2},{value:"Comparing Session and Contract Code",id:"comparing-session-and-contract",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"contracts-and-session-code",children:"Contracts and Session Code"})}),"\n",(0,t.jsx)(n.h2,{id:"what-is-session-code",children:"What is Session Code?"}),"\n",(0,t.jsxs)(n.p,{children:["Session code is the simplest logic one can execute on a Casper network. It is essential because it is often used to trigger contract logic stored on the chain. Session code requires only one entry point, the ",(0,t.jsx)(n.code,{children:"call"})," function, and it runs within the context of the account executing the session code. As a result, the session code runs with the account's permissions, such as having access to the account's main purse. For example, the session code could transfer tokens from the account's main purse."]}),"\n",(0,t.jsxs)(n.p,{children:["The best use of session code is when the situation calls for ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/concepts/glossary/S#stateless",children:"stateless"})," execution, and very little or no internal data needs to be tracked. Session code is required when interacting and accepting values returned across the Wasm boundary."]}),"\n",(0,t.jsx)(n.h2,{id:"comparing-session-and-contract",children:"Comparing Session and Contract Code"}),"\n",(0,t.jsx)(n.p,{children:"The following table summarizes the key differences between session code and contract code on a Casper network."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Session Code"}),(0,t.jsx)(n.th,{children:"Contract Code"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Session code always executes in the context of the account that signed the transaction containing the session code."}),(0,t.jsx)(n.td,{children:"A smart contract, which is stored on-chain logic, executes within its own context."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Session code has only one entry point, ",(0,t.jsx)(n.code,{children:"call"}),", which can be used to interact with the session code."]}),(0,t.jsx)(n.td,{children:"A smart contract can have multiple entry points that can be invoked."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["The ",(0,t.jsx)(n.code,{children:"call"})," entry point initiates any action the session code takes."]}),(0,t.jsx)(n.td,{children:"Any action undertaken by a contract must initiate through an outside call, usually via session code."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["When a ",(0,t.jsx)(n.code,{children:"put_key"})," call is made within the body of the session code, the key is added to the account's named keys."]}),(0,t.jsxs)(n.td,{children:["When a ",(0,t.jsx)(n.code,{children:"put_key"})," call is made within the smart contract's context, the contract's record is modified to have a new named_key entry."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["For more information on how to write session code, see ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/writing-onchain-code/writing-session-code",children:"Writing Session Code"}),"."]}),(0,t.jsxs)(n.td,{children:["For more information on writing contracts, see ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/writing-onchain-code/simple-contract",children:"Writing a Basic Smart Contract in Rust"}),"."]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"The following image depicts the comparison presented in the table."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Comparing Session and Contract Code",src:s(35598).A+"",width:"3716",height:"2652"})}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Learn to ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/writing-onchain-code/writing-session-code",children:"write session code"})]}),"\n",(0,t.jsxs)(n.li,{children:["Learn to ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/writing-onchain-code/testing-session-code",children:"test session code"})]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},35598:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/session-contract-context-eeb5191bad40f018d30b138e5fb2f964.png"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var t=s(96540);const o={},i=t.createContext(o);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);