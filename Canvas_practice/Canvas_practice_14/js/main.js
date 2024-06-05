const canvas = document.querySelector("canvas")

let ctx = canvas.getContext("2d")

ctx.beginPath()

ctx.fillStyle = "red"
ctx.moveTo(10,30)
ctx.bezierCurveTo(50,90,159,-30,200,30)
ctx.lineTo(200,90)
ctx.lineTo(10,90)
ctx.closePath()
ctx.fill()
ctx.lineWidth = 5
ctx.strokeStyle = "green"

ctx.stroke()

ctx.fillStyle = "black"
ctx.font = "30px Arial"
ctx.fillText("I am reall artist :)", 250, 70)






