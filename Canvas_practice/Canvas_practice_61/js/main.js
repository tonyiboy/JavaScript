// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
// const button = document.getElementById("button")

canvas.width = 500
canvas.height = 500

let y = 100
let x = 100
let w = 50
let h = 50

let dx = 2
let dy = 2



function animation () {

    x += dx
    y += dy

    ctx.clearRect(0,0,canvas.width,canvas.height)

    ctx.fillRect(x,y,w,h)

    requestAnimationFrame(animation)
}

animation()