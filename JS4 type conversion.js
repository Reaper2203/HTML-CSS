// Type conversion = change the datatype of a value to another
                    //(strings, numbers, booleans)

//let age1 = window.prompt("How old are you?"); //string

//age1 because I use age in another js file
//variable should be unique and cannot be used in another js file
//and I was using only one html file which is index.html

/*console.log(typeof age1); //getting the datatype of a variable
age1 = Number(age1); //conversion from string to number - make sure Number is capital
age1 += 1; // increment

console.log(typeof age1); //datatype converted to number

console.log("Happy Birthday! You are", age1, "years old");
*/
let x;
let y;
let z;

//constructors : Number, String, Boolean

x = Number("3.14"); //string - number  //if not number the result is NaN (not a number)
y = String(3.14); //number - string
z = Boolean(""); //empty = false

console.log(x, typeof x); //displaying the value of x along with the datatype
console.log(y, typeof y);
console.log(z, typeof z);