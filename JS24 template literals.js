/* template literals = delimited with (`) backticks
                    instead of double or single quotes
                    allows embedded variables and expressions*/

let userName = "Renz";
let items = 3;
let total = 75;

/* instead of using concatination like this..
console.log("Hello", userName);
console.log("You have", items, "items in your cart");
console.log("Your total is $", total);
You can use this template*/

console.log(`Hello, ${userName}! You have ${items} item(s) in your cart for a total of $${total}`);

//or you can store it inside a variable

let text = 
`Hello, ${userName}!<br>
You have ${items} item(s) in your cart<br> 
for a total of $${total}<br>`;

//console.log(text);
document.getElementById("myLabel").innerHTML = text;