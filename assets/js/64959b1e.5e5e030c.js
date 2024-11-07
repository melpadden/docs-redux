"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[67796],{85:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"concepts/design/casper-design","title":"Network Design","description":"Introduction","source":"@site/docs/concepts/design/casper-design.md","sourceDirName":"concepts/design","slug":"/concepts/design/casper-design","permalink":"/next/concepts/design/casper-design","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{"title":"Network Design"},"sidebar":"concepts","previous":{"title":"Design Overview","permalink":"/next/design"},"next":{"title":"Network Communication","permalink":"/next/concepts/design/p2p"}}');var i=t(74848),a=t(28453);const o={title:"Network Design"},c="Casper Network Design",r={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Execution Semantics",id:"execution-semantics-head",level:2},{value:"Measuring Computational Work",id:"execution-semantics-gas",level:3},{value:"The Casper Network Runtime",id:"execution-semantics-runtime",level:3},{value:"Generating <code>URef</code>s",id:"execution-semantics-urefs",level:4},{value:"Accounts",id:"accounts-head",level:2},{value:"Creating an account",id:"accounts-creating",level:3},{value:"Permissions Model",id:"accounts-permissions",level:3},{value:"Actions and Thresholds",id:"accounts-actions-thresholds",level:4},{value:"Associated Keys and Weights",id:"accounts-associated-keys-weights",level:4},{value:"Key Management Actions",id:"accounts-key-management",level:4},{value:"Account security and recovery using key management",id:"accounts-recovery",level:4},{value:"The Account Context",id:"accounts-context",level:3},{value:"Unforgeable Reference (URef)",id:"uref-head",level:2},{value:"Permissions for <code>URef</code>s",id:"uref-permissions",level:3},{value:"<code>URef</code>s and Purses",id:"urefs-and-purses",level:3},{value:"Block Structure",id:"block-structure-head",level:2},{value:"Data Fields",id:"block-structure-data",level:3},{value:"<code>block_hash</code>",id:"block_hash",level:4},{value:"Header",id:"header",level:4},{value:"Body",id:"body",level:4},{value:"Tokens",id:"tokens-head",level:2},{value:"Token Generation and Distribution",id:"token-generation-and-distribution",level:3},{value:"Divisibility of Tokens",id:"tokens-divisibility",level:3},{value:"Purses and Addressable Entities",id:"tokens-purses-and-accounts",level:3},{value:"The Casper Mint Contract",id:"mint-contract",level:3},{value:"The mint Contract Interface",id:"tokens-mint-interface",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"casper-network-design",children:"Casper Network Design"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["Casper is a Proof-of-Stake blockchain platform with an account-based model that performs execution after ",(0,i.jsx)(n.a,{href:"/next/concepts/glossary/C#consensus",children:"consensus"}),". A Casper network stores data in a structure known as ",(0,i.jsx)(n.a,{href:"/next/concepts/global-state",children:"Global State"}),". Users interact with global state through session code sent in a ",(0,i.jsx)(n.a,{href:"/next/concepts/glossary/T#transaction",children:"transaction"}),". Transactions may contain ",(0,i.jsx)(n.a,{href:"https://webassembly.org/",children:"Wasm"})," to be executed by the network, thus allowing developers to use their preferred programming language rather than a proprietary language."]}),"\n",(0,i.jsxs)(n.p,{children:["A transaction executes in the context of the user's ",(0,i.jsx)(n.a,{href:"#accounts-head",children:"Account"})," but can call stored Wasm that will execute in its own context. User-related information other than an account is stored in global state as an ",(0,i.jsx)(n.a,{href:"#uref-head",children:"Unforgeable Reference"})," or ",(0,i.jsx)(n.code,{children:"URef"}),". After a node accepts a transaction as valid, it places the transaction in a proposed ",(0,i.jsx)(n.a,{href:"#block-structure-head",children:"Block"})," and gossips it among nodes until the network reaches consensus. At this point, the network executes the Wasm included within the transaction."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#execution-semantics-head",children:"Execution Semantics"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#accounts-head",children:"Accounts"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#uref-head",children:"Unforgeable Reference (URef)"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#block-structure-head",children:"Block Structure"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#tokens-head",children:"Tokens"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"execution-semantics-head",children:"Execution Semantics"}),"\n",(0,i.jsx)(n.p,{children:"A Casper network is a decentralized computation platform. This section describes aspects of the Casper computational model."}),"\n",(0,i.jsx)(n.h3,{id:"execution-semantics-gas",children:"Measuring Computational Work"}),"\n",(0,i.jsxs)(n.p,{children:["Computation is done in a ",(0,i.jsx)(n.a,{href:"https://webassembly.org/",children:"WebAssembly (Wasm)"})," interpreter, allowing any programming language which compiles to Wasm to become a smart contract language for the Casper blockchain. Similar to Ethereum, Casper uses ",(0,i.jsx)(n.a,{href:"/next/concepts/economics/gas-concepts",children:(0,i.jsx)(n.code,{children:"Gas"})})," to measure computational work in a way that is consistent from node to node in a Casper network. Each Wasm opcode is assigned a ",(0,i.jsx)(n.code,{children:"Gas"})," cost, and the amount of gas spent is tracked by the runtime with each opcode executed by the interpreter."]}),"\n",(0,i.jsxs)(n.p,{children:["Costs for opcode instructions on the Casper Mainnet network can be found ",(0,i.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/dev/resources/production/chainspec.toml#L115",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["All executions are finite because each has a finite ",(0,i.jsx)(n.em,{children:"gas limit"})," that specifies the maximum amount of gas available to spend before the runtime terminates the computation. The payment executable session determines how to pay for the transaction. The gas limit is set by executing the payment code specified within the transaction."]}),"\n",(0,i.jsxs)(n.p,{children:["Although the network measures costs in ",(0,i.jsx)(n.code,{children:"Gas"}),", payment for computation occurs in ",(0,i.jsx)(n.a,{href:"#tokens-divisibility",children:"motes"}),". Therefore, there is a conversion rate between ",(0,i.jsx)(n.code,{children:"Gas"})," and motes."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Casper networks support configurable fee, refund, and pricing strategies to incentivize the ",(0,i.jsx)(n.a,{href:"/next/runtime#runtime-economics",children:"Casper Runtime Economics"})," by efficiently allocating computational resources. The ",(0,i.jsx)(n.a,{href:"/next/runtime#consensus-before-execution-basics-of-payment",children:"consensus-before-execution model"})," implements the mechanism to encourage optimized gas consumption from users and to prevent the overuse of block space by poorly handled transactions."]})}),"\n",(0,i.jsx)(n.h3,{id:"execution-semantics-runtime",children:"The Casper Network Runtime"}),"\n",(0,i.jsx)(n.p,{children:"A Wasm module is not natively able to create any effects outside of reading or writing from its own linear memory. Wasm modules must import functions from the host environment they are running in to enable other desired effects, such as reading or writing to global state."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Casper Network Runtime",src:t(32942).A+"",width:"1220",height:"604"})}),"\n",(0,i.jsxs)(n.p,{children:["All these features are accessible via functions in the ",(0,i.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/ext_ffi/index.html",children:"Casper External FFI"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"execution-semantics-urefs",children:["Generating ",(0,i.jsx)(n.code,{children:"URef"}),"s"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"URef"}),"s are generated using a ",(0,i.jsx)(n.a,{href:"https://rust-random.github.io/rand/rand_chacha/struct.ChaCha20Rng.html",children:"cryptographically secure random number generator"})," using the ",(0,i.jsx)(n.a,{href:"https://cr.yp.to/chacha.html",children:"ChaCha algorithm"}),". The random number generator is seeded by taking the ",(0,i.jsx)(n.code,{children:"blake2b256"})," hash of the transaction hash concatenated with an index representing the current phase of execution (to prevent collisions between ",(0,i.jsx)(n.code,{children:"URef"}),"s generated in different phases of the same transaction)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Generating URefs",src:t(74753).A+"",width:"1121",height:"289"})}),"\n",(0,i.jsx)(n.h2,{id:"accounts-head",children:"Accounts"}),"\n",(0,i.jsxs)(n.p,{children:["The Casper blockchain uses an on-chain account-based model, uniquely identified by an ",(0,i.jsx)(n.code,{children:"AccountHash"})," derived from a specific ",(0,i.jsx)(n.code,{children:"PublicKey"}),". The ",(0,i.jsx)(n.a,{href:"/next/concepts/global-state#global-state-trie",children:"global state trie store"})," requires all keys to be the same length, so the AccountHash is a 32-byte derivative used to abstract any of the supported public key variants."]}),"\n",(0,i.jsx)(n.p,{children:"The Casper platform supports two types of keys for creating accounts and signing transactions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/next/concepts/accounts-and-keys#eddsa-keys",children:"Ed25519"})," keys, which use the Edwards-curve Digital Signature Algorithm (EdDSA) and are 66 bytes long"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/next/concepts/accounts-and-keys#ecdsa-keys",children:"Secp256k1"})," keys, commonly known as Ethereum keys, which are 68 bytes long"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:['By default, a transactional interaction with the blockchain takes the form of a transaction cryptographically signed by the key-pair corresponding to the PublicKey used to create the account. All user activity on the Casper blockchain (i.e., "transactions") must originate from an account. Each account has its own context where it can locally store information (e.g., references to useful contracts, metrics, and aggregated data from other parts of the blockchain). Each account also has a "main purse" where it can hold Casper tokens (see ',(0,i.jsx)(n.a,{href:"#tokens-purses-and-accounts",children:"Tokens"})," for more information)."]}),"\n",(0,i.jsx)(n.p,{children:"This chapter describes the permission model for accounts and their local storage capabilities and briefly mentions some runtime functions for interacting with accounts."}),"\n",(0,i.jsx)(n.h3,{id:"accounts-creating",children:"Creating an account"}),"\n",(0,i.jsxs)(n.p,{children:["Account creation automatically happens upon transferring tokens to a yet unused ",(0,i.jsx)(n.code,{children:"PublicKey"}),". On account creation, the balance of its main purse is equal to the number of tokens transferred during the creation process. Its action thresholds are equal to 1, and there is one associated key. The associated key is the ",(0,i.jsx)(n.code,{children:"PublicKey"})," used to create the account. In this way, an account is essentially a context object encapsulating the main purse, used to pay for transactions. However, an account may have an additional purse beyond the main purse."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Account Data Structure",src:t(78636).A+"",width:"426",height:"618"})}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.code,{children:"Account"})," contains the following data:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.code,{children:"URef"}),' representing the account\'s "main purse"']}),"\n",(0,i.jsx)(n.li,{children:"A collection of named keys (playing the same role as the named keys in a stored contract)"}),"\n",(0,i.jsxs)(n.li,{children:['A collection of "associated keys" (see ',(0,i.jsx)(n.a,{href:"#accounts-associated-keys-weights",children:"below for more information"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:['"Action thresholds" (see ',(0,i.jsx)(n.a,{href:"#accounts-actions-thresholds",children:"below for more information"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"accounts-permissions",children:"Permissions Model"}),"\n",(0,i.jsx)(n.h4,{id:"accounts-actions-thresholds",children:"Actions and Thresholds"}),"\n",(0,i.jsx)(n.p,{children:"An account can perform two types of actions: sending transactions and managing keys. A transaction is simply executing some code on the blockchain, while key management involves changing the associated keys (which will be described in more detail later). Key management cannot be performed independently, as all effects on the blockchain must come via a transaction; therefore, a key management action implies that a transaction is also taking place."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ActionThresholds"})," contained in the ",(0,i.jsx)(n.code,{children:"Account"})," data structure set a ",(0,i.jsx)(n.code,{children:"Weight"}),", which must be met to perform that action. The next section describes these weight thresholds. Since a key management action requires a transaction, the key management threshold should always be greater than or equal to the transaction threshold."]}),"\n",(0,i.jsx)(n.h4,{id:"accounts-associated-keys-weights",children:"Associated Keys and Weights"}),"\n",(0,i.jsxs)(n.p,{children:["Addressable entities on a Casper network can associate other key pairs through a multiple signature scheme for sending transactions. An addressable entity's ",(0,i.jsx)(n.em,{children:"associated keys"}),' are the set of public keys allowed to provide signatures on transactions for that entity. Each associated key has a weight; these weights combine to meet the action thresholds provided in the previous section. Each transaction must be signed by one or more keys associated with the entity that transaction is for, and the sum of the weights of those keys must be greater than or equal to the transaction threshold weight for that account. We call the keys that have signed a transaction the "authorizing keys". Similarly, if a transaction contains key management actions (detailed below), the sum of the weights of the authorizing keys must be greater than or equal to the key management action threshold of the entity.']}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:'Any key may help authorize any action; there are no "special keys". All keys contribute their weight in exactly the same way.'})}),"\n",(0,i.jsx)(n.h4,{id:"accounts-key-management",children:"Key Management Actions"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.em,{children:"key management action"})," is a change to the account permissions, including:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Adding or removing an associated key"}),"\n",(0,i.jsx)(n.li,{children:"Changing the weight of an associated key"}),"\n",(0,i.jsx)(n.li,{children:"Changing the threshold of any action"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Key management actions have validity rules preventing users from locking themselves out of their accounts. For example, one can set a threshold, at most, the sum of the weights of all associated keys."}),"\n",(0,i.jsx)(n.h4,{id:"accounts-recovery",children:"Account security and recovery using key management"}),"\n",(0,i.jsx)(n.p,{children:"This permissions model's purpose is to keep accounts safe from lost or stolen keys while allowing the usage of modern mobile devices. For example, it may be convenient to sign transactions from a smartphone without worrying about the repercussions of losing the phone. The recommended setup is to have a low-weight key on the phone, enough for the transaction threshold but not enough for key management. If the phone is lost or stolen, a key management action using other associated keys from another device (e.g., a home computer) can be used to remove the lost associated key and add a key that resides on a replacement phone."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:'It is extremely important to ensure there will always be access to a sufficient number of keys to perform the key management action. Otherwise, future recovery will be impossible (Casper currently does not support "inactive recovery").'})}),"\n",(0,i.jsx)(n.h3,{id:"accounts-context",children:"The Account Context"}),"\n",(0,i.jsxs)(n.p,{children:["A transaction is a user request to perform some execution on the blockchain (see ",(0,i.jsx)(n.a,{href:"#execution-semantics-head",children:"Execution Semantics"}),' for more information). It contains "payment code" and "session code", which are references to stored on-chain contracts or Wasm to be executed. For executable Wasm, its execution and the logic therein occur within the context of the entity signing the transaction. This means that the executing Wasm has access to the named keys and main purse of the account entity\'s context.']}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"In the case where there is a reference to stored on-chain Wasm (smart contracts), the execution of the on-chain Wasm will occur in its own separate runtime context. As a result, the stored Wasm will not have access to the named keys or main purse of the calling account entity."})}),"\n",(0,i.jsx)(n.h2,{id:"uref-head",children:"Unforgeable Reference (URef)"}),"\n",(0,i.jsxs)(n.p,{children:["This key type is used for storing any value except ",(0,i.jsx)(n.code,{children:"Account"}),". Additionally, ",(0,i.jsx)(n.code,{children:"URef"}),"s used in Wasm carry permission information to prevent unauthorized usage of the value stored under the key. The runtime tracks this permission information. This means that if malicious Wasm attempts to produce a ",(0,i.jsx)(n.code,{children:"URef"}),' with permissions that the Wasm does not have, the Wasm has attempted to "forge" the unforgeable reference, and the runtime will raise a forged ',(0,i.jsx)(n.code,{children:"URef"})," error. Permissions for a ",(0,i.jsx)(n.code,{children:"URef"})," can be given across contract calls, allowing data stored under a ",(0,i.jsx)(n.code,{children:"URef"})," to be shared in a controlled way. The 32-byte identifier representing the key is generated randomly by the runtime (see ",(0,i.jsx)(n.a,{href:"#execution-semantics-head",children:"Execution Semantics"})," for more information). The serialization for ",(0,i.jsx)(n.code,{children:"Access Rights"})," that define the permissions for ",(0,i.jsx)(n.code,{children:"URefs"})," is detailed in the ",(0,i.jsx)(n.a,{href:"/next/concepts/serialization/primitives#clvalue",children:"CLValues"})," section."]}),"\n",(0,i.jsxs)(n.h3,{id:"uref-permissions",children:["Permissions for ",(0,i.jsx)(n.code,{children:"URef"}),"s"]}),"\n",(0,i.jsxs)(n.p,{children:["In the runtime, a ",(0,i.jsx)(n.code,{children:"URef"})," carries its permissions called ",(0,i.jsx)(n.code,{children:"AccessRights"}),". Additionally, the runtime tracks what ",(0,i.jsx)(n.code,{children:"AccessRights"})," would be valid for each ",(0,i.jsx)(n.code,{children:"URef"})," in each context. The system assumes that a sent ",(0,i.jsx)(n.code,{children:"URef"})," is invalid, regardless of declared ",(0,i.jsx)(n.code,{children:"AccessRights"}),", and will check it against the executing context to determine validity on each usage. Only the host logic can add a ",(0,i.jsx)(n.code,{children:"URef"}),", in the following ways:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['It can exist in a set of "known" ',(0,i.jsx)(n.code,{children:"URef"}),"s"]}),"\n",(0,i.jsxs)(n.li,{children:["It can be freshly created by the runtime via the ",(0,i.jsx)(n.code,{children:"new_uref"})," function"]}),"\n",(0,i.jsxs)(n.li,{children:["For called contracts, the caller can pass it in via the arguments to ",(0,i.jsx)(n.code,{children:"call_contract"})]}),"\n",(0,i.jsxs)(n.li,{children:["It can be returned to the caller from ",(0,i.jsx)(n.code,{children:"call_contract"})," via the ",(0,i.jsx)(n.code,{children:"ret"})," function"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note that only valid ",(0,i.jsx)(n.code,{children:"URef"}),"s may be added to the known ",(0,i.jsx)(n.code,{children:"URef"}),"s or cross-call boundaries; this means the system cannot be tricked into accepting a forged ",(0,i.jsx)(n.code,{children:"URef"})," by getting it through a contract or stashing it in the known ",(0,i.jsx)(n.code,{children:"URef"}),"s."]}),"\n",(0,i.jsxs)(n.p,{children:["The ability to pass ",(0,i.jsx)(n.code,{children:"URef"}),"s between contexts via ",(0,i.jsx)(n.code,{children:"call_contract"})," / ",(0,i.jsx)(n.code,{children:"ret"}),", allows them to share state among a fixed number of parties while keeping it private from all others."]}),"\n",(0,i.jsxs)(n.h3,{id:"urefs-and-purses",children:[(0,i.jsx)(n.code,{children:"URef"}),"s and Purses"]}),"\n",(0,i.jsxs)(n.p,{children:["Purses represent a unique type of ",(0,i.jsx)(n.code,{children:"URef"})," used for accounting measures within a Casper network. ",(0,i.jsx)(n.code,{children:"URef"}),"s exist as a top-level entity, meaning that individual entities do not own \u2018URef\u2019s. As described above, entities possess certain ",(0,i.jsx)(n.code,{children:"Access Rights"}),", allowing them to interact with the given ",(0,i.jsx)(n.code,{children:"URef"}),". While an account entity will possess an associated ",(0,i.jsx)(n.code,{children:"URef"})," representing their main purse, this ",(0,i.jsx)(n.code,{children:"URef"})," exists as a ",(0,i.jsx)(n.a,{href:"/next/concepts/serialization/primitives#clvalue-unit",children:(0,i.jsx)(n.code,{children:"Unit"})})," and corresponds to a ",(0,i.jsx)(n.em,{children:"balance"})," key within the Casper ",(0,i.jsx)(n.em,{children:"mint"}),". The individual balance key within the Casper mint is the account entity's purse, with transfers authorized solely through the associated ",(0,i.jsx)(n.code,{children:"URef"})," and the ",(0,i.jsx)(n.code,{children:"Access Rights"})," granted to it."]}),"\n",(0,i.jsx)(n.p,{children:"Through this logic, the Casper mint holds all motes on the network and transfers between balance keys at the behest of entities as required."}),"\n",(0,i.jsx)(n.h2,{id:"block-structure-head",children:"Block Structure"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.em,{children:"block"})," is the primary data structure by which network nodes communicate information about the state of a Casper network. We briefly describe here the format of this data structure."]}),"\n",(0,i.jsx)(n.h3,{id:"block-structure-data",children:"Data Fields"}),"\n",(0,i.jsx)(n.p,{children:"A block consists of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.code,{children:"block_hash"})]}),"\n",(0,i.jsx)(n.li,{children:"A header"}),"\n",(0,i.jsx)(n.li,{children:"A body"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Each of these fields is detailed in the subsequent sections."}),"\n",(0,i.jsx)(n.h4,{id:"block_hash",children:(0,i.jsx)(n.code,{children:"block_hash"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"block_hash"})," is the ",(0,i.jsx)(n.code,{children:"blake2b256"})," hash of the block header."]}),"\n",(0,i.jsx)(n.h4,{id:"header",children:"Header"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/next/concepts/serialization/structures#block-header",children:"block header"})," contains the following fields:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"parent_hash"})}),"\n",(0,i.jsxs)(n.p,{children:["A list of ",(0,i.jsx)(n.code,{children:"block_hash"}),"es giving the parents of the block."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"state_root_hash"})}),"\n",(0,i.jsx)(n.p,{children:"The global state root hash produced by executing this block's body."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"body_hash"})}),"\n",(0,i.jsx)(n.p,{children:"The hash of the block body."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"random_bit"})}),"\n",(0,i.jsx)(n.p,{children:"A boolean needed for initializing a future era."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"accumulated_seed"})}),"\n",(0,i.jsx)(n.p,{children:"A seed needed for initializing a future era."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"era_end"})}),"\n",(0,i.jsx)(n.p,{children:"Contains equivocation and reward information to be included in the terminal finalized block. It is an optional field."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"timestamp"})}),"\n",(0,i.jsx)(n.p,{children:"The timestamp from when the block was proposed."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"era_id"})}),"\n",(0,i.jsx)(n.p,{children:"Era ID in which this block was created."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"height"})}),"\n",(0,i.jsx)(n.p,{children:"The height of this block, i.e., the number of ancestors."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"protocol_version"})}),"\n",(0,i.jsx)(n.p,{children:"The version of the Casper network when this block was proposed."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"body",children:"Body"}),"\n",(0,i.jsxs)(n.p,{children:["The block body contains an ",(0,i.jsx)(n.strong,{children:"ordered"})," list of transaction hashes. All transactions, including ",(0,i.jsx)(n.code,{children:"mint"}),", ",(0,i.jsx)(n.code,{children:"auction"}),", ",(0,i.jsx)(n.code,{children:"install_upgrade"})," and ",(0,i.jsx)(n.code,{children:"standard"})," transactions, can be broadly categorized as some unit of work that, when executed and committed, affect change to ",(0,i.jsx)(n.a,{href:"/next/concepts/global-state#global-state-intro",children:"Global State"}),". A valid block may contain no transactions."]}),"\n",(0,i.jsx)(n.p,{children:"The block body also contains the public key of the validator that proposed the block."}),"\n",(0,i.jsxs)(n.p,{children:["Refer to the ",(0,i.jsx)(n.a,{href:"/next/concepts/serialization/",children:"Serialization Standard"})," for additional information on how blocks and transactions are serialized."]}),"\n",(0,i.jsx)(n.h2,{id:"tokens-head",children:"Tokens"}),"\n",(0,i.jsxs)(n.p,{children:["Casper is a decentralized Proof-of-Stake blockchain platform that may use either the ",(0,i.jsx)(n.a,{href:"/next/concepts/design/highway",children:"Highway"})," or ",(0,i.jsx)(n.a,{href:"/next/concepts/design/zug",children:"Zug"})," consensus mechanisms. Having a unit of value is required to make this system work because users must pay for computation, and validators must have ",(0,i.jsx)(n.a,{href:"/next/concepts/economics/staking",children:"stake"})," to bond. In the blockchain space, this unit of value is a ",(0,i.jsx)(n.em,{children:"token"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This chapter describes tokens and how one can use them on the Casper platform."}),"\n",(0,i.jsx)(n.h3,{id:"token-generation-and-distribution",children:"Token Generation and Distribution"}),"\n",(0,i.jsxs)(n.p,{children:["A blockchain system generally needs a supply of tokens available to pay for computation and reward validators for processing transactions on the network. The initial supply at the launch of Mainnet was 10 billion CSPR. The current supply is available ",(0,i.jsx)(n.a,{href:"https://api.cspr.live/supply",children:"here"}),". In addition to the initial supply, the system will have a low rate of inflation, the results of which will be paid out to validators in the form of seigniorage."]}),"\n",(0,i.jsx)(n.p,{children:"The number of tokens used to calculate seigniorage is the initial supply of tokens at genesis."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Token Lifecycle",src:t(3749).A+"",width:"1013",height:"656"})}),"\n",(0,i.jsx)(n.h3,{id:"tokens-divisibility",children:"Divisibility of Tokens"}),"\n",(0,i.jsxs)(n.p,{children:["Typically, a ",(0,i.jsx)(n.em,{children:"token"})," is divisible into some number of parts. We call the indivisible units which make up the CSPR token ",(0,i.jsx)(n.em,{children:"motes"}),". Each CSPR is divisible into 10",(0,i.jsx)(n.sup,{children:"9"})," motes. To avoid rounding errors, it is essential to always represent token balances in motes. In comparison, Ether is divisible into 10",(0,i.jsx)(n.sup,{children:"18"})," parts called Wei."]}),"\n",(0,i.jsxs)(n.p,{children:["The concept of ",(0,i.jsx)(n.code,{children:"CSPR"})," is human-readable convenience and does not exist within the actual infrastructure of a Casper network. Instead, all transactions deal solely with ",(0,i.jsx)(n.em,{children:"motes"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"tokens-purses-and-accounts",children:"Purses and Addressable Entities"}),"\n",(0,i.jsxs)(n.p,{children:["All ",(0,i.jsx)(n.a,{href:"/next/concepts/addressable-entity",children:"entities"})," on the Casper system have a purse associated with the Casper system mint, called the ",(0,i.jsx)(n.em,{children:"main purse"}),". However, for security reasons, the ",(0,i.jsx)(n.code,{children:"URef"})," of the main purse is only available to code running in the context of that entity (i.e. only in payment or session code). Therefore, the mint's ",(0,i.jsx)(n.code,{children:"transfer"})," method that accepts ",(0,i.jsx)(n.code,{children:"URef"}),"s is not the most convenient when transferring between account entity main purses. For this reason, Casper supplies a ",(0,i.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/system/fn.transfer_to_account.html",children:"transfer_to_account"})," function, which takes the public key used to derive the identity key of the account entity. This function uses the mint transfer function with the current account entity's main purse as the ",(0,i.jsx)(n.code,{children:"source"})," and the main purse of the account entity at the provided key as the ",(0,i.jsx)(n.code,{children:"target"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"mint-contract",children:"The Casper Mint Contract"}),"\n",(0,i.jsxs)(n.p,{children:["The Casper ",(0,i.jsx)(n.em,{children:"mint"})," is a system contract that manages the balance of ",(0,i.jsx)(n.em,{children:"motes"})," within a Casper network. These motes are used to pay for computation and bonding on the network. The mint system contract holds all motes on a Casper network but maintains an internal ledger of the balances for each entity's ",(0,i.jsx)(n.em,{children:"main purse"}),". Each balance is associated with a ",(0,i.jsx)(n.code,{children:"URef"}),", which is a key to instruct the mint to perform actions on that balance (e.g., transfer motes). Informally, these balances are referred to as ",(0,i.jsx)(n.em,{children:"purses"})," and conceptually represent a container for motes. The ",(0,i.jsx)(n.code,{children:"URef"})," is how a purse is referenced externally, outside the mint."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AccessRights"})," of the URefs permissions model determines what actions can be performed when using a ",(0,i.jsx)(n.code,{children:"URef"})," associated with a purse."]}),"\n",(0,i.jsxs)(n.p,{children:["As all ",(0,i.jsx)(n.code,{children:"URef"}),"s are unforgeable, the only way to interact with a purse is for a ",(0,i.jsx)(n.code,{children:"URef"})," with appropriate ",(0,i.jsx)(n.code,{children:"AccessRights"})," to be validly given to the current context."]}),"\n",(0,i.jsx)(n.p,{children:"The basic global state options map onto more standard monetary operations according to the table below:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Global State"}),(0,i.jsx)(n.th,{children:"Action Monetary Action"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Add"}),(0,i.jsx)(n.td,{children:"Deposit (i.e. transfer to)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Write"}),(0,i.jsx)(n.td,{children:"Withdraw (i.e. transfer from)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Read"}),(0,i.jsx)(n.td,{children:"Balance check"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"tokens-mint-interface",children:"The mint Contract Interface"}),"\n",(0,i.jsx)(n.p,{children:"The mint system contract exposes the following methods:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"transfer(source: URef, target: URef, amount: Motes) -> TransferResult"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"source"})," must have at least ",(0,i.jsx)(n.code,{children:"Write"})," access rights, ",(0,i.jsx)(n.code,{children:"target"})," must have at least ",(0,i.jsx)(n.code,{children:"Add"})," access rights"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TransferResult"})," may be a success acknowledgment or an error in the case of invalid ",(0,i.jsx)(n.code,{children:"source"})," or ",(0,i.jsx)(n.code,{children:"target"})," or insufficient balance in the ",(0,i.jsx)(n.code,{children:"source"})," purse"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mint(amount: Motes) -> MintResult"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MintResult"})," either gives the created ",(0,i.jsx)(n.code,{children:"URef"})," (with full access rights), which now has a balance equal to the given ",(0,i.jsx)(n.code,{children:"amount"}),"; or an error due to the minting of new motes not being allowed"]}),"\n",(0,i.jsxs)(n.li,{children:["In the Casper mint, only the system account can call ",(0,i.jsx)(n.code,{children:"mint"}),", and it has no private key to produce valid cryptographic signatures, which means only the software itself can execute contracts in the context of the system account"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"create() -> URef"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["a convenience function for ",(0,i.jsx)(n.code,{children:"mint(0)"})," which cannot fail because it is always allowed to create an empty purse"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"balance(purse: URef) -> Option<Motes>"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"purse"})," must have at least ",(0,i.jsx)(n.code,{children:"Read"})," access rights"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BalanceResult"})," either returns the number of motes held by the ",(0,i.jsx)(n.code,{children:"purse"}),", or nothing if the ",(0,i.jsx)(n.code,{children:"URef"})," is not valid"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},78636:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/account-structure-89919dedef5e84cf8168afa72b34ed5f.png"},32942:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/casper-runtime-9bc2eb0948168ce8a2eef7f037af6ba4.png"},74753:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/generating-urefs-af02bd8d865f5da9599a205bb682678e.png"},3749:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/token-lifecycle-3b64dfdb785ffc07a0e2df0869520f33.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);