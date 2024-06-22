// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
// const button = document.getElementById("button")

canvas.width = 500
canvas.height = 500

class Rectangle {
    constructor(x,y,width,height,color,dx,dy) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.dx =dx
        this.dy = dy
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }

    movement() {
        this.x += this.dx
        this.y += this.dy
    }
}

//creating rectangle 1
let rectangle1 = new Rectangle(100,100,50,50,"red",3,2)


//creating rectangle 2
let rectangle2 = new Rectangle(200,300,50,50,"red",1,4)

//function collision detection with walls 
function collisionWalls() {
    if(rectangle1.x + rectangle1.width > canvas.width || rectangle1.x < 0) {
        rectangle1.dx = -rectangle1.dx
    }

    if(rectangle1.y + rectangle1.height > canvas.height || rectangle1.y < 0) {
        rectangle1.dy = -rectangle1.dy
    }

    if(rectangle2.x + rectangle2.width > canvas.width || rectangle2.x < 0) {
        rectangle2.dx = -rectangle2.dx
    }

    if(rectangle2.y + rectangle2.height > canvas.height || rectangle2.y < 0) {
        rectangle2.dy = -rectangle2.dy
    }
}

//function collision detection with rectangles
function collisionRectangles() {
    if(rectangle1.x + rectangle1.width > rectangle2.x && rectangle1.x < rectangle2.x + rectangle2.width &&
        rectangle1.y + rectangle1.height > rectangle2.y && rectangle1.y < rectangle2.y + rectangle2.height
    ) {
        rectangle1.dx = -rectangle1.dx
        rectangle1.dy = -rectangle1.dy
        rectangle2.dx = -rectangle2.dx
        rectangle2.dy = -rectangle2.dy
    }

   
}

//animation
function animation() {
    ctx.clearRect(0,0,canvas.width,canvas.height)

    rectangle1.draw()
    rectangle2.draw()
    rectangle1.movement()
    rectangle2.movement()
    collisionWalls()
    collisionRectangles()
    

    requestAnimationFrame(animation)
}

animation()
