"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[46198],{99009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"users/delegating","title":"Delegating Tokens","description":"A feature of Proof-of-Stake protocols is that token holders can actively participate in the protocol through a mechanism known as delegating or staking with a validator. CSPR holders can stake their tokens with any validator on a Casper network. Alternatively, it is possible to stake tokens via an exchange or custody provider.","source":"@site/versioned_docs/version-2.0.0/users/delegating.md","sourceDirName":"users","slug":"/users/delegating","permalink":"/users/delegating","draft":false,"unlisted":false,"tags":[],"version":"2.0.0","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{},"sidebar":"users","previous":{"title":"Funding Mainnet Accounts","permalink":"/users/funding-from-exchanges"},"next":{"title":"Using CSPR.live","permalink":"/users/csprlive/"}}');var i=n(74848),o=n(28453);const s={},r="Delegating Tokens",l={},d=[{value:"Delegation Cost",id:"delegation-cost",level:2},{value:"Delegation Limits",id:"delegation-limits",level:2},{value:"Selecting a Node for Delegating",id:"selecting-a-node-for-delegating",level:2},{value:"First-time Delegation",id:"first-time-delegation",level:2},{value:"Monitoring Rewards",id:"monitoring-rewards",level:2},{value:"Tutorials",id:"tutorials",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"delegating-tokens",children:"Delegating Tokens"})}),"\n",(0,i.jsxs)(t.p,{children:["A feature of Proof-of-Stake protocols is that token holders can actively participate in the protocol through a mechanism known as ",(0,i.jsx)(t.strong,{children:"delegating"})," or ",(0,i.jsx)(t.strong,{children:"staking"})," with a validator. CSPR holders can stake their tokens with any validator on a Casper network. Alternatively, it is possible to stake tokens via an exchange or custody provider."]}),"\n",(0,i.jsx)(t.p,{children:"Node operators stake their tokens to earn eligibility to propose and approve blocks on the network. They also run and maintain servers connected to the network. If they win a validator slot, they become validators and help enable the Proof-of-Stake aspect of the network, a process different from mining tokens. Validators thus earn rewards for participating and for securing the network."}),"\n",(0,i.jsx)(t.p,{children:"Anyone can participate in the protocol to earn rewards without maintaining a Casper node (a server that stores a copy of the blockchain). One can delegate or allocate CSPR tokens to a chosen validator on the network. Validators retain a percentage of the rewards generated from staked tokens. Participating in the protocol this way, the community can help improve the network's decentralization and security and earn rewards in return. Block explorers connected to the network usually post the base annual reward rate."}),"\n",(0,i.jsx)(t.p,{children:"Casper does not treat validator stake differently than delegator stake for security reasons."}),"\n",(0,i.jsx)(t.h2,{id:"delegation-cost",children:"Delegation Cost"}),"\n",(0,i.jsx)(t.p,{children:"This section provides a detailed explanation of the delegation cost mechanism, how the gas cost relates to delegations, and where to find more details. Please note that the cost amounts are likely to change over time, and you may have to check the latest release details to get the most up-to-date and accurate delegation cost."}),"\n",(0,i.jsxs)(t.p,{children:["The delegation cost is defined in the chainspec.toml file of a Casper network. In this ",(0,i.jsx)(t.a,{href:"https://github.com/casper-network/casper-node/blob/release-2.0.0-rc1/resources/production/chainspec.toml",children:"example chainspec"}),", the delegation is set to cost 2.5 CSPR. However, ",(0,i.jsx)(t.code,{children:"when you perform the delegation, you see that it costs a little more"})," than what is specified in the chainspec. Let's discuss why this happens."]}),"\n",(0,i.jsx)(t.p,{children:"When you delegate, the system automatically charges some gas to set up related data in the global state of the network to track your delegation. This cost is added to the delegation cost defined in the chainspec file. Ensure you have extra CSPR in your account's main purse apart from the amount you are delegating; otherwise, the transaction will fail. For example, if you want to delegate 1000 CSPR, you need to have at least 1003 CSPR in your account's main purse."}),"\n",(0,i.jsxs)(t.p,{children:["For example, the chainspec file in release 2.0.0 contains the following information. Notice the delegation cost specified with ",(0,i.jsx)(t.code,{children:"delegate"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-toml",children:"[system_costs.auction_costs]\n...\ndelegate = 2_500_000_000\nundelegate = 2_500_000_000\n...\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Delegation fees may change over time, so it is essential to stay current. To do so, select the latest release in ",(0,i.jsx)(t.a,{href:"https://github.com/casper-network/casper-node",children:"Github"})," and navigate to the ",(0,i.jsx)(t.code,{children:"resources/production/chainspec.toml"})," file."]}),"\n",(0,i.jsxs)(t.p,{children:["For further questions, please join the ",(0,i.jsx)(t.a,{href:"https://discord.com/invite/casperblockchain",children:"Discord channel"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"delegation-limits",children:"Delegation Limits"}),"\n",(0,i.jsx)(t.p,{children:"The chainspec specifies delegation limits, such as the minimum and maximum amount allowed to be delegated. Also, each validator can have a maximum number of delegators."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-toml",children:"# Minimum allowed delegation amount in motes\nminimum_delegation_amount = 500_000_000_000\n# Maximum allowed delegation amount in motes\nmaximum_delegation_amount = 1_000_000_000_000_000_000\n# The maximum amount of delegators per validator.\nmax_delegators_per_validator = 1200\n"})}),"\n",(0,i.jsx)(t.h2,{id:"selecting-a-node-for-delegating",children:"Selecting a Node for Delegating"}),"\n",(0,i.jsxs)(t.p,{children:["As a prospective delegator, it is essential to select a validating node that you can trust. Block explorers such as ",(0,i.jsx)(t.a,{href:"https://cspr.live",children:"cspr.live"})," provide ",(0,i.jsx)(t.a,{href:"https://cspr.live/validators",children:"validator performance statistics"}),", including a performance score, total stake, number of delegators, and fees. Please do your due diligence before staking tokens with a validator."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Validators",src:n(75911).A+"",width:"2440",height:"1211"})}),"\n",(0,i.jsx)(t.h2,{id:"first-time-delegation",children:"First-time Delegation"}),"\n",(0,i.jsxs)(t.p,{children:["If you perform a delegation for the first time, the system charges some motes to create a purse to hold the delegated tokens. We recommend that you try out delegations on the ",(0,i.jsx)(t.a,{href:"https://testnet.cspr.live/",children:"Casper Testnet"})," before making transactions on the ",(0,i.jsx)(t.a,{href:"https://cspr.live/",children:"Casper Mainnet"}),". This will help you understand the costs involved in delegating tokens."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Example:"})," The system can charge 0.5 CSPR in addition to the base delegation fee of 2.5 CSPR, resulting in a delegation cost of 3 CSPR on ",(0,i.jsx)(t.a,{href:"https://cspr.live/",children:"Mainnet"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"When you set up a delegation transaction, it is essential to have enough funds in your account's main purse. Otherwise, the transaction will fail, and you will lose the delegation cost. For example, if you have 200 CSPR in your purse, delegate at most 197 CSPR and leave at least 3 CSPR for the delegation cost. Another option is to delegate 195 CSPR and leave some additional buffer."}),"\n",(0,i.jsxs)(t.p,{children:["As a result, when performing a ",(0,i.jsx)(t.a,{href:"/developers/cli/delegate",children:"delegation using the command line"}),", we recommend you specify a little more than the base transaction payment to ensure that the transaction will go through without failure."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Figure 2 : On Testnet or Mainnet, the transaction fee for a delegation is a little bit higher than 2.5 CSPR.",src:n(99967).A+"",width:"1256",height:"1266"})}),"\n",(0,i.jsx)(t.p,{align:"center",children:"\n**Figure 2** : On Testnet or Mainnet, the transaction fee for a delegation is a little bit higher than 2.5 CSPR.\n"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Transaction costs depend on each Casper network and the cost tables defined in the chainspec. Most of these examples are from the Casper Mainnet or Testnet."})}),"\n",(0,i.jsx)(t.h2,{id:"monitoring-rewards",children:"Monitoring Rewards"}),"\n",(0,i.jsx)(t.p,{children:"It's recommended that you check in on how your stake is performing from time to time. If the validator you staked with decides to unbond, your stake will also be unbonded and you will not earn rewards. Ensure that the validator you selected performs as per your expectations."}),"\n",(0,i.jsx)(t.p,{children:"Validators have to win a staking auction by competing for a validator slot with prospective and current validators. This process is permissionless, meaning validators can join and leave the auction without restrictions, except for the unbonding wait period, which lasts 14 hours."}),"\n",(0,i.jsx)(t.h2,{id:"tutorials",children:"Tutorials"}),"\n",(0,i.jsx)(t.p,{children:"Navigate to these pages for step-by-step tutorials on delegating and undelegating tokens."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/users/delegate-ui",children:"Delegating tokens using a block explorer"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/users/staking-ledger",children:"Delegating with Ledger devices"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/developers/cli/delegate",children:"Delegating with the Casper client"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/users/undelegate-ui",children:"Undelegating tokens using a block explorer"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},75911:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/1.validators-e03196f06d8422ff744f2796db8db22f.png"},99967:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/economic-delegationDetails-39ff9fadcf1ff742716046d64ef6789e.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(96540);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);