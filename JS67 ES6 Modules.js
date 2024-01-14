/* The idea behind a module is that it's a file of reusable code
We can import sections of pre-written code to use whenever
Great for any general utility values and functions
Helps to make your code more reusable and maintainable
Think of modules as separate chapters of a book */

 import { PI, getCircumference, getArea } from "./JS67.1 ES6 Modules1.js"; //./ is for accessing file in the same directory/ path
// you can also import all by using
//  import * as get from "./JS67.1 ES6 Modules1.js"; //get is just a substitute name

console.log(PI); //get.PI

let circumference = getCircumference(10); //10 is the radius
console.log(circumference);     //get.getCircumference

let area = getArea(10);     //get.getArea
console.log(area);