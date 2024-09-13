"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[1433],{4080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(74848),a=n(28453);const o={title:"Runtime Return Values",slug:"/resources/tutorials/advanced/return-values-tutorial"},i="Interacting with Runtime Return Values",s={id:"resources/advanced/return-values-tutorial",title:"Runtime Return Values",description:"Users interacting with a Casper network must keep in mind the differences between session and contract code. Session code executes entirely within the context of the initiating account, while contract code executes within the context of its own state. Any action undertaken by a contract must initiate through an outside call, usually via session code.",source:"@site/docs/resources/advanced/return-values-tutorial.md",sourceDirName:"resources/advanced",slug:"/resources/tutorials/advanced/return-values-tutorial",permalink:"/next/resources/tutorials/advanced/return-values-tutorial",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Karol Marter",lastUpdatedAt:1722798267e3,frontMatter:{title:"Runtime Return Values",slug:"/resources/tutorials/advanced/return-values-tutorial"},sidebar:"tutorials",previous:{title:"Additional Examples",permalink:"/next/resources/advanced/multi-sig/other-scenarios"},next:{title:"Authorization Keys",permalink:"/next/resources/advanced/list-auth-keys-tutorial"}},c={},d=[{value:"Contract Code",id:"return-contract-code",level:2},{value:"Session Code",id:"return-session-code",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"interacting-with-runtime-return-values",children:"Interacting with Runtime Return Values"})}),"\n",(0,r.jsx)(t.p,{children:"Users interacting with a Casper network must keep in mind the differences between session and contract code. Session code executes entirely within the context of the initiating account, while contract code executes within the context of its own state. Any action undertaken by a contract must initiate through an outside call, usually via session code."}),"\n",(0,r.jsx)(t.p,{children:"Developers should note the difference between a caller and an immediate caller. The immediate caller represents the session or contract code that directly accessed the entry point. The caller is the original, initiating session code that started the entire process. There are many cases where contract code may call additional contract code. In this case, the immediate caller may be another instance of contract code. Even in this event, the overall caller will be the initiating session code, while there may be several layers of stacked contract code acting as immediate callers."}),"\n",(0,r.jsxs)(t.p,{children:["Contract code can optionally return a value to their immediate caller via ",(0,r.jsx)(t.code,{children:"runtime::ret()"}),", whether that immediate caller is another contract code or session code. The returned value may be used within the context of the session or contract code, stored for later use, or discarded if not needed. Use of return values depends entirely on what the developer needs in that instance."]}),"\n",(0,r.jsx)(t.p,{children:"Session code initiates actions on behalf of an account which is considered to be the caller. Therefore, it cannot return anything."}),"\n",(0,r.jsx)(t.h2,{id:"return-contract-code",children:"Contract Code"}),"\n",(0,r.jsxs)(t.p,{children:["For example, if we create a contract to accept and keep a record of donations, we would use ",(0,r.jsx)(t.code,{children:"runtime::ret()"})," to define the results that should be passed to the caller as per the following:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'\n#[no_mangle]\npub extern "C" fn donate() {\n    let donating_account_key: Key = runtime::get_named_arg(DONATING_ACCOUNT_KEY);\n    if let Key::Account(donating_account_hash) = donating_account_key {\n        update_ledger_record(donating_account_hash.to_string())\n    } else {\n        runtime::revert(FundRaisingError::InvalidKeyVariant)\n    }\n    let donation_purse = *runtime::get_key(FUNDRAISING_PURSE)\n        .unwrap_or_revert_with(FundRaisingError::MissingFundRaisingPurseURef)\n        .as_uref()\n        .unwrap_or_revert();\n    let value = CLValue::from_t(donation_purse.into_add()).unwrap_or_revert();\n    runtime::ret(value)\n}\n\n'})}),"\n",(0,r.jsxs)(t.p,{children:["In this example, the return value is the URef corresponding to the purse used to raise funds, with ",(0,r.jsx)(t.code,{children:"add"})," permission only. Using this information, the calling code will be able to then transfer funds into the purse, after calling the ",(0,r.jsx)(t.code,{children:"donate"})," entry point."]}),"\n",(0,r.jsxs)(t.p,{children:["Without the addition of the ",(0,r.jsx)(t.code,{children:"runtime::ret"}),", the purse would not be returned to the caller."]}),"\n",(0,r.jsx)(t.h2,{id:"return-session-code",children:"Session Code"}),"\n",(0,r.jsxs)(t.p,{children:["The following is an example of session code calling the ",(0,r.jsx)(t.a,{href:"#return-contract-code",children:"specified entry point"}),". Keep in mind that the immediate caller does not need to be session code, and the immediate caller could be another instance of contract code."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'\n#[no_mangle]\npub extern "C" fn call() {\n    let fundraiser_contract_hash: ContractHash = runtime::get_named_arg(FUNDRAISER_CONTRACT_HASH);\n    let donating_account_key: Key = runtime::get_named_arg(DONATING_ACCOUNT_KEY);\n    let donation_amount: U512 = runtime::get_named_arg(DONATION_AMOUNT);\n\n    let donating_purse_uref: URef = runtime::call_contract(\n        fundraiser_contract_hash,\n        ENTRY_POINT_DONATE,\n        runtime_args! {\n            DONATING_ACCOUNT_KEY => donating_account_key\n        },\n    );\n    system::transfer_from_purse_to_purse(\n        account::get_main_purse(),\n        donating_purse_uref,\n        donation_amount,\n        None\n    )\n        .unwrap_or_revert()\n}\n\n'})}),"\n",(0,r.jsxs)(t.p,{children:["This session code calls into a contract's entry point by using ",(0,r.jsx)(t.code,{children:"runtime::call_contract"}),", supplying the ",(0,r.jsx)(t.code,{children:"contract_hash"})," to identify the contract to be called, and the name of the entry point to be invoked, in this case ",(0,r.jsx)(t.code,{children:"donate"}),". It supplies the ",(0,r.jsx)(t.code,{children:"donating_account_key"}),", which in this case is the account key of the caller. The contract will then provide a return value, in this case ",(0,r.jsx)(t.code,{children:"donating_purse_uref"}),". To call an entry point, you will need to know the ",(0,r.jsx)(t.a,{href:"/next/developers/json-rpc/types_cl",children:"CLType"})," of the return value and identify it within the code."]}),"\n",(0,r.jsxs)(t.p,{children:["You can determine the type of the return value by ",(0,r.jsx)(t.a,{href:"/next/resources/tutorials/beginner/querying-network#querying-an-account",children:"querying the contract object"})," in global state. To query a contract rather than an account, replace the key parameter with the formatted string representation of the contract hash."]}),"\n",(0,r.jsxs)(t.p,{children:["This example code takes that returned value and transfers a ",(0,r.jsx)(t.code,{children:"donation_amount"})," from the calling account's main purse to the established donation purse. It is not necessary for the code to store, or even use, the returned value. Use of the returned value depends on the needs of the developer."]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);