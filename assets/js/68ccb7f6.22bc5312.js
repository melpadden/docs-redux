"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[56474],{88599:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=s(74848),t=s(28453);const r={title:"Open Files Limit"},o="Setting the Open Files Limit",l={id:"operators/setup/open-files",title:"Open Files Limit",description:"When the casper-node launches, it tries to set the maximum open files limit (nofile) for the process to 64000. With some systems, this limit will be larger than the default hard limit of 4096.",source:"@site/docs/operators/setup/open-files.md",sourceDirName:"operators/setup",slug:"/operators/setup/open-files",permalink:"/operators/setup/open-files",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Karol Marter",lastUpdatedAt:1722798267e3,frontMatter:{title:"Open Files Limit"},sidebar:"operators",previous:{title:"Fast Sync",permalink:"/operators/setup/fast-sync"},next:{title:"Upgrades",permalink:"/operators/setup/upgrade"}},c={},a=[{value:"Setting the Limit Manually",id:"updating-manually",level:2},{value:"Updating the <code>limits.conf</code> File",id:"updating-limits-conf",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",details:"details",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",summary:"summary",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"setting-the-open-files-limit",children:"Setting the Open Files Limit"})}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"casper-node"})," launches, it tries to set the maximum open files limit (",(0,i.jsx)(n.code,{children:"nofile"}),") for the process to ",(0,i.jsx)(n.code,{children:"64000"}),". With some systems, this limit will be larger than the default hard limit of ",(0,i.jsx)(n.code,{children:"4096"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The node software uses file handles for both files and network connections. Since network connections are unpredictable, running out of file handles can stop critical file writes from occurring. Therefore, the default ",(0,i.jsx)(n.code,{children:"nofile"})," limit needs to be increased."]}),"\n",(0,i.jsxs)(n.p,{children:["With the ",(0,i.jsx)(n.code,{children:"casper-node-launcher"})," running, you can see what the system allocated by finding the process ID (PID) for the ",(0,i.jsx)(n.code,{children:"casper-node"})," with the following command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pgrep "casper-node$"\n'})}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:"Sample output"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ pgrep "casper-node$"\n275928\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This PID will change, so you need to run the above command to get the current version with your system. Also, it will not be ",(0,i.jsx)(n.code,{children:"275928"})," each time."]})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you do not get a value in return, you do not have the ",(0,i.jsx)(n.code,{children:"casper-node-launcher"})," running correctly."]}),"\n",(0,i.jsxs)(n.p,{children:["To find the current ",(0,i.jsx)(n.code,{children:"nofile"})," (number of open files) hard limit, run ",(0,i.jsx)(n.code,{children:"prlimit"})," with the PID from the previous command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo prlimit -n -p <PID>\n"})}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:"Sample output"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ sudo prlimit -n -p 275928\nRESOURCE DESCRIPTION              SOFT HARD UNITS\nNOFILE   max number of open files 1024 4096 files\n"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You can also embed both commands as shown here:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo prlimit -n -p $(pgrep "casper-node$")\n'})}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:"Sample output"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ sudo prlimit -n -p $(pgrep "casper-node$")\nRESOURCE DESCRIPTION              SOFT HARD UNITS\nNOFILE   max number of open files 1024 4096 files\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you receive ",(0,i.jsx)(n.code,{children:"prlimit: option requires an argument -- 'p'"}),", then ",(0,i.jsx)(n.code,{children:'pgrep "casper-node$"'})," is not returning anything because the ",(0,i.jsx)(n.code,{children:"casper-node-launcher"})," is no longer running."]}),"\n",(0,i.jsx)(n.h2,{id:"updating-manually",children:"Setting the Limit Manually"}),"\n",(0,i.jsxs)(n.p,{children:["Run the command below to set the ",(0,i.jsx)(n.code,{children:"nofile"})," limit for an active process without restarting the ",(0,i.jsx)(n.code,{children:"casper-node-launcher"})," and ",(0,i.jsx)(n.code,{children:"casper-node"})," processes. Note that this setting is active only while the ",(0,i.jsx)(n.code,{children:"casper-node"})," process runs. To make this setting permanent, ",(0,i.jsxs)(n.a,{href:"#updating-limits-conf",children:["update the ",(0,i.jsx)(n.code,{children:"limits.conf"})]})," file instead."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo prlimit --nofile=64000 --pid=$(pgrep "casper-node$")`\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Next, check that the ",(0,i.jsx)(n.code,{children:"prlimit"})," has changed:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo prlimit -n -p $(pgrep "casper-node$")\n'})}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:"Sample output"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ sudo prlimit -n -p $(pgrep "casper-node$")\nRESOURCE DESCRIPTION               SOFT  HARD UNITS\nNOFILE   max number of open files 64000 64000 files\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"updating-limits-conf",children:["Updating the ",(0,i.jsx)(n.code,{children:"limits.conf"})," File"]}),"\n",(0,i.jsxs)(n.p,{children:["It is possible to persist the ",(0,i.jsx)(n.code,{children:"nofile"})," limit across server reboots, ",(0,i.jsx)(n.code,{children:"casper-node-launcher"})," restarts, and protocol upgrades, by adding the ",(0,i.jsx)(n.code,{children:"nofile"})," setting for the ",(0,i.jsx)(n.code,{children:"casper"})," user in ",(0,i.jsx)(n.code,{children:"/etc/security/limits.conf"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Add the following row to the bottom of the ",(0,i.jsx)(n.code,{children:"/etc/security/limits.conf"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"casper          hard    nofile          64000\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Afterward, log out of any shells to enable this change. Restarting the node should maintain the correct ",(0,i.jsx)(n.code,{children:"nofile"})," setting."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(96540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);