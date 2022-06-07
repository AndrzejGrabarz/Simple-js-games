
let dealerSum = 0;
let yourSum = 0;
let hidddeCard = [];
let deck;

let canHit = true; // Allows the player (you) to draw while yourSum <= 21;
let newCard;
let startGame = document.getElementById("start-btn");
let reset = document.getElementById("reset-btn");
let hit1 = document.getElementById("hit1-btn");
let hit2 = document.getElementById("hit2-btn");
let stay = document.getElementById("stay");
let images = document.getElementsByTagName('img');
let spans = document.getElementsByTagName('span');




let sumDealer = document.getElementById("dealer-sum");
let sumPlayer = document.getElementById("your-sum");






startGame.addEventListener("click",function(){
    buildDeck();
    shuffleDeck();
    startGame_player();
    startGame_dealer();
    
    document.getElementById("start-btn").disabled = true;
    console.log(hidddeCard)
}) 





// Startgame


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

function shuffleDeck() {                   //mieszanie decku
    for(let i = 0 ; i< deck.length; i++) {
        let j = Math.floor(Math.random()*deck.length);
        let shuffle = deck[i];
        deck[i] = deck[j];
        deck[j] = shuffle;
    }
}

function getValue(card) {
    let data = card.split("-");
    let value = data[0];

    if(isNaN(value)){
        if(value == "A"){
            return 11
        }
        return 10;
    }
    return parseInt(value)
   
 }


 function Clean() {
    dealerSum = 0;
    yourSum = 0;
    sumDealer.textContent = "";
    sumPlayer.textContent = "";
}

    
function startGame_dealer() {
    
       
        cardImg = document.createElement("img");
        let card = deck.pop();
        hidddeCard.push(card);
        // cardImg.src ="./Cards/" + card + ".png";
        dealerSum += getValue(card);
        cardImg.src = "./Cards/BACK.png"
        document.getElementById("dealer-cards").append(cardImg);
        console.log(card);
        console.log(cardImg);
    for(let i = 0 ; i < 1; i++) {
        
        cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src ="./Cards/" + card + ".png";
        dealerSum += getValue(card);
        document.getElementById("dealer-cards").append(cardImg);
        hidddeCard.push(card);
    }
   
    console.log("Dealer " + dealerSum)
    sumDealer.textContent = dealerSum;
      
}

function startGame_player() {
    
    for(let i = 0 ; i < 2; i++) {
        
        cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src ="./Cards/" + card + ".png";
        yourSum += getValue(card);
        document.getElementById("your-cards").append(cardImg);
        
    }
        console.log("Player " + yourSum)
        sumPlayer.textContent = yourSum;
}

// Startgame - end


//Buttons - start

    hit1.addEventListener("click",function(){

        if(dealerSum < 17) {
         cardImg = document.createElement("img");
         let card = deck.pop();
         cardImg.src ="./Cards/" + card + ".png";
         dealerSum += getValue(card);
         document.getElementById("dealer-cards").append(cardImg);
         sumDealer.textContent = dealerSum;
         
         console.log(deck);
        } else{
         alert("You can hit as dealer if your sum is less than 17") 
        }
        
     })

        function hiddenFlip() {

            cardImg = document.createElement("img");
            let card = hidddeCard.shift();
            cardImg.src ="./Cards/" + card + ".png";
            document.getElementById("dealer-cards").append(cardImg);
            
        }

     
     hit2.addEventListener("click",function(){
        
         cardImg = document.createElement("img");
         let card = deck.pop();
         cardImg.src ="./Cards/" + card + ".png";
         yourSum += getValue(card); 
         document.getElementById("your-cards").append(cardImg);
         sumPlayer.textContent = yourSum ;
         console.log(card);
     })




    reset.addEventListener("click",function(){
        for (let i= document.images.length; i-->0;)
        document.images[i].parentNode.removeChild(document.images[i]);
        document.getElementById("start-btn").disabled = false;
        Clean();

    }) 


    stay.addEventListener("click",function(){
        // let dealerCard = document.getElementById('dealer-cards');
        // dealerCard.parentNode.removeChild(dealerCard);
        document.querySelector("img").remove();  
        hiddenFlip()     
        
    })


//Buttons - end
