/*function = define a code once, and use it many times.
            to perform some code, call the function name.*/

startProgram(); //calling the function
function startProgram(){
    let userName = "Renz";
    let age = 20;

    happyBirthday(userName, age); //asigning values to variables inside a function
}
function happyBirthday(userName, age){
    console.log("Happy Birthday to you");
    console.log("Happy Birthday to you");
    console.log("Happy Birthday "+ userName +"! You are "+ age +" years old.");
}