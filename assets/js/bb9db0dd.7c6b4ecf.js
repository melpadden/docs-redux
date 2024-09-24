"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[24198],{72876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(74848),o=t(28453);const i={title:"Local Network Testing"},r="Testing Smart Contracts with NCTL",c={id:"developers/dapps/nctl-test",title:"Local Network Testing",description:"NCTL effectively simulates a live Casper network. The process for sending a Deploy to an NCTL-based network is therefore similar to doing so on a live network.",source:"@site/versioned_docs/version-1.5.X/developers/dapps/nctl-test.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/nctl-test",permalink:"/docs-redux/1.5.X/developers/dapps/nctl-test",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{title:"Local Network Testing"},sidebar:"developers",previous:{title:"Local Network Setup",permalink:"/docs-redux/1.5.X/developers/dapps/setup-nctl"},next:{title:"Monitoring and Consuming Events",permalink:"/docs-redux/1.5.X/developers/dapps/monitor-and-consume-events"}},a={},d=[{value:"Getting Started with NCTL",id:"getting-started-with-nctl",level:2},{value:"NCTL Verification Prior to Testing",id:"nctl-verification-prior-to-testing",level:2},{value:"Installing the Smart Contract",id:"installing-the-smart-contract",level:2},{value:"Verifying Deploy Execution",id:"verifying-deploy-execution",level:2},{value:"Interacting with the Installed Contract",id:"interacting-with-the-installed-contract",level:2},{value:"Verifying Correct Contract Behavior",id:"verifying-correct-contract-behavior",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"testing-smart-contracts-with-nctl",children:"Testing Smart Contracts with NCTL"})}),"\n",(0,s.jsxs)(n.p,{children:["NCTL effectively simulates a live Casper network. The process for sending a ",(0,s.jsx)(n.code,{children:"Deploy"})," to an NCTL-based network is therefore similar to doing so on a live network."]}),"\n",(0,s.jsxs)(n.p,{children:["Testing ",(0,s.jsx)(n.code,{children:"Deploys"})," prior to sending them to a Casper network ensures that they operate as intended. When working in an environment that requires payment for execution, errors and inefficiencies quickly add up. To this end, Casper provides several layers of testing to identify and rectify any errors. After ",(0,s.jsx)(n.a,{href:"/docs-redux/1.5.X/developers/writing-onchain-code/simple-contract",children:"writing your smart contract"})," and testing it ",(0,s.jsx)(n.a,{href:"/docs-redux/1.5.X/developers/writing-onchain-code/testing-contracts",children:"using the provided framework"}),", NCTL serves as the next step in the process. While testing is entirely optional, it should be considered a best practice to avoid paying for the execution of faulty code."]}),"\n",(0,s.jsx)(n.h2,{id:"getting-started-with-nctl",children:"Getting Started with NCTL"}),"\n",(0,s.jsxs)(n.p,{children:["Prior to testing a ",(0,s.jsx)(n.code,{children:"Deploy"})," through NCTL, you should have the following steps accomplished:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs-redux/1.5.X/developers/writing-onchain-code/simple-contract",children:"Completed writing a Deploy"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs-redux/1.5.X/developers/writing-onchain-code/testing-contracts",children:"Tested the Deploy"})," using the Casper testing framework"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs-redux/1.5.X/developers/dapps/setup-nctl",children:"Setup NCTL"})," on your system"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"nctl-verification-prior-to-testing",children:"NCTL Verification Prior to Testing"}),"\n",(0,s.jsx)(n.p,{children:"Prior to attempting an NCTL test, you must verify that your local NCTL instance started correctly. Run the following command to view your current node status:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"nctl-status\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You should see five nodes ",(0,s.jsx)(n.code,{children:"RUNNING"})," and five ",(0,s.jsx)(n.code,{children:"STOPPED"}),". Further, verify that the node and user information propagated within the ",(0,s.jsx)(n.em,{children:"casper-node/utils/assets"})," directory. Each node and user should have the associated ",(0,s.jsx)(n.code,{children:"Keys"})," necessary to interact with the network. Run the following command to view first user details:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"nctl-view-user-account user=1\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-the-smart-contract",children:"Installing the Smart Contract"}),"\n",(0,s.jsxs)(n.p,{children:["This document assumes that you setup your NCTL network using the standard settings in a directory called ",(0,s.jsx)(n.em,{children:"/casper/"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You will need the following information to use the ",(0,s.jsx)(n.code,{children:"put-deploy"})," command:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"chain name"}),", in this case ",(0,s.jsx)(n.code,{children:"casper-net-1"}),". This will appear in our example put-deploy as ",(0,s.jsx)(n.code,{children:'--chain-name "casper-net-1"'})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"secret key"})," of the account sending the ",(0,s.jsx)(n.code,{children:"Deploy"}),". For this example, we are using node-1 as the sender. The secret key file can be found at ",(0,s.jsx)(n.em,{children:"casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem"}),". In our example put-deploy, this will appear as ",(0,s.jsx)(n.code,{children:"--secret-key /casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem"}),". If your Deploy is more complex and requires multiple accounts, NCTL also establishes multiple users for testing."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"payment amount"})," in motes, which should be sufficient to avoid an 'Out of Gas' error. The payment amount will appear in our example put-deploy as ",(0,s.jsx)(n.code,{children:"--payment-amount 2500000000"}),". ",(0,s.jsxs)(n.strong,{children:["NCTL tests are not an accurate representation of potential gas costs on a live network. Please see our ",(0,s.jsx)(n.a,{href:"/docs-redux/1.5.X/developers/cli/sending-deploys#a-note-about-gas-price",children:"note about gas prices"}),"."]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"path"})," to your ",(0,s.jsx)(n.code,{children:"Deploy"})," that you wish to send to the NCTL network. This will appear in our example put-deploy as ",(0,s.jsx)(n.code,{children:"--session-path <PATH>"})," and will require you to define the path to your specific ",(0,s.jsx)(n.code,{children:"Deploy"})," Wasm."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"node address"})," for a node on your NCTL network. In this example, we are using the node at ",(0,s.jsx)(n.code,{children:"http://localhost:11101"}),". On the Casper Mainnet or Testnet, nodes will use port ",(0,s.jsx)(n.code,{children:"7777"}),". This will appear in our example put-deploy as ",(0,s.jsx)(n.code,{children:"--node-address http://<HOST>:7777"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The command to send your ",(0,s.jsx)(n.code,{children:"Deploy"})," should look similar to the following code snippet:"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Use of the ",(0,s.jsx)(n.code,{children:"$(get_path_to_client)"})," command assumes that you are operating in an activated NCTL envrionment."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$(get_path_to_client) put-deploy \\\n--chain-name "casper-net-1" \\\n--secret-key /casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \\\n--payment-amount 2500000000 \\\n--session-path <PATH> \\\n--node-address http://localhost:11101\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The response will return something similar to the following information. Note the ",(0,s.jsx)(n.code,{children:"deploy_hash"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "id": 4824893960188648146,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "deploy_hash": "8e6309cc37bc58d8fedc1094ee1bd264a636d39fc0e05b5e1d72d98f7b6faf13"\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"verifying-deploy-execution",children:"Verifying Deploy Execution"}),"\n",(0,s.jsxs)(n.p,{children:["The previous command sent the ",(0,s.jsx)(n.code,{children:"Deploy"})," to the NCTL network, but we recommend verifying deploy execution before continuing. The ",(0,s.jsx)(n.code,{children:"deploy_hash"})," received in the response allows you to query the ",(0,s.jsx)(n.code,{children:"Deploy"}),"'s status."]}),"\n",(0,s.jsxs)(n.p,{children:["To query the ",(0,s.jsx)(n.code,{children:"Deploy"}),"'s status, you will pass both the ",(0,s.jsx)(n.code,{children:"deploy_hash"})," and the same ",(0,s.jsx)(n.code,{children:"node-address"})," from above using the following command. This will return either an error message in the event of failure or the ",(0,s.jsx)(n.code,{children:"Deploy"})," details if it succeeds."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$(get_path_to_client) get-deploy 8e6309cc37bc58d8fedc1094ee1bd264a636d39fc0e05b5e1d72d98f7b6faf13 -n http://localhost:11101\n"})}),"\n",(0,s.jsx)(n.h2,{id:"interacting-with-the-installed-contract",children:"Interacting with the Installed Contract"}),"\n",(0,s.jsxs)(n.p,{children:["Once your NCTL network executes your ",(0,s.jsx)(n.code,{children:"Deploy"}),", you can test the functionality of the installed contract. To do so, you will first need to identify any arguments to pass to the contract, starting with the ",(0,s.jsx)(n.code,{children:"ContractHash"})," itself. This hash identifies the contract and allows you to target the included entry points. As we used the pre-established node-1 account to ",(0,s.jsxs)(n.a,{href:"/docs-redux/1.5.X/developers/cli/sending-deploys",children:["send the ",(0,s.jsx)(n.code,{children:"Deploy"})]}),", we can retrieve the ",(0,s.jsx)(n.code,{children:"ContractHash"})," from the node-1 account information. To do so, we will use the following command with a node address and the ",(0,s.jsx)(n.code,{children:"PublicKey"})," of the node in question."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$(get_path_to_client) get-account-info \\\n--node-address http://localhost:11101 \\\n--public-key /casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/public_key.pem\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This command will return information pertaining to the account, including the ",(0,s.jsx)(n.code,{children:"NamedKeys"}),". The ",(0,s.jsx)(n.code,{children:"ContractHash"})," of the contract to be tested will appear here. The process of calling the contract is similar to that of installing it, as they are both accomplished through sending a ",(0,s.jsx)(n.code,{children:"Deploy"}),". In this instance, you will need the following information:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"node address"}),", entered in this instance using ",(0,s.jsx)(n.code,{children:"--node-address http://localhost:11101"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"chain name"}),", entered in this instance using ",(0,s.jsx)(n.code,{children:'--chain-name "casper-net-1"'})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"payment amount"})," for this ",(0,s.jsx)(n.code,{children:"Deploy"})," in motes, which may need to be adjusted depending on cost and network ",(0,s.jsx)(n.a,{href:"/docs-redux/1.5.X/concepts/glossary/C#chainspec",children:"chainspec"}),". In this instance, we will use ",(0,s.jsx)(n.code,{children:"--payment-amount 500000000"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"session path"}),", defining the location of the Wasm bearing file for the ",(0,s.jsx)(n.code,{children:"Deploy"}),". It appears in our example as ",(0,s.jsx)(n.code,{children:"--session-path <PATH>"})," but you must define the path to your specific file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Any ",(0,s.jsx)(n.strong,{children:"session arguments"})," specific to the contract that you are testing. Multiple instances of ",(0,s.jsx)(n.code,{children:"--session-arg"})," may be used as necessary to provide values to the contract, including the ",(0,s.jsx)(n.code,{children:"ContractHash"})," you acquired above. In the example below, you will see a demonstration of the ",(0,s.jsx)(n.code,{children:"ContractHash"})," as a session argument as ",(0,s.jsx)(n.code,{children:"--session-arg \"contract_key:key='hash-8c13aaeef50ae7f447ee21276965c31cfa45c4ea3abb03d35d078cdd6a40e4a'\""})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$(get_path_to_client) put-deploy \\\n--node-address http://localhost:11101 \\\n--chain-name "casper-net-1" \\\n--payment-amount 500000000 \\\n--session-path <PATH> \\\n--session-arg "contract_key:key=\'hash-8c13aaeef50ae7f447ee21276965c31cfa45c4ea3abb03d35d078cdd6a40e4a\'"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"verifying-correct-contract-behavior",children:"Verifying Correct Contract Behavior"}),"\n",(0,s.jsxs)(n.p,{children:["After calling your installed contract, you can verify that the contract behaved as expected by observing the associated change in ",(0,s.jsx)(n.a,{href:"/docs-redux/1.5.X/developers/cli/installing-contracts#querying-global-state",children:"global state"}),". Depending on how your contract functions, this can have different meanings and results. If we use our donation contract from the ",(0,s.jsx)(n.a,{href:"/docs-redux/1.5.X/developers/writing-onchain-code/simple-contract",children:"basic smart contract tutorial"}),", the NCTL process would have the following flow:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Send a ",(0,s.jsx)(n.code,{children:"Deploy"}),' to install the "Donation" smart contract.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Verify the execution of the ",(0,s.jsx)(n.code,{children:"Deploy"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Interact with the installed contract using an additional ",(0,s.jsx)(n.code,{children:"Deploy"})," that calls one or several of the entry points. For example, calling the ",(0,s.jsx)(n.code,{children:"donate"})," entry point to donate an amount to the fundraising purse."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Verify the associated change in global state. Namely, an increase in the balance of the fundraising purse."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);