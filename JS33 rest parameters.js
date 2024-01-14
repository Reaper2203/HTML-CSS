/* rest parameters = represents an indefinite number of parameters
    ...             (packs arguments into an array)*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 12;

console.log(sum(a, b, c, d, e, f));

function sum(...numbers){           //if you want to separate the other variables to the elements
    let total = 0;                  //then you can do this
    for(let number of numbers){     //function sum(x, y, ...numbers)
        total += number;            //so it won't be included
    }
    return total;
}
/* so it's basically combining all the variables 
    then storing it inside an array
    then spreading each individually
    and adding them up one by one */