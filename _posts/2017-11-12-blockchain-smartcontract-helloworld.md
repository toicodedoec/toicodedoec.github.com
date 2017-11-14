---
layout: post
title: Blockchain ABC Write your first smart contract using Eth
tags: [blockchain, smart-contract]
---

_Post này để tổng hợp những kiến thức cơ bản collect được về smart contract_

#### 1/ Ethereum smart contract
Có nhiều bên (???) cung cấp API và hỗ trợ deploy smart contract, tuy nhiên ở thời điểm hiện tại (11/2017) thì smart contract dựa trên nền (???) Ethereum (Ethereum Smart Contract) là phổ biến nhất, nghe nói là được support nhiều về mặt API và dễ làm (???).

#### 2/ Những tool cần phải setup trước khi code
a/ Để viết Eth smart contract thì dùng ngôn ngữ Solidity, do đó cần install compiler cho nó, là Solc:  
```npm install -g solc```  
b/ Để test cái smart contract của mình ở local thì cần giả lập 1 Eth node (là 1 node trong cái blockchain) ở local, __mình cần cái node này là để thông qua nó để read/write vào Eth blockchain__, giải thích rõ hơn 1 chút về ý này
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

> In the simplest form, an Ethereum node is any device that is running the Ethereum protocol (blockchain). While nodes are typically running on desktops & laptops, development for mobile is on going. When we connect to the Ethereum protocol we are on the Ethereum blockchain network and are running a node. By running an Ethereum node we can connect to other nodes in the network, have direct access to the blockchain, and even do things like mine blocks, send transactions, and deploy smart contracts.

Hiện tại để start 1 private node nhanh nhất thì thấy mọi người kêu xài TestRPC:  
```npm install -g ethereumjs-testrpc```  

Đây là đoạn giới thiệu về testrpc trên github của nó
> testrpc is a Node.js based Ethereum client for testing and development. It uses ethereumjs to simulate full client behavior and make developing Ethereum applications much faster.  

Một cách giải thích khác về chức năng của nó
> It's a complete blockchain-in-memory that runs only on your development machine. It processes transactions instantly instead of waiting for the default block time -- so you can test that your code works quickly -- and it tells you immediately when your smart contracts run into errors.

Vậy có thể hiểu là __testrpc__ giúp giả lập 1 in-memory blockchain (có thể hiểu đơn giản blockchain là 1 database chứa thông tin về tất cả các transaction và history của từng transaction) ở local, nếu ko thì mình phải làm việc với 1 real blockchain (download toàn bộ thông tin của Eth blockchain về local của mình từ [other peers] (???)).

c/ Để build và deploy cái smart contract của mình thì cần dùng đến Truffle (https://truffle.readthedocs.io/en/beta/):   
```npm install -g truffle```

#### 3/ Ok, giờ viết cái đầu tiên
a/ Đầu tiên start Eth node lên  
```
testrpc
```
Khi start lên thì __testrpc__ sẽ tạo 10 fake accounts để chúng ta test, và mỗi fake account này có 100 fake Eth.  
```
Available Accounts
==================
(0) 0xe39ee414b12edd0e3c7a66739487241953d30556
(1) 0x8fe9095a6ea0e2c496f3bc1e4aab48406f67efdf
(2) 0xa97ae8de560f378401849fc42d21d6fb2489f9ee
(3) 0xe57fc3a949fda70e0123ff5d26f6959e7182556f
(4) 0xfa9e2463801bdb56a0bb9efa270cb4414e703be6
(5) 0x8e417fc4ed9c4697fe2e307d7f355239f1225132
(6) 0xa81dc5f136686b2823f0fc66a2617a2279185aa7
(7) 0xb8d7a5c348d7f4a211b1734ff0eac2e52a243891
(8) 0xcac042e502ecb511a6af56cd3318a4547c8e850b
(9) 0x471f341676b6903cb14bf6aa5743ff4b452a8d6d

Private Keys
==================
(0) 03cd10fd3b2881db63394c7a7f18f21798fe9b24df36713e3ed186462f9f1470
(1) 1d781d2ae47e2cce225e0d27fcf3fa5fb7c33d7e9c49e54fc9b836b85798acd1
(2) 0a967a8bc610f55ebbaaf52b7fd03d7b5835606277eca8d861cd767add181444
(3) 0665671f7851f3c83185d8cfa0df5ade2b796be5e1e7fb6c811998409740c942
(4) 5e0899a44fd2b3c6955177b3aea698c89e2c99b95910b202166b6ff02970c0d1
(5) 4f086069811fafc442a1c6bf8f248192637f919b7498c6cf727feef3fc867d28
(6) 57570a1b8770abfbef4dd5004ef9b6f2016dd1f390d9de68259d44a35e7035c6
(7) 5cf846f03837076d2d7a8d37ac959730e124af4e50974e3a71fc4796aac341d6
(8) 76b46dcb40178f657cfd813fe206604f2454f3b1ae5b4b7d9ceab8db9bb15b9d
(9) 9fbed3a18037560b34362964a96d6bce62eeda42c024b36d0bcbede3d84b79a3
```

#### 4/ Tóm tắt lại một chút
a/ Để có thể làm việc với Eth blockchain thì mình cần phải connect vô được nó, để connect vô được nó thì mình cần connect được vô Eth protocol, khi mình đã là 1 node ở trong blockchain rồi thì mình có connect vô các node khác cũng như có thể làm các việc: mine blocks, send transaction, deploy contract.