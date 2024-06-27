// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

//drawing line for player
function drawLine() {
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.moveTo(0,400)
    ctx.lineTo(canvas.width,400)
    ctx.stroke()
    ctx.closePath()
}

/*******BOX*****/
/***************/
/***************/
class Rect {
    constructor(x,y,w,h,color) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = color
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.w,this.h)
    }

}

let rectOne = new Rect(100,100,50,50,"red")


/*****************/
/****PLAYER*******/
/*****************/

function animation() {
    ctx.clearRect(0,0,canvas.width,canvas.height)

    drawLine()
    rectOne.draw()

    requestAnimationFrame(animation)
}

animation()

