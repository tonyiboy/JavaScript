const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

//ball properties
let x = canvas.width / 2
let y = canvas.height / 2
let radius = 10
let dx = 2
let dy = 3

function draw() {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = "red"
    ctx.fill()
    ctx.closePath()  
}

function update() {
    x += dx
    y += dy
    
    if (x > canvas.width - radius || x < radius) {
      dx = -dx // Reverse horizontal direction
  }

  if (y > canvas.height - radius || y < radius) {
      dy = -dy // Reverse vertical direction
  }
  
}

function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    draw()
    update()
    requestAnimationFrame(animation)
}

animation()







