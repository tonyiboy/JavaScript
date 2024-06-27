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
    constructor(x,y,w,h,dx,dy,color) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.dx = dx
        this.dy = dy
        this.color = color
    }
    
    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.w,this.h)
    }

    // box movement
    moveBox() {
    this.x += this.dx
    this.y += this.dy
    }

    collisionWalls() {
        if(this.x + this.w > canvas.width || this.x < 0) {
            this.dx = -this.dx
        }

        if(this.y + this.w > canvas.height || this.y < 0) {
            this.dy = -this.dy
        }
    }

    update() {
        this.draw()
        this.moveBox()
        this.collisionWalls()
    }
}

let rectOne = new Rect(100,100,50,50,2,3,"red")
let rectTwo = new Rect(250,100,50,50,4,1,"green")
let rectThree = new Rect(300,50,50,50,1,1,"purple")

/*****************/
/****PLAYER*******/
/*****************/

/*****************/
/****ANIMATION****/
/*****************/

function animation() {
    ctx.clearRect(0,0,canvas.width,canvas.height)

    drawLine()
    rectOne.update()
    rectTwo.update()
    rectThree.update()

    requestAnimationFrame(animation)
}

animation()

