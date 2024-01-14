// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

/*const nameTag = document.createElement("h1");   //making a h1 header tag
nameTag.textContent = window.prompt("Enter your name"); //and assigning it the name you entered
document.body.append(nameTag);  //append just like add
*/

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "Mango";
//myList.append(listItem); //end of the list
//myList.prepend(listItem); //beginning of the list /top
myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]); //inserting before banana

let list = document.querySelector("#fruit");
let item = list.lastElementChild;
item.style.color = "blue";