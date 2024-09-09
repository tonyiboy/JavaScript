let box = document.querySelector("div")
let button = document.querySelector("button")

let horizontalMovement = 50
let verticalMovement = 50

function clickMe() {

    if(horizontalMovement < 800){
    box.style.marginLeft = `${horizontalMovement}px`
    horizontalMovement += 50
    }else {
            box.style.marginTop = `${verticalMovement}px`
            verticalMovement += 50
        }    

    if(horizontalMovement === 800){
        box.style.backgroundColor = "purple"
    }

    if(horizontalMovement === 800 && verticalMovement === 50){
        window.confirm("Are you ready to move vertically?Click button again")
    }
}

button.addEventListener("click", clickMe )









