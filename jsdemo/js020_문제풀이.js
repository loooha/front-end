/*
[문제1]
  num변수의 값이 10의 배수이면 1을 아니면 0을 
   리턴하는 프로그램을 구현하시오.
  [실행결과]
   10
 */
let num = -10;
if (num % 10 == 0) {
  console.log(`1`);
} else {
  console.log(`0`);
}

console.log(`==========================`);
/*
     [문제2]
   1  사과를 담는데 필요한 바구니의 수를 구하는 코드이다. 
   2  만일 사과의 수가 123개이고 하나의 바구니에는 10개의 사과를 담을 수 있다면,
      13개의 바구니가 필요하다
      
   3  [실행결과]
       필요한 바구니의 수 : 13
    */
let apple = 123;
switch (apple / 10) {
  case 1:
    console.log(`1`);
  case 2:
    console.log(`2`);
    break;
  case 3:
    console.log(`B`);
    break;
  case 4:
    console.log(`4`);
    break;
  case 5:
    console.log(`5`);
    break;
  case 6:
    console.log(`6`);
    break;
  case 7:
    console.log(`7`);
    break;
  case 8:
    console.log(`8`);
    break;
  case 9:
    console.log(`9`);
    break;
  case 10:
    console.log(`10`);
    break;
  case 11:
    console.log(`11`);
    break;
  case 12:
    console.log(`12`);
    break;
  default:
    console.log(`13`);
    break;
}

console.log(`==========================`);
/*
     [문제3]
     switch~case문을 이용해서 차량5부제 프로그램을 구현하시오.
     
     1. 차량의 끝번호가 아래에 해당하면 해당 요일은 차량운행을 제한한다.
     
        1,6 = 월요일
        2,7 = 화요일
        3,8 = 수요일
        4,9 = 목요일
        5,0 = 금요일
        
     2. 출력결과
            차량번호의 끝자리가 5인 차량은 금요일 운행을 제한합니다.
     
    */

/*
    [문제4] 
     2001부터 2012년사이에서 윤년을 구하시오.
     윤년의 조건
     1) 년도를 4로 나눈 나머지가 0이고 100로 나눈 나머지가 0이 아니다.
     2) 년도를 400로 나눈 나머지가 0이다.
    * 
     [출력결과]
      2004
     2008
     2012
    */

/*  
    [문제5]
    * 1 10=2x+3y의 해를 구하시오.
    *   x와y의 범위 : 0<=x<=10,  0<=y<=10
    *   
    * 2 출력결과
    *  x=2, y=2
    *  x=5, y=0
    */
movei: for (let x = 0; x <= 10; x++) {
  for (let y = 0; y <= 10; y++) {
    console.log(`x=${x}, y=${y}`);
    if (2 * x + 3 * y == 10) break movei;
  }
}
