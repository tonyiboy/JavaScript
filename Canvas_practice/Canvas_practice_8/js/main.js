const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

ctx.arc(50, 50, 30, 0, Math.PI * 2)
ctx.arc(550, 50, 30, 0, Math.PI * 2)
ctx.stroke()