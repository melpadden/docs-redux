"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[72033],{99648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var s=n(74848),i=n(28453);const o={slug:"/concepts/economics/delegation"},a="Delegation Details",c={id:"concepts/economics/staking/delegation",title:"Delegation Details",description:"This section provides a detailed explanation of the delegation cost mechanism, how the gas cost relates with delegations, where to find the details etc. Please note that the cost amounts are likely to change with time and you may have to check the latest release details to get the most up-to-date and accurate details.",source:"@site/versioned_docs/version-1.5.X/concepts/economics/staking/delegation.md",sourceDirName:"concepts/economics/staking",slug:"/concepts/economics/delegation",permalink:"/1.5.X/concepts/economics/delegation",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{slug:"/concepts/economics/delegation"},sidebar:"concepts",previous:{title:"Staking vs. Delegating",permalink:"/1.5.X/staking"},next:{title:"Glossary",permalink:"/1.5.X/glossary"}},l={},r=[{value:"Delegation Cost",id:"delegation-cost",level:2},{value:"First-time Delegation",id:"first-time-delegation",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"delegation-details",children:"Delegation Details"})}),"\n",(0,s.jsx)(t.p,{children:"This section provides a detailed explanation of the delegation cost mechanism, how the gas cost relates with delegations, where to find the details etc. Please note that the cost amounts are likely to change with time and you may have to check the latest release details to get the most up-to-date and accurate details."}),"\n",(0,s.jsx)(t.h2,{id:"delegation-cost",children:"Delegation Cost"}),"\n",(0,s.jsxs)(t.p,{children:["The delegation cost is defined in the ",(0,s.jsx)(t.code,{children:"chainspec.toml"})," file for each Casper network. In this ",(0,s.jsx)(t.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.3.2/resources/production/chainspec.toml",children:"example chainspec"}),", the delegation is set to cost 2.5 CSPR. However, ",(0,s.jsx)(t.code,{children:"when you perform the delegation, you see that it costs a little more"})," than what is specified in the chainspec. Let\u2019s discuss why this happens."]}),"\n",(0,s.jsx)(t.p,{children:"When you delegate, the system automatically charges some gas to set up related data in the global state of the network to track your delegation. This cost is addition to the delegation cost defined in the chainspec file."}),"\n",(0,s.jsx)(t.p,{children:"For example, the chainspec file in release 1.3.2 will contain the following information. This is how the delegation cost is defined in the chainspec.toml file of a Casper network."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Figure 1"}),": Delegation cost is defined in the chainspec.toml file of a Casper network"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Figure 1: Delegation cost is defined in the chainspec.toml file of a Casper network\n",src:n(43511).A+"",width:"543",height:"552"})}),"\n",(0,s.jsxs)(t.p,{children:["Delegation fees may change over time, so, it is essential to stay up to date. To do so, select the latest release in ",(0,s.jsx)(t.a,{href:"https://github.com/casper-network/casper-node",children:"Github"}),", and navigate to the chainspec.toml file."]}),"\n",(0,s.jsxs)(t.p,{children:["If you are unsure about anything, please join the ",(0,s.jsx)(t.a,{href:"https://discord.com/invite/casperblockchain",children:"Discord channel"})," to ask us questions."]}),"\n",(0,s.jsx)(t.h2,{id:"first-time-delegation",children:"First-time Delegation"}),"\n",(0,s.jsx)(t.p,{children:"If you perform the delegation for the first time, the system charges some gas to create a purse to hold the delegated tokens."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Example:"})," The system can charge 0.5 CSPR in addition to the base delegation fee of 2.5 CSPR, resulting in a delegation cost of 3 CSPR on ",(0,s.jsx)(t.a,{href:"https://cspr.live/",children:"Mainnet"})]}),"\n",(0,s.jsx)(t.p,{children:"It is essential to have enough funds in your account's main purse when you set up a delegation transaction. Otherwise, the transaction will fail, and you will lose the transfer cost. For example, if you have 200 CSPR in your purse, delegate at most 197 CSPR and leave at least 3 CSPR for the delegation cost. Another option is to delegate 195 CSPR and leave some additional buffer."}),"\n",(0,s.jsxs)(t.p,{children:["As a result, when performing a ",(0,s.jsx)(t.a,{href:"/1.5.X/developers/cli/delegate",children:"delegation using the command line"}),", we recommend you specify a little more than the base transaction payment to ensure that the transaction will go through without failure."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Figure 2"})," : On Testnet or Mainnet, the transaction fee for a delegation is a little bit higher than 2.5 CSPR\n",(0,s.jsx)(t.img,{alt:"Delegation Details",src:n(33680).A+"",width:"1256",height:"1266"})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"NOTE:"})})}),"\n",(0,s.jsx)(t.p,{children:"Transaction costs depend on each Casper network and the cost tables defined in the chainspec. The examples you will find in the documentation are general."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.p,{children:["Lastly, we recommend that you try out delegations on the ",(0,s.jsx)(t.a,{href:"https://testnet.cspr.live/%3E",children:"Casper Testnet"})," before making actual transactions on the ",(0,s.jsx)(t.a,{href:"https://cspr.live/",children:"Casper Mainnet"}),". This way, you will understand the costs involved in delegating tokens."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},43511:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/economic-delegationCost-d5686179171d910405bd9ba70380ecd7.png"},33680:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/economic-delegationDetails-39ff9fadcf1ff742716046d64ef6789e.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(96540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);