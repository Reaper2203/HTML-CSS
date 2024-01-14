/* while loop = repeat some code
                while some condition is true
                potentially infinite*/

let userName = "";
while(userName == ""|| userName == null){
    userName = window.prompt("Enter your name");
}

console.log("Hello", userName); //comma is better when concatinatingstring to variables

/*do while loop = do something
                then check the condition,
                repeat if condition is true*/

let userName1;
do{
    userName1 = window.prompt("Enter your name");
}while(userName1 == "")

console.log("Hello again", userName1);