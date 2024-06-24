// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
// const button = document.getElementById("button")

canvas.width = 500
canvas.height = 500


/**************************************/
/****************PART 1****************/
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

//function that draws rectangle
function rectangle() {
    ctx.fillStyle = "blue"
    ctx.fillRect(x,y,width,height)
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
    }    

    if(y + height > canvas.height) {
        y = canvas.height - height
        dy = 0
        isJumping = false
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

/**************************************/
/****************PART 2****************/
/**************************************/

//rectangle properties 2
let x2 = 200
let y2 = 200
let width2 = 50
let height2 = 50

let dx2 = 3
let dy2 = 2

//function that draws rectangle 2
function rectangle2() {
    ctx.fillStyle = "red"
    ctx.fillRect(x2,y2,width2,height2)
}

//movement rectangle 2
function movement2() {
    x2 += dx2
    y2 += dy2
}

// collision detection rectangle 2
function collision2() {
    if(x2 + width2 > canvas.width || x2 < 0) {
        dx2 = -dx2
    }

    if(y2 + height2 > canvas.height || y2 < 0) {
        dy2 = -dy2
    }
}

//collision among boxes
function rectangleCollision() {
      
      if (x < x2 + width2 && x + width > x2 &&
        y < y2 + height2 && y + height > y2) {
    
        dx2 = -dx2
        dy2 = -dy2
    }

}

/****************************/
/**********ANIMATION*********/
/****************************/

function animation() {

    ctx.clearRect(0,0,canvas.width,canvas.height)

    movement2()
    rectangle2()
    rectangle()
    movement()
    collision()
    collision2()
    rectangleCollision()

    requestAnimationFrame(animation)

}

animation()