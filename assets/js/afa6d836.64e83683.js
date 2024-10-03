"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[46724],{96186:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>i});var s=n(74848),c=n(28453);const t={},a="B",l={id:"concepts/glossary/B",title:"B",description:"---",source:"@site/docs/concepts/glossary/B.md",sourceDirName:"concepts/glossary",slug:"/concepts/glossary/B",permalink:"/concepts/glossary/B",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{},sidebar:"concepts",previous:{title:"A",permalink:"/concepts/glossary/A"},next:{title:"C",permalink:"/concepts/glossary/C"}},r={},i=[{value:"Blake2b",id:"blake2b",level:2},{value:"Block",id:"block",level:2},{value:"Block creation",id:"block-creation",level:2},{value:"Block finality",id:"block-finality",level:2},{value:"Block gossiping",id:"block-gossiping",level:2},{value:"Block height",id:"block-height",level:2},{value:"Block passing",id:"block-passing",level:2},{value:"Block processing",id:"block-processing",level:2},{value:"Block proposal",id:"block-proposal",level:2},{value:"Block validation",id:"block-validation",level:2},{value:"Blockchain",id:"blockchain",level:2},{value:"Block store",id:"block-store",level:2},{value:"Bond",id:"bond",level:2},{value:"Bonding",id:"bonding",level:2},{value:"Booking block",id:"booking-block",level:2}];function h(e){const o={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"b",children:"B"})}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/concepts/glossary/A",children:"A"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/B",children:"B"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/C",children:"C"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/D",children:"D"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/E",children:"E"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/F",children:"F"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/G",children:"G"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/H",children:"H"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/I",children:"I"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/J",children:"J"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/K",children:"K"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/L",children:"L"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/M",children:"M"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/N",children:"N"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/O",children:"O"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/P",children:"P"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/Q",children:"Q"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/R",children:"R"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/S",children:"S"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/T",children:"T"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/U",children:"U"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/V",children:"V"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/W",children:"W"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/X",children:"X"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/Y",children:"Y"})," ",(0,s.jsx)(o.a,{href:"/concepts/glossary/Z",children:"Z"})]}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsx)(o.h2,{id:"blake2b",children:"Blake2b"}),"\n",(0,s.jsxs)(o.p,{children:["A function used within the Casper platform to create cryptographic ",(0,s.jsx)(o.a,{href:"/concepts/glossary/H#hash",children:"hashes"}),". More information can be found ",(0,s.jsx)(o.a,{href:"https://www.blake2.net/",children:"here"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"block",children:"Block"}),"\n",(0,s.jsx)(o.p,{children:"Used in two contexts:"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:"A data structure containing a collection of transactions. Blocks form the primary structure of the blockchain."}),"\n",(0,s.jsx)(o.li,{children:"A message that is exchanged between nodes containing the data structure as explained in (1)."}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Each block has a globally unique ID, achieved by hashing the contents of the block."}),"\n",(0,s.jsx)(o.p,{children:"Each block points to its parent. An exception is the first block, which has no parent."}),"\n",(0,s.jsx)(o.h2,{id:"block-creation",children:"Block creation"}),"\n",(0,s.jsxs)(o.p,{children:["Block creation means computing the transaction results and collecting the results into a block. We follow a process called ",(0,s.jsx)(o.em,{children:"execution after consensus"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.a,{href:"/concepts/glossary/B#block-proposal",children:"block proposal"})," happens first, and the proposed ",(0,s.jsx)(o.a,{href:"/concepts/glossary/P#proto-block",children:"proto block"})," contains a set of transactions that have not been executed yet."]}),"\n",(0,s.jsxs)(o.p,{children:["Only after consensus on a ",(0,s.jsx)(o.em,{children:"proto block"})," has been reached, the transactions are executed. The resulting new global state ",(0,s.jsx)(o.a,{href:"/concepts/glossary/R#root-hash",children:"root hash"})," is put into an actual block, together with the executed transactions."]}),"\n",(0,s.jsx)(o.p,{children:"Note that only validators can create valid blocks."}),"\n",(0,s.jsx)(o.h2,{id:"block-finality",children:"Block finality"}),"\n",(0,s.jsx)(o.p,{children:'A block is "finalized" if validators with more than two-thirds of the total network weight agree on adding it to the blockchain.'}),"\n",(0,s.jsxs)(o.p,{children:["For an observer to see a conflicting block as finalized, several validators whose total weight exceeds one-third of the total network weight would have to collude and show different information in a way that would ultimately be detected and punished (see ",(0,s.jsx)(o.a,{href:"/concepts/glossary/E#eviction",children:"eviction"}),")."]}),"\n",(0,s.jsx)(o.h2,{id:"block-gossiping",children:"Block gossiping"}),"\n",(0,s.jsxs)(o.p,{children:["Block gossiping occurs when a message containing a block is sent to one or more nodes on the network. In other words, block gossiping is sending a block validated by the current node but created by another node. The terms ",(0,s.jsx)(o.em,{children:"block gossiping"})," and ",(0,s.jsx)(o.a,{href:"#block-passing",children:"block passing"})," are interchangeable."]}),"\n",(0,s.jsx)(o.h2,{id:"block-height",children:"Block height"}),"\n",(0,s.jsx)(o.p,{children:"Block height is an identifier for a given block based on the number of blocks completed prior to that block."}),"\n",(0,s.jsx)(o.h2,{id:"block-passing",children:"Block passing"}),"\n",(0,s.jsxs)(o.p,{children:["See ",(0,s.jsx)(o.a,{href:"#block-gossiping",children:"block gossiping"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"block-processing",children:"Block processing"}),"\n",(0,s.jsxs)(o.p,{children:["Block processing consists of running the transactions in a block received from another node to determine updates to the global state. Note that this is an essential part of ",(0,s.jsx)(o.a,{href:"#block-validation",children:"validating blocks"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"block-proposal",children:"Block proposal"}),"\n",(0,s.jsx)(o.p,{children:"Sending a (newly) created block to the other nodes on the network for potential inclusion in the blockchain. Note that this term applies to NEW blocks only."}),"\n",(0,s.jsx)(o.h2,{id:"block-validation",children:"Block validation"}),"\n",(0,s.jsx)(o.p,{children:"The process of determining the validity of a block obtained from another node on the network."}),"\n",(0,s.jsx)(o.h2,{id:"blockchain",children:"Blockchain"}),"\n",(0,s.jsxs)(o.p,{children:["Blockchain is a P2P network where the collection of nodes (",(0,s.jsx)(o.a,{href:"/concepts/glossary/V#validator",children:"validators"}),") concurrently updates a decentralized, shared database. They do this collectively, building an ever-growing chain of ",(0,s.jsx)(o.a,{href:"/concepts/glossary/T#transaction",children:"transactions"}),". For performance reasons, transactions are bundled in ",(0,s.jsx)(o.a,{href:"#block",children:"blocks"}),". According to a particular cooperation protocol (consensus protocol), the collection of ",(0,s.jsx)(o.a,{href:"/concepts/glossary/N#node",children:"nodes"})," connected via a P2P network cooperate to maintain this shared database as a single source of truth. The database's current state is called the ",(0,s.jsx)(o.a,{href:"/concepts/glossary/G#global-state",children:"global state"})," and has a sizeable map-like collection."]}),"\n",(0,s.jsx)(o.h2,{id:"block-store",children:"Block store"}),"\n",(0,s.jsx)(o.p,{children:"The layer of the node software responsible for storing blocks. This layer is persisted and can be used to allow a node to recover its state after a crash."}),"\n",(0,s.jsx)(o.h2,{id:"bond",children:"Bond"}),"\n",(0,s.jsxs)(o.p,{children:["The amount of money (in crypto-currency) that is allocated by a node in order to participate in ",(0,s.jsx)(o.a,{href:"/concepts/glossary/C#consensus",children:"consensus"})," (and to be a ",(0,s.jsx)(o.a,{href:"/concepts/glossary/V#validator",children:"validator"}),")."]}),"\n",(0,s.jsx)(o.h2,{id:"bonding",children:"Bonding"}),"\n",(0,s.jsxs)(o.p,{children:["Depositing money in the ",(0,s.jsx)(o.a,{href:"/concepts/glossary/A#auction-contract",children:"auction contract"})," and try to become a ",(0,s.jsx)(o.a,{href:"/concepts/glossary/S#staker",children:"staker"}),". The bonding request is a transaction that transfers tokens to the auction contract. In the next ",(0,s.jsx)(o.a,{href:"#booking-block",children:"booking block"}),", a new set of validators is determined, with weights according to their deposits. This new set becomes active in the era(s) using that booking block."]}),"\n",(0,s.jsx)(o.h2,{id:"booking-block",children:"Booking block"}),"\n",(0,s.jsxs)(o.p,{children:["The booking block for an era is the block that determines the era's validator set. In it, the ",(0,s.jsx)(o.a,{href:"/concepts/glossary/A#auction-contract",children:"auction contract"})," selects the highest bidders to be the future era's validators. There is a configurable delay, the ",(0,s.jsx)(o.em,{children:"auction_delay"}),", which is the number of eras between the booking block and the era to which it applies. The booking block is always a switch block, so the booking block for era ",(0,s.jsx)(o.em,{children:"N + auction_delay + 1"})," is the last block of era ",(0,s.jsx)(o.em,{children:"N"}),"."]})]})}function d(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>l});var s=n(96540);const c={},t=s.createContext(c);function a(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);