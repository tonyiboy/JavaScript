let box = document.querySelector("div")
let button = document.querySelector("button")

let horizontalMovement = 50
let verticalMovement = 50

function clickMe() {

    if(horizontalMovement <= 800){
    box.style.marginLeft = `${horizontalMovement}px`
    horizontalMovement += 50
    }else {
        box.style.marginTop = `${verticalMovement}px`
        verticalMovement += 50
    }
}


button.addEventListener("click", clickMe )









