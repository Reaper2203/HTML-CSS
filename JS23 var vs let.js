//variable scope = where a variable is accessible

//let = variables are limited to block scope{}
//var = variables are limited to a function(){}

//global variable = is declared outside any function
//(if global, bar will CHANGE browser's properties)

for(var i = 1; i <= 3; 1+=1){
    //console.log(i);
}

console.log(i);
//let doesn't exist outside curly braces
// var does exist outside of the function it was declared in, 
//but not recommended because it can be accessed and modified by anyone
//can't escape a function
//not recommended as a global variable