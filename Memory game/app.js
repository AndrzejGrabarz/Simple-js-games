const cardArray = [
    {
        name: 'fries',
        img:'images/fries.png',
    },
    {
        name: 'hotdog',
        img:'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name: 'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name: 'fries',
        img:'images/fries.png',
    },
    {
        name: 'hotdog',
        img:'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img:'images/milkshake.png',
    },
    {
        name: 'pizza',
        img:'images/pizza.png',
    },
    {
        name: 'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name: 'milkshake',
        img:'images/milkshake.png',
    },
    {
        name: 'pizza',
        img:'images/pizza.png',
    }
];


cardArray.sort(() => 0.5 - Math.random())//Mieszasznie 




const gridDisplay = document.querySelector('#grid')
let resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];





console.log(cardArray);
console.log(gridDisplay);

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png'); //cardArray[i].img , 'images/blank.png'
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard)
        console.log(card,i)
        gridDisplay.append(card)
        
    }

}

createBoard()



function flipCard(){

    console.log(cardArray)// log after shuffle
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId);
    
    console.log(cardsChosen);
    console.log(cardsChosenIds);


    this.setAttribute('src', cardArray[cardId].img)
    
    if(cardsChosen.length === 2){
        setTimeout(checkMatch,200)
    }


    // console.log("clicked",cardId)
}


const img = document.getElementById('check');


function checkMatch () {
    
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
  
   
    console.log("check for match");
   

    if (cardsChosen[0] == cardsChosen[1]){
        alert("You found a match!");
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    } else {
        alert("Try again")
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
       
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds= [];
  
    console.log(cardsWon)

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = "Congratulation you found them all!"
        img.style.display = "block";
        gridDisplay.style.display = "none";
    }
}





const cardArray_Level_2 = [
    {
        name: 'fries',
        img:'images/fries.png',
    },
    {
        name: 'hotdog',
        img:'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name: 'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name: 'fries',
        img:'images/fries.png',
    },
    {
        name: 'hotdog',
        img:'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img:'images/milkshake.png',
    },
    {
        name: 'pizza',
        img:'images/pizza.png',
    },
    {
        name: 'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name: 'milkshake',
        img:'images/milkshake.png',
    },
    {
        name: 'pizza',
        img:'images/pizza.png',
    },
    {
        name: 'kapelusz',
        img:'images/kapelusz.png',
    },
    {
        name: 'bulba',
        img:'images/bulba.png',
    },
    {
        name: 'kapelusz',
        img:'images/kapelusz.png',
    },
    {
        name: 'bulba',
        img:'images/bulba.png',
    },
    {
        name: 'łezka',
        img:'images/łezka.png',
    },
    {
        name: 'minionek',
        img:'images/minionek.png',
    },
    {
        name: 'łezka',
        img:'images/łezka.png',
    },
    {
        name: 'minionek',
        img:'images/minionek.png',
    },
    {
        name: 'ptak',
        img:'images/ptak.png',
    },
    {
        name: 'ptak',
        img:'images/ptak.png',
    },
    {
        name: 'waleń',
        img:'images/waleń.png',
    },
    {
        name: 'waleń',
        img:'images/waleń.png',
    }
    
];


cardArray_Level_2.sort(() => 0.5 - Math.random())//Mieszasznie 
let cardsChosen_Level_2 = [];
let cardsChosenIds_Level_2 = [];
const cardsWon_Level_2 = [];
resultDisplay_Level_2 = document.querySelector('#result_Level_2');

const gridDisplay_Level_2 = document.querySelector('#grid_Level_2')
function createBoard_Level_2(){
    for(let i=0; i<cardArray_Level_2.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png'); //cardArray_Level_2[i].img , 'images/blank.png'
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard_Level_2)
        console.log(card,i)
        gridDisplay_Level_2.append(card)
        
    }

}

createBoard_Level_2()

console.log(cardArray_Level_2)

function flipCard_Level_2(){

    console.log(gridDisplay_Level_2)// log after shuffle
    const cardId = this.getAttribute('data-id');
    cardsChosen_Level_2.push(cardArray_Level_2[cardId].name)
    cardsChosenIds_Level_2.push(cardId);
    
    console.log(cardsChosen_Level_2);
    console.log(cardsChosenIds_Level_2);


    this.setAttribute('src', cardArray_Level_2[cardId].img)// 
    
    if(cardsChosen_Level_2.length === 2){
        setTimeout(checkMatch_Level_2,200)
    }


    // console.log("clicked",cardId)
}

function checkMatch_Level_2 (){
    const cards = document.querySelectorAll('#grid_Level_2 img')
    const optionOneId = cardsChosenIds_Level_2[0];
;    const optionTwoId = cardsChosenIds_Level_2[1];

    if(cardsChosen_Level_2[0] == cardsChosen_Level_2[1]){
        alert('You are so smart')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard_Level_2)
        cards[optionTwoId].removeEventListener('click', flipCard_Level_2)
        cardsWon_Level_2.push(cardsChosenIds_Level_2)
    } else {
        alert('Try again');
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    cardsChosen_Level_2 = [];
    cardsChosenIds_Level_2 = [];
    console.log(cardsWon_Level_2)
    resultDisplay_Level_2.textContent = cardsWon_Level_2.length;
     
    if(cardsWon_Level_2.length == cardArray_Level_2.length/2) {
    resultDisplay_Level_2.textContent = "Congratulation you found them all!"
    img.style.display = "block";
    gridDisplay.style.display = "none";
    }

}

       
