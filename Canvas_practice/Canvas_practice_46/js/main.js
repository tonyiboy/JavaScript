// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
// const button = document.getElementById("button")

canvas.width = 600
canvas.height = 600

let x = 100
let y = 200
let r = 30
let dx = 0
let dy = 0

function draw(x,y,r) {
   
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = "red"
    ctx.fill()

}

canvas.addEventListener("keydown", function(e) {
   
    if(e.key === "ArrowUp") dy = -5
    if(e.key === "ArrowDown") dy = 5
    if(e.key === "ArrowLeft") dx = -5
    if(e.key === "ArrowRight") dx = 5

})

canvas.addEventListener("keyup", function(e) {
   
    if(e.key === "ArrowUp") dy = 0
    if(e.key === "ArrowDown") dy = 0
    if(e.key === "ArrowLeft") dx = 0
    if(e.key === "ArrowRight") dx = 0

})

function animation() {
    y += dy
    x += dx
    requestAnimationFrame(animation)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    draw(x,y,r)
}

animation()

