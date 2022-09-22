//js026_Number.js
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number

let data = 10; //기본데이터 타입 값만 넣어줌 - 원시데이터 10 / 타입 number(숫자)
let fData = Number(data); //값만 넣어줌 - 함수 / 타입 Number(객체)
let nObj = new Number(data); //new 를 입력함으로써 객체값으로 넣어줌 / 타입 object

console.log(`data=${typeof data}`); //number
console.log(`fData=${typeof fData}`); //Number
console.log(`nObj=${typeof nObj}`); //object

console.log(typeof nObj.toString()); // object Number타입을 .toString()으로 타입 String으로 바꿔줌
console.log(typeof data.toString()); // 기본원시데이터 number도 .toString()으로 타입 String으로 바꿀 수 있음

//method(메소드):  .toString() - 데이터 타입을 String으로 바꿈 Number, number -> String
// .valueOf() - 데이터 타입을 기본원시데이터 타입으로 바꿈 Object -> primitive

console.log(data + fData); // number + Number = 20
console.log(data + nObj); // Number + Object = 20   ?? 객체 타입 object지만 가져온 값을 기본데이터 타입값 숫자처럼 인식해서 계산식이 성립함

//Number -> number
console.log(typeof nObj.valueOf()); //number
console.log(typeof new String(`javascript`).valueOf()); //string

//표준 내장 객체
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
console.log(parseInt(`10`)); //10

//Number
//let val = "10";  //결과 1
//let val = "10.3";  //결과  2
//let val = "A";  //결과 3
//let val = "10A";  //결과 4
let val = "A10"; //결과 5
console.log(val + val); //1010 string + string = 10 10

//Number( ), parseInt()
console.log(Number(val) + Number(val));
//결과1: 20 //결과2: 20.6 //결과3: NaN(Not a Number) //결과4: NaN //결과5: NaN
console.log(parseInt(val) + parseInt(val));
//결과1: 20 //결과2: 20 정수로 바꿔주기때문에 소숫점은 버리고 출력됨 //결과3: NaN //결과4: 20 숫자가 앞에있을 경우 숫자계산 후 문자는 무시
//결과5: NaN 문자가 앞에 있을 경우 뒤에있는 숫자도 무시됨
console.log(parseFloat(val) + parseFloat(val));
//결과1: 20 //결과2: 20.6 //결과3: NaN //결과4: 20 숫자가 앞에있을 경우 숫자계산 후 문자는 무시
//결과5: NaN 문자가 앞에 있을 경우 뒤에있는 숫자도 무시됨

console.log(Number.POSITIVE_INFINITY); //Infinity
console.log(Number.NaN); //NaN
