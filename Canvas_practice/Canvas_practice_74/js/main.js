const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

//ball properties
let x = canvas.width / 2
let y = canvas.height / 2
let radius = 10
dy = 2

function draw() {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = "red"
    ctx.fill()
    ctx.closePath()  
}

function update() {
    y += dy
    if(y > canvas.height - radius){
      dy = -2
    }

    if(y < radius) {
      dy = 2
    }
  
}

function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    draw()
    update()
    requestAnimationFrame(animation)
}

animation()







