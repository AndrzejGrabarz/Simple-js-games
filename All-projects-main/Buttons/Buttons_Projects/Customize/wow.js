

const Poland = document.getElementById("polish");
const England = document.getElementById("english");
const Germany = document.getElementById("german");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

const textEN = document.querySelector(".english-text");
const textPL = document.querySelector(".polish-text");
const textGER = document.querySelector(".german-text");
const bodyElement = document.querySelector("body");
const iconSun = document.querySelector("#sun");
const iconMoon = document.querySelector("#moon");
const div = document.querySelector(".container");

const ptag = document.querySelectorAll("p");




England.addEventListener("click", function(){
    
    textEN.style.display = "flex";
    textPL.style.display = "none";
    textGER.style.display = "none";
    
})


Poland.addEventListener("click", function(){
    
    textEN.style.display = "none";
    textPL.style.display = "flex";
    textGER.style.display = "none";
    
})


Germany.addEventListener("click", function(){
    
    textEN.style.display = "none";
    textPL.style.display = "none";
    textGER.style.display = "flex";
    
})

sun.addEventListener("click" , function(){

    bodyElement.style.backgroundColor = "#FFE3F1";
    
    for(let i = 0; i < ptag.length; i++){
        ptag[i].style.color = "black";
    }

    div.style.backgroundColor = "#D9DAFF"
    sun.style.display = "none";
    moon.style.display = "flex";
})


moon.addEventListener("click" , function(){

    bodyElement.style.backgroundColor = "#303030";
    
    for(let i = 0; i < ptag.length; i++){
        ptag[i].style.color = "#D9DAFF";
    }

    div.style.backgroundColor = "#5A3E51";
    sun.style.display = "flex";
    moon.style.display = "none";
})