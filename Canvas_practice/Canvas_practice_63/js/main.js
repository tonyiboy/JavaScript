// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
// const button = document.getElementById("button")

canvas.width = 500
canvas.height = 500

let y = 100
let x = 100
let r = 30


let dx = 4
let dy = 2

function animation () {

    x += dx
    y += dy

    ctx.clearRect(0,0,canvas.width,canvas.height)

    ctx.arc(x,y,r,0,Math.PI * 2)
    ctx.stroke()
    // collision()

    requestAnimationFrame(animation)
}

animation()