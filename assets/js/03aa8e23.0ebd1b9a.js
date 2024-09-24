"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[93586],{94073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var i=n(74848),s=n(28453);const o={title:"Highway Consensus"},a="The Highway Consensus Protocol",r={id:"concepts/design/highway",title:"Highway Consensus",description:"The Highway consensus protocol was used on the Casper Mainnet until the Zug consensus protocol was introduced in version 2.0 of the Casper node software. Consensus in Casper is described in more detail here. This page describes the Highway consensus protocol at a high level. Private networks can choose between Zug and Highway, depending on their needs.",source:"@site/docs/concepts/design/highway.md",sourceDirName:"concepts/design",slug:"/concepts/design/highway",permalink:"/docs-redux/concepts/design/highway",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1726242038e3,frontMatter:{title:"Highway Consensus"},sidebar:"concepts",previous:{title:"Zug Consensus",permalink:"/docs-redux/concepts/design/zug"},next:{title:"Rewards Design",permalink:"/docs-redux/concepts/design/rewards"}},c={},h=[{value:"Unit Broadcasting",id:"unit-broadcasting",level:2},{value:"Block Finalization",id:"block-finalization",level:2},{value:"Important Links",id:"important-links",level:2}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"the-highway-consensus-protocol",children:"The Highway Consensus Protocol"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://arxiv.org/pdf/2101.02159",children:"Highway"})," consensus protocol was used on the Casper Mainnet until the ",(0,i.jsx)(t.a,{href:"/docs-redux/concepts/design/zug",children:"Zug"})," consensus protocol was introduced in version 2.0 of the Casper node software. Consensus in Casper is described in more detail ",(0,i.jsx)(t.a,{href:"/docs-redux/concepts/design/consensus",children:"here"}),". This page describes the Highway consensus protocol at a high level. Private networks can choose between Zug and Highway, depending on their needs."]}),"\n",(0,i.jsx)(t.h2,{id:"unit-broadcasting",children:"Unit Broadcasting"}),"\n",(0,i.jsx)(t.p,{children:"In Highway, nodes communicate by broadcasting units. A unit is a structure containing the following:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Citations of other units (at most one per node), subject to validity conditions"}),"\n",(0,i.jsx)(t.li,{children:"An optional proposed list of transactions to be included in a block. Note that the list can be empty"}),"\n",(0,i.jsx)(t.li,{children:"The unit's creator and its digital signature"}),"\n",(0,i.jsx)(t.li,{children:"Additional metadata, including a timestamp, sequence number, round length, etc."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'An empty unit still carries an implicit vote. The citations determine which block a unit votes for based on a rule called "the fork choice rule". If there are multiple blocks to vote on and there isn\'t clarity about which block is the latest, the algorithm calculates the latest block based on the citations. The algorithm counts the weight of units from other validators and what they vote on and chooses the latest block on the branch with the most weight. The proposal unit always votes on itself. The protocol implicitly prefers the proposed block due to the GHOST (Greedy Heaviest Observed Sub-Tree) rule. More details are found in the implementation under the fork choice rule. In summary, if there is a fork, every unit votes on some branch of the chain.'}),"\n",(0,i.jsx)(t.p,{children:"Over time, the units form a Directed Acyclic Graph (DAG), where units are the vertices and citations are the edges."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"DAG",src:n(29138).A+"",width:"787",height:"479"})}),"\n",(0,i.jsx)(t.p,{children:"Nodes must cite the latest unit received from every node, including their latest unit. If a validator does not follow the process and thus equivocates, their bid gets deactivated. However, the validator is not slashed. When a node equivocates, it can still send units but may not be a validator."}),"\n",(0,i.jsx)(t.p,{children:"The Highway protocol proceeds in rounds with a minimum round length. Different nodes can use different round lengths, and ratios of round lengths are always powers of 2. Highway is a partially synchronous protocol because it is not bound to a specific time set in advance, and the network can adjust to delays. Thus, the protocol guarantees partially synchronous liveness. Multiple rounds form an era."}),"\n",(0,i.jsx)(t.h2,{id:"block-finalization",children:"Block Finalization"}),"\n",(0,i.jsxs)(t.p,{children:["In each round, the assigned leader proposes a list of transactions to be included in a block. A block is finalized if there is a summit among the cited units. A summit is a structure within the graph characterized by a quorum ",(0,i.jsx)(t.em,{children:"q"}),", a percentage of the participating validator weight, and a level ",(0,i.jsx)(t.em,{children:"k"}),". Level ",(0,i.jsx)(t.em,{children:"k"})," represents the depth in the graph. For a given fault tolerance threshold ",(0,i.jsx)(t.em,{children:"t"})," (FTT), finality is defined as:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Finality Equation",src:n(6840).A+"",width:"474",height:"62"})}),"\n",(0,i.jsxs)(t.p,{children:["If ",(0,i.jsx)(t.em,{children:"q"})," is close to ",(0,i.jsx)(t.em,{children:"n"}),", meaning the whole network participates, a block can be finalized with a high fault tolerance threshold (FTT)."]}),"\n",(0,i.jsxs)(t.p,{children:["The existence of such a summit means that a weight of more than ",(0,i.jsx)(t.em,{children:"t"})," would have to equivocate to finalize a conflicting block. In other words, the FTT is the weight of the nodes that would have to collude to finalize a conflicting block and revert the transactions in that block."]}),"\n",(0,i.jsx)(t.p,{children:"In Mainnet, the FTT was one-third of the validator weight. If over one-third of the validator weight was faulty, those nodes could have prevented block finalization and stalled the network."}),"\n",(0,i.jsx)(t.h2,{id:"important-links",children:"Important Links"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://arxiv.org/pdf/2101.02159.pdf",children:"Highway Whitepaper"})," - Describes the protocol, and the liveness and safety proofs in detail"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs-redux/concepts/design/zug",children:"Zug Consensus"})," - The protocol currently used in Mainnet and Testnet"]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},29138:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/highway-dag-cd0520491022e0a3dfdab640eadc36eb.png"},6840:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/highway-finality-3085c2c54335e90870c04d973492a99d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);