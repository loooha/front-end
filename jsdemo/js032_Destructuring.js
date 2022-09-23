//js032_Destructuring.js

//중요!!
//Destructuring (구조 분해 할당)
//  :Destructuring(디스트럭쳐링)은 structuring(구조화)된 배열 또는 객체를 Destructuring(비구조화) 하여 개별적으로 변수에 할당하는 개념이다.
//배열, 객체에서 사용
//배열이면 배열, 객체이면 객체의 형태로 받아야 함
//
//1. 배열 Destructuring
let level = [5, 10];
let a, b;
a = level[0];
b = level[1];
console.log(`a=${a}, b=${b}`); //a=5, b=10

let c, d;
[c, d] = [5, 10];
console.log(`c=${c}, d=${d}`); //c=5, d=10

let m, n;
[n, m] = [c, d];
console.log(`n=${n}, m=${m}`); //n=5, m=10

let k, p, next;
[k, p, next] = [1, 2, 3, 4, 5, 6, 7, 8]; //앞에서부터 하나씩 가져감
console.log(`k=${k}`); //k=1
console.log(`p=${p}`); //p=2
console.log(`next=${next}`); //next=3

[k, p, ...next] = [1, 2, 3, 4, 5, 6, 7, 8]; //앞에서부터 하나씩 가져가다가, 나머지 파라미터가 맨 뒤면 다 가져감
console.log(`k=${k}`); //k=1
console.log(`p=${p}`); //p=2
console.log(`next=${next}`); //next=3,4,5,6,7,8

//
[k, , p, , ...next] = [1, 2, 3, 4, 5, 6, 7, 8]; //자리를 비워두면 남겨놓고 자리를 맞춰서 가져감
console.log(`k=${k}`); //k=1
console.log(`p=${p}`); //p=3
console.log(`next=${next}`); //next=5,6,7,8

[k, _, p, _, ...next] = [1, 2, 3, 4, 5, 6, 7, 8]; //위, 아래 공백이나 언더바나 같은 의미
console.log(`k=${k}`); //k=1
console.log(`p=${p}`); //k=1
console.log(`next=${next}`); //next=5,6,7,8
//

let u, t, w;
[u, t, w] = [1, 2];
console.log(`u=${u}, t=${t}, w=${w}`); //u=1, t=2, w=undefined
//w=undefined 받는 값이 없음

[u, t, w = 3] = [1, 2];
console.log(`u=${u}, t=${t}, w=${w}`); //u=1, t=2, w=3
//w=3 받는 값이 있음

[u, t = 4, w = 5] = [1, 2];
console.log(`u=${u}, t=${t}, w=${w}`); //u=1, t=2, w=5
//t=2 뒤의 값을 받음

//
//
//2. 객체 Destructuring (구조 분해 할당)

const customer = { fullname: "고수", job: "연기자" };
let fullname = customer.fullname;
let job = customer.job;

console.log(`fullname:${fullname}, job=${job}`); //fullname:고수, job=연기자

let { fullname: fn, job: jb } = customer;
console.log(`fullname:${fn}, job=${jb}`); //fullname:고수, job=연기자

let { job: work, fullname: fname } = customer;
console.log(`job=${work}, fullname: ${fname}`); //job=연기자, fullname: 고수
console.log(`fullname: ${fname}, job=${work}`); //fullname: 고수, job=연기자

let { fullname: name, job: jbn, loc = "서울" } = customer;
console.log(`fullname: ${name}, job:${jbn}, loc:${loc}`); //fullname: 고수, job=연기자, loc:서울

//
// let { s, r } = { s: 1, r: 2 };
// console.log(s, r); // 1 2

let s, r;
({ s, r } = { s: 1, r: 2 });
console.log(`s=${s}, r=${r}`); //s=1, r=2
//할당할 값과 변수의 이름이 같을 때 소괄호()로 한번 더 묶으면 대입 가능

//
//
//예제
//completed의 값이 true인 데이터만 검색하라.
let habits = [
  { id: 1, content: "수영", completed: false },
  { id: 1, content: "걷기", completed: true },
  { id: 1, content: "명상", completed: true },
  { id: 1, content: "독서", completed: false },
];

// for문으로 출력
for (let i = 0; i < habits.length; i++) {
  if (habits[i].completed) {
    console.log(habits[i]);
  }
}

// for문을 배열구조로 출력하기
let listHabits = [];
for (let i = 0; i < habits.length; i++) {
  if (habits[i].completed) {
    listHabits.push(habits[i]);
  }
}
console.log(listHabits);

// .filter로 출력
let completedHabits = habits.filter((element) => {
  return element.completed;
});
console.log(completedHabits);

//
//
//예제
//member변수에서 데이터를 추출하여 '고수 고객님은 서울에 거주합니다.' 라고 출력하세요.
let member = {
  name: "고수",
  address: {
    zipCode: "526-143",
    city: "서울",
  },
};
let name = member.name;
let city = member.address.city;
console.log(`${name} 고객님은 ${city}에 거주합니다.`);
