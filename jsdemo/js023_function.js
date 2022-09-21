//js023_function.js
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions

//함수(function): 특정기능을 하는 구문을 독립된 부품으로 만들어 재사용하고자 할때 사용하는 문법이다.

/*
함수 정의

(1) 함수 선언문
function 함수명(매개변수){
    실행문;
    return 값;
}

(2) 함수 표현식
let test = function(매개변수){
    실행문;
    return 값;
}

(3) 즉시실행 (익명함수)
        (function(param){
            console.log(`${praram} run~~~ `);
        })(`test`);
*/

let year = 2012;
let leapYearCheck = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
let yearData = leapYearCheck ? `윤년` : `평년`;
if (leapYearCheck) {
  console.log(`${year}년도는 ${yearData}입니다.`);
}
//                  year : parameter 매개변수
function isLeapYear(year) {
  let check;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    check = true;
  } else {
    check = false;
  }
  return check; //return 값은 반드시 1개
}

//함수 호출
year = 2014;
let result = isLeapYear(2013); //year : arguement(인수)
console.log(result);
if (result) {
  console.log(`${year}년도는 윤년입니다.`);
} else {
  console.log(`${year}년도는 평년입니다.`);
}

//함수 정의
function add(a, b) {
  console.log(`a=${a}, b=${b}`);
  return a + b;
}

function add2(a, b, c) {
  return a + b + c;
}

//함수 호출
console.log(add(2, 3)); //5
console.log(add2(2, 3, 4)); //9
console.log(add()); //NaN (Not a Nunber)
console.log(add(1, "script")); //1 script  '+'연산은 숫자를 더하는 의미도 있지만 문자열 연결의 의미도 가지고있다.
console.log(add(1, null)); //1  null은 없는값이기때문에 무시하고 앞에있는 1값만 출력
console.log(add(1, 2, 3, 4, 5)); //3 javascript는 유연해서 2개값 자리 밖에 없지만 넘치도록 값을 넣어도 순서대로 2개값을 받아서 처리함
//console.log(add3()); //add3 is not defined

//add(5, 7);

function hello(name) {
  console.log(`${name}님 환영합니다.`);
}

hello(`홍길동`);
console.log(hello(`고수`)); //undefined

//////////////////////////////////////////
// 함수표현식

//ES5(이크마5) - 익명함수
let sum = function (a, b) {
  return a + b;
};

console.log(sum); //[Function: sum]
console.log(sum(10, 20)); //30

let hap = function (a, b) {
  console.log(a + b);
};

console.log(hap); //[Function: hap]
console.log(hap(10, 30)); //undefined
hap(10, 30);

//ES6 - 화살표 함수
let sub = (a, b) => {
  return a + b;
};

console.log(sub); //[Function: sub]
console.log(sub(3, 5)); //8

let call = (a, b) => {
  console.log(a + b);
};

console.log(call); //[Function: call]
console.log(call(3, 4)); //undefined
call(3, 4); //7

/*
let call2 = (a) => {
  return a;
};
*/
//parameter가 한개이면 소괄호() 생략이 가능하다.
//return하는 문장만 실행문에 있으면 중괄호{}와 함께 return은 반드시 생략해야 한다.
let call2 = (a) => a;

console.log(call2); //[Function: call2]
console.log(call2(3)); //3

let call3 = () => console.log(`로그인 해주세요.`);

console.log(call3); //[Function: call3]
console.log(call3()); //undefined
call3(); //로그인 해주세요.
