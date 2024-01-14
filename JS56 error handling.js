// error = object with a description of something went wrong

//throw = executes a user-defined error

/*      Can't open a file
        Lose connection
        User types incorrect input
        TypeError
        */

try{
    let x = window.prompt("Enter a number");
    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number!"; //NaN = Not a Number
    if(x == "") throw "Empty!";
}
catch(error){
    console.log(error);                 // try and catch is like if else but especially for catching errors
}
finally{
    console.log("This always executes"); // finaly = successful or not it will execute at the end
}