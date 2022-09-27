//
document.querySelector(".red").onclick = (e) => {
  alert("red");
};

document.querySelector(".green").onclick = (e) => {
  alert("green");
  e.stopPropagation();
};

document.querySelector(".blue").onclick = (e) => {
  alert("blue");
  e.stopPropagation(); //이벤트 전파 차단. 변수e는 꼭 e가 아니여도 괜찮음
  //return false; //javascript에서는 사용불가, jQuery에서는 사용가능. (객체에 디폴트로 설정된 이벤트를 차단할 경우)
};

//

document.querySelector("a").onclick = (e) => {
  alert("안녕하세요");
  //e.preventDefault();
  return false;
};

//

/*
[1] Evet Propagation(이벤트 전파)
1. 캡처링(capturing phase) : 부모요소에서 Target요소로 이벤트 전파
2. 버블링(bubbling phase) : Target요소에서 부모요소로 이벤트 전파

[2] 이벤트 차단
.stopPropagation()

[3] .stopPropagation()과 preventDefault() 비교
.stopPropagation() : 이벤트 전파 차단  return false (jQuery)
.preventDefault() : 디폴트 이벤트 차단  return false (javascript, jQuery)
*/

//
//
//
