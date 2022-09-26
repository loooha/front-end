//js035_Date.js
//
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date

//
let date = new Date();
//2022-09-26T01:10:49.970Z
console.log(date);

console.log(date.getFullYear()); //2022 //년도

console.log(date.getMonth() + 1); //월 - 월은 지난 월을 가져오기때문에 항상 +1을 해줘야함

console.log(date.getDate()); //26  //일

console.log(date.getDay()); //요일 //0일요일 1월요일 2화 3수 4목 5금 6토
