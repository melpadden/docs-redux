"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[95017],{26849:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"jsonrpc-comp/rpc-1.5/schema/BlockSyncStatus.json","title":"BlockSyncStatus.json","description":"","source":"@site/condor/jsonrpc-comp/rpc-1.5/schema/BlockSyncStatus.json.md","sourceDirName":"jsonrpc-comp/rpc-1.5/schema","slug":"/jsonrpc-comp/rpc-1.5/schema/BlockSyncStatus.json","permalink":"/condor/jsonrpc-comp/rpc-1.5/schema/BlockSyncStatus.json","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=t(74848),s=t(28453);const r={},a=void 0,i={},p=[];function u(n){const e={code:"code",pre:"pre",...(0,s.R)(),...n.components};return(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",metastring:"copy ",children:'{\n    "description": "The status of syncing an individual block.",\n    "type": "object",\n    "required": [\n        "acquisition_state",\n        "block_hash"\n    ],\n    "properties": {\n        "block_hash": {\n            "description": "The block hash.",\n            "allOf": [\n                {\n                    "$ref": "#/components/schemas/BlockHash"\n                }\n            ]\n        },\n        "block_height": {\n            "description": "The height of the block, if known.",\n            "type": [\n                "integer",\n                "null"\n            ],\n            "format": "uint64",\n            "minimum": 0\n        },\n        "acquisition_state": {\n            "description": "The state of acquisition of the data associated with the block.",\n            "type": "string"\n        }\n    },\n    "additionalProperties": false\n} \n'})})}function l(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(u,{...n})}):u(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>a});var o=t(96540);const c={},s=o.createContext(c);function r(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);