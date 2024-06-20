// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

//setting canvas properties
canvas.width = 600
canvas.height = 600

// function draw line for my player
function drawLine() {
    ctx.beginPath()
    ctx.moveTo(0,400)
    ctx.lineTo(canvas.width,400)
    ctx.lineWidth = 2
    ctx.stroke()
}

// draw ball properties
let boxX = 100
let boxY = 350
let boxWidth = 50
let boxHeight = 50

let height = 30

// function that creates player
function drawPlayer() {
    ctx.fillRect(boxX, boxY, boxWidth, boxHeight)
}

// checking for keyboard input
canvas.addEventListener("keydown", function(e) {
    if(e.key === " ") {
       boxY += -boxHeight
    }
})

canvas.addEventListener("keyup", function(e) {
    if(e.key === " ") {
       boxY += boxHeight
    }
})


// function that does animation
function animation() {

    ctx.clearRect(0 , 0, canvas.width, canvas.height)

    drawPlayer()
    drawLine()

    requestAnimationFrame(animation)
}

animation()




