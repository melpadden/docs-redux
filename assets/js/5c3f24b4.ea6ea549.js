"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[77808],{74466:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});const o=JSON.parse('{"id":"jsonrpc-comp/rpc-2.0/schema/MessageTopicSummary.json","title":"MessageTopicSummary.json","description":"","source":"@site/condor/jsonrpc-comp/rpc-2.0/schema/MessageTopicSummary.json.md","sourceDirName":"jsonrpc-comp/rpc-2.0/schema","slug":"/jsonrpc-comp/rpc-2.0/schema/MessageTopicSummary.json","permalink":"/condor/jsonrpc-comp/rpc-2.0/schema/MessageTopicSummary.json","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var t=s(74848),c=s(28453);const r={},a=void 0,i={},m=[];function p(e){const n={code:"code",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"copy ",children:'{\n    "description": "Summary of a message topic that will be stored in global state.",\n    "type": "object",\n    "required": [\n        "blocktime",\n        "message_count"\n    ],\n    "properties": {\n        "message_count": {\n            "description": "Number of messages in this topic.",\n            "type": "integer",\n            "format": "uint32",\n            "minimum": 0\n        },\n        "blocktime": {\n            "description": "Block timestamp in which these messages were emitted.",\n            "allOf": [\n                {\n                    "$ref": "#/components/schemas/BlockTime"\n                }\n            ]\n        }\n    }\n} \n'})})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var o=s(96540);const t={},c=o.createContext(t);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);