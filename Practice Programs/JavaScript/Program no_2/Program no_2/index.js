// !  Calculate the Area of a Triangle
// ! Right Angle Triangle
// var base = prompt("Enter your base number");
// var height = prompt("Enter your hieght Number");
// let area = (base * height) / 2;
// alert(" Base: " + base + " Height :" + height + " Area :" + area);
// ! For any Triangle
var a = 10;
var b = 5;
var c = 10;
var s = (a + b + c) / 2;
var temp = s * (s - a) * (s - b) * (s - c);
var area = Math.sqrt(temp);
console.log(area);
