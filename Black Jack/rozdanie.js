
    
    let cards = [];// array - ordered list of items
    let sum = 0;
    let hasBlackJack = false;
    let isAlive = false;
    let message = "";
    let messageEl = document.getElementById("message-el");
    // let sumEl = document.getElementById("sum-el");
    let sumEl = document.querySelector("#sum-el")
    let cardsEl =  document.getElementById("cards-el")
    let passEl = document.getElementById("pass")
    let ifpass = true;

    let player = {

    name: "Homar",
    chips:  145
    
    }
    let playerEl = document.getElementById("player-el")
    console.log(playerEl)
    playerEl.textContent = player.name + ": $" + player.chips
 

    

    

function getRandomCard(){
     let randomNumber = Math.floor(Math.random() * 13) + 1;

            if (randomNumber > 10){
                return 10;
            }else if (randomNumber === 1){
                return 11;
            } else {
                return randomNumber;
            }
        
             
}


    function startGame() {
        isAlive = true;
        let firstCard = getRandomCard();
        cards.push(firstCard);
        let secondCard = getRandomCard();
        cards.push(secondCard);
        sum = firstCard + secondCard;
        cardsEl.textContent ="Cards: ";
        renderGame();
        disableStartBtn()
        document.getElementById("new-card").disabled = false;
        console.log(cards)
        
}

function disableStartBtn () {
    document.getElementById("start-btn").disabled = true;
}

function cleanTable() {
    isAlive = false;
    cards = [];
    sum = 0;
    hasBlackJack = false;
    message = "Want to play a round?";
    console.log(cards);
    messageEl.textContent = message;
    sumEl.textContent = "Sum: ";
    cardsEl.textContent ="Cards: ";
    document.getElementById("start-btn").disabled = false;
    
}



function renderGame(){
    
    sumEl.textContent = "Sum: " + sum;
    // cardsEl.textContent ="Card: "+  firstCard + " and " + secondCard;
    cardsEl.textContent ="Cards: ";
     for (let i = 0 ; i < cards.length; i++) {
         cardsEl.textContent += cards[i] + " ";
     }

    
    if (sum <=20) {
        message = "Do you want to draw a new card?";
        
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!!";
        hasBlackJack = true;
        
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    console.log(message);
}



function newCard() {
    if(isAlive === true && hasBlackJack === false) {
    let cardDraw = getRandomCard();
    sum +=  cardDraw;
    cards.push(cardDraw);
    renderGame();
    console.log(cards); }
}

function pass() {
            if(isAlive === true && hasBlackJack === false) {
                messageEl.textContent ="You pass , waiting for opponent";
                disableNewCardButton();
    }
}

function disableNewCardButton (){
    document.getElementById("new-card").disabled = true;
}

//CASH OUT 
console.log(hasBlackJack);
console.log(isAlive);
console.log(message);

