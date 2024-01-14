/* function expression = function without a name (anonymous function)
                        avoid polluting the global scope with names
                        Write it, then forget about it
                        */
const greeting = function(){
    console.log("Hello World!");
}

greeting();

let count = 0;

document.getElementById("incBtn").onclick = function(){
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("decBtn").onclick = function(){
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}
//eliminating the customized name of the function
//nameless function