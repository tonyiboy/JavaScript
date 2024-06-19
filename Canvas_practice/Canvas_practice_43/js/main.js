// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

/********************************************/
/*************rectangle properties**************/
/********************************************/
class Rectangle {
    constructor(x,y,width,height,color,dx,dy) { 
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.dx = dx
        this.dy = dy

    }

    drawRectangle() {
        ctx.beginPath()
        ctx.fillStyle = this.color 
        ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.closePath
    }

}

//rectangle number 1
let rectangleOne = new Rectangle(100,200,100,100,"blue",2,2)
let rectangleTwo = new Rectangle(300,50,100,100,"green",2,2)


/********************************************/
/*************circle properties**************/
/********************************************/

class Circle {
    constructor(x,y,radius,color) { 
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color

    }

    drawCircle() {
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.stroke()
        ctx.closePath()        
    }
}

//circle number 1
let circleOne = new Circle(150,100,30,"yellow")
let circleTwo = new Circle(350,400,30,"purple")
// let circleTwo

/**************************/
/******COLLISION***********/
/**************************/
function collision() {
    if(rectangleOne.y + rectangleOne.height > canvas.height || rectangleOne.y < 0) {
        rectangleOne.dy = -rectangleOne.dy
    }

    if(rectangleOne.y < circleOne.y + circleOne.radius){
        rectangleOne.dy = -rectangleOne.dy
    }

    if(rectangleTwo.y + rectangleTwo.height > circleTwo.y - circleTwo.radius || rectangleTwo.y < 0) {
        rectangleTwo.dy = -rectangleTwo.dy
        detectCollision = true
    }

}

/**************************/
/******ANIMATION***********/
/**************************/
let detectCollision = false

function animation() {
    if(!detectCollision){
        rectangleOne.y += rectangleOne.dy
        rectangleTwo.y += rectangleTwo.dy
        ctx.clearRect(0,0,canvas.width,canvas.height)

        collision()
        rectangleOne.drawRectangle()
        rectangleTwo.drawRectangle()
        circleOne.drawCircle()
        circleTwo.drawCircle()
        requestAnimationFrame(animation) 
    }else {
        ctx.clearRect(0,0,canvas.width,canvas.height)
    }
}

animation()

//mouse cordinates

canvas.addEventListener("click", function(event) {
    let x = event.offsetX
    let y = event.offsetY

    console.log("x cordinates: " + x + " y cordinates: " + y) 
})
