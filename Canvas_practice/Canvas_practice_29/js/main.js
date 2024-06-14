const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500


// box 1
let box1X = 50
let box1Y = 100
let box1W = 100
let box1H = 100
let dx = 2

function drawRectOne() {
  ctx.fillStyle = "green"
  ctx.fillRect(box1X,box1Y, box1W, box1H)
}

function collision() {
  if(box1X + box1W > canvas.width || box1X < 0) {
    dx = -dx
  }
} 

function animation() {
  box1X += dx
  ctx.clearRect(0,0,canvas.width, canvas.height)
  collision()
  drawRectOne()
  requestAnimationFrame(animation)
}

animation()










