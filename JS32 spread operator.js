/* spread operator = allows an iterable such as an
  ...               array or string to be expanded
                    in places where zero or more 
                    arguments are expanded
                    (unpacks the elements)*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let maximum = Math.max(...numbers); //spreading the elements in an array, then chooses the maximum

console.log(maximum);

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Krabs", "Plankton"];

class1.push(...class2); //combining the elements of the 2 arrays

console.log(...class1);