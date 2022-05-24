
    
    let cards_1 = [];
    let cards_2 = [];// array - ordered list of items// array - ordered list of items
    let sum = 0;
    let hasBlackJack = false;
    let isAlive = false;
    let message = "";
    let messageEl_1 = document.getElementById("message-el");
    let messageEl_2 = document.getElementById("message-el_2");
    // let messageEl = document.querySelectorall("#message-el"); 
    // let sumEl = document.getElementById("sum-el");
    let sumEl = document.querySelector("#sum-el");
    let sumEl_2 = document.querySelector("#sum-el_2");
    let cardsEl =  document.getElementById("cards-el")
    let cardsEl_2 =  document.getElementById("cards-el_2")
    let passEl = document.getElementById("pass")
    let ifpass = true;
    
    let player_1 = {

        name: "Homar",      
        chips:  0
    
    }

    let player_2 = {

        name: "BlackFlage",      
        chips:  0
        
    }

    let playerEl_1 = document.getElementById("player-el_1")
    console.log(playerEl_1)
    playerEl_1.textContent = player_1.name + ": $" + player_1.chips
    
    let playerEl_2 = document.getElementById("player-el_2")
    console.log(playerEl_2)
    playerEl_2.textContent = player_2.name + ": $" + player_2.chips

    

    

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
        let firstCard_1 = getRandomCard();
        cards_1.push(firstCard_1);
        let firstCard_2 = getRandomCard();
        cards_2.push(firstCard_2);
        let secondCard_1 = getRandomCard();
        cards_1.push(secondCard_1);
        let secondCard_2 = getRandomCard();
        cards_2.push(secondCard_2);
        sum_1 = firstCard_1 + secondCard_1;
        sum_2 = firstCard_2 + secondCard_2;
        cardsEl.textContent ="Cards: ";
        cardsEl_2.textContent ="Cards: ";
        renderGame();
        disableStartBtn()
        document.getElementById("new-card").disabled = false;
        
        
        
}

function disableStartBtn () {
    document.getElementById("start-btn").disabled = true;
}

function cleanTable() {
    isAlive = false;
    cards_1 = [];
    cards_2 = [];
    sum = 0;
    hasBlackJack = false;
    message = "Want to play a round?";

    messageEl_1.textContent = message;
    sumEl.textContent = "Sum: ";
    cardsEl.textContent ="Cards: ";

    messageEl_2.textContent = message;
    sumEl_2.textContent = "Sum: ";
    cardsEl_2.textContent ="Cards: ";

    document.getElementById("start-btn").disabled = false;
    
}



function renderGame(){
    
    sumEl.textContent = "Sum: " + sum_1;
    sumEl_2.textContent = "Sum: " + sum_2;
    // cardsEl.textContent ="Card: "+  firstCard + " and " + secondCard;
    cardsEl.textContent ="Cards: ";
    cardsEl_2.textContent ="Cards: ";
     for (let i = 0 ; i < cards_1.length; i++) {
         cardsEl.textContent += cards_1[i] + " ";
         cardsEl_2.textContent += cards_2[i] + " ";
     }

    
    if (sum_1 <= 20 && sum_2 <= 20) {
        message = "Do you want to draw a new card?";
        
    } else if (sum_1  === 21|| sum_2 === 21) {
        message = "Wohoo! You've got Blackjack!!";
        hasBlackJack = true;
        
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl_1.textContent = message;
    messageEl_2.textContent = message;
    console.log(message);
}



function newCard_1() {
    if(isAlive === true && hasBlackJack === false) {
        let cardDraw_1 = getRandomCard();

        sum_1 +=  cardDraw_1;
        cards_2.push(cardDraw_1)
    
        renderGame();
        console.log(cards_1);  }
}

function newCard_2() {
    if(isAlive === true && hasBlackJack === false) {
    let cardDraw_2 = getRandomCard();

    sum_2 +=  cardDraw_2;
    cards_2.push(cardDraw_2)

    renderGame();
    console.log(cards_2); }
}




function pass_1() {
            if(isAlive === true && hasBlackJack === false) {
                messageEl_1.textContent ="You pass , waiting for opponent";
                disableNewCardButton();
    }
}

function pass_2() {
    if(isAlive === true && hasBlackJack === false) {
        messageEl_2.textContent ="You pass , waiting for opponent";
        disableNewCardButton();
}
}


function disableNewCardButton (){
    document.getElementById("new-card").disabled = true;
}



