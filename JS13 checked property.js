
document.getElementById("mybutton").onclick = function(){

    if(document.getElementById("mycheckbox").checked == true)//true is optional
    {
        console.log("you are subscribed");
    }
    else{
        console.log("you are not subscribed");
    }
};

//----or----

document.getElementById("mybutton").onclick = function(){

const checkBox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visa");
const mastercardBtn = document.getElementById("mastercard");
const creditcardBtn = document.getElementById("creditcard");
    //checkbox
    if(checkBox.checked){
        console.log("subscribed");
    }
    else{
        console.log("not suscribed");
    }


    //radio buttons
    if(visaBtn.checked){
        console.log("Visa selected!");
    }
    else if (mastercardBtn.checked) {
        console.log("MasterCard selected!");
    }
    else if(creditcardBtn.checked){
        console.log("Creditcard selected");
    }
    else{
        console.log("please select payment method");
    }
};
