/*
[문제1]
[데이터]
http://www.daum.net
ftp://ftp.microsoft.com

[출력결과]
protocal: http, domain: www.daum.net
protocal: ftp, domain: ftp.microsoft.com
*/

let data = "http://www.daum.net";
console.log(
  `protocal: ${data.substring(0, 4)}, domain: ${data.substring(7, 19)}`
);

data = "ftp://ftp.microsoft.com";
console.log(
  `protocal: ${data.substring(0, 3)}, domain: ${data.substring(6, 23)}`
);

////////////////////////////////////////////////////
console.log(`===================================================`);
////////////////////////////////////////////////////
/*
[문제2]
[데이터]
let person1 = { name: '홍길동', phone: '010-1234-5678' };
let person2 = { name: '진여구', phone: '010-253-2253' };
[출력결과]
이름: 홍길동
연락처: 010-****-5678
이름: 진여구
연락처: 010-***-2253
*/
let person1 = { name: "홍길동", phone: "010-1234-5678" };
let person2 = { name: "진여구", phone: "010-253-2253" };

let name1 = "홍길동";
let phone1 = "010-1234-5678";
let name2 = "진여구";
let phone2 = "010-253-2253";

console.log(`이름: ${name1.substring(0, 3)}`);
console.log(`연락처: ${phone1.replace("1234", "****")}`);
console.log(`이름: ${name2.substring(0, 3)}`);
console.log(`연락처: ${phone2.replace("253", "***")}`);

//let text = "*";
//console.log(`연락처: ${phone1}`);
//console.log(`연락처: ${phone1.substring(4, 8)}`);
//console.log(text.repeat(4));
//console.log(`연락처: ${phone2}`);
//console.log(`연락처: ${phone2.substring(4, 7)}`);
//console.log(text.repeat(3));
