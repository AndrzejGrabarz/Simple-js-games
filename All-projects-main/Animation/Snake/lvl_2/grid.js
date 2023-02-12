
import { wall } from './snake.js'

const GRID_SIZE = 31;

export function randomGridPosition(){
  return{
    x: Math.floor(Math.random()*GRID_SIZE) + 1,
    y: Math.floor(Math.random()*GRID_SIZE) + 1
  }  
}

export function outsideGrid(position){
    return(
        position.x < 1|| position.x >GRID_SIZE -1 ||
        position.y < 1|| position.y >GRID_SIZE -1
        
    )

}



export function head_into_a_wall (head_position){
  
  
  for(let i =0 ; i < wall.length; i++){

    if(head_position.x === wall[i].x && head_position.y == wall[i].y ){
      console.log(wall[i])
      return wall[i] 
    } 
  }

   
   
  

}