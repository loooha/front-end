//<script defer src="./js040_submit.js"></script>
//<input type="submit" value="login" />
//
//document.log_f.onsubmit = function(){}
document.log_f.onsubmit = () => {
  let idNode = document.querySelector("#my_id");
  let passNode = document.querySelector("#my_pass");

  if (idNode.value == "") {
    alert("아이디를 입력하세요");
    return false;
  } //비교하는 기준이 다르기 때문에 eles를 사용하지 않음
  if (passNode.value == "") {
    alert("비밀번호를 입력하세요");
    return false;
  }
};
