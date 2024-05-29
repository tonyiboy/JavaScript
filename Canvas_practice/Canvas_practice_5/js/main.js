const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

ctx.lineWidth = 2
ctx.strokeStyle = "red"
ctx.strokeRect(10, 30, 100, 100)

ctx.strokeStyle = "black"
ctx.lineWidth = 5
ctx.strokeRect(120, 30, 100, 100)

ctx.lineWidth = 8
ctx.strokeStyle = "blue"
ctx.strokeRect(240, 30, 100, 100)

ctx.lineWidth = 1
ctx.strokeStyle = "green"
ctx.strokeRect(360, 30, 100, 100)

ctx.lineWidth = 12
ctx.strokeStyle = "white"
ctx.strokeRect(480, 30, 100, 100)


