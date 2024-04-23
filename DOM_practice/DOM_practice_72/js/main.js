let myButton = document.querySelector("button")
let mySection = document.querySelector("section")
let createElement = document.createElement("div")

createElement.innerText="new BOX"

myButton.addEventListener("click", createBox)

function createBox(){
    
    mySection.prepend(createElement)
}