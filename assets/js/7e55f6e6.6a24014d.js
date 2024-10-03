"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[72028],{60588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(74848),r=n(28453);const a={},c="Smart Contracts",o={id:"concepts/smart-contracts",title:"Smart Contracts",description:"Smart Contracts in General",source:"@site/versioned_docs/version-1.5.X/concepts/smart-contracts.md",sourceDirName:"concepts",slug:"/concepts/smart-contracts",permalink:"/1.5.X/concepts/smart-contracts",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{},sidebar:"concepts",previous:{title:"Global State",permalink:"/1.5.X/concepts/global-state"},next:{title:"Authorization Keys",permalink:"/1.5.X/concepts/list-auth-keys"}},i={},l=[{value:"Smart Contracts in General",id:"smart-contracts-in-general",level:2},{value:"Casper Smart Contracts",id:"casper-smart-contracts",level:2},{value:"Session Code",id:"session-code",level:2},{value:"Further Reading",id:"further-reading",level:3}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"smart-contracts",children:"Smart Contracts"})}),"\n",(0,s.jsx)(t.h2,{id:"smart-contracts-in-general",children:"Smart Contracts in General"}),"\n",(0,s.jsx)(t.p,{children:"A smart contract is a self-executing program that automates the actions required in a digital agreement. Once completed, the transactions are trackable and irreversible. Smart contracts permit trusted transactions and agreements among disparate, anonymous parties without the need for a central authority, legal system, or external enforcement mechanism."}),"\n",(0,s.jsx)(t.h2,{id:"casper-smart-contracts",children:"Casper Smart Contracts"}),"\n",(0,s.jsxs)(t.p,{children:["Casper smart contracts can be implemented in any programming language that compiles to ",(0,s.jsx)(t.a,{href:"/1.5.X/concepts/glossary/W#webassembly",children:"Wasm"}),", which can be installed and executed on-chain using ",(0,s.jsx)(t.a,{href:"/1.5.X/concepts/glossary/D#deploy",children:"Deploys"}),". Most documentation examples and the Casper system contracts are written in Rust. You can find a guide to writing a simple, smart contract in Rust ",(0,s.jsx)(t.a,{href:"/1.5.X/developers/writing-onchain-code/simple-contract",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"session-code",children:"Session Code"}),"\n",(0,s.jsxs)(t.p,{children:["Session code is the simplest logic one can execute on a Casper network. It is essential because it is often used to trigger contract logic stored on-chain. Entry points in a contract provide access to the contract code installed in global state. Either ",(0,s.jsx)(t.a,{href:"/1.5.X/developers/writing-onchain-code/contract-vs-session#what-is-session-code",children:"session code"})," or another smart contract may call these entry points. Understand when you would use session code over contract code ",(0,s.jsx)(t.a,{href:"/1.5.X/developers/writing-onchain-code/contract-vs-session",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/1.5.X/developers/writing-onchain-code/simple-contract",children:"Writing Contracts"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/1.5.X/developers/cli/sending-deploys",children:"Sending a Deploy"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/1.5.X/developers/cli/installing-contracts",children:"Installing Smart Contracts"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/1.5.X/developers/writing-onchain-code/calling-contracts",children:"Calling Smart Contracts"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/1.5.X/developers/cli/calling-contracts",children:"Calling Smart Contracts using the Casper Client"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/1.5.X/developers/writing-onchain-code/contract-vs-session",children:"Smart Contracts and Session Code"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);