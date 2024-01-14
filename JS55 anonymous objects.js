/* anonymous objects = objects without a name
                        Not directly referenced
                        Less syntax. No need unique names*/

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

let cards = [new Card("Ace", "Hearts"),
            new Card("Ace", "Spades"),
            new Card("Ace", "Diamonds"),
            new Card("Ace", "Clubs"),
            new Card("King", "Hearts"),
            new Card("King", "Spades"),
            new Card("King", "Diamonds"),
            new Card("King", "Clubs")];

console.log(`${cards[0].value} of ${cards[0].suit}`); //targeting a specific value and suit

cards.forEach(card => console.log(`${card.value} of ${card.suit}`)); //displaying all cards