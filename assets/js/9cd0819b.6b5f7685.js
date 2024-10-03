"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[30247],{92367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=t(74848),s=t(28453);const a={title:"Recovery"},o="Recovering from Validator Eviction",c={id:"operators/becoming-a-validator/recovering",title:"Recovery",description:"This topic discusses the steps a validator needs to take if it is evicted from the validator set:",source:"@site/docs/operators/becoming-a-validator/recovering.md",sourceDirName:"operators/becoming-a-validator",slug:"/operators/becoming-a-validator/recovering",permalink:"/operators/becoming-a-validator/recovering",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1727970104e3,frontMatter:{title:"Recovery"},sidebar:"operators",previous:{title:"Unbonding",permalink:"/operators/becoming-a-validator/unbonding"},next:{title:"Inactive and Faulty Nodes",permalink:"/operators/becoming-a-validator/inactive-vs-faulty"}},r={},d=[{value:"Detecting the Eviction",id:"detecting-the-eviction",level:2},{value:"Detection using CSPR.live",id:"detection-using-csprlive",level:3},{value:"Detection using the Casper Client",id:"detection-using-the-casper-client",level:3},{value:"Correcting any Underlying Node Issues",id:"correcting-any-underlying-node-issues",level:2},{value:"Activating the Bid",id:"activating-the-bid",level:2},{value:"Method 1: Activating the Bid with the System Auction Contract",id:"activating-system-auction",level:3},{value:"Method 2: Activating the Bid with Compiled Wasm",id:"activating-compiled-wasm",level:3},{value:"Checking the Bid Activation",id:"checking-the-bid-activation",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"recovering-from-validator-eviction",children:"Recovering from Validator Eviction"})}),"\n",(0,i.jsx)(n.p,{children:"This topic discusses the steps a validator needs to take if it is evicted from the validator set:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Detecting the eviction"}),"\n",(0,i.jsx)(n.li,{children:"Correcting any underlying node issues"}),"\n",(0,i.jsx)(n.li,{children:"Re-building the contracts for bonding"}),"\n",(0,i.jsx)(n.li,{children:"Activating the bid"}),"\n",(0,i.jsx)(n.li,{children:"Checking the bid"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/operators/becoming-a-validator/inactive-vs-faulty",children:"Inactive vs. Faulty Validator Nodes"})," topic explains why a node would be evicted."]}),"\n",(0,i.jsx)(n.h2,{id:"detecting-the-eviction",children:"Detecting the Eviction"}),"\n",(0,i.jsx)(n.p,{children:"The validator selection occurs at the end of an Era. Due to the bonding delay, this determines the Validators for the Era after the Era is about to start. When a validating node does not participate in consensus for some time, it will be marked invalid and evicted at the end of the next Era."}),"\n",(0,i.jsx)(n.p,{children:"For example, if we are in Era 100 and your node is invalid, your node will be marked for eviction to be removed at the start of Era 102. This is due to the bonding delay of 1 Era."}),"\n",(0,i.jsx)(n.h3,{id:"detection-using-csprlive",children:"Detection using CSPR.live"}),"\n",(0,i.jsxs)(n.p,{children:["If you were a previous validator and still exist on the ",(0,i.jsx)(n.a,{href:"https://cspr.live/validators-auction",children:"Validators Auction"})," tab but not in ",(0,i.jsx)(n.a,{href:"https://cspr.live/validators",children:"Validators"}),", you may have been evicted or outbid."]}),"\n",(0,i.jsx)(n.h3,{id:"detection-using-the-casper-client",children:"Detection using the Casper Client"}),"\n",(0,i.jsxs)(n.p,{children:["All auction information is returned with the ",(0,i.jsx)(n.code,{children:"casper-client get-auction-info"})," command. It would help if you filtered this down to your public key."]}),"\n",(0,i.jsxs)(n.p,{children:["You can replace the ",(0,i.jsx)(n.code,{children:"public_key"})," with your public key manually and run this command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"casper-client get-auction-info | jq '.result.auction_state.bids[] | select( .public_key == \"<public_key>\")'\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or, if you set up the node as described in this documentation, you can run another command that will automatically put in your public key:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"casper-client get-auction-info | jq --arg pk \"$(cat /etc/casper/validator_keys/public_key_hex)\" '.result.auction_state.bids[] | select( (.public_key | ascii_downcase) == ($pk | ascii_downcase) )'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You know you were evicted if the ",(0,i.jsx)(n.code,{children:"get-auction-info"})," command returned your bid showing an ",(0,i.jsx)(n.strong,{children:"inactive"})," field. See the ",(0,i.jsx)(n.a,{href:"/operators/becoming-a-validator/inactive-vs-faulty",children:"Inactive vs. Faulty Validator Nodes"})," page for more information."]}),"\n",(0,i.jsxs)(n.p,{children:["If you receive a ",(0,i.jsx)(n.code,{children:"parse error: Invalid numeric literal at"}),", this usually means that your RPC port is not up yet. Get your node in sync, and the RPC will come up. This should be working before you try to recover. Try running the following command to check the status of your RPC port:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"casper-client get-auction-info\n"})}),"\n",(0,i.jsx)(n.h2,{id:"correcting-any-underlying-node-issues",children:"Correcting any Underlying Node Issues"}),"\n",(0,i.jsx)(n.p,{children:"Before fixing the eviction, you need to correct the problem that caused your node to be evicted. Stage missed upgrades, correct any node issues, and get your node in sync."}),"\n",(0,i.jsxs)(n.p,{children:["To check if your node is in sync, compare the current block height at ",(0,i.jsx)(n.a,{href:"https://cspr.live/",children:"https://cspr.live/"})," with the height from your node with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -s localhost:8888/status | jq .last_added_block_info\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you cannot figure out the issue, ask for help in the ",(0,i.jsx)(n.em,{children:"node-tech-support"})," channel on ",(0,i.jsx)(n.a,{href:"https://discord.com/invite/casperblockchain",children:"Discord"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"activating-the-bid",children:"Activating the Bid"}),"\n",(0,i.jsxs)(n.p,{children:["Once your node is in sync and ready to validate again, you must activate your invalid bid. There are two ways to reactivate your bid. The recommended and cheaper method is to call the ",(0,i.jsx)(n.code,{children:"activate_bid"})," entry point from the system auction contract. The second method involves building the ",(0,i.jsx)(n.code,{children:"activate_bid.wasm"})," contract as explained in ",(0,i.jsx)(n.a,{href:"/operators/setup/joining#step-3-build-contracts",children:"Building the Required Contracts"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"We recommend testing the following steps on the official Testnet before performing them in a live environment like the Casper Mainnet."}),"\n",(0,i.jsx)(n.h3,{id:"activating-system-auction",children:"Method 1: Activating the Bid with the System Auction Contract"}),"\n",(0,i.jsxs)(n.p,{children:["This method calls the existing ",(0,i.jsx)(n.code,{children:"activate_bid"})," entry point from the system auction contract. Using this method, you do not need to build any contracts, reducing costs and complexity."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-hash <SESSION_HASH> \\\n--session-entry-point activate_bid \\\n--session-arg \"validator_public_key:public_key='$(cat /etc/casper/validator_keys/public_key_hex)'\"\n"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the Deploy"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,i.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,i.jsx)(n.em,{children:"casper-test"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"payment-amount"})," - The payment for the Deploy in motes. You must check the network's chainspec. For example, this entry point call needs 10,000 motes for node version ",(0,i.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml",children:"1.5.1"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"session-hash"})," - Hex-encoded hash of the stored auction contract, which depends on the network you are using. For Casper's Mainnet and Testnet, the hashes are:"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Testnet"}),": ",(0,i.jsx)(n.code,{children:"hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Mainnet"}),": ",(0,i.jsx)(n.code,{children:"hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea"})]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"session-entry-point"})," - Name of the entry point that will be used when calling the system auction contract. In this case, it is ",(0,i.jsx)(n.code,{children:"activate_bid"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"activate_bid"})," entry point expects one argument:"]}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"validator_public_key"}),": The hexadecimal public key of the validator reactivating its bid. ",(0,i.jsx)(n.strong,{children:"This key must match the secret key that signs the bid activation request"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The command will return a deploy hash, which is needed to verify the deploy's processing results. Refer to the ",(0,i.jsx)(n.a,{href:"/resources/tutorials/beginner/querying-network#querying-deploys",children:"Deploy Status"})," section for more details."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Calling the ",(0,i.jsx)(n.code,{children:"activate_bid"})," entry point on the auction contract has a fixed cost of 10,000 motes."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.p,{children:"This example uses the Casper Testnet to reactivate a bid:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client put-deploy \\\n--node-address http://65.21.75.254:7777  \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name casper-test \\\n--payment-amount 10000 \\\n--session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n--session-entry-point activate_bid \\\n--session-arg \"validator_public_key:public_key='$(cat /etc/casper/validator_keys/public_key_hex)'\"\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Next, ",(0,i.jsx)(n.a,{href:"#checking-the-bid-activation",children:"check the bid activation"})," status."]}),"\n",(0,i.jsx)(n.h3,{id:"activating-compiled-wasm",children:"Method 2: Activating the Bid with Compiled Wasm"}),"\n",(0,i.jsxs)(n.p,{children:["The second method to rejoin the network is to reactivate your bid using the ",(0,i.jsx)(n.code,{children:"activate_bid.wasm"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo -u casper casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-path "$HOME/casper-node/target/wasm32-unknown-unknown/release/activate_bid.wasm" \\\n--session-arg "validator_public_key:public_key=\'$(cat /etc/casper/validator_keys/public_key_hex)\'"\n'})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the Deploy"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,i.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,i.jsx)(n.em,{children:"casper-test"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"payment-amount"})," - The payment for the Deploy in motes"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"session-path"})," - The path to the compiled Wasm on your computer"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"activate_bid.wasm"})," expects one argument:"]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"validator_public_key"}),": The hexadecimal public key of the validator reactivating its bid. ",(0,i.jsx)(n.strong,{children:"This key must match the secret key that signs the bid activation request"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The command will return a deploy hash, which is needed to verify the deploy's processing results."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["As described above, this method is much more expensive than calling the ",(0,i.jsx)(n.code,{children:"activate_bid"})," entry point."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsxs)(n.p,{children:["Here is an example that reactivates a bid using the ",(0,i.jsx)(n.code,{children:"activate_bid.wasm"}),". You must modify the payment and other values in the deploy based on your environment and the network's ",(0,i.jsx)(n.a,{href:"/concepts/glossary/C#chainspec",children:"chainspec.toml"}),". For example, if you use the ",(0,i.jsx)(n.code,{children:"activate_bid.wasm"})," on a network with node version ",(0,i.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.4.9/resources/production/chainspec.toml",children:"1.4.9"}),", you will require a balance of at least 5 CSPR for this contract."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo -u casper casper-client put-deploy \\\n--node-address http://65.21.75.254:7777  \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name casper-test \\\n--payment-amount 5000000000 \\\n--session-path "$HOME/casper-node/target/wasm32-unknown-unknown/release/activate_bid.wasm" \\\n--session-arg "validator_public_key:public_key=\'$(cat /etc/casper/validator_keys/public_key_hex)\'"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Check that the deploy was successful with the ",(0,i.jsx)(n.code,{children:"casper-client get-deploy <deploy_hash>"})," or by searching for the deploy hash on ",(0,i.jsx)(n.a,{href:"https://cspr.live/",children:"https://cspr.live/"}),". Also, check the bid activation status as shown below."]}),"\n",(0,i.jsx)(n.h2,{id:"checking-the-bid-activation",children:"Checking the Bid Activation"}),"\n",(0,i.jsxs)(n.p,{children:["Once your deploy processes, you can ",(0,i.jsx)(n.a,{href:"/operators/becoming-a-validator/recovering#detecting-the-eviction-using-the-casper-client",children:"check your bid"})," again. You should now see ",(0,i.jsx)(n.code,{children:'"inactive": false'})," in the output."]}),"\n",(0,i.jsxs)(n.p,{children:["If you wait until the next Era starts, you should also see your public key as a future validator on the ",(0,i.jsx)(n.a,{href:"https://cspr.live/validators",children:"Validators"})," tab."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);