//a practice for finding the hypotenuse of a right triangle

let a;
let b;
let c;
/*
a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a,2) + Math.pow(b, 2));
//c = Math.round(c);
 console.log("side c: ", c);
 */

 document.getElementById("submitbutton").onclick = function(){ //when the button is clicked it will do this function
    
    a = document.getElementById("atextbox").value;
    a = Number(a);

    b = document.getElementById("btextbox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("clabel").innerHTML = "Side C: " + c;
 }
