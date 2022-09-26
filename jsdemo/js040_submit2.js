//<script defer src="./js040_submit2.js"></script>
//<input type="button" value="login" id="btn" />
//
//type = "button" 요소만 서브밋 이벤트가 없음, 강제적으로 발생시켜야함
//
let btn = document.querySelector("#btn");
btn.onclick = () => {
  let idNode = document.querySelector("#my_id");
  let passNode = document.querySelector("#my_pass");

  if (idNode.value == "") {
    alert("아이디를 입력하세요");
    return false;
  }
  if (passNode.value == "") {
    alert("비밀번호를 입력하세요");
    return false;
  }
  //document.log_f.action = "js040_submit.html"; // 버튼이 여러개 있고, 각각 이동하는 페이지를 다르게 해줘야 할때 설정
  //강제적으로 submit() 이벤트 발생시킴
  document.log_f.submit();
};
