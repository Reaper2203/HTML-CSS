/*Gives us the ability to check to check more than 1 condition concurrently
&& AND (Both conditions must be true)
|| OR (At least one of the conditions must be true)*/

let temp = 29;
let sunny = true;
let cloudy = false;

if(temp > 0 && temp < 30 && sunny){
    console.log("It's a nice day!");
}
else if(temp == 0 || temp == 30){
    console.log("Perfect temperature");
}

/* ! NOT Logical Operators
    typically used to reversemm a condition's boolean value
    true -> false   false -> true*/

let temp1 = 30;

if(!(temp1 > 0)){
    console.log("it's cold outside");
}
else{
    console.log("not cold");
}

if(!(cloudy)){
    console.log("It's sunny today");
}
else{
    console.log("Cloudy weather")
}
