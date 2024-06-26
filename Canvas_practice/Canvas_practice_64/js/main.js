// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


canvas.width = 500
canvas.height = 500

//drawing line for player
function drawLine() {
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.moveTo(0,400)
    ctx.lineTo(canvas.width,400)
    ctx.stroke()
    ctx.closePath()
}

/*******BOX*****/
/***************/
/***************/

//properties box
let boxX = 20
let boxY = 350
let boxW = 50
let boxH = 50

let boxDx = 2

// creating a box
function drawBox() {
    ctx.fillStyle = "black"
    ctx.fillRect(boxX,boxY,boxW,boxH)

}

//box movement
function boxMovement() {
    boxX += boxDx
}

//collision box detection
function boxCollision() {
    if(boxX + boxW > canvas.width) {
        boxX = 0
    }
}

/*****************/
/****PLAYER*******/
/*****************/

let playerX = 100
let playerY = 350
let playerW = 50
let playerH = 50

let playerDx = 2

// draw player
function drawPlayer() {
    ctx.fillStyle = "red"
    ctx.fillRect(playerX,playerY,playerW,playerH)
}

// properties keyboard
let left = false
let right = false

//movement
canvas.addEventListener("keydown", function(e) {
    if(e.key === "ArrowLeft") left = true
    if(e.key === "ArrowRight") right = true

})

canvas.addEventListener("keyup", function(e) {
    if(e.key === "ArrowLeft") left = false
    if(e.key === "ArrowRight") right = false   
})

// player movement
function playerMove() {
    if(left) playerX -= playerDx
    if(right) playerX += playerDx
}

//animation
function animation() {

    ctx.clearRect(0,0,canvas.width,canvas.height)

    drawLine()
    drawBox()
    playerMove()
    boxCollision()
    boxMovement()
    drawPlayer()
    

    requestAnimationFrame(animation)
}

animation()