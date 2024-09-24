"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[61368],{24311:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=i(74848),r=i(28453);const a={title:"Dictionaries"},s="Understanding Dictionaries {#dictionaries}",o={id:"concepts/dictionaries",title:"Dictionaries",description:"dictionaries}",source:"@site/versioned_docs/version-1.5.X/concepts/dictionaries.md",sourceDirName:"concepts",slug:"/concepts/dictionaries",permalink:"/docs-redux/1.5.X/concepts/dictionaries",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{title:"Dictionaries"},sidebar:"concepts",previous:{title:"Call Stacks",permalink:"/docs-redux/1.5.X/concepts/callstack"},next:{title:"Serialization Standard",permalink:"/docs-redux/1.5.X/concepts/serialization-standard"}},c={},d=[{value:"Seed URefs",id:"seed-urefs",level:2},{value:"Using Dictionaries",id:"using-dictionaries",level:2},{value:"Practical Dictionary Examples",id:"practical-dictionary-examples",level:2},{value:"Creating Dictionaries in a Contract&#39;s Context",id:"creating-dictionaries-in-a-contracts-context",level:2},{value:"Writing Entries into a Dictionary",id:"writing-entries-into-a-dictionary",level:2},{value:"Reading Items from a Dictionary using the JSON-RPC",id:"reading-items-from-a-dictionary-using-the-json-rpc",level:2},{value:"<code>ContractNamedKey</code> lookup via a Contract&#39;s named keys.",id:"contractnamedkey-lookup-via-a-contracts-named-keys",level:3},{value:"<code>URef</code> lookup via the dictionary&#39;s seed URef.",id:"uref-lookup-via-the-dictionarys-seed-uref",level:3},{value:"<code>Dictionary</code> lookup via the unique dictionary item key.",id:"dictionary-lookup-via-the-unique-dictionary-item-key",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"dictionaries",children:"Understanding Dictionaries"})}),"\n",(0,n.jsxs)(t.p,{children:["In a Casper network, you can now store sets of data under ",(0,n.jsx)(t.a,{href:"/docs-redux/1.5.X/concepts/hash-types#hash-and-key-explanations",children:(0,n.jsx)(t.code,{children:"Keys"})}),". Previously, ",(0,n.jsx)(t.a,{href:"/docs-redux/1.5.X/concepts/glossary/U#uref",children:"URefs"})," were the exclusive means by which users could store data in global state. To maintain persistent access to these URefs, they would have to be stored within an ",(0,n.jsx)(t.code,{children:"Account"})," or ",(0,n.jsx)(t.code,{children:"Contract"})," context. In the case of Contracts, sustained and continuous use of URefs would result in the expansion of the associated ",(0,n.jsx)(t.a,{href:"/docs-redux/1.5.X/concepts/glossary/N#named-keys",children:"NamedKeys"})," structures."]}),"\n",(0,n.jsx)(t.p,{children:"Individual value changes to data stored within the NamedKeys would require deserializing the entire NamedKeys data structure, increasing gas costs over time and thus having a negative impact. Additionally, users storing large subsets of mapped data structures would face the same deep copy problem where minor or single updates required the complete deserialization of the map structure, also leading to increased gas costs."}),"\n",(0,n.jsxs)(t.p,{children:["As a solution to this problem, the Casper platform provides the ",(0,n.jsx)(t.code,{children:"Dictionary"})," feature, which allows users a more efficient and scalable means to aggregate data over time."]}),"\n",(0,n.jsx)(t.p,{children:"In almost all cases, dictionaries are the better form of data storage. They allow greater flexibility in altering stored data at a lower cost."}),"\n",(0,n.jsx)(t.h2,{id:"seed-urefs",children:"Seed URefs"}),"\n",(0,n.jsxs)(t.p,{children:["Items within a dictionary exist as individual records stored underneath their unique ",(0,n.jsx)(t.a,{href:"/docs-redux/1.5.X/concepts/hash-types#hash-and-key-explanations",children:"dictionary address"})," in global state. In other words, items associated with a specific dictionary share the same seed ",(0,n.jsx)(t.a,{href:"/docs-redux/1.5.X/concepts/design/casper-design#uref-head",children:(0,n.jsx)(t.code,{children:"URef"})})," but are otherwise independent of each other. Dictionary items are not stored beneath this URef, it is only used to create the dictionary key."]}),"\n",(0,n.jsx)(t.p,{children:"As each dictionary item exists as a stand-alone entity in global state, regularly used dictionary keys may be used directly without referencing their seed URef."}),"\n",(0,n.jsx)(t.h2,{id:"using-dictionaries",children:"Using Dictionaries"}),"\n",(0,n.jsxs)(t.p,{children:["Dictionaries are ideal for storing larger volumes of data for which ",(0,n.jsx)(t.code,{children:"NamedKeys"})," would be less suitable."]}),"\n",(0,n.jsxs)(t.p,{children:["Creating a new dictionary is fairly simple and done within the context of a ",(0,n.jsx)(t.code,{children:"Deploy"})," sent to a Casper network. The associated code is included within the ",(0,n.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/",children:(0,n.jsx)(t.code,{children:"casper_contract"})})," crate. Creating a dictionary also stores the associated seed URef within the named keys of the current context."]}),"\n",(0,n.jsx)(t.p,{children:"Developers should always consider context when creating dictionaries. We recommend creating a dictionary within the context of a Contract."}),"\n",(0,n.jsxs)(t.p,{children:["While you can create a dictionary in the context of an Account and then pass associated access rights to a Contract, this approach can create potential security issues. If a third party uses the Contract, the initiating Account with access rights to the dictionary may be undesirable. To rectify this, you may send an additional ",(0,n.jsx)(t.code,{children:"Deploy"})," removing those access rights, but it is better to create the dictionary within the context of the Contract."]}),"\n",(0,n.jsxs)(t.p,{children:["Dictionaries allow a contract to store additional data without drastically expanding the size of the ",(0,n.jsx)(t.code,{children:"NamedKeys"})," within their context. If a contract's ",(0,n.jsx)(t.code,{children:"NamedKeys"})," expand too far, they may run into system limitations that would unintentionally disable the contract's functionality."]}),"\n",(0,n.jsx)(t.p,{children:"A dictionary item key can be no longer than 64 bytes in length."}),"\n",(0,n.jsx)(t.h2,{id:"practical-dictionary-examples",children:"Practical Dictionary Examples"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft",children:"Casper CEP-78 Enhanced NFT Standard"})," includes several practical applications of dictionaries."]}),"\n",(0,n.jsxs)(t.p,{children:["Simple examples for dictionary use within CEP-78 include the ",(0,n.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/contract/src/main.rs#L772",children:(0,n.jsx)(t.code,{children:"approve"})})," dictionary."]}),"\n",(0,n.jsxs)(t.p,{children:["More advanced dictionary functionality can be found in the ",(0,n.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/docs/reverse-lookup.md#the-cep-78-page-system",children:"CEP-78 Page System"}),", which uses a series of dictionaries to keep track of token ownership. These dictionaries form the basis of the reverse lookup mode, which allows users to easily view a list of owned tokens by account or contract."]}),"\n",(0,n.jsx)(t.h2,{id:"creating-dictionaries-in-a-contracts-context",children:"Creating Dictionaries in a Contract's Context"}),"\n",(0,n.jsx)(t.p,{children:"The following code snippet shows the most basic example of creating a dictionary."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"\ncasper_contract::contract_api::storage::new_dictionary(dict_name)\n\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The following example includes the creation of a dictionary ",(0,n.jsx)(t.code,{children:'"ledger"'})," within a contract's context. In this instance, the dictionary will be used to track donations made to a fundraising purse also created by the ",(0,n.jsx)(t.code,{children:"init"})," entry point. In any case where you want to use a dictionary within your contract, it should be set up within the initializing entry point."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:'\n#[no_mangle]\npub extern "C" fn init() {\n    let fundraising_purse = system::create_purse();\n    runtime::put_key("fundraising_purse", fundraising_purse.into());\n    // Create a dictionary to track the mapping of account hashes to number of donations made.\n    storage::new_dictionary("ledger").unwrap_or_revert();\n}\n\n'})}),"\n",(0,n.jsx)(t.h2,{id:"writing-entries-into-a-dictionary",children:"Writing Entries into a Dictionary"}),"\n",(0,n.jsx)(t.p,{children:"After the creation of a dictionary, you may then add entries through the use of the following code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"\nstorage::dictionary_put(dictionary_uref, &dictionary_item_key, value);\n\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"dictionary_uref"})," refers to the seed URef established during the dictionary creation process. The ",(0,n.jsx)(t.code,{children:"key"})," is the unique identifier for this dictionary item, and the ",(0,n.jsx)(t.code,{children:"value"})," is the data to be stored within the dictionary."]}),"\n",(0,n.jsx)(t.p,{children:"As stated above, these dictionary items do not require the seed URef, and they exist as individual keys in global state. If you know an individual key's address, you do not need to go through the process of identifying the seed URef first."}),"\n",(0,n.jsx)(t.p,{children:"The following function serves to add an entry to the dictionary. If the item already exists, the entry point will update the value stored and referenced by that key. In this case, the code is storing the number of donations made. Any Rust structure may be stored under a dictionary item, but when updating a value within a larger structure (i.e., a list), the entire structure will be overwritten as part of the update. Updating a larger structure will incur the full cost of writing the structure to a dictionary item."}),"\n",(0,n.jsxs)(t.p,{children:["The first section acquiring the ",(0,n.jsx)(t.code,{children:"LEDGER"})," seed URef to assign the new dictionary item to the proper dictionary."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:'\nfn update_ledger_record(dictionary_item_key: String) {\n    // Acquiring the LEDGER seed URef to properly assign the dictionary item.\n    let ledger_seed_uref = *runtime::get_key("ledger")\n        .unwrap_or_revert_with(FundRaisingError::MissingLedgerSeedURef)\n        .as_uref()\n        .unwrap_or_revert();\n\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The second section uses ",(0,n.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.dictionary_get.html",children:(0,n.jsx)(t.code,{children:"dictionary_get"})})," to read an entry within the ",(0,n.jsx)(t.code,{children:"LEDGER"})," dictionary. If the entry does not exist on global state, it will create the entry. If it already exists, the entry is updated with the current value using a ",(0,n.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.dictionary_put.html",children:(0,n.jsx)(t.code,{children:"dictionary_put"})})," operation. As stated above, regardless of the size of the change within the entry, the entire dictionary entry will need to be overwritten and will incur the associated cost."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"\n    // This identifies an item within the dictionary and either creates or updates the associated value.\n    match storage::dictionary_get::<u64>(ledger_seed_uref, &dictionary_item_key).unwrap_or_revert()\n    {\n        None => storage::dictionary_put(ledger_seed_uref, &dictionary_item_key, 1u64),\n        Some(current_number_of_donations) => storage::dictionary_put(\n            ledger_seed_uref,\n            &dictionary_item_key,\n            current_number_of_donations + 1u64,\n        ),\n    }\n}\n\n"})}),"\n",(0,n.jsx)(t.h2,{id:"reading-items-from-a-dictionary-using-the-json-rpc",children:"Reading Items from a Dictionary using the JSON-RPC"}),"\n",(0,n.jsxs)(t.p,{children:["The Casper platform provides several means of looking up a dictionary item. These means are explained within the ",(0,n.jsx)(t.a,{href:"/docs-redux/1.5.X/developers/json-rpc/types_chain#dictionaryidentifier",children:(0,n.jsx)(t.code,{children:"DictionaryIdentifier"})})," JSON-RPC type. The following explains how to query the dictionary items using the ",(0,n.jsx)(t.a,{href:"https://crates.io/crates/casper-client",children:"Casper client"}),"."]}),"\n",(0,n.jsxs)(t.h3,{id:"contractnamedkey-lookup-via-a-contracts-named-keys",children:[(0,n.jsx)(t.code,{children:"ContractNamedKey"})," lookup via a Contract's named keys."]}),"\n",(0,n.jsxs)(t.p,{children:["Reading a dictionary item using the Contract's ",(0,n.jsx)(t.code,{children:"NamedKeys"})," requires the following parameters:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Node Address"})," - The IP and port of a node on a Casper network. In the example below, the node address is pointing to a local NCTL network."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"State Root Hash"})," - The current state root hash of a Casper network hosting the dictionary item you are attempting to read."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Contract Hash"})," - The hash of the contract that references the dictionary in its ",(0,n.jsx)(t.code,{children:"NamedKeys"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Dictionary Name"})," - The name of the dictionary as a ",(0,n.jsx)(t.code,{children:"String"})," stored in the Contract's ",(0,n.jsx)(t.code,{children:"NamedKeys"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Dictionary Item Key"})," - The specific dictionary item key to be read, as a ",(0,n.jsx)(t.code,{children:"String"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\ncasper-client get-dictionary-item \\\n    --node-address http://localhost:11101 \\\n    --state-root-hash 50c34ccbe1315d58ce22bf7518071164d16acd20a1becb0b423293418297416d \\\n    --contract-hash hash-09c8fa7c1441ae7c1cbe27ae3a722fd4ffc5290315f8546454454c1b9f85c842 \\\n    --dictionary-name <String> \\\n    --dictionary-item-key <String>\n\n"})}),"\n",(0,n.jsxs)(t.h3,{id:"uref-lookup-via-the-dictionarys-seed-uref",children:[(0,n.jsx)(t.code,{children:"URef"})," lookup via the dictionary's seed URef."]}),"\n",(0,n.jsxs)(t.p,{children:["Reading a dictionary item using the dictionary's seed URef requires the ",(0,n.jsx)(t.code,{children:"Node Address"}),", ",(0,n.jsx)(t.code,{children:"State Root Hash"})," and ",(0,n.jsx)(t.code,{children:"Dictionary Item Key"})," as above. However, it does not require the ",(0,n.jsx)(t.code,{children:"Contract Hash"})," or ",(0,n.jsx)(t.code,{children:"Dictionary Name"}),". Instead, it requires:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Seed URef"})," - The ",(0,n.jsx)(t.a,{href:"#seed-urefs",children:"Seed URef"})," of the dictionary to reference."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\ncasper-client get-dictionary-item \\\n    --node-address http://localhost:11101 \\\n    --state-root-hash 50c34ccbe1315d58ce22bf7518071164d16acd20a1becb0b423293418297416d \\\n    --dictionary-item-key <String> \\\n    --seed-uref uref-90b4a8d936b881d3b45b73a102adb2b652181d75c76b7547ae9d1bb213f8db6b-007\n\n"})}),"\n",(0,n.jsxs)(t.h3,{id:"dictionary-lookup-via-the-unique-dictionary-item-key",children:[(0,n.jsx)(t.code,{children:"Dictionary"})," lookup via the unique dictionary item key."]}),"\n",(0,n.jsxs)(t.p,{children:["In the event that you know the ",(0,n.jsx)(t.code,{children:"dictionary address"})," of the dictionary item key you need to read, you can read it directly using the following Casper client command."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\ncasper-client get-dictionary-item \\\n    --node-address http://localhost:11101 \\\n    --state-root-hash 50c34ccbe1315d58ce22bf7518071164d16acd20a1becb0b423293418297416d \\\n    --dictionary-address dictionary-<string>\n\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var n=i(96540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);