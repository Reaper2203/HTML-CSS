/* toLocaleString() = returns a string with a language
                    sensitive representation of this number
    
number.toLocaleString(locale, {options});

'locale' = specify that language (undefined = default set in browser)
'options' = object with formating options*/

let myNum = 100;

//myNum = myNum.toLocaleString("en-US"); //US english //comma every thousands place
//myNum = myNum.toLocaleString("hi-IN"); //Hindi
//myNum = myNum.toLocaleString("de-DE"); //standard german

//myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"}); //US Dollars
//myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"}); //Indian Rupee
//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"}); //Euros

//myNum = myNum.toLocaleString(undefined, {style: "percent"}); //percent
myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"}); //plenty of units like, kilometers, miles, kilograms etc...
console.log(myNum);