"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[80690],{29010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(74848),i=n(28453);const o={title:"Runtime",slug:"/runtime"},a="Runtime Economics",r={id:"concepts/economics/runtime",title:"Runtime",description:"The economics of the runtime layer should incentivize efficient allocation of computational resources, primarily CPU time, to users. Pending state pruning implementation, disk space use is treated as CPU time usage and charged, irreversibly, per byte written. Currently, gas is allocated according to a first-in, first-out model for deploys, with a fixed price of 1 mote (1/109 part of a CSPR token) per 1 unit of gas.",source:"@site/versioned_docs/version-1.5.X/concepts/economics/runtime.md",sourceDirName:"concepts/economics",slug:"/runtime",permalink:"/docs-redux/1.5.X/runtime",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{title:"Runtime",slug:"/runtime"},sidebar:"concepts",previous:{title:"Consensus",permalink:"/docs-redux/1.5.X/concepts/economics/consensus"},next:{title:"Gas Cost",permalink:"/docs-redux/1.5.X/concepts/economics/gas-concepts"}},c={},l=[{value:"Gas allocation",id:"gas-allocation",level:2},{value:"Consensus before execution &amp; basics of payment",id:"consensus-before-execution--basics-of-payment",level:3},{value:"Costs and limits",id:"costs-and-limits",level:3},{value:"Lanes",id:"lanes",level:3},{value:"Gas fees",id:"gas-fees",level:2},{value:"Fee allocation",id:"fee-allocation",level:3},{value:"Spot pricing",id:"spot-pricing",level:3},{value:"Futures pricing",id:"futures-pricing",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",sup:"sup",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"runtime-economics",children:"Runtime Economics"})}),"\n",(0,s.jsxs)(t.p,{children:["The economics of the runtime layer should incentivize efficient allocation of computational resources, primarily CPU time, to users. Pending state pruning implementation, disk space use is treated as CPU time usage and charged, irreversibly, per byte written. Currently, ",(0,s.jsx)(t.a,{href:"/docs-redux/1.5.X/concepts/economics/gas-concepts",children:"gas"})," is allocated according to a first-in, first-out model for deploys, with a fixed price of 1 mote (1/10",(0,s.jsx)(t.sup,{children:"9"})," part of a CSPR token) per 1 unit of gas."]}),"\n",(0,s.jsx)(t.h2,{id:"gas-allocation",children:"Gas allocation"}),"\n",(0,s.jsxs)(t.p,{children:["Any finite resource on a publicly accessible computer network must be rate-limited, as, otherwise, overuse of this resource is an attack vector -- a minimal requirement for platform security. However, rate-limiting, implemented on our platform as a simple block gas limit with several lanes, leaves the platform with the problem of fairly and efficiently allocating the gas. We are researching the optimal structure for spot and futures gas markets, and interested readers should consult the relevant ",(0,s.jsx)(t.a,{href:"https://github.com/casper-network/ceps",children:"CEPs"}),". In the meantime, this section outlines some basic features of the platform that would underpin any allocation scheme."]}),"\n",(0,s.jsx)(t.h3,{id:"consensus-before-execution--basics-of-payment",children:"Consensus before execution & basics of payment"}),"\n",(0,s.jsxs)(t.p,{children:["The Highway protocol in its Mainnet implementation reaches consensus on a block ",(0,s.jsx)(t.em,{children:"before"})," the block is executed, introducing a subtle difference from platforms like Ethereum. In addition, deploys sent to a Casper network can only be selected based on claimed, rather than used, gas. Consequently, to incentivize user-side optimization and prevent block space exhaustion by poorly optimized deploys, the platform provides no refunds for unused gas."]}),"\n",(0,s.jsx)(t.p,{children:"Additionally, a minimal amount of CSPR must be present in the user account's main purse to ensure that the payment computation is covered. The community may introduce additional balance checks in the future."}),"\n",(0,s.jsx)(t.h3,{id:"costs-and-limits",children:"Costs and limits"}),"\n",(0,s.jsxs)(t.p,{children:["Gas cost is a measure of relative time used by different primitive operations of the execution engine, which is also assumed to be additive. By additivity, we mean that the time to execute a program is approximately proportional to the sum of gas expended by the opcodes and functions called within the program. Casper assigns gas costs to primitive execution engine opcodes and specific more complex ",(0,s.jsx)(t.em,{children:"host-side"})," functions that are callable from within the execution engine context. Gas costs for opcodes and host-side functions are specified in the ",(0,s.jsx)(t.a,{href:"/docs-redux/1.5.X/concepts/glossary/C#chainspec",children:"chainspec"})," and may vary according to arguments."]}),"\n",(0,s.jsx)(t.p,{children:"We expect to refine the current gas cost table to reflect time use more closely, with updates introduced in future upgrades. We also anticipate that, with the introduction of state pruning, storage costs will be calculated separately from computing time."}),"\n",(0,s.jsx)(t.h3,{id:"lanes",children:"Lanes"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/casper-network/casper-node/blob/b94c4f79ac4ca00e996c418dcc3a98607779a193/resources/production/chainspec.toml#L96-L97",children:"block gas limit"})," is split into two lanes, one for native transfers and one for general deploys. The number of transfers, which cost a fixed amount of gas, is governed directly by the ",(0,s.jsx)(t.code,{children:"block_max_transfer_count"})," chainspec parameter, set to 2500 when Mainnet launched."]}),"\n",(0,s.jsx)(t.h2,{id:"gas-fees",children:"Gas fees"}),"\n",(0,s.jsx)(t.p,{children:"Currently, the price of gas is fixed at 1 mote per 1 unit of gas."}),"\n",(0,s.jsx)(t.h3,{id:"fee-allocation",children:"Fee allocation"}),"\n",(0,s.jsx)(t.p,{children:"All fees from a particular block accrue to its proposer, incentivizing non-empty block production and allowing major dApps to execute deploys for free, provided they operate a validator node and are comfortable with the latency introduced by validator scheduling."}),"\n",(0,s.jsx)(t.h3,{id:"spot-pricing",children:"Spot pricing"}),"\n",(0,s.jsxs)(t.p,{children:["Please see ",(0,s.jsx)(t.a,{href:"https://github.com/casper-network/ceps/pull/22",children:"CEP #22"})," for one potential design of a gas spot market."]}),"\n",(0,s.jsx)(t.h3,{id:"futures-pricing",children:"Futures pricing"}),"\n",(0,s.jsxs)(t.p,{children:["Please see ",(0,s.jsx)(t.a,{href:"https://github.com/casper-network/ceps/pull/17",children:"CEP #17"})," for our draft proposal of a gas futures market."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);