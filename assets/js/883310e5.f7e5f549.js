"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[3048],{57558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(74848),r=n(28453);const s={title:"Reading and Writing Data"},i="Reading and Writing Data to Global State",o={id:"concepts/design/reading-and-writing-to-the-blockchain",title:"Reading and Writing Data",description:"Casper features several means of reading and writing data to global state, depending on user needs and complexity. Reading data from global state can be done by dApps off-chain or by smart contracts on-chain. Writing data requires on-chain interactions due to the nature of the system. Storage in global state can be accomplished using Dictionaries or NamedKeys.",source:"@site/versioned_docs/version-1.5.X/concepts/design/reading-and-writing-to-the-blockchain.md",sourceDirName:"concepts/design",slug:"/concepts/design/reading-and-writing-to-the-blockchain",permalink:"/1.5.X/concepts/design/reading-and-writing-to-the-blockchain",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{title:"Reading and Writing Data"},sidebar:"concepts",previous:{title:"Highway Consensus",permalink:"/1.5.X/concepts/design/highway"},next:{title:"Overview",permalink:"/1.5.X/economics"}},c={},d=[{value:"Using the Casper JSON-RPC",id:"using-the-casper-json-rpc",level:2},{value:"Using the Casper Rust API",id:"using-the-casper-rust-api",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"reading-and-writing-data-to-global-state",children:"Reading and Writing Data to Global State"})}),"\n",(0,a.jsxs)(t.p,{children:["Casper features several means of reading and writing data to global state, depending on user needs and complexity. Reading data from global state can be done by dApps off-chain or by smart contracts on-chain. Writing data requires on-chain interactions due to the nature of the system. Storage in global state can be accomplished using ",(0,a.jsx)(t.a,{href:"/1.5.X/concepts/dictionaries",children:"Dictionaries"})," or ",(0,a.jsx)(t.a,{href:"/1.5.X/developers/json-rpc/types_chain#namedkey",children:(0,a.jsx)(t.code,{children:"NamedKeys"})}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Due to the nature of Casper's serialization standard, ",(0,a.jsx)(t.code,{children:"NamedKeys"})," should be used sparingly and only for small data sets. Developers should use dictionaries for larger mapped structures."]})}),"\n",(0,a.jsx)(t.h2,{id:"using-the-casper-json-rpc",children:"Using the Casper JSON-RPC"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"/1.5.X/developers/json-rpc/json-rpc-informational#query-global-state",children:(0,a.jsx)(t.code,{children:"query_global_state"})})," method available through the JSON-RPC allows users to read data from global state without performing on-chain actions. For more details, see the ",(0,a.jsx)(t.a,{href:"/1.5.X/resources/tutorials/beginner/querying-network",children:"Querying a Casper Network"})," tutorial."]}),"\n",(0,a.jsx)(t.h2,{id:"using-the-casper-rust-api",children:"Using the Casper Rust API"}),"\n",(0,a.jsx)(t.p,{children:"The Casper API includes the following functions for reading and writing to global state:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.put_key.html",children:"put_key"})," - Stores the given ",(0,a.jsx)(t.code,{children:"Key"})," under the given ",(0,a.jsx)(t.code,{children:"name"})," in the current context's named keys"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.get_key.html",children:"get_key"})," - Returns the requested ",(0,a.jsx)(t.code,{children:"NamedKey"})," from the current context"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_uref.html",children:"storage::new_uref"})," - Creates a new URef in the current context"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.write.html",children:"storage::write"})," - Writes a given value under a previously created URef"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.read.html",children:"storage::read"})," - Reads the value from a URef in global state"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.dictionary_put.html",children:"dictionary_put"})," - Writes the given value under the given ",(0,a.jsx)(t.code,{children:"dictionary_item_key"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.dictionary_get.html",children:"dictionary_get"})," - Retrieves the value stored under a ",(0,a.jsx)(t.code,{children:"dictionary_item_key"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["For more details, see the ",(0,a.jsx)(t.a,{href:"/1.5.X/resources/tutorials/advanced/storage-workflow",children:"Reading and Writing to Global State using Rust"})," tutorial."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);