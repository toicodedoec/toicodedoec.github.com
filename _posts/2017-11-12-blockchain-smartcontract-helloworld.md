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
* Để test cái smart contract của mình ở local thì cần giả lập 1 Eth node (là 1 node trong cái blockchain) ở local, hiện tại mọi người kêu xài TestRPC:  
```npm install -g ethereumjs-testrpc```
* Để build và deploy cái smart contract của mình thì cần dùng đến Truffle  
```npm install -g truffle```

#### 3/ Ok, giờ viết cái đầu tiên