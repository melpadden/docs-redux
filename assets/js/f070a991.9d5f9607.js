"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[55592],{26591:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=s(74848),a=s(28453);const i={},o="Authorization Keys",r={id:"concepts/list-auth-keys",title:"Authorization Keys",description:"This topic explains the usage of authorization keys when signing a deploy and how to access them from a smart contract. Try the Working with Authorization Keys tutorial for an example.",source:"@site/versioned_docs/version-1.5.X/concepts/list-auth-keys.md",sourceDirName:"concepts",slug:"/concepts/list-auth-keys",permalink:"/1.5.X/concepts/list-auth-keys",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{},sidebar:"concepts",previous:{title:"Smart Contracts",permalink:"/1.5.X/concepts/smart-contracts"},next:{title:"Call Stacks",permalink:"/1.5.X/concepts/callstack"}},c={},h=[{value:"Associated Keys vs. Authorization Keys",id:"associated-keys-vs-authorization-keys",level:2},{value:"Accessing Authorization Keys from a Smart Contract",id:"accessing-authorization-keys-from-a-smart-contract",level:2},{value:"When to Use Authorization Keys",id:"when-to-use-authorization-keys",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"import useBaseUrl from '@docusaurus/useBaseUrl';"}),"\n",(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"authorization-keys",children:"Authorization Keys"})}),"\n",(0,n.jsxs)(t.p,{children:["This topic explains the usage of authorization keys when signing a deploy and how to access them from a smart contract. Try the ",(0,n.jsx)(t.a,{href:"/1.5.X/resources/advanced/list-auth-keys-tutorial",children:"Working with Authorization Keys"})," tutorial for an example."]}),"\n",(0,n.jsx)(t.h2,{id:"associated-keys-vs-authorization-keys",children:"Associated Keys vs. Authorization Keys"}),"\n",(0,n.jsx)(t.p,{children:"Let's review the difference between associated keys to an Account and authorization keys for a Deploy."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Associated keys are public keys that are associated with a given account. To understand associated keys and how they are linked to an account, read about ",(0,n.jsx)(t.a,{href:"/1.5.X/concepts/design/casper-design#accounts-associated-keys-weights",children:"associated keys and weights"})," and try the ",(0,n.jsx)(t.a,{href:"/1.5.X/resources/tutorials/advanced/two-party-multi-sig",children:"Two-Party Multi-Signature"})," tutorial."]}),"\n",(0,n.jsxs)(t.li,{children:["Authorization keys are public keys used to sign a deploy and are listed in the Deploy's ",(0,n.jsx)(t.code,{children:"approvals"}),". Authorization keys are a subset of the associated keys of the account under which the deploy is executed."]}),"\n",(0,n.jsxs)(t.li,{children:["When a node receives a deploy, it checks that the deploy has the required authorization keys under ",(0,n.jsx)(t.code,{children:"approvals"})," before including it in a block."]}),"\n",(0,n.jsx)(t.li,{children:"Different deploys executing the same smart contract can have different authorization keys."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Image showing associated keys and authorization keys",src:s(28963).A+"",width:"862",height:"842"})}),"\n",(0,n.jsx)(t.p,{children:"Here is a sample JSON representation of an Account's associated keys:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'"associated_keys": [\n{\n    "account_hash": "account-hash-1ab\u202611",\n    "weight": 1\n},\n{\n    "account_hash": "account-hash-2cd\u202622",\n    "weight": 1\n},\n{\n    "account_hash": "account-hash-3de\u202633",\n    "weight": 1\n   },\n{\n    "account_hash": "account-hash-4fg\u202644",\n      "weight": 1\n}\n ], ...\n'})}),"\n",(0,n.jsx)(t.p,{children:"Here is a sample JSON representation of a Deploy's authorization keys:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'"approvals": [\n    {\n      "signer": " 2cd...22",\n      "signature": "02df8c...f481"\n    },\n    {\n      "signer": "4fg...44",\n      "signature": "02ef21...756a"\n    }\n]\n'})}),"\n",(0,n.jsx)(t.h2,{id:"accessing-authorization-keys-from-a-smart-contract",children:"Accessing Authorization Keys from a Smart Contract"}),"\n",(0,n.jsxs)(t.p,{children:["Contract code can retrieve the set of authorization keys for a given deploy by calling the ",(0,n.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.list_authorization_keys.html",children:"contract_api::runtime::list_authorization_keys"})," function, which returns the set of account hashes representing the keys used to sign the deploy."]}),"\n",(0,n.jsx)(t.h2,{id:"when-to-use-authorization-keys",children:"When to Use Authorization Keys"}),"\n",(0,n.jsx)(t.p,{children:"Authorization keys give developers more fine-grained control within their smart contracts. For example, developers can define a hierarchy within an account's associated keys. Then, they can use this hierarchy and the current execution's authorization keys to limit access for certain operations."}),"\n",(0,n.jsxs)(t.p,{children:["Try the ",(0,n.jsx)(t.a,{href:"/1.5.X/resources/advanced/list-auth-keys-tutorial",children:"Working with Authorization Keys"})," tutorial to view an example workflow."]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28963:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/authorization-keys-9187fa39eca478722639797b5109fa50.png"},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>r});var n=s(96540);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);