/* arrow function = compact alternative to a traditional function expression*/
//      =>
// 1. No need for the word "function" anymore, just use an arrow instead.

    /*const greeting = function(userName){
        console.log(`Hello ${userName}`);
    }

    greeting ("Bro");*/

//instead of using this function expression you can use this

const greeting2 = userName => console.log(`Hello ${userName}`); //if you have 2 or more arguments you need ()

greeting2("Renz");

const percent = (x, y) => x / y * 100; //no need to return x and y

console.log(`${percent(45, 50)}`); //getting the percentage of 45 over 50

//heres another example

let grades = [100, 50, 90, 60, 80, 70];

/*grades.sort(descending);
grades.forEach(print);

function descending(x, y){
    return y - x;
}
function print(element){
    console.log(element);
}*/

// we can use this

grades.sort((x, y) => y - x); //ascending x - y
grades.forEach((element) => console.log(element));

//you can do the same results by
//making it a function expression by eliminating the function name
//then we can turn the function expression to an arrow function exp.
//by eliminating the function(), return, and the curly braces {}
