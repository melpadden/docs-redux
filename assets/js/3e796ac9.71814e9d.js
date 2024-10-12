"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[15680],{98619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var s=n(74848),a=n(28453);const c={title:"Addressable Entities"},r="Addressable Entities",i={id:"concepts/addressable-entity",title:"Addressable Entities",description:"What is an Addressable Entity?",source:"@site/docs/concepts/addressable-entity.md",sourceDirName:"concepts",slug:"/concepts/addressable-entity",permalink:"/next/concepts/addressable-entity",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{title:"Addressable Entities"},sidebar:"concepts",previous:{title:"dApps",permalink:"/next/concepts/intro-to-dapps"},next:{title:"Accounts and Keys",permalink:"/next/concepts/accounts-and-keys"}},d={},o=[{value:"What is an Addressable Entity?",id:"what-is-an-addressable-entity",level:2},{value:"Account",id:"account",level:2},{value:"SmartContract",id:"smartcontract",level:2},{value:"System",id:"system",level:2},{value:"Further Reading",id:"further-reading",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"addressable-entities",children:"Addressable Entities"})}),"\n",(0,s.jsx)(t.h2,{id:"what-is-an-addressable-entity",children:"What is an Addressable Entity?"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/next/concepts/glossary/A#addressable-entity",children:(0,s.jsx)(t.code,{children:"AddressableEntity"})})," data structure encapsulates the behaviour and data associated with several related concepts within the Casper type system.\nCasper 2.0 introduces the concept of an ",(0,s.jsx)(t.a,{href:"/next/concepts/glossary/A#addressable-entity",children:(0,s.jsx)(t.code,{children:"AddressableEntity"})})," which replaces the existing ",(0,s.jsx)(t.a,{href:"/next/concepts/glossary/A#account",children:(0,s.jsx)(t.code,{children:"Account"})})," and ",(0,s.jsx)(t.a,{href:"/next/concepts/glossary/S#smart-contract",children:(0,s.jsx)(t.code,{children:"Contract"})})," types."]}),"\n",(0,s.jsxs)(t.p,{children:["The merger of the ",(0,s.jsx)(t.code,{children:"Account"})," and ",(0,s.jsx)(t.code,{children:"Contract"})," concepts allows for some new possibilities."]}),"\n",(0,s.jsxs)(t.p,{children:["For any given ",(0,s.jsx)(t.code,{children:"AddressableEntity"}),", the ",(0,s.jsx)(t.code,{children:"EntityType"})," will identify if it is an ",(0,s.jsx)(t.code,{children:"Account"}),", a user-deployed ",(0,s.jsx)(t.code,{children:"SmartContract"}),", or a ",(0,s.jsx)(t.code,{children:"System"})," contract such as ",(0,s.jsx)(t.code,{children:"Mint"})," or ",(0,s.jsx)(t.code,{children:"HandlePayment"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This ",(0,s.jsx)(t.code,{children:"EntityType"})," will dictate what the addressable entity can and cannot do."]}),"\n",(0,s.jsx)(t.h2,{id:"account",children:"Account"}),"\n",(0,s.jsxs)(t.p,{children:["An addressable entity marked as an ",(0,s.jsx)(t.code,{children:"Account"})," will behave in much the same way as a traditional legacy account on a Casper network. It will have an associated key pair of a ",(0,s.jsx)(t.code,{children:"PublicKey"})," and a secret key, and an ",(0,s.jsx)(t.code,{children:"AccountHash"})," derived from the public key. There is also an associated main purse."]}),"\n",(0,s.jsx)(t.p,{children:"A legacy account will automatically migrate to an addressable entity when it interacts with the network, with no action necessary on the user side. Their key pair will continue functioning as it did prior to the migration. Further, their main purse will remain the same."}),"\n",(0,s.jsx)(t.h2,{id:"smartcontract",children:"SmartContract"}),"\n",(0,s.jsxs)(t.p,{children:["An addressable entity marked as a ",(0,s.jsx)(t.code,{children:"SmartContract"})," will have the same functionality as a legacy contract, but with several new features. The ",(0,s.jsx)(t.code,{children:"SmartContract"})," now possesses a main purse, and may have ",(0,s.jsx)(t.a,{href:"/next/concepts/design/casper-design#accounts-associated-keys-weights",children:"associated keys"})," and action thresholds that behave in the same way as an account. More information on multi-signature management, associated keys, and action thresholds can be found ",(0,s.jsx)(t.a,{href:"/next/resources/advanced/multi-sig/multi-sig-workflow",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"system",children:"System"}),"\n",(0,s.jsxs)(t.p,{children:["As part of the migration to Casper 2.0, system contracts (",(0,s.jsx)(t.code,{children:"Mint"}),", ",(0,s.jsx)(t.code,{children:"Auction"})," and ",(0,s.jsx)(t.code,{children:"HandlePayment"}),") will migrate to a special type of addressable entity with the ",(0,s.jsx)(t.code,{children:"EntityType"})," of ",(0,s.jsx)(t.code,{children:"System"}),". The ",(0,s.jsx)(t.code,{children:"StandardPayment"})," system contract will be pruned away."]}),"\n",(0,s.jsx)(t.h3,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/next/concepts/accounts-and-keys",children:"Accounts and Keys"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/next/concepts/smart-contracts",children:"Smart Contracts"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/next/concepts/key-types",children:"Hash Types"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/next/resources/advanced/multi-sig/",children:"Multi-Signature Management"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(96540);const a={},c=s.createContext(a);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);