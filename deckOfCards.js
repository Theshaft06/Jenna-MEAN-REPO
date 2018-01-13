// Create a Deck class. A deck should have the following functionality:

// The Deck should contain the 52 standard cards

var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var suits = ["hearts", "diamonds", "spades", "clubs"];
var highCards = ["jack", "queen", "king", "ace"];

function createDeck() {
    var deck = [];
    for (var i = 0; i < values.length; i++) {
        for (var j = 0; j< suits.length; j++) {
            deck.push({suit: suits[j], value: values[j]});
        }
    }
    return deck;
}

var newDeck = createDeck()
// console.log(newDeck);

// // The Deck should be able to shuffle

function shuffle(newDeck) {
  var m = newDeck.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = newDeck[m];
    newDeck[m] = newDeck[i];
    newDeck[i] = t;
  }
  return newDeck;
}

var shuffledDeck = shuffle(newDeck);
// console.log(shuffledDeck);


// // The Deck should be able to deal a random card
// Deal should return the card that was dealt and remove it from the deck

function dealCard(deck) {
    var rand = shuffledDeck.pop(shuffledDeck[Math.floor(Math.random() * shuffledDeck.length)]);
    return rand;
}

var dealtCard = dealCard();

// Now create a Player class. A Player should have the following functionality:

class Player {
    constructor(name, hand) {
        // The Player should have a name
        this.name = name;
        // The Player should have a hand
        this.hand = []];
        
    }
    // The Player should be able to take a card (use the deck.deal method)
    takeCard() {
        this.hand.push(deck.dealCard());
    }
}



// The Player should be able to discard a card
// Optional:

// Create a blackjack game with your deck of cards!
// A deck of card image set can be found here

// Or Unicode them Unicode for card images!

