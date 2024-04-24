let myButton = document.querySelector("button")
let mySection = document.querySelector("section")
let buttonDelete = document.querySelector(".delete-button")

function createBox(){

    let createElement = document.createElement("div")
    createElement.innerText="new BOX"
    mySection.append(createElement)
}

function deletingBox(){
    mySection.removeChild(mySection.lastChild)
}

myButton.addEventListener("click", createBox)
buttonDelete.addEventListener("click", deletingBox)