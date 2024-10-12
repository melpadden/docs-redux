"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[53025],{37733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=t(74848),i=t(28453);const o={title:"Highway Consensus"},a="The Highway Consensus Protocol",r={id:"concepts/design/highway",title:"Highway Consensus",description:"What is Consensus?",source:"@site/versioned_docs/version-1.5.X/concepts/design/highway.md",sourceDirName:"concepts/design",slug:"/concepts/design/highway",permalink:"/1.5.X/concepts/design/highway",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{title:"Highway Consensus"},sidebar:"concepts",previous:{title:"Network Communication",permalink:"/1.5.X/concepts/design/p2p"},next:{title:"Reading and Writing Data",permalink:"/1.5.X/concepts/design/reading-and-writing-to-the-blockchain"}},h={},c=[{value:"What is Consensus?",id:"what-is-consensus",level:2},{value:"What is Highway Consensus?",id:"what-is-highway-consensus",level:2},{value:"How does the Casper Mainnet use Highway?",id:"how-does-the-casper-mainnet-use-highway",level:3},{value:"Dynamic Round Length",id:"dynamic-round-length",level:3},{value:"Eras",id:"eras",level:3},{value:"Finality",id:"finality",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"the-highway-consensus-protocol",children:"The Highway Consensus Protocol"})}),"\n",(0,s.jsx)(n.h2,{id:"what-is-consensus",children:"What is Consensus?"}),"\n",(0,s.jsx)(n.p,{children:"Consensus is the backbone of any distributed network. The decentralized nature of a blockchain requires a method through which disparate entities can agree on one immutable truth. This involves determining the validity of transactions, resolving conflicts, and finalizing blocks to be added to the chain by the network. A consensus protocol is a set of mechanisms and rules within the distributed network with which all actors must comply."}),"\n",(0,s.jsx)(n.p,{children:"These rules outline the type of messages sent over the network, when they are sent and how to process them. Within the context of a blockchain, the consensus protocol decides which blocks are added to the chain by the network and the order in which they are added. This determines the state of the distributed ledger and ensures that all nodes agree on that state."}),"\n",(0,s.jsx)(n.p,{children:"The consensus mechanism will determine how a blockchain meets the following requirements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Safety"})," - All honest nodes eventually agree on the final value. The system is setup in a way where no two honest nodes will report two different blocks at the same height of the blockchain."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Liveness"})," - The system continues running and adds new blocks to the chain indefinitely."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"what-is-highway-consensus",children:"What is Highway Consensus?"}),"\n",(0,s.jsxs)(n.p,{children:["Casper networks use a consensus protocol called ",(0,s.jsx)(n.a,{href:"https://arxiv.org/pdf/2101.02159.pdf",children:"Highway"}),", ensuring the Safety and Liveness requirements of these networks. Highway is a Byzantine Fault Tolerant protocol requiring a partially synchronous network."]}),"\n",(0,s.jsx)(n.h3,{id:"how-does-the-casper-mainnet-use-highway",children:"How does the Casper Mainnet use Highway?"}),"\n",(0,s.jsxs)(n.p,{children:["The Casper Mainnet is a ",(0,s.jsx)(n.a,{href:"/1.5.X/concepts/glossary/P#proof-of-stake",children:"Proof-of-Stake"})," network in which the on-chain auction contract determines validators participating in Highway. The protocol uses a decentralized network of ",(0,s.jsx)(n.a,{href:"/1.5.X/concepts/glossary/N#node",children:"nodes"}),", either bonded or unbonded. Nodes actively participating in the consensus process must stake CSPR tokens and are known as ",(0,s.jsx)(n.a,{href:"/1.5.X/concepts/glossary/V#validator",children:"Validator Nodes"}),". The top 100 bidders are selected through the auction contract every era to act as validators in the era after the next (Current Era + 2). Nodes with a greater stake in the network's success have a greater weight in reaching consensus. Highway does not necessitate a Proof-of-Stake method of choosing validators and could theoretically be used alongside a private network with a different model."]}),"\n",(0,s.jsxs)(n.p,{children:["These validators run a Casper network that will continue to function so long as the amount of faulty or dishonest nodes does not exceed one-third of the total number of nodes in the network. Nodes that are not faulty are ",(0,s.jsx)(n.em,{children:"honest"})," nodes. In most cases, the system can assume that more than two-thirds of all nodes will actively collaborate to achieve consensus. Therefore, stronger-than-average finality guarantees occur during periods when all nodes are acting honestly. A block's fault tolerance increases beyond one-third as the protocol continues. If all validators are honest, it approaches 100%."]}),"\n",(0,s.jsx)(n.h3,{id:"dynamic-round-length",children:"Dynamic Round Length"}),"\n",(0,s.jsx)(n.p,{children:"Within the Highway protocol, the length of a round is determined dynamically to ensure a suitable amount of time for nodes to gossip all messages through several round trips with honest validators. This ensures that the system maintains liveness by ensuring that all messages are properly gossiped while maintaining a timely addition of blocks to the chain."}),"\n",(0,s.jsx)(n.h3,{id:"eras",children:"Eras"}),"\n",(0,s.jsxs)(n.p,{children:["The concept of ",(0,s.jsx)(n.em,{children:"eras"})," allows Highway to reduce the overall operational storage requirements of participating nodes while also rotating validators. A new instance of Highway runs every two hours or approximately 220 blocks, depending on current network metrics. This allows for two benefits:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Data Reduction"}),' - Older "metadata" used in finalizing certain blocks is no longer useful and can be removed without compromising the immutability of the data stored on the blockchain.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Banning Equivocators"})," - Dishonest nodes caught equivocating in a previous era are banned from participating in new eras. This allows honest nodes to begin a new era in the ",(0,s.jsx)(n.em,{children:"relaxed mode"}),", no longer needing to send endorsements due to past equivocations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Rotating Validators"})," - Bonded nodes bid on validator spots each era, with the top 100 highest bidders becoming validators for the era after next (",(0,s.jsx)(n.code,{children:"N"}),"+2)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In any given era, node operators will bid to become validators that will participate in the consensus mechanism for the era after next (",(0,s.jsx)(n.code,{children:"N"}),"+2). Each time slot within the era will also determine a lead validator. The lead validator proposes new blocks to be added to the chain, which are then gossiped among the network's nodes. These messages show an implicit preference for the lead validator's block due to the GHOST (Greedy Heaviest Observed Sub-Tree) rule. Once this process reaches critical mass, with a sufficient interconnected pattern of messages, it becomes impossible to switch to another block. The selected block is then considered finalized and added to the chain."]}),"\n",(0,s.jsxs)(n.p,{children:["The final block of an era is a ",(0,s.jsx)(n.em,{children:"switch block"})," and forms the initial state of the next era. A new Highway instance begins with the new era, using information contained within the ",(0,s.jsx)(n.em,{children:"switch block"})," and a new potential set of validators. More details on the auction process to determine an era's validators can be found within the ",(0,s.jsx)(n.a,{href:"/1.5.X/concepts/economics/consensus",children:"Consensus Economics"})," page."]}),"\n",(0,s.jsx)(n.h3,{id:"finality",children:"Finality"}),"\n",(0,s.jsx)(n.p,{children:"Finality occurs when the network can be sure that a block will not be altered, reversed, or canceled after addition to the chain. This occurs via consensus, and as all transactions happen within a block, it allows for confirmation that a transaction cannot be changed. After finality, it would require greater than 1/3 of all validators to double-sign to cause a disparity between nodes. In this event, the network would shut down and require a manual restart."}),"\n",(0,s.jsx)(n.p,{children:"On a Casper network, a transaction finalizes alongside the finalizing of the block in which it is included. Validators that equivocate risk eviction, in which the network removes them from the validator set. Therefore, honest nodes receive rewards for their participation, while equivocating nodes risk loss of revenue for acting maliciously."}),"\n",(0,s.jsxs)(n.p,{children:["Highway's criterion for detecting finality is the presence of a pattern of messages called a ",(0,s.jsx)(n.code,{children:"Summit"}),". It is an improvement over previous CBC Casper finality criteria, which were more difficult to attain and computationally more expensive to detect. Summits preserve the advantage of tunable fault tolerance while being detected in polynomial time."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);