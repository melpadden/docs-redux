"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[27927],{47994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(74848),a=t(28453);const o={title:"dApps"},i="Introduction to dApps",r={id:"concepts/intro-to-dapps",title:"dApps",description:"What is a dApp?",source:"@site/docs/concepts/intro-to-dapps.md",sourceDirName:"concepts",slug:"/concepts/intro-to-dapps",permalink:"/docs-redux/concepts/intro-to-dapps",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"sczembor",lastUpdatedAt:1724329928e3,frontMatter:{title:"dApps"},sidebar:"concepts",previous:{title:"Type Serialization",permalink:"/docs-redux/concepts/serialization/types"},next:{title:"Addressable Entities",permalink:"/docs-redux/concepts/addressable-entity"}},c={},d=[{value:"What is a dApp?",id:"what-is-a-dapp",level:3},{value:"Interacting with a Casper Decentralized Network",id:"interacting-with-a-casper-decentralized-network",level:3},{value:"Updating data in a Casper dApp",id:"updating-data-in-a-casper-dapp",level:4},{value:"Post-Consensus Execution in a Casper network",id:"post-consensus-execution-in-a-casper-network",level:4},{value:"Transaction lifecycle",id:"transaction-lifecycle",level:4},{value:"Related reading",id:"related-reading",level:3}];function l(e){const n={a:"a",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"introduction-to-dapps",children:"Introduction to dApps"})}),"\n",(0,s.jsx)(n.h3,{id:"what-is-a-dapp",children:"What is a dApp?"}),"\n",(0,s.jsxs)(n.p,{children:["DApp stands for ",(0,s.jsx)(n.strong,{children:"Decentralized Application"}),". Specifically, it refers to an application built on a blockchain network which combines smart contracts and a user interface."]}),"\n",(0,s.jsx)(n.p,{children:"A decentralized network consists of a group of interchangeable machines (nodes) that can perform as a full system or distributed database. Additional machines strengthen the overall system by adding redundancy and computational power."}),"\n",(0,s.jsxs)(n.p,{children:["A dApp is not just a client-server application where the application can do some work offline, nor is it a web application which can operate in a disconnected mode. A dApp is conceived and built using a distributed architecture where a network of ",(0,s.jsx)(n.a,{href:"/docs-redux/concepts/glossary/N#node",children:"nodes"})," does the processing of smart contracts instead of a single central server."]}),"\n",(0,s.jsxs)(n.p,{children:["Any dApp will need access to a decentralized network, in one form or another. In a Casper network, this means connecting to a ",(0,s.jsx)(n.a,{href:"/docs-redux/concepts/glossary/N#node",children:"node"}),". The decentralized nature of the network means that node is fundamentally interchangeable for this purpose. If the connected node fails, the dApp can switch to a different node and continue operating without losing data or functionality."]}),"\n",(0,s.jsx)(n.h3,{id:"interacting-with-a-casper-decentralized-network",children:"Interacting with a Casper Decentralized Network"}),"\n",(0,s.jsxs)(n.p,{children:["For a dApp to integrate with a Casper network, it must be able to send ",(0,s.jsx)(n.a,{href:"/docs-redux/concepts/glossary/T#transaction",children:"transactions"})," via the ",(0,s.jsx)(n.a,{href:"/docs-redux/developers/json-rpc/",children:"JSON-RPC"}),". Business logic specific to the dApp can then be executed on chain via the transaction. ",(0,s.jsx)(n.a,{href:"/docs-redux/developers/cli/sending-transactions",children:"Sending a Transaction"})," to a node will result in that node ",(0,s.jsx)(n.a,{href:"/docs-redux/concepts/design/p2p#communications-gossiping",children:"gossiping"})," that transaction to other nodes, assuming that the transaction is valid and accepted. The transaction will then be enqueued for execution."]}),"\n",(0,s.jsxs)(n.p,{children:["A transaction contains ",(0,s.jsx)(n.a,{href:"/docs-redux/concepts/glossary/S#session-code",children:"session code"})," in the form of ",(0,s.jsx)(n.a,{href:"/docs-redux/concepts/glossary/W#webassembly",children:"Wasm"})," to be executed in the context of the sending ",(0,s.jsx)(n.a,{href:"/docs-redux/concepts/glossary/A#account",children:"account entity"}),". Therefore, developers may use any programming language that can compile to Wasm when building a dApp for a Casper network. This session code may consist of Wasm to be executed once, or Wasm which will install contract code to be stored in global state. If the dApp requires periodic execution of the same Wasm, it is more efficient from both a gas and execution perspective to install the Wasm as a contract to be called later. As gas costs operate on a per-byte basis, smart contracts will incur less gas costs over time when compared against executing the same session code repeatedly.\nA dApp may send a transaction simultaneously to each node it is connected to, but can only do so once per node, per transaction."]}),"\n",(0,s.jsx)(n.h4,{id:"updating-data-in-a-casper-dapp",children:"Updating data in a Casper dApp"}),"\n",(0,s.jsxs)(n.p,{children:["Sending a transaction is the only means by which a dApp can change ",(0,s.jsx)(n.a,{href:"/docs-redux/concepts/glossary/G#global-state",children:"global state"}),". All associated changes to global state occur after successful execution of the transaction. In the case of a failed execution, the stack is unwound and any changes to global state as part of executing the transaction are reverted. However, as there is a penalty payment that must be incurred, there is a change in global state through reducing the balance of the sending account. To send a transaction, an account must hold a minimum balance greater than the network's penalty payment. This penalty payment can vary from network to network. On the public Casper Mainnet, the penalty payment is set to 2.5 CSPR."]}),"\n",(0,s.jsx)(n.h4,{id:"post-consensus-execution-in-a-casper-network",children:"Post-Consensus Execution in a Casper network"}),"\n",(0,s.jsxs)(n.p,{children:["Unlike other blockchain networks, a Casper network performs execution ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"after"})})," ",(0,s.jsx)(n.a,{href:"/docs-redux/concepts/glossary/C#consensus",children:"consensus"}),". This means that observing the execution of the transaction is sufficient proof of ",(0,s.jsx)(n.a,{href:"/docs-redux/concepts/glossary/B#block-finality",children:"finality"})," for most cases. For a stronger finality requirement, you can observe the finality signatures for the block that includes the given transaction."]}),"\n",(0,s.jsx)(n.h4,{id:"transaction-lifecycle",children:"Transaction lifecycle"}),"\n",(0,s.jsxs)(n.p,{children:["There is an inherent timing consideration when sending a transaction, from the point where it is sent to when it is executed. The ",(0,s.jsx)(n.a,{href:"/docs-redux/transactions-and-transaction-lifecycle#execution-semantics-phases",children:"Transaction Lifecycle"})," results in a delay longer than would be expected from a centralized application. The transaction must be sent, accepted, gossiped, included in a finalized block and executed. This process varies from network to network. This delay should be taken into consideration when designing dApps for use with a Casper network, as the number of connected peers and the number of transactions currently being sent may cause it to increase."]}),"\n",(0,s.jsx)(n.h3,{id:"related-reading",children:"Related reading"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs-redux/transactions-and-transaction-lifecycle",children:"Transactions and the Transaction lifecycle"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs-redux/concepts/global-state",children:"Global State"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs-redux/concepts/smart-contracts",children:"Smart Contracts"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs-redux/developers/writing-onchain-code/contract-vs-session#what-is-session-code",children:"Session Code"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(96540);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);