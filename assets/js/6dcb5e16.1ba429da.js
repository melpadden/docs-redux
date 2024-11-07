"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[4005],{10820:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"concepts/economics/fee-elimination","title":"Fee Elimination","description":"Casper networks support configurable fee, refund, and pricing strategies. The Mainnet Condor release has enabled \\"fee elimination\\", also known as the \\"no fee mode\\", or \\"no fee transactions\\" to reduce operational costs for developers. This configurable feature places balance holds on a user\'s purse rather than taking fees for sending transactions to the network. This behavior benefits parties who send periodic transactions, as their gas costs are locked for some time and then either released all at once or linearly over time, depending on the chainspec settings. Recall that the network chainspec contains all the configuration choices on which every node must agree.","source":"@site/docs/concepts/economics/fee-elimination.md","sourceDirName":"concepts/economics","slug":"/concepts/economics/fee-elimination","permalink":"/next/concepts/economics/fee-elimination","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{"title":"Fee Elimination"},"sidebar":"concepts","previous":{"title":"Dynamic Gas Pricing","permalink":"/next/concepts/economics/dynamic-gas-pricing"},"next":{"title":"Staking","permalink":"/next/concepts/economics/staking"}}');var o=a(74848),i=a(28453);const s={title:"Fee Elimination"},r="Fee Elimination on Mainnet",c={},l=[{value:"Chainspec Configurations",id:"chainspec-configurations",level:2},{value:"Mainnet Condor Configurations",id:"mainnet-condor-configurations",level:3},{value:"Computational and Storage Costs",id:"computational-and-storage-costs",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"fee-elimination-on-mainnet",children:"Fee Elimination on Mainnet"})}),"\n",(0,o.jsx)(n.p,{children:'Casper networks support configurable fee, refund, and pricing strategies. The Mainnet Condor release has enabled "fee elimination", also known as the "no fee mode", or "no fee transactions" to reduce operational costs for developers. This configurable feature places balance holds on a user\'s purse rather than taking fees for sending transactions to the network. This behavior benefits parties who send periodic transactions, as their gas costs are locked for some time and then either released all at once or linearly over time, depending on the chainspec settings. Recall that the network chainspec contains all the configuration choices on which every node must agree.'}),"\n",(0,o.jsxs)(n.p,{children:["Instead of paying for gas to execute transactions, the ",(0,o.jsx)(n.code,{children:"no_fee"})," chainspec configuration instructs the network to place a balance hold on the paying purse without transferring tokens from the purse: ",(0,o.jsx)(n.code,{children:"fee_handling = { type = 'no_fee'}"}),'. The portion of a purse balance that is locked is not available to transfer or spend until it is released; it is marked with a timestamp equal to the block time. In the "no fee" mode, the available balance of a purse equals its actual total balance minus all non-expired balance holds on that purse. The configurable ',(0,o.jsx)(n.code,{children:"gas_hold_interval"})," determines how long a balance hold remains in effect. The on-chain logic calculates the correct values for total balance and available balance. The ",(0,o.jsx)(n.a,{href:"/next/developers/json-rpc/json-rpc-informational#query_balance_details",children:"query_balance_details"})," RPC endpoint provides details on available balances and hold records."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"A processing hold is not the same as a gas (or balance) hold. The processing hold is a temporary hold that prevents double spend. For example, if you want to do a transfer, you also need to cover the cost of the transfer."})}),"\n",(0,o.jsx)(n.h2,{id:"chainspec-configurations",children:"Chainspec Configurations"}),"\n",(0,o.jsxs)(n.p,{children:["The following ",(0,o.jsx)(n.a,{href:"/next/operators/setup-network/chain-spec",children:"chainspec configurations"})," manage this feature:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"fee_handling"}),' - Defines how fees are handled. To enable the "no fee" mode, set it to ',(0,o.jsx)(n.code,{children:"{ type = 'no_fee'}"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"refund_handling"}),' Defines how refunds of the unused portion of payment amounts are calculated and handled. For this setting to work with the "no fee" mode, set it to ',(0,o.jsx)(n.code,{children:"{ type = 'no_refund'}"}),". If no fees are transferred from the paying purse, no refunds need to be paid out."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"pricing_handling"})," - Defines how pricing is handled. For this setting to work with the ",(0,o.jsx)(n.code,{children:"no_fee"})," mode, set it to ",(0,o.jsx)(n.code,{children:"{ type = 'fixed'}"}),", which means that costs are fixed per the cost table, and senders do not specify how much they pay."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"validator_credit_cap"})," - The validator credit cannot exceed this percentage of their total stake."]}),"\n",(0,o.jsx)(n.li,{children:"`gas_hold_balance_handling - Defines how gas holds affect available balance calculations. Valid options are 'accrued' (the sum of the full value of all non-expired holds) and 'amortized' (the sum of each hold is amortized over the time remaining until expiry)."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gas_hold_interval"})," - Defines how long gas holds last."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"mainnet-condor-configurations",children:"Mainnet Condor Configurations"}),"\n",(0,o.jsx)(n.p,{children:"These are the fee elimination settings for the Condor release on Mainnet:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:"# Defines how refunds of the unused portion of payment amounts are calculated and handled.\n#\n# Valid options are:\n#   'refund': a ratio of the unspent token is returned to the spender.\n#   'burn': a ratio of the unspent token is burned.\n#   'no_refund': no refunds are paid out; this is functionally equivalent to refund with 0% ratio.\n# This causes excess payment amounts to be sent to either a\n# pre-defined purse, or back to the sender.  The refunded amount is calculated as the given ratio of the payment amount\n# minus the execution costs.\nrefund_handling = { type = 'no_refund' }\n# Defines how fees are handled.\n#\n# Valid options are:\n#   'no_fee': fees are eliminated.\n#   'pay_to_proposer': fees are paid to the block proposer\n#   'accumulate': fees are accumulated in a special purse and distributed at the end of each era evenly among all\n#                 administrator accounts\n#   'burn': fees are burned\nfee_handling = { type = 'no_fee' }\n# If a validator would recieve a validator credit, it cannot exceed this percentage of their total stake.\nvalidator_credit_cap = [1, 5]\n# Defines how pricing is handled.\n#\n# Valid options are:\n#   'classic': senders of transaction self-specify how much they pay.\n#   'fixed': costs are fixed, per the cost table\n#   'reserved': prepaid transaction (currently not supported)\npricing_handling = { type = 'fixed' }\n\n# Defines how gas holds affect available balance calculations.\n#\n# Valid options are:\n#   'accrued': sum of full value of all non-expired holds.\n#   'amortized': sum of each hold is amortized over the time remaining until expiry.\n#\n# For instance, if 12 hours remained on a gas hold with a 24-hour `gas_hold_interval`,\n#   with accrued, the full hold amount would be applied\n#   with amortized, half the hold amount would be applied\ngas_hold_balance_handling = { type = 'accrued' }\n# Defines how long gas holds last.\n#\n# If fee_handling is set to 'no_fee', the system places a balance hold on the payer\n# equal to the value the fee would have been. Such balance holds expire after a time\n# interval has elapsed. This setting controls how long that interval is. The available\n# balance of a purse equals its total balance minus the held amount(s) of non-expired\n# holds (see gas_hold_balance_handling setting for details of how that is calculated).\n#\n# For instance, if gas_hold_interval is 24 hours and 100 gas is used from a purse,\n# a hold for 100 is placed on that purse and is considered when calculating total balance\n# for 24 hours starting from the block_time when the hold was placed.\ngas_hold_interval = '24 hours'\n"})}),"\n",(0,o.jsx)(n.h2,{id:"computational-and-storage-costs",children:"Computational and Storage Costs"}),"\n",(0,o.jsxs)(n.p,{children:["Despite the introduction of fee elimination, the network continues to track ",(0,o.jsx)(n.a,{href:"/next/concepts/design/casper-design#measuring-computational-work-execution-semantics-gas",children:"computational cost"})," based on opcodes as defined in the chainspec, thus retaining the ",(0,o.jsx)(n.a,{href:"/next/concepts/economics/gas-concepts",children:"gas pricing mechanism"}),". Opcodes enable Casper nodes to agree on the computational cost of transactions, commonly known as gas. This mechanism is a solution to the halting problem in a distributed network, and it abstracts the computational cost in a way that is deterministically consistent across multiple machines."]}),"\n",(0,o.jsx)(n.p,{children:"Storage costs are also tracked and calculated using gas. Data written to global state is recorded forever and has a cost; therefore, the network charges for the Wasm that stores data in global state."}),"\n",(0,o.jsxs)(n.p,{children:["This feature complements the ",(0,o.jsx)(n.a,{href:"/next/concepts/economics/dynamic-gas-pricing",children:"dynamic gas pricing"})," model introduced and configured to scale gas costs based on network utilization."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var t=a(96540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);