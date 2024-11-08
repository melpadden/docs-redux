"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[10775],{56454:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"jsonrpc-comp/rpc-1.5/schema/JsonBlock.json","title":"JsonBlock.json","description":"","source":"@site/condor/jsonrpc-comp/rpc-1.5/schema/JsonBlock.json.md","sourceDirName":"jsonrpc-comp/rpc-1.5/schema","slug":"/jsonrpc-comp/rpc-1.5/schema/JsonBlock.json","permalink":"/condor/jsonrpc-comp/rpc-1.5/schema/JsonBlock.json","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=e(74848),r=e(28453);const t={},a=void 0,p={},i=[];function l(n){const o={code:"code",pre:"pre",...(0,r.R)(),...n.components};return(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-json",metastring:"copy ",children:'{\n    "description": "A JSON-friendly representation of `Block`.",\n    "type": "object",\n    "required": [\n        "body",\n        "hash",\n        "header",\n        "proofs"\n    ],\n    "properties": {\n        "hash": {\n            "description": "`BlockHash`",\n            "allOf": [\n                {\n                    "$ref": "#/components/schemas/BlockHash"\n                }\n            ]\n        },\n        "header": {\n            "description": "JSON-friendly block header.",\n            "allOf": [\n                {\n                    "$ref": "#/components/schemas/JsonBlockHeader"\n                }\n            ]\n        },\n        "body": {\n            "description": "JSON-friendly block body.",\n            "allOf": [\n                {\n                    "$ref": "#/components/schemas/JsonBlockBody"\n                }\n            ]\n        },\n        "proofs": {\n            "description": "JSON-friendly list of proofs for this block.",\n            "type": "array",\n            "items": {\n                "$ref": "#/components/schemas/JsonProof"\n            }\n        }\n    },\n    "additionalProperties": false\n} \n'})})}function d(n={}){const{wrapper:o}={...(0,r.R)(),...n.components};return o?(0,c.jsx)(o,{...n,children:(0,c.jsx)(l,{...n})}):l(n)}},28453:(n,o,e)=>{e.d(o,{R:()=>t,x:()=>a});var s=e(96540);const c={},r=s.createContext(c);function t(n){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function a(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),s.createElement(r.Provider,{value:o},n.children)}}}]);