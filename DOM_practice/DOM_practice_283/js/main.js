let buttonCreateBox = document.querySelector(".create-box")
let section = document.querySelector("section")
let buttonDeleteBox = document.querySelector(".delete-box")

function creatingBox(){
    let createBox = document.createElement("div")
    createBox.innerText = "box"
    section.append(createBox)
}

function deleteBox(){
    if(section.lastElementChild){
    section.lastElementChild.remove()
    }
}

buttonCreateBox.addEventListener("click", creatingBox)
buttonDeleteBox.addEventListener("click", deleteBox)