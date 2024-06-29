// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const button = document.getElementById("button")

canvas.width = 500
canvas.height = 500

//properties circle
class Circle {
    constructor(x,y,r,color,dx,dy) {
        this.x = x
        this.y = y
        this.r = r
        this.color = color
        this.dx = dx
        this.dy = dy  
    }

    drawCircle() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
    }
}

let circleOne = new Circle(100,100,30,"red",2,3)

/**********************************/
/************COLLISION*************/
/**********************************/

function collision() {
    if(circleOne.x + circleOne.r > canvas.width || circleOne.x < circleOne.r) {
        circleOne.dx = -circleOne.dx
    }
}


let clearing = true

/**********************************/
/************ANIMATION*************/
/**********************************/

function animation() {

    if(clearing) {
         //adding movement
    circleOne.x += circleOne.dx

    //clearing canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //calling functions
    circleOne.drawCircle()
    collision()

    requestAnimationFrame(animation)
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

}

animation()

//button that will clear canvas
button.addEventListener("click", () => {
    clearing = false
})