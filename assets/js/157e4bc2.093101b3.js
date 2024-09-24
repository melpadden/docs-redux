"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[93632],{84775:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=s(74848),a=s(28453);const i={title:"On-chain Installation",slug:"/resources/tokens/using-casper-client"},c="Installing and Interacting with a CEP-78 Contract using the Rust Casper Client",r={id:"resources/tokens/cep78/using-casper-client",title:"On-chain Installation",description:"This documentation will guide you through the process of installing and interacting with an instance of the CEP-78 enhanced NFT standard contract through Casper's Rust CLI client. The contract code installs an instance of CEP-78 as per session arguments provided at the time of installation. It requires a minimum Rust version of 1.63.0.",source:"@site/docs/resources/tokens/cep78/using-casper-client.md",sourceDirName:"resources/tokens/cep78",slug:"/resources/tokens/using-casper-client",permalink:"/docs-redux/resources/tokens/using-casper-client",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"sczembor",lastUpdatedAt:1724245416e3,frontMatter:{title:"On-chain Installation",slug:"/resources/tokens/using-casper-client"},sidebar:"resources",previous:{title:"CEP-78 Modalities",permalink:"/docs-redux/resources/tokens/cep78/modalities"},next:{title:"Ownership Lookup",permalink:"/docs-redux/resources/tokens/cep78/reverse-lookup"}},o={},d=[{value:"Installing the Contract",id:"installing-the-contract",level:2},{value:"Directly Invoking Entrypoints",id:"directly-invoking-entrypoints",level:2},{value:"Minting an NFT",id:"minting-an-nft",level:2},{value:"Transferring NFTs Between Users",id:"transferring-nfts-between-users",level:2},{value:"Burning an NFT",id:"burning-an-nft",level:2}];function l(e){const n={a:"a",b:"b",code:"code",details:"details",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",summary:"summary",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"installing-and-interacting-with-a-cep-78-contract-using-the-rust-casper-client",children:"Installing and Interacting with a CEP-78 Contract using the Rust Casper Client"})}),"\n",(0,t.jsxs)(n.p,{children:["This documentation will guide you through the process of installing and interacting with an instance of the CEP-78 enhanced NFT standard contract through Casper's Rust CLI client. The contract code installs an instance of CEP-78 as per session arguments provided at the time of installation. It requires a minimum Rust version of ",(0,t.jsx)(n.code,{children:"1.63.0"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Information on the modalities used throughout this installation process can be found in the ",(0,t.jsx)(n.a,{href:"/docs-redux/resources/tokens/cep78/modalities",children:"modalities documentation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-contract",children:"Installing the Contract"}),"\n",(0,t.jsxs)(n.p,{children:["Installing the enhanced NFT contract to global state requires the use of a ",(0,t.jsx)(n.a,{href:"/docs-redux/developers/cli/sending-transactions",children:"Deploy"}),". In this case, the session code can be compiled to Wasm by running the ",(0,t.jsx)(n.code,{children:"make build-contract"})," command provided in the Makefile at the top level. The Wasm will be found in the ",(0,t.jsx)(n.code,{children:"contract/target/wasm32-unknown-unknown/release"})," directory as ",(0,t.jsx)(n.code,{children:"contract.wasm"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Below is an example of a ",(0,t.jsx)(n.code,{children:"casper-client"})," command that provides all required session arguments to install a valid instance of the CEP-78 contract on global state."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" --payment-amount 500000000000 -k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem --session-path ~/casper/enhanced-nft/contract/target/wasm32-unknown-unknown/release/contract.wasm'})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"collection_name:string='CEP-78-collection'\""})}),"\n",(0,t.jsx)(n.p,{children:'The name of the NFT collection as a string. In this instance, "CEP-78-collection".'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"collection_symbol:string='CEP78'\""})}),"\n",(0,t.jsx)(n.p,{children:'The symbol representing the NFT collection as a string. In this instance, "CEP78".'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"total_token_supply:u64='100'\""})}),"\n",(0,t.jsx)(n.p,{children:"The total supply of tokens to be minted. In this instance, 100. If the contract owner is unsure of the total number of NFTs they will require, they should err on the side of caution."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"ownership_mode:u8='2'\""})}),"\n",(0,t.jsx)(n.p,{children:'The ownership mode for this contract. In this instance the 2 represents "Transferable" mode. Under these conditions, users can freely transfer their NFTs between one another.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"nft_kind:u8='1'\""})}),"\n",(0,t.jsx)(n.p,{children:"The type of commodity represented by these NFTs. In this instance, the 1 represents a digital collection."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"nft_metadata_kind:u8='0'\""})}),"\n",(0,t.jsx)(n.p,{children:"The type of metadata used by this contract. In this instance, the 0 represents CEP-78 standard for metadata."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"json_schema:string=''\""})}),"\n",(0,t.jsx)(n.p,{children:"An empty JSON string, as the contract has awareness of the CEP-78 JSON schema. Using the custom validated modality would require passing through a valid JSON schema for your custom metadata."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"identifier_mode:u8='0'\""})}),"\n",(0,t.jsx)(n.p,{children:"The mode used to identify individual NFTs. For 0, this means an ordinal identification sequence rather than by hash."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"metadata_mutability:u8='0'\""})}),"\n",(0,t.jsx)(n.p,{children:"A setting allowing for mutability of metadata. This is only available when using the ordinal identification mode, as the hash mode depends on immutability for identification. In this instance, despite ordinal identification, the 0 represents immutable metadata."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The session arguments match the available modalities as listed ",(0,t.jsx)(n.a,{href:"/docs-redux/resources/tokens/cep78/modalities",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:(0,t.jsx)(n.b,{children:"Casper client command without comments"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" --payment-amount 500000000000 -k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem --session-path ~/casper/enhanced-nft/contract/target/wasm32-unknown-unknown/release/contract.wasm \\\n--session-arg "collection_name:string=\'CEP-78-collection\'" \\\n--session-arg "collection_symbol:string=\'CEP78\'" \\\n--session-arg "total_token_supply:u64=\'100\'" \\\n--session-arg "ownership_mode:u8=\'2\'" \\\n--session-arg "nft_kind:u8=\'1\'" \\\n--session-arg "nft_metadata_kind:u8=\'0\'" \\\n--session-arg "json_schema:string=\'\'" \\\n--session-arg "identifier_mode:u8=\'0\'" \\\n--session-arg "metadata_mutability:u8=\'0\'"\n'})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"directly-invoking-entrypoints",children:"Directly Invoking Entrypoints"}),"\n",(0,t.jsxs)(n.p,{children:["With the release of CEP-78 version 1.1, users that are interacting with a CEP-78 contract that does not use ",(0,t.jsx)(n.code,{children:"ReverseLookupMode"})," should opt out of using the client Wasms provided as part of the release. Opting out in this situation is recommended, as directly invoking the entrypoints incurs a lower gas cost compared against using the provided client Wasm to invoke the entrypoint."]}),"\n",(0,t.jsxs)(n.p,{children:["You may invoke the ",(0,t.jsx)(n.code,{children:"mint"}),", ",(0,t.jsx)(n.code,{children:"transfer"})," or ",(0,t.jsx)(n.code,{children:"burn"})," entrypoints directly through either the contract package hash or the contract hash directly."]}),"\n",(0,t.jsxs)(n.p,{children:["Specifically in the case of ",(0,t.jsx)(n.code,{children:"mint"}),", there are fewer runtime arguments that must be provided, thereby reducing the total gas cost of minting an NFT."]}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:(0,t.jsx)(n.b,{children:"Example Mint using StoredVersionByHash"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'\ncasper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" \\ --payment-amount 7500000000 \\ -k ~/secret_key.pem \\\n--session-package-hash hash-b3b7a74ae9ef2ea8afc06d6a0830961259605e417e95a53c0cb1ca9737bb0ec7 \\\n--session-entry-point "mint" \\\n--session-arg "token_owner:key=\'account-hash-e9ff87766a1d2bab2565bfd5799054946200b51b20c3ca7e54a9269e00fe7cfb\'" \\\n--session-arg "token_meta_data:string=\'{\\"name\\": \\"John Doe\\",\\"token_uri\\": \\"https:\\/\\/www.barfoo.com\\",\\"checksum\\": \\"940bffb3f2bba35f84313aa26da09ece3ad47045c6a1292c2bbd2df4ab1a55fb\\"}\'"\n\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:(0,t.jsx)(n.b,{children:"Example Transfer using StoredContractByHash"})}),"\n",(0,t.jsxs)(n.p,{children:["Based on the identifier mode for the given contract instance, either the ",(0,t.jsx)(n.code,{children:"token_id"})," runtime argument must be passed in or in the case of the hash identifier mode, the ",(0,t.jsx)(n.code,{children:"token_hash"})," runtime argument."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'\ncasper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" \\ --payment-amount 7500000000 \\ -k ~/secret_key.pem \\\n--session-hash hash-b3b7a74ae9ef2ea8afc06d6a0830961259605e417e95a53c0cb1ca9737bb0ec7 \\\n--session-entry-point "transfer" \\\n--session-arg "source_key:key=\'account-hash-e9ff87766a1d2bab2565bfd5799054946200b51b20c3ca7e54a9269e00fe7cfb\'" \\\n--session-arg "target_key:key=\'account-hash-b4782e7c47e4deca5bd90b7adb2d6e884f2d331825d5419d6cbfb59e17642aab\'" \\\n--session-arg "token_id:u64=\'0\'"\n\n'})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"minting-an-nft",children:"Minting an NFT"}),"\n",(0,t.jsxs)(n.p,{children:["Below is an example of a ",(0,t.jsx)(n.code,{children:"casper-client"})," command that uses the ",(0,t.jsx)(n.code,{children:"mint"})," function of the contract to mint an NFT for the user associated with ",(0,t.jsx)(n.code,{children:"node-1"})," in an ",(0,t.jsx)(n.a,{href:"/docs-redux/developers/dapps/nctl-test",children:"NCTL environment"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" --payment-amount 5000000000 -k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem --session-path ~/casper/enhanced-nft/client/mint_session/target/wasm32-unknown-unknown/release/mint_call.wasm'})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"nft_contract_hash:key='hash-206339c3deb8e6146974125bb271eb510795be6f250c21b1bd4b698956669f95'\""})}),"\n",(0,t.jsx)(n.p,{children:"The contract hash of the previously installed CEP-78 NFT contract from which we will be minting."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"collection_name:string='cep78_<collection_name>'\""})}),"\n",(0,t.jsx)(n.p,{children:"The collection name of the previously installed CEP-78 NFT contract from which we will be minting."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"token_owner:key='account-hash-e9ff87766a1d2bab2565bfd5799054946200b51b20c3ca7e54a9269e00fe7cfb'\""})}),"\n",(0,t.jsx)(n.p,{children:"The collection name of the NFT to be minted."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'--session-arg "token_meta_data:string=\'{\\"name\\": \\"John Doe\\",\\"token_uri\\": \\"https:\\/\\/www.barfoo.com\\",\\"checksum\\": \\"940bffb3f2bba35f84313aa26da09ece3ad47045c6a1292c2bbd2df4ab1a55fb\\"}\'"'})}),"\n",(0,t.jsxs)(n.p,{children:["Metadata describing the NFT to be minted, passed in as a ",(0,t.jsx)(n.code,{children:"string"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:(0,t.jsx)(n.b,{children:"Casper client command without comments"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'\ncasper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" \\\n--payment-amount 5000000000 \\\n-k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \\\n--session-path ~/casper/enhanced-nft/client/mint_session/target/wasm32-unknown-unknown/release/mint_call.wasm \\\n--session-arg "nft_contract_hash:key=\'hash-206339c3deb8e6146974125bb271eb510795be6f250c21b1bd4b698956669f95\'" \\\n--session-arg "collection_name:string=\'cep78_<collection_name>\'"` \\\n--session-arg "token_owner:key=\'account-hash-e9ff87766a1d2bab2565bfd5799054946200b51b20c3ca7e54a9269e00fe7cfb\'"  \\\n--session-arg "token_meta_data:string=\'{\\"name\\": \\"John Doe\\",\\"token_uri\\": \\"https:\\/\\/www.barfoo.com\\",\\"checksum\\": \\"940bffb3f2bba35f84313aa26da09ece3ad47045c6a1292c2bbd2df4ab1a55fb\\"}\'"\n\n'})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"transferring-nfts-between-users",children:"Transferring NFTs Between Users"}),"\n",(0,t.jsxs)(n.p,{children:["Below is an example of a ",(0,t.jsx)(n.code,{children:"casper-client"})," command that uses the ",(0,t.jsx)(n.code,{children:"transfer"})," function to transfer ownership of an NFT from one user to another. In this case, we are transferring the previously minted NFT from the user associated with ",(0,t.jsx)(n.code,{children:"node-2"})," to the user associated with ",(0,t.jsx)(n.code,{children:"node-3"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" --payment-amount 5000000000 -k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-2/keys/secret_key.pem --session-path ~/casper/enhanced-nft/client/transfer_session/target/wasm32-unknown-unknown/release/transfer_call.wasm'})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"nft_contract_hash:key='hash-52e78ae3f6c485d036a74f65ebbb8c75fcc7c33fb42eb667fb32aeba72c63fb5'\""})}),"\n",(0,t.jsx)(n.p,{children:"The contract hash of the CEP-78 NFT Contract associated with the NFT to be transferred."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"source_key:key='account-hash-e9ff87766a1d2bab2565bfd5799054946200b51b20c3ca7e54a9269e00fe7cfb'\""})}),"\n",(0,t.jsx)(n.p,{children:"The account hash of the user that currently owns the NFT and wishes to transfer it."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"target_key:key='account-hash-b4772e7c47e4deca5bd90b7adb2d6e884f2d331825d5419d6cbfb59e17642aab'\""})}),"\n",(0,t.jsx)(n.p,{children:"The account hash of the user that will receive the NFT."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"is_hash_identifier_mode:bool='false'\""})}),"\n",(0,t.jsxs)(n.p,{children:["Argument that the hash identifier mode is ordinal, thereby requiring a ",(0,t.jsx)(n.code,{children:"token_id"})," rather than a ",(0,t.jsx)(n.code,{children:"token_hash"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"token_id:u64='0'\""})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"token_id"})," of the NFT to be transferred."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:(0,t.jsx)(n.b,{children:"Casper client command without comments"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" \\\n--payment-amount 5000000000 \\\n-k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-2/keys/secret_key.pem \\\n--session-path ~/casper/enhanced-nft/client/transfer_session/target/wasm32-unknown-unknown/release/transfer_call.wasm \\\n--session-arg "nft_contract_hash:key=\'hash-52e78ae3f6c485d036a74f65ebbb8c75fcc7c33fb42eb667fb32aeba72c63fb5\'" \\\n--session-arg "source_key:key=\'account-hash-e9ff87766a1d2bab2565bfd5799054946200b51b20c3ca7e54a9269e00fe7cfb\'" \\\n--session-arg "target_key:key=\'account-hash-b4772e7c47e4deca5bd90b7adb2d6e884f2d331825d5419d6cbfb59e17642aab\'" \\\n--session-arg "is_hash_identifier_mode:bool=\'false\'" \\\n--session-arg "token_id:u64=\'0\'"\n'})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"burning-an-nft",children:"Burning an NFT"}),"\n",(0,t.jsxs)(n.p,{children:["Below is an example of a ",(0,t.jsx)(n.code,{children:"casper-client"})," command that uses the ",(0,t.jsx)(n.code,{children:"burn"})," function to burn an NFT within a CEP-78 collection. If this command is used, the NFT in question will no longer be accessible by anyone."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" --payment-amount 5000000000 -k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem'})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-hash hash-52e78ae3f6c485d036a74f65ebbb8c75fcc7c33fb42eb667fb32aeba72c63fb5"})}),"\n",(0,t.jsx)(n.p,{children:"The session hash corresponding to the NFT's contract hash."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'--session-entry-point "burn"'})}),"\n",(0,t.jsxs)(n.p,{children:["The entrypoint corresponding to the ",(0,t.jsx)(n.code,{children:"burn"})," function."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"--session-arg \"token_id:u64='1'\""})}),"\n",(0,t.jsxs)(n.p,{children:["The token ID for the NFT to be burned. If the ",(0,t.jsx)(n.code,{children:"identifier_mode"})," is not set to ",(0,t.jsx)(n.code,{children:"Ordinal"}),", you must provide the ",(0,t.jsx)(n.code,{children:"token_hash"})," instead."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:(0,t.jsx)(n.b,{children:"Casper client command without comments"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" \\\n--payment-amount 5000000000 \\\n-k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \\\n--session-hash hash-52e78ae3f6c485d036a74f65ebbb8c75fcc7c33fb42eb667fb32aeba72c63fb5 \\\n--session-entry-point "burn" \\\n--session-arg "token_id:u64=\'1\'"\n'})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var t=s(96540);const a={},i=t.createContext(a);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);