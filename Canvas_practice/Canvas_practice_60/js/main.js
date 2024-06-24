// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
// const button = document.getElementById("button")

canvas.width = 500
canvas.height = 500

/**************************************/
/**************BEFORE GAME*************/
/**************************************/

let startGame = false

//drawing text
let text = "START GAME"

function drawStartGame() {
    ctx.beginPath()
    ctx.font = "40px Ariel"
    ctx.textAlign = "center"
    ctx.fillStyle = "blue"
    ctx.fillText(text, canvas.width / 2,canvas.height / 2)
    ctx.closePath()
}

// mouse cordinates
let mouseX = 0
let mouseY = 0


//checking cordinates of text
function textCordinates() {
    let textWidth = text.width
    console.log(textWidth);
}


// checking starting game
canvas.addEventListener("click", function start(e) {
    mouseX = e.offsetX
    mouseY = e.offsetY

    let textWidth = ctx.measureText(text).width
    let textMetrics = ctx.measureText(text)
    let heightOfText = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent
    let startGameX = canvas.width / 2 - textWidth / 2
    let startGameY = canvas.height / 2 - textMetrics.actualBoundingBoxAscent

    if(mouseX > startGameX && mouseX < startGameX + textWidth && mouseY > startGameY && mouseY < startGameY + heightOfText) {
        startGame = true
        animation()
    }
})


/**************************************/
/**************GAME START**************/
/**************************************/

//rectangle properties
let x = 100
let y = 450
let width = 50
let height = 50

let dx = 5
let dy = 0
let jumpStrength = -10
let gravity = 0.5
let isJumping = false

let rotationAngle = 0

//function that draws rectangle
function rectangle() {
    ctx.save() // Save the current state
    ctx.translate(x + width / 2, y + height / 2) // Move to the center of the rectangle
    ctx.rotate(rotationAngle * Math.PI / 180) // Rotate
    ctx.fillStyle = "blue"
    ctx.fillRect(-width / 2, -height / 2, width, height) // Draw the rectangle centered at the origin
    ctx.restore() // Restore the original state
}

//keyboard movement properties
let leftMove = false
let rightMove = false

canvas.addEventListener("keydown", (e) => {
    if(e.key === "ArrowLeft")  leftMove = true
    if(e.key === "ArrowRight")  rightMove = true
    if(e.key === " " && !isJumping) {
        dy = jumpStrength
        isJumping = true
    }    
})

canvas.addEventListener("keyup", (e) => {
    if(e.key === "ArrowLeft")  leftMove = false
    if(e.key === "ArrowRight")  rightMove = false
})

//movement
function movement() {
    if(leftMove) x -= dx //left move
    if(rightMove) x += dx // right move
    
    if(isJumping) {
        dy += gravity
        y += dy
        rotationAngle += 10
    }    

    if(y + height > canvas.height) {
        y = canvas.height - height
        dy = 0
        isJumping = false
        rotationAngle = 0
    }
}

// collision detection rectangle
function collision() {

    if(x + width > canvas.width ) {
        x = canvas.width - width
    }

    if(x < 0) {
        x = 0
    }
}

/****************************/
/**********ANIMATION*********/
/****************************/

function animation() {

    if(startGame) {
        ctx.clearRect(0,0,canvas.width,canvas.height)

        rectangle()
        movement()
        collision()

        requestAnimationFrame(animation)
    }else drawStartGame()
    

}

animation()