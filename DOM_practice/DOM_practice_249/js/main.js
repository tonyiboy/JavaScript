let li = document.querySelectorAll("li")
let button= document.querySelector("button")

function clickMe() {
    for(let i = 0; i < li.length; i++){
        li[i].style.color = "red"
    }
    
}

button.addEventListener("click", clickMe)









