"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[3766],{6243:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var n=c(4848),s=c(8453),o=c(6025);const a={title:"Call Stacks"},i="Understanding Call Stacks",r={id:"concepts/callstack",title:"Call Stacks",description:"Users wishing to interact with a Casper network must do so through sending a Deploy. All Deploys consist of session code run in the context of the user account that sent the Deploy. The session code may install contract code to global state, or interact with previously installed contract code.",source:"@site/docs/concepts/callstack.md",sourceDirName:"concepts",slug:"/concepts/callstack",permalink:"/docs-redux/docs-redux/concepts/callstack",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Call Stacks"},sidebar:"concepts",previous:{title:"Authorization Keys",permalink:"/docs-redux/docs-redux/concepts/list-auth-keys"},next:{title:"Dictionaries",permalink:"/docs-redux/docs-redux/concepts/dictionaries"}},l={},h=[{value:"The Caller",id:"the-caller",level:2},{value:"The Call Stack",id:"the-call-stack",level:2},{value:"Limitations",id:"limitations",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"understanding-call-stacks",children:"Understanding Call Stacks"})}),"\n",(0,n.jsxs)(t.p,{children:["Users wishing to interact with a Casper network must do so through ",(0,n.jsx)(t.a,{href:"/docs-redux/docs-redux/developers/cli/sending-deploys",children:"sending a Deploy"}),". All Deploys consist of ",(0,n.jsx)(t.a,{href:"/docs-redux/docs-redux/developers/writing-onchain-code/writing-session-code",children:"session code"})," run in the context of the user account that sent the Deploy. The session code may ",(0,n.jsx)(t.a,{href:"/docs-redux/docs-redux/developers/cli/installing-contracts",children:"install contract code to global state"}),", or interact with previously ",(0,n.jsx)(t.a,{href:"/docs-redux/docs-redux/developers/writing-onchain-code/calling-contracts",children:"installed contract code"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["When the session code within a Deploy interacts with one or more contracts, this is the beginning of a ",(0,n.jsx)(t.a,{href:"https://docs.rs/casper-types/latest/casper_types/system/enum.CallStackElement.html",children:(0,n.jsx)(t.code,{children:"Call Stack"})}),". A call stack is the chronological order in which contracts call other contracts, initiated by an instance of session code."]}),"\n",(0,n.jsx)(t.h2,{id:"the-caller",children:"The Caller"}),"\n",(0,n.jsxs)(t.p,{children:["In every instance of a call stack, the originating caller is the session code within the account's context that began the interaction. Contract code cannot spontaneously act without session code to activate it. As such, the session code represents the ",(0,n.jsx)(t.em,{children:"zeroth"})," entity in each call stack. The account that initiated the deploy can be retrieved with the ",(0,n.jsx)(t.a,{href:"https://docs.rs/casper-contract/3.0.0/casper_contract/contract_api/runtime/fn.get_caller.html",children:"contract_api::runtime::get_caller"})," function."]}),"\n",(0,n.jsx)(t.h2,{id:"the-call-stack",children:"The Call Stack"}),"\n",(0,n.jsxs)(t.p,{children:["Developers can access the call stack with the ",(0,n.jsx)(t.a,{href:"https://docs.rs/casper-contract/3.0.0/casper_contract/contract_api/runtime/fn.get_call_stack.html",children:"contract_api::runtime::get_call_stack"})," function."]}),"\n",(0,n.jsxs)(t.p,{children:["If session code calls a contract, which in turn calls another contract, then the session code would represent the ",(0,n.jsx)(t.em,{children:"zeroth"})," entity in the stack, the contract called by the initiating session code would be the ",(0,n.jsx)(t.em,{children:"first"})," and the contract called by the first contract would be the ",(0,n.jsx)(t.em,{children:"second"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In this example, the first contract would be the ",(0,n.jsx)(t.code,{children:"immediate caller"})," of the second contract, meaning it interacted directly with it. The session code would remain the ",(0,n.jsx)(t.code,{children:"caller"}),"."]}),"\n",(0,n.jsx)("img",{class:"align-center",src:(0,o.Ay)("/image/callstack.png"),width:"450",alt:"Call Stack"}),"\n",(0,n.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsxs)(t.p,{children:["Casper networks place a limitation on the maximum height of a call stack. This value can be set within the ",(0,n.jsx)(t.code,{children:"chainspec"})," for the network in question. For the Casper Mainnet, this limit is set at ",(0,n.jsx)(t.code,{children:"10"})," contracts. This does not include the initiating session code, which would still count as the ",(0,n.jsx)(t.em,{children:"zeroth"})," instance within the stack."]}),"\n",(0,n.jsx)(t.p,{children:"As such, a call stack may consist of up to ten consecutive called smart contracts, assuming that the Casper network you are working with is set to the default call stack depth. Smart contract developers should consider it best practice to limit the depth of their call stack as much as practicable. If your contract calls a contract not under your direct control, it may call into any other contracts. You can avoid hitting the limitation by being efficient in your contracts and avoiding superfluous contract separation."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Contract code cannot call session code, only other contract code."})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,c)=>{c.d(t,{R:()=>a,x:()=>i});var n=c(6540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);