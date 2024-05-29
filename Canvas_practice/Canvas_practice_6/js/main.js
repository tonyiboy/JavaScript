const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

ctx.fillStyle = "red"
ctx.fillRect(10, 30, 100, 100)

ctx.lineWidth = 5
ctx.strokeStyle = "red"
ctx.strokeRect(120, 30, 100, 100)

ctx.fillStyle = "green"
ctx.fillRect(230, 30, 100, 100)

ctx.strokeStyle = "green"
ctx.lineWidth = 10
ctx.strokeRect(350, 30, 100, 100)

ctx.font = "15px Arial"
ctx.fillText("hello my dear world", 460, 50)



