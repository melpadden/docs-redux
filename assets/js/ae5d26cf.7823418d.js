"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[67461],{14377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(74848),s=n(28453);const i={title:"Ownership Lookup",slug:"/resources/tokens/cep78/reverse-lookup"},r="Owner Reverse Lookup Functionality",a={id:"resources/tokens/cep78/reverse-lookup",title:"Ownership Lookup",description:"In version 1.0 of the CEP-78 Enhanced NFT Standard contract, tracking minted tokens consisted of a single, unbounded list that would grow in size with each additional token. As a result, gas costs would increase over time as the list must be overwritten with each new minting. The related tutorial can be found here.",source:"@site/versioned_docs/version-2.0.0/resources/tokens/cep78/reverse-lookup.md",sourceDirName:"resources/tokens/cep78",slug:"/resources/tokens/cep78/reverse-lookup",permalink:"/docs-redux/2.0.0/resources/tokens/cep78/reverse-lookup",draft:!1,unlisted:!1,tags:[],version:"2.0.0",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1726493368e3,frontMatter:{title:"Ownership Lookup",slug:"/resources/tokens/cep78/reverse-lookup"},sidebar:"resources",previous:{title:"On-chain Installation",permalink:"/docs-redux/2.0.0/resources/tokens/using-casper-client"},next:{title:"CEP-78 JavaScript Client",permalink:"/docs-redux/2.0.0/resources/tokens/cep78/js-tutorial"}},c={},l=[{value:"The CEP-78 Page System",id:"the-cep-78-page-system",level:2},{value:"Updated Receipts",id:"updated-receipts",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"owner-reverse-lookup-functionality",children:"Owner Reverse Lookup Functionality"})}),"\n",(0,o.jsxs)(t.p,{children:["In version 1.0 of the CEP-78 Enhanced NFT Standard contract, tracking minted tokens consisted of a single, unbounded list that would grow in size with each additional token. As a result, gas costs would increase over time as the list must be overwritten with each new minting. The related tutorial can be found ",(0,o.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/docs/tutorials/token-ownership-tutorial.md",children:"here"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"In an effort to stabilize the gas costs of larger NFT collections, version 1.1 of CEP-78 includes the use of a pre-allocated page system to track ownership of NFTs within the contract."}),"\n",(0,o.jsx)(t.p,{children:"This system stabilizes the cost for interacting with the contract, but not the mint price itself. The size of metadata for a collection, and any differences in that metadata, will still result in some fluctuation in the price for the NFT itself. However, the cost of engaging the system itself will remain stable. Users can expect to pay a higher upfront price for page allocation, but will not need to pay this cost again for any NFTs minted within that given page."}),"\n",(0,o.jsx)(t.h2,{id:"the-cep-78-page-system",children:"The CEP-78 Page System"}),"\n",(0,o.jsxs)(t.p,{children:["Ownership of NFTs within a CEP-78 contract is now tracked with a series of ",(0,o.jsx)(t.code,{children:"pages"}),", with each page tracking a range of 1,000 tokens each. When installing an instance of the CEP-78 contract, the user determines the total token supply. This, in turn, determines the maximum number of pages, i.e., for a 10,000 token collection, each account could have up to 10 pages numbering from 0-9 tracking ownership of NFTs."]}),"\n",(0,o.jsxs)(t.p,{children:["A ",(0,o.jsx)(t.code,{children:"page_table"})," tracks which pages within a range have been allocated and set for a certain user. The size of the page table directly correlates to the total token supply, i.e. for a CEP-78 instance tracking 10,000 tokens, the page table would be 10 bits wide. For a total of 20,000 it would be 20 bits wide. The cost of the initial page table allocation depends on the overall total size of a collection, with larger collections possessing correspondingly greater gas costs. To make initial minting costs more stable across contracts, the process of allocating a page table has been shifted to the ",(0,o.jsx)(t.code,{children:"register_owner"})," entrypoint."]}),"\n",(0,o.jsxs)(t.p,{children:["After registering as an owner, the contract creates an entry within the ",(0,o.jsx)(t.code,{children:"page_table"})," dictionary for the minting account or contract. This dictionary entry consists of a series of ",(0,o.jsx)(t.code,{children:"boolean"})," values amounting to the total number of pages in the collection. In our 10,000 token example, this would be 10 bits set to false."]}),"\n",(0,o.jsxs)(t.p,{children:["Upon minting the token, the user will pay for a page allocation. This adds them to the ",(0,o.jsx)(t.code,{children:"page"})," dictionary, in which each entry corresponds to a specific account or contract that owns tokens within that page. That account or contract's entry in the ",(0,o.jsx)(t.code,{children:"page"})," dictionary will consist of 1,000 ",(0,o.jsx)(t.code,{children:"page_address"})," bits set to ",(0,o.jsx)(t.code,{children:"False"})," upon allocation, and the minting of any given token in that page will set the ",(0,o.jsx)(t.code,{children:"page_address"})," bit to ",(0,o.jsx)(t.code,{children:"True"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["In addition, that account or contract's ",(0,o.jsx)(t.code,{children:"page_table"})," will be updated by marking the corresponding page number's bit as ",(0,o.jsx)(t.code,{children:"True"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"As an example, consider a new user minting their first NFT with a given CEP-78 contract set to a maximum number of 10,000 tokens. They are minting the 2,350th token within that collection. The following sequence of events would occur:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"The contract registers their account as an owner."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The contract creates a ",(0,o.jsx)(t.code,{children:"page_table"})," dictionary for that account, with 10 boolean values. As the numbering system begins with ",(0,o.jsx)(t.code,{children:"0"}),", the third boolean value corresponding with page ",(0,o.jsx)(t.code,{children:"2"})," is set to ",(0,o.jsx)(t.code,{children:"True"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The account pays for allocation of page 2, creating an entry in the ",(0,o.jsx)(t.code,{children:"Page 2"})," dictionary for that account. Within that entry, there are 1,000 boolean values set to false. Minting the 2,350th token in the collection sets the corresponding ",(0,o.jsx)(t.code,{children:"page_address"})," boolean for 350 as ",(0,o.jsx)(t.code,{children:"True"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Any further tokens minted by this account prior to the 3,000th token being minted will not have to pay for additional page allocations. If the account mints a token at or beyond 3,000, they must pay for the corresponding page allocation. For example, if they decided to mint the 5,125th token in the collection, they would need to pay for ",(0,o.jsx)(t.code,{children:"page 5"})," to be allocated to them. They would then be added to the ",(0,o.jsx)(t.code,{children:"page 5"})," dictionary with the ",(0,o.jsx)(t.code,{children:"page_address"})," boolean for 125 set as ",(0,o.jsx)(t.code,{children:"True"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"This system binds the data writing costs to a maximum size of any given page dictionary."}),"\n",(0,o.jsx)(t.h2,{id:"updated-receipts",children:"Updated Receipts"}),"\n",(0,o.jsxs)(t.p,{children:["If the contract enables ",(0,o.jsx)(t.code,{children:"OwnerReverseLookupMode"}),", calling the ",(0,o.jsx)(t.code,{children:"updated_receipts"})," entrypoint will return a list of receipt names alongside the dictionary for the relevant pages."]}),"\n",(0,o.jsxs)(t.p,{children:["Updated receipts come in the format of ",(0,o.jsx)(t.code,{children:'"{<collection name>}\\_m{modulo}\\_p{<page number>}"'}),". Once again using the 2,350th token as an example, the receipt would read:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"cep78_collection_m_350_p_2\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can determine the token number by multiplying the ",(0,o.jsx)(t.code,{children:"page_number"})," by the ",(0,o.jsx)(t.code,{children:"page_size"}),"(1,000) and adding the ",(0,o.jsx)(t.code,{children:"modulo"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If the ",(0,o.jsx)(t.code,{children:"NFTIdentifierMode"})," is set to ",(0,o.jsx)(t.code,{children:"Ordinal"}),", this number corresponds directly to the token ID."]}),"\n",(0,o.jsxs)(t.p,{children:["If it is set to ",(0,o.jsx)(t.code,{children:"Hash"}),", you will need to reference the ",(0,o.jsx)(t.code,{children:"HASH_BY_INDEX"})," dictionary to determine the mapping of token numbers to token hashes."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);