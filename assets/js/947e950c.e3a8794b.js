"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[83317],{85867:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=o(74848),t=o(28453);const r={},i="Required Methods for Minimal Compliance",a={id:"developers/json-rpc/minimal-compliance",title:"Required Methods for Minimal Compliance",description:"The methods included in this document represent the most basic, fundamental endpoints for a viable and compliant Casper SDK. They allow the user to retrieve the information necessary to interact with a Casper network, as well as the means to interact.",source:"@site/versioned_docs/version-2.0.0/developers/json-rpc/minimal-compliance.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/minimal-compliance",permalink:"/docs-redux/2.0.0/developers/json-rpc/minimal-compliance",draft:!1,unlisted:!1,tags:[],version:"2.0.0",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1726493368e3,frontMatter:{},sidebar:"developers",previous:{title:"Guidance for JSON-RPC SDK Compliance",permalink:"/docs-redux/2.0.0/developers/json-rpc/guidance"},next:{title:"Transactional JSON-RPC Methods",permalink:"/docs-redux/2.0.0/developers/json-rpc/json-rpc-transactional"}},c={},d=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"required-methods-for-minimal-compliance",children:"Required Methods for Minimal Compliance"})}),"\n",(0,s.jsx)(n.p,{children:"The methods included in this document represent the most basic, fundamental endpoints for a viable and compliant Casper SDK. They allow the user to retrieve the information necessary to interact with a Casper network, as well as the means to interact."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/json-rpc/json-rpc-informational#chain_get_block",children:(0,s.jsx)(n.code,{children:"chain_get_block"})})," - This method returns the JSON representation of a Block from the network. The ongoing validity of the chain depends on block verification, which includes both a record of deploys and transfers."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/json-rpc/json-rpc-informational#info_get_deploy",children:(0,s.jsx)(n.code,{children:"info_get_deploy"})})," - This method allows retrieval of a Deploy from a Casper network. Without this method, users will be unable to verify any subsequent information relating to a sent Deploy."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/json-rpc/json-rpc-transactional#account_put_deploy",children:(0,s.jsx)(n.code,{children:"account_put_deploy"})})," - This method allows users to send their compiled Wasm (as part of a Deploy) to a node on a Casper network. Deploys represent the only means by which a user can perform computation on the platform, without which their interaction with a Casper network will be entirely passive."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/json-rpc/json-rpc-informational#chain_get_state_root_hash",children:(0,s.jsx)(n.code,{children:"chain_get_state_root_hash"})})," - The state root hash is one of the several ",(0,s.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/json-rpc/types_chain#globalstateidentifier",children:"global state identifiers"})," used to query the network state after sending deploys."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/json-rpc/json-rpc-informational#state_get_account_info",children:(0,s.jsx)(n.code,{children:"state_get_account_info"})})," - This method returns a JSON representation of an Account from the network. ",(0,s.jsx)(n.code,{children:"state_get_account_info"})," is required to view associated account information, including any associated keys, named keys, action thresholds and the main purse."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/json-rpc/json-rpc-informational#query_balance",children:(0,s.jsx)(n.code,{children:"query_balance"})})," - This method returns a purse's balance from a network. This is the only method to return a purse's balance in a human-readable format."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/json-rpc/json-rpc-informational#state_get_dictionary_item",children:(0,s.jsx)(n.code,{children:"state_get_dictionary_item"})})," - This method returns an item from a Dictionary. Dictionaries represent a more efficient means of tracking large amounts of state."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/json-rpc/json-rpc-informational#query_global_state",children:(0,s.jsx)(n.code,{children:"query_global_state"})})," - This method allows for querying values stored under certain keys in global state. Aside from purse balances, this is the main means of recovering stored data from a Casper network."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The deprecated methods ",(0,s.jsx)(n.code,{children:"state_get_balance"})," and ",(0,s.jsx)(n.code,{children:"state_get_item"})," should not be used."]})}),"\n",(0,s.jsxs)(n.p,{children:["In addition to these methods, a minimally compliant Casper SDK must account for the ",(0,s.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/json-rpc/types_chain",children:"types"})," associated with each method. Each method above links to the expanded information available within the larger JSON RPC method pages, which includes the necessary associated types."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var s=o(96540);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);