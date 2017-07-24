---
layout: post
title: Thủ thuật với kiểu mảng
image: /img/2017-07-24.jpg
tags: [javascript, exciting-stuff]
---

Kiểu array trong JS là kiểu khá thông dụng, JS cung cấp rất nhiều method giúp bạn tùy biến với kiểu array như get phần tử, nối mảng, tìm kiếm,… lẩu thập cẩm

Sau đây là một vài tip trick nhỏ

Lấy phần tử cuối cùng của mảng
Sử dụng hàm slice với tham số âm

var singers = ['sontung', 'hoangthuylinh', 'khanhphuong'];
console.log(singers.slice(-1)); // [khanhphuong]
Cắt ngắn độ dài của mảng
Một tip nhỏ để bạn có thể xóa phần tử của mảng, mà không phải code phức tạp là gán lại chiều dài của mảng

Ví dụ: Bạn có một mảng ShowBiz gồm nhiều nhân vật trong làng giải trí gồm 3 người

var showbiz = ['hari-won', 'thuy_top', 'tran_thanh'];
Do tran_thanh nhiều chiêu trò tạo scandal nên quyết định “loại”

showbizs.length = 2; 
Cách gán này sẽ loại đi phần tử cuối cùng của mảng, như vậy thì showbizs lúc này chỉ còn

showbizs = ['hari-won', 'thuy_top'];
Nối mảng
Để nối hai mảng cách thông dụng nhất là dùng hàm concat, tuy nhiên cách này sẽ tạo ra một mảng mới, nên có thể tiềm ẩn lỗi memory leak trong trường hợp kích thước mảng quá lớn. Như vậy có một cách khác là gộp mảng thứ hai vào mảng thứ nhất để tiết kiệm bộ nhớ sử dụng push.apply

var showbizs = ['hari-won', 'thuy_top', 'tran_thanh'];
var singers = ['le_quyen’, 'phi_nhung'];
Bổ sung thêm 2 singers mới vào showbiz

showbizs.push.apply(showbizs, singers);
Giờ showbizs có [‘hari-won’, ‘thuy_top’, ‘tran_thanh’, ‘le_quyen’, ‘phi_nhung’];

Lấy random item trong mảng
Bốc thăm trúng thưởng Vietlot

var vietlot = ['322', '32222', '1223', '98223'];
var win = vietlot[Math.floor(Math.random() * showbiz.length)];
Kiểm tra có phải là array không
function isArray(obj) {
    	return Object.prototype.toString.call(obj) === '[object Array]';
}
Duyệt array không cần dùng for
Đây là một tip trick khá hay mà it coder nào biết, sử dụng hàm map

var squares = [1, 2, 3, 4].map(function (val) {
    console.log(val); // 1 ,2 ,3 ,4
});
