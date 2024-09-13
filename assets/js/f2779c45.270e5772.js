"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[4192],{54770:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(74848),o=t(28453);const a={},s="Guidance for JSON-RPC SDK Compliance",r={id:"developers/json-rpc/guidance",title:"Guidance for JSON-RPC SDK Compliance",description:"A compliant Casper JSON-RPC SDK implementation must support all the endpoints and relevant types within the specification. The specification allows everything ranging from a minimal viable implementation to a full implementation, and a given SDK should cite which level of implementation they claim to be compliant with. For example, an SDK claiming to be an informational SDK must have implemented all entry points and relevant types described in the informational JSON-RPC methods page.",source:"@site/docs/developers/json-rpc/guidance.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/guidance",permalink:"/next/developers/json-rpc/guidance",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1723745091e3,frontMatter:{},sidebar:"developers",previous:{title:"Overview",permalink:"/next/developers/json-rpc/"},next:{title:"Required Methods for Minimal Compliance",permalink:"/next/developers/json-rpc/minimal-compliance"}},l={},c=[{value:"Consistency",id:"consistency",level:2},{value:"Advanced Functionality",id:"advanced-functionality",level:2}];function d(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"guidance-for-json-rpc-sdk-compliance",children:"Guidance for JSON-RPC SDK Compliance"})}),"\n",(0,i.jsxs)(n.p,{children:["A compliant Casper JSON-RPC SDK implementation must support all the endpoints and relevant types within the specification. The specification allows everything ranging from a minimal viable implementation to a full implementation, and a given SDK should cite which level of implementation they claim to be compliant with. For example, an SDK claiming to be an informational SDK must have implemented all entry points and relevant types described in the ",(0,i.jsx)(n.a,{href:"/next/developers/json-rpc/json-rpc-informational",children:"informational JSON-RPC methods"})," page."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["A Casper JSON-RPC SDK claiming to be complete is expected to implement ",(0,i.jsx)(n.em,{children:"all"})," endpoints and ",(0,i.jsx)(n.em,{children:"all"})," types defined in the serialization standard."]})}),"\n",(0,i.jsx)(n.h2,{id:"consistency",children:"Consistency"}),"\n",(0,i.jsx)(n.p,{children:"A Casper JSON-RPC SDK must be consistent in terminology, language, and functionality relative to the Casper platform's architecture and design. Use actual terms such as Account and AddressableEntity, not similar terms such as wallet."}),"\n",(0,i.jsx)(n.p,{children:"Care should be taken to maintain a universal language and not obscure the domain concepts of the Casper platform, which could confuse users of the SDK. The goal is to not make it difficult for users of an SDK to understand the documentation of the Casper platform. Further, they should be able to communicate effectively with technical support personnel who understand the terminology of the Casper platform and not the variant terminology of an SDK."}),"\n",(0,i.jsx)(n.h2,{id:"advanced-functionality",children:"Advanced Functionality"}),"\n",(0,i.jsx)(n.p,{children:"SDK developers are allowed and encouraged to add convenience methods, supporting utilities, domain specific or macro support and extended functionality using the available endpoints and possible combinations."}),"\n",(0,i.jsx)(n.p,{children:"However, it is critical that SDK developers avoid misleading or improperly characterizing the purpose and scope of the available endpoints. Custom functionality should improve on the basic building blocks of the Casper Platform, offering added convenience."}),"\n",(0,i.jsx)(n.p,{children:"For example, some languages have strong idiomatic opinions and programmers using those languages are comfortable with or even expect SDKs in that language to follow those idioms. This is acceptable, as long as they do not obfuscate underlying terminology or semantics of the Casper platform."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);