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
rectangle1.draw()

//creating rectangle 2

//collision function
function collision() {
    if(rectangle1.x + rectangle1.width > canvas.width || rectangle1.x < 0) {
        rectangle1.dx = -rectangle1.dx
    }

    if(rectangle1.y + rectangle1.height > canvas.height || rectangle1.y < 0) {
        rectangle1.dy = -rectangle1.dy
    }
}

//animation
function animation() {
    ctx.clearRect(0,0,canvas.width,canvas.height)

    rectangle1.draw()
    rectangle1.movement()
    collision()

    requestAnimationFrame(animation)
}

animation()
