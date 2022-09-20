//js018_for.js

/*
 for문
 for문은 조건식을 만족할 때까지 특정 실행문을 반복해서 실행한다.

 for(초기값; 조건식; 증감식){
    실행문;
 }

 초기값 -> 조건식(true)-> 실행문 -> 증감식 
        -> 조건식(true) -> 실행문 -> 증감식
        -> 조건식(false) -> 반복문 빠져나감
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//i가 2씩 증가할 때
for (let i = 1; i <= 5; i += 2) {
  console.log(i);
}

console.log(`==========================`);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log(`==========================`);
//for문에서 조건식을 생략하면 무한루프로 실행된다.
let i = 1,
  sum = 0;
//for문 안에서도 let i = 1, sum = 0; 을 설정하여 무한루프를 만들수있지만 i, sum을 for문 밖에서 사용할 수 없음.
for (; ; i++) {
  //초기값; 조건식; 을 생략할수 있지만 세미클론 (;)은 빠지면 안됨.
  sum += i;
  if (sum >= 30) break; //무한루프를 빠져나올수있도록 break;를 꼭 넣어줘야함.
} //if (sum >= 30) break; 조건식을 만족하고 수행할 문장이 1개면 중괄호 생략이 가능함. 단, 2개 이상이면 반드시 중괄호로 묶어야함.
console.log(`i=${i}, sum=${sum}`);

console.log(`==========================`);

/* 
1~10 짝수와 홀수의 합을 구해서 출력하는 프로그램을 구현하세요.
[출력결과]
짝수: ?
홀수: ?
*/

let odd = 0; //홀수누적
let even = 0; //짝수누적

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    odd += i;
  } else {
    even += i;
  }
}
console.log(`짝수:${even}`);
console.log(`홀수:${odd}`);

console.log(`==========================`);

/* 
continue : 반복문에서 continue를 만나면 조건식으로 이동한다.
continue 문은 현재 또는 레이블이 지정된 루프의 현재 반복에서 명령문의 실행을 종료하고 반복문의 처음으로 돌아가여 루프문의 다음 코드를 실행합니다.
for(초기식; 조건식; 증감식;){continue;}
while(조건식){continue;}
*/

//1~10 숫자 중에서 3의 배수만 빼고 출력
for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    continue;
  }
  console.log(i);
}

console.log(`==========================`);
/*
중첩반복문
(반복문 안에 반복문 사용도 가능하다.)

 for(초기값; 조건식; 증감식){
    for(초기값; 조건식; 증감식){
        실행문;
    }
 }
*/

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

console.log(`==========================`);

//줄바꿈 출력
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    process.stderr.write(`i=${i}, j=${j}`);
  }
  process.stderr.write(`\n`);
}

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
//이스케이프 (escape) : 프로그램에서 주변장치를 컨트롤하기 위해서 사용되는 기능
// \n : 줄바꿈, \t : 텝, \" : 쌍따옴표, \' : 홑따옴표, \b : 백스페이스, \v : 수직탭

console.log(`==========================`);

//lable 정의 : 사용할 반복문 앞에 선언
movei: for (let i = 1; i <= 5; i++) {
  for (let j = 10; j <= 13; j++) {
    for (let k = 1; k <= 3; k++) {
      console.log(`i=${i}, j=${j}, k=${k}`);
      if (k == 2) break movei;
    }
  }
}
