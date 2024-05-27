const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

ctx.fillStyle = "red"
ctx.fillRect(20, 20, 100, 100)

ctx.fillStyle = "blue"
ctx.fillRect(150, 20, 100, 100)

ctx.lineWidth = 5
ctx.strokeStyle = "white"
ctx.strokeRect(280, 20, 100, 100)

ctx.font = "30px Arial"
ctx.fillText("Hello World", 400, 50)




