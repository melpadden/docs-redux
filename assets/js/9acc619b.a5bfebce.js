"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[5465],{31662:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=s(74848),t=s(28453);const a={title:"Archive and Restore a DB"},o="Archiving and Restoring a Database",i={id:"operators/maintenance/archiving-and-restoring",title:"Archive and Restore a DB",description:"This documentation describes processes for the compression and decompression of a Casper node database and streaming from a backup location.",source:"@site/versioned_docs/version-1.5.X/operators/maintenance/archiving-and-restoring.md",sourceDirName:"operators/maintenance",slug:"/operators/maintenance/archiving-and-restoring",permalink:"/operators/maintenance/archiving-and-restoring",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{title:"Archive and Restore a DB"},sidebar:"operators",previous:{title:"Node Maintenance",permalink:"/operators/maintenance/"},next:{title:"Move a Node",permalink:"/operators/maintenance/moving-node"}},d={},c=[{value:"Zstandard Limitations",id:"zstandard-limitations",level:2},{value:"Zstandard Installation",id:"zstandard-installation",level:2},{value:"Initial Warnings",id:"initial-warnings",level:2},{value:"Compression",id:"compression",level:2},{value:"Compression level",id:"compression-level",level:3},{value:"Thread count",id:"thread-count",level:3},{value:"Long-distance matching",id:"long-distance-matching",level:3},{value:"Summary of commands",id:"summary-of-commands",level:3},{value:"Decompression",id:"decompression",level:2},{value:"Streamed Decompression",id:"streamed-decompression",level:2},{value:"Starting a New Node with a Decompressed DB",id:"starting-a-new-node-with-a-decompressed-db",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"archiving-and-restoring-a-database",children:"Archiving and Restoring a Database"})}),"\n",(0,r.jsx)(n.p,{children:"This documentation describes processes for the compression and decompression of a Casper node database and streaming from a backup location."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"http://facebook.github.io/zstd/",children:"Zstandard"})," is the best method for compression speed and space for the current LMDB-based database system that the ",(0,r.jsx)(n.code,{children:"casper-node"})," uses."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The values presented in this document assume that the ",(0,r.jsx)(n.code,{children:"trie-compact"})," tool was run on a Mainnet database for compression. Contact the ",(0,r.jsx)(n.a,{href:"https://support.casperlabs.io/hc/en-gb",children:"support team"})," if you have questions."]})}),"\n",(0,r.jsx)(n.h2,{id:"zstandard-limitations",children:"Zstandard Limitations"}),"\n",(0,r.jsxs)(n.p,{children:["The current DB implementation uses sparse files, which can be partially empty, thus not being processed efficiently. You can use ",(0,r.jsx)(n.code,{children:"tar"})," as a pre-filter for stripping sparse data, as shown ",(0,r.jsx)(n.a,{href:"#compression",children:"here"}),", thus eliminating the need to read the full DB size and improving processing."]}),"\n",(0,r.jsx)(n.h2,{id:"zstandard-installation",children:"Zstandard Installation"}),"\n",(0,r.jsx)(n.p,{children:"To install Zstandard, run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt install zstd\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note that Zstandard version 1.4.4 is distributed with Ubuntu 20.04, while version 1.3.3 is distributed with Ubuntu 18.04. Later versions have more documentation."}),"\n",(0,r.jsx)(n.h2,{id:"initial-warnings",children:"Initial Warnings"}),"\n",(0,r.jsxs)(n.p,{children:["You need to stop the ",(0,r.jsx)(n.code,{children:"casper-node-launcher"})," process of the node (and, therefore, the ",(0,r.jsx)(n.code,{children:"casper-node"})," process using the DB) before any compression or decompression into a location. Otherwise, strange things can and will occur."]}),"\n",(0,r.jsx)(n.h2,{id:"compression",children:"Compression"}),"\n",(0,r.jsxs)(n.p,{children:["Run the following basic ",(0,r.jsx)(n.code,{children:"tar"})," command from the DB directory. For Mainnet, the directory would be ",(0,r.jsx)(n.code,{children:"/var/lib/casper/casper-node/casper"}),", and for Testnet it would be ",(0,r.jsx)(n.code,{children:"/var/lib/casper/casper-node/casper-test"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tar -cv --sparse .\n"})}),"\n",(0,r.jsx)(n.p,{children:"On some systems, you may get better performance if you specify the block number as an argument:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tar -b 4096 -cv --sparse .\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can then stream the result into ",(0,r.jsx)(n.code,{children:"zstd"}),". The sections below discuss the ",(0,r.jsx)(n.a,{href:"#compression-level",children:"level"}),", ",(0,r.jsx)(n.a,{href:"#thread-count",children:"thread count"}),", and ",(0,r.jsx)(n.a,{href:"#long-distance-matching",children:"long"})," arguments."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tar -b 4096 -cv --sparse . | zstd -[level] -cv -T[thread count] --long=31 > [path_to]/file.tar.zst\n"})}),"\n",(0,r.jsx)(n.h3,{id:"compression-level",children:"Compression level"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"-[level]"})," argument is the compression level from 1 to 19 (and 20-22 with expansion). In testing, we found 15 to be the sweet spot in compression time vs. size. We recommend lower compression if you plan to transfer the archive only once. If you are creating an archive to be downloaded by many, then the extra time for higher compression may be helpful."]}),"\n",(0,r.jsx)(n.p,{children:"Here are some examples of a Mainnet DB compression at block 741160:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Level"}),(0,r.jsx)(n.th,{children:"Time (min:sec)"}),(0,r.jsx)(n.th,{children:"Size"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"12"}),(0,r.jsx)(n.td,{children:"29:20"}),(0,r.jsx)(n.td,{children:"15.8 GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"15"}),(0,r.jsx)(n.td,{children:"46:15"}),(0,r.jsx)(n.td,{children:"13.0 GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17"}),(0,r.jsx)(n.td,{children:"87:42"}),(0,r.jsx)(n.td,{children:"13.0 GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19"}),(0,r.jsx)(n.td,{children:"197:08"}),(0,r.jsx)(n.td,{children:"12.9 GB"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"For local backups, using 1-5 is a great compression speed-to-size trade-off."}),"\n",(0,r.jsx)(n.h3,{id:"thread-count",children:"Thread count"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"-T[thread count]"})," is the number of threads that ",(0,r.jsx)(n.code,{children:"zstd"})," should use for compression. If running a script or command on varying machines, use ",(0,r.jsx)(n.code,{children:"T0"})," to allow ",(0,r.jsx)(n.code,{children:"zstd"})," to detect the number of cores and run with the same number of threads as the detected cores. A speed-up can be obtained for machines with multiple threads per core by configuring a thread count near the number of threads. It is advisable to stay within the number of CPU threads. The recommendations in this article will use ",(0,r.jsx)(n.code,{children:"-T0"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"long-distance-matching",children:"Long-distance matching"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"--long=31"})," argument is where we see the most space gained by the algorithm because it controls the size of the matching window in powers of 2 (2**31 is 2 GB). The downside is that it requires 2.0 GB memory during compression and decompression as it looks and rebuilds ahead. The default is 27 or 128 MB."]}),"\n",(0,r.jsxs)(n.p,{children:["At compression 19, we see a 30 GB file using the default 128 MB look ahead, and a 13 GB file using 2 GB look ahead. Since all validators should have 16-32 GB of memory, we keep this at ",(0,r.jsx)(n.code,{children:"--long=31"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"An important note is that decompression requires a compatible argument. Trying with a different long-distance matching value will result in an error. However, it will also return the necessary value to provide."}),"\n",(0,r.jsx)(n.h3,{id:"summary-of-commands",children:"Summary of commands"}),"\n",(0,r.jsx)(n.p,{children:"The general command for compression is:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tar -b 4096 -cv --sparse . | zstd -15 -cv -T0 --long=31 > [path_to]/file.tar.zst\n"})}),"\n",(0,r.jsx)(n.p,{children:"For local backups, use a lower compression level:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tar -b 4096 -cv --sparse . | zstd -5 -cv -T0 --long=31 > [path_to]/file.tar.zst\n"})}),"\n",(0,r.jsx)(n.h2,{id:"decompression",children:"Decompression"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"zstd -d"})," is the command for decompression; however, the same ",(0,r.jsx)(n.code,{children:"--long"})," value used for compression must be specified. For all ",(0,r.jsx)(n.code,{children:"casper-node"})," DB-related decompression, you will likely use this command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"zstd -cd --long=31 <.tar.zst file>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"--long=31"})," is omitted, you might see an error such as this, which also gives you the solution:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./casper.tar.zst : Decoding error (36) : Frame requires too much memory for decoding \n./casper.tar.zst : Window size larger than maximum : 2147483648 > 134217728\n./casper.tar.zst : Use --long=31 or --memory=2048MB\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can then use the ",(0,r.jsx)(n.code,{children:"zstd"})," result to populate a ",(0,r.jsx)(n.code,{children:"tar -xv"})," command. Also, create the decompressed files using ",(0,r.jsx)(n.code,{children:"sudo -u casper"}),", because the files will be used by the ",(0,r.jsx)(n.code,{children:"casper-node"}),". Run the following command inside an empty DB location:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"zstd -cd --long=31 <.tar.zst file> | sudo -u casper tar -xv\n"})}),"\n",(0,r.jsx)(n.p,{children:"To fix ownership, use this command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo /etc/casper/node_util.py fix_permissions\n"})}),"\n",(0,r.jsx)(n.h2,{id:"streamed-decompression",children:"Streamed Decompression"}),"\n",(0,r.jsxs)(n.p,{children:["If a ",(0,r.jsx)(n.code,{children:".tar.zst"})," archive is hosted on a website and you will not need the file after decompressing, you can stream it into the process using ",(0,r.jsx)(n.code,{children:"curl"}),", which can output to stdout with ",(0,r.jsx)(n.code,{children:"--output"})," and stream binary to your terminal."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -s --output - <URL for tar.zstd file>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you use the output along with the previous process, you can decompress the files from ",(0,r.jsx)(n.code,{children:"curl"})," directly into a local directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -s --output - <tar.zst URL> | zstd -d --long=31 | sudo -u casper tar -xv\n"})}),"\n",(0,r.jsx)(n.h2,{id:"starting-a-new-node-with-a-decompressed-db",children:"Starting a New Node with a Decompressed DB"}),"\n",(0,r.jsxs)(n.p,{children:["If you are starting a node with a decompressed DB, you must tell the node to run at the protocol version of the tip of your DB. You can do this most efficiently with the ",(0,r.jsx)(n.code,{children:"node_util.py"})," script included in the ",(0,r.jsx)(n.code,{children:"casper-node-launcher"})," installation."]}),"\n",(0,r.jsx)(n.p,{children:"For example, if you are using a DB archive from node version 1.4.5, you would run this command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo /etc/casper/node_util.py force_run_version 1_4_5\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var r=s(96540);const t={},a=r.createContext(t);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);