//js031_spread_operator.js

//
//Spread Operator = 스프레드 연산자 = 전개연산자 = 펼침연산자
//형태 : (...변수)
//배열, 함수, 객체에서 사용
//-----------------------------------------
//[1] 배열에서의 Spread Operator

//1. 배열 복사(Array Copy)
let arr1 = [1, 2, 3];
let arr2 = arr1; //얇은 복사(shallow copy)
console.log(`arr1: ${arr1}`); //arr1: 1,2,3  배열
console.log(`arr2: ${arr2}`); //arr1: 1,2,3  배열

arr2.push(4);
console.log(`arr1: ${arr1}`); //arr1: 1,2,3,4
console.log(`arr2: ${arr2}`); //arr1: 1,2,3,4
//얇은 복사에서는 arr1을 복사한 arr2의 데이터만 변경을 해도 arr1이 같이 변경된다. (주소가 복사되기 때문(데이터가 동일함))

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; //깊은 복사(deep copy)
console.log(`arr3: ${arr3}`); //arr3: 1,2,3
console.log(`arr4: ${arr4}`); //arr3: 1,2,3

arr4.push(4);
console.log(`arr3: ${arr3}`); //arr3: 1,2,3
console.log(`arr4: ${arr4}`); //arr4: 1,2,3,4
//깊은 복사에서는 arr3을 복사한 arr4의 데이터를 변경해도 arr4만 변경된다. (주소가 다름)

let arr5 = [10, 20, ...arr3, 40, 50];
console.log(arr5); // [10, 20, 1, 2, 3, 40, 50]

let arr6 = [5, 6, [7, 8]];
let arr7 = [1, ...arr6];
console.log(arr7); //[ 1, 5, 6, [ 7, 8 ] ]

//
//
//2. 배열 병합(Array Concatenation)
let arr8 = [1, 2, 3];
let arr9 = [4, 5, 6];
let arr10 = [7, 8, 9];
let arr11 = [...arr8, ...arr9, ...arr10];
console.log(arr11); //[1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//arr10[10] = 15;
console.log(arr11); //[1, 2, 3, 4, 5, 6, 7, 8, 9 ]

let arr12 = [arr8, arr9, arr10];
console.log(arr12); //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

arr10[4] = 15;
console.log(arr12); //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9, <1 empty item>, 15 ] ]

//
//------------------------------------------------------------------
//[2] 함수에서의 Spread Operator

//1. Rest Parameter (나머지 매개변수)
function display(...params) {
  return params.reduce((sum, a) => {
    return sum + a;
  });
}
console.log(display(1, 2)); //3
console.log(display(1, 2, 3, 4, 5)); //15

//
//
//2. 함수 호출 인수
console.log(Math.max(1, 2, 3, 4, 5)); //5
console.log(Math.min(1, 2, 3, 4, 5)); //1

let arr13 = [10, 20, 30, 40, 50];
//console.log(Math.max(arr13)); //NaN
//.max() .min() 은 숫자만 넣어야 출력이 가능함
console.log(Math.max(...arr13)); //50  console.log(Math.max(10, 20, 30, 40, 50)); <- 복사개념이기때문에 왼쪽과 같은 개념

//
//
//[3] 객체에서 Spread Operator

//1. 객체복사
let prevState = { name: "고수", age: 30 };
let currentState = { ...prevState }; //복사
console.log(currentState); //{ name: '고수', age: 30 }

currentState = { ...prevState, loc: "서울" };
console.log(currentState); //{ name: '고수', age: 30, loc: '서울' }

//
//
//2. 객체 업데이트
let prevState2 = { name: "고수", age: 30 };

//prevState2.name = "여진구";
//console.log(prevState2); //{ name: '여진구', age: 30 }

prevState2 = { ...prevState2, name: "여진구" };
console.log(prevState2); //{ name: '여진구', age: 30 }

//위의 상태가 아래 상태와 같음,
//이 상태일때 뒤에 같은 name 속성이 있기 때문에 업데이가 이루어짐. 단, 업데이트 할 속성값이 앞에 있으면 업데이트되지 않고 사라짐 *순서중요
//prevState2 = { name: "고수", age: 30 , name: "여진구" };
