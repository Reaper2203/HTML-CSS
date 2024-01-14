// useful string methods and properties

let userName = "Renz Minimo";
let phone = "123-456-7890";
console.log(userName.length);
//length of a string

let firstletter = userName.charAt(0);
console.log(firstletter);
//get the character at position 0 (first letter)

console.log(userName.indexOf("z"));
//return -1 if not found, otherwise return index of char in string

console.log(userName.lastIndexOf("i"));
//same as above but from end to start of string

userName.trim();
//removes leading/trailing whitespaces

userName.toUpperCase();
//converts all letters to uppercase

userName.toLowerCase();
//converts all letters to lowercase

phone = phone.replaceAll("-", " ");
//replaces "-" with space
console.log(phone);