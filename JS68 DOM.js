// DOM = Document Object Model (API) application programming interface
//     An interface for changing the content of a page

console.dir(document); //accessing the properties of the document //dir = directory
console.log(document.title); //displaying the title of the document
console.log(document.URL); //url of the document
//changing properties
document.title = "title goes here"; //change title
//document.location = "http://www.google.com"; //changing location

document.body.style.backgroundColor = "skyblue"; //changing the color of the body
document.getElementById("myDiv").style.border = "1px solid #000000";

let vegetables = document.getElementsByTagName("li");
vegetables[1].style.color = "green";

let elements = document.querySelectorAll(".desserts"); // . is for class, # is for id
elements.forEach(element =>{
    element.style.fontStyle="italic";
    element.style.color="#0042ac";
    element.style.margin="10px"; //di gumagana -
});