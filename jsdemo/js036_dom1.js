//js036_dom1.js
//
//https://www.w3schools.com/js/js_htmldom_document.asp
//

// window.onload = function () {
//   let hNode = document.getElementById("selector");
//   console.log(hNode);
// };

let hNode = document.getElementById("selector");
console.log(hNode, typeof hNode);
//접근 방식의 차이일뿐 위, 아래 두 방법 모두 같음
//.getElementById()  //.querySelector()
//현재는 아래의 방식을 더 선호함
let hId = document.querySelector("#selector");
console.log(hId, typeof hId);

let hClass = document.querySelector(".choice");
console.log(hClass, typeof hClass);

//HTMLCollection(4)
let pNode = document.getElementsByTagName("p");
console.log(pNode, typeof pNode);
console.log(pNode.length); //4
console.log(pNode[0], pNode.item(0)); //배열처럼 접근도 가능하고,  .item이라는 메소드도 가능함
console.log(pNode[0].innerText); //0번재 인덱스 안의 텍스트를 가져옴

pNode[0].style.backgroundColor = "blue";
//javascript에서 style 주는 방법
//CSS에서는 background-color 인데, javascript에서는 .backgroundColor

function process() {
  alert("dd");
  let fname = document.frm.fname;
  console.log("fname:", fname);
  //<input type="text" name="fname" placeholder="이름입력" />

  console.log(fname.value);
  //fname의 value 값을 가져옴

  console.log(fname.defaultValue);
  //홍길동 //html에서 value로 직접 지정한 값

  document.write(fname);
  //[object HTMLInputElement]

  return false;
} //return false; 를 안하면 form action 값을 가져와서 새창을 띄우기때문에 콘솔창에 뜨지않음
