"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[91741],{69319:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var t=s(74848),d=s(28453);const c={title:"Hash Types"},r="Understanding Hash Types",i={id:"concepts/hash-types",title:"Hash Types",description:"For the sake of user convenience and compatibility, we expect the delivery of hashes and similar data in the form of a prefixed string when using the node. The following is a list of string representations used.",source:"@site/versioned_docs/version-1.5.X/concepts/hash-types.md",sourceDirName:"concepts",slug:"/concepts/hash-types",permalink:"/1.5.X/concepts/hash-types",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{title:"Hash Types"},sidebar:"concepts",previous:{title:"Accounts and Keys",permalink:"/1.5.X/concepts/accounts-and-keys"},next:{title:"Deploy Lifecycle",permalink:"/1.5.X/deploy-and-deploy-lifecycle"}},a={},h=[{value:"Table of Associated Hash Types",id:"table-of-associated-hash-types",level:2},{value:"Hash and Key Explanations",id:"hash-and-key-explanations",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"understanding-hash-types",children:"Understanding Hash Types"})}),"\n",(0,t.jsx)(n.p,{children:"For the sake of user convenience and compatibility, we expect the delivery of hashes and similar data in the form of a prefixed string when using the node. The following is a list of string representations used."}),"\n",(0,t.jsx)(n.h2,{id:"table-of-associated-hash-types",children:"Table of Associated Hash Types"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Prefix"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"PublicKey"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"018a88e3dd7409f195fd52db2d3cba5d72ca6709bf1d94121bf3748801b40f6f5c"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"AccountHash"}),(0,t.jsx)(n.td,{children:"account-hash-"}),(0,t.jsx)(n.td,{children:"account-hash-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ContractHash"}),(0,t.jsx)(n.td,{children:"contract-"}),(0,t.jsx)(n.td,{children:"contract-0101010101010101010101010101010101010101010101010101010101010101"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ContractPackageHash"}),(0,t.jsx)(n.td,{children:"contract-package-"}),(0,t.jsx)(n.td,{children:"contract-package-0101010101010101010101010101010101010101010101010101010101010101"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key::Account"}),(0,t.jsx)(n.td,{children:"account-hash-"}),(0,t.jsx)(n.td,{children:"account-hash-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key::Hash"}),(0,t.jsx)(n.td,{children:"hash-"}),(0,t.jsx)(n.td,{children:"hash-0101010101010101010101010101010101010101010101010101010101010101"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key::URef"}),(0,t.jsx)(n.td,{children:"uref-"}),(0,t.jsx)(n.td,{children:"uref-0101010101010101010101010101010101010101010101010101010101010101-001"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key::Transfer"}),(0,t.jsx)(n.td,{children:"transfer-"}),(0,t.jsx)(n.td,{children:"transfer-0101010101010101010101010101010101010101010101010101010101010101"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key::DeployInfo"}),(0,t.jsx)(n.td,{children:"deploy-"}),(0,t.jsx)(n.td,{children:"deploy-0101010101010101010101010101010101010101010101010101010101010101"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key::EraInfo"}),(0,t.jsx)(n.td,{children:"era-"}),(0,t.jsx)(n.td,{children:"era-1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key::Balance"}),(0,t.jsx)(n.td,{children:"balance-"}),(0,t.jsx)(n.td,{children:"balance-0101010101010101010101010101010101010101010101010101010101010101"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key::Bid"}),(0,t.jsx)(n.td,{children:"bid-"}),(0,t.jsx)(n.td,{children:"bid-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key::Withdraw"}),(0,t.jsx)(n.td,{children:"withdraw-"}),(0,t.jsx)(n.td,{children:"withdraw-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key::Dictionary"}),(0,t.jsx)(n.td,{children:"dictionary-"}),(0,t.jsx)(n.td,{children:"dictionary-0101010101010101010101010101010101010101010101010101010101010101"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key::SystemContractRegistry"}),(0,t.jsx)(n.td,{children:"system-contract-registry-"}),(0,t.jsx)(n.td,{children:"system-contract-registry-00000000000000000000000000000000"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key::EraSummary"}),(0,t.jsx)(n.td,{children:"era-summary-"}),(0,t.jsx)(n.td,{children:"era-summary-00000000000000000000000000000000"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"hash-and-key-explanations",children:"Hash and Key Explanations"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PublicKey"})," is a 32 byte asymmetric public key, preceded by a one-byte prefix that tells whether the key is ",(0,t.jsx)(n.code,{children:"ed25519"})," or ",(0,t.jsx)(n.code,{children:"secp256k1"}),". There is a third type of ",(0,t.jsx)(n.code,{children:"PublicKey"})," that refers to the system and it is a single ",(0,t.jsx)(n.code,{children:"00"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"AccountHash"})," is a 32 byte hash of the ",(0,t.jsx)(n.code,{children:"PublicKey"})," serving to identify user accounts."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ContractHash"})," is the 32 byte hash of specific smart contract versions. You can use this to call specific contract versions."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ContractPackageHash"})," is a 32 byte hash of the smart contract package. This hash directs you to the contract package. The function ",(0,t.jsx)(n.code,{children:"call_versioned_contract"})," uses ",(0,t.jsx)(n.code,{children:"ContractPackageHash"})," and allows you to call the latest version of the contract (by default). It also allows you to call any version stored previously to the package."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Key"})," is a wrapper type that may contain one of several possible sets of data."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Key::Account"})," contains an AccountHash."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Key::Hash"})," contains a byte array with a length of 32, and as such can be used to pass any of the hashes. Please take note that the developer of the contract is responsible for implementation of any checks necessary on the receiving side."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Key::URef"})," contains an URef suffixed by access rights."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Key::Transfer"})," should contain the address hash for a transfer."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Key::DeployInfo"})," retains the address hash of deploy information."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Key::EraInfo"})," is the integer number of the associated era."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Key::Balance"})," is the balance of a purse."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Key::Bid"})," is used to keep track of bids for the auction contract. It is not generally used by users."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Key::Withdraw"})," is used to keep track of withdraws for the auction contract. It is not generally used by users and exists in a historical context."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Key::Dictionary"})," is the hash derived from a URef and a piece of arbitrary data and leads to a dictionary."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Key::SystemContractRegistry"})," is a unique ",(0,t.jsx)(n.code,{children:"Key"})," under which a mapping of the names and ContractHashes for system contracts, including ",(0,t.jsx)(n.code,{children:"Mint"}),", ",(0,t.jsx)(n.code,{children:"Auction"}),", ",(0,t.jsx)(n.code,{children:"HandlePayment"})," and ",(0,t.jsx)(n.code,{children:"StandardPayment"}),", is stored."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Key::EraSummary"})," is a ",(0,t.jsx)(n.code,{children:"Key"})," under which we store current era info."]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var t=s(96540);const d={},c=t.createContext(d);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);