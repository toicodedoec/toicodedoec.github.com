---
layout: post
title: What is Byzantine Generals Problem?
tags: [blockchain, basic, byzantine, bgp]
---

![BGP](/img/bgp.jpg)  

Take the same story of Byzantine empire. But now each commander takes 10 mins to create the message (Compose and then seal it with royal emblem). They also have to attach entire history of previous messages.
So commander A sends message to commander B to attack and the message reaches with B after 10 mins and it says “A orders ATTACK at 4am”
Now Commander B sends message to C and also takes 10 mins. So C receives message “B orders ATTACK at 4am | A orders ATTACK at 4am”.
C receives it and C is traitor. C changes message to “C orders ATTACK at 3am”. However C also has to now change messages of A and B which takes 20 more minutes (total 30 minutes).
So D will either receive — 
(i) “C orders ATTACK at 3am | B orders ATTACK at 4am | A orders ATTACK at 4am” in 10 mins. Since all messages are not in sync D will discard and realize C is corrupt and send message to A and B that C is corrupt. 
(ii) “C orders ATTACK at 3am | B orders ATTACK at 3am | A orders ATTACK at 3am” in 30 mins. Since message was received after 30 mins , D realizes that C is corrupt.
The only way for C is to prepare all 3 messages in just 10 minutes which is practically impossible.

[Source](https://medium.com/all-things-ledger/the-byzantine-generals-problem-168553f31480)