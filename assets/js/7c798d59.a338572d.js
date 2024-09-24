"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[91535],{51753:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var t=s(74848),r=s(28453);const a={},i="Transferring Tokens using a Multi-Sig Deploy",d={id:"developers/cli/transfers/multisig-deploy-transfer",title:"Transferring Tokens using a Multi-Sig Deploy",description:"This page presents a method of transferring tokens via a deploy file using multiple signatures. This method is recommended when implementing multi-signature transfers between purses on a Casper network.",source:"@site/docs/developers/cli/transfers/multisig-deploy-transfer.md",sourceDirName:"developers/cli/transfers",slug:"/developers/cli/transfers/multisig-deploy-transfer",permalink:"/developers/cli/transfers/multisig-deploy-transfer",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1725898285e3,frontMatter:{},sidebar:"developers",previous:{title:"Direct Token Transfer",permalink:"/developers/cli/transfers/direct-token-transfer"},next:{title:"Verifying a Transfer",permalink:"/developers/cli/transfers/verify-transfer"}},c={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Token Transfer Workflow",id:"token-transfer-workflow",level:2},{value:"Creating the transfer",id:"creating-the-transfer",level:3},{value:"Signing the transfer",id:"signing-the-transfer",level:3},{value:"Sending the deploy",id:"sending-the-transaction",level:3},{value:"Verifying the transfer",id:"verifying-the-transfer",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mdxadmonitiontitle:"mdxadmonitiontitle",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"transferring-tokens-using-a-multi-sig-deploy",children:"Transferring Tokens using a Multi-Sig Deploy"})}),"\n",(0,t.jsx)(n.p,{children:"This page presents a method of transferring tokens via a deploy file using multiple signatures. This method is recommended when implementing multi-signature transfers between purses on a Casper network."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"make-transfer"})," command allows you to create a transfer and save the output to a file. You can then have the transfer signed by other parties using the ",(0,t.jsx)(n.code,{children:"sign-deploy"})," command and send it to the network for execution using the ",(0,t.jsx)(n.code,{children:"send-deploy"})," command."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"You must ensure the following prerequisites are met."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Set up all the prerequisites listed ",(0,t.jsx)(n.a,{href:"/developers/prerequisites",children:"here"}),", including:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A funded ",(0,t.jsx)(n.a,{href:"/developers/prerequisites#setting-up-an-account",children:"Account"})," on Testnet or Mainnet"]}),"\n",(0,t.jsxs)(n.li,{children:["A valid ",(0,t.jsx)(n.em,{children:"node address"})," from the ",(0,t.jsx)(n.a,{href:"https://testnet.cspr.live/tools/peers",children:"Testnet peers"})," or ",(0,t.jsx)(n.a,{href:"https://cspr.live/tools/peers",children:"Mainnet peers"})]}),"\n",(0,t.jsxs)(n.li,{children:["The Casper ",(0,t.jsx)(n.a,{href:"/developers/prerequisites#install-casper-client",children:"command-line client"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Set up the source account for multi-signature deploys, as outlined in the ",(0,t.jsx)(n.a,{href:"/resources/tutorials/advanced/two-party-multi-sig",children:"Two-Party Multi-Signature Deploys"})," workflow"]}),"\n",(0,t.jsxs)(n.li,{children:["Get the path of the source account's ",(0,t.jsx)(n.em,{children:"secret key"})," file"]}),"\n",(0,t.jsxs)(n.li,{children:["Get the target account's ",(0,t.jsx)(n.em,{children:"public key"})," in hex format"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"token-transfer-workflow",children:"Token Transfer Workflow"}),"\n",(0,t.jsx)(n.p,{children:"The high-level flow to transfer tokens using the Casper CLI client and a deploy file is described in the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"make-transfer"})," command creates and signs a transfer, saving the output to a file"]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"sign-deploy"})," command adds additional signatures for a multi-signature transfer"]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"send-deploy"})," command sends the deploy containing the transfer to the network"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Deployment flow",src:s(13870).A+"",width:"802",height:"274"})}),"\n",(0,t.jsx)(n.h3,{id:"creating-the-transfer",children:"Creating the transfer"}),"\n",(0,t.jsxs)(n.p,{children:["This section explains the ",(0,t.jsx)(n.code,{children:"make-transfer"})," command using an example you can try on the Testnet. For this example, we are transferring 2,500,000,000 motes from the source account (with the ",(0,t.jsx)(n.code,{children:"secret_key.pem"})," file) to a target account. To use this example on the Mainnet, the ",(0,t.jsx)(n.em,{children:"chain-name"})," would be ",(0,t.jsx)(n.code,{children:"casper"})," instead of ",(0,t.jsx)(n.code,{children:"casper-test"}),". Note that we are saving the output of the ",(0,t.jsx)(n.code,{children:"make-transfer"})," command in a ",(0,t.jsx)(n.code,{children:"transfer.deploy"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client make-transfer --amount 2500000000 \\\n--secret-key [PATH]/secret_key.pem \\\n--chain-name casper-test \\\n--target-account [PUBLIC_KEY_HEX] \\\n--transfer-id [ID] \\\n--payment-amount 100000000 \\\n--output transfer.deploy\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The following table explains the parameters used in the ",(0,t.jsx)(n.code,{children:"make-transfer"})," command."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"amount"}),(0,t.jsx)(n.td,{children:"The number of motes you wish to transfer (1 CSPR = 1,000,000,000 motes)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"secret-key"}),(0,t.jsx)(n.td,{children:"The path of the secret key file for the source account"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"chain-name"}),(0,t.jsxs)(n.td,{children:["The name of the chain, to avoid the deploy from being accidentally or maliciously included in a different chain ",(0,t.jsxs)(n.ul,{children:[(0,t.jsxs)(n.li,{children:["For Testnet use ",(0,t.jsx)(n.strong,{children:"casper-test"})]}),(0,t.jsxs)(n.li,{children:["For Mainnet use ",(0,t.jsx)(n.strong,{children:"casper"})]})]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"target-account"}),(0,t.jsx)(n.td,{children:"Hex-encoded public key of the target account from which the main purse will be used"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"transfer-id"}),(0,t.jsx)(n.td,{children:"A user-defined identifier permanently associated with the transfer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"payment-amount"}),(0,t.jsxs)(n.td,{children:["The payment for the transfer in motes. The payment amount varies based on the deploy and network ",(0,t.jsx)(n.a,{href:"/concepts/glossary/C#chainspec",children:"chainspec"}),". For Testnet node version ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml",children:"1.5.1"}),", wasmless transfers cost 10^8 motes"]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["In the output, you will see a section named ",(0,t.jsx)(n.strong,{children:"approvals"}),". This is where a signature from the source account is added to the deploy."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client make-transfer --amount 2500000000 \\\n--secret-key ~/KEYS/multi-sig/keys/default_secret_key.pem \\\n--chain-name casper-test \\\n--target-account 0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf \\\n--transfer-id 1 \\\n--payment-amount 100000000 \\\n--output transfer.deploy\n"})}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Sample output of the make-transfer command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "hash": "88c49fa9108485397a330f294914a6c2d614c581fbe0a31de1a954baad6d709b",\n  "header": {\n    "account": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986",\n    "timestamp": "2023-10-12T19:14:22.080Z",\n    "ttl": "30m",\n    "gas_price": 1,\n    "body_hash": "1bb7436d4703816b5cbeef245dd83c0520f1c7173cdf609c664a29487cc5de1c",\n    "dependencies": [],\n    "chain_name": "casper-test"\n  },\n  "payment": {\n    "ModuleBytes": {\n      "module_bytes": "",\n      "args": [\n        [\n          "amount",\n          {\n            "cl_type": "U512",\n            "bytes": "0400e1f505",\n            "parsed": "100000000"\n          }\n        ]\n      ]\n    }\n  },\n  "session": {\n    "Transfer": {\n      "args": [\n        [\n          "amount",\n          {\n            "cl_type": "U512",\n            "bytes": "0400f90295",\n            "parsed": "2500000000"\n          }\n        ],\n        [\n          "target",\n          {\n            "cl_type": "PublicKey",\n            "bytes": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n            "parsed": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf"\n          }\n        ],\n        [\n          "id",\n          {\n            "cl_type": {\n              "Option": "U64"\n            },\n            "bytes": "010100000000000000",\n            "parsed": 1\n          }\n        ]\n      ]\n    }\n  },\n  "approvals": [\n    {\n      "signer": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986",\n      "signature": "015e0db50b174f3627e0e27cb503f0836b30bd0e0f2c4b989366b0df57500a1cb2b0945408c938bc3c33c40dab59a9c6af6f4e01e474330cd27262bfc87680030e"\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"signing-the-transfer",children:"Signing the transfer"}),"\n",(0,t.jsxs)(n.p,{children:["Once the deploy file is created, you can sign the deploy using other designated accounts. For this example, we are signing the deploy with a second secret key and saving the output in a ",(0,t.jsx)(n.code,{children:"transfer2.deploy"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client sign-deploy \\\n--input transfer.deploy \\\n--secret-key [PATH]/another_secret_key.pem \\\n--output transfer2.deploy\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"input"}),(0,t.jsx)(n.td,{children:"The path of the deploy file, which needs to be signed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"secret-key"}),(0,t.jsx)(n.td,{children:"The path of the secret key file used to sign the deploy"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"output"}),(0,t.jsx)(n.td,{children:"The path of the output file used to save the deploy with multiple signatures"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client sign-deploy \\\n--input transfer.deploy \\\n--secret-key ~/KEYS/multi-sig/keys/user_1_secret_key.pem \\\n--output transfer2.deploy\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Towards the end of the following output, you can observe that there is an ",(0,t.jsx)(n.strong,{children:"approvals"})," section, which has two signatures, one from the account initiating the transfer and the second from the account used to sign the deploy."]}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Sample output saved in the transfer2.deploy file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "hash": "88c49fa9108485397a330f294914a6c2d614c581fbe0a31de1a954baad6d709b",\n  "header": {\n    "account": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986",\n    "timestamp": "2023-10-12T19:14:22.080Z",\n    "ttl": "30m",\n    "gas_price": 1,\n    "body_hash": "1bb7436d4703816b5cbeef245dd83c0520f1c7173cdf609c664a29487cc5de1c",\n    "dependencies": [],\n    "chain_name": "casper-test"\n  },\n  "payment": {\n    "ModuleBytes": {\n      "module_bytes": "",\n      "args": [\n        [\n          "amount",\n          {\n            "cl_type": "U512",\n            "bytes": "0400e1f505",\n            "parsed": "100000000"\n          }\n        ]\n      ]\n    }\n  },\n  "session": {\n    "Transfer": {\n      "args": [\n        [\n          "amount",\n          {\n            "cl_type": "U512",\n            "bytes": "0400f90295",\n            "parsed": "2500000000"\n          }\n        ],\n        [\n          "target",\n          {\n            "cl_type": "PublicKey",\n            "bytes": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n            "parsed": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf"\n          }\n        ],\n        [\n          "id",\n          {\n            "cl_type": {\n              "Option": "U64"\n            },\n            "bytes": "010100000000000000",\n            "parsed": 1\n          }\n        ]\n      ]\n    }\n  },\n  "approvals": [\n    {\n      "signer": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986",\n      "signature": "015e0db50b174f3627e0e27cb503f0836b30bd0e0f2c4b989366b0df57500a1cb2b0945408c938bc3c33c40dab59a9c6af6f4e01e474330cd27262bfc87680030e"\n    },\n    {\n      "signer": "01e3d3392c2e0b943abe709b25de5c353e5e1e9d95c7a76e3dd343d8aa1aa08d51",\n      "signature": "017793ad52d27393b1aa8ff5bb9bdbcb48708910d6cdabd9a89b44690ca174edf8924aad340bf901ac343391cb4cba7cf4db07390372f28ecf471fd522e0b63803"\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sending-the-transaction",children:"Sending the deploy"}),"\n",(0,t.jsxs)(n.p,{children:["The next step is to send the deploy for processing on the network. As described in the ",(0,t.jsx)(n.a,{href:"#prerequisites",children:"Prerequisites"})," section, you need to get an active node address from the corresponding network to complete this task. The following example uses the node ",(0,t.jsx)(n.code,{children:"https://rpc.testnet.casperlabs.io/"})," from the Testnet."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client send-deploy \\\n--input transfer2.deploy \\\n--node-address https://rpc.testnet.casperlabs.io/ \n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"input"}),(0,t.jsx)(n.td,{children:"The path of the deploy file, which is used as the input"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"node-address"}),(0,t.jsx)(n.td,{children:"The Hostname or IP and port of the node"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Make a note of the ",(0,t.jsx)(n.em,{children:"deploy_hash"})," from the ",(0,t.jsx)(n.code,{children:"send-deploy"})," command output to verify the status of the deploy."]}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Successful output of the send-deploy command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": -818883417884028030,\n  "result": {\n    "api_version": "1.5.3",\n    "deploy_hash": "88c49fa9108485397a330f294914a6c2d614c581fbe0a31de1a954baad6d709b"\n  }\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you encounter an account authorization error, you ",(0,t.jsx)(n.strong,{children:"must set up the source account to allow multi-signature deploys"})," using session code. The ",(0,t.jsx)(n.a,{href:"/resources/tutorials/advanced/two-party-multi-sig",children:"Two-Party Multi-Signature Deploys"})," workflow is an example of how to accomplish this."]})}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Example of an account authorization error"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "code": -32008,\n  "message": "deploy parameter failure: account authorization invalid at prestate_hash: 5f0392de8ac3512a48a110acfc5bc10d4a6a07109b350ae14cbec0428656c8ac"\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"verifying-the-transfer",children:"Verifying the transfer"}),"\n",(0,t.jsxs)(n.p,{children:["To verify the transfer status, see ",(0,t.jsx)(n.a,{href:"/developers/cli/transfers/verify-transfer",children:"Verifying a Transfer"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxadmonitiontitle,{}),(0,t.jsxs)(n.p,{children:["You can also verify if the transfer was successful by checking your account balance using a ",(0,t.jsx)(n.a,{href:"/users/block-explorer",children:"block explorer"}),"."]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},13870:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/deploy-flow-a20851cf502515fa17e5f53f90bf3982.png"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var t=s(96540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);