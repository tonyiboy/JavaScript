const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


// circle
ctx.beginPath()
let canvasX = canvas.width / 2
let canvasY = canvas.height / 2
ctx.arc(canvasX, canvasY, 200,0, Math.PI * 2)


// mouth
ctx.moveTo(canvasX + 100, canvasY)
ctx.arc(canvasX, canvasY, 100, 0, Math.PI, false)

// left eye

ctx.moveTo(canvasX - 60, canvasY - 80)
ctx.arc(canvasX - 80, canvasY - 80, 20, 0, Math.PI * 2)

// right eye
ctx.moveTo(canvasX + 100,canvasY -80)
ctx.arc(canvasX + 80, canvasY -80,20, 0, Math.PI * 2)

ctx.stroke()



