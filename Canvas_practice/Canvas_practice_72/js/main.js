const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

/******ball*****/
/***************/
/***************/

let ballX = 250
let ballY = 250
let ballR = 30

let ballDx = 3
let ballDy = 2

function drawBall() {
    ctx.beginPath()
    ctx.fillStyle = "blue"
    ctx.arc(ballX,ballY,ballR,0,Math.PI * 2)
    ctx.fill() 
    ctx.closePath()
}

function ballMovement() {
    ballX += ballDx
    ballY += ballDy
}

function ballCollision() {
    if(ballX + ballR > canvas.width || ballX < ballR) {
        ballDx = -ballDx
        score++
    }

    if(ballY + ballR > canvas.width || ballY < ballR) {
        ballDy = -ballDy
        score++
    }
}

/*****************/
/*******TEXT******/
/*****************/
function drawText() {
    ctx.fillStyle = "brown"
    ctx.font = "40px Arial"
    ctx.fillText("Score", 150,50)
}

let score = 0

function drawScore() {
    ctx.fillStyle = "red"
    ctx.font = "40px Arial"
    ctx.fillText(score, 280,50)
}

/*****************/
/****ANIMATION****/
/*****************/

function animation() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ballMovement()
    drawBall()
    ballCollision()
    drawText()
    drawScore()

    requestAnimationFrame(animation)
}

animation()
