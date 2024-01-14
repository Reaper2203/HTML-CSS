let prices = [5, 10, 15, 20, 25];

for(let i = 0; i < prices.length; i+=1){    //displaying the array one by one
    console.log(prices[i]); //index of i which is 0
}

for(let i = prices.length - 1;i >= 0; i-=1){ //descending
    console.log(prices[i]);
}

for(let price of prices){ //for up statement //ascending
    console.log(price);
}