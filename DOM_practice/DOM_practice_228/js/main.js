let myButton = document.querySelector("button")
let mySection = document.querySelector("section")
let createElement = document.createElement("div")
let div = document.querySelector("div")

createElement.innerText="new BOX"

myButton.addEventListener("click", createBox)

function createBox(){
    
    mySection.replaceChild(createElement, div)
}