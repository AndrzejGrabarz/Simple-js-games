const box = document.querySelector(".box");

const button = document.getElementById('btn');

let clicked = false;

button.addEventListener('click', function (){
    
    if(clicked == false) {
        box.classList.add("show-more");
        button.innerHTML = "Show Less";
        clicked = true;

    }else {
        box.classList.remove("show-more");
        button.innerHTML = "Show More";
        clicked = false;
    }
       
})


