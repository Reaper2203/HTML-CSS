// Map = object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50],
]);

let shoppingCart = 0;

//store.get("t-shirt");
shoppingCart += store.get("t-shirt"); //get - for getting specific value
shoppingCart += store.get("underwear");

store.set("hat", 40);   //adding pair to the map
store.delete("hat");    //delete a pair
console.log(store.has("hat"));       //cheking key in a map //returns a boolean value
console.log(store.size);    //amount of pairs

console.log(shoppingCart);
store.forEach((value, key) => console.log(`${key} $${value}`));