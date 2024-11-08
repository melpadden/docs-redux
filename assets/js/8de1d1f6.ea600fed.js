"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[93764],{64008:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"jsonrpc-comp/rpc-1.5/schema/UnbondingPurse.json","title":"UnbondingPurse.json","description":"","source":"@site/condor/jsonrpc-comp/rpc-1.5/schema/UnbondingPurse.json.md","sourceDirName":"jsonrpc-comp/rpc-1.5/schema","slug":"/jsonrpc-comp/rpc-1.5/schema/UnbondingPurse.json","permalink":"/condor/jsonrpc-comp/rpc-1.5/schema/UnbondingPurse.json","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=o(74848),c=o(28453);const t={},i=void 0,a={},p=[];function d(n){const e={code:"code",pre:"pre",...(0,c.R)(),...n.components};return(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:"copy ",children:'{\n    "description": "Unbonding purse.",\n    "type": "object",\n    "required": [\n        "amount",\n        "bonding_purse",\n        "era_of_creation",\n        "unbonder_public_key",\n        "validator_public_key"\n    ],\n    "properties": {\n        "bonding_purse": {\n            "description": "Bonding Purse",\n            "allOf": [\n                {\n                    "$ref": "#/components/schemas/URef"\n                }\n            ]\n        },\n        "validator_public_key": {\n            "description": "Validators public key.",\n            "allOf": [\n                {\n                    "$ref": "#/components/schemas/PublicKey"\n                }\n            ]\n        },\n        "unbonder_public_key": {\n            "description": "Unbonders public key.",\n            "allOf": [\n                {\n                    "$ref": "#/components/schemas/PublicKey"\n                }\n            ]\n        },\n        "era_of_creation": {\n            "description": "Era in which this unbonding request was created.",\n            "allOf": [\n                {\n                    "$ref": "#/components/schemas/EraId"\n                }\n            ]\n        },\n        "amount": {\n            "description": "Unbonding Amount.",\n            "allOf": [\n                {\n                    "$ref": "#/components/schemas/U512"\n                }\n            ]\n        },\n        "new_validator": {\n            "description": "The validator public key to re-delegate to.",\n            "anyOf": [\n                {\n                    "$ref": "#/components/schemas/PublicKey"\n                },\n                {\n                    "type": "null"\n                }\n            ]\n        }\n    },\n    "additionalProperties": false\n} \n'})})}function u(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>t,x:()=>i});var r=o(96540);const s={},c=r.createContext(s);function t(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);