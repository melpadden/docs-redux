"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[87174],{78139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(74848),s=t(28453);const i={},r="Staking",o={id:"concepts/economics/staking",title:"Staking",description:"The Casper Mainnet is a Proof-of-Stake blockchain that allows validators to stake the Casper native token CSPR on the network. Validators receive CSPR as an incentive for maintaining and securing the network. CSPR rewards are distributed as blocks are validated into existence and organized into eras.",source:"@site/docs/concepts/economics/staking.md",sourceDirName:"concepts/economics",slug:"/concepts/economics/staking",permalink:"/concepts/economics/staking",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{},sidebar:"concepts",previous:{title:"Fee Elimination",permalink:"/concepts/economics/fee-elimination"},next:{title:"Glossary",permalink:"/glossary"}},c={},d=[];function l(e){const n={a:"a",h1:"h1",header:"header",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"staking",children:"Staking"})}),"\n",(0,a.jsx)(n.p,{children:"The Casper Mainnet is a Proof-of-Stake blockchain that allows validators to stake the Casper native token CSPR on the network. Validators receive CSPR as an incentive for maintaining and securing the network. CSPR rewards are distributed as blocks are validated into existence and organized into eras."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Consensus mechanism:"})," The Casper Mainnet and Testnet use a Proof-of-Stake consensus mechanism called ",(0,a.jsx)(n.a,{href:"/concepts/design/zug",children:"Zug"}),". Another Casper network can choose between Zug and ",(0,a.jsx)(n.a,{href:"/concepts/design/highway",children:"Highway"})," using the network's chainspec."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Number of validators:"})," The Casper Mainnet supports up to 100 validators on the network. This number was chosen to strike a balance between performance and decentralization. This platform parameter can be increased through upgrades as development continues and performance improves. In addition, validators can stake on the Casper Mainnet through permissionless bonding by participating in an auction for the validator slot."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Permission-less bonding:"})," For validators to begin staking and earning rewards, they must win a staking auction by competing with current and prospective validators to supply one of the forthcoming top stakes for a given era. This process is permissionless, meaning validators can join and leave the auction without restrictions, except for a waiting period to unlock staked tokens."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Unbonding:"})," To detach from the Casper Mainnet, it takes seven eras for both validators and delegators. Neither validators nor delegators receive rewards for the seven eras required for unbonding, as they are not actively contributing to the network's security during that time. However, during the unbonding period, they may receive rewards for participating in past eras. Read about rewards distribution ",(0,a.jsx)(n.a,{href:"/concepts/economics/consensus#distribution",children:"here"}),". The current unbonding period on the Casper Mainnet is 14 hours, based on the chainspec settings."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Eras and block times:"})," An era on the Casper Mainnet is roughly 2 hours long. Casper's Zug consensus allows validators to propose blocks as quickly as network conditions allow. We anticipate block times to last between 8 seconds and 1 minute."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Block rewards:"})," Validators receive ",(0,a.jsx)(n.a,{href:"/concepts/design/rewards",children:"rewards"})," proportional to their weight for securing the network and participating in consensus by producing blocks and generating and distributing finality signatures. Delegators receive a portion of the validator's rewards, proportional to what they delegated, minus the validator's delegation rate. The rewards earned are reduced if a validator is offline or cannot participate."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Reward calculations:"})," Reward calculations depend only on the linear structure of the blockchain and published finality signatures rather than block time or consensus mechanism. Reward calculations assume a known constant token supply inflation with nominal platform operation."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Reward cycle:"})," Rewards are ",(0,a.jsx)(n.a,{href:"/concepts/economics/consensus#distribution",children:"calculated and distributed"})," to validators and delegators at the end of an era for all blocks in that era and several eligible blocks from the previous era. The algorithm looks back into blocks from the previous era to compensate for the delay in creating and distributing finality signatures."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Token supply and inflation:"})," Mainnet launched with ten billion CSPR at genesis. The target annual supply growth rate is 8%."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Annual reward percentage:"})," Validators on the Casper Mainnet earned between 10% and 20% of their staked CSPR in the first year of the Mainnet operation, with regular participation under expected network conditions. The growth of individual stakes depends on the total active stake, as only a fixed number of tokens is created per era."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Slashing:"})," Presently Casper does not slash if a validator equivocates or misbehaves. If a node equivocates, other validators will ignore its messages, and the node will become inactive. The node will terminate once it detects that it has equivocated."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Delegation rate:"})," Validators define a delegation rate that they take in exchange for providing staking services. This rate is a percentage of the rewards that the validator retains for their services."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(96540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);