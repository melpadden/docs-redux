"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[24439],{67026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"users/ledger/staking-ledger","title":"Delegate with Ledger","description":"Ledger Initialization","source":"@site/versioned_docs/version-2.0.0/users/ledger/staking-ledger.md","sourceDirName":"users/ledger","slug":"/users/staking-ledger","permalink":"/users/staking-ledger","draft":false,"unlisted":false,"tags":[],"version":"2.0.0","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{"title":"Delegate with Ledger","slug":"/users/staking-ledger"},"sidebar":"users","previous":{"title":"Ledger and CSPR.live","permalink":"/users/ledger/ledger-cspr-live"}}');var s=n(74848),a=n(28453);const r={title:"Delegate with Ledger",slug:"/users/staking-ledger"},o="Delegating with Ledger Devices",l={},d=[{value:"Ledger Initialization",id:"1-initialization",level:2},{value:"<strong>Important Notes</strong>",id:"important-notes",level:3},{value:"Staking with a Validator",id:"2-staking",level:2},{value:"Connect and Login with Ledger",id:"connect-and-login-with-ledger",level:3},{value:"Receive Tokens from an External Source",id:"receive-tokens-from-an-external-source",level:3},{value:"Staking Tokens",id:"staking-tokens",level:3},{value:"Unstaking with a Validator",id:"3-unstaking",level:2},{value:"Initiate the Undelegation",id:"initiate-the-undelegation",level:3},{value:"Sign the Undelegation",id:"sign-the-undelegation",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"delegating-with-ledger-devices",children:"Delegating with Ledger Devices"})}),"\n",(0,s.jsx)(t.h2,{id:"1-initialization",children:"Ledger Initialization"}),"\n",(0,s.jsx)(t.p,{children:"Before getting started, you need to complete two prerequisite steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Set up your Ledger device using the ",(0,s.jsx)(t.a,{href:"https://support.ledger.com/hc/en-us/articles/4416379141009-Casper-CSPR-?docs=true",children:"official documentation"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Connect the Ledger to your ",(0,s.jsx)(t.a,{href:"https://cspr.live/",children:"cspr.live"})," account by following the ",(0,s.jsx)(t.a,{href:"/workflow/ledger-setup/",children:"Ledger Setup"})," guide."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"important-notes",children:(0,s.jsx)(t.strong,{children:"Important Notes"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:'<span style={{color:"#ee5945"}}>CRITICAL'}),": Write down and hide your recovery codes! These are necessary to be able to restore your account if you lose or damage the hardware key."]}),"\n",(0,s.jsxs)(t.li,{children:["When logging in to ",(0,s.jsx)(t.a,{href:"https://cspr.live/",children:"cspr.live"}),", the UI will offer numerous public keys. Choose any of them. They are all derived from the Master Seed that is secured in the Ledger key (",(0,s.jsx)(t.a,{href:"https://www.ledger.com/academy/crypto/where-are-my-coins",children:"more info here"}),"). Make sure you write down whichever public key(s) you end up using so that you have no confusion when trying to log in."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"2-staking",children:"Staking with a Validator"}),"\n",(0,s.jsx)(t.h3,{id:"connect-and-login-with-ledger",children:"Connect and Login with Ledger"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Connect your Ledger to your computer via USB and enter your PIN to unlock it."}),"\n",(0,s.jsx)(t.li,{children:'Open the Casper app on the Ledger (you will see the message "Casper Ready").'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Casper Ready",src:n(65656).A+"",width:"1849",height:"1479"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Sign in to ",(0,s.jsx)(t.a,{href:"https://cspr.live/",children:"cspr.live"}),' with your Ledger by clicking "Connect" under the Ledger option, as shown in the screenshot below.']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Casper Ready 2",src:n(61267).A+"",width:"1850",height:"726"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Select the public key connected to your Ledger account."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Casper Ready 3",src:n(45706).A+"",width:"1999",height:"1295"})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsx)(t.li,{children:"View your account by clicking on your public key at the top right corner."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Casper Ready 4",src:n(16133).A+"",width:"1982",height:"1384"})}),"\n",(0,s.jsx)(t.h3,{id:"receive-tokens-from-an-external-source",children:"Receive Tokens from an External Source"}),"\n",(0,s.jsxs)(t.p,{children:["This portion will vary slightly depending on where your funds are currently stored. However, the process will require that you send tokens to your public key as described in the ",(0,s.jsx)(t.a,{href:"/workflow/ledger-setup/#receive-tokens",children:"documentation"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"staking-tokens",children:"Staking Tokens"}),"\n",(0,s.jsx)(t.p,{children:"Once you have tokens in your account, staking (delegating) with a validator is easy."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:['Go back to your account, but this time open the "delegate" tab located at: ',(0,s.jsx)(t.a,{href:"https://cspr.live/delegate-stake",children:"https://cspr.live/delegate-stake"})," (alternatively, click on ",(0,s.jsx)(t.code,{children:"Wallet \u21d2 Delegate Stake"})," to go there)."]}),"\n",(0,s.jsx)(t.li,{children:"From the validator list, choose any validator you like. You will notice that validators charge different fees and have different amounts staked to them. This may inform your decision to choose the right validator for you."}),"\n",(0,s.jsxs)(t.li,{children:['Specify the amount you wish to stake or click "Delegate max" as shown below. Notes:\n',(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Remember that the total delegation amount to one validator cannot be less than 500 CSPR."}),"\n",(0,s.jsx)(t.li,{children:"Both delegation and undelegation have an associated fee, so you need to leave some funds in your account to cover transaction fees. Otherwise, you may need to deposit additional funds to undelegate later."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:'Click "Next" to continue, as shown below.'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Casper Ready 5",src:n(63868).A+"",width:"1255",height:"995"})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'The page will update with a confirmation page asking you to verify all the details. If everything looks correct, click the "Confirm and delegate stake" button.'}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'You will be presented with a final page asking you to sign the transaction with Ledger. Click the "Sign with Ledger" button at the bottom.'}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),': If you get an error showing a "Transaction rejected" message, make sure your Ledger device is active and connected to your computer. You may also need to re-enter your PIN if it locked itself due to inactivity.']}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Casper Ready 6",src:n(87799).A+"",width:"1190",height:"1778"})}),"\n",(0,s.jsxs)(t.ol,{start:"7",children:["\n",(0,s.jsxs)(t.li,{children:['On the Ledger, you will see a message saying, "Please review". Click through the fields and verify everything matches what is being shown to you on ',(0,s.jsx)(t.a,{href:"https://cspr.live",children:"cspr.live"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Casper Ready 7",src:n(88302).A+"",width:"1999",height:"791"})}),"\n",(0,s.jsxs)(t.ol,{start:"8",children:["\n",(0,s.jsx)(t.li,{children:'Once you click "Approve", you will see the Delegation Completed screen verifying that your staking successfully was submitted to the blockchain.'}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Casper Ready 8",src:n(77689).A+"",width:"1230",height:"370"}),"\n",(0,s.jsx)(t.img,{alt:"Casper Ready 9",src:n(71440).A+"",width:"1324",height:"427"})]}),"\n",(0,s.jsxs)(t.ol,{start:"9",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'At this point, you can return to your account and wait until the completion of the era when the block gets included in the chain. Once the era completes, you will see that your liquid balance has decreased by your staked amount and is reflected in the "Staked As Delegator" row.'}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": If you staked your full balance, don't panic if you see a 0 CSPR balance whenever you log in! This is because it shows your liquid assets, not your total balance. You can go to your account details page, as shown below, to see your full balance and asset breakdown between liquid, staked, and undelegated tokens."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Casper Ready 10",src:n(69770).A+"",width:"1999",height:"1203"})}),"\n",(0,s.jsx)(t.h2,{id:"3-unstaking",children:"Unstaking with a Validator"}),"\n",(0,s.jsx)(t.h3,{id:"initiate-the-undelegation",children:"Initiate the Undelegation"}),"\n",(0,s.jsx)(t.p,{children:'Now that you have funds delegated, you can liquidate them by undelegating them first. As demonstrated below, on your account\'s profile page, click "Undelegate" to get started.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Casper Ready 11",src:n(20531).A+"",width:"1211",height:"861"})}),"\n",(0,s.jsx)(t.p,{children:'The next page, "Undelegation details", will ask you how much you wish to undelegate. If you select "Undelegate max", it will attempt to liquidate all of your staked assets (minus the transaction fee). Once you enter a valid amount, the "Next" button will become clickable. Below you can see that I entered 313.02931 CSPR to be able to proceed.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Casper Ready 12",src:n(46040).A+"",width:"1212",height:"958"})}),"\n",(0,s.jsx)(t.p,{children:'You will next be shown a confirmation screen. If everything looks good, then click "Confirm and undelegate stake" to proceed.'}),"\n",(0,s.jsx)(t.h3,{id:"sign-the-undelegation",children:"Sign the Undelegation"}),"\n",(0,s.jsx)(t.p,{children:"You will have to sign the transaction to verify your account is initiating this action."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Connect your Ledger device to your computer."}),"\n",(0,s.jsx)(t.li,{children:"Unlock your Ledger by entering your PIN."}),"\n",(0,s.jsx)(t.li,{children:'Open the "Casper" app and ensure you see "Casper Ready".'}),"\n",(0,s.jsxs)(t.li,{children:["Then back on ",(0,s.jsx)(t.a,{href:"https://cspr.live",children:"cspr.live"}),' click the "Sign with Ledger" button shown below.']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Casper Ready 13",src:n(18753).A+"",width:"1202",height:"1318"})}),"\n",(0,s.jsx)(t.p,{children:'On your Ledger, you will see the transaction details. Verify all the information with what is being presented on the screen. If it looks good, then approve the transaction. If all goes according to plan, you will be presented with an "Undelegation completed!" screen.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Casper Ready 14",src:n(35662).A+"",width:"1208",height:"921"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),': There is a 7 era delay to undelegate. Era duration is approximately 120 minutes. While the funds go through undelegation, the balance will appear in the "Undelegation" row on your account profile page, as you can see below.']}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Casper Ready 15",src:n(25655).A+"",width:"1205",height:"736"})}),"\n",(0,s.jsx)(t.p,{children:"After the undelegation period completes, your funds will be liquid and available for you to re-stake, withdraw, or use however you wish."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},65656:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ledger1-39686f6ffc5ad108d8e08973a40103f5.png"},69770:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ledger10-ee4f4fd9d8bf12ad0f33c5e3b4ada52c.png"},20531:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ledger11-475f40691a8f46d17fdeb029786ac923.png"},46040:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ledger12-7fe9fa74a7040dcf0fdb703c2ad1464f.png"},18753:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ledger13-4e3e030cf508f30ff250d22230e7dec9.png"},35662:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ledger14-35808a8e588d4316a63c8c7c1b050dd2.png"},25655:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ledger15-5d758ba4698580290a72e3d4d564c9b1.png"},61267:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ledger2-f1e2691594ec0cdcc0bec706cd2aade5.png"},45706:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ledger3-9b464ab0befd3928a5c659c77cf9555c.png"},16133:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ledger4-9a921643c0431d1eac3009da497cb280.png"},63868:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ledger5-9853a9b9bebe07a3a24f1febfac4ca03.png"},87799:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ledger6-b50bdcc2ba945ebf349fc3396785adc0.png"},88302:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ledger7-2d020b9e8d2b40169e089bda6ff77dda.png"},77689:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ledger8-c3399bf73ccd1e844f6f5790c7ad1796.png"},71440:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ledger9-97001e377d0f7629626696f888dde09a.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);