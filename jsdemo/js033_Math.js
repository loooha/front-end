//js033_Math.js

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math

//
//최대값
console.log(Math.max(1, 2, 3, 4, 5)); //5

//최소값
console.log(Math.min(1, 2, 3, 4, 5)); //1

//절대값
console.log(Math.abs(-10)); //10

//반올림
console.log(Math.round(25.3533)); //25
//console.log(Math.round(25.3533, 1));
// - 자릿수 지정할 수 없음. 정수값으로 출력

//올림
console.log(Math.ceil(23.344)); //24

//내림
console.log(Math.floor(23.56)); //23

//난수 0.0이상 ~ 1.0 미만
console.log(Math.random()); // 0.0이상 ~ 1.0 미만의 수가 랜덤 (실행할때마다 값이 바뀜)

//반올림
console.log((25.523).toFixed(2)); //25.52
console.log((25.526).toFixed(2)); //25.53
