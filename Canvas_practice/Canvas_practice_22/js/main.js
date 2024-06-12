const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

function makeRectangle(x,y,w,h,color) {
  ctx.fillStyle = color
  ctx.fillRect(x,y,w,h)
}

makeRectangle(30,30,100,100,"red")
makeRectangle(150,30,100,100,"green")
makeRectangle(260,30,100,100,"purple")
makeRectangle(380,30,100,100,"white")




