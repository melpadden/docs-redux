---
title: Contract Staking in Casper 2.0
description: A discussion of the Contract Staking feature in Casper 2.0
slug: contract-staking
date: 2024-08-20T18:00
authors: [ melpadden ]
tags: [v2, contract-staking ]
hide_table_of_contents: false
---

# Contract Staking in Casper 2.0

## What is Contract Staking?
Contract staking involves allowing a smart contract to participate in staking mechanisms, such as delegation, where tokens from a contract-controlled purse can be staked on a validator node. To this point, staking was only allowed under certain constraints. This update to the staking mechanism enables more sophisticated staking logic to be created.

## Current System Constraints

### Identity via Public Key:
The current system associates staking and delegation with public keys. This is a necessity for validators since public keys are used to verify signatures in consensus processes. Delegators also use public keys for identity, even though they do not actively participate in consensus. This is primarily an implementation choice rather than a technical requirement.

### Accounts and Purses:
Delegation today is tied to accounts and their associated main purses. A contract lacks:
- A public key
- A main purse by default

### Record Keeping:
In the existing implementation, delegations are embedded within validator bids (not separate records). This creates complexity in adapting the system to support new staking entities like contracts.

### Historical and Legacy Constraints:
Overall, The current system's reliance on public keys and existing record structures means that significant modifications are required to support contracts in staking processes.

## Mechanics
Instead of relying on public keys for identity, staking is linked directly to purses (token-holding objects). A contract would have a purse, and staking would involve: 
- Identifying the purse as the source of the staked tokens.
- Ensuring the destination of returns (unstaked tokens and rewards) is correctly mapped.

### Permission Management:
Managing access to any smart contract endpoint that uises this feature is a userland concern, i.e. shoudl be programmed by the Smart Contract author. A given smart contract instance needs to provision a purse, and call the auction via call_contract, passing the action (delegate, undelegate, redelegate) and the args. Securing access to that shooudl be treated exactly like securing any other smart contract endpoint. 

An example of this in action can be found here:
 - Installer: https://github.com/casper-network/casper-node/pull/4976/files#diff-e38aca6299ae33c901c55e656c496a22a769e5eeafd4fb2c014afacca3aacaf6R1

 - Contract: https://github.com/casper-network/casper-node/pull/4976/files#diff-173516bc3daa99a4e384907327fb9074341d005048b6c073ba0d59223f4dffa4R1

### Liquidity Maintenance:
Contracts should balance staked and unstaked tokens to ensure liquidity if they operate as intermediaries (e.g., in liquid staking scenarios).


