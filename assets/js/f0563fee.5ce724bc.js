"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[27865],{17606:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(74848),s=t(28453);const i={title:"Transactions"},r="Transactions",o={id:"concepts/transactions",title:"Transactions",description:"Transactions are a new structure that allows users to enact changes in global state on a Casper network. Introduced with the Condor release, Transactions supersede legacy Deploys, allowing for a variety of Wasm-less interactions with the blockchain. These new interactions are more efficient than Deploys and provide a level of convenience that was not previously available.",source:"@site/docs/concepts/transactions.md",sourceDirName:"concepts",slug:"/concepts/transactions",permalink:"/next/concepts/transactions",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1728310023e3,frontMatter:{title:"Transactions"},sidebar:"concepts",previous:{title:"Key Types",permalink:"/next/concepts/key-types"},next:{title:"Transaction Lifecycle",permalink:"/next/transactions-and-transaction-lifecycle"}},l={},c=[{value:"Transaction Types",id:"transaction-types",level:2},{value:"Withdraw Bid",id:"withdraw-bid",level:3},{value:"Add Bid",id:"add-bid",level:3},{value:"Delegate",id:"delegate",level:3},{value:"Undelegate",id:"undelegate",level:3},{value:"Redelegate",id:"redelegate",level:3},{value:"Invocable Entity",id:"invocable-entity",level:3},{value:"Invocable Entity Alias",id:"invocable-entity-alias",level:3},{value:"Package",id:"package",level:3},{value:"Package Name",id:"package-name",level:3},{value:"Session",id:"session",level:3},{value:"Transfer",id:"transfer",level:3}];function d(e){const n={a:"a",b:"b",code:"code",details:"details",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",summary:"summary",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"transactions",children:"Transactions"})}),"\n",(0,a.jsxs)(n.p,{children:["Transactions are ",(0,a.jsx)(n.a,{href:"/next/developers/json-rpc/types_chain#transaction",children:"a new structure"})," that allows users to enact changes in global state on a Casper network. Introduced with the Condor release, Transactions supersede legacy ",(0,a.jsx)(n.a,{href:"/next/concepts/glossary/D#deploy",children:"Deploys"}),", allowing for a variety of Wasm-less interactions with the blockchain. These new interactions are more efficient than Deploys and provide a level of convenience that was not previously available."]}),"\n",(0,a.jsx)(n.p,{children:"The existing Deploy model is deprecated as of Condor, and support will be removed entirely in a future major release. However, Condor will continue to accept valid Deploys and will attempt to execute them. Most existing deploys that function today will continue to do so. However, deploys that depend on a data type or FFI function that has been altered or removed will fail to execute."}),"\n",(0,a.jsx)(n.h2,{id:"transaction-types",children:"Transaction Types"}),"\n",(0,a.jsxs)(n.p,{children:["The following is a list of Transaction types included within the ",(0,a.jsx)(n.a,{href:"https://github.com/casper-ecosystem/casper-client-rs/tree/dev",children:"CLI Casper client"})," ",(0,a.jsx)(n.code,{children:"put-transaction"})," or ",(0,a.jsx)(n.code,{children:"put-txn"})," command."]}),"\n",(0,a.jsx)(n.h3,{id:"withdraw-bid",children:"Withdraw Bid"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"withdraw-bid"})," allows validators to withdraw their auction bid."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:(0,a.jsx)(n.b,{children:"Casper Client Command"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"\ncasper-client put-txn withdraw-bid\n/// The public key of the bidder.\n  --public-key <FORMATTED STRING or PATH>\n/// The amount in motes to be withdrawn.\n  --transaction-amount <INTEGER>\n/// The maximum gas price that the user is willing to pay for this transaction.\n  --gas-price-tolerance <INTEGER>\n/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.\n  <--secret-key <PATH>|--initiator-address <HEX STRING>>\n\n"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"add-bid",children:"Add Bid"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"add-bid"})," allows validators to place an auction bid."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:(0,a.jsx)(n.b,{children:"Casper Client Command"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"\ncasper-client put-txn add-bid\n/// The [delegation rate](../concepts/economics/staking.md#delegation-rate) for delegators staking on to this validator.\n  --delegation-rate <INTEGER>\n/// The public key of the bidder.\n  --public-key <FORMATTED STRING or PATH>\n/// The amount in motes to be bid.\n  --transaction-amount <INTEGER>\n/// The minimum amount of motes that a delegator can stake to this validator.\n  --minimum-delegation-amount <INTEGER>\n/// The maximum amount of motes that a delegator can stake to this validator.\n  --maximum-delegation-amount <INTEGER>\n/// The maximum gas price that the user is willing to pay for this transaction.\n  --gas-price-tolerance <INTEGER>\n/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.\n  <--secret-key <PATH>|--initiator-address <HEX STRING>>\n\n"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"delegate",children:"Delegate"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"delegate"})," allows a user to delegate a stake of CSPR to a validator."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:(0,a.jsx)(n.b,{children:"Casper Client Command"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"\ncasper-client put-txn delegate\n/// The delegator's public key.\n  --delegator <STRING>\n/// The validator's public key.\n  --validator <STRING>\n/// The amount in motes to stake with this validator.\n  --transaction-amount <INTEGER>\n/// The maximum gas price that the user is willing to pay for this transaction.\n  --gas-price-tolerance <INTEGER>\n/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.\n  <--secret-key <PATH>|--initiator-address <HEX STRING>>\n\n"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"undelegate",children:"Undelegate"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"undelegate"})," allows a user to undelegate their previously staked CSPR from a validator."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:(0,a.jsx)(n.b,{children:"Casper Client Command"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"\ncasper-client put-txn undelegate\n/// The delegator's public key.\n  --delegator <STRING>\n/// The validator's public key.\n  --validator <STRING>\n/// The amount in motes to undelegate from this validator.\n  --transaction-amount <INTEGER>\n/// The maximum gas price that the user is willing to pay for this transaction. \n  --gas-price-tolerance <INTEGER>\n/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.\n  <--secret-key <PATH>|--initiator-address <HEX STRING>>\n\n"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"redelegate",children:"Redelegate"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"redelegate"})," allows a user to redelegate their previously staked CSPR to a new validator."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:(0,a.jsx)(n.b,{children:"Casper Client Command"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"\ncasper-client put-txn redelegate\n/// The delegator's public key.\n  --delegator <STRING>\n/// The old validator's public key.\n  --validator <STRING>\n/// The new validator's public key.\n  --new-validator <STRING>\n/// The amount in motes to redelegate from the old validator to the new validator.\n  --transaction-amount <INTEGER>\n/// The maximum gas price that the user is willing to pay for this transaction. \n  --gas-price-tolerance <INTEGER>\n/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.\n  <--secret-key <PATH>|--initiator-address <HEX STRING>>\n\n"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"invocable-entity",children:"Invocable Entity"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"invocable-entity"})," allows a user to invoke an entry point on the given ",(0,a.jsx)(n.a,{href:"/next/concepts/addressable-entity",children:(0,a.jsx)(n.code,{children:"AddressableEntity"})})," directly using an ",(0,a.jsx)(n.a,{href:"/next/concepts/key-types#addressableentity",children:(0,a.jsx)(n.code,{children:"Entity Address"})}),"."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:(0,a.jsx)(n.b,{children:"Casper Client Command"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"\ncasper-client put-txn invocable-entity\n/// The [`entity-hash`](../developers/json-rpc/types_chain.md#addressableentityhash) of the entity to invoke.\n  --entity-address <FORMATTED STRING or PATH>\n/// The entry point on the invocable entity.\n  --session-entry-point <NAME>\n/// The maximum gas price that the user is willing to pay for this transaction.\n  --gas-price-tolerance <INTEGER>\n/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.\n  <--secret-key <PATH>|--initiator-address <HEX STRING>>\n\n"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"invocable-entity-alias",children:"Invocable Entity Alias"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"invocable-entity-alias"})," allows a user to invoke an entry point on the given ",(0,a.jsx)(n.a,{href:"/next/concepts/addressable-entity",children:(0,a.jsx)(n.code,{children:"AddressableEntity"})})," directly using an alias stored in their ",(0,a.jsx)(n.a,{href:"/next/concepts/glossary/N#named-keys",children:(0,a.jsx)(n.code,{children:"named keys"})}),"."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:(0,a.jsx)(n.b,{children:"Casper Client Command"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"\ncasper-client put-txn invocable-entity-alias\n/// The entity alias stored in the calling entity's named keys.\n  --entity-alias <STRING>\n/// The entry point on the invocable entity. \n  --session-entry-point <NAME>\n/// The maximum gas price that the user is willing to pay for this transaction.\n  --gas-price-tolerance <INTEGER>\n/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.\n  <--secret-key <PATH>|--initiator-address <HEX STRING>>\n\n"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"package",children:"Package"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"package"})," allows a user to invoke an entry point on the given contract ",(0,a.jsx)(n.a,{href:"/next/developers/writing-onchain-code/upgrading-contracts#the-contract-package",children:(0,a.jsx)(n.code,{children:"package"})})," using the associated ",(0,a.jsx)(n.a,{href:"/next/concepts/key-types#package",children:(0,a.jsx)(n.code,{children:"package-address"})}),"."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:(0,a.jsx)(n.b,{children:"Casper Client Command"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"\ncasper-client put-txn package\n/// The address of the contract package.\n  --package-address <FORMATTED STRING or PATH>\n/// The entry point to invoke on the package.\n  --session-entry-point <NAME>\n/// The maximum gas price that the user is willing to pay for this transaction.\n  --gas-price-tolerance <INTEGER>\n/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.\n  <--secret-key <PATH>|--initiator-address <HEX STRING>>\n\n"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"package-name",children:"Package Name"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"package-name"})," allows a user to invoke an entry point on the given contract ",(0,a.jsx)(n.a,{href:"/next/developers/writing-onchain-code/upgrading-contracts#the-contract-package",children:(0,a.jsx)(n.code,{children:"package"})})," using an alias stored in their ",(0,a.jsx)(n.a,{href:"/next/concepts/glossary/N#named-keys",children:(0,a.jsx)(n.code,{children:"named keys"})}),"."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:(0,a.jsx)(n.b,{children:"Casper Client Command"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"\ncasper-client put-txn package-name\n/// The package alias stored in the calling entity's named keys.\n  --package-alias <STRING>\n/// The entry point to invoke on the package.\n  --session-entry-point <NAME>\n/// The maximum gas price that the user is willing to pay for this transaction.\n  --gas-price-tolerance <INTEGER>\n/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.\n  <--secret-key <PATH>|--initiator-address <HEX STRING>>\n\n"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"session",children:"Session"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"session"})," allows the user to send Wasm in a manner similar to legacy Deploys, but through the new Transaction structure. The tutorial ",(0,a.jsx)(n.a,{href:"/next/developers/cli/sending-transactions",children:"Sending Transactions"})," covers this in depth."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:(0,a.jsx)(n.b,{children:"Casper Client Command"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"\ncasper-client put-txn session\n/// The local path pointing to Wasm that will be sent to global state.\n  --transaction-path <PATH>\n/// An entry point on a previously installed contract, if applicable.\n  --session-entry-point <NAME>\n/// The category of the Transaction, in decreasing size order.\n  --category <install-upgrade|large|medium|small>\n/// The maximum gas price that the user is willing to pay for this transaction.\n  --gas-price-tolerance <INTEGER>\n/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.\n  <--secret-key <PATH>|--initiator-address <HEX STRING>>\n\n"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"transfer",children:"Transfer"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"transfer"})," allows a user to transfer the designated number of ",(0,a.jsx)(n.a,{href:"/next/concepts/glossary/M#motes",children:"motes"})," to a target address."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:(0,a.jsx)(n.b,{children:"Casper Client Command"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"\ncasper-client put-txn transfer\n/// The recipient of the transfer.\n  --target <FORMATTED STRING>\n/// The amount in motes to be transferred.\n  --transfer-amount <INTEGER>\n/// The maximum gas price that the user is willing to pay for this transaction.\n  --gas-price-tolerance <INTEGER>\n/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.\n  <--secret-key <PATH>|--initiator-address <HEX STRING>>\n\n"})}),"\n  "]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(96540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);