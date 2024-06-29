// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
// const button = document.getElementById("button")

canvas.width = 500
canvas.height = 500

// functon that drows ground
function ground() {
    ctx.beginPath()
    ctx.moveTo(0,400)
    ctx.lineTo(canvas.width,400)
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.closePath()
}

// ball properteis
let x = 250
let y = 170
let r = 30

let dy = 1
let gravity = 1
let friction = 0.4

// function that draw circle
function circle() {
    ctx.beginPath()
    ctx.arc(x,y,r,0,Math.PI * 2)
    ctx.fillStyle = "red"
    ctx.fill()
}

function update() {

    if(y + r > 400) {
        y = 400 -r
       dy = -dy * friction
    }else dy += gravity
    console.log(dy);
    y += dy
}

//animation
function animation() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    update()
    ground()
    circle()
    

    requestAnimationFrame(animation)
}

animation()



