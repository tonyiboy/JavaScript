let li = document.querySelectorAll("li")
let button= document.querySelector("button")

function clickMe() {
    for(let i = 0; i < li.length; i++){
        li[i].style.fontSize = "50px"
    }
    
}

button.addEventListener("click", clickMe)









