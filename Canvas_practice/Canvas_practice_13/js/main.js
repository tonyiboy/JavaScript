const canvas = document.querySelector("canvas")

let ctx = canvas.getContext("2d")

// this rectangle is drawn with the fillRect() function
// there is no objects to attach event handlers to.Its draws pixels to the screen
// since there is no objects for things we draw in canvas we cant use CSS to style it
// canvas is lower level and it gives us therefore more control
// ctx.fillStyle ="red"
// ctx.fillRect(200, 100, 400,300)

ctx.fillStyle = "red"
ctx.beginPath()
ctx.moveTo(30,30)
ctx.lineTo(150,30)
ctx.lineTo(150,200)
ctx.lineTo(30,200)
ctx.closePath()

ctx.strokeStyle = "green"
ctx.fill()
ctx.lineWidth = 7
ctx.stroke()
// second

ctx.strokeStyle = "blue"
ctx.strokeRect(300,30,100,100)

// third

ctx.fillStyle = "purple"
ctx.fillRect(450,30,100,100)



