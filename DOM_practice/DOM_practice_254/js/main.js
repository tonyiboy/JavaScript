let myButton = document.querySelector("button")
let mySection = document.querySelector("section")
let buttonDelete = document.querySelector(".delete-button")
let buttonAllDelete = document.querySelector(".delete-all")
let box = document.querySelector("div")

function createBox(){

    let createElement = document.createElement("div")
    createElement.innerText="new BOX"
    mySection.append(createElement)
}

function deletingBox(){
    mySection.removeChild(mySection.lastChild)
}

function deleteAll(){
    while (mySection.firstChild) {
        mySection.removeChild(mySection.firstChild);

    }
}

myButton.addEventListener("click", createBox)
buttonDelete.addEventListener("click", deletingBox)
buttonAllDelete.addEventListener("click", deleteAll)