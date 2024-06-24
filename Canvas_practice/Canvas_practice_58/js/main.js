// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
// const button = document.getElementById("button")

canvas.width = 500
canvas.height = 500

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

/****************************/
/**********ANIMATION*********/
/****************************/

function animation() {

    ctx.clearRect(0,0,canvas.width,canvas.height)

    rectangle()
    movement()

    requestAnimationFrame(animation)

}

animation()