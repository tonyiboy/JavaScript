// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
// const button = document.getElementById("button")

canvas.width = 500
canvas.height = 500

let x = 100
let y = 100
let width = 50
let height = 50

let dx = 3
let dy = 4

function drawRectangle() {
    ctx.fillRect(x, y, width, height)
}

function movement() {
    x += dx
    y += dy
    
}

function collision(position,size,move) {
    if(position + size > canvas.width || position < 0) {
        return -move
    }

    return move

}

function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    movement()
    drawRectangle()
    dx = collision(x,width,dx)
    dy = collision(y,height,dy)

    requestAnimationFrame(animation)
}

animation()

