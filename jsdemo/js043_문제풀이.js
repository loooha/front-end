//
//this는 현재 이벤트가 발생된 객체를 나타냄
//

let totalCar = document.getElementById("total");

let chbCnt = document.querySelectorAll('tbody input[type="checkbox"]'); //체크박스 가져옴
console.log(chbCnt); //NodeList(3)

let myChb = [...chbCnt]; //NodeList를 Array로 변환

//checkbox에 onclick이벤트가 발생되었을때 수행될 carCount()를 등록
myChb.map((element) => {
  //console.log(this); //this = window
  element.onclick = carCount;
});

let basicCar = 0;

function carCount() {
  console.log(this.id); //this = checkbox

  //.defaultValue는 <input>에 초기에 입력된 value의 값을 기억해 가져온다.
  basicCar = Number(totalCar.defaultValue);

  myChb.map((element) => {
    if (element.checked) basicCar += Number(element.value);
  });

  totalCar.value = basicCar;
}
