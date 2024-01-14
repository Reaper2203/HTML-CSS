//array = think of it as a variable that can store multiple values

let fruits = ["apple","orange", "banana"]; //each value in an array is also known as element 
//starts from 0
console.log(fruits[0]); // apple //accessing the first element
fruits[0] = "melon"; //updating the first element
fruits.push("lemon"); //adding element
fruits.pop(); //removes the last element
fruits.unshift("mango"); //add element to the beginning
fruits.shift(); //removes the first element

let length = fruits.length; //lenght property of an array, how many elements
let index = fruits.indexOf("apple"); //searching index of an element, negative if none