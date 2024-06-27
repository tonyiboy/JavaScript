const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

// Drawing line for player
function drawLine() {
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.moveTo(0, 400)
    ctx.lineTo(canvas.width, 400)
    ctx.stroke()
    ctx.closePath()
}

/*******BOX*****/
/***************/
/***************/
class Rect {
    constructor(x, y, w, h, dx, dy, color) {
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
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    // Box movement
    moveBox() {
        this.x += this.dx
        this.y += this.dy
    }

    collisionWalls() {
        if (this.x + this.w > canvas.width || this.x < 0) {
            this.dx = -this.dx
        }

        if (this.y + this.h > canvas.height || this.y < 0) {  // Corrected this line
            this.dy = -this.dy
        }
    }

    update() {
        this.draw()
        this.moveBox()
        this.collisionWalls()
    }
}

let rectOne = new Rect(100, 100, 30, 30, 2, 3, "red")
let rectTwo = new Rect(250, 100, 30, 30, 4, 1, "green")
let rectThree = new Rect(300, 50, 30, 30, 1, 1, "purple")

/*****************/
/****PLAYER*******/
/*****************/

class Player {
    constructor(x, y, w, h, color) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = color
        this.dx = 0
        this.dy = 0

        // Event listeners for keyboard input
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
        document.addEventListener('keyup', this.keyUpHandler.bind(this))
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    update() {
        this.x += this.dx
        this.y += this.dy
        this.draw()
    }

    keyDownHandler(e) {
        if (e.key === 'ArrowRight') {
            this.dx = 2
        } else if (e.key === 'ArrowLeft') {
            this.dx = -2
        } else if (e.key === 'ArrowUp') {
            this.dy = -2
        } else if (e.key === 'ArrowDown') {
            this.dy = 2
        }
    }

    keyUpHandler(e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            this.dx = 0
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            this.dy = 0
        }
    }
}

let myPlayer = new Player(100, 350, 50, 50, "blue")

/*****************/
/****ANIMATION****/
/*****************/

function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawLine()
    rectOne.update()
    rectTwo.update()
    rectThree.update()

    myPlayer.update()

    requestAnimationFrame(animation)
}

animation()
