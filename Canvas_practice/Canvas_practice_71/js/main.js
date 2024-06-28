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
    }

    if(ballY + ballR > canvas.width || ballY < ballR) {
        ballDy = -ballDy
    }
}

/*****************/
/****ANIMATION****/
/*****************/

function animation() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ballMovement()
    drawBall()
    ballCollision()

    requestAnimationFrame(animation)
}

animation()
