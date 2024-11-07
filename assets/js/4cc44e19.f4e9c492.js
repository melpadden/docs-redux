"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[73030],{57301:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"concepts/global-state","title":"Global State","description":"global-state-head}","source":"@site/versioned_docs/version-2.0.0/concepts/global-state.md","sourceDirName":"concepts","slug":"/concepts/global-state","permalink":"/concepts/global-state","draft":false,"unlisted":false,"tags":[],"version":"2.0.0","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{},"sidebar":"concepts","previous":{"title":"Transaction Lifecycle","permalink":"/transactions-and-transaction-lifecycle"},"next":{"title":"Smart Contracts","permalink":"/concepts/smart-contracts"}}');var s=a(74848),o=a(28453);const i={},r="Global State {#global-state-head}",c={},l=[{value:"Introduction",id:"global-state-intro",level:2},{value:"Merkle Trie Structure",id:"global-state-trie",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"global-state-head",children:"Global State"})}),"\n",(0,s.jsx)(t.h2,{id:"global-state-intro",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["The storage layer for the Casper blockchain is called ",(0,s.jsx)(t.em,{children:"global state"})," and has the semantics of a key-value store with additional permissions logic. All accounts, contracts, and any associated data they have are stored in global state. Not all users can access all data, so permissions need to be set accordingly."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Refer to ",(0,s.jsx)(t.a,{href:"/concepts/serialization/types#serialization-standard-serialization-key",children:"Keys and Permissions"})," for further information on keys."]})}),"\n",(0,s.jsxs)(t.p,{children:["Each finalized block causes changes to the network's global state because of the execution of the transactions it contains. For validators to efficiently judge the correctness of these changes, information about the new state needs to be communicated succinctly. Moreover, the network must communicate portions of global state to users while allowing them to verify the correctness of the parts they receive. For these reasons, the key-value store is implemented as a ",(0,s.jsx)(t.a,{href:"#global-state-trie",children:"Merkle trie"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"global-state-trie",children:"Merkle Trie Structure"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Global State",src:a(41577).A+"",width:"5344",height:"4496"})}),"\n",(0,s.jsx)(t.p,{children:"At a high level, a Merkle trie is a key-value store data structure that can be shared piece-wise in a verifiable way (via a construction called a Merkle proof). Each node is labeled by the hash of its data. Leaf nodes are labeled with the hash of their data. Non-leaf nodes are labeled with the hash of the labels of their child nodes."}),"\n",(0,s.jsx)(t.p,{children:"Casper's implementation of the trie has radix of 256, meaning each branch node can have up to 256 children. A path through the tree can be an array of bytes, and serialization directly links a key with a path through the tree as its associated value."}),"\n",(0,s.jsx)(t.p,{children:"Formally, a trie node is one of the following:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a leaf, which includes a key and a value"}),"\n",(0,s.jsxs)(t.li,{children:["a branch, which has up to 256 ",(0,s.jsx)(t.code,{children:"blake2b256"})," hashes, pointing to up to 256 other nodes in the trie (recall each node is labeled by its hash)"]}),"\n",(0,s.jsxs)(t.li,{children:["an extension node, which includes a byte array (called the affix) and a ",(0,s.jsx)(t.code,{children:"blake2b256"})," hash pointing to another node in the trie"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The purpose of the extension node is to allow path compression. Consider an example where all keys use the same first four bytes for values in the trie. In this case, it would be inefficient to traverse through four branch nodes where there is only one choice; instead, the root node of the trie could be an extension node with an affix equal to those first four bytes and a pointer to the first non-trivial branch node."}),"\n",(0,s.jsx)(t.p,{children:"The Rust implementation of Casper's trie can be found on GitHub:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/casper-network/casper-node/blob/c8db6a737c41dcdfb86ed6bed16d24284cf5c3b9/execution_engine/src/storage/trie/mod.rs#L340",children:"Definition of the trie data structure"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/casper-network/casper-node/blob/c8db6a737c41dcdfb86ed6bed16d24284cf5c3b9/execution_engine/src/storage/trie_store/operations/mod.rs#L44",children:"Reading from the trie"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/casper-network/casper-node/blob/c8db6a737c41dcdfb86ed6bed16d24284cf5c3b9/execution_engine/src/storage/trie_store/operations/mod.rs#L845",children:"Writing to the trie"})}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Conceptually, each block has its trie because the state changes based on the transactions it contains. For this reason, Casper's implementation has a notion of a ",(0,s.jsx)(t.code,{children:"TrieStore"}),", which allows us to look up the root node for each trie."]})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},41577:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/global-state-6ff422f087f093966968318f641d26fc.png"},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>r});var n=a(96540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);