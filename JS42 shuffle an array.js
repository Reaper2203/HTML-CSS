let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);

cards.forEach(card => console.log(card)); //displaying shuffled cards

function shuffle(array) {
    let currentIndex = array.length; //currentIndex = number of cards = 13

    while(currentIndex !=0 ){
        let randomIndex = Math.floor(Math.random() * array.length); //random function 
        currentIndex -=1;   //getting random shuffle every time the browser loads

        let temporary = array[currentIndex];        // temporary = temporary array for exchanging array
        array[currentIndex] = array[randomIndex];   // Exchanging arrays
        array[randomIndex] = temporary;             //
    }};