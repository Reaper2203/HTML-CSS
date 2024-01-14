// slice() extracts a section of a string
//          and returns it as a new string
//          without modifying the original string

let fullName = "Renz Minimo";
let firstName;
let lastName;

firstName = fullName.slice(0, 4); //starts from 0
lastName = fullName.slice(5, 11); //additional 1, if not declared the index 2 it will select the whole character before it

firstName.fullName.slice(0, fullName.indexOf(" "));
//selecting the characters from first index to the nearest space 
lastName = fullName.slice(fullName.indexOf(" ") + 1);
//after the space until the end of the string

console.log(firstName);
console.log(lastName);