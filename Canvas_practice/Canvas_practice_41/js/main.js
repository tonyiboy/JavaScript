// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500


/*****************************/
/**********RECTANGLE**********/
/*****************************/

// rect properties
let x = 200
let y = 100
let width = 50
let height = 50
dx = 2
dy = 2

// function that draws rect
function drawRect() {
    ctx.fillStyle = "red"
    ctx.fillRect(x,y,width,height)
}

/*****************************/
/**********CIRCLE**********/
/*****************************/

// circle properties
let circleX = 250
let circleY = 300
let radius = 30
let fullCircle = Math.PI * 2
let cirlceDx = 2
let cirlceDy = 2

// function that draws circle
function drawCircle() {
    ctx.beginPath()
    ctx.arc(circleX,circleY,radius,0,fullCircle)
    ctx.fillStyle = "green"
    ctx.fill()
    ctx.closePath()
}

/*****************************/
/*****COLLISION DETECTION*****/
/*****************************/
function collision() {
    if(x + width > canvas.width || x < 0) {
        dx = -dx
    }

    if(y + height > canvas.height || y < 0) {
        dy = -dy
    }

    if(circleX + radius > canvas.width || circleX - radius < 0) {
        cirlceDx = -cirlceDx
    }
}

/*****************************/
/**********ANIMATION**********/
/*****************************/
function animation() {
    y += dy
    x += dx
    circleX += cirlceDx

    ctx.clearRect(0,0,canvas.width,canvas.height)

    collision()
    drawRect()
    drawCircle()
    requestAnimationFrame(animation)
}

animation()

