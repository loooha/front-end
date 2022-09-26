/*
[문제1]
아래 배열에서 undefined을 제외한 합계와 평균을 계산하는 프로그램을 구현하세요.

[데이터]
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

[출력결과]
합계: 15
평균: 3

Hint: undefined 값을 포함하여 평균을 내는 방법도 있지만,
       이번 문제에서는 undefined 값은 빼고 있는 값들로만 계산
*/
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

let result = arr.filter(function (element) {
  return element !== undefined;
});

let sum = result.reduce(function add(total, element) {
  return total + element;
});

console.log(`합계: ${sum}`);
console.log(`평균: ${sum / result.length}`);

/*
 [문제2] 
  2차원 배열의 데이터를 이용해서 합계와 평균을 계산하는 프로그램을 구현하세요.
 [데이타]
 [['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75]];

  
 <출력결과]
 [[ '홍길동', 90, 85, 40, 215, 71.67 ],
  [ '이영희', 100, 35, 75, 210, 70.00 ]]
  최고점: 71.67

  Hint: 평균에서 최고점만 구하면 됨. 누가 최고점인지는 중요하지 않음!
*/

let exam = [
  ["홍길동", 90, 85, 40],
  ["이영희", 100, 35, 75],
];

for (let i = 0; i < exam.length; i++) {
  let fullName, jumsu;
  [fullName, ...jumsu] = exam[i];
  let hap = jumsu.reduce(function (total, element) {
    return total + element;
  });
  exam[i].push(hap);
  exam[i].push((hap / jumsu.length).toFixed(2));
}

console.log(exam);

let lastEle = exam.map((element) => {
  return element[element.length - 1];
});

console.log(`최고점: ${Math.max(...lastEle)}`);
