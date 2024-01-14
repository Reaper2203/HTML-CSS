/* array.map() = executes  a provided callback function
                once for each array element
                and creates a new array*/

let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(square);
let cubes = numbers.map(cube);

cubes.forEach(print);

function square(element){
    return Math.pow(element, 2);
}
//squaring all elements
//squared 
function cube(element){
    return Math.pow(element, 3);
}
//cubing all elements
//cube
function print(element){
    console.log(element);
}