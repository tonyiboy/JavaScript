let myButton = document.querySelector("button")
let mySection = document.querySelector("section")
let createElement = document.createElement("div")

createElement.innerText="BOX"

myButton.addEventListener("click", createBox)

function createBox(){
    mySection.append(createElement)
}