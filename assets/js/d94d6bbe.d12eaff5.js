"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[49065],{78715:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=s(74848),o=s(28453);const r={title:"Fast Sync"},a="Introducing Fast Sync",i={id:"operators/setup/fast-sync",title:"Fast Sync",description:"A Casper Network requires new nodes to download and execute every block to join the network. From genesis (start of the Mainnet), the node executes each deploy in every block. This process continues until the node has arrived at the current state of the blockchain. Syncing a node this way can take a very long time.",source:"@site/versioned_docs/version-1.5.X/operators/setup/fast-sync.md",sourceDirName:"operators/setup",slug:"/operators/setup/fast-sync",permalink:"/1.5.X/operators/setup/fast-sync",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{title:"Fast Sync"},sidebar:"operators",previous:{title:"Installation",permalink:"/1.5.X/operators/setup/install-node"},next:{title:"Open Files Limit",permalink:"/1.5.X/operators/setup/open-files"}},c={},l=[{value:"How Fast Sync Works",id:"how-fast-sync-works",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"introducing-fast-sync",children:"Introducing Fast Sync"})}),"\n",(0,n.jsx)(t.p,{children:"A Casper Network requires new nodes to download and execute every block to join the network. From genesis (start of the Mainnet), the node executes each deploy in every block. This process continues until the node has arrived at the current state of the blockchain. Syncing a node this way can take a very long time."}),"\n",(0,n.jsxs)(t.p,{children:["We have introduced a fast syncing process (fast sync) to provide a faster alternative to joining a Casper network. Fast sync does not start syncing at the genesis block; instead, the operator verifies a recent block and provides a ",(0,n.jsx)(t.a,{href:"/1.5.X/operators/setup/basic-node-configuration#trusted-hash-for-synchronizing",children:"trusted hash"})," to the node software. The global state, account balances, and all other on-chain information is the storage layer of the blockchain and is massive in size, so fast sync downloads the global state of only the most recent block. The following section briefly describes the fast sync process."]}),"\n",(0,n.jsx)(t.h2,{id:"how-fast-sync-works",children:"How Fast Sync Works"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(54096).A+"",width:"661",height:"81"})}),"\n",(0,n.jsxs)(t.p,{children:["For fast sync, operators must provide the trusted hash of a block in the ",(0,n.jsx)(t.code,{children:"config.toml"})," file. An example can be found ",(0,n.jsx)(t.a,{href:"https://github.com/casper-network/casper-node/blob/f7d8228de3cb56a3fe705f5a787d3dbf03ff7998/resources/production/config-example.toml#L7",children:"here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Fast sync uses this trusted block as part of the cryptographic verification for the later blocks. The node downloads the trusted block first, then newer blocks up to and including the most recent block from the current era. For example, if the trusted hash is 5 hours old, it will first download that block, then newer blocks, until it arrives at one that is only a few minutes old. It then downloads the newer block's global state. Finally, it executes all the blocks the network created while the download was in progress until it is entirely in sync."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},54096:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/fast-sync-process-b20a3732a0c1a20e1ff682568f6a8390.png"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(96540);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);