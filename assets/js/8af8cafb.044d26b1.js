"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[43108],{11703:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"jsonrpc-comp/rpc-2.0/schema/BlockBodyV2.json","title":"BlockBodyV2.json","description":"","source":"@site/condor/jsonrpc-comp/rpc-2.0/schema/BlockBodyV2.json.md","sourceDirName":"jsonrpc-comp/rpc-2.0/schema","slug":"/jsonrpc-comp/rpc-2.0/schema/BlockBodyV2.json","permalink":"/condor/jsonrpc-comp/rpc-2.0/schema/BlockBodyV2.json","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=o(74848),r=o(28453);const c={},a=void 0,i={},p=[];function d(n){const e={code:"code",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:"copy ",children:'{\n    "description": "The body portion of a block. Version 2.",\n    "type": "object",\n    "required": [\n        "rewarded_signatures",\n        "transactions"\n    ],\n    "properties": {\n        "transactions": {\n            "description": "Map of transactions mapping categories to a list of transaction hashes.",\n            "type": "object",\n            "additionalProperties": {\n                "type": "array",\n                "items": {\n                    "$ref": "#/components/schemas/TransactionHash"\n                }\n            }\n        },\n        "rewarded_signatures": {\n            "description": "List of identifiers for finality signatures for a particular past block.",\n            "allOf": [\n                {\n                    "$ref": "#/components/schemas/RewardedSignatures"\n                }\n            ]\n        }\n    }\n} \n'})})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>c,x:()=>a});var t=o(96540);const s={},r=t.createContext(s);function c(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);