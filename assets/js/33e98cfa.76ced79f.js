"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[4723],{968:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(4848),r=t(8453);const i={},o="Condor Release Notes for Exchanges",a={id:"resources/condor-for-exchanges",title:"Condor Release Notes for Exchanges",description:"Account/Contract Merge",source:"@site/docs/resources/condor-for-exchanges.md",sourceDirName:"resources",slug:"/resources/condor-for-exchanges",permalink:"/docs-redux/resources/condor-for-exchanges",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Account/Contract Merge",id:"accountcontract-merge",level:2},{value:"Dynamic Pricing",id:"dynamic-pricing",level:2},{value:"Transaction Types",id:"transaction-types",level:2},{value:"Block Restructure",id:"block-restructure",level:2},{value:"Contract Level Events",id:"contract-level-events",level:2},{value:"Zug Consensus Protocol",id:"zug-consensus-protocol",level:2},{value:"Server-Sent Event (SSE) Endpoint Changes",id:"server-sent-event-sse-endpoint-changes",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"condor-release-notes-for-exchanges",children:"Condor Release Notes for Exchanges"}),"\n",(0,s.jsx)(n.h2,{id:"accountcontract-merge",children:"Account/Contract Merge"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Currently, Casper contains separate Accounts and Contracts. These record types are similar, but contain small differences. Condor merges these two into one record called AddressableEntity."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"All existing Account and Contract records will be migrated upon on-chain interaction (i.e., sending of transactions, native transfers)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"All new \u201caccounts\u201d and \u201ccontracts\u201d created on the system will result in an AddressableEntity record being created."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"PublicKeys and AccountHashes for existing Account records remain in place and continue to function with the corresponding AddressableEntity record."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Named keys are now a top-level concern and stored directly in global state."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The outcome and behavior of named keys is the same; this is an implementation detail addressing the scalability issues of the previous design."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Similarly, entry points for smart contracts are now a top level concern, with each entry point being stored directly in global state rather than embedded within an AddressableEntity record.."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Action Items: While the Casper node software handles all on-chain interactions with these new data structures, any off-chain logic that retrieves Account and/or Contract records from the blockchain for any purpose (i.e., processing, storage, indexing, etc) will need to be modified to retrieve and use the AddressableEntity record structure going forward."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"fee-elimination",children:"Fee Elimination"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Condor adds support for configurable fee, refund, and pricing strategies. The current plan is to roll out Condor with \u201cNoFee\u201d mode on. Rather than transferring tokens from a paying purse, they are now placed on hold temporarily."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"There is a configurable interval that determines how long a balance hold remains in effect. The available balance of a purse equals its actual total balance minus all non-expired balance holds on that purse. The held portion of a purse balance is not available to transfer or spend until it is released."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The on-chain logic calculates the correct values for total balance and available balance. Off-chain logic can continue to use the existing query_balance endpoint, which will return the available balance. This is sufficient for the majority of use cases. However, off-chain logic that wants to get the full details including total, available, and all hold records can use the new query_balance_details RPC endpoint."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Action Items: Overall, placing holds rather than taking fees is beneficial to exchanges and other parties who send periodic transactions to the network, as their gas costs return to them over time rather than being spent."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Existing implementations should generally not need to change anything to take advantage of this behavior of the system."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Any advanced platform with automated funding that periodically tops off operating balances with new tokens to replace spent gas would benefit from some consideration of this new behavior."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Advanced platforms seeking optimal scheduling strategies would benefit from retrieving the hold records for their operating purse(s) to calculate projected future available balances and use that to inform the scheduling of automated transaction submissions."})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"dynamic-pricing",children:"Dynamic Pricing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Currently, the gas price on the Casper network is equal to 1, meaning 1 unit of gas costs 1 mote. Condor introduces a configurable gas price multiplier. If turned on, at the end of each era a calculation is run to determine block usage in the current era and adjust the multiplier for the era that is starting."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If overall block use rises above a threshold the gas price goes up by 1, if use falls below a threshold the gas price goes down by 1. If use remains within those thresholds the gas price remains the same."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The gas price will not go up or down by more than 1 in a given era, and will not go above the maximum or below the minimum threshold."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The minimum and maximum gas prices and the go-up and go-down threshold are configurable."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The current gas price is used as a straight multiplier to determine actual gas cost. For instance, an operation with a base cost of 1 CSPR would cost 1 CSPR if the current gas price is 1, but would cost 2 CSPR if the current gas price is 2."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The calculated gas price has been added to the block header to make it easily discoverable (for determining what the current price is), and for posterity (for determining what the gas price was for a given era in the historical context)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Action Items: During times of high network usage, you may find that costs for interacting with the blockchain increase. Plan accordingly for any transactions."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"As a quality of life feature for those operating on a strict budget, transactions have a gas_tolerance field, which allows the sender of a transaction to specify the maximum gas price they are willing to pay for (minimum 1). For instance, if a transaction is sent with gas_tolerance = 2 and the network is currently at gas price 3 or higher, that transaction will not be included in a proposed block. If the calculated gas price later walks down to 2 before the transaction has expired, the transaction will be eligible for inclusion in a proposed block."})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"transaction-types",children:"Transaction Types"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Currently, work to be done on the Casper network is sent using the Deploy structure. With Condor we are transitioning to a Transaction model. There are some structural changes introduced to support more advanced features."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The existing Deploy model is deprecated as of Condor, and support will be removed entirely in a future major release. However, Condor will continue to accept valid Deploys and will attempt to execute them. Most existing deploys that function today will continue to do so. However, deploys that depend on a data type or FFI function that has been altered or removed will fail to execute."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Under the new Transaction model, Condor offers direct support for native / Wasm-less usage of all user-land mint and stake management actions."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Action Items: Existing off-chain systems should determine if their operation continues to work using the legacy Deploy model support."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"In cases where legacy integration remains compatible, upgrading to take advantage of the new Transaction model can be delayed temporarily or indefinitely until the removal of Deploys with a later release."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"In cases where one or more incompatibilities have been introduced, some fix short of a full upgrade to the Transaction model may be possible on a case by case basis, but a forced upgrade may be preferable or even necessary in some cases."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Even off-chain systems that continue to work using legacy support may want to consider upgrading to the new Transaction model to take advantage of efficiencies or new capabilities."})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"block-restructure",children:"Block Restructure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The structure of the Block record is being modified as part of Condor. As all blocks are immutable once added to the chain, previously produced blocks remain in their original format. All new blocks produced after Condor will have the new format. The change in structure can be seen ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/docs/blob/feat-2.0_docs/source/docs/casper/developers/json-rpc/types_chain.md#blockv2-blockv2",children:"here in the upcoming documentation changes"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Action Items: While existing client software (including SDKs) remain able to request and parse historical blocks that use the original Block structure, they must be upgraded to request and parse new blocks if they wish to continue to follow the chain. This is the primary breaking change for most off-chain consumers of the Casper network."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"To continue to service historical/archival usage of old blocks, such software should not code over or remove handling for the original block structure. Instead they should retain that capability and add handling for the new block structure."})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"contract-level-events",children:"Contract Level Events"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Condor adds support for smart contracts to define message topics and emit their own messages which are passed to the event stream for consumption as contract level events. Details on this feature can be found ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/ceps/blob/master/text/0088-contract-level-messages.md",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Action Items: As this is an entirely new feature, existing systems do not have to change anything."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Some existing smart contracts have adopted a convention using one or more dictionaries to approximate contract level events. Such smart contracts cannot directly address spoofing, and repudiation protection requires off-chain support. Thus, they should consider making the necessary changes to their logic to take advantage of the built in and safe support offered in Condor."})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"zug-consensus-protocol",children:"Zug Consensus Protocol"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The Zug Consensus Protocol will replace Highway on the Casper network alongside the Condor release. Other instances of a Casper network (private/hybrid networks) may choose to use either Highway or Zug."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Information on Zug\u2019s implementation can be found ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/docs/blob/feat-2.0_docs/source/docs/casper/concepts/design/zug.md",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A more in-depth view of Zug and the theory behind it can be found ",(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/2205.06314",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Action Items: None."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"server-sent-event-sse-endpoint-changes",children:"Server-Sent Event (SSE) Endpoint Changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Due to the previously mentioned structural changes to certain record kinds, most notably the Block record structure and the transition from the Deploy model to the Transaction model, and the addition of contract level events in the form of Messages, there are breaking changes to the contents of the event stream."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The changes are minor schematic changes and rather obvious; for instance instead of a DeployProcessed event there is a TransactionProcessed event, instead of a DeployExpired event there is a TransactionExpired event, and so on."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The overall verbs and their behavioral semantics remain the same (BlockAdded, ~Accepted, ~Processed, ~Expired, etc)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Action Items: Existing software (including SDKs) that deserializes the JSON produced by the SSE event stream will require updating to continue to follow the event stream post-Condor. Software that does not follow the event stream is unaffected."})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);