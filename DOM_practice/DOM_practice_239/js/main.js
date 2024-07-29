let buttonCreateBox = document.querySelector(".create-box")
let buttonDeleteBox = document.querySelector(".delete-box")
let buttonSizeBox = document.querySelector(".size-box")

let section = document.querySelector("section")


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

function sizeBox(){
    for(let i = 0; i < section.children.length; i++){ 
    section.children[i].style.width = "180px"
    section.children[i].style.height = "180px"
    }

}

buttonCreateBox.addEventListener("click", creatingBox)
buttonDeleteBox.addEventListener("click", deleteBox)
buttonSizeBox.addEventListener("click", sizeBox)