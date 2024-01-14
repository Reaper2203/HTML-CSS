// array.forEach() =executes a provided callback function once for each array element

let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize); //capitalize each element function
students.forEach(print); //print each element function

function capitalize(element, index, array){ //you can use substitute names
    array[index] = element[0].toUpperCase() + element.substring(1); //capitalized first letter of each string
}

function print(element){
    console.log(element);
}