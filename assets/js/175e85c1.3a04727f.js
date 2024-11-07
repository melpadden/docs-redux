"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[80724],{24791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"users/csprlive/delegate-ui","title":"Delegate Tokens","description":"Introduction","source":"@site/versioned_docs/version-2.0.0/users/csprlive/delegate-ui.md","sourceDirName":"users/csprlive","slug":"/users/delegate-ui","permalink":"/users/delegate-ui","draft":false,"unlisted":false,"tags":[],"version":"2.0.0","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{"title":"Delegate Tokens","slug":"/users/delegate-ui"},"sidebar":"users","previous":{"title":"Testnet Funding","permalink":"/users/testnet-faucet"},"next":{"title":"Undelegate Tokens","permalink":"/users/undelegate-ui"}}');var s=n(74848),r=n(28453);const a={title:"Delegate Tokens",slug:"/users/delegate-ui"},o="Delegating Tokens with a Block Explorer",l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Reviewing your Account",id:"account-review",level:3},{value:"Accessing the Delegation Feature",id:"delegation-access",level:2},{value:"Stepping through the Delegation Process",id:"stepping-through-the-delegation-process",level:2},{value:"Video Tutorial",id:"video-tutorial",level:2}];function c(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",iframe:"iframe",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"delegating-tokens-with-a-block-explorer",children:"Delegating Tokens with a Block Explorer"})}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"This tutorial covers how to delegate Casper tokens to a validator on the network."}),"\n",(0,s.jsxs)(t.p,{children:["Casper and other Proof-of-Stake protocols allow token holders to earn rewards and participate in the protocol through a mechanism called ",(0,s.jsx)(t.strong,{children:"delegation"})," or ",(0,s.jsx)(t.strong,{children:"staking"}),". We will use these terms interchangeably in this guide. See the ",(0,s.jsx)(t.a,{href:"/concepts/economics/staking",children:"Staking Key Concepts"})," page for more details about the differences."]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["To stake tokens with a validator, you must create an account with CSPR tokens in its main purse. One option is to use the ",(0,s.jsx)(t.a,{href:"https://www.casperwallet.io/",children:"Casper Wallet"})," by following the ",(0,s.jsx)(t.a,{href:"https://www.casperwallet.io/user-guide/getting-started",children:"Getting Started"})," user guide."]}),"\n",(0,s.jsxs)(t.li,{children:["You need to ",(0,s.jsx)(t.a,{href:"/users/funding-from-exchanges",children:"fund the account's main purse"})," to delegate tokens."]}),"\n",(0,s.jsxs)(t.li,{children:["Connect to a block explorer to set up the delegation. This guide uses ",(0,s.jsx)(t.a,{href:"https://cspr.live/",children:"cspr.live"})," and the Casper Wallet."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#account-review",children:"Review your account"})," before starting the process."]}),"\n",(0,s.jsxs)(t.li,{children:["Review the current ",(0,s.jsx)(t.a,{href:"/users/delegating#delegation-cost",children:"delegation cost"})," and ensure you have extra CSPR in your account's main purse apart from the amount you are delegating. Otherwise, the delegation might fail."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"account-review",children:"Reviewing your Account"}),"\n",(0,s.jsx)(t.p,{children:"Once connected to the Casper blockchain, we recommend reviewing the active account you wish to use for delegating tokens, especially these fields:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Liquid Account Balance"}),", representing the tokens you have for immediate use"]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Delegated Account Balance"}),", representing the delegated tokens already staked with validators on the network"]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Delegations"})," tab, listing the validators to whom you have delegated tokens"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Account and delegations details",src:n(58998).A+"",width:"2420",height:"1456"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Staking Rewards"})," tab, showing the rewards received in each era"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Account and rewards",src:n(81082).A+"",width:"2422",height:"1592"})}),"\n",(0,s.jsx)(t.h2,{id:"delegation-access",children:"Accessing the Delegation Feature"}),"\n",(0,s.jsx)(t.p,{children:"You can access the delegation functionality in two ways."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Option 1:"})," Click ",(0,s.jsx)(t.strong,{children:"Wallet"})," from the top navigation menu and then click ",(0,s.jsx)(t.strong,{children:"Delegate"}),". In the next screen, you will need to specify the validator's public key or search for a validator."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Delegate from the Wallet",src:n(3128).A+"",width:"252",height:"333"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Option 2:"})," Click ",(0,s.jsx)(t.strong,{children:"Validators"})," from the top navigation menu. From the validators table, click on any validator to access their details. Once you find the validator to whom you want to delegate tokens, click the ",(0,s.jsx)(t.strong,{children:"Delegate"})," button. The next screen will have the validator's public key pre-populated."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Delegate from a Validator",src:n(18944).A+"",width:"2304",height:"822"})}),"\n",(0,s.jsx)(t.h2,{id:"stepping-through-the-delegation-process",children:"Stepping through the Delegation Process"}),"\n",(0,s.jsx)(t.p,{children:'The following instructions will take you through the delegation process, starting with the "Delegation details" screen.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 1 - Delegation details"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Specify the validator's public key if you have reached this screen using the Wallet drop-down menu. Otherwise, verify the pre-populated key in the Validator field."}),"\n",(0,s.jsx)(t.li,{children:"Enter the amount of CSPR you wish to delegate. Remember to account for the delegation fee."}),"\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Delegation details",src:n(53204).A+"",width:"1174",height:"1402"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 2 - Confirm the delegation"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Review the delegation details."}),"\n",(0,s.jsxs)(t.li,{children:["If everything is correct, click ",(0,s.jsx)(t.strong,{children:"Confirm and delegate stake"}),". If you wish to make changes, return to the previous screen."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Confirm delegation details",src:n(44383).A+"",width:"1218",height:"1562"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 3 - Sign the delegation"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Sign the delegation by clicking ",(0,s.jsx)(t.strong,{children:"Sign with Casper Wallet"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Sign delegation",src:n(33067).A+"",width:"1198",height:"1754"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["Once the Casper Wallet opens, ",(0,s.jsx)(t.strong,{children:"check the deploy hash"}),'. Ensure the deploy hash in the "Signature Request" window matches the deploy hash in the "Sign delegation" window before continuing.']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Signature Request window",src:n(62228).A+"",width:"2098",height:"1730"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Sign"})," in the Signature Request window to finalize the delegation."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Completed delegation",src:n(87422).A+"",width:"1238",height:"1442"})}),"\n",(0,s.jsxs)(t.p,{children:["The delegation initiates as soon as the corresponding deploy is signed. You can review the details and status of the deploy by clicking the ",(0,s.jsx)(t.strong,{children:"Deploy Details"})," highlighted above."]}),"\n",(0,s.jsxs)(t.p,{children:["Remember to ",(0,s.jsx)(t.a,{href:"/users/delegating#monitoring-rewards",children:"Monitor your Stake"}),". Staking rewards are delivered to your account's main purse after each era, which is currently set to 2 hours. Note that it may take up to 2 eras (4 hours) for the first reward to appear after delegation. The rewards are automatically added to your current stake on the corresponding validator. You may view them under the ",(0,s.jsx)(t.em,{children:"Rewards"})," tab on your account page on ",(0,s.jsx)(t.a,{href:"https://cspr.live/",children:"https://cspr.live/"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want to undelegate your tokens, you can do so at any time. See the ",(0,s.jsx)(t.a,{href:"/users/undelegate-ui",children:"Undelegation Guide"})," for details."]}),"\n",(0,s.jsx)(t.h2,{id:"video-tutorial",children:"Video Tutorial"}),"\n",(0,s.jsx)(t.p,{children:"This video guide covers the process at a high level, but we recommend following the written tutorial to go through the process step by step."}),"\n",(0,s.jsx)(t.iframe,{width:"560",height:"315",src:"https://www.youtube.com/embed/cR3v8AthlkQ",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},87422:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/10.completed-delegation-0ac5b9f9f8652f84699d6399327e2fdf.png"},58998:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2.delegations-9003a8fe3ea1027b5c2979309d3fea8f.png"},81082:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/3.rewards-115f13a27134c16ee910cfbe03007772.png"},3128:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/4.wallet-delegate-5e55bb39f50718c18135516a3b2cc300.png"},18944:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/5.validator-delegate-0b1707fc714ad98ffe9c51589da77d80.png"},53204:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/6.delegation-details-c24d81971b747b1a9690bbd19326491d.png"},44383:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/7.confirm-delegation-1f04705b09036ea673b306ef2d1792a7.png"},33067:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/8.sign-delegation-4cd652c44f821f2db9c825b07f7c1ba2.png"},62228:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/9.wallet-window-f16c8950d24a74274d9dd6e3aa39c62e.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);