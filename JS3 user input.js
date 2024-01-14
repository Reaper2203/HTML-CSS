//How to accept user input

//EASY Way with a window prompt

//let username = window.prompt("What's your name?"); //window that pops up in the screen
//console.log(username)

//DIFFICULT Way HTML textbox

let username;
document.getElementById("mybutton").onclick = function(){

    username = document.getElementById("mytext").value; //getting the value inside by using Id
    console.log(username);
    document.getElementById("mylabel").innerHTML = "Hello "+ username; //changing the label in html
}