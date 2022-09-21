//js019_while.js

/*
while(조건식){
    실행문;
}
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log(`==========================`);
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

/*
while 문은 조건식을 생략할 수 없다.
while(조건식){
  console.log(`test`);
}

while(true){ //조건식을 생략할 수 없기때문에 조건식안에 true 혹은 1을 넣기도 한다.
  console.log(`test`);
}
*/

//한번도 실행이 안될 수 있음
for (let i = 3; i <= 1; i++) {
  console.log(i);
}

/*
-적어도 한번은 실행됨

do{
    실행문;
}while(조건식);
*/

let input = "n";
do {
  console.log(`고객님 주문하시겠습니까?(y/n)`);
  input = prompt(`입력`);
} while (input == "y");
