
let dealerSum = 0;
let yourSum = 0;

let hidddeCard;
let deck;

let canHit = true; // Allows the player (you) to draw while yourSum <= 21;
let newCard;

window.onload = function(){
    buildDeck();
    shuffleDeck();
}

function buildDeck(){
    let valuesCards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let typeCards = ["C","D","H","S"];
    deck = [];

    for (let i = 0; i < typeCards.length; i++) {
        for(let j = 0; j < valuesCards.length; j++) {
            deck.push(valuesCards[j] + "-" + typeCards[i]); //A-C -> K-C , A-D -> K-D
        }
    }

    console.log(deck);
}   

function shuffleDeck() {
    for(let i = 0 ; i< deck.length; i++) {
        let j = Math.floor(Math.random()*deck.length);
        let shuffle = deck[i];
        deck[i] = deck[j];
        deck[j] = shuffle;
    }
}

    
