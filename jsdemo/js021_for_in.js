//js021_for_in.js

// ["0번째", "1번째", "2번째"]
let color = ["red", "green", "blue"];
console.log(color[0]);
console.log(color[1]);
console.log(color[2]);
console.log(color[3]); //undefined

//length : 요소의 개수 리턴
console.log(color.length); //3

for (let index = 0; index <= 2; index++) {
  console.log(color[index]);
}

//배열에 'black' 요소 추가
color[3] = "black";
console.log(color.length); //4

for (let index = 0; index < color.length; index++) {
  console.log(color[index]);
}

//객체 리터널 : {property : value, property : value}
//java : element를 가져옴  for(String element : city){}
//javascript : index를 가져옴  for(let idx in city){}
let city = ["서울", "부산", "대전"];
for (let idx in city) {
  console.log(idx);
}

let obj = { a: 1, b: 2, c: 3 }; //중괄호 안에 있는건 값만 저장
console.log(obj); //{ a: 1, b: 2, c: 3 }

console.log(obj.a); //객체가 아니기때문에 .(이름) 해서 불러와야함
console.log(obj.b);
console.log(obj.c);

for (let prop in obj) {
  //console.log(prop);
  //console.log(obj[prop]);
  console.log(`${prop}:${obj[prop]}`); //a:1 obj[prop] obj의 변수 prop를 대괄호로 묶어야 값을 가져오고,
  //console.log(`${prop}:${obj.prop}`); //a:undefined  .prop 로 부르면 속성명을 부르는게 됨
}
