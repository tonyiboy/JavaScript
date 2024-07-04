// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

let x = 100
let y = 100
let w = 50
let h = 50

let dx = 2
let dy = 3

function draw() {
    ctx.fillRect(x,y,w,h)
}

function move() {
    x += dx
    y += dy
}

function collision() {
    if(x + w > canvas.width || x < 0){
        dx = -dx
    }

    if(y + h > canvas.height || y < 0){
        dy = -dy
    }

}

function animation() {
    
    ctx.clearRect(0,0,canvas.width,canvas.height)

    draw()
    move() 
    collision()

    requestAnimationFrame(animation)
}

animation()
