//js016_if.js
/*
제어문(statement) : 프로그램의 흐름을 제어할 수 있는 실행문이다.
1. 조건문 : if~else
2. 선택문 : swich ~case
3. 반복문 : for, while

조건문 : 조건식의 값이 참인지 아니면 거짓인지에 따라 실행문의 제어가 결정된다.

if문은 조건식이 만족(true)할 경우에만 실행문을 실행한다.
if(조건식){
    실행문;
}
*/

let data = 0;
if (data == 0) {
  console.log(`program end`);
}

// 결과 값이 false거나, 없는 값이면 실행문을 수행하지않음.
if (0) {
  console.log(`10`);
}
if ("") {
  console.log(`10`);
}
if (null) {
  console.log(`10`);
}
if (undefined) {
  console.log(`10`);
}
if (false) {
  console.log(`10`);
}

/* 
if(조건식){
    실행문;
}else{
    실행문;
}
*/

let num = 8;
if (num % 2 == 0) {
  console.log(`${num}의 값은 짝수입니다.`);
} else {
  console.log(`${num}의 값은 홀수입니다.`);
}

//(num % 2 == 0) 짝수인지 홀수인지 알아보기 위한 공식. num값을 2로 나눈 나머지 값이 0인지 아닌지 비교해서 0이면 true(짝수), 1이면 false(홀수).
//(num % 2 == 1) num값을 2로 나눈 나머지 값이 0인지 아닌지 비교해서 0이면 fales(짝수), 1이면 true(홀수).

if (num % 2 == 1) {
  console.log(`${num}의 값은 홀수입니다.`);
} else {
  console.log(`${num}의 값은 짝수입니다.`);
}

/*
여러 조건이 필요할때 사용되는 조건문이다.

if(조건식1){
    실행문1;
}else if(조건식2){
    실행문2;
}else if(조건식3){
    실행문3;
}else{
    실행문;
}
*/

// >= 이상, <= 이하, < 미만, > 초과
let jumsu = 85;
if (jumsu >= 90) {
  console.log(`A`);
} else if (jumsu >= 80) {
  //90미만 80이상
  console.log(`B`);
} else if (jumsu >= 70) {
  //80미만 70이상
  console.log(`C`);
} else if (jumsu >= 60) {
  //70미만 60이상
  console.log(`D`);
  //60미만
} else console.log(`F`);

/* 
check 변수의 값이 'D' => D는 대문자입니다.
                 'd' => d는 소문자입니다.
                그외 => ? 는 기타 입니다.
*/

//let check = `d`;
let check = `2`;
if (check >= `A` && check <= `Z`) {
  console.log(`${check}는 대문자입니다.`);
} else if (check >= `a` && check <= `z`) {
  console.log(`${check}는 소문자입니다.`);
} else {
  console.log(`${check}는 기타입니다.`);
}

// `A` : 65, `a` : 97, `0` : 48
let x = `A`;
console.log(x >= `A` && x <= `Z`);

let y = `a`;
console.log(y >= `a` && y <= `z`);
