//js029_array.js
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

//배열
let scores = [100, 90, 100];
console.log(scores); //[ 100, 90, 100 ]

console.log(scores[0]); //100
console.log(scores[1]); //90
console.log(scores[2]); //100
console.log(scores[3]); //undefined

console.log(scores.length); //3

//다른 언어에서는 같은 타입언어로 구성된 배열만 묶을수 있지만, 자바스크립트에서는 모든 타입언어를 구분없이 다 묶을 수 있음
let person = ["Jone", "Doe", 26, true];
for (let idx in person) {
  console.log(person[idx], typeof person[idx]);
}
/*
Jone string
Doe string
26 number
true boolean
*/

//
//배열안에 또 다른 배열을 객체로 넣는것도 가능함
let student = ["홍길동", [100, 90, 20]];
for (let idx in student) {
  console.log(student[idx], typeof student[idx]);
}
/*
홍길동 string
[ 100, 90, 20 ] object
 */

//
//

let cars = new Array("Sasb", "Volvo", "BMW"); //cars = [] 객체로 생성
for (let idx in cars) {
  console.log(cars[idx], typeof cars[idx]);
}
/*
Sasb string
Volvo string
BMW string
*/

//

let color = [];
console.log(color.length); //0
color[0] = "red"; //인덱스를 지정해서 직접 넣을수도 있지만,
console.log(color.length); //1
color.push("green"); //메소드 .push를 이용해서 넣을수도 있음.
console.log(color.length); //2
color.push(759);
console.log(color.length); //3
color[8] = "blue"; //8번에 넣었지만,
console.log(color.length); // 9개
console.log(color); // [ 'red', 'green', 759, <5 empty items>, 'blue' ]  <5 empty items> 5개가 비어있다는 뜻
for (let idx in color) {
  console.log(`${idx} : ${color[idx]}`);
}
/*
0 : red
1 : green
2 : 759
8 : blue
 */

//

//3개의 크기를 가진 배열을 생성
let point = new Array(3);
console.log(`point length : ${point.length}`); //point length : 3

//2개의 요소를 가진 배열을 생성
let shape = new Array(10, 20);
for (let idx in shape) {
  console.log(`${idx} : ${shape[idx]}`);
}
/*
0 : 10
1 : 20
*/

//

shape[2] = 50;
console.log(shape[1]);
console.log(shape.length);

//

/*
for()
for ~ in : index
for ~ of : element
*/

//forEacf() : 배열 전용 메소드
//배열.forEacf(function(element[, index]){수행할 문장});
// *대괄호 안의 문장은 생략이 가능

shape.forEach(function (element, index) {
  console.log(`${index}, ${element}`);
});

shape.forEach((element, index) => {
  console.log(`${index}, ${element}`);
});
/*
0, 10
1, 20
2, 50
*/

//

let choice = "javascript";
//문자열은 forEacf()를 제공하지 않으므로 사용할 수 없다.
// TypeError: choice.forEach is not a function
// choice.forEach(function (element, index) {
//   console.log(`${index}, ${element}`);
// });

//
//

//중요!  map, reduce, filter

//배열명.map(callback);
//요소에 있는 갯수를 그대로 유지함
const number = [4, 9, 16, 25];
const res = number.map(function (element, index) {
  return element * 2;
});
console.log(`res: ${res}`); //res: 8,18,32,50 //갯수를 유지하고 객체에 각각 2씩 곱함

const sqt = number.map(Math.sqrt);
console.log(`sqt: ${sqt}`); //sqt: 2,3,4,5

//

function getSum(total, num) {
  //total : 누적, num : 요소
  return total + num;
}
const sum = number.reduce(getSum);
console.log(`sum: ${sum}`); //sum: 54

//

const ages = [32, 33, 16, 40];
const per = ages.filter(function (element, index) {
  return element >= 18;
});
console.log(`per: ${per}`);
//per: 32,33,40  //배열에서 18이하의 숫자만 가져오기

//
// map, reduce, filter 중요!
//
