// setInterval() = invokes a function repeatedly after a number of miliseconds
//                  asynchronous function (doesn't pause execution)

let count = 0;
let max = window.prompt("count up to what number?");
max = Number(max);

const myTimer = setInterval(countUp, 1000); // 1 second interval

function countUp(){
    count += 1;
    console.log(count);
    if(count >= max){
        clearInterval(myTimer);
    }
}