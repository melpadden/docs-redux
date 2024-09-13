"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[9635],{41392:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=d(74848),s=d(28453);const r={title:"Key Types"},i="Understanding Key Types",c={id:"concepts/key-types",title:"Key Types",description:"For user convenience and compatibility, we expect the delivery of hashes, keys, and similar data as a prefixed string when using the node. The following is a list of string representations used.",source:"@site/docs/concepts/key-types.md",sourceDirName:"concepts",slug:"/concepts/key-types",permalink:"/next/concepts/key-types",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1723747045e3,frontMatter:{title:"Key Types"},sidebar:"concepts",previous:{title:"Accounts and Keys",permalink:"/next/concepts/accounts-and-keys"},next:{title:"Transaction Lifecycle",permalink:"/next/transactions-and-transaction-lifecycle"}},t={},l=[{value:"Key Explanations",id:"key-explanations",level:2},{value:"Account",id:"account",level:3},{value:"Hash",id:"hash",level:3},{value:"URef",id:"uref",level:3},{value:"Transfer",id:"transfer",level:3},{value:"DeployInfo",id:"deployinfo",level:3},{value:"EraInfo",id:"erainfo",level:3},{value:"Balance",id:"balance",level:3},{value:"BalanceHold",id:"balancehold",level:3},{value:"Bid",id:"bid",level:3},{value:"Withdraw",id:"withdraw",level:3},{value:"Dictionary",id:"dictionary",level:3},{value:"SystemContractRegistry",id:"systemcontractregistry",level:3},{value:"EraSummary",id:"erasummary",level:3},{value:"Unbond",id:"unbond",level:3},{value:"ChainspecRegistry",id:"chainspecregistry",level:3},{value:"ChecksumRegistry",id:"checksumregistry",level:3},{value:"BidAddr",id:"bidaddr",level:3},{value:"Package",id:"package",level:3},{value:"AddressableEntity",id:"addressableentity",level:3},{value:"ByteCode",id:"bytecode",level:3},{value:"Message",id:"message",level:3},{value:"NamedKey",id:"namedkey",level:3},{value:"BlockGlobal",id:"blockglobal",level:3},{value:"EntryPoint",id:"entrypoint",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"understanding-key-types",children:"Understanding Key Types"})}),"\n",(0,a.jsx)(n.p,{children:"For user convenience and compatibility, we expect the delivery of hashes, keys, and similar data as a prefixed string when using the node. The following is a list of string representations used."}),"\n",(0,a.jsx)(n.h2,{id:"key-explanations",children:"Key Explanations"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key"})," is a wrapper type that may contain one of several possible sets of data."]}),"\n",(0,a.jsx)(n.h3,{id:"account",children:"Account"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::Account"})," contains an AccountHash."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::Account"}),(0,a.jsx)(n.td,{children:"account-hash-"}),(0,a.jsx)(n.td,{children:"account-hash-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"hash",children:"Hash"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::Hash"})," contains a byte array with a length of 32, which can be used to pass any of the hashes. Please take note that the developer of the contract is responsible for the implementation of any checks necessary on the receiving side."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::Hash"}),(0,a.jsx)(n.td,{children:"hash-"}),(0,a.jsx)(n.td,{children:"hash-0101010101010101010101010101010101010101010101010101010101010101"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"uref",children:"URef"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::URef"})," contains an URef suffixed by ",(0,a.jsx)(n.a,{href:"/next/developers/dapps/uref-security",children:"access rights"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::URef"}),(0,a.jsx)(n.td,{children:"uref-"}),(0,a.jsx)(n.td,{children:"uref-0101010101010101010101010101010101010101010101010101010101010101-001"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"transfer",children:"Transfer"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::Transfer"})," should contain the address hash for a transfer."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::Transfer"}),(0,a.jsx)(n.td,{children:"transfer-"}),(0,a.jsx)(n.td,{children:"transfer-0101010101010101010101010101010101010101010101010101010101010101"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"deployinfo",children:"DeployInfo"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::DeployInfo"})," retains the address hash of deploy information."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::DeployInfo"}),(0,a.jsx)(n.td,{children:"deploy-"}),(0,a.jsx)(n.td,{children:"deploy-0101010101010101010101010101010101010101010101010101010101010101"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"erainfo",children:"EraInfo"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::EraInfo"})," is the integer number of the associated era."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::EraInfo"}),(0,a.jsx)(n.td,{children:"era-"}),(0,a.jsx)(n.td,{children:"era-1"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"balance",children:"Balance"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::Balance"})," is the balance of a purse."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::Balance"}),(0,a.jsx)(n.td,{children:"balance-"}),(0,a.jsx)(n.td,{children:"balance-0101010101010101010101010101010101010101010101010101010101010101"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"balancehold",children:"BalanceHold"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::BalanceHold"})," is a ",(0,a.jsx)(n.code,{children:"Key"})," under which a hold on a purse balance is stored."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::BalanceHold"}),(0,a.jsx)(n.td,{children:"balance-hold-"}),(0,a.jsx)(n.td,{children:"balance-hold-002a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a6400000000000000"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"bid",children:"Bid"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::Bid"})," is used to keep track of bids for the auction contract. It is not generally used by users."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::Bid"}),(0,a.jsx)(n.td,{children:"bid-"}),(0,a.jsx)(n.td,{children:"bid-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"withdraw",children:"Withdraw"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::Withdraw"})," is used to keep track of withdraws for the auction contract. It is not generally used by users and exists in a historical context."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::Withdraw"}),(0,a.jsx)(n.td,{children:"withdraw-"}),(0,a.jsx)(n.td,{children:"withdraw-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"dictionary",children:"Dictionary"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::Dictionary"})," is the hash derived from a URef and a piece of arbitrary data and leads to a dictionary."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::Dictionary"}),(0,a.jsx)(n.td,{children:"dictionary-"}),(0,a.jsx)(n.td,{children:"dictionary-0101010101010101010101010101010101010101010101010101010101010101"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"systemcontractregistry",children:"SystemContractRegistry"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::SystemContractRegistry"})," is a unique ",(0,a.jsx)(n.code,{children:"Key"})," under which a mapping of the names and ContractHashes for system contracts, including ",(0,a.jsx)(n.code,{children:"Mint"}),", ",(0,a.jsx)(n.code,{children:"Auction"}),", ",(0,a.jsx)(n.code,{children:"HandlePayment"})," and ",(0,a.jsx)(n.code,{children:"StandardPayment"}),", is stored."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::SystemContractRegistry"}),(0,a.jsx)(n.td,{children:"system-entity-registry-"}),(0,a.jsx)(n.td,{children:"system-entity-registry-0000000000000000000000000000000000000000000000000000000000000000"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"erasummary",children:"EraSummary"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::EraSummary"})," is a ",(0,a.jsx)(n.code,{children:"Key"})," under which we store current era info."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::EraSummary"}),(0,a.jsx)(n.td,{children:"era-summary-"}),(0,a.jsx)(n.td,{children:"era-summary-00000000000000000000000000000000"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"unbond",children:"Unbond"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::Unbond"})," is a variant of the key type that tracks unbonding purses."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::Unbond"}),(0,a.jsx)(n.td,{children:"unbond-"}),(0,a.jsx)(n.td,{children:"unbond-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"chainspecregistry",children:"ChainspecRegistry"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::ChainspecRegistry"})," is a unique ",(0,a.jsx)(n.code,{children:"Key"})," which contains a mapping of file names to the hash of the file itself. These files include ",(0,a.jsx)(n.em,{children:"Chainspec.toml"})," and may also include ",(0,a.jsx)(n.em,{children:"Accounts.toml"})," and ",(0,a.jsx)(n.em,{children:"GlobalState.toml"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::ChainspecRegistry"}),(0,a.jsx)(n.td,{children:"chainspec-registry-"}),(0,a.jsx)(n.td,{children:"chainspec-registry-11111111111111111111111111111111"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"checksumregistry",children:"ChecksumRegistry"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::ChecksumRegistry"})," is a unique ",(0,a.jsx)(n.code,{children:"key"})," variant under which we write a registry of checksums for a given block.  There are two checksums in the registry, one for the execution results and the other for the approvals of all transactions in the block."]}),"\n",(0,a.jsx)(n.p,{children:"|Key::ChecksumRegistry | checksum-registry- | checksum-registry-00000000000000000000000000000000 |"}),"\n",(0,a.jsx)(n.h3,{id:"bidaddr",children:"BidAddr"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::BidAddr"})," manages data associated with bids for the ",(0,a.jsx)(n.code,{children:"Auction"})," contract. It may be any one of three variants: ",(0,a.jsx)(n.code,{children:"unified"}),", ",(0,a.jsx)(n.code,{children:"validator"}),", or ",(0,a.jsx)(n.code,{children:"delegator"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Unified"})}),(0,a.jsx)(n.td,{children:"bid-addr-00"}),(0,a.jsx)(n.td,{children:"bid-addr-00ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Validator"})}),(0,a.jsx)(n.td,{children:"bid-addr-01"}),(0,a.jsx)(n.td,{children:"bid-addr-01ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Delegator"})}),(0,a.jsx)(n.td,{children:"bid-addr-02"}),(0,a.jsx)(n.td,{children:"bid-addr-02ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"package",children:"Package"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::Package"})," is a ",(0,a.jsx)(n.code,{children:"Key"})," under which package information is stored."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Key::Package"}),(0,a.jsx)(n.td,{children:"package-"}),(0,a.jsx)(n.td,{children:"package-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"addressableentity",children:"AddressableEntity"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::AddressableEntity"})," is a ",(0,a.jsx)(n.code,{children:"Key"})," under which an ",(0,a.jsx)(n.a,{href:"/next/developers/json-rpc/types_chain#addressableentity",children:(0,a.jsx)(n.code,{children:"AddressableEntity"})})," is stored. It may be one of three variants: ",(0,a.jsx)(n.code,{children:"Account"}),", ",(0,a.jsx)(n.code,{children:"System"})," or ",(0,a.jsx)(n.code,{children:"SmartContract"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Account"})}),(0,a.jsx)(n.td,{children:"addressable-entity-account-"}),(0,a.jsx)(n.td,{children:"addressable-entity-account-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"System"})}),(0,a.jsx)(n.td,{children:"addressable-entity-system-"}),(0,a.jsx)(n.td,{children:"addressable-entity-system-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"SmartContract"})}),(0,a.jsx)(n.td,{children:"addressable-entity-contract-"}),(0,a.jsx)(n.td,{children:"addressable-entity-contract-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"bytecode",children:"ByteCode"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::ByteCode"})," is a ",(0,a.jsx)(n.code,{children:"Key"})," under which a byte code record is stored. It may be one of two variants: ",(0,a.jsx)(n.code,{children:"v1-wasm"})," or ",(0,a.jsx)(n.code,{children:"empty"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"v1-wasm"})}),(0,a.jsx)(n.td,{children:"byte-code-v1-wasm-"}),(0,a.jsx)(n.td,{children:"byte-code-v1-wasm-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"empty"})}),(0,a.jsx)(n.td,{children:"byte-code-empty-"}),(0,a.jsx)(n.td,{children:"byte-code-empty-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"message",children:"Message"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::Message"})," is a ",(0,a.jsx)(n.code,{children:"Key"})," under which a message is stored."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Message Topic"}),(0,a.jsx)(n.td,{children:"message-topic-entity-contract-"}),(0,a.jsx)(n.td,{children:"message-topic-entity-contract-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Message"}),(0,a.jsx)(n.td,{children:"message-entity-contract-"}),(0,a.jsx)(n.td,{children:"message-entity-contract-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a-0202020202020202020202020202020202020202020202020202020202020202-f"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"namedkey",children:"NamedKey"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::NamedKey"})," is a ",(0,a.jsx)(n.code,{children:"Key"})," under which a single named key entry is stored."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Account Named Key"}),(0,a.jsx)(n.td,{children:"named-key-entity-account-"}),(0,a.jsx)(n.td,{children:"named-key-entity-account-928d914bdcad3ca269e750f63ed3615c5d3f615cf97dba87006fd9f979dacb3c-dde6f264c89fe385a5b07c26d77284d6fddabe79653c5ca25cec39a6363e6ec7"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Contract Named Key"}),(0,a.jsx)(n.td,{children:"named-key-entity-contract-"}),(0,a.jsx)(n.td,{children:"named-key-entity-contract-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a-2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"blockglobal",children:"BlockGlobal"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::BlockGlobal"})," is a ",(0,a.jsx)(n.code,{children:"Key"})," under which per-block details are stored to global state."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Block Time"}),(0,a.jsx)(n.td,{children:"block-time-"}),(0,a.jsx)(n.td,{children:"block-time-00000000000000000000000000000000000000000000000000000000000000"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Block Message Count"}),(0,a.jsx)(n.td,{children:"block-message-count-"}),(0,a.jsx)(n.td,{children:"block-message-count-00000000000000000000000000000000000000000000000000000000000000"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"entrypoint",children:"EntryPoint"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Key::EntryPoint"})," is a ",(0,a.jsx)(n.code,{children:"Key"})," under which an entrypoint record is written."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Prefix"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"V1 Entry Point"}),(0,a.jsx)(n.td,{children:"entry-point-v1-entity-contract-"}),(0,a.jsx)(n.td,{children:"entry-point-v1-entity-contract-53c02487fa9a4bb1cd3e27b849e942cddb97caacb357e5b6bc86f702b2e32dbb-3eba75fc27f0ec2786e09c09d72d61e4c28a86d44d8efc9911460d5438396481"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"V2 Entry Point"}),(0,a.jsx)(n.td,{children:"entry-point-v2-entity-contract-"}),(0,a.jsx)(n.td,{children:"entry-point-v2-entity-contract-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a-1"})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>c});var a=d(96540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);