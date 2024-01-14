// 2D array = an array of arrays //multidimentional array

let fruits =        ["apples", "oranges", "bananas"];
let vegetables =    ["carrots", "onions", "potatoes"];
let meats =         ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

groceryList[2][0] = "steak"; //rows, columns //updating elements

for(let list of groceryList){ //displaying elements one by one
    for(let food of list){
        console.log(food);
    }
}