"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[12478],{37100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=t(74848),i=t(28453);const a={title:"Transaction Lifecycle",slug:"/transactions-and-transaction-lifecycle"},o="Transactions and the Transaction Lifecycle",c={id:"concepts/transactions-and-transaction-lifecycle",title:"Transaction Lifecycle",description:"Transactions",source:"@site/versioned_docs/version-2.0.0/concepts/transactions-and-transaction-lifecycle.md",sourceDirName:"concepts",slug:"/transactions-and-transaction-lifecycle",permalink:"/2.0.0/transactions-and-transaction-lifecycle",draft:!1,unlisted:!1,tags:[],version:"2.0.0",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{title:"Transaction Lifecycle",slug:"/transactions-and-transaction-lifecycle"},sidebar:"concepts",previous:{title:"Key Types",permalink:"/2.0.0/concepts/key-types"},next:{title:"Global State",permalink:"/2.0.0/concepts/global-state"}},r={},d=[{value:"Transactions",id:"execution-semantics-transactions",level:2},{value:"The Transaction Lifecycle",id:"execution-semantics-phases",level:2},{value:"Transaction Received",id:"transaction-received",level:3},{value:"Transaction Gossiped",id:"transaction-gossiped",level:3},{value:"Block Proposed",id:"block-proposed",level:3},{value:"Block Gossiped",id:"block-gossiped",level:3},{value:"Consensus Reached",id:"consensus-reached",level:3},{value:"Transaction Executed",id:"transaction-executed",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"transactions-and-the-transaction-lifecycle",children:"Transactions and the Transaction Lifecycle"})}),"\n",(0,s.jsx)(n.h2,{id:"execution-semantics-transactions",children:"Transactions"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/2.0.0/concepts/glossary/T#transaction",children:"transaction"})," is a data structure containing Wasm and the requester's signature(s). Additionally, the transaction header contains additional metadata about the transaction itself. A transactions\u2019s structure is as follows:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Transaction Data Structure",src:t(70028).A+"",width:"900",height:"586"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Body: Containing payment code and session code (more details on these below)"}),"\n",(0,s.jsxs)(n.li,{children:["Header: containing\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"/2.0.0/concepts/serialization/types#publickey",children:"Public Key"})," of the account in whose context the transaction will run"]}),"\n",(0,s.jsx)(n.li,{children:"The timestamp of the transaction\u2019s creation"}),"\n",(0,s.jsx)(n.li,{children:"A time-to-live, after which the transaction expires and cannot be included in a block"}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"blake2b256"})," hash of the body"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Transaction hash: the ",(0,s.jsx)(n.code,{children:"blake2b"})," hash of the Header"]}),"\n",(0,s.jsxs)(n.li,{children:["Approvals: the set of signatures which have signed the transaction hash; these are used in the ",(0,s.jsx)(n.a,{href:"/2.0.0/concepts/design/casper-design#accounts-associated-keys-weights",children:"account permissions model"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"execution-semantics-phases",children:"The Transaction Lifecycle"}),"\n",(0,s.jsx)(n.p,{children:"A transaction goes through the following phases on Casper:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Transaction Received"}),"\n",(0,s.jsx)(n.li,{children:"Transaction Gossiped"}),"\n",(0,s.jsx)(n.li,{children:"Block Proposed"}),"\n",(0,s.jsx)(n.li,{children:"Block Gossiped"}),"\n",(0,s.jsx)(n.li,{children:"Consensus Reached"}),"\n",(0,s.jsx)(n.li,{children:"Transaction Executed"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"transaction-received",children:"Transaction Received"}),"\n",(0,s.jsxs)(n.p,{children:["A client sending the transaction will send it to one or more nodes via their JSON RPC servers. The node will ensure that a given transaction matches configuration settings outlined in the network's chainspec. Transaction configuration for the Casper Mainnet can be found ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/dev/resources/production/chainspec.toml#L79",children:"here"}),". Once accepted, the system returns the transaction hash to the client to indicate it has been enqueued for execution. The transaction could expire while waiting to be gossiped; whenever this happens, a ",(0,s.jsx)(n.code,{children:"TransactionExpired"})," event is emitted by the event stream servers of all nodes which have the expired transaction."]}),"\n",(0,s.jsx)(n.h3,{id:"transaction-gossiped",children:"Transaction Gossiped"}),"\n",(0,s.jsxs)(n.p,{children:["After a node accepts a new transaction, it will gossip to all other nodes. A validator node will put the transaction into the block proposer buffer. The validator leader will pick the transaction from the block proposer buffer to create a new proposed block for the chain. This mechanism is efficient and ensures all nodes in the network eventually hold the given transaction. Each node that accepts a gossiped transaction also emits a ",(0,s.jsx)(n.code,{children:"TransactionAccepted"})," event on its event stream server. The transaction may expire while waiting for a node to add it to the block. Whenever this happens, the node emits a ",(0,s.jsx)(n.code,{children:"TransactionExpired"})," event."]}),"\n",(0,s.jsx)(n.h3,{id:"block-proposed",children:"Block Proposed"}),"\n",(0,s.jsx)(n.p,{children:"The validator leader for this round will propose a block that includes as many transactions from the block proposer buffer as can fit in a block."}),"\n",(0,s.jsx)(n.h3,{id:"block-gossiped",children:"Block Gossiped"}),"\n",(0,s.jsx)(n.p,{children:"The proposed block propagates to all other nodes."}),"\n",(0,s.jsx)(n.h3,{id:"consensus-reached",children:"Consensus Reached"}),"\n",(0,s.jsxs)(n.p,{children:["Once the other validators reach consensus that the proposed block is valid, all transactions in the block are executed, and this block becomes the final block added to the chain. Whenever reaching consensus, the event stream server emits a ",(0,s.jsx)(n.code,{children:"BlockAdded"}),". ",(0,s.jsx)(n.code,{children:"FinalitySignature"})," events emit shortly after that. Finality signatures for the new block arrive from the validators."]}),"\n",(0,s.jsx)(n.h3,{id:"transaction-executed",children:"Transaction Executed"}),"\n",(0,s.jsxs)(n.p,{children:["A transaction executes in distinct phases to accommodate flexibly paying for computation. The phases of a transaction are ",(0,s.jsx)(n.em,{children:"payment"}),", ",(0,s.jsx)(n.em,{children:"session"}),", and ",(0,s.jsx)(n.em,{children:"finalization"}),". Payment code executes during the payment phase. If it is successful, the session code executes during the session phase. And, independently of session code execution, the finalization phase does some bookkeeping around the payment. Once the transaction is executed, a ",(0,s.jsx)(n.code,{children:"TransactionProcessed"})," event is emitted by the event stream server."]}),"\n",(0,s.jsx)(n.p,{children:"In the event of execution failure, the sender will be charged the minimum penalty payment - 2.5 CSPR on the Casper Mainnet. This prevents malicious spamming of faulty transactions."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Payment code"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Payment code"})," determines the payment amount for the computation requested and how much the sender is willing to pay. Payment code may include arbitrary logic, providing flexibility in paying for a transaction. For example, the simplest payment code could use the account entity's ",(0,s.jsx)(n.a,{href:"/2.0.0/concepts/design/casper-design#tokens-purses-and-accounts",children:"main purse"}),". In contrast, an enterprise application may require a multi-signature scheme that accesses a corporate purse. To ensure the payment code will pay for its own computation, only entities with a balance in their main purse greater than or equal to ",(0,s.jsx)(n.code,{children:"MAX_PAYMENT_COST"})," may execute transactions. Based on the current conversion rate between gas and motes, we restrict the gas limit of the payment code execution so that the process spends no more than ",(0,s.jsx)(n.code,{children:"MAX_PAYMENT_COST"})," motes (a constant of the system.)\nIf the payment is absent or not enough, then payment execution is not successful. In this case, the effects of the payment code on global state are reverted, and the system covers the cost of the computation with motes taken from the offending entity's main purse."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Session code"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Session code"})," provides the main logic for the transaction. It only executes if the payment code is successful. The gas limit for this computation is determined based on the amount of payment given (after subtracting the cost of the payment code itself)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Specifying payment code and session code"})}),"\n",(0,s.jsx)(n.p,{children:"The user-defined logic of a transaction can be specified in a number of ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a Wasm module in binary format representing valid session code, including logic to be executed in the context of an account entity or to store Wasm in the form of a contract to be executed later. (Note that the named keys from the context of the entity the transaction is running in.)"}),"\n",(0,s.jsxs)(n.li,{children:["a 32-byte identifier representing the ",(0,s.jsx)(n.a,{href:"/2.0.0/concepts/serialization/types#hash-key-serialization-standard-hash-key",children:"hash"})," where a contract is already stored in the global state"]}),"\n",(0,s.jsx)(n.li,{children:"a name corresponding to a named key, where a contract is stored under the key"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Payment and session code can be independently specified, so different methods of specifying them may be used (e.g. payment could be specified by a hash key, while the session is explicitly provided as a Wasm module)."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},70028:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/transaction-structure-658d8000fd6a573bafc1e7b8535b3c07.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);