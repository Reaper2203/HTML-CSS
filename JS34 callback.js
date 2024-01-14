// callback = a function passed as an argument
//          to another function.

/*  Ensures that a function is not going
    to run before a task is completed.
    Helps us develop asynchromous code.
    (When one function has to wait for another function)
    that helps us avoid errors and potential problems
    Ex. wait for a file to load*/

sum(2, 3, displayDOM); //remove the parenthesis to not invoke the function

function sum(x, y, callBack){ //substitute names to the variables and the function
    let result = x + y;
    callBack(result);
}

function displayConsole(output){ //display the output to the console
    console.log(output);
}

function displayDOM(output){    //display the output to html
    document.getElementById("myLabel").innerHTML = output;
}