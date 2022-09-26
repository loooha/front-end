//

let date = new Date();

let chk = true;
let btn = document.getElementsByTagName("button")[0];
btn.onclick = process;

function process() {
  document.getElementsByTagName("p")[0];
  if (chk) {
    document.write(
      `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    );
    chk = true;
  }
}
