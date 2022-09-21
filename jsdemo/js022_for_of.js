//js022_for_of.js

//for ~ of : element 를 가져옴
let color = ["red", "green", "blue"];
for (let element of color) {
  console.log(element);
}

let subject = "script";
for (let idx in subject) {
  console.log(idx); // 0 1 2 3 4 5
}

for (let element of subject) {
  console.log(element); // s c r i p t
}

/*
console.log(`==========================`);
let obj = { a: 1, b: 2, c: 3 };

for (let value of obj) {
  console.log(value); // TypeError: obj is not iterable
}
*/
/*
 for ~ of 문은 반복 가능한 객체 (Array, String, Map, Set, arguments)를 반복하는 객체
 즉, iterable 속성을 가진 객체만 가능
 
 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Errors/is_not_iterable
*/
