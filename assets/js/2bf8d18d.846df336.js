"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[81304],{67981:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"jsonrpc-comp/rpc-2.0/schema/TransactionSessionKind.json","title":"TransactionSessionKind.json","description":"","source":"@site/condor/jsonrpc-comp/rpc-2.0/schema/TransactionSessionKind.json.md","sourceDirName":"jsonrpc-comp/rpc-2.0/schema","slug":"/jsonrpc-comp/rpc-2.0/schema/TransactionSessionKind.json","permalink":"/condor/jsonrpc-comp/rpc-2.0/schema/TransactionSessionKind.json","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var t=e(74848),r=e(28453);const c={},a=void 0,i={},d=[];function p(n){const s={code:"code",pre:"pre",...(0,r.R)(),...n.components};return(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",metastring:"copy ",children:'{\n    "description": "Session kind of a Transaction.",\n    "oneOf": [\n        {\n            "description": "A standard (non-special-case) session.\\n\\nThis kind of session is not allowed to install or upgrade a stored contract, but can call stored contracts.",\n            "type": "string",\n            "enum": [\n                "Standard"\n            ]\n        },\n        {\n            "description": "A session which installs a stored contract.",\n            "type": "string",\n            "enum": [\n                "Installer"\n            ]\n        },\n        {\n            "description": "A session which upgrades a previously-installed stored contract.  Such a session must have \\"package_id: PackageIdentifier\\" runtime arg present.",\n            "type": "string",\n            "enum": [\n                "Upgrader"\n            ]\n        },\n        {\n            "description": "A session which doesn\'t call any stored contracts.\\n\\nThis kind of session is not allowed to install or upgrade a stored contract.",\n            "type": "string",\n            "enum": [\n                "Isolated"\n            ]\n        }\n    ]\n} \n'})})}function l(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>c,x:()=>a});var o=e(96540);const t={},r=o.createContext(t);function c(n){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function a(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),o.createElement(r.Provider,{value:s},n.children)}}}]);