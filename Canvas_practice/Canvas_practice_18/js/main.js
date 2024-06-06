const canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

ctx.fillStyle = "red"
ctx.fillRect(50,0,400,100)

//creat triangle path
ctx.beginPath()
ctx.moveTo(200,50)
ctx.lineTo(250,150)
ctx.lineTo(150,150)
ctx.closePath()
ctx.lineWidth = 10
ctx.stroke()

ctx.clip()
ctx.fillStyle = "yellow"
ctx.fillRect(0,0,400,100)









