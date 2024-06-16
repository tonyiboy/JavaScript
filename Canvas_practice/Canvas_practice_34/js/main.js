const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

//ball properties
let x = 100
let y = 100
let radius = 20
let dx = 2
let dy = 4
let num = 95

//function that draws ball
function drawBall() {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = "red"
    ctx.fill()
    ctx.closePath()


    ctx.fillStyle = "white"
    ctx.font = "30px Ariel"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(num , x, y)
    let size = ctx.measureText(num).width
    console.log(size);
}

//collision detection
function collision() {
  if(x + radius > canvas.width || x < radius) {
    dx = -dx
    num++
    adjustRadius()
  }

  if(y + radius > canvas.height || y < radius) {
    dy = -dy
    num++
    adjustRadius()
  }

}

// function to adjust radius based on text size
function adjustRadius() {
  ctx.font = "30px Arial";
  let size = ctx.measureText(num).width;
  if (size > radius * 2) {
      radius = size / 2 + 20 // Adding some padding
  }
  
  if (x + radius > canvas.width) x = canvas.width - radius;
  if (x - radius < 0) x = radius;
  if (y + radius > canvas.height) y = canvas.height - radius;
  if (y - radius < 0) y = radius;
}

//animation
function animation() {
  
  x += dx
  y += dy

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  drawBall()
  collision()

  requestAnimationFrame(animation)
}

animation()
