"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[75941],{59560:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=s(74848),n=s(28453);const o={},c="Execution Error Codes",i={id:"developers/cli/execution-error-codes",title:"Execution Error Codes",description:"This section covers smart contract execution error codes.",source:"@site/versioned_docs/version-2.0.0/developers/cli/execution-error-codes.md",sourceDirName:"developers/cli",slug:"/developers/cli/execution-error-codes",permalink:"/2.0.0/developers/cli/execution-error-codes",draft:!1,unlisted:!1,tags:[],version:"2.0.0",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1726493368e3,frontMatter:{},sidebar:"developers",previous:{title:"OpCode Costs Tables",permalink:"/2.0.0/developers/cli/opcode-costs"}},a={},d=[];function p(e){const r={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"execution-error-codes",children:"Execution Error Codes"})}),"\n",(0,t.jsx)(r.p,{children:"This section covers smart contract execution error codes."}),"\n",(0,t.jsxs)(r.p,{children:["As mentioned in ",(0,t.jsx)(r.a,{href:"/2.0.0/developers/writing-onchain-code/simple-contract",children:"Writing Rust Contracts"}),", smart contracts can exit with an error code defined by an ",(0,t.jsx)(r.a,{href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html",children:"ApiError"}),". Descriptions of each variant are found ",(0,t.jsx)(r.a,{href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html#variants",children:"here"})," and include the following sub-types:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html#variant.HandlePayment",children:"payment errors"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html#variant.Mint",children:"mint errors"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html#variant.User",children:"custom user errors"})}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["An ",(0,t.jsx)(r.code,{children:"ApiError"})," of one of these sub-types maps to an exit code with an offset defined by the sub-type. For example, an ",(0,t.jsx)(r.code,{children:"ApiError::User(2)"})," maps to an exit code of ",(0,t.jsx)(r.code,{children:"65538"})," (i.e. ",(0,t.jsx)(r.code,{children:"65536 + 2"}),"). You can find a mapping from contract exit codes to ",(0,t.jsx)(r.code,{children:"ApiError"})," variants ",(0,t.jsx)(r.a,{href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html#variants",children:"here"}),"."]})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>i});var t=s(96540);const n={},o=t.createContext(n);function c(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);