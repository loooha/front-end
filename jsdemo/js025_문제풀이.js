//js025_문제풀이.js

/*
 문제1
 <프로그램 실행결과>
  주어진 배열에서 3의 배수의 개수=> 6
  주어진 배열에서 3의 배수의 합=> 108
  */
console.log(`[문제1]`);

let arr = [1, 3, 5, 8, 9, 11, 15, 19, 18, 20, 30, 33, 31];

//주어진 arr배열에서 3의 배수를 구해서 리턴하는 함수 정의1

console.log(`주어진 arr배열에서 3의 배수를 구해서 리턴하는 함수 정의1`);
//////////////////////////////////

function process(arr, index) {
  for (arr; arr <= index; arr++) {
    if (arr % 3 == 0) {
      continue;
    }
  }
  return arr[index];
}

console.log();
//주어진 arr배열에서 3의 배수의 갯수를 리턴하는  함수 정의2
console.log(`--------------------------`);
console.log(`주어진 arr배열에서 3의 배수의 갯수를 리턴하는  함수 정의2`);
//////////////////////////

function count(process) {
  let cnt = 0;
  for (let i = 0; i < process.length; i++) {
    if (process[i] % 3 == 0) {
      cnt++;
    }
  }
  return cnt;
}

console.log(`${count(arr)}`);
//주어진 arr배열에서 3의 배수 합을 리턴하는 함수 정의3
console.log(`--------------------------`);
console.log(`주어진 arr배열에서 3의 배수 합을 리턴하는 함수 정의3`);
///////////////////////////////

function arrPlus(process) {
  return 0;
}

console.log();
///////////////////////////////////////
console.log(`==========================`);
/*
  [문제2]
  [출력결과]
  javascript
  tpircsavaj
  javascript
  */
console.log(`[문제2]`);

let alpa = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];

//alpa배열의 요소를  reverse한 후 리턴하는 함수 정의
console.log(`alpa배열의 요소를  reverse한 후 리턴하는 함수 정의`);
/////////////////////////

function reverse(alpa) {
  for (let i = alpa.length - 1; i >= 0; i--) {
    reverse(...alpa[i]);
  }
  return;
}
console.log();
//data배열의 출력하는  함수 정의
console.log(`--------------------------`);
console.log(`data배열의 출력하는  함수 정의`);
//////////////////////////

function display(data) {
  for (let element of alpa) {
    console.log(element);
  }
  return;
}
console.log();
/////////////////////////
console.log(`==========================`);
