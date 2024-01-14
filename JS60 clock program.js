
const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000); //updates every second

function update(){

    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "pm" : "am"; //checking if am or pm

        hours = (hours % 12) || 12; //changing military time as standard 

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }
    function formatZeroes(time){    //leading zeroes ex. 01 02 // making single digit to a double digit
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}