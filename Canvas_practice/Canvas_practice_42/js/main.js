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

//array that holds rect object
let myRect = [{x,y,width,height}]

// function that draws rect
function drawRect() {
    ctx.fillStyle = "red"
    ctx.fillRect(x,y,width,height)
}


/*****************************/
/**********CIRCLE**********/
/*****************************/

// circle properties
let circleX = 230
let circleY = 300
let radius = 30
let fullCircle = Math.PI * 2
let dx = 2
let dy = 2

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
   
    if(circleY + radius > canvas.height ||circleY -radius < 0) {
        dy = -dy

    }

    if (
        circleY + radius > y && circleY - radius < y + height) {
        dy = -dy;
        collisionDetected = true
    }

}
// Flag to track collision
let collisionDetected = false;

/*****************************/
/**********ANIMATION**********/
/*****************************/
function animation() {
    if(!collisionDetected) {
        
        circleY += dy

        ctx.clearRect(0,0,canvas.width,canvas.height)
    
        collision()
        drawCircle()
        drawRect()
        requestAnimationFrame(animation)

    }else  {
        ctx.clearRect(0,0,canvas.width,canvas.height)
    }
}

animation()

