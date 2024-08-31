let button = document.querySelector(".create-box")
let section = document.querySelector("section")

function creatingBox(){
    let createBox = document.createElement("div")
    createBox.innerText = "box"
    section.append(createBox)
}

button.addEventListener("click", creatingBox)