"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[92799],{71383:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var r=n(74848),o=n(28453);const t={title:"Non-Root Users"},i="Setting up a Non-Root User",d={id:"operators/setup/non-root-user",title:"Non-Root Users",description:"Operators may log into their servers remotely using a key. The following steps explain how to create a non-root user and log in using a private key instead of the root user. Replace `` in the instructions below with your username.",source:"@site/docs/operators/setup/non-root-user.md",sourceDirName:"operators/setup",slug:"/operators/setup/non-root-user",permalink:"/docs-redux/operators/setup/non-root-user",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Karol Marter",lastUpdatedAt:1722798267e3,frontMatter:{title:"Non-Root Users"},sidebar:"operators",previous:{title:"Join a Network",permalink:"/docs-redux/operators/setup/joining"},next:{title:"Node Events",permalink:"/docs-redux/operators/setup/node-events"}},c={},a=[];function l(e){const s={a:"a",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"setting-up-a-non-root-user",children:"Setting up a Non-Root User"})}),"\n",(0,r.jsxs)(s.p,{children:["Operators may log into their servers remotely using a key. The following steps explain how to create a non-root user and log in using a private key instead of the root user. Replace ",(0,r.jsx)(s.code,{children:"<username>"})," in the instructions below with your username."]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Use ",(0,r.jsx)(s.a,{href:"https://www.ssh.com/academy/ssh/keygen",children:"ssh-keygen"})," to generate a new SSH key."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Create the user with no password, as the key is your password."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"sudo adduser <username> --disabled-password\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsx)(s.li,{children:"Create authorized_keys with your key to log in."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"sudo su - <username>\nmkdir .ssh\nchmod 700 .ssh\ntouch .ssh/authorized_keys\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"4",children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Use the editor of your choice and paste your .ssh public key i the ",(0,r.jsx)(s.code,{children:".ssh/authorized_keys"})," file."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Exit out of the ",(0,r.jsx)(s.code,{children:"<username>"})," account and log into the root or previous sudo-er account."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"exit\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"6",children:["\n",(0,r.jsx)(s.li,{children:"Add your user to sudo-ers under the root account or your previous sudo-er account."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"sudo visudo\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"7",children:["\n",(0,r.jsxs)(s.li,{children:["Type ",(0,r.jsx)(s.code,{children:"<username>  ALL=(ALL:ALL) NOPASSWD:ALL"})," below the row containing ",(0,r.jsx)(s.code,{children:"root    ALL=(ALL:ALL) ALL"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"# User privilege specification\nroot    ALL=(ALL:ALL) ALL\n<username>  ALL=(ALL:ALL) NOPASSWD:ALL\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"8",children:["\n",(0,r.jsx)(s.li,{children:"You should be able to log in with the key and not use the root user."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"ssh -i <your ssh private key> <username>@<server ip>\n"})}),"\n",(0,r.jsx)(s.p,{children:"Here is an example command:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"ssh -i ~/.ssh/id_rsa casper@10.21.10.200\n"})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>d});var r=n(96540);const o={},t=r.createContext(o);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);