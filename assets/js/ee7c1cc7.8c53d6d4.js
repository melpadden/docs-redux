"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[79041],{52306:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=s(74848),o=s(28453);const i={title:"Overview",slug:"/economics"},a="Overview of Casper Economics",r={id:"concepts/economics/index",title:"Overview",description:"Casper's economic activity can be conceptualized as taking place on four distinct layers: consensus, runtime, ecosystem, and the macroeconomy. Each layer, consensus and up, provides a foundation for the activity taking place on the next layer. A trust-less platform requires that proper incentives be provided to participants operating each of these layers to ensure that they work together to unlock the platform's value.",source:"@site/versioned_docs/version-1.5.X/concepts/economics/index.md",sourceDirName:"concepts/economics",slug:"/economics",permalink:"/1.5.X/economics",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{title:"Overview",slug:"/economics"},sidebar:"concepts",previous:{title:"Reading and Writing Data",permalink:"/1.5.X/concepts/design/reading-and-writing-to-the-blockchain"},next:{title:"Consensus",permalink:"/1.5.X/concepts/economics/consensus"}},c={},l=[{value:"Consensus",id:"consensus",level:2},{value:"Agents (consensus layer)",id:"agents-consensus-layer",level:3},{value:"Incentives (consensus layer)",id:"incentives-consensus-layer",level:3},{value:"Runtime",id:"runtime",level:2},{value:"Agents (consensus layer)",id:"agents-consensus-layer-1",level:3},{value:"Incentives (consensus layer)",id:"incentives-consensus-layer-1",level:3},{value:"Ecosystem",id:"ecosystem",level:2},{value:"Macroeconomy",id:"macroeconomy",level:2}];function h(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"overview-of-casper-economics",children:"Overview of Casper Economics"})}),"\n",(0,n.jsx)(t.p,{children:"Casper's economic activity can be conceptualized as taking place on four distinct layers: consensus, runtime, ecosystem, and the macroeconomy. Each layer, consensus and up, provides a foundation for the activity taking place on the next layer. A trust-less platform requires that proper incentives be provided to participants operating each of these layers to ensure that they work together to unlock the platform's value."}),"\n",(0,n.jsxs)(t.p,{children:["We cannot yet provide formal game-theoretic results for our incentive mechanisms, but interested readers can follow our progress with the ",(0,n.jsx)(t.a,{href:"https://github.com/CasperLabs/Casper-economics-paper",children:"Economics of the Casper Blockchain"})," paper, which will be periodically updated to summarize ongoing research."]}),"\n",(0,n.jsx)(t.p,{children:"This section of our online documentation is intended only to familiarize the user with our core economics features rather than describe their precise implementation and user interface. Some of the features may not be currently active."}),"\n",(0,n.jsx)(t.h2,{id:"consensus",children:"Consensus"}),"\n",(0,n.jsxs)(t.p,{children:["The consensus layer of our platform runs on the Highway flavor of CBC-Casper. The distinguishing characteristics of this protocol are its safety and liveness guarantees. Specifically, under the assumptions made in the ",(0,n.jsx)(t.a,{href:"https://github.com/casper-network/highway",children:"Highway protocol paper"}),", blocks in the canonical history cannot be reverted, and new blocks continue to be added to this history indefinitely. The assumptions, however, require that a large portion of validators remain online and honest; this assumed behavior must be incentivized for the platform to remain secure and live."]}),"\n",(0,n.jsx)(t.p,{children:'When discussing consensus, we default to considering it "one era at a time," unless expressly stated otherwise, in keeping with the Highway paper. Recall that each era is, effectively, a separate instance of the protocol.'}),"\n",(0,n.jsx)(t.h3,{id:"agents-consensus-layer",children:"Agents (consensus layer)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Validators"}),' are responsible for maintaining platform security by building an ever-growing chain of finalized blocks, backing this chain\'s security with their stakes. Their importance (often referred to as "weight") both to protocol operation and security is, in fact, equal to their stake, which includes both their own and delegated tokens.']}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Delegators"}),' are users who participate in the platform\'s security by delegating their tokens to validators, which adds to their weight and collecting a part of the rewards proportional to their delegations, net of a cut ("delegation rate") that is collected by the validator.']}),"\n",(0,n.jsx)(t.h3,{id:"incentives-consensus-layer",children:"Incentives (consensus layer)"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"auction"}),' determines the composition of the validator set for each era of the protocol. It is a "first-price" (winning bids become stakes) auction with a fixed number of spots chosen to balance security with performance (generally, the platform will run slower with more validators). Because rewards are proportional to the stake, we expect this competitive mechanism to provide a powerful impetus for staking as many tokens as possible.']}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Rewards"})," (per era) are issued to validators who perform, at their nominal pace, in such a way as to make timely progress on block finalization. These rewards are shared with delegators proportionally to their contributions, net of a cut taken by the validator."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Evictions"})," deactivate validators who fail to participate in an era, disabling their bid and suspending their participation until they signal readiness to resume participation by invoking a particular entry point in the auction contract."]}),"\n",(0,n.jsx)(t.h2,{id:"runtime",children:"Runtime"}),"\n",(0,n.jsxs)(t.p,{children:["The runtime layer encompasses the deployment and execution of smart contracts, session code, and other activity that performs computation on the global state. This suggests potential markets for finite platform resources, such as markets for computing time and storage. Such markets could ensure that resources are allocated to their highest-value uses. Currently, however, we limit ourselves to ",(0,n.jsx)(t.a,{href:"/1.5.X/concepts/design/casper-design#execution-semantics-gas",children:"metering computing time"}),", measured as gas. Gas can be conceptualized as relative time use of different Wasm operations and host-side functions. Use of storage is also presently assigned a gas cost. We do not currently have a pricing mechanism for metered gas, although an outstanding Casper Enhancement Proposal (",(0,n.jsx)(t.a,{href:"https://github.com/casper-network/ceps/pull/22",children:"CEP #22"}),") suggests the implementation of a first-price gas auction similar to Ethereum's. The initial Mainnet deploy selection mechanism is based on FIFO."]}),"\n",(0,n.jsxs)(t.p,{children:["We expect to continue work on runtime resource markets, particularly gas futures (",(0,n.jsx)(t.a,{href:"https://github.com/casper-network/ceps/pull/17",children:"CEP #17"}),")."]}),"\n",(0,n.jsx)(t.h3,{id:"agents-consensus-layer-1",children:"Agents (consensus layer)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Validators"})," again play a vital role in this layer since protocol operation includes construction and validation of new blocks, consisting of deploys that change the global state, which the validators also maintain."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Users"})," execute session and contract code using the platform's computational resources"]}),"\n",(0,n.jsx)(t.h3,{id:"incentives-consensus-layer-1",children:"Incentives (consensus layer)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Transaction fees"}),", or charges for gas use, ensure that the users compensate validators for performing their computations. Transaction fees are awarded to the block creator. Because we expect to launch with FIFO ordering of deploys, it can be assumed that one unit of gas will be priced at one mote until future changes to deploy orders are implemented."]}),"\n",(0,n.jsx)(t.h2,{id:"ecosystem",children:"Ecosystem"}),"\n",(0,n.jsx)(t.p,{children:"The ecosystem layer encompasses dApp design and operation. Casper Labs maintains multiple partnerships with prospective dApp developers, and we anticipate devoting significant resources to research the economics of prospective dApps."}),"\n",(0,n.jsx)(t.h2,{id:"macroeconomy",children:"Macroeconomy"}),"\n",(0,n.jsx)(t.p,{children:'Casper\'s macroeconomics refers to the activity in the cryptocurrency markets, where CSPR can be treated as one crypto-asset among many rather than a computational platform. Our token economics are different from those of "digital gold" tokens like Bitcoin, designed to be scarce. Our tokens are minted from a fixed starting basis, which is accounted for by tokens distributed to genesis validators, employees, community members and held for future distributions. The total supply of tokens grows at a fixed annual percentage rate from this basis.'}),"\n",(0,n.jsx)(t.p,{children:"The inflationary nature of our macroeconomics has two significant advantages over enforced scarcity. Inflation incentivizes token holders to stake or delegate their tokens, a behavior we explicitly support with our delegation feature. Additionally, because Casper is a general-purpose computing platform, it is essential to supply tokens to support actual economic activity on the platform and discourage hoarding tokens in expectation of speculative gain."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(96540);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);