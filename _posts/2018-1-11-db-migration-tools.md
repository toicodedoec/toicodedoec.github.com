---
layout: post
title: DB migration tools: Flyway vs Liquibase
tags: [java, spring boot, database migration, flyway, liquibase]
---

Support DDL transaction nghĩa là toàn bộ các changes (migrations) đc thực thi trong cùng 1 transaction

Đối với Liquibase (LB) 

1/ những thay đổi (migrations) đc define bởi <changeset> XML tag trong file xml (nhìn thấy có vẻ khó define), sau đó LB nó sẽ convert từ migration XML tag thành SQL statement, mỗi <changeset> đc chạy trong 1 transaction riêng biệt, nên nó phù hợp cho mấy cái DB ko support DDL transactions.

2/ ko support BLOBS data type

3/ ko support Java code migration

Đối với Flyway (FW)

1/ run những file migrations có version cao hơn version hiện tại (lưu trong table scheme_version)

2/ nếu fail khi đang chạy migration version A thì nó sẽ rollback toàn bộ changes đg thực hiện, và đánh dấu là fail, lần sau chạy thì nó sẽ cố gắng chạy lại từ version A