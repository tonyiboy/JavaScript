const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

function draw(x,h,width,height) {
  ctx.beginPath()
  ctx.moveTo(x,h)
  ctx.lineTo(width,height) 
  ctx.lineTo(width,height + 50) 
  ctx.closePath()
  ctx.stroke()
}

draw(30,30,130,50)






