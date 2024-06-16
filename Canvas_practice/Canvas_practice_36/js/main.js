const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500
const radius = 20

canvas.addEventListener("mousemove", function(event) {

  
  let x = event.offsetX 
  let y = event.offsetY 
  
  
  if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    return
  }
 
  if(x > canvas.width -radius) x = canvas.width - 20
  if(x < radius) x = radius
  if(y < radius) y = radius
  if(y > canvas.height -radius) y = canvas.height -radius

  
 

  ctx.beginPath()
  ctx.arc(x,y, radius, 0, Math.PI * 2)
  ctx.stroke()
  ctx.closePath()
})
