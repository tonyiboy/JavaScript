const canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

// ctx.fillStyle = "red"
// ctx.globalAlpha = 0.5
// ctx.fillRect(0,0,50,50)
// ctx.globalAlpha = 0.5
// ctx.fillRect(25,25,50,50)

// ctx.globalAlpha = 1.0
// ctx.fillRect(100,30,100,100)

let data = [30,50,100,150]

ctx.save()
ctx.fillStyle = "red"
for(let i = 0; i < data.length; i++ ) {
    ctx.translate(100,0)
    ctx.fillRect(0,0,50,data[i])
}
ctx.restore()

let data2 = [20,30,50,100]

ctx.fillStyle = "blue"
for(let i = 0; i < data2.length; i++) {
    ctx.globalAlpha = 0.3 * i + 0.2
    ctx.translate(110,0)
    ctx.fillRect(0,0,50,data2[i])
}










