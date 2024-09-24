"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[15819],{73177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(74848),i=n(28453);const o={title:"Staking vs. Delegating",slug:"/staking"},r="Staking vs. Delegating {#staking-vs-delegating}",s={id:"concepts/economics/staking/staking",title:"Staking vs. Delegating",description:"staking-vs-delegating}",source:"@site/versioned_docs/version-1.5.X/concepts/economics/staking/staking.md",sourceDirName:"concepts/economics/staking",slug:"/staking",permalink:"/docs-redux/1.5.X/staking",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{title:"Staking vs. Delegating",slug:"/staking"},sidebar:"concepts",previous:{title:"Staking Concepts",permalink:"/docs-redux/1.5.X/concepts/economics/concepts"},next:{title:"Delegation Details",permalink:"/docs-redux/1.5.X/concepts/economics/delegation"}},l={},d=[{value:"Slashing",id:"slashing",level:2},{value:"Delegation Rate",id:"delegation-rate",level:2},{value:"Delegation Fees",id:"delegation-fees",level:2},{value:"Rewards",id:"rewards",level:2},{value:"Selecting a Node for Delegating",id:"selecting-a-node-for-delegating",level:2},{value:"Monitoring Rewards",id:"monitoring-rewards",level:2},{value:"Unbonding Period",id:"unbonding-period",level:2},{value:"Tutorials",id:"tutorials",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"staking-vs-delegating",children:"Staking vs. Delegating"})}),"\n",(0,a.jsxs)(t.p,{children:["A feature of Proof-of-Stake protocols is that token holders can actively participate in the protocol through a mechanism known as ",(0,a.jsx)(t.strong,{children:"staking"})," or ",(0,a.jsx)(t.strong,{children:"delegation"}),". They can stake their tokens with any validator on a Casper network. Alternatively, it is possible to stake tokens via an exchange or custody provider."]}),"\n",(0,a.jsx)(t.p,{children:"Here are a few common topics related to staking, but we also encourage you to do your own research."}),"\n",(0,a.jsx)(t.p,{children:"Node operators stake their tokens to earn eligibility to propose and approve blocks on the network. They also run and maintain servers connected to the network. If they win a validator slot, they become validators and help enable the Proof-of-Stake aspect of the network, a process different from mining tokens. Validators thus earn rewards for participating and for securing the network."}),"\n",(0,a.jsx)(t.p,{children:"Anyone can participate in the protocol to earn rewards without maintaining a Casper node (a server that stores a copy of the blockchain). One can delegate or allocate CSPR tokens to a chosen validator on the network. Validators retain a percentage of the rewards generated from staked tokens. Participating in the protocol this way, the community can help improve the network's decentralization and security and earn rewards in return. Block explorers connected to the network usually post the base annual reward rate."}),"\n",(0,a.jsx)(t.p,{children:"Casper does not treat validator stake differently than delegator stake for security reasons."}),"\n",(0,a.jsx)(t.h2,{id:"slashing",children:"Slashing"}),"\n",(0,a.jsx)(t.p,{children:"Presently Casper does not slash if a validator equivocates or misbehaves. If a node equivocates, other validators will ignore its messages, and the node will become inactive. The node will terminate once it detects that it has equivocated."}),"\n",(0,a.jsx)(t.h2,{id:"delegation-rate",children:"Delegation Rate"}),"\n",(0,a.jsx)(t.p,{children:"Validators define a delegation rate that they take in exchange for providing staking services. This rate is a percentage of the rewards that the validator retains for their services."}),"\n",(0,a.jsx)(t.h2,{id:"delegation-fees",children:"Delegation Fees"}),"\n",(0,a.jsx)(t.p,{children:"It is important to know that the cost of the delegation process is approximately 3 CSPR. Ensure you have extra CSPR in your account's main purse apart from the amount you are delegating; otherwise, the transaction will fail. For example, if you want to delegate 1000 CSPR, you need to have at least 1003 CSPR in your account's main purse."}),"\n",(0,a.jsx)(t.h2,{id:"rewards",children:"Rewards"}),"\n",(0,a.jsx)(t.p,{children:"Validators receive rewards proportional to their stake for securing the network and participating in consensus (by voting and finalizing blocks). Delegators receive a portion of the validator's rewards, proportional to what they delegated, minus the validator's delegation rate. The rewards earned are reduced if a validator is offline or cannot vote on many blocks."}),"\n",(0,a.jsx)(t.p,{children:"There is no precise reward per block. Rewards are split proportionally among stakes within an era and are distributed at the end of each era."}),"\n",(0,a.jsx)(t.h2,{id:"selecting-a-node-for-delegating",children:"Selecting a Node for Delegating"}),"\n",(0,a.jsxs)(t.p,{children:["As a prospective delegator, it is essential to select a validating node that you can trust. Block explorers such as ",(0,a.jsx)(t.a,{href:"https://cspr.live",children:"cspr.live"})," provide ",(0,a.jsx)(t.a,{href:"https://cspr.live/validators",children:"validator performance statistics"}),", including a performance score, total stake, number of delegators, and fees. Please do your due diligence before staking tokens with a validator."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(50078).A+"",width:"2440",height:"1211"})}),"\n",(0,a.jsx)(t.h2,{id:"monitoring-rewards",children:"Monitoring Rewards"}),"\n",(0,a.jsx)(t.p,{children:"It's recommended that you check in on how your stake is performing from time to time. If the validator you staked with decides to unbond, your stake will also be unbonded and you will not earn rewards. Ensure that the validator you selected performs as per your expectations."}),"\n",(0,a.jsx)(t.p,{children:"Validators have to win a staking auction by competing for a validator slot with prospective and current validators. This process is permissionless, meaning validators can join and leave the auction without restrictions, except for the unbonding wait period, which lasts 14 hours."}),"\n",(0,a.jsx)(t.h2,{id:"unbonding-period",children:"Unbonding Period"}),"\n",(0,a.jsx)(t.p,{children:"For security purposes, whenever tokens are un-delegated, the protocol will continue to keep the token locked for 14 hours."}),"\n",(0,a.jsx)(t.h2,{id:"tutorials",children:"Tutorials"}),"\n",(0,a.jsx)(t.p,{children:"Navigate to these pages for step-by-step tutorials on creating an account and delegating and undelegating tokens."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.casperwallet.io/",children:"Creating an account with the Casper Wallet"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs-redux/1.5.X/users/funding-from-exchanges",children:"Funding an account from an exchange"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs-redux/1.5.X/users/delegate-ui",children:"Delegating tokens using a block explorer"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs-redux/1.5.X/users/staking-ledger",children:"Delegating with Ledger devices"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs-redux/1.5.X/developers/cli/delegate",children:"Delegating with the Casper client"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs-redux/1.5.X/users/undelegate-ui",children:"Undelegating tokens using a block explorer"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50078:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/1.validators-e03196f06d8422ff744f2796db8db22f.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var a=n(96540);const i={},o=a.createContext(i);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);