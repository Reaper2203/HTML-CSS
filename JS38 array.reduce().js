// array.reduce() = reduces an array to a single value

let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut);

console.log(`Total $${total}`);
function checkOut(total, element){
    return total + element;
}
//getting the total value of all the elements inside an array
//then storing it as one variable