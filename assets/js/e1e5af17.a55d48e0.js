"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[60202],{26628:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var n=s(74848),a=s(28453);const t={title:"Zug Consensus"},r="Simple and Fast Consensus with Zug",i={id:"concepts/design/zug",title:"Zug Consensus",description:"The Casper node was designed with a pluggable consensus protocol in mind. So far the only choice was Highway. Casper 2.0.0 has added Zug, a much simpler consensus protocol.",source:"@site/docs/concepts/design/zug.md",sourceDirName:"concepts/design",slug:"/concepts/design/zug",permalink:"/concepts/design/zug",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Karol Marter",lastUpdatedAt:1724650828e3,frontMatter:{title:"Zug Consensus"},sidebar:"concepts",previous:{title:"Consensus in a Casper Network",permalink:"/concepts/design/consensus"},next:{title:"Highway Consensus",permalink:"/concepts/design/highway"}},l={},d=[{value:"How Zug Works",id:"how-zug-works",level:2},{value:"Some Advantages of Zug",id:"some-advantages-of-zug",level:2},{value:"Comparison with Highway",id:"comparison-with-highway",level:2},{value:"Block Rewards",id:"block-rewards",level:3},{value:"Read the Paper",id:"read-the-paper",level:2}];function h(e){const o={a:"a",admonition:"admonition",b:"b",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",summary:"summary",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"simple-and-fast-consensus-with-zug",children:"Simple and Fast Consensus with Zug"})}),"\n",(0,n.jsxs)(o.p,{children:["The Casper node was designed with a pluggable consensus protocol in mind. So far the only choice was Highway. Casper 2.0.0 has added Zug, ",(0,n.jsx)(o.a,{href:"https://arxiv.org/abs/2205.06314",children:"a much simpler consensus protocol"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"The Zug protocol requires that at most one-third of the validator weight could be attributed to faulty validators. It also assumes that there exists an upper bound for the network delay, which is the duration for a correct validator to deliver a message. The value of the upper bound may be unknown, but it exists. Under these conditions, all correct nodes will reach agreement on a chain of finalized blocks."}),"\n",(0,n.jsxs)(o.p,{children:["Of course, all nodes in a network have to run the same protocol to work together, but when starting a new network or upgrading an existing one, either ",(0,n.jsx)(o.code,{children:"Highway"})," or ",(0,n.jsx)(o.code,{children:"Zug"})," can now be selected as the ",(0,n.jsx)(o.code,{children:"consensus_protocol"})," in the chainspec file. The Casper Mainnet will switch to Zug."]}),"\n",(0,n.jsx)(o.h2,{id:"how-zug-works",children:"How Zug Works"}),"\n",(0,n.jsxs)(o.p,{children:["In every round, the designated leader can sign a ",(0,n.jsx)(o.strong,{children:"proposal message"})," to suggest a block. The proposal also points to an earlier round in which the parent block was proposed."]}),"\n",(0,n.jsxs)(o.p,{children:["Each validator then signs an ",(0,n.jsx)(o.strong,{children:"echo message"})," with the proposal's hash. Correct validators only sign one echo per round, so at most one proposal can get echo messages signed by a quorum. A ",(0,n.jsx)(o.strong,{children:"quorum"})," is a set of validators whose total weight is greater than ",(0,n.jsx)(o.code,{children:"(n + f) / 2"}),", where ",(0,n.jsx)(o.code,{children:"n"})," is the total weight of all validators and ",(0,n.jsx)(o.code,{children:"f"})," is the maximum allowed total weight of faulty validators. Thus, any two quorums always have a correct validator in common. As long as ",(0,n.jsx)(o.code,{children:"n > 3f"}),", the correct validators will constitute a quorum since ",(0,n.jsx)(o.code,{children:"(n + f) / 2 < n - f"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"The proposal is accepted if there is a quorum and some other conditions are met (see below). Now, the next round's leader can make a new proposal that uses this proposal as a parent."}),"\n",(0,n.jsxs)(o.p,{children:["Each validator observing the proposal in time signs a ",(0,n.jsx)(o.code,{children:"Vote(true)"})," message. If validators time out while waiting, they sign ",(0,n.jsx)(o.code,{children:"Vote(false)"})," message instead. If a quorum signs ",(0,n.jsx)(o.em,{children:"true"}),", the round is committed and the proposal and all its ancestors are finalized. If a quorum signs ",(0,n.jsx)(o.em,{children:"false"}),", the round is ",(0,n.jsx)(o.strong,{children:"skippable"}),", meaning that the next round's leader can propose a block with a parent from an earlier round. Correct validators only sign either ",(0,n.jsx)(o.em,{children:"true"})," or ",(0,n.jsx)(o.em,{children:"false"}),", so a round can be either committed or skippable, but not both."]}),"\n",(0,n.jsxs)(o.p,{children:["If there is no accepted proposal, all correct validators will eventually vote ",(0,n.jsx)(o.em,{children:"false"}),", so the round becomes skippable. This is what makes the protocol ",(0,n.jsx)(o.strong,{children:"live"}),". The next leader will eventually be allowed to make a proposal because either there is an accepted proposal that can be the parent, or the round will eventually be skippable, and an earlier round's proposal can be used as a parent. If the timeout is long enough, the correct proposers' blocks will usually get finalized."]}),"\n",(0,n.jsxs)(o.p,{children:["For a proposal to be accepted, the parent proposal must also be accepted, and all rounds between the parent and the current round must be skippable. This is what makes the protocol ",(0,n.jsx)(o.strong,{children:"safe"}),". If two rounds are committed, their proposals must be ancestors of each other because they are not skippable. Thus, the protocol cannot finalize two conflicting blocks."]}),"\n",(0,n.jsx)(o.p,{children:"Of course, there is also a first block. Whenever all earlier rounds are skippable (particularly the first round), the leader may propose a block with no parent."}),"\n",(0,n.jsxs)(o.p,{children:["Every new signed message is optimistically sent directly to all peers. We want to guarantee that it is eventually seen by all validators, even if they are not fully connected. This is achieved via a pull-based randomized gossip mechanism, where a ",(0,n.jsx)(o.code,{children:"SyncRequest"})," message containing information about a random part of the local protocol state is periodically sent to a random peer. The peer compares that to its local state and responds with all the signed messages that it has recorded."]}),"\n",(0,n.jsxs)(o.admonition,{type:"important",children:[(0,n.jsx)(o.p,{children:"The Zug protocol can be summarized as follows:"}),(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["In every round, the round leader proposes a new block, ",(0,n.jsx)(o.code,{children:"B"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:["Every validator creates and broadcasts an ",(0,n.jsx)(o.em,{children:"echo"})," message, with a signature of ",(0,n.jsx)(o.code,{children:"B"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:["When a suitable block ",(0,n.jsx)(o.code,{children:"B"})," has received echoes from 67% of the validators:\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["The next round begins. The next leader can propose a child of ",(0,n.jsx)(o.code,{children:"B"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:["Every validator signs and broadcasts a ",(0,n.jsx)(o.em,{children:"vote"})," message, voting ",(0,n.jsx)(o.code,{children:"yes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["If this does not happen before a timeout, the validators vote ",(0,n.jsx)(o.code,{children:"no"})," instead.\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["If there are ",(0,n.jsx)(o.code,{children:"no"})," votes from 67%, the next round begins, too.\nThe next leader can propose a child from an earlier block and skip this round."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["If there are ",(0,n.jsx)(o.code,{children:"yes"})," votes from 67%, ",(0,n.jsx)(o.code,{children:"B"})," is finalized and gets executed, together with all its ancestors. (Usually, the next round has already started at this point.)"]}),"\n"]})]}),"\n",(0,n.jsxs)(o.p,{children:["Notice that proposals, votes, and echoes are broadcast, so if one correct node receives a message, all nodes will eventually receive it. An honest validator sends only one echo or vote per round. So, unless 34% of validators double-sign, at most one block per round gets 67% echoes, and no finalized block can ever be skipped, ensuring safety. As long as there are 67% of echoes for a proposal, the next round begins and Zug doesn't get stuck. If there are not, everyone votes ",(0,n.jsx)(o.code,{children:"no"}),", and the next round also begins."]}),"\n",(0,n.jsxs)(o.details,{children:["\n",(0,n.jsx)(o.summary,{children:(0,n.jsx)(o.b,{children:"Expand to see a simple example"})}),"\n",(0,n.jsx)(o.p,{children:"Let's review a simple scenario demonstrating the Zug consensus. The example shows five rounds with a different leader and nodes voting on a card suit. The bottom row indicates whether or not the round was finalized. Notice that round 5 was the first finalized round."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"ZUG",src:s(5484).A+"",width:"1284",height:"528"})}),"\n",(0,n.jsxs)(o.p,{children:["In round 1, we had a leader who proposed ",(0,n.jsx)(o.code,{children:"\u2665"}),", but was slow, so the other nodes timed out and voted ",(0,n.jsx)(o.code,{children:"no."})," The first round had a proposal and was skippable, but nothing was finalized."]}),"\n",(0,n.jsxs)(o.p,{children:["In round 2, the second proposer saw ",(0,n.jsx)(o.code,{children:"\u2665"})," and proposed ",(0,n.jsx)(o.code,{children:"\u2663"})," as a child of ",(0,n.jsx)(o.code,{children:"\u2665"}),". Some nodes voted ",(0,n.jsx)(o.code,{children:"yes"}),", and some timed out and voted ",(0,n.jsx)(o.code,{children:"no"}),". So, round 2 will never output anything because there wasn't a decision."]}),"\n",(0,n.jsxs)(o.p,{children:["In round 3, the leader proposed ",(0,n.jsx)(o.code,{children:"\u2666"})," as a child of ",(0,n.jsx)(o.code,{children:"\u2663"}),". Assuming the leader was still too slow, everyone voted ",(0,n.jsx)(o.code,{children:"no"}),", and round 3 became skippable even though it had a proposal."]}),"\n",(0,n.jsxs)(o.p,{children:["In round 4, the proposer might have crashed or been malicious, so everyone timed out and voted ",(0,n.jsx)(o.code,{children:"no"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["In round 5, the leader didn't see the ",(0,n.jsx)(o.code,{children:"\u2666"})," proposal from round 3 but saw the ",(0,n.jsx)(o.code,{children:"no"})," decision. So, from their perspective, rounds 3 and 4 were skippable and had no proposals. Thus, the leader in round 5 proposed ",(0,n.jsx)(o.code,{children:"\u2660"})," as a child of ",(0,n.jsx)(o.code,{children:"\u2663"}),". ",(0,n.jsx)(o.strong,{children:"Notice that the algorithm encountered a fork"}),". Regardless, everyone voted ",(0,n.jsx)(o.code,{children:"yes"}),", and round 5 was finalized. I.e., at that moment, ",(0,n.jsx)(o.code,{children:"\u2665"}),", ",(0,n.jsx)(o.code,{children:"\u2663"}),", and ",(0,n.jsx)(o.code,{children:"\u2660"})," all become finalized and executed in that order. As a result, every future proposer needs to propose children of this round."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Important Notes:"})}),"\n",(0,n.jsxs)(o.p,{children:["Even proposals from rounds with a quorum of ",(0,n.jsx)(o.code,{children:"no"})," votes can become finalized indirectly."]}),"\n",(0,n.jsxs)(o.p,{children:["If a round is neither finalized nor skippable, the round will likely be finalized at some point in the future. When one-third of the network's weight votes ",(0,n.jsx)(o.code,{children:"yes"}),", a proposal with a quorum of echoes is formed. Consequently, all other honest nodes will eventually see this quorum of echoes and the accepted proposal, which will serve as a parent in future rounds."]}),"\n",(0,n.jsxs)(o.p,{children:["Nodes vote ",(0,n.jsx)(o.code,{children:"yes"})," when they have a quorum of echoes, and all the ancestors of that proposal have a quorum of echoes. Also, those ancestors have a quorum of echoes, and the rounds with no ancestors all have a quorum of ",(0,n.jsx)(o.code,{children:"no"})," votes (being skippable)."]}),"\n",(0,n.jsxs)(o.p,{children:["The algorithm will always produce a result in at least one of the ",(0,n.jsx)(o.code,{children:"Accepted proposal"})," or ",(0,n.jsx)(o.code,{children:"Finalized round"})," rows. If a proposal doesn't get accepted in a round, everyone times out and votes ",(0,n.jsx)(o.code,{children:"no"}),". Otherwise, a proposal is visible to someone with a quorum of votes and will eventually be visible to everyone."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"some-advantages-of-zug",children:"Some Advantages of Zug"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Apart from the leader, who has to send the proposed block, each validator node broadcasts only two tiny messages in each round, making the communication overhead very small."}),"\n",(0,n.jsx)(o.li,{children:"Unlike in Highway and Practical Byzantine Fault Tolerance (PBFT), and similar to pipelined protocols like HotStuff, only one round of messages (the echoes) is needed for the next leader to propose a block, reducing the delay between a block and its child."}),"\n",(0,n.jsxs)(o.li,{children:["But ",(0,n.jsx)(o.em,{children:"unlike"})," HotStuff, Zug can finalize a block without waiting for its child or grandchild. And, unlike Highway, it does so without waiting for any timeout. Even if a network is configured to produce only one block per minute, every block gets finalized within seconds, as fast as the network connections allow."]}),"\n",(0,n.jsx)(o.li,{children:"Zug's technical description is more flexible than Highway's, giving us a family of related, correct implementations from which to choose."}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"comparison-with-highway",children:"Comparison with Highway"}),"\n",(0,n.jsxs)(o.p,{children:["Unlike Highway, Zug does not use a communication history DAG. Highway sends larger messages due to citing and is slower. Zug does not have any notion of citing units, as does Highway, and relies on exchanging signed messages. On the other hand, Highway allows for more fine-grained ",(0,n.jsx)(o.a,{href:"#block-rewards",children:"block rewards"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["With Zug, finality happens after nodes constituting two-thirds of the network's total weight vote ",(0,n.jsx)(o.code,{children:"true"})," for a round in which the block was proposed or a later round that has this one as an ancestor. Highways' criterion for detecting finality is the presence of a pattern of messages called a ",(0,n.jsx)(o.code,{children:"Summit."})," Summits preserve the advantage of tunable fault tolerance while being detected in polynomial time. Both ways of detecting finality are improvements over previous CBC Casper finality criteria, which were more difficult to attain and computationally more expensive to detect."]}),"\n",(0,n.jsx)(o.p,{children:"Highway and Zug offer flexibility in terms of fault tolerance thresholds. Highway allows different clients to follow the protocol with varying thresholds, each with its own balance between security and latency. However, if a sufficient number of validators are online, Zug demonstrates lower latency than Highway at any threshold. This is because Zug does not have predefined, rigid values for the round length, and its design allows the network to adapt to actual delays. If delays occur, block times may vary. Otherwise, blocks should appear as soon as they are finalized. Highway has a defined minimum round length, and the round lengths have to be powers of two times that minimum. Zug has a defined minimum round length, but a round can finish anytime as soon as enough messages are successfully exchanged. So, with Zug, there is no need to wait for a power of two times the minimum if the actual time falls somewhere between."}),"\n",(0,n.jsx)(o.p,{children:"Highway is a much more complicated protocol than Zug. Implementing it takes more than twice as many lines of code. Also, Highway's proof of correctness has proved more difficult to verify than Zug's. Zug will make it easier for third parties to create compatible node software that works with the Casper node."}),"\n",(0,n.jsx)(o.p,{children:"Using Zug consensus and smaller messages, the network could scale to a larger number of validators."}),"\n",(0,n.jsx)(o.h3,{id:"block-rewards",children:"Block Rewards"}),"\n",(0,n.jsx)(o.p,{children:"Using a DAG in Highway makes fine-grained information about the validators' behavior available temporarily in the protocol state, so block rewards can be tuned to incentivize full participation in the consensus protocol. However, this does not apply at the end of each era. Any message sent after the era's last block was proposed cannot be taken into account, even though these messages are still needed to finalize that block. And this granularity comes at a cost: Highway messages are relatively big."}),"\n",(0,n.jsx)(o.p,{children:"The current system does not reward finality signatures, which are arguably the most important outcome. The signatures are the user-visible proof, signed by the validators, that an executed block is correct."}),"\n",(0,n.jsx)(o.p,{children:"In Zug, messages are much smaller, so a smaller incentive is needed to send them."}),"\n",(0,n.jsx)(o.p,{children:"Casper 2.0.0 will distribute a configurable fraction of the seigniorage as a reward for finality signatures and the rest as a simple reward for each block, both proportionally to the validators' stakes."}),"\n",(0,n.jsx)(o.p,{children:"This new reward system is simpler, fairer, predictable, and transparent. It will give equal weight to all blocks (including at the end of an era), but it will not take into account every single consensus message."}),"\n",(0,n.jsx)(o.h2,{id:"read-the-paper",children:"Read the Paper"}),"\n",(0,n.jsxs)(o.p,{children:["Here, we describe Zug, an implementation of the ideas from our paper ",(0,n.jsx)(o.a,{href:"https://arxiv.org/abs/2205.06314",children:"From Weakly-terminating Binary Agreement and Reliable Broadcast to Atomic Broadcast"}),". The paper, however, contains a much more general algorithm parameterized by the two subprotocols named in the title: Reliable Broadcast and Weakly-terminating Binary Agreement. In our specialization of this algorithm made for the Casper blockchain, the ",(0,n.jsx)(o.em,{children:"echo"})," messages are used by our Reliable Broadcast implementation, and the ",(0,n.jsx)(o.em,{children:"vote"})," messages are used by our Weakly-terminating Binary Agreement implementation."]})]})}function c(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5484:(e,o,s)=>{s.d(o,{A:()=>n});const n=s.p+"assets/images/zug-example-5515691ed63d9f310e573eb5742c1701.png"},28453:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>i});var n=s(96540);const a={},t=n.createContext(a);function r(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);