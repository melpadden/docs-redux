"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[7205],{34777:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=n(74848),s=n(28453);const a={title:"Consensus"},o="Consensus Economics",r={id:"concepts/economics/consensus",title:"Consensus",description:"Highway consensus is a continuous, trust-less process where a fixed set of validators engage in scheduled communication to advance the linear chain of finalized blocks, representing the history of changes to the global state of the blockchain. The fixed set of validators may change at each era boundary. The economics of this layer revolve around validator selection and incentivization of participation according to the schedule.",source:"@site/docs/concepts/economics/consensus.md",sourceDirName:"concepts/economics",slug:"/concepts/economics/consensus",permalink:"/docs-redux/next/concepts/economics/consensus",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Consensus"},sidebar:"concepts",previous:{title:"Overview",permalink:"/docs-redux/next/economics"},next:{title:"Runtime",permalink:"/docs-redux/next/runtime"}},c={},d=[{value:"Entry",id:"entry",level:2},{value:"Bids",id:"bids",level:3},{value:"Delegation",id:"delegation",level:3},{value:"Incentives",id:"incentives",level:2},{value:"Participation",id:"participation",level:3},{value:"Distribution",id:"distribution",level:4},{value:"Participation schedule",id:"participation-schedule",level:5},{value:"Eligibility",id:"eligibility",level:5},{value:"Inactivity",id:"inactivity",level:3},{value:"Slashing",id:"slashing",level:3},{value:"Founding validators",id:"founding-validators",level:2}];function l(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"consensus-economics",children:"Consensus Economics"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/docs-redux/next/concepts/design/highway",children:"Highway consensus"})," is a continuous, trust-less process where a fixed set of validators engage in scheduled communication to advance the linear chain of finalized blocks, representing the history of changes to the global state of the blockchain. The fixed set of validators may change at each era boundary. The economics of this layer revolve around validator selection and incentivization of participation according to the schedule."]}),"\n",(0,t.jsx)(i.h2,{id:"entry",children:"Entry"}),"\n",(0,t.jsxs)(i.p,{children:["After genesis, the system selects a set of validators using a stake auction process. The auction takes place in the last block of an era, also called a switch block. An auction contract governs the validator selection process, and a ",(0,t.jsx)(i.em,{children:"chainspec"})," configuration file specifies a few key parameters:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(i.code,{children:"auction_delay"})," specifies the amount of time that needs to pass before the system enables a new set of validators. For example, the ",(0,t.jsx)(i.em,{children:"auction_delay"})," is 1 for Mainnet. Therefore, after a delay of 1 era, the winning validators become the validating set for the new era."]}),"\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(i.code,{children:"validator_slots"})," parameter specifies how many validators can win an auction. The auction selects a fixed number of validators based on their highest bids."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"bids",children:"Bids"}),"\n",(0,t.jsxs)(i.p,{children:["Each bid is a collection of tokens from a prospective or current validator and its delegators, considered in the auction as a single total. Bids and delegations can increase freely, but withdrawals are subject to an unbonding period governed by the ",(0,t.jsx)(i.code,{children:"unbonding_delay"})," chainspec parameter. Tokens that are in the unbonding period are not part of the sum total considered in the auction. Consequently, the exact amount of the bid, which translates into protocol weight for winning validators, can vary within an era. The bids are visible in the switch block that determines the winners."]}),"\n",(0,t.jsx)(i.p,{children:"Each bid contains a delegation rate and activity status. The delegation rate can change at any time. Both of these properties are described further in this document."}),"\n",(0,t.jsx)(i.h3,{id:"delegation",children:"Delegation"}),"\n",(0,t.jsx)(i.p,{children:"Delegation allows third parties to participate in consensus by adding weight to their preferred validators. Rewards received by validators are distributed in proportion to tokens bid and delegated. The current or prospective validator responsible for the bid receives a portion of the delegator rewards set by the delegation rate."}),"\n",(0,t.jsxs)(i.p,{children:["Currently, delegation is unrestricted. Please visit ",(0,t.jsx)(i.a,{href:"/docs-redux/next/concepts/economics/delegation",children:"Delegation details"})," page to check more about delegation cost and related details."]}),"\n",(0,t.jsx)(i.h2,{id:"incentives",children:"Incentives"}),"\n",(0,t.jsx)(i.p,{children:"Correct operation of the Highway protocol requires the economics of the platform to discourage equivocation for safety and incentivize participation for liveness. Participation consists of on-time block proposals and timely responses to block proposals."}),"\n",(0,t.jsx)(i.p,{children:"Safety may be incentivized through slashing for equivocation. This feature is currently disabled but may be reactivated in the future."}),"\n",(0,t.jsx)(i.p,{children:"The network incentivizes participation by scaling rewards for on-time proposals and responses, taking into account the speed of finalizing blocks. All rewards are added directly to the corresponding bids and delegations."}),"\n",(0,t.jsx)(i.h3,{id:"participation",children:"Participation"}),"\n",(0,t.jsx)(i.p,{children:"Issuance of new tokens and their distribution to validators incentivizes work even under low transaction load."}),"\n",(0,t.jsx)(i.p,{children:"CSPR is issued at a fixed rate and distributed to validators (and, indirectly, delegators) in proportion to their stake. This is analogous to block rewards in Proof-of-Work blockchains, outlining the following:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The growth of CSPR supply is exponential"}),"\n",(0,t.jsx)(i.li,{children:"Issuance takes into account slashed CSPR"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"With slashing disabled, we can compute block rewards starting with the formula below, where we have these parameters:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"i"})," - the era's index as a positive integer [0, 1, 2, ..., n]"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"initial_supply"})," - the number of CSPR at genesis"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"issuance_rate"})," - the annual rate at which new CSPR tokens are minted"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"ticks_per_year"})," - the number of milliseconds in a year equal to 31,536,000,000"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"supply(i) = initial_supply * (1 + issuance_rate)^(tick_at_era_start(i) / ticks_per_year)\n"})}),"\n",(0,t.jsxs)(i.p,{children:["We introduce the ",(0,t.jsx)(i.em,{children:"round issuance rate"})," (corresponding to the chainspec parameter ",(0,t.jsx)(i.code,{children:"round_seigniorage_rate"}),") with this formula:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"round_issuance_rate = (1 + issuance_rate)^(2^minimum_round_exponent / ticks_per_year) - 1\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.em,{children:"round issuance rate"})," is the annual issuance rate adjusted to a single round of length determined by the chainspec parameter ",(0,t.jsx)(i.code,{children:"minimum_round_exponent"}),". For illustration, an exponent of 14 corresponds to a round length of roughly 16 seconds."]}),"\n",(0,t.jsx)(i.p,{children:"Finally, the base round reward is computed as:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"base_round_reward(i) = round_issuance_rate * supply(i)\n"})}),"\n",(0,t.jsx)(i.p,{children:"This value gives us the maximum amount of CSPR that the validators can collectively receive from a proposed block."}),"\n",(0,t.jsx)(i.h4,{id:"distribution",children:"Distribution"}),"\n",(0,t.jsx)(i.p,{children:"Validators receive tokens for proposing and finalizing blocks according to their performance. The concept of weight is crucial for understanding this distribution scheme:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Weight:"})," A validator's bonded stake, used in consensus"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Assigned weight of a block/round:"})," The total stake of validators scheduled to participate in a block"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Participated weight of a block/round:"})," The total stake of validators that end up participating or sending messages to finalize a block before the end of their respective round"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["To determine eligibility, we look at ",(0,t.jsx)(i.strong,{children:"on-time finalization (OTF)"}),". Validators should finalize blocks on time by sending required messages before the end of their respective round."]}),"\n",(0,t.jsx)(i.p,{children:"Switch blocks are not visible to the issuance calculation (as this calculation is performed in the switch block itself for each era), and, consequently, no tokens are issued for switch blocks."}),"\n",(0,t.jsx)(i.h5,{id:"participation-schedule",children:"Participation schedule"}),"\n",(0,t.jsxs)(i.p,{children:["The participation schedule is segmented into rounds, which are allocated dynamically according to the validators' exponents and a deterministic (randomized at era start) assignment of validators to milliseconds of an era. Thus, a validator with the round exponent ",(0,t.jsx)(i.code,{children:"n"})," must participate in rounds that repeat every ",(0,t.jsx)(i.code,{children:"2^n"})," ticks."]}),"\n",(0,t.jsx)(i.p,{children:"Each validator is assessed according to its round exponent. All assigned validators become eligible to receive tokens as long as the block gets finalized with messages sent within each validator's round."}),"\n",(0,t.jsx)(i.h5,{id:"eligibility",children:"Eligibility"}),"\n",(0,t.jsxs)(i.p,{children:["Once a block has been proposed and enough time has passed, the history of protocol messages can be examined to detect whether the block was finalized on time, according to the conditions given above. If the block was ",(0,t.jsx)(i.em,{children:"not"})," finalized on time, validators receive a fraction of the expected tokens, governed by the ",(0,t.jsx)(i.code,{children:"reduced_reward_multiplier"})," chainspec parameter. If the block was finalized on time, assigned validators share the reward proportionally to their stake, regardless of whether they have sent messages or not."]}),"\n",(0,t.jsx)(i.h3,{id:"inactivity",children:"Inactivity"}),"\n",(0,t.jsx)(i.p,{children:"Validators who send no messages during an entire era are marked as inactive and cease participating in the auction until they send a special deploy that reactivates their bid."}),"\n",(0,t.jsx)(i.h3,{id:"slashing",children:"Slashing"}),"\n",(0,t.jsxs)(i.p,{children:["Please review our ",(0,t.jsx)(i.a,{href:"https://github.com/casper-network/ceps/blob/master/text/0038-equivocator-policy.md",children:"Equivocator Policy"}),". We are currently conducting research into the utility of slashing as an incentive mechanism."]}),"\n",(0,t.jsx)(i.h2,{id:"founding-validators",children:"Founding validators"}),"\n",(0,t.jsx)(i.p,{children:"Founding validators are subject to token lock-up, which prevents them from withdrawing any tokens from their bids for 90 days, then releases their genesis bid tokens in weekly steps, linearly, over an additional 90 days."})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>r});var t=n(96540);const s={},a=t.createContext(s);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);