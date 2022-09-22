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

function process(arr) {
  let data = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
      data[data.length] = arr[i];
    }
  }
  return data;
}

console.log(process(arr)); // 3의 배수를 구하는 함수정의를 여기서 하고,
// [ 3, 9, 15, 18, 30, 33 ]

//주어진 arr배열에서 3의 배수의 갯수를 리턴하는  함수 정의2
console.log(`주어진 arr배열에서 3의 배수의 갯수를 리턴하는  함수 정의2`);
//////////////////////////

function count(process) {
  //앞 문제에서 사용한 함수를 인자값으로 받아서 사용할 수 있다.
  //console.log(process);
  return process.length;
}
console.log(count(process(arr)));
/*
function count(process) {
  let cnt = 0;
  for (let i = 0; i < process.length; i++) {
    if (process[i] % 3 == 0) {
      cnt++;
    }
  }
  return cnt;
}

console.log(count(arr));
*/

//주어진 arr배열에서 3의 배수 합을 리턴하는 함수 정의3
console.log(`주어진 arr배열에서 3의 배수 합을 리턴하는 함수 정의3`);
///////////////////////////////

function arrPlus(process) {
  let sum = 0;
  for (let i = 0; i < process.length; i++) sum += process[i];
  return sum;
}

console.log(arrPlus(process(arr)));
///////////////////////////////////////
console.log(`--------------------------`);
console.log(`[프로그램 실행결과]`);
let result = process(arr);
console.log(`주어진 배열에서 3의 배수의 개수=>${count(result)}`);
console.log(`주어진 배열에서 3의 배수의 합=>${arrPlus(result)}`);
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
  let data = [];
  for (let i = alpa.length - 1; i >= 0; i--) {
    data[data.length] = alpa[i];
  }
  return data;
}

//data배열의 출력하는  함수 정의
console.log(`data배열의 출력하는  함수 정의`);
//////////////////////////

function display(data) {
  for (let i = 0; i < data.length; i++) process.stdout.write(data[i]);
  process.stdout.write(`\n`);
}

display(alpa);
display(reverse(alpa));
display(alpa);
/////////////////////////
console.log(`==========================`);
