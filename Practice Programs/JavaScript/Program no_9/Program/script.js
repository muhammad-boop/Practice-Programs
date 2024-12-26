// ! Counter in js with html
let count = 0;
document.getElementsByClassName("btn")[0].addEventListener("click", () => {
  count++;
  document.getElementsByClassName("btn")[0].innerHTML = `Count is ${count}`;
});
