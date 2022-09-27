//
//약관 동의
document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    alert(`약관에 동의해야 합니다.`);
    return false;
  }
};

//
//전체 선택
document.frm.allCheck.onclick = function () {
  //console.log(this.checked);

  //document.frm.subject1.checked = this.checked;
  //document.frm.subject2.checked = this.checked;
  //document.frm.subject3.checked = this.checked;

  let checkgroup = document.querySelectorAll(".checkgroup");
  console.log(checkgroup.length);

  //Arrow Function : this는 상위객체인 document.frm.allCheck를 의미함
  //   checkgroup.forEach((element) => {
  //     //console.log(this);
  //     element.checked = this.checked;

  let myThis = this; //document.frm.allCheck
  //Aninymous Function : this는 window 객체를 의미함
  //   checkgroup.forEach(function (element) {
  //     console.log(this);
  //     element.checked = myThis.checked;

  //
  //Array.from() : NodeList를 Array로 변경
  // console.log(`${checkgroup}`);

  // let myArray = Array.from(checkgroup);
  // console.log(`${myArray}`);

  // myArray.map(function (element) {
  //   //console.log(this);
  //   element.checked = myThis.checked;
  // });

  //
  //ES6 Spread Operator : NodeList를 Array로 변경
  let iArray = [...checkgroup];
  iArray.map(function (element) {
    element.checked = myThis.checked;
  });
};
