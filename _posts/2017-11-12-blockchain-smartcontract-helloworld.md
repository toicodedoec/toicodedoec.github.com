---
layout: post
title: [Blockchain ABC] Write your first smart contract using Eth
tags: [blockchain, smart-contract]
---

_Post này để tổng hợp những kiến thức cơ bản collect được về smart contract_

#### 1/ Ethereum smart contract
Có nhiều bên (???) cung cấp API và hỗ trợ deploy smart contract, tuy nhiên ở thời điểm hiện tại (11/2017) thì smart contract dựa trên nền (???) Ethereum (Ethereum Smart Contract) là phổ biến nhất, nghe nói là được support nhiều về mặt API và dễ làm (???).

#### 2/ Những tool cần phải setup trước khi code
* Để viết Eth smart contract thì dùng ngôn ngữ Solidity, do đó cần install compiler cho nó, là Solc:  
```npm install -g solc```
* Để test cái smart contract của mình ở local thì cần giả lập 1 Eth node (là 1 node trong cái blockchain) ở local, __mình cần cái node này là để thông qua nó để read/write vào Eth blockchain__, giải thích rõ hơn 1 chút về ý này
> A node is a piece of software that connects to other nodes, thus participating in the formation of the network.

> This participation can be in many ways:
> - By keeping a full-copy of the blockchain
> - Keeping a shallow-copy of the blockchain
> - By verifying the transactions (Mining)

> All interaction with the blockchain (interaction with contracts, etc) needs to go via a node.

> Running a full node also enable to have a direct access to the Ethereum blockchain. If you don't have one, you will have to connect to another node, mainly using RPC connection. But you have to trust this node. Running your own removes your need to trust anyone except you and your hardware.

> Các loại node hiện tại
> - Full node is somebody connected to p2p network that verifies the blocks. I believe that all ethereum clients at this point are full nodes.
> - Lightweight nodes do not check or download the whole block-chain. See this: https://github.com/ethereum/wiki/wiki/Light-client-protocol
> - Miners are full nodes that, in addition, validate the new blocks by solving a crypto problem.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hiện tại để start 1 private node nhanh nhất thì thấy mọi người kêu xài TestRPC:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```npm install -g ethereumjs-testrpc```  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Đây là đoạn giới thiệu về testrpc trên github của nó
> testrpc is a Node.js based Ethereum client for testing and development. It uses ethereumjs to simulate full client behavior and make developing Ethereum applications much faster.
* Để build và deploy cái smart contract của mình thì cần dùng đến Truffle  
```npm install -g truffle```
#### 3/ Ok, giờ viết cái đầu tiên