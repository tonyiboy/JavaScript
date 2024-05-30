const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

ctx.beginPath()

ctx.moveTo(200, 50)
ctx.lineTo(150, 200)
ctx.lineTo(250, 200)
ctx.closePath()

ctx.stroke()