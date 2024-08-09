"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[3766],{6243:(t,e,c)=>{c.r(e),c.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=c(4848),s=c(8453);const a={title:"Call Stacks"},i="Understanding Call Stacks",o={id:"concepts/callstack",title:"Call Stacks",description:"Users wishing to interact with a Casper network must do so through sending a Deploy. All Deploys consist of session code run in the context of the user account that sent the Deploy. The session code may install contract code to global state, or interact with previously installed contract code.",source:"@site/docs/concepts/callstack.md",sourceDirName:"concepts",slug:"/concepts/callstack",permalink:"/docs-redux/concepts/callstack",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Call Stacks"},sidebar:"concepts",previous:{title:"Authorization Keys",permalink:"/docs-redux/concepts/list-auth-keys"},next:{title:"Dictionaries",permalink:"/docs-redux/concepts/dictionaries"}},r={},l=[{value:"The Caller",id:"the-caller",level:2},{value:"The Call Stack",id:"the-call-stack",level:2},{value:"Limitations",id:"limitations",level:2}];function h(t){const e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"import useBaseUrl from '@docusaurus/useBaseUrl';"}),"\n",(0,n.jsx)(e.h1,{id:"understanding-call-stacks",children:"Understanding Call Stacks"}),"\n",(0,n.jsxs)(e.p,{children:["Users wishing to interact with a Casper network must do so through ",(0,n.jsx)(e.a,{href:"/docs-redux/developers/cli/sending-deploys",children:"sending a Deploy"}),". All Deploys consist of ",(0,n.jsx)(e.a,{href:"/docs-redux/developers/writing-onchain-code/writing-session-code",children:"session code"})," run in the context of the user account that sent the Deploy. The session code may ",(0,n.jsx)(e.a,{href:"/docs-redux/developers/cli/installing-contracts",children:"install contract code to global state"}),", or interact with previously ",(0,n.jsx)(e.a,{href:"/docs-redux/developers/writing-onchain-code/calling-contracts",children:"installed contract code"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["When the session code within a Deploy interacts with one or more contracts, this is the beginning of a ",(0,n.jsx)(e.a,{href:"https://docs.rs/casper-types/latest/casper_types/system/enum.CallStackElement.html",children:(0,n.jsx)(e.code,{children:"Call Stack"})}),". A call stack is the chronological order in which contracts call other contracts, initiated by an instance of session code."]}),"\n",(0,n.jsx)(e.h2,{id:"the-caller",children:"The Caller"}),"\n",(0,n.jsxs)(e.p,{children:["In every instance of a call stack, the originating caller is the session code within the account's context that began the interaction. Contract code cannot spontaneously act without session code to activate it. As such, the session code represents the ",(0,n.jsx)(e.em,{children:"zeroth"})," entity in each call stack. The account that initiated the deploy can be retrieved with the ",(0,n.jsx)(e.a,{href:"https://docs.rs/casper-contract/3.0.0/casper_contract/contract_api/runtime/fn.get_caller.html",children:"contract_api::runtime::get_caller"})," function."]}),"\n",(0,n.jsx)(e.h2,{id:"the-call-stack",children:"The Call Stack"}),"\n",(0,n.jsxs)(e.p,{children:["Developers can access the call stack with the ",(0,n.jsx)(e.a,{href:"https://docs.rs/casper-contract/3.0.0/casper_contract/contract_api/runtime/fn.get_call_stack.html",children:"contract_api::runtime::get_call_stack"})," function."]}),"\n",(0,n.jsxs)(e.p,{children:["If session code calls a contract, which in turn calls another contract, then the session code would represent the ",(0,n.jsx)(e.em,{children:"zeroth"})," entity in the stack, the contract called by the initiating session code would be the ",(0,n.jsx)(e.em,{children:"first"})," and the contract called by the first contract would be the ",(0,n.jsx)(e.em,{children:"second"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["In this example, the first contract would be the ",(0,n.jsx)(e.code,{children:"immediate caller"})," of the second contract, meaning it interacted directly with it. The session code would remain the ",(0,n.jsx)(e.code,{children:"caller"}),"."]}),"\n",(0,n.jsx)(e.p,{children:'<img class="align-center" src={useBaseUrl("/image/callstack.png")} width="450" alt="Call Stack" />'}),"\n",(0,n.jsx)(e.h2,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsxs)(e.p,{children:["Casper networks place a limitation on the maximum height of a call stack. This value can be set within the ",(0,n.jsx)(e.code,{children:"chainspec"})," for the network in question. For the Casper Mainnet, this limit is set at ",(0,n.jsx)(e.code,{children:"10"})," contracts. This does not include the initiating session code, which would still count as the ",(0,n.jsx)(e.em,{children:"zeroth"})," instance within the stack."]}),"\n",(0,n.jsx)(e.p,{children:"As such, a call stack may consist of up to ten consecutive called smart contracts, assuming that the Casper network you are working with is set to the default call stack depth. Smart contract developers should consider it best practice to limit the depth of their call stack as much as practicable. If your contract calls a contract not under your direct control, it may call into any other contracts. You can avoid hitting the limitation by being efficient in your contracts and avoiding superfluous contract separation."}),"\n",(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsx)(e.p,{children:"Contract code cannot call session code, only other contract code."})})]})}function d(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}},8453:(t,e,c)=>{c.d(e,{R:()=>i,x:()=>o});var n=c(6540);const s={},a=n.createContext(s);function i(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);