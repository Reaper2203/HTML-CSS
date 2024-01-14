/* ternary operator = shortcute for an if/else statement
                    takes 3 operands

                    1. a condition with ?
                    2. expression if True :
                    3. expression if False
                    */

//condition ? exprIfTrue : exprIfFalse

let adult = checkAge(20);
console.log(adult);

function checkAge(age){

    return age >= 18 ? true : false; //instead of using if and else we are using ? as if and : as false
}

checkWinner(true);
function checkWinner(win){
    win ? console.log('YOU WIN!') : console.log('YOU LOSE!');
}