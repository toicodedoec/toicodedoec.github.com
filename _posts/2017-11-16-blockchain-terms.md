---
layout: post
title: Some basic terms in blockchain
tags: [blockchain, basic, terms]
---

_Post này để collect cách hiểu về 1 số basic term hay gặp trong blockchain_  
# 1 consensus
The agreement among all nodes in the network about the state of the Ethereum network.
# block
Là 1 package trong đó chứa [(zero hoặc nhiều transactions), (hash của previous block), (những data khác)]
# blockchain
Có thể xem 1 demo cực dễ hiểu và rõ ràng về blockchain structure ở đây http://blockchaindemo.io/
# nonce
Là số lần chạy hash để tìm ra được 1 hash hợp lệ cho 1 block
```
let nonce = 0;
let hash;
let input;
while(!isValidHashDifficulty(hash)) {     
  nonce = nonce + 1;
  input = index + previousHash + timestamp + data + nonce;
  hash = CryptoJS.SHA256(input)
}
```
# Valid hash
Hiện tại thì 1 hash được xem là valid nếu bắt đầu với 4 số 0 liên tiếp, ví dụ: 0000e3fbd194894301b9b6dc5a8b50fd47e6c58e33669f5f40407b8ee514a20b
# difficulty
Số lượng kí tự 0 nằm ở đầu hash, ví dụ difficulty=4 thì valid hash phải bắt đầu với 0000xxxxxxxxxxx
# Mối liên hệ giữa __difficulty__ và __nonce__
difficulty càng lớn thì số lượng valid hash càng giảm, và càng tốn nhiều thời gian để tìm ra đc 1 thằng valid => __nonce__ sẽ càng cao
# hash
Được tạo ra bằng cách tạo ra 1 hash value from (index, previous hash, timestamp, data, nonce)
# genesis block
Là block đầu tiên của 1 blockchain, vì là block đầu tiên nên __previous hash__ của nó là 0, và index của nó cũng là 0  

(cont.)


