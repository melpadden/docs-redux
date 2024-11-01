"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[80451],{4017:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var t=s(74848),a=s(28453);const r={title:"JSON RPC Changes in Casper 2.0",description:"A discussion of the changes to the JSON RPC in Casper v2.0",slug:"condor-jsonrpc",date:"2024-10-06T18:00",authors:["melpadden"],tags:["condor","json-rpc"],hide_table_of_contents:!1},c="Casper 1.X -> Casper 2.0 :: JSON-RPC API changes",i={type:"mdx",permalink:"/pages/condor/rpc-changes",source:"@site/src/pages/condor/rpc-changes.md",title:"JSON RPC Changes in Casper 2.0",description:"A discussion of the changes to the JSON RPC in Casper v2.0",frontMatter:{title:"JSON RPC Changes in Casper 2.0",description:"A discussion of the changes to the JSON RPC in Casper v2.0",slug:"condor-jsonrpc",date:"2024-10-06T18:00",authors:["melpadden"],tags:["condor","json-rpc"],hide_table_of_contents:!1},unlisted:!1},d={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Changes for v2.0",id:"changes-for-v20",level:2},{value:"Casper Sidecar",id:"casper-sidecar",level:3},{value:"Node Binary Port",id:"node-binary-port",level:3},{value:"JSON-RPC Differences",id:"json-rpc-differences",level:4},{value:"JSON-RPC Schema Definitions",id:"json-rpc-schema-definitions",level:3},{value:"Table of v1.5 &amp; v2.0 JSON-RPC API differences",id:"table-of-v15--v20-json-rpc-api-differences",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",u:"u",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"casper-1x---casper-20--json-rpc-api-changes",children:"Casper 1.X -> Casper 2.0 :: JSON-RPC API changes"})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"This article is intended for developers consuming the Casper 2.0 (AKA Condor) JSON RPC, such as dApp developers, SDK developers, or others relying on the JSON-RPC API. In this article we examine the JSON-RPC  and break down the differences between v1.5.6 and v2.0.0."}),"\n",(0,t.jsx)(n.p,{children:"Since the network's inception, the Casper node has exposed an API over HTTP, using JSON, which is known as the JSON-RPC. This API allows client software such as dApps and SDKs to communicate and interact with the node, giving access to query node state, chain state, balance details and other information, as well as to write information to the chain by submitting transactions."}),"\n",(0,t.jsx)(n.h2,{id:"changes-for-v20",children:"Changes for v2.0"}),"\n",(0,t.jsx)(n.h3,{id:"casper-sidecar",children:"Casper Sidecar"}),"\n",(0,t.jsxs)(n.p,{children:["One of the major changes in the Condor upgrade is the new ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar",children:"casper-sidecar"}),". The sidecar runs in a ",(0,t.jsx)(n.strong,{children:"dedicated"})," process and and is bound to a node's binary port and/or SSE port.  The sidecar assumes ",(0,t.jsx)(n.strong,{children:"all"})," responsibility for running the JSON-RPC server and exposing the JSON-RPC endpoints to the internet, i.e. the node software itself no longer exposes a JSON RPC API to the consumer - ",(0,t.jsx)(n.u,{children:"this job is now done by the sidecar"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Because the sidecar runs in a dedicated process, it is possible to run a sidecar upon a different machine to the node.  However in practice, most node operators will likely operate a sidecar process on the same machine as the node.  Furthermore an operator's deployment setup is opaque to to a DApp that interacts with the JSON-RPC API via an SDK."}),"\n",(0,t.jsx)(n.p,{children:"There are several benefits to moving the JSON-RPC API to a sidecar:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The JSON-RPC API can now evolve independently of the node"}),"\n",(0,t.jsx)(n.li,{children:"A node operator now has a finer degree of control over their operational setup"}),"\n",(0,t.jsx)(n.li,{children:"The sidecar reduces the amount of work that the node itself has to do, thereby simplifying the deployment of alternative node implementations (e.g. mojo, go, zig, c++)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"node-binary-port",children:"Node Binary Port"}),"\n",(0,t.jsx)(n.p,{children:"The Casper 2.0 Node now exposes a pure Binary Port API, which allows connection over TCP/IP and pure binary serialization for your remote procedure calls.  Depending on your use case, you may be interested in considering this option for interacting with Casper Condor. In general, the binary port offers better performance and features compared to the JSON RPC.  A detailed discussion of the Binary Port will be contained in a future article.  It is anticipated that all SDKs will be updated so as to support the new Binary Port API."}),"\n",(0,t.jsx)(n.h4,{id:"json-rpc-differences",children:"JSON-RPC Differences"}),"\n",(0,t.jsx)(n.p,{children:'The biggest immediately obvious change in the RPC is the change in name from deploy to transaction.  Casper 1.X used the name "deploy" for a unit of work submitted to the blockchain, in Condor a unit of work is now renamed as "Transaction".'}),"\n",(0,t.jsx)(n.h3,{id:"json-rpc-schema-definitions",children:"JSON-RPC Schema Definitions"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(25073).A+"",children:"here"})," for Casper 1.5 node JSON-RPC."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(74631).A+"",children:"here"})," for Casper 2.0 node JSON-RPC."]}),"\n",(0,t.jsx)(n.h2,{id:"table-of-v15--v20-json-rpc-api-differences",children:"Table of v1.5 & v2.0 JSON-RPC API differences"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function in v1.5"}),(0,t.jsx)(n.th,{children:"Function in v2.0"}),(0,t.jsx)(n.th,{children:"Remarks"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(92247).A+"",children:"account_put_deploy"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(36334).A+"",children:"account_put_transaction"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"./jsonrpc-comp/account_put_transaction",children:"Renamed"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(56061).A+"",children:"chain_get_block_transfers"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(1687).A+"",children:"chain_get_block_transfers"})}),(0,t.jsx)(n.td,{children:"Unchanged"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(9962).A+"",children:"chain_get_block"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(15904).A+"",children:"chain_get_block"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"./jsonrpc-comp/chain_get_block",children:"Now returns Block with Signatures"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(22765).A+"",children:"chain_get_era_info_by_switch_block"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(81199).A+"",children:"chain_get_era_info_by_switch_block"})}),(0,t.jsx)(n.td,{children:"Unchanged"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(76018).A+"",children:"chain_get_era_summary"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(62032).A+"",children:"chain_get_era_summary"})}),(0,t.jsx)(n.td,{children:"Unchanged"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(65260).A+"",children:"chain_get_state_root_hash"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(97886).A+"",children:"chain_get_state_root_hash"})}),(0,t.jsx)(n.td,{children:"Unchanged"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(79232).A+"",children:"info_get_chainspec"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(32198).A+"",children:"info_get_chainspec"})}),(0,t.jsx)(n.td,{children:"Unchanged"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(84149).A+"",children:"info_get_deploy"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(7048).A+"",children:"info_get_transaction"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"./jsonrpc-comp/info_get_transaction",children:"Renamed"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(1691).A+"",children:"info_get_peers"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(3497).A+"",children:"info_get_peers"})}),(0,t.jsx)(n.td,{children:"Unchanged"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(79980).A+"",children:"info_get_status"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(86446).A+"",children:"info_get_status"})}),(0,t.jsxs)(n.td,{children:["Latest ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(47178).A+"",children:"switch block hash"})," included in result"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(59710).A+"",children:"info_get_validator_changes"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(93156).A+"",children:"info_get_validator_changes"})}),(0,t.jsx)(n.td,{children:"Unchanged"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(117).A+"",children:"query_balance"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(24683).A+"",children:"query_balance"})}),(0,t.jsx)(n.td,{children:"Unchanged"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(15158).A+"",children:"query_balance_details"})}),(0,t.jsx)(n.td,{children:"Added"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(42626).A+"",children:"query_global_state"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(12492).A+"",children:"query_global_state"})}),(0,t.jsx)(n.td,{children:"Unchanged"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(53169).A+"",children:"state_get_account_info"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(35095).A+"",children:"state_get_account_info"})}),(0,t.jsx)(n.td,{children:"Unchanged"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(32223).A+"",children:"state_get_auction_info"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(65641).A+"",children:"state_get_auction_info"})}),(0,t.jsx)(n.td,{children:"Unchanged"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(85223).A+"",children:"state_get_balance"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(40901).A+"",children:"state_get_balance"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"./jsonrpc-comp/state_get_balance",children:"Balance now reflects all active holds"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(43925).A+"",children:"state_get_dictionary_item"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(12859).A+"",children:"state_get_dictionary_item"})}),(0,t.jsx)(n.td,{children:"Unchanged"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(77390).A+"",children:"state_get_item"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(3620).A+"",children:"state_get_entity"})}),(0,t.jsx)(n.td,{children:"Renamed"})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"The major changes in the JSON-RPC between v1.5.6 and v2.0.0 are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar",children:"casper-sidecar"})," is now responsible for serving the JSON-RPC API."]}),"\n",(0,t.jsx)(n.li,{children:"The sidecar may also expose the Server Side Events API, this is of some relevance to developers relying upon the Casper Event Standard (CES)."}),"\n",(0,t.jsx)(n.li,{children:"Deploys are now called Transactions as per the industry norm.  There are differences in the representation of these data structures."}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},92247:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/account_put_deploy-081b092f2252c775d0990bbed6ecc03f.json"},9962:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/chain_get_block-6c6b52bc7f81ee04c84942a243ad25b8.json"},56061:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/chain_get_block_transfers-726c41bbce7df0de8421e99d61123543.json"},22765:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/chain_get_era_info_by_switch_block-f5e7584f6f938e4dbf3fe786499a040f.json"},76018:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/chain_get_era_summary-ba632091d7d95db795f5aeb87d446f0f.json"},65260:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/chain_get_state_root_hash-64d2218e93ac0dd56e85156cc61f6d76.json"},79232:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/info_get_chainspec-a2590f1d58e097012d30493d4b2973e2.json"},84149:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/info_get_deploy-9ae7fd73dc5a4548f6cc28eac97e0802.json"},1691:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/info_get_peers-f1777e239399f26291ad2ebbb0024dc3.json"},79980:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/info_get_status-66ab82fbb3d38fea8eff2d1f5e4a3598.json"},59710:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/info_get_validator_changes-b00769a67f985205e32738814b022f40.json"},117:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/query_balance-6b90fa90d12eee598b13ee2175cee818.json"},42626:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/query_global_state-31b6d9cd39f57fb5d32de59303281d5a.json"},25073:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/schema-ce788c9798c931d17975612c4bf7fab4.json"},53169:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/state_get_account_info-42a61e384f11c6751479673265b3857e.json"},32223:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/state_get_auction_info-194e6b4be0348ba69b976fa0340cd8b0.json"},85223:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/state_get_balance-89969de7e576fcd381c16bc9b525c6ad.json"},43925:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/state_get_dictionary_item-0a5483879aaa2ff7115b7b6301e64753.json"},77390:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/state_get_item-22eec97e9fd3809278121d4c349f15ed.json"},36334:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/account_put_transaction-90596df6489be2fae3dea672104a6bf4.json"},15904:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/chain_get_block-a686366f13d40575411e9e3d95ddfa01.json"},1687:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/chain_get_block_transfers-12dd68fe039c1c780a863727aa5461a5.json"},81199:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/chain_get_era_info_by_switch_block-c8a38f3bdab70cc09b82ae2dc20a4491.json"},62032:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/chain_get_era_summary-77a788200a987270c2a209b74eae3ca4.json"},97886:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/chain_get_state_root_hash-ce0a003c5be1772a64f8690737c68264.json"},47178:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/BlockHash-ea314c5144577bfaf55859d28b24e709.json"},32198:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/info_get_chainspec-aeb5e86b074b1dfcffbaf5b6c51b78ea.json"},3497:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/info_get_peers-096696106a51e69e2d690b211ef6ac6c.json"},86446:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/info_get_status-99eb6601085ebc75bf594671573c2a8d.json"},7048:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/info_get_transaction-bd976a13abc1f6ad800002c8f3003aac.json"},93156:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/info_get_validator_changes-639573f3e80bb83ae895b0a1c20ee08b.json"},24683:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/query_balance-75336a68fcc25c129f91052374122c2f.json"},15158:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/query_balance_details-a9deb8d8e6bd4c6cb90f1f2ae794f041.json"},12492:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/query_global_state-265854023f6ba7c399d2c53d7013ae8d.json"},74631:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/schema-2bf2cc9f93aa2c19bf469029bc0861a1.json"},35095:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/state_get_account_info-d1c72520af04c4febf5d288bc9e4543a.json"},65641:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/state_get_auction_info-c6d1d64be6cd6fc279b4626243972c86.json"},40901:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/state_get_balance-5178b5ec834d879eb5086c0bd2a63def.json"},12859:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/state_get_dictionary_item-a7acfd63494851cd67797ac5bf215462.json"},3620:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/state_get_entity-e99cad9ae85a8a5c52334a96f68d7c31.json"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var t=s(96540);const a={},r=t.createContext(a);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);