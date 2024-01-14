//const element = document.getElementById("myBtn");
//const element = document.body;
//const element = document.getElementById("myText");
const element = document.getElementById("myDiv");

element.onclick = doSomething; //click
element.onload = doSomething;   //when browser reload
element.onchange = doSomething; //when something is change
element.onmouseover = doSomething;  //like hover but it doesn't go back
element.onmouseout = doSomething;   //when cursor is out or not pointed to the object
element.onmousedown = doSomething;  //when clicked on hold
element.onmouseup = doSomething;    //when its not clicked

function doSomething(){
    //alert("You did something");
    element.style.backgroundColor = "red";
}
function doSomethingElse(){
    //alert("You did something");
    element.style.backgroundColor = "lightgreen";
}