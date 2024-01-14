// setTimeout() = invokes a function after a number of miliseconds
//              asynchronous function (doesn't pause execution)

let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price); //1000 miliseconds = 1 second //delay
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);    //putting inside a variable to access clearTimeout

function firstMessage(item, price){
    alert(`Buy this ${item} for ${price}`);
}
function secondMessage(){
    alert(`This is not a scam`);
}
function thirdMessage(){
    alert(`DO IT!`);
}
document.getElementById("myBtn").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for Buying!`);
}