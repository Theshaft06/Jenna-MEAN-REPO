class Deck{
    constructor(){
        this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
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
            for( var v = 0; v < this.values.length; v++ ) {
                this.cards.push( new Card( this.values[v], this.suits[s] ) );
            }
        }
    }

    deal(){
        return this.cards.pop();
    }
}


class Card{
    constructor(value, suit){
        this.value = value;
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

    receiveHand(card){
        for (let x = 0; x < 2; x++){
            player1.receiveCard(deck.deal());
        }    
    }

    discard(card){
        this.hand.splice(this.hand.indexOf(card), 1);
    }
}



const deck = new Deck();
const player1 = new Player("Jenna")
deck.shuffle();
player1.receiveHand();
console.log(player1);
