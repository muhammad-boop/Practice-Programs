// ! CallBacks
function sayHello() {
  console.log("Hello");
}
function add(a, b, callback) {
  console.log(a + b);
  callback();
}
console.log(add(2, 2, sayHello));
