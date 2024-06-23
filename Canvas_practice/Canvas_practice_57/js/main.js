// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
// const button = document.getElementById("button")

canvas.width = 500
canvas.height = 500

//drawing line for player
function drawLine() {
    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.moveTo(0,400)
    ctx.lineTo(500,400)
    ctx.stroke()
    ctx.closePath()
}

// rectangle properties
let x = 50
let y = 350
let width = 50
let height = 50

let dx = 4
let dy = 0
let gravity = 0.5
let jumpStrength = -10
let isJumping = false

//draw rectangle
function drawRectangle() {
    ctx.fillRect(x,y,width,height)
}

//checking keyboard

let rightKey = false
let leftKey = false
let spaceKey = false

canvas.addEventListener("keydown", function(e) {
    if(e.key === "ArrowRight") {
        rightKey = true
    }

    if(e.key === "ArrowLeft") {
        leftKey = true  
    }  

    if (e.key === " ") {
        spaceKey = true
    }

})

canvas.addEventListener("keyup", function(e) {
    if(e.key === "ArrowRight") {
        rightKey = false  
    }

    if(e.key === "ArrowLeft") {
        leftKey = false   
    }

    if (e.key === " ") {
        spaceKey = false
    }
    
})

function movement() {
    if(rightKey === true) {
        x += dx
    }

    if(leftKey === true) {
        x -= dx
    }

    if (spaceKey && !isJumping) {
        dy = jumpStrength;
        isJumping = true;
    }

    dy += gravity;  // Apply gravity to vertical speed
    y += dy;  // Update vertical position

    // Check if the rectangle hits the ground
    if (y + height >= 400) {
        y = 400 - height;  // Reset position to ground level
        dy = 0;  // Reset vertical speed
        isJumping = false;  // Allow jumping again
    }

}

//clear canvas
function clearCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

//animation
function animation() {

    clearCanvas()

    drawLine()
    drawRectangle()
    movement()

    requestAnimationFrame(animation)
}

animation()
