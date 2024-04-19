let box = document.querySelector("div")
let button = document.querySelector("button")
let sizeButton = document.getElementById("boxSize")

let horizontalMovement = 50
let verticalMovement = 50
let confirmationDisplayed = false

function movingBox() {

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

function increasingBox() {
    if(verticalMovement > 50){
        box.style.width = "200px"
        box.style.height = "200px"
    }else {
        alert("You need to move vertically first before increasing the box size.")
    }
}

button.addEventListener("click", movingBox )
sizeButton.addEventListener("click", increasingBox )





