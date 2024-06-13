const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

// ball properties
let x = canvas.width / 2
let y = canvas.height / 2
let dx = 2
const ballRadius = 10

function drawBall() {
  ctx.beginPath()
  ctx.arc(x, y, ballRadius,0,Math.PI * 2)
  ctx.fillStyle = "red"
  ctx.fill()
  ctx.closePath()
}

function update() {
    x += dx
    console.log(x);

    if(x > canvas.width -ballRadius) {
      dx =  - 2
    }

    if(x < ballRadius )
      dx = 2
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawBall(); // Draw the ball
    update(); // Update ball position

    requestAnimationFrame(animate); // Loop the animation
}

animate()






