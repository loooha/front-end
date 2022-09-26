let pNode = document.getElementById("wrap");

console.log(`${pNode.nodeType}, ${pNode.nodeName}, ${pNode.nodeValue}`); //1, P, null

//모든 속성명 가져오기
let pAttr = pNode.attributes;
console.log(pAttr); //NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}

console.log(pAttr[0]); //id="wrap" //0번째 인덱스에 있는 값(속성) 가져오기
console.log(pAttr.id); //id="wrap"
console.log(pAttr.length); //2
console.log(
  `${pAttr[0].nodeType}, ${pAttr[0].nodeName}, ${pAttr[0].nodeValue}`
); //2, id, wrap //속성 안에있는 값(속성명)을 가져옴

let pIdAttr = pNode.getAttribute("id");
console.log(pIdAttr); //wrap //속성명을 가져옴

//

let textNode = pNode.firstChild;
console.log(textNode); //"content"

console.log(
  `${textNode.nodeType}, ${textNode.nodeName}, ${textNode.nodeValue}`
); //3, #text, content

//
//
//.innerText, .innerHTML : 요소의 컨텐츠 가져오기

let bodyNode = document.getElementsByTagName("body")[0];
console.log(bodyNode.innerText); //content //body 안의 모든 텍스트 가져오기

console.log(bodyNode.innerHTML); //HTML 안의 모든 자원 가져오기

//
//
//value : 인터페이스를 통해서 클라이언트의 정보를 받아듣일 수 있는 요소들에만 적용 가능함

let fname = document.querySelector("#fname");
console.log(fname.value); //홍길동
