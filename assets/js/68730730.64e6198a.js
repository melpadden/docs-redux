"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[8113],{85311:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(74848),s=r(28453);const i={title:"Hardware"},o="Recommended Hardware Specifications",a={id:"operators/setup/hardware",title:"Hardware",description:"System Requirements",source:"@site/versioned_docs/version-2.0.0/operators/setup/hardware.md",sourceDirName:"operators/setup",slug:"/operators/setup/hardware",permalink:"/2.0.0/operators/setup/hardware",draft:!1,unlisted:!1,tags:[],version:"2.0.0",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1726493368e3,frontMatter:{title:"Hardware"},sidebar:"operators",previous:{title:"Setting up a Node",permalink:"/2.0.0/operators/setup/"},next:{title:"Configuration",permalink:"/2.0.0/operators/setup/basic-node-configuration"}},d={},c=[{value:"System Requirements",id:"system-requirements",level:2},{value:"CPU Requirements",id:"cpu-requirements",level:3}];function l(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"recommended-hardware-specifications",children:"Recommended Hardware Specifications"})}),"\n",(0,t.jsx)(n.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,t.jsxs)(n.p,{children:["The following hardware specifications are recommended for the Casper ",(0,t.jsx)(n.a,{href:"https://cspr.live/",children:"Mainnet"})," and ",(0,t.jsx)(n.a,{href:"https://testnet.cspr.live/",children:"Testnet"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"4 Cores"}),"\n",(0,t.jsx)(n.li,{children:"32 GB Ram"}),"\n",(0,t.jsx)(n.li,{children:"2 TB SSD or network SSD backed disk"}),"\n",(0,t.jsx)(n.li,{children:"Linux machine running Ubuntu 20.04"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"SSD is required because HDD cannot perform random writes at the performance needed to keep in sync with the full speed of the network."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"For non-archival nodes, disc usage will drop once data recovery is implemented. It is safe to slowly increase the disc space as needed while monitoring on a server capable of this."}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"cpu-requirements",children:"CPU Requirements"}),"\n",(0,t.jsx)(n.p,{children:"Attempting to run a Casper node on older hardware can result in unexpected crashes. This is due to the CPU not supporting instructions used by our official binaries, including AVX2 and Intel SHA extensions."}),"\n",(0,t.jsx)(n.p,{children:"To avoid these issues, we recommend a CPU running AMD Zen, Intel Ice Lake or newer architecture."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This only applies to official binaries released by Casper. If you are compiling your node from scratch, you may choose to disable the extensions in question."})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);