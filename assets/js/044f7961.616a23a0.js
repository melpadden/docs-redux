"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[78114],{88914:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var s=t(74848),a=t(28453);const i={},r="Signing Transactions",o={id:"developers/dapps/signing-a-transaction",title:"Signing Transactions",description:"When creating a Transaction to be executed on a Casper network, the account owner, or more accurately, enough authorized signers must sign the transaction using their account's cryptographic key-pair. This key-pair is a combination of the account's secret and public keys. The signatures attached to the transaction allow the network to verify that it should be executed.",source:"@site/docs/developers/dapps/signing-a-transaction.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/signing-a-transaction",permalink:"/next/developers/dapps/signing-a-transaction",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{},sidebar:"developers",previous:{title:"URef Access Rights",permalink:"/next/developers/dapps/uref-security"},next:{title:"Estimating Gas Costs with Speculative Execution",permalink:"/next/developers/dapps/speculative-exec"}},c={},h=[{value:"Public Key Cryptography",id:"public-key-cryptography",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"signing-transactions",children:"Signing Transactions"})}),"\n",(0,s.jsxs)(n.p,{children:["When creating a ",(0,s.jsx)(n.a,{href:"/next/concepts/glossary/T#transaction",children:(0,s.jsx)(n.code,{children:"Transaction"})})," to be executed on a Casper network, the account owner, or more accurately, enough authorized signers must sign the transaction using their account's cryptographic key-pair. This key-pair is a combination of the account's secret and public keys. The signatures attached to the transaction allow the network to verify that it should be executed."]}),"\n",(0,s.jsxs)(n.p,{children:["When a signature is attached to a transaction, it is paired with the public key of the signer, and referred to as an ",(0,s.jsx)(n.a,{href:"/next/concepts/serialization/types#approval",children:(0,s.jsx)(n.code,{children:"Approval"})}),".  Every valid transaction has at least one approval."]}),"\n",(0,s.jsxs)(n.p,{children:["The signature creation process begins with the hashing of the payment and session of the transaction to create the ",(0,s.jsx)(n.code,{children:"BodyHash"}),". The ",(0,s.jsx)(n.code,{children:"BodyHash"})," becomes a component of the ",(0,s.jsx)(n.code,{children:"TransactionV1Header"})," as outlined in the ",(0,s.jsx)(n.a,{href:"/next/concepts/serialization/",children:"serialization standard"}),". From there, the ",(0,s.jsx)(n.code,{children:"TransactionV1Header"})," can be hashed to create the ",(0,s.jsx)(n.code,{children:"TransactionV1Hash"}),". As outlined above, the ",(0,s.jsx)(n.code,{children:"TransactionV1Hash"})," is then combined with the account's key-pair to create the transaction's signature."]}),"\n",(0,s.jsxs)(n.p,{children:["As the ",(0,s.jsx)(n.code,{children:"TransactionV1Hash"})," contains a hash of the transaction's body within, any variation to any aspect of the transaction or sending account's keys would render the ",(0,s.jsx)(n.code,{children:"TransactionV1Hash"})," invalid."]}),"\n",(0,s.jsx)(n.h2,{id:"public-key-cryptography",children:"Public Key Cryptography"}),"\n",(0,s.jsxs)(n.p,{children:["Casper networks are compatible with both ",(0,s.jsx)(n.code,{children:"Ed25519"})," and ",(0,s.jsx)(n.code,{children:"Secp256k1"})," public key cryptography. When ",(0,s.jsx)(n.a,{href:"/next/concepts/serialization/",children:"serialized"}),", public keys and signatures are prefixed with a single byte, used as a tag to denote the applicable algorithm. Ed25519 public keys and signatures are prefixed with ",(0,s.jsx)(n.code,{children:"1"}),", whereas Secp256k1 are prefixed with ",(0,s.jsx)(n.code,{children:"2"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Casper uses ",(0,s.jsx)(n.code,{children:"blake2b"})," hashing within our serialization. However, these hashed values will be hashed once again when they are signed over. The type of hashing depends on the associated keypair algorithm as follows:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Ed25519 signs over a SHA-512 digest."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Secp256k1 signs over a SHA-256 digest."}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);