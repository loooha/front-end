//js027_String.js
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String

let data = "It`s alright";
console.log(data); //It`s alright

//length : 문자열의 길이
console.log(data.length); //12

/*
특정 범위 데이터를 리턴해주는 3가지 메소드
1. substring(start, end);
2. substr(start, length);
3. slice (start, end);
*/

data = "Apple, Banana, Kiwi";
console.log(data);
//1. substring(start, end);
//Banana
console.log(`substring: ${data.substring(7, 13)}`); //7index ~ 13index 미만 //substring: Banana
console.log(`substring: ${data.substring(-12, -6)}`); //substring()은 음수값을 지원하지 않는다.

//2. substr(start, length);
//Banana
console.log(`substr: ${data.substr(7, 6)}`); //substr: Banana
console.log(`substr: ${data.substr(-12, 6)}`); //substr: Banana

//3. slice (start, end);
//Banana
console.log(`slice: ${data.slice(7, 13)}`); //slice: Banana
console.log(`slice: ${data.slice(-12, -6)}`); //slice: Banana

//replace('찾을 문자열', '바꿀 문자열');
//i: 대소문자 구분없음, g: 모든 문자열

console.log(`replace: ${data.replace("Banana", "Grape")}`); //replace: Apple, Grape, Kiwi
console.log(data); //Apple, Banana, Kiwi
//.replace로 문자열을 바꿔도 원래의 메모리 데이터는 불변이라 바뀌지 않음. replace안에서만 바뀌어서 출력

data = "Mr Blue has a blue house and a blue car";
console.log(data);
console.log(data.replace(/blue/, "red")); //Mr Blue has a red house and a blue car
//대소문자를 구분하고, 첫번째 blue를 red로 바꿈

console.log(data.replace(/blue/g, "red")); //Mr Blue has a red house and a red car
//대소문자를 구분하고, 모든 blue를 red로 바꿈

console.log(data.replace(/blue/i, "red")); //Mr red has a blue house and a blue car
//대소문자를 구분하지 않고, 첫번째 blue를 red로 바꿈

console.log(data.replace(/blue/gi, "red")); //Mr red has a red house and a red car
//대소문자를 구분하지 않고, 모든 blue를 red로 바꿈

data = "Hello World";
console.log(data);
console.log(`toUpperCase(): ${data.toUpperCase()}`); //HELLO WORLD
//모든 문자열을 대문자로 바꿈

console.log(`toLowerCase(): ${data.toLowerCase()}`); //hello world
//모든 문자열을 소문자로 바꿈

let data2 = "javascript";
console.log(`concat(): ${data.concat(data2)}`); //Hello Worldjavascript
//concat() 두개의 문자열을 연결해서 출력

console.log(`concat(): ${data.concat(" ", data2)}`); //Hello World javascript
//${data.concat(" ", data2)} 연결하는 문자열 사이에 공백" "을 넣어서 출력

console.log(`concat(): ${data.concat("_", data2)}`); //Hello World_javascript
//${data.concat("_", data2)} 연결하는 문자열 사이에 언더바"_"를 넣어서 출력

console.log(`charAt(): ${data.charAt()}`); //H

console.log(`charAt(): ${data.charCodeAt()}`); //72 (unicode value)

data = "a,b,c,d,e";
//split() : 문자열을 나누어 준다.
let arr = data.split(",");
for (let i of arr) console.log(i);
/*
data.split(",");  data 배열을 , 를 기준으로 나누어 출력
a
b
c
d
e
 */

//match() : 검색데이터와 일치하는 문자열 있으면 문자열 모두를 찾아서 배열로 리턴하고, 일치하는 문자열이 없으면 null로 리턴한다.
data = "Mr Blue has a blue house and a blue car";
let res = data.match(/blue/g);
console.log(`match(): ${res}`); //blue,blue
console.log(`match(): ${typeof res} `); //object
console.log(`match(): ${res instanceof Array}`); //true

res = data.match(/red/g);
console.log(`match(): ${res}`); //null
console.log(`match(): ${typeof res} `); //object
console.log(`match(): ${res instanceof Array}`); //false

//search() : 검색데이터와 일치하는 문자열이 있으면 처음의 index를 리턴하고, 일치하는 문자열이 없으면 -1을 리턴한다.
//         : 문자열 뒤의 g는 search()에서는 생략해도 상관없음
res = data.search(/blue/g);
console.log(`search(): ${res}`); //14

res = data.search(/red/g);
console.log(`search(): ${res}`); //-1

//indexOf() : 문자열의 인덱스를 리턴
data = "Mr Blue has a blue house and a blue car";
console.log(data.indexOf("M")); //0
console.log(data.indexOf("B")); //3
console.log(data.indexOf("blue")); //14

let position = data.indexOf("blue");
console.log(data.indexOf("blue", position + 1)); //31
//처음 나타난 blue 말고 그 다음 나타난 blue의 인덱스 값을 리턴

//data값의 모든 blue의 인덱스 값을 리턴
data = "Mr Blue has a blue house and a blue car";
console.log(data);

let pos = -1;
do {
  pos = pos + 1;
  pos = data.indexOf("blue", pos);
  if (pos != -1) console.log(pos);
} while (pos != -1); //14 31

//do~while문을 for문으로 바꾸기
data = "Mr Blue has a blue house and a blue car";
for (let i = 0; i < data.length; i += 1) {
  i = data.indexOf("blue", i);
  if (i == -1) break;
  console.log(i);
}

//repeat() : 이 문자열을 (n) 횟수만큼 실행
let text = "korea";
console.log(text.repeat(10));

text = "*";
console.log(text.repeat(10));

//
let text2 = "  korea   data ";
console.log(text2.length); //15

//trim() : 문자열 바깥의 불필요한 공백을 제거. 문자열 안쪽의 공백은 제거되지 않음.
console.log(text2.trim().length); //12
