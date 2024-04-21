let buttonCreateBox = document.querySelector(".create-box")
let buttonDeleteBox = document.querySelector(".delete-box")
let buttonSizeBox = document.querySelector(".size-box")
let buttonDefaultBox = document.querySelector(".default-box")
let buttonDecreaseBox = document.querySelector(".decrease-box")

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

let incrementSize = 150

function sizeBox(){
    if(incrementSize <= 500){
        for(let i = 0; i < section.children.length; i++){ 
            section.children[i].style.width = `${incrementSize}px`
            section.children[i].style.height = `${incrementSize}px`
        }
    }else alert("You reached limit")
   

    incrementSize += 30
}

function decreaseBox(){
    incrementSize -= 30
    if(incrementSize > 30){
        for(let i = 0; i < section.children.length; i++){ 
            section.children[i].style.width = `${incrementSize}px`
            section.children[i].style.height = `${incrementSize}px`
        }
    }else alert("You reached limit")
}

function defaultSize(){
    for(let i = 0; i < section.children.length; i++){ 
        section.children[i].style.width = "120px"
        section.children[i].style.height = "120px"
        }
}

buttonCreateBox.addEventListener("click", creatingBox)
buttonDeleteBox.addEventListener("click", deleteBox)
buttonSizeBox.addEventListener("click", sizeBox)
buttonDefaultBox.addEventListener("click", defaultSize)
buttonDecreaseBox.addEventListener("click", decreaseBox)