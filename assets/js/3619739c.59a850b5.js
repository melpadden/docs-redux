"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[10124],{97409:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=i(74848),t=i(28453);const a={title:"Runtime",slug:"/runtime"},o="Runtime Economics",r={id:"concepts/economics/runtime",title:"Runtime",description:"The economics of the runtime layer should incentivize efficient allocation of computational resources, primarily CPU time, to users. The Condor release has introduced several new economic features:",source:"@site/docs/concepts/economics/runtime.md",sourceDirName:"concepts/economics",slug:"/runtime",permalink:"/runtime",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724327789e3,frontMatter:{title:"Runtime",slug:"/runtime"},sidebar:"concepts",previous:{title:"Consensus",permalink:"/concepts/economics/consensus"},next:{title:"Gas Cost",permalink:"/concepts/economics/gas-concepts"}},c={},l=[{value:"Gas Allocation",id:"gas-allocation",level:2},{value:"Consensus before execution &amp; basics of payment",id:"consensus-before-execution-basics-of-payment",level:3},{value:"Costs and limits",id:"costs-and-limits",level:3},{value:"Lanes and gas costs",id:"lanes",level:3},{value:"Dynamic Gas Pricing",id:"dynamic-gas-pricing",level:2},{value:"Eliminating Gas Fees",id:"gas-fees",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"runtime-economics",children:"Runtime Economics"})}),"\n",(0,s.jsx)(n.p,{children:"The economics of the runtime layer should incentivize efficient allocation of computational resources, primarily CPU time, to users. The Condor release has introduced several new economic features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A new mode of paying for computation in Mainnet, where tokens previously assessed as fees are now held for a predetermined period. Held tokens become available to users at the expiry of a predetermined time, or on a linear schedule over a specified period. Note: Increasing the duration of holds reduces the long-run equilibrium average available CSPR balance for an attacker. See ",(0,s.jsx)(n.a,{href:"/concepts/economics/fee-elimination",children:"Fee Elimination"})," for more details."]}),"\n",(0,s.jsxs)(n.li,{children:["A form of ",(0,s.jsx)(n.a,{href:"#dynamic-gas-pricing",children:"dynamic pricing"})," that increments or decrements the gas price in motes for a new era depending on blockchain utilization in the previous era."]}),"\n",(0,s.jsxs)(n.li,{children:["Blocks are structured into ",(0,s.jsx)(n.a,{href:"#lanes-lanes",children:"lanes"})," that can only hold a particular number of transactions of specified types."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These economic features are configurable using chainspec parameters."}),"\n",(0,s.jsx)(n.h2,{id:"gas-allocation",children:"Gas Allocation"}),"\n",(0,s.jsxs)(n.p,{children:["Any finite resource on a publicly accessible computer network must be rate-limited, as, otherwise, overuse of this resource is an attack vector -- a minimal requirement for platform security. However, rate-limiting, implemented on our platform as a simple block gas limit with several lanes, leaves the platform with the problem of fairly and efficiently allocating the ",(0,s.jsx)(n.a,{href:"/concepts/economics/gas-concepts",children:"gas"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["We are researching the optimal structure for spot and futures gas markets, and interested readers should consult the relevant ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/ceps",children:"CEPs"}),". In the meantime, this section outlines some basic features of the platform that would underpin any allocation scheme. Currently, gas is allocated according to a first-in, first-out transaction model."]}),"\n",(0,s.jsx)(n.h3,{id:"consensus-before-execution-basics-of-payment",children:"Consensus before execution & basics of payment"}),"\n",(0,s.jsx)(n.p,{children:"The Zug and Highway protocols reach consensus on a block before it is executed, introducing a subtle difference from platforms like Ethereum. In addition, transactions sent to a Casper network can only be selected based on claimed rather than used gas."}),"\n",(0,s.jsx)(n.p,{children:"Additionally, a minimal amount of CSPR must be present in the user account or contract's main purse to cover the payment computation. The community may introduce additional balance checks in the future."}),"\n",(0,s.jsx)(n.h3,{id:"costs-and-limits",children:"Costs and limits"}),"\n",(0,s.jsxs)(n.p,{children:["Gas cost is a measure of the relative time used by different primitive operations of the execution engine, which is also assumed to be additive. By additivity, we mean that the time to execute a program is approximately proportional to the sum of gas expended by the opcodes and functions called within the program. Casper assigns gas costs to primitive execution engine opcodes and specific, more complex ",(0,s.jsx)(n.em,{children:"host-side"})," functions that are callable from within the execution engine context. Gas costs for opcodes and host-side functions are specified in the ",(0,s.jsx)(n.a,{href:"/concepts/glossary/C#chainspec",children:"chainspec"})," and may vary according to arguments. Read more about how Casper measures computational work ",(0,s.jsx)(n.a,{href:"/concepts/design/casper-design#measuring-computational-work-execution-semantics-gas",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"We expect to refine the current gas cost table to more closely reflect time use, with updates introduced in future upgrades."}),"\n",(0,s.jsx)(n.h3,{id:"lanes",children:"Lanes and gas costs"}),"\n",(0,s.jsx)(n.p,{children:"There are several platform parameters that delineate the sets of transactions that may be included in a valid block:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Number of lanes and lane types"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"System interaction lanes for Mint (transfers) and Auction transactions."}),"\n",(0,s.jsx)(n.li,{children:"WASM lanes serving transactions that carry opaque WASM. These lanes come with different slot sizes. Users need to specify a fixed quantity of gas for a transaction."}),"\n",(0,s.jsx)(n.li,{children:"All lanes can contain some finite number of transactions, set separately for each lane."}),"\n",(0,s.jsx)(n.li,{children:"For a call to a smart contract, the gas cost is always the same (given the transaction category), but the amount of CSPR that gets locked depends also on the gas price at the time."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Block gas and size limits"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The block gas limit imposes an absolute ceiling on how much gas can be allocated to the occupied slots."}),"\n",(0,s.jsx)(n.li,{children:"The block size limit imposes an absolute ceiling on the total byte size of included transactions."}),"\n",(0,s.jsx)(n.li,{children:"Individual transaction size limits are also enforced."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These are the lane configuration settings for the Condor release on Mainnet:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:"[transactions.v1]\n# The configuration settings for the lanes of transactions including both native and Wasm based interactions.\n# Currently the node supports two native interactions the mint and auction and have the reserved identifiers of 0 and 1\n# respectively\n# The remaining wasm based lanes specify the range of configuration settings for a given Wasm based transaction\n# within a given lane.\n# The maximum length in bytes of runtime args per V1 transaction.\n# [0] -> Transaction lane label (apart from the reserved native identifiers these are simply labels)\n# Note: For the given mainnet implementation we specially reserve the label 2 for install and upgrades and\n# the lane must be present and defined.\n# Different casper networks may not impose such a restriction.\n# [1] -> Max transaction size in bytes for a given transaction in a certain lane\n# [2] -> Max args length size in bytes for a given transaction in a certain lane\n# [3] -> Transaction gas limit size in bytes for a given transaction in a certain lane\n# [4] -> The maximum number of transactions the lane can contain\nnative_mint_lane = [0, 1024, 1024, 65_000_000_000, 650]\nnative_auction_lane = [1, 2048, 2048, 362_500_000_000, 145]\nwasm_lanes = [[2, 1_048_576, 2048, 1_000_000_000_000, 1], [3, 344_064, 1024, 500_000_000_000, 3], [4, 172_032, 1024, 50_000_000_000, 7], [5, 12_288, 512, 1_500_000_000, 15]]\n"})}),"\n",(0,s.jsx)(n.p,{children:"These are the block gas and size limits for the Condor release on Mainnet:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:"[transactions]\n...\n# Maximum block size in bytes including transactions contained by the block.  0 means unlimited.\nmax_block_size = 5_242_880\n# The upper limit of total gas of all transactions in a block.\nblock_gas_limit = 3_300_000_000_000\n"})}),"\n",(0,s.jsx)(n.h2,{id:"dynamic-gas-pricing",children:"Dynamic Gas Pricing"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/concepts/economics/dynamic-gas-pricing",children:"dynamic gas pricing"})," system assigns the gas price based on block vacancy (or consumption), preventing malicious actors from flooding the network with useless transactions and ensuring network integrity. Dynamic gas pricing acts as a supply and demand-based check on the cost of network usage. If usage is low, the price multiple drifts down over time, incentivizing casual usage. If usage is high, the price multiple climbs up, incentivizing prioritized usage. Dynamic gas pricing also protects against long-range consumption attacks. An attacker attempting to fill blocks to deny usage drives the price up, which requires them to have increasing amounts of tokens available to cover rising gas costs to maintain their attack."]}),"\n",(0,s.jsx)(n.h2,{id:"gas-fees",children:"Eliminating Gas Fees"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/concepts/economics/gas-concepts",children:"Gas"})," and ",(0,s.jsx)(n.a,{href:"/concepts/economics/fee-elimination",children:"Fee Elimination"})," for more details."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(96540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);