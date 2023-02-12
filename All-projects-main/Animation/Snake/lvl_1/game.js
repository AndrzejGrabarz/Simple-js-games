import { update as updateSnake , draw as drawSnake ,snakeSpeed,getSnakeHead, snakeIntersection } from "./snake.js";

import {update as updateFood , draw as drawFood } from "./food.js";

import {outsideGrid} from "./grid.js"
let lastRenderTime = 0;
let gameOver = false;

const gameBoard = document.getElementById("game-board");



function main (currentTime){ 
    
    if(gameOver){
      if(confirm('You lost. Press ok to restart the game')){
        return window.location = '/Animation/Snake/lvl_1/snake.html'
      }
      return window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');
    }
    
    // Jesli "prawda" ,że przegrałeś  to  wyświetle komunikat , kolejny "if"  kliknij ok ,a by zresetować "/" albo zostaw return "nic"
    
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 0.9 / snakeSpeed) return
  
  
    lastRenderTime = currentTime
  
    update()
    draw()

}

window.requestAnimationFrame(main)


function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
  }

  function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
  }

//  Przegrywamy jesli głowa węża znajduje się poza siatką lub jeżeli "głowa przetnie się z resztą ciała"  