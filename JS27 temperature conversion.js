document.getElementById("submitBtn").onclick = function(){
    let temp;
    const celcius = document.getElementById('celBtn');
    const fahrenheit = document.getElementById('farBtn');
    if(celcius.checked){
        temp = document.getElementById('textBox').value;
        temp = Number(temp);
        temp = toCelcius(temp);
        //temp = temp.toLocaleString(undefined, {style: "unit", unit: "celsius"});
        document.getElementById("tempLabel").innerHTML = temp.toLocaleString(undefined, {style: "unit", unit: "celsius"});
    }
    else if(fahrenheit.checked){
        temp = document.getElementById('textBox').value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp.toLocaleString(undefined, {style: "unit", unit: "fahrenheit"});
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}

function toCelcius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return Math.round((temp * 9/5) + 32);
}