/*return = returns a value back to the place
            where you invoked a function
            */

let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log("The area is:", area);

function getArea(width, height){
    let result = width * height;
    return result;

    //return width * height; -- shortcut
}
/* just to summarize...
    we asigned area, width, height as null
    then we asked user for input and stored it in variables
    next we asigned area = to the function getArea -
    asigned with the variables width and height,
    then we make a variable result = width * height
    then we return the result back as the function getArea
    so the function has a function of solving the area
    lastly we called the area.*/