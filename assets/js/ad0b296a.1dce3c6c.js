"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[35378],{64336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var c=t(74848),a=t(28453);const s={title:"CEP-18 Contract Details",slug:"/resources/tokens/cep18/query"},r="Exploring the CEP-18 Contracts",o={id:"resources/tokens/cep18/query",title:"CEP-18 Contract Details",description:"This document covers the necessary information that you will need to interact with your CEP-18 contract instance. Your setup should include the following two contracts:",source:"@site/docs/resources/tokens/cep18/query.md",sourceDirName:"resources/tokens/cep18",slug:"/resources/tokens/cep18/query",permalink:"/docs-redux/resources/tokens/cep18/query",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1723745091e3,frontMatter:{title:"CEP-18 Contract Details",slug:"/resources/tokens/cep18/query"},sidebar:"resources",previous:{title:"On-chain Installation",permalink:"/docs-redux/resources/tokens/cep18/quickstart-guide"},next:{title:"CEP-18 Transfers",permalink:"/docs-redux/resources/tokens/cep18/transfer"}},i={},d=[{value:"Querying the Contract Package",id:"querying-the-contract-package",level:2},{value:"Querying the Utility Contract",id:"querying-the-utility-contract",level:2},{value:"Next Steps",id:"next-steps",level:2}];function l(e){const n={a:"a",b:"b",code:"code",details:"details",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",summary:"summary",ul:"ul",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"exploring-the-cep-18-contracts",children:"Exploring the CEP-18 Contracts"})}),"\n",(0,c.jsx)(n.p,{children:"This document covers the necessary information that you will need to interact with your CEP-18 contract instance. Your setup should include the following two contracts:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"The Casper fungible token contract"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["The CEP-18 utility contract, which should appear in the ",(0,c.jsx)(n.code,{children:"NamedKeys"})," of the account that sent the transaction as ",(0,c.jsx)(n.code,{children:"cep18_test_contract"})]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"querying-the-contract-package",children:"Querying the Contract Package"}),"\n",(0,c.jsxs)(n.p,{children:["We will need the contract package's ",(0,c.jsx)(n.code,{children:"contract_hash"})," to interact with the recently installed instance of CEP-18. You can find the contract package hash within the installing account's ",(0,c.jsx)(n.code,{children:"NamedKeys"}),", under the name given during the installation process."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:"casper-client query-global-state -n http://<HOST IP>:<PORT> \\\n// This is the contract package hash, which can be found within the `NamedKeys` of the account that sent the installing transaction.\n--key hash-82bd86d2675b2dc44c19027fb7717a99db6fda5e0cad8d597f2495a9dbc9df7f \\\n// This is the most up to date state root hash, which can found by using the `get-state-root-hash` command in the Casper client.\n--state-root-hash f9f73c3a4da5893b67c4cac94a5695d76cfefff61b050c98a7b19e2b8efd3933\n"})}),"\n",(0,c.jsxs)(n.details,{children:["\n",(0,c.jsx)(n.summary,{children:(0,c.jsx)(n.b,{children:"Casper client command without comments"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state -n http://<HOST IP>:<PORT> \\\n--key hash-82bd86d2675b2dc44c19027fb7717a99db6fda5e0cad8d597f2495a9dbc9df7f \\\n--state-root-hash f9f73c3a4da5893b67c4cac94a5695d76cfefff61b050c98a7b19e2b8efd3933\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["This will return the ",(0,c.jsx)(n.code,{children:"Contract Package"})," object:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'{\n  "id": -1489823435760214673,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.0.0",\n    "block_header": null,\n    "merkle_proof": "[2048 hex chars]",\n    "stored_value": {\n      "ContractPackage": {\n        "access_key": "uref-8dac847ce0ae20f0156cf37dd233cc1d166fde8269fc9a393b0ea04174be1167-007",\n        "disabled_versions": [],\n        "groups": [],\n        "versions": [\n          {\n            "contract_hash": "contract-05d893e76c731729fc26339e5a970bd79fbf4a6adf743c8385431fb494bff45e",\n            "contract_version": 1,\n            "protocol_version_major": 1\n          }\n        ]\n      }\n    }\n  }\n}\n'})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Note - In the ",(0,c.jsx)(n.code,{children:"contract_hash"})," field, the hash value represents the stored contract which we will invoke later."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"querying-the-utility-contract",children:"Querying the Utility Contract"}),"\n",(0,c.jsxs)(n.p,{children:["In addition, there is a utility contract that invokes the various balance and allowance entry points of the main fungible token contract. Upon receiving the returned value, the utility contract will write the value to a URef called ",(0,c.jsx)(n.code,{children:"result"}),". You can find this URef in the ",(0,c.jsx)(n.code,{children:"NamedKeys"})," of the utility contract."]}),"\n",(0,c.jsxs)(n.p,{children:["First, you will need to query the ",(0,c.jsx)(n.code,{children:"cep18_test_contract"})," hash found within the installing account's ",(0,c.jsx)(n.code,{children:"NamedKeys"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:"casper-client query-global-state -n http://<HOST IP>:<PORT> \\\n// This is the contract hash for the `cep18_test_contract` as found from the installing account's `NamedKeys`\n--key hash-015b99020edb40e7e1e2b31a8e104bc226242f960a2d10dc1d91ae3eb6fa41b6 \\\n--state-root-hash f9f73c3a4da5893b67c4cac94a5695d76cfefff61b050c98a7b19e2b8efd3933\n"})}),"\n",(0,c.jsxs)(n.details,{children:["\n",(0,c.jsx)(n.summary,{children:(0,c.jsx)(n.b,{children:"Casper client command without comments"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:"casper-client query-global-state -n http://<HOST IP>:<PORT> \\\n--key hash-015b99020edb40e7e1e2b31a8e104bc226242f960a2d10dc1d91ae3eb6fa41b6 \\\n--state-root-hash f9f73c3a4da5893b67c4cac94a5695d76cfefff61b050c98a7b19e2b8efd3933\n"})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Which should return information similar to the following:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'\n{\n  "id": 5359405942597097786,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.0.0",\n    "block_header": null,\n    "merkle_proof": "[2048 hex chars]",\n    "stored_value": {\n      "ContractPackage": {\n        "access_key": "uref-1b867a3751f505762c69c8d92ba7462818cd0c2a705bb5d4270bce479410ee55-007",\n        "disabled_versions": [],\n        "groups": [],\n        "versions": [\n          {\n            "contract_hash": "contract-a8fe057675930f0951d45816c55615228ac8af2b7b231788278dffcf1dd8c0ca",\n            "contract_version": 1,\n            "protocol_version_major": 1\n          }\n        ]\n      }\n    }\n  }\n}\n\n'})}),"\n",(0,c.jsxs)(n.p,{children:["You will need to take the ",(0,c.jsx)(n.code,{children:"contract_hash"})," value and replace ",(0,c.jsx)(n.code,{children:"contract"})," with ",(0,c.jsx)(n.code,{children:"hash"})," to run another `query-global-state:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state -n http://<HOST IP>:<PORT> \\\n--key hash-a8fe057675930f0951d45816c55615228ac8af2b7b231788278dffcf1dd8c0ca \\\n--state-root-hash f9f73c3a4da5893b67c4cac94a5695d76cfefff61b050c98a7b19e2b8efd3933\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Which will return the full ",(0,c.jsx)(n.code,{children:"cep18_test_contract"})," information. The following snippet is condensed to show only the ",(0,c.jsx)(n.code,{children:"NamedKeys"}),", but you should also see the ",(0,c.jsx)(n.code,{children:"entry_points"})," when you run the command. You should see the URef ",(0,c.jsx)(n.code,{children:"result"}),", which will be used to view the results of any checks run through the utility contract."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'{\n  "id": -1426549275795832481,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.0.0",\n    "block_header": null,\n    "merkle_proof": "[3370 hex chars]",\n    "stored_value": {\n      "Contract": {\n        "contract_package_hash": "contract-package-015b99020edb40e7e1e2b31a8e104bc226242f960a2d10dc1d91ae3eb6fa41b6",\n        "contract_wasm_hash": "contract-wasm-7959083a4df983ddcd3a9ae46af092dbf126031181ab2619ddc64db09bde8c27",\n        "named_keys": [\n          {\n            "key": "uref-a46ad389b53715d9991a513c8ca48e1502facc4c563c0700a31e830c4cb8a7d4-007",\n            "name": "result"\n          }\n        ],\n        "protocol_version": "1.0.0"\n      }\n    }\n  }\n}\n\n'})}),"\n",(0,c.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/docs-redux/resources/tokens/cep18/transfer",children:"CEP-18 Token Transfers and Allowances"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var c=t(96540);const a={},s=c.createContext(a);function r(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);