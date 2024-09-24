"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[84110],{88261:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var i=s(74848),r=s(28453);const l={},d="CLType",c={id:"developers/json-rpc/types_cl",title:"CLType",description:"Casper types, i.e. types which can be stored and manipulated by smart contracts. Provides a description of the underlying data type of a CLValue.",source:"@site/docs/developers/json-rpc/types_cl.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/types_cl",permalink:"/developers/json-rpc/types_cl",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1723745091e3,frontMatter:{},sidebar:"developers",previous:{title:"Types",permalink:"/developers/json-rpc/types_chain"},next:{title:"Overview of Casper dApps",permalink:"/developers/dapps/"}},t={},o=[{value:"CLValue",id:"clvalue",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cltype",children:"CLType"})}),"\n",(0,i.jsxs)(n.p,{children:["Casper types, i.e. types which can be stored and manipulated by smart contracts. Provides a description of the underlying data type of a ",(0,i.jsx)(n.a,{href:"#clvalue",children:(0,i.jsx)(n.code,{children:"CLValue"})}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Bool"})," Primitive"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"I32"})," Primitive"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"I64"})," Primitive"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"U8"})," Primitive"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"U32"})," Primitive"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"U64"})," Primitive"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"U128"})," Large unsigned integer type"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"U256"})," Large unsigned integer type"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"U512"})," Large unsigned integer type"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Unit"})," Primitive"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"String"})," Primitive"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Key"})," System type"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"URef"})," System type"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PublicKey"})," System type"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Option"})," Option of a ",(0,i.jsx)(n.code,{children:"CLType"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"List"})," Variable-length list of a single ",(0,i.jsx)(n.code,{children:"CLType"})," (comparable to a ",(0,i.jsx)(n.code,{children:"Vec"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ByteArray"})," Fixed-length list of a single ",(0,i.jsx)(n.code,{children:"CLType"})," (comparable to a Rust array)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Result"})," ",(0,i.jsx)(n.code,{children:"Result"})," with ",(0,i.jsx)(n.code,{children:"Ok"})," and ",(0,i.jsx)(n.code,{children:"Err"})," variants of ",(0,i.jsx)(n.code,{children:"CLType"}),"'s"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Map"})," Map with keys of a single ",(0,i.jsx)(n.code,{children:"CLType"})," and values of a single ",(0,i.jsx)(n.code,{children:"CLType"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Tuple1"})," 1-ary tuple of a ",(0,i.jsx)(n.code,{children:"CLType"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Tuple2"})," 2-ary tuple of ",(0,i.jsx)(n.code,{children:"CLType"}),"s"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Tuple3"})," 3-ary tuple of ",(0,i.jsx)(n.code,{children:"CLType"}),"s"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Any"})," Unspecified type"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"clvalue",children:"CLValue"}),"\n",(0,i.jsxs)(n.p,{children:["A Casper value, i.e. a value which can be stored and manipulated by smart contracts. It holds the underlying data as a type-erased, serialized ",(0,i.jsx)(n.code,{children:"Vec<u8>"})," and also holds the CLType of the underlying data as a separate member. The ",(0,i.jsx)(n.code,{children:"parsed"})," field, representing the original value, is a convenience only available when a CLValue is encoded to JSON, and can always be set to null if preferred."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"bytes"})," A Casper serialized representation of the underlying value. For more information, reference the ",(0,i.jsx)(n.a,{href:"/concepts/serialization/",children:"Serialization Standard"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#cltype",children:(0,i.jsx)(n.code,{children:"cl_type"})})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var i=s(96540);const r={},l=i.createContext(r);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);