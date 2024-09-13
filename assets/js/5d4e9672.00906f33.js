"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[5059],{41788:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var t=s(74848),i=s(28453);const d={title:"Introduction",slug:"/resources/tokens/cep78/introduction"},r="CEP-78 Enhanced NFT Standard Introduction",l={id:"resources/tokens/cep78/introduction",title:"Introduction",description:"Usage",source:"@site/versioned_docs/version-1.5.X/resources/tokens/cep78/introduction.md",sourceDirName:"resources/tokens/cep78",slug:"/resources/tokens/cep78/introduction",permalink:"/resources/tokens/cep78/introduction",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{title:"Introduction",slug:"/resources/tokens/cep78/introduction"},sidebar:"resources",previous:{title:"Testing Guide",permalink:"/resources/tokens/cep18/tests"},next:{title:"CEP-78 Modalities",permalink:"/resources/tokens/cep78/modalities"}},c={},h=[{value:"Usage",id:"usage",level:2},{value:"Building the Contract",id:"building-the-contract",level:3},{value:"Required Runtime Arguments",id:"required-runtime-arguments",level:3},{value:"Example deploy",id:"example-deploy",level:4},{value:"Utility Session Code",id:"utility-session-code",level:3},{value:"Checking Token Ownership",id:"checking-token-ownership",level:3},{value:"Upgrading to Version 1.1.1",id:"upgrading-to-version-111",level:3},{value:"Installing and Interacting with the Contract using the Rust Casper Client",id:"installing-and-interacting-with-the-contract-using-the-rust-casper-client",level:2},{value:"Test Suite and Specification",id:"test-suite-and-specification",level:2},{value:"Error Codes",id:"error-codes",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"cep-78-enhanced-nft-standard-introduction",children:"CEP-78 Enhanced NFT Standard Introduction"})}),"\n",(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(e.h3,{id:"building-the-contract",children:"Building the Contract"}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.code,{children:"main.rs"})," file within the contract provides the installer for the NFT contract. Users can compile the contract to Wasm using the ",(0,t.jsx)(e.code,{children:"make build-contract"})," command from the Makefile provided."]}),"\n",(0,t.jsxs)(e.p,{children:["The pre-built Wasm for the contract and all other utility session code can be found as part of the most current release. Users wishing to build the Wasm themselves can pull the code and use the ",(0,t.jsx)(e.code,{children:"make build-contract"})," command provided in the Makefile. Please note, however, that you must install ",(0,t.jsx)(e.code,{children:"wasm-strip"})," to build the contract."]}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.code,{children:"call"})," method will install the contract with the necessary entrypoints and call the ",(0,t.jsx)(e.code,{children:"init()"})," entrypoint, which allows the contract to self-initialize and set up the necessary state variables for operation."]}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.a,{href:"/resources/tokens/cep78/using-casper-client/full-installation-tutorial",children:"Full Installation Tutorial"})," provides a step-by-step workflow."]}),"\n",(0,t.jsx)(e.h3,{id:"required-runtime-arguments",children:"Required Runtime Arguments"}),"\n",(0,t.jsxs)(e.p,{children:["The following are the required runtime arguments that must be passed to the installer session code to correctly install the NFT contract. For more information on the modalities that these arguments set, please refer to the ",(0,t.jsx)(e.a,{href:"/resources/tokens/cep78/modalities",children:"Modalities"})," documentation."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:'"collection_name":'})," The name of the NFT collection, passed in as a ",(0,t.jsx)(e.code,{children:"String"}),". This parameter is required and cannot be changed post installation."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:'"collection_symbol"'}),": The symbol representing a given NFT collection, passed in as a ",(0,t.jsx)(e.code,{children:"String"}),". This parameter is required and cannot be changed post installation."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:'"total_token_supply"'}),": The total number of NFTs that a specific instance of a contract will mint passed in as a ",(0,t.jsx)(e.code,{children:"U64"})," value. This parameter is required."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:'"ownership_mode"'}),": The ",(0,t.jsx)(e.a,{href:"/resources/tokens/cep78/modalities#ownership",children:(0,t.jsx)(e.code,{children:"OwnershipMode"})})," modality that dictates the ownership behavior of the NFT contract. This argument is passed in as a ",(0,t.jsx)(e.code,{children:"u8"})," value and is required at the time of installation."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:'"nft_kind"'}),": The ",(0,t.jsx)(e.a,{href:"/resources/tokens/cep78/modalities#nftkind",children:(0,t.jsx)(e.code,{children:"NFTKind"})})," modality that specifies the off-chain items represented by the on-chain NFT data. This argument is passed in as a ",(0,t.jsx)(e.code,{children:"u8"})," value and is required at the time of installation."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:'"json_schema"'}),": The JSON schema for the NFT tokens that will be minted by the NFT contract passed in as a ",(0,t.jsx)(e.code,{children:"String"}),". This parameter is required if the metadata kind is set to ",(0,t.jsx)(e.code,{children:"CustomValidated(3)"})," and cannot be changed post installation."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:'"nft_metadata_kind"'}),": The base metadata schema for the NFTs to be minted by the NFT contract. This argument is passed in as a ",(0,t.jsx)(e.code,{children:"u8"})," value and is required at the time of installation."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:'"identifier_mode"'}),": The ",(0,t.jsx)(e.a,{href:"/resources/tokens/cep78/modalities#nftidentifiermode",children:(0,t.jsx)(e.code,{children:"NFTIdentifierMode"})})," modality dictates the primary identifier for NFTs minted by the contract. This argument is passed in as a ",(0,t.jsx)(e.code,{children:"u8"})," value and is required at the time of installation."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:'"metadata_mutability"'}),": The ",(0,t.jsx)(e.a,{href:"/resources/tokens/cep78/modalities#metadata-mutability",children:(0,t.jsx)(e.code,{children:"MetadataMutability"})})," modality dictates whether the metadata of minted NFTs can be updated. This argument is passed in as a ",(0,t.jsx)(e.code,{children:"u8"})," value and is required at the time of installation."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"The following are the optional parameters that can be passed in at the time of installation."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:'"minting_mode"'}),": The ",(0,t.jsx)(e.a,{href:"/resources/tokens/cep78/modalities#minting",children:(0,t.jsx)(e.code,{children:"MintingMode"})})," modality that dictates the access to the ",(0,t.jsx)(e.code,{children:"mint()"})," entry-point in the NFT contract. This is an optional parameter that will default to restricting access to the installer of the contract. This parameter cannot be changed once the contract has been installed."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:'"allow_minting"'}),": The ",(0,t.jsx)(e.code,{children:'"allow_minting"'})," flag allows the installer of the contract to pause the minting of new NFTs. The ",(0,t.jsx)(e.code,{children:"allow_minting"})," is a boolean toggle that allows minting when ",(0,t.jsx)(e.code,{children:"true"}),". If not provided at install the toggle will default to ",(0,t.jsx)(e.code,{children:"true"}),". This value can be changed by the installer by calling the ",(0,t.jsx)(e.code,{children:"set_variables()"})," entrypoint."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:'"whitelist_mode"'}),": The ",(0,t.jsx)(e.a,{href:"/resources/tokens/cep78/modalities#whitelistmode",children:(0,t.jsx)(e.code,{children:"WhitelistMode"})})," modality dictates whether the contract whitelist can be updated. This optional parameter will default to an unlocked whitelist that can be updated post installation. This parameter cannot be changed once the contract has been installed."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:'"holder_mode"'}),": The ",(0,t.jsx)(e.a,{href:"/resources/tokens/cep78/modalities#nftholdermode",children:(0,t.jsx)(e.code,{children:"NFTHolderMode"})})," modality dictates which entities can hold NFTs. This is an optional parameter and will default to a mixed mode allowing either ",(0,t.jsx)(e.code,{children:"Accounts"})," or ",(0,t.jsx)(e.code,{children:"Contracts"})," to hold NFTs. This parameter cannot be changed once the contract has been installed."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:'"contract_whitelist"'}),": The contract whitelist is a list of contract hashes that specifies which contracts can call the ",(0,t.jsx)(e.code,{children:"mint()"})," entrypoint to mint NFTs. This is an optional parameter which will default to an empty whitelist. This value can be changed via the ",(0,t.jsx)(e.code,{children:"set_variables"})," post installation. If the whitelist mode is set to locked, a non-empty whitelist must be passed; else, installation of the contract will fail."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:'"burn_mode"'}),": The ",(0,t.jsx)(e.a,{href:"/resources/tokens/cep78/modalities#burnmode",children:(0,t.jsx)(e.code,{children:"BurnMode"})})," modality dictates whether minted NFTs can be burnt. This is an optional parameter and will allow tokens to be burnt by default. This parameter cannot be changed once the contract has been installed."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:'"owner_reverse_lookup_mode"'}),": The ",(0,t.jsx)(e.a,{href:"/resources/tokens/cep78/modalities#ownerreverselookupmode",children:(0,t.jsx)(e.code,{children:"OwnerReverseLookupMode"})})," modality dictates whether the lookup for owners to token identifiers is available. This is an optional parameter and will not provide the lookup by default. This parameter cannot be changed once the contract has been installed."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:'"events_mode"'}),": The ",(0,t.jsx)(e.a,{href:"/resources/tokens/cep78/modalities#eventsmode",children:(0,t.jsx)(e.code,{children:"EventsMode"})})," modality selects the event schema used to record any changes that occur to tokens issued by the contract instance."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:'"additional_required_metdata"'}),": An additional metadata schema that must be included. This argument is passed in as a ",(0,t.jsx)(e.code,{children:"u8"})," value."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:'"optional_metdata"'}),": An optional metadata schema that may be included. This argument is passed in as a ",(0,t.jsx)(e.code,{children:"u8"})," value."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"example-deploy",children:"Example deploy"}),"\n",(0,t.jsxs)(e.p,{children:["The following is an example of installing the NFT contract via a deploy using the Rust CLI Casper client. You can find more examples ",(0,t.jsx)(e.a,{href:"/resources/tokens/cep78/using-casper-client/full-installation-tutorial",children:"here"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'casper-client put-deploy -n http://65.108.0.148:7777/rpc --chain-name "casper-test" --payment-amount 500000000000 -k keys/secret_key.pem --session-path contract/target/wasm32-unknown-unknown/release/contract.wasm \\\n--session-arg "collection_name:string=\'enhanced-nft-1\'" \\\n--session-arg "collection_symbol:string=\'ENFT-1\'" \\\n--session-arg "total_token_supply:u64=\'10\'" \\\n--session-arg "ownership_mode:u8=\'0\'" \\\n--session-arg "nft_kind:u8=\'1\'" \\\n--session-arg "json_schema:string=\'nft-schema\'" \\\n--session-arg "allow_minting:bool=\'true\'" \\\n--session-arg "owner_reverse_lookup_mode:u8=\'0\'" \\\n--session-arg "nft_metadata_kind:u8=\'2\'" \\\n--session-arg "identifier_mode:u8=\'0\'" \\\n--session-arg "metadata_mutability:u8=\'1\'"\n'})}),"\n",(0,t.jsx)(e.h3,{id:"utility-session-code",children:"Utility Session Code"}),"\n",(0,t.jsxs)(e.p,{children:["Specific entrypoints in use by the current implementation of the NFT contract require session code to accept return values passed by the contract over the Wasm boundary.\nIn order to help with the installation and use of the NFT contract, session code for such entrypoints has been provided. It is recommended that\nusers and DApp developers attempting to engage with the NFT contract do so with the help of the provided utility session code. The session code can be found in the ",(0,t.jsx)(e.code,{children:"client"}),"\nfolder within the project folder."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Entrypoint name"}),(0,t.jsx)(e.th,{children:"Session code"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'"mint"'})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"client/mint_session"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'"balance_of"'})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"client/balance_of_session"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'"get_approved'})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"client/get_approved_session"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'"owner_of"'})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"client/owner_of_session"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'"transfer"'})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"client/transfer_session"})})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"checking-token-ownership",children:"Checking Token Ownership"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/docs/tutorials/token-ownership-tutorial.md",children:"Learn to check token ownership"})," starting with version ",(0,t.jsx)(e.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/releases/tag/v1.1.1",children:"v1.1.1"}),". The ",(0,t.jsx)(e.code,{children:"OwnerReverseLookupMode"})," modality must be set to ",(0,t.jsx)(e.code,{children:"Complete"})," as described ",(0,t.jsx)(e.a,{href:"/resources/tokens/cep78/reverse-lookup",children:"here"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"upgrading-to-version-111",children:"Upgrading to Version 1.1.1"}),"\n",(0,t.jsxs)(e.p,{children:["Upgrade to v1.1.1 using a ",(0,t.jsx)(e.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/tutorials/standard-migration-tutorial.md",children:"Standard NamedKey Convention"})," or a ",(0,t.jsx)(e.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/docs/tutorials/custom-migration-tutorial.md",children:"Custom NamedKey Convention"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"installing-and-interacting-with-the-contract-using-the-rust-casper-client",children:"Installing and Interacting with the Contract using the Rust Casper Client"}),"\n",(0,t.jsxs)(e.p,{children:["You can find instructions on installing an instance of the CEP-78 contract using the Rust CLI Casper client ",(0,t.jsx)(e.a,{href:"/resources/tokens/cep78/using-casper-client/full-installation-tutorial",children:"here"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"test-suite-and-specification",children:"Test Suite and Specification"}),"\n",(0,t.jsxs)(e.p,{children:["The expected behavior of the NFT contract implementation is asserted by its test suite found in the ",(0,t.jsx)(e.code,{children:"tests"})," folder.\nThe test suite and the corresponding unit tests comprise the specification around the contract and outline the expected behaviors\nof the NFT contract across the entire range of possible configurations (i.e modalities and toggles like allow minting). The test suite\nensures that as new modalities are added, and current modalities are extended, no regressions and conflicting behaviors are introduced.\nThe test suite also asserts the correct working behavior of the utility session code provided in the client folder. The tests can be run\nby using the provided ",(0,t.jsx)(e.code,{children:"Makefile"})," and running the ",(0,t.jsx)(e.code,{children:"make test"})," command."]}),"\n",(0,t.jsx)(e.h2,{id:"error-codes",children:"Error Codes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Code"}),(0,t.jsx)(e.th,{children:"Error"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"1"}),(0,t.jsx)(e.td,{children:"InvalidAccount"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"2"}),(0,t.jsx)(e.td,{children:"MissingInstaller"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"3"}),(0,t.jsx)(e.td,{children:"InvalidInstaller"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"4"}),(0,t.jsx)(e.td,{children:"UnexpectedKeyVariant"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"5"}),(0,t.jsx)(e.td,{children:"MissingTokenOwner"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"6"}),(0,t.jsx)(e.td,{children:"InvalidTokenOwner"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"7"}),(0,t.jsx)(e.td,{children:"FailedToGetArgBytes"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"8"}),(0,t.jsx)(e.td,{children:"FailedToCreateDictionary"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"9"}),(0,t.jsx)(e.td,{children:"MissingStorageUref"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"10"}),(0,t.jsx)(e.td,{children:"InvalidStorageUref"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"11"}),(0,t.jsx)(e.td,{children:"MissingOwnerUref"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"12"}),(0,t.jsx)(e.td,{children:"InvalidOwnersUref"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"13"}),(0,t.jsx)(e.td,{children:"FailedToAccessStorageDictionary"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"14"}),(0,t.jsx)(e.td,{children:"FailedToAccessOwnershipDictionary"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"15"}),(0,t.jsx)(e.td,{children:"DuplicateMinted"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"16"}),(0,t.jsx)(e.td,{children:"FailedToConvertCLValue"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"17"}),(0,t.jsx)(e.td,{children:"MissingCollectionName"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"18"}),(0,t.jsx)(e.td,{children:"InvalidCollectionName"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"19"}),(0,t.jsx)(e.td,{children:"FailedToSerializeMetaData"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"20"}),(0,t.jsx)(e.td,{children:"MissingAccount"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"21"}),(0,t.jsx)(e.td,{children:"MissingMintingStatus"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"22"}),(0,t.jsx)(e.td,{children:"InvalidMintingStatus"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"23"}),(0,t.jsx)(e.td,{children:"MissingCollectionSymbol"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"24"}),(0,t.jsx)(e.td,{children:"InvalidCollectionSymbol"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"25"}),(0,t.jsx)(e.td,{children:"MissingTotalTokenSupply"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"26"}),(0,t.jsx)(e.td,{children:"InvalidTotalTokenSupply"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"27"}),(0,t.jsx)(e.td,{children:"MissingTokenID"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"28"}),(0,t.jsx)(e.td,{children:"InvalidTokenIdentifier"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"29"}),(0,t.jsx)(e.td,{children:"MissingTokenOwners"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"30"}),(0,t.jsx)(e.td,{children:"MissingAccountHash"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"31"}),(0,t.jsx)(e.td,{children:"InvalidAccountHash"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"32"}),(0,t.jsx)(e.td,{children:"TokenSupplyDepleted"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"33"}),(0,t.jsx)(e.td,{children:"MissingOwnedTokensDictionary"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"34"}),(0,t.jsx)(e.td,{children:"TokenAlreadyBelongsToMinterFatal"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"35"}),(0,t.jsx)(e.td,{children:"FatalTokenIdDuplication"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"36"}),(0,t.jsx)(e.td,{children:"InvalidMinter"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"37"}),(0,t.jsx)(e.td,{children:"MissingMintingMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"38"}),(0,t.jsx)(e.td,{children:"InvalidMintingMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"39"}),(0,t.jsx)(e.td,{children:"MissingInstallerKey"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"40"}),(0,t.jsx)(e.td,{children:"FailedToConvertToAccountHash"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"41"}),(0,t.jsx)(e.td,{children:"InvalidBurner"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"42"}),(0,t.jsx)(e.td,{children:"PreviouslyBurntToken"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"43"}),(0,t.jsx)(e.td,{children:"MissingAllowMinting"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"44"}),(0,t.jsx)(e.td,{children:"InvalidAllowMinting"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"45"}),(0,t.jsx)(e.td,{children:"MissingNumberOfMintedTokens"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"46"}),(0,t.jsx)(e.td,{children:"InvalidNumberOfMintedTokens"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"47"}),(0,t.jsx)(e.td,{children:"MissingTokenMetaData"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"48"}),(0,t.jsx)(e.td,{children:"InvalidTokenMetaData"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"49"}),(0,t.jsx)(e.td,{children:"MissingApprovedAccountHash"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"50"}),(0,t.jsx)(e.td,{children:"InvalidApprovedAccountHash"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"51"}),(0,t.jsx)(e.td,{children:"MissingApprovedTokensDictionary"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"52"}),(0,t.jsx)(e.td,{children:"TokenAlreadyApproved"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"53"}),(0,t.jsx)(e.td,{children:"MissingApproveAll"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"54"}),(0,t.jsx)(e.td,{children:"InvalidApproveAll"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"55"}),(0,t.jsx)(e.td,{children:"MissingOperator"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"56"}),(0,t.jsx)(e.td,{children:"InvalidOperator"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"57"}),(0,t.jsx)(e.td,{children:"Phantom"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"58"}),(0,t.jsx)(e.td,{children:"ContractAlreadyInitialized"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"59"}),(0,t.jsx)(e.td,{children:"MintingIsPaused"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"60"}),(0,t.jsx)(e.td,{children:"FailureToParseAccountHash"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"61"}),(0,t.jsx)(e.td,{children:"VacantValueInDictionary"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"62"}),(0,t.jsx)(e.td,{children:"MissingOwnershipMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"63"}),(0,t.jsx)(e.td,{children:"InvalidOwnershipMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"64"}),(0,t.jsx)(e.td,{children:"InvalidTokenMinter"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"65"}),(0,t.jsx)(e.td,{children:"MissingOwnedTokens"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"66"}),(0,t.jsx)(e.td,{children:"InvalidAccountKeyInDictionary"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"67"}),(0,t.jsx)(e.td,{children:"MissingJsonSchema"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"68"}),(0,t.jsx)(e.td,{children:"InvalidJsonSchema"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"69"}),(0,t.jsx)(e.td,{children:"InvalidKey"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"70"}),(0,t.jsx)(e.td,{children:"InvalidOwnedTokens"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"71"}),(0,t.jsx)(e.td,{children:"MissingTokenURI"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"72"}),(0,t.jsx)(e.td,{children:"InvalidTokenURI"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"73"}),(0,t.jsx)(e.td,{children:"MissingNftKind"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"74"}),(0,t.jsx)(e.td,{children:"InvalidNftKind"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"75"}),(0,t.jsx)(e.td,{children:"MissingHolderMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"76"}),(0,t.jsx)(e.td,{children:"InvalidHolderMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"77"}),(0,t.jsx)(e.td,{children:"MissingWhitelistMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"78"}),(0,t.jsx)(e.td,{children:"InvalidWhitelistMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"79"}),(0,t.jsx)(e.td,{children:"MissingContractWhiteList"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"80"}),(0,t.jsx)(e.td,{children:"InvalidContractWhitelist"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"81"}),(0,t.jsx)(e.td,{children:"UnlistedContractHash"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"82"}),(0,t.jsx)(e.td,{children:"InvalidContract"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"83"}),(0,t.jsx)(e.td,{children:"EmptyContractWhitelist"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"84"}),(0,t.jsx)(e.td,{children:"MissingReceiptName"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"85"}),(0,t.jsx)(e.td,{children:"InvalidReceiptName"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"86"}),(0,t.jsx)(e.td,{children:"InvalidJsonMetadata"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"87"}),(0,t.jsx)(e.td,{children:"InvalidJsonFormat"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"88"}),(0,t.jsx)(e.td,{children:"FailedToParseCep78Metadata"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"89"}),(0,t.jsx)(e.td,{children:"FailedToParse721Metadata"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"90"}),(0,t.jsx)(e.td,{children:"FailedToParseCustomMetadata"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"91"}),(0,t.jsx)(e.td,{children:"InvalidCEP78Metadata"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"92"}),(0,t.jsx)(e.td,{children:"FailedToJsonifyCEP78Metadata"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"93"}),(0,t.jsx)(e.td,{children:"InvalidNFT721Metadata"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"94"}),(0,t.jsx)(e.td,{children:"FailedToJsonifyNFT721Metadata"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"95"}),(0,t.jsx)(e.td,{children:"InvalidCustomMetadata"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"96"}),(0,t.jsx)(e.td,{children:"MissingNFTMetadataKind"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"97"}),(0,t.jsx)(e.td,{children:"InvalidNFTMetadataKind"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"98"}),(0,t.jsx)(e.td,{children:"MissingIdentifierMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"99"}),(0,t.jsx)(e.td,{children:"InvalidIdentifierMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"100"}),(0,t.jsx)(e.td,{children:"FailedToParseTokenId"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"101"}),(0,t.jsx)(e.td,{children:"MissingMetadataMutability"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"102"}),(0,t.jsx)(e.td,{children:"InvalidMetadataMutability"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"103"}),(0,t.jsx)(e.td,{children:"FailedToJsonifyCustomMetadata"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"104"}),(0,t.jsx)(e.td,{children:"ForbiddenMetadataUpdate"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"105"}),(0,t.jsx)(e.td,{children:"MissingBurnMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"106"}),(0,t.jsx)(e.td,{children:"InvalidBurnMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"107"}),(0,t.jsx)(e.td,{children:"MissingHashByIndex"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"108"}),(0,t.jsx)(e.td,{children:"InvalidHashByIndex"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"109"}),(0,t.jsx)(e.td,{children:"MissingIndexByHash"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"110"}),(0,t.jsx)(e.td,{children:"InvalidIndexByHash"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"111"}),(0,t.jsx)(e.td,{children:"MissingPageTableURef"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"112"}),(0,t.jsx)(e.td,{children:"InvalidPageTableURef"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"113"}),(0,t.jsx)(e.td,{children:"MissingPageLimit"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"114"}),(0,t.jsx)(e.td,{children:"InvalidPageLimit"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"115"}),(0,t.jsx)(e.td,{children:"InvalidPageNumber"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"116"}),(0,t.jsx)(e.td,{children:"InvalidPageIndex"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"117"}),(0,t.jsx)(e.td,{children:"MissingUnmatchedHashCount"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"118"}),(0,t.jsx)(e.td,{children:"InvalidUnmatchedHashCount"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"119"}),(0,t.jsx)(e.td,{children:"MissingPackageHashForUpgrade"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"120"}),(0,t.jsx)(e.td,{children:"MissingPageUref"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"121"}),(0,t.jsx)(e.td,{children:"InvalidPageUref"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"122"}),(0,t.jsx)(e.td,{children:"CannotUpgradeWithZeroSupply"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"123"}),(0,t.jsx)(e.td,{children:"CannotInstallWithZeroSupply"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"124"}),(0,t.jsx)(e.td,{children:"MissingMigrationFlag"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"125"}),(0,t.jsx)(e.td,{children:"InvalidMigrationFlag"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"126"}),(0,t.jsx)(e.td,{children:"ContractAlreadyMigrated"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"127"}),(0,t.jsx)(e.td,{children:"UnregisteredOwnerInMint"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"128"}),(0,t.jsx)(e.td,{children:"UnregisteredOwnerInTransfer"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"129"}),(0,t.jsx)(e.td,{children:"MissingReportingMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"130"}),(0,t.jsx)(e.td,{children:"InvalidReportingMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"131"}),(0,t.jsx)(e.td,{children:"MissingPage"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"132"}),(0,t.jsx)(e.td,{children:"UnregisteredOwnerFromMigration"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"133"}),(0,t.jsx)(e.td,{children:"ExceededMaxTotalSupply"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"134"}),(0,t.jsx)(e.td,{children:"MissingCep78PackageHash"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"135"}),(0,t.jsx)(e.td,{children:"InvalidCep78InvalidHash"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"136"}),(0,t.jsx)(e.td,{children:"InvalidPackageHashName"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"137"}),(0,t.jsx)(e.td,{children:"InvalidAccessKeyName"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"138"}),(0,t.jsx)(e.td,{children:"InvalidCheckForUpgrade"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"139"}),(0,t.jsx)(e.td,{children:"InvalidNamedKeyConvention"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"140"}),(0,t.jsx)(e.td,{children:"OwnerReverseLookupModeNotTransferable"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"141"}),(0,t.jsx)(e.td,{children:"InvalidAdditionalRequiredMetadata"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"142"}),(0,t.jsx)(e.td,{children:"InvalidOptionalMetadata"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"143"}),(0,t.jsx)(e.td,{children:"MissingOptionalNFTMetadataKind"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"144"}),(0,t.jsx)(e.td,{children:"InvalidOptionalNFTMetadataKind"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"145"}),(0,t.jsx)(e.td,{children:"MissingAdditionalNFTMetadataKind"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"146"}),(0,t.jsx)(e.td,{children:"InvalidAdditionalNFTMetadataKind"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"147"}),(0,t.jsx)(e.td,{children:"InvalidRequirement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"148"}),(0,t.jsx)(e.td,{children:"MissingEventsMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"149"}),(0,t.jsx)(e.td,{children:"InvalidEventsMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"150"}),(0,t.jsx)(e.td,{children:"CannotUpgradeToMoreSupply"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"151"}),(0,t.jsx)(e.td,{children:"MissingOperatorDict"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"152"}),(0,t.jsx)(e.td,{children:"MissingApprovedDict"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"153"}),(0,t.jsx)(e.td,{children:"MissingSpenderAccountHash"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"154"}),(0,t.jsx)(e.td,{children:"InvalidSpenderAccountHash"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"155"}),(0,t.jsx)(e.td,{children:"MissingOwnerTokenIdentifierKey"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"156"}),(0,t.jsx)(e.td,{children:"InvalidTransferFilterContract"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"157"}),(0,t.jsx)(e.td,{children:"MissingTransferFilterContract"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"158"}),(0,t.jsx)(e.td,{children:"TransferFilterContractNeedsTransferableMode"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"159"}),(0,t.jsx)(e.td,{children:"TransferFilterContractDenied"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"160"}),(0,t.jsx)(e.td,{children:"MissingACLWhiteList"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"161"}),(0,t.jsx)(e.td,{children:"InvalidACLWhitelist"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"162"}),(0,t.jsx)(e.td,{children:"EmptyACLWhitelist"})]})]})]})]})}function o(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>l});var t=s(96540);const i={},d=t.createContext(i);function r(n){const e=t.useContext(d);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);