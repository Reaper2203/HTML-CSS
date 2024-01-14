/* nested functions = functions inside another functions.
                    Outer functions have access to inner functions
                    Inner functions are "hidden" from oustide the outer functions
                    used in closures (future topic)*/

let userName = "Renz";
let userInbox = 0;

login();

function login(){
    
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}