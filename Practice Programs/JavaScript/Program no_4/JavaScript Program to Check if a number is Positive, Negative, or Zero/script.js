// ! JavaScript Program to Check if a number is Positive, Negative, or Zero
function check() {
  let value = document.getElementById("data").value;
  let result = Math.sign(value);
  document.getElementById("result").innerText = result;
}
