"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[9235],{6428:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var t=n(4848),o=n(8453);const c={title:"Genesis"},i="The Genesis Block {#the-genesis-block}",r={id:"operators/setup-network/genesis",title:"Genesis",description:"the-genesis-block}",source:"@site/docs/operators/setup-network/genesis.md",sourceDirName:"operators/setup-network",slug:"/operators/setup-network/genesis",permalink:"/docs-redux/docs-redux/operators/setup-network/genesis",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Genesis"},sidebar:"operators",previous:{title:"Setting up Private Networks",permalink:"/docs-redux/docs-redux/operators/setup-network/"},next:{title:"The Chainspec",permalink:"/docs-redux/docs-redux/operators/setup-network/chain-spec"}},a={},d=[{value:"chainspec.toml",id:"chainspectoml",level:2},{value:"accounts.toml",id:"accountstoml",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"the-genesis-block",children:"The Genesis Block"})}),"\n",(0,t.jsx)(s.p,{children:"The Casper node software creates a genesis block from the following input files:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"chainspec.toml"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"accounts.toml"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"chainspectoml",children:"chainspec.toml"}),"\n",(0,t.jsxs)(s.p,{children:["A version of the ",(0,t.jsx)(s.a,{href:"/docs-redux/docs-redux/concepts/glossary/C#chainspec",children:"chainspec"})," is downloaded by the ",(0,t.jsx)(s.code,{children:"pull_casper_node_version.sh"})," script installed with the casper-node-launcher debian package. This script pulls the ",(0,t.jsx)(s.code,{children:"chainspec.toml"})," file from the appropriate path defined in the network config file used (",(0,t.jsx)(s.code,{children:"casper.conf"})," for MainNet and ",(0,t.jsx)(s.code,{children:"casper-test.conf"})," for TestNet)."]}),"\n",(0,t.jsxs)(s.p,{children:["The production version of the file from which this is based on can be found at ",(0,t.jsx)(s.code,{children:"casper-node/resources/production/chainspec.toml"})," in the code base. To create a custom network, this file can be updated as desired. Any changes to this file will result in a different genesis hash. Refer to ",(0,t.jsx)(s.a,{href:"/docs-redux/docs-redux/operators/setup-network/chain-spec",children:"this page"})," for detailed documentation on each of the variables in the file."]}),"\n",(0,t.jsx)(s.h2,{id:"accountstoml",children:"accounts.toml"}),"\n",(0,t.jsx)(s.p,{children:"This file contains the genesis validator set information, starting accounts and associated balances and bond amounts."}),"\n",(0,t.jsxs)(s.p,{children:["If an account is not bonded at genesis, specify a ",(0,t.jsx)(s.code,{children:"0"})," for the bond amount."]}),"\n",(0,t.jsxs)(s.p,{children:["Similar to the ",(0,t.jsx)(s.code,{children:"chainspec.toml"}),", this is pulled from the appropriate path defined in the network config file used."]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var t=n(6540);const o={},c=t.createContext(o);function i(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);