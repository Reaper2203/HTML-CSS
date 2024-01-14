let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort);
grades.forEach(print);
function descendingSort(x, y){
    return y - x;
}
//highest to lowest
function ascendingSort(x, y){
    return x - y;
}
//lowest to highest
function print(element){
    console.log(element);
}
//function to print the elements of an array