const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");


let startTime = 0 ;
let elapsedTime = 0 ;// Elapsed time = Czas, który upłynął
let currentTime = 0 ;
let paused= true;
let intervalId;//okres przerwa 
let hrs = 0;
let min = 0;
let secs = 0;



startBtn.addEventListener("click",() =>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime ,1000 );
        console.log(startTime)
    }
});

pauseBtn.addEventListener("click",() =>{
    if(!paused){
        paused = true;
        // elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
        console.log(elapsedTime)
        console.log(startTime)
    }
});

resetBtn.addEventListener("click",() =>{
        paused = true;
        clearInterval(intervalId);
        startTime = 0 ;
        elapsedTime = 0 ;// Elapsed time = Czas, który upłynął
        currentTime = 0 ;
        hrs = 0;
        min = 0;
        secs = 0;
        timeDisplay.textContent = "00:00:00"
});


function updateTime (){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    min = Math.floor((elapsedTime / (1000 * 60) ) % 60);
    hrs = Math.floor((elapsedTime/(1000 * 60 * 60) ) % 60);

    secs = pad(secs);
    min= pad(min);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${min}:${secs}`;

    function pad(unit){
        return (("0")+ unit).length > 2 ? unit: "0" + unit;
    }
}


const countBtn = document.querySelector("#countBtn");

let startingMinutes = 10;
let time = startingMinutes * 60; 

countBtn.addEventListener("click",() =>{
    timeDisplay.textContent = "00:00"
    setInterval(countDown ,1000 );
    
});

function countDown() {
   
    const min = Math.floor(time/60);
    let sec = time % 60;

    sec = sec < 10? '0' + sec: sec;

    timeDisplay.textContent = `${min}:${sec}`;
    time--;   
}




     

   
