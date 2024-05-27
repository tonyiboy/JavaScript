const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

// Path

ctx.beginPath()
ctx.moveTo(50,50)
ctx.lineTo(150,50)
ctx.lineTo(100, 150)
ctx.closePath()
ctx.stroke()

ctx.beginPath()
ctx.moveTo(250,50)
ctx.lineTo(200,150)
ctx.lineTo(300,150)
ctx.closePath()
ctx.stroke()

ctx.beginPath()
ctx.moveTo(400,50)
ctx.lineTo(550,50)
ctx.lineTo(550,150)
ctx.lineTo(400,150)
ctx.lineTo(400,50)
ctx.stroke()




