import {getInputDirection } from "./input.js";


export const snakeSpeed = 4;

const snakeBody = [{x:11,y:11}];
export const wall = [
    {x:5,y:4},{x:4,y:4},{x:4,y:5},
    {x:27,y:4},{x:28,y:4},{x:28,y:5},
    {x:4,y:27},{x:4,y:28},{x:5,y:28},
    {x:27,y:28},{x:28,y:28},{x:28,y:27},
    
    
    {x:15,y:15},{x:16,y:15},{x:17,y:15},
    {x:15,y:16},{x:16,y:16},{x:17,y:16},
    {x:15,y:17},{x:16,y:17},{x:17,y:17}
];
let newSegments = 0;


export function update(){
    
    addSegments()

    const inputDirection = getInputDirection()

    for(let i = snakeBody.length - 2; i >= 0; i--){

        snakeBody[i + 1] = { ...snakeBody[i]}
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {

    for(let i = 0; i < 1; i++) { 
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = snakeBody[i].y
        snakeElement.style.gridColumnStart = snakeBody[i].x
        snakeElement.classList.add('stary-na-wersalce');
        
        gameBoard.appendChild(snakeElement);
    
    }

    for(let i = 1; i < snakeBody.length; i++) { 
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = snakeBody[i].y
    snakeElement.style.gridColumnStart = snakeBody[i].x
    snakeElement.classList.add('snake');
    
    gameBoard.appendChild(snakeElement);

    }
    
    for(let i = 0; i < wall.length; i++) { 
        const snakeBarrier = document.createElement('div');
        snakeBarrier.style.gridRowStart = wall[i].y
        snakeBarrier.style.gridColumnStart = wall[i].x
        snakeBarrier.classList.add('box');
        
        gameBoard.appendChild(snakeBarrier);
    }

    //     snakeBody.forEach(segment => {
    //   const snakeElement = document.createElement('div')
    //   snakeElement.style.gridRowStart = segment.y
    //   snakeElement.style.gridColumnStart = segment.x
    //   snakeElement.classList.add('snake')
    //   gameBoard.appendChild(snakeElement)
    // })

    
    


  }

export function expandSnake(amount) {
    newSegments += amount
  }


export function onSnake(position, { ignoredHead = false } = {}) {
    
    return snakeBody.some((segment, index) => {
        if(ignoredHead && index === 0) return false
        return equalPositions(segment, position)
    })
}



export function onBarrier(position, { ignoredHead = false } = {}) {
    
    return wall.some((segment, index) => {
        if(ignoredHead && index === 0) return false
        return equalPositions(segment, position)
    })
}




function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
  }

function addSegments() {

    for(let i = 0; i < newSegments; i++) {
        snakeBody.push({...snakeBody[snakeBody.length + 1] })
        console.log("bonk")
    }
     
    newSegments = 0;
}



export function getSnakeHead(){
   return snakeBody[0]; 
}




export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoredHead:true });

}

// Funkcja sprawdza pozycje głowy węża względem  każdej innej pozycji na na nim / jego ciała jeśli są takie same przegrywasz 

