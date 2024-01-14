// The Date object is used to work with dates and times

let date = new Date();//current date and time

//let date = new Date(0); //starting date
//let date = new Date(100000000); //100 million miliseconds after the starting date

let date1 = new Date(2023, 0, 1, 2, 3, 4, 5); //always starting with 0 //specific date
//year, month, day, hour, minutes, seconds, miliseconds
let date2 = new Date("January 22, 2003 00:00:00");

date = date.toLocaleString(); // more readable
console.log(date);
console.log(date1);
console.log(date2);

document.getElementById("myLabel").innerHTML = date;

let year = date.getFullYear(); //current year
let dayofMonth = date.getDate(); //current day of the month
let dayOfWeek = date.getDay(); //sunday is 0 monday is 1
//getMonth, getHours, etc...

date.setFullYear(2024); //changing/setting the year to 2024
//like others but set

let AmorPm = hours >= 12 ? "pm" : "am"; //military time // checking if its am or pm

hours = (hours % 12) || 12; //military to standard