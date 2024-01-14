//Math = an intrinsic object that provides basic
//      mathematics functionality and constants

let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;
let a = Math.PI; //built in constant of math

x = Math.round(x); //rounding numbers
x = Math.floor(x); //round a number down
x = Math.ceil(x); //ceiling - round up
x = Math.pow(x); //raise to the power
x = Math.sqrt(x); //squareroot
x = Math.abs(x); //absolute - distance away from zero

maximum = Math.max(x, y, z); //maximum number among tha variables
minimum = Math.min(x, y, z); //minimum number among the variables

console.log(maximum);
console.log(a);