// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

//setting canvas properties
canvas.width = 600
canvas.height = 600

let x = 100
let y = 100
let width = 50
let height = 50

let dx = 2
let dy = 2

function animation() {
    ctx.clearRect(0,0,canvas.width,canvas.height)

    ctx.fillRect(x,y,width,height)
    x += dx
    y += dy

    requestAnimationFrame(animation)
}

animation()




