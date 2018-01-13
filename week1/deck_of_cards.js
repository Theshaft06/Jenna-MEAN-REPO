class Deck{
    constructor(){
        this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.suits = ['Hearts','Diamonds','Spades','Clubs'];
        this.reset();
    }

    shuffle(){
        let length = this.cards.length;
        let i;
        while (length) {
            i = Math.floor(Math.random() * length--);
            [this.cards[i], this.cards[length]] = [this.cards[length], this.cards[i]];          
        }
        return this;
    }

    reset(){
        this.cards = [];
    
        for( var s = 0; s < this.suits.length; s++ ) {
            for( var n = 0; n < this.names.length; n++ ) {
                this.cards.push( new Card( n+1, this.names[n], this.suits[s] ) );
            }
        }
    }

    deal(){
        return this.cards.pop();
    }
}


class Card{
    constructor(value, name, suit){
        this.value = value;
        this.name = name;
        this.suit = suit;
    }
}


class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    receiveCard(card){
        this.hand.push(card);
    }

    discard(card){
        this.hand.splice(this.hand.indexOf(card), 1);
    }
}


console.log(new Deck().shuffle().deal());
const deck = new Deck();
const player1 = new Player("Matt");
for (let x = 0; x < 2; x++){
    player1.receiveCard(deck.deal());
}
console.log(player1);