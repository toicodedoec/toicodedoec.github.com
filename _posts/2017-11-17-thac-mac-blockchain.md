---
layout: post
title: Blockchain ABC Thắc mắc không lời đáp (cont.)
tags: [blockchain, pow, ethereum]
---

Hôm nay mình có post 1 vài câu hỏi lên group nhưng không được trả lời 1 cách thoả mãn, nên mình note câu hỏi đó ra đây và sẽ update câu trả lời từ từ 

```
Hi mọi người trong group,
Mình là newbie trong mảng này, mới bắt đầu đụng chạm vào nó thời gian gần đây sau khi tham gia buổi workshop của anh Sơn.
Các bước để add thêm 1 block mới vào blockchain diễn ra như sau:
1/ User A thực hiện 1 transaction B.
2/ Transaction B này sẽ đc chuyển tới tất cả các node trong mạng để verify.
3/ Các node trong mạng sẽ verify sự hợp lệ của transaction này sử dụng các [known algorithms].
4/ Khi đã verify rồi, transaction B được merge với các transactions khác để tạo thành 1 block mới.
5/ Block mới này sau đó được add vào blockchain.
6/ Transaction B xem như đến đây là hoàn thành.
Mình có 1 số câu hỏi như sau mà chưa tìm ra đáp án:
1/ Ở bước 3, [known algorithms] này là gì nhỉ?
2/ Ở bước 4, khi chưa được merge thì các transaction sẽ đc lưu trữ ở đâu? Và khi nào thì được merge, có phải do blockchain mình sử dụng nó quy định?
3/ Ở bước số 5, theo mình biết thì để 1 block đc add vào chain thì phải có các miners đến mining nó, mining ở đây mình hiểu là quá trình tìm ra PoW, sau khi tìm ra rồi thì đc 25BTC (giả sử đg là BTC blockchain), mình ko biết là 25BTC này ở đâu ra, có phải là lấy từ tiền [gas] của users khi họ thực hiện transaction hay không?
4/ Ở bước số 5, các block chưa đc add vào chain thì đc lưu trữ ở đâu nhỉ? Có tình huống nào mà một block vì lý do gì đó bị mất đi, ko đc add vào chain hay không?
Mình cũng đg tiếp tục tìm hiểu để trả lời mấy câu hỏi này, nhưng vẫn post lên đây để có bạn nào biết thì có thể guide để đi được nhanh hơn.
Cám ơn mọi người.
```
