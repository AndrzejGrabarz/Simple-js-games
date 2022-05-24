const computerChoiceDisplay=document.getElementById("computer-choice");
const userChoiceDisplay=document.getElementById("user-choice");
const resultDisplay=document.getElementById("result");
const possibleChoices=document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
//
possibleChoices.forEach(button => button.addEventListener("click",(e) =>{
 userChoice = e.target.id;
 userChoiceDisplay.textContent =userChoice
 console.log(userChoice);
 generateComputerChoise();
 getResults() 
}))
// console.log()
function generateComputerChoise (){
    const randomNumer = Math.floor(Math.random()*possibleChoices.length) + 1;
    
    if(randomNumer === 1) {
        computerChoice = "rock";
    }else if (randomNumer === 2) {
        computerChoice = "scissors";
    }else if (randomNumer === 3) {
        computerChoice = "paper";
    }

    computerChoiceDisplay.textContent = computerChoice;
}
function getResults() {
    if(computerChoice === userChoice) {
        result = "its a draw!"

    }else if(computerChoice === "rock" && userChoice === "paper") {
        result = "you win!"

    }else if(computerChoice === "paper" && userChoice === "sissors") {
        result = "you win!"
    }else if(computerChoice === "sissors" && userChoice === "rock") {
        result = "you win!"
    } else{
        result = "you lose!"
    }
    resultDisplay.textContent = result;
}