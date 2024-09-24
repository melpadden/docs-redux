"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[73421],{65916:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=s(74848),t=s(28453);const r={title:"Move a Node"},o="Moving a Validating Node",d={id:"operators/maintenance/moving-node",title:"Move a Node",description:"This guide is for active validators who want to move their node to another machine.",source:"@site/versioned_docs/version-2.0.0/operators/maintenance/moving-node.md",sourceDirName:"operators/maintenance",slug:"/operators/maintenance/moving-node",permalink:"/2.0.0/operators/maintenance/moving-node",draft:!1,unlisted:!1,tags:[],version:"2.0.0",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1726493368e3,frontMatter:{title:"Move a Node"},sidebar:"operators",previous:{title:"Archive and Restore a DB",permalink:"/2.0.0/operators/maintenance/archiving-and-restoring"}},a={},c=[{value:"Swapping Keys with a Hot Backup",id:"swapping-keys-with-a-hot-backup",level:2},{value:"Preparation for swapping",id:"preparation-for-swapping",level:3},{value:"Swapping the nodes",id:"swapping-the-nodes",level:3},{value:"Understanding rewards impact",id:"understanding-rewards-impact",level:3},{value:"Checking file permissions",id:"checking-file-permissions",level:3}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"moving-a-validating-node",children:"Moving a Validating Node"})}),"\n",(0,i.jsx)(n.p,{children:"This guide is for active validators who want to move their node to another machine."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Starting with node version 1.5, operators need to move the unit files at the database level. This step allows moving the node with nearly zero rewards loss."})}),"\n",(0,i.jsx)(n.h2,{id:"swapping-keys-with-a-hot-backup",children:"Swapping Keys with a Hot Backup"}),"\n",(0,i.jsx)(n.p,{children:"This method limits downtime and enables a smooth transition from the old to the new node. It keeps the node in sync with the tip of the chain."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Once a node is running (",(0,i.jsx)(n.code,{children:"current_node"}),"), create a second node (",(0,i.jsx)(n.code,{children:"backup_node"}),") on another machine. These two nodes will run in parallel."]}),"\n",(0,i.jsxs)(n.li,{children:["When the ",(0,i.jsx)(n.code,{children:"backup_node"})," is up to date, stop the ",(0,i.jsx)(n.code,{children:"current_node"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Move the unit files at the DB level using ",(0,i.jsx)(n.code,{children:"rsync"}),". This step allows moving the node with nearly zero rewards loss."]}),"\n",(0,i.jsxs)(n.li,{children:["Stop the ",(0,i.jsx)(n.code,{children:"backup_node"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Swap keys on the ",(0,i.jsx)(n.code,{children:"backup_node"}),", now the new validator."]}),"\n",(0,i.jsxs)(n.li,{children:["Restart the ",(0,i.jsx)(n.code,{children:"backup_node"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Swap keys on the ",(0,i.jsx)(n.code,{children:"current_node"}),", now the new backup."]}),"\n",(0,i.jsxs)(n.li,{children:["Restart the ",(0,i.jsx)(n.code,{children:"current_node"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"preparation-for-swapping",children:"Preparation for swapping"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Let both nodes synchronize to the tip of the blockchain. Keep the current validating node running with the original validator keyset."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Prepare to swap keys by following these steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Create the following folder structure on both nodes under the ",(0,i.jsx)(n.code,{children:"/etc/casper/validator_keys/"})," directory."]}),"\n",(0,i.jsxs)(n.li,{children:["Create subdirectories for the ",(0,i.jsx)(n.code,{children:"current_node"})," and ",(0,i.jsx)(n.code,{children:"backup_node"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Copy each node's keyset under the corresponding directories."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    /etc/casper/validator_keys/\n    \u251c\u2500\u2500 public_key.pem\n    \u251c\u2500\u2500 public_key_hex\n    \u251c\u2500\u2500 secret_key.pem\n    \u251c\u2500\u2500 current_node\n    \u2502   \u251c\u2500\u2500 public_key.pem\n    \u2502   \u251c\u2500\u2500 public_key_hex\n    \u2502   \u2514\u2500\u2500 secret_key.pem\n    \u2514\u2500\u2500 backup_node\n    |   \u251c\u2500\u2500 public_key.pem\n    |   \u251c\u2500\u2500 public_key_hex\n    |   \u2514\u2500\u2500 secret_key.pem\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This setup allows key swapping by running the ",(0,i.jsx)(n.code,{children:"sudo -u casper cp * ../"})," command, as shown below."]}),"\n",(0,i.jsx)(n.h3,{id:"swapping-the-nodes",children:"Swapping the nodes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"backup_node"})," is up to date, stop the ",(0,i.jsx)(n.code,{children:"current_node"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.code,{children:"backup_node"})," (the future validator), use ",(0,i.jsx)(n.code,{children:"rsync"})," to move the unit files from the ",(0,i.jsx)(n.code,{children:"current_node"}),", located in ",(0,i.jsx)(n.code,{children:"/var/lib/casper/casper-node/[NETWORK_NAME]/unit_files"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.code,{children:"backup_node"}),", run these commands to stop the node, swap keys, and restart the node:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop casper-node-launcher\ncd /etc/casper/validator_keys/current_node\nsudo -u casper cp * ../\nsudo systemctl start casper-node-launcher\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.code,{children:"current_node"}),", run these commands to stop the node and swap keys:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop casper-node-launcher\ncd /etc/casper/validator_keys/backup_node\nsudo -u casper cp * ../\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Restart the original validator node (",(0,i.jsx)(n.code,{children:"current_node"}),"), which is now the new backup:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start casper-node-launcher \n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"understanding-rewards-impact",children:"Understanding rewards impact"}),"\n",(0,i.jsx)(n.p,{children:"After swapping, the new validator node shows no round length until an era transition occurs and will lose all rewards from the point of the switch until the end of that era. The validator is not ejected but will receive rewards starting with the next era."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"You could time the swap right before the era ends to minimize reward losses."})}),"\n",(0,i.jsx)(n.h3,{id:"checking-file-permissions",children:"Checking file permissions"}),"\n",(0,i.jsxs)(n.p,{children:["After the swap, check and fix file permissions by running the ",(0,i.jsx)(n.code,{children:"/etc/casper/node_util.py"})," utility."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var i=s(96540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);