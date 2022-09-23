/*
[문제1]
아래 배열에서 undefined을 제외한 합계와 평균을 계산하는 프로그램을 구현하세요.

[데이터]
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

[출력결과]
합계: 15
평균: 3

hint: undefined 값을 포함하여 평균을 내는 방법도 있지만,
       이번 문제에서는 undefined 값은 빼고 있는 값들로만 계산
*/
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];
//console.log(`${typeof arr}`);

// function getSum(total, num) {
//   return total + num;
// }
// let sum = arr.reduce(getSum);
// console.log(`합계:${sum}`);

// for (let i = 0; i < 10; i++) {
//   if (arr[i]) {
//     console.log(arr[i]);
//   }
// }

function display(...arr) {
  return arr.reduce((sum, a) => {
    return sum + a;
  });
}
console.log(sum + a);
