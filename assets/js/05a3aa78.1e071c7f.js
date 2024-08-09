"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[885],{5773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(4848),o=n(8453);const r={},a="Casper-Client Commands",i={id:"resources/beginner/counter-testnet/commands",title:"Casper-Client Commands",description:"State Root Hash",source:"@site/docs/resources/beginner/counter-testnet/commands.md",sourceDirName:"resources/beginner/counter-testnet",slug:"/resources/beginner/counter-testnet/commands",permalink:"/docs-redux/resources/beginner/counter-testnet/commands",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"resources",previous:{title:"Overview",permalink:"/docs-redux/resources/beginner/counter-testnet/overview"},next:{title:"Tutorial Walkthrough",permalink:"/docs-redux/resources/beginner/counter-testnet/walkthrough"}},c={},l=[{value:"State Root Hash",id:"state-root-hash",level:2},{value:"Querying Network State",id:"querying-network-state",level:2},{value:"Put Deploys (onto the Chain)",id:"put-deploys-onto-the-chain",level:2},{value:"Deploy via a compiled Wasm binary",id:"deploy-via-a-compiled-wasm-binary",level:3},{value:"Deploy via a named key already on the blockchain",id:"deploy-via-a-named-key-already-on-the-blockchain",level:3},{value:"Get Deploys (from the Chain)",id:"get-deploys-from-the-chain",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"casper-client-commands",children:"Casper-Client Commands"}),"\n",(0,s.jsx)(t.h2,{id:"state-root-hash",children:"State Root Hash"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]\n"})}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"casper-client get-state-root-hash --node-address http://[IP]:7777\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can find a list of Testnet IP addresses at ",(0,s.jsx)(t.a,{href:"https://testnet.cspr.live/tools/peers",children:"CSPR live"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The first command to cover is the ",(0,s.jsx)(t.em,{children:"get-state-root-hash"})," command from the ",(0,s.jsx)(t.em,{children:"casper-client"})," tool. The state root hash is an identifier of the current network state. It is similar to a Git commit ID for commit history. It gives a snapshot of the blockchain state at a moment in time. For this tutorial, it will be used to query the network state after sending deploys."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"After sending deploys to the network, you must get the new state root hash to see the changes reflected. Otherwise, you will be looking at events in the past."})}),"\n",(0,s.jsx)(t.h2,{id:"querying-network-state",children:"Querying Network State"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'casper-client query-global-state \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] \\\n    -q "[SESSION_NAME]/[SESSION_NAMED_KEY]" (OPTIONAL)\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This command allows you to query the state of a Casper network at a given moment in time, which is specified by the ",(0,s.jsx)(t.em,{children:"state-root-hash"})," described above."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.em,{children:"node-address"})," is the server on the network."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.em,{children:"key"})," is the identifier for the query. It must be either the account public key, account hash, contract address hash, transfer hash, or deploy hash. The tutorial demonstrates two of these key types."]}),"\n",(0,s.jsxs)(t.li,{children:["The optional query path argument (",(0,s.jsx)(t.em,{children:"q"}),") allows you to drill into the specifics of a query concerning the key."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"put-deploys-onto-the-chain",children:"Put Deploys (onto the Chain)"}),"\n",(0,s.jsx)(t.h3,{id:"deploy-via-a-compiled-wasm-binary",children:"Deploy via a compiled Wasm binary"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-path [CONTRACT_PATH]/counter-v1.wasm\n"})}),"\n",(0,s.jsx)(t.p,{children:"This command creates a deploy and sends it to the network for execution. In this first usage of the command,"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.em,{children:"session-path"})," points to a compiled Wasm contract."]}),"\n",(0,s.jsxs)(t.li,{children:["This contract is then installed on the network specified by the ",(0,s.jsx)(t.em,{children:"chain-name"}),'. The Testnet is "casper-test" but this is configurable.']}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.em,{children:"payment-amount"})," is in units of motes (1 nano-CSPR) and is required to pay the transaction fee for the deploy. If it is too small, the transaction will get denied due to insufficient funds."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"deploy-via-a-named-key-already-on-the-blockchain",children:"Deploy via a named key already on the blockchain"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-name "counter" \\\n    --session-entry-point "counter_inc"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This second usage of ",(0,s.jsx)(t.em,{children:"put-deploy"})," does not place a new contract on the chain, but it allows you to call entry points (functions) defined in smart contracts."]}),"\n",(0,s.jsxs)(t.p,{children:['This examples uses "counter" and "counter_inc" from the ',(0,s.jsx)(t.a,{href:"/docs-redux/resources/beginner/counter-testnet/walkthrough",children:"tutorial walkthrough"}),". However, these will be different when you write your contracts."]}),"\n",(0,s.jsx)(t.h2,{id:"get-deploys-from-the-chain",children:"Get Deploys (from the Chain)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"casper-client get-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    [DEPLOY_HASH]\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"get-deploy"})," command is complementary to the ",(0,s.jsx)(t.em,{children:"put-deploy"})," command. It retrieves a deploy from the network and allows you to check the status of the deploy. The ",(0,s.jsx)(t.em,{children:"DEPLOY_HASH"})," is the identifier to a specific deploy and is returned by the ",(0,s.jsx)(t.em,{children:"put-deploy"})," command."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(6540);const o={},r=s.createContext(o);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);