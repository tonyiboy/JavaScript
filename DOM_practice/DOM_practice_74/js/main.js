let myButton = document.querySelector("button")
let mySection = document.querySelector("section")

function createBox(){

    let createElement = document.createElement("div")
    createElement.innerText="new BOX"
    mySection.append(createElement)
}

myButton.addEventListener("click", createBox)