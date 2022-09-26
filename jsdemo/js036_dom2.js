let myNode = document.getElementById("p2");

//parentNode
let ptNode = myNode.parentNode;

console.log(ptNode); //<div id = "wrap"></div>

console.log(`parentNode: ${ptNode}`); //[object HTMLDivElement]
ptNode.style.color = "blue";
//부모의 자원 상속

//
//나를 기준으로 내 앞, 뒤 이웃 찾기
let prevNode = myNode.previousSibling;
console.log(`prevNode: ${prevNode}`); //[object Text] 앞에 공백이 있어서 text로 읽음

prevNode = prevNode.previousSibling;
console.log(`prevNode: ${prevNode}`); //[object HTMLParagraphElement] //p1

console.log(`prevNode: ${prevNode.innerText}`); //content1

//nextSibling
let nextNode = myNode.nextSibling;
console.log(`nextNode: ${nextNode}`); //[object Text]

nextNode = nextNode.nextSibling;
console.log(`nextNode: ${nextNode}, ${nextNode.innerText}`); // [object HTMLParagraphElement], content3

//
//공백이 있으면 text로 출력되는 문제를 해결하기 위에서 나중에 생긴 메소드
//previousElementSibling : 내 앞에있는 요소 이웃 찾기

let prevEleNode = myNode.previousElementSibling;
console.log(`prevEleNode: ${prevEleNode}, ${prevEleNode.innerText}`); //[object HTMLParagraphElement], content1

//
//nextElementSibling : 내 뒤에있는 요소 이웃 찾기
let nextEleNode = myNode.nextElementSibling;
console.log(`nextEleNode: ${nextEleNode}, ${nextEleNode.innerText}`); //[object HTMLParagraphElement], content3

//
//나를 기준으로 내 자식 요소 찾기
//
//childNodes : 공백까지 다 가져옴
let divNode = document.getElementById("wrap");
console.log(`divNode: ${divNode}`); //[object HTMLDivElement]

let divChildesNode = divNode.childNodes;
console.log(`divChildesNode: ${divChildesNode}`); //[object NodeList]
console.log(divChildesNode); // NodeList(7) [text, p#p1, text, p#p2, text, p#p3, text] // 공백을 text로 가져옴

//
//childen : 요소만 가져옴
let divChilden = divNode.children;
console.log(`divChilden: ${divChilden}`); //[object HTMLCollection]
console.log(divChilden); //HTMLCollection(3) [p#p1, p#p2, p#p3, p1: p#p1, p2: p#p2, p3: p#p3]

//인덱스로 가져오기
console.log(divChilden[0]); //<p id="p1">content1</p>
console.log(divChilden.item(0)); //<p id="p1">content1</p>
console.log(divChilden.namedItem("p1")); //<p id="p1">content1</p>

//
//
//firstChild, firstElementChild
let pNode = document.getElementById("p4");
let aNode = pNode.firstChild;
console.log(aNode); //#text //줄바꿈때문에 공백가져옴

aNode = pNode.firstElementChild;
console.log(aNode); //<img src="images/gosu.jpg" alt="영화배우 고수" />

//
//속성을 가지고 올 때
let aAttrNode = aNode.getAttribute("src");
console.log(aAttrNode); //images/gosu.jpg

aAttrNode = aNode.src;
console.log(aAttrNode); //http://127.0.0.1:5500/images/gosu.jpg

//
//속성을 지정할 때
aNode.setAttribute("title", "스타배우"); //개체.속성명 = 값; 으로 속성값을 줄수있음
console.log(aNode.getAttribute("title")); //스타배우

aNode.id = "imgGosu"; //개체.속성명 = 값; 으로 속성값을 줄수있음
console.log(aNode.id); //imgGosu //개체.속성명 으로 속성값을 가져올 수 있음
