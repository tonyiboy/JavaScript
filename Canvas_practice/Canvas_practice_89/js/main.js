const canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")
let myData = [16, 68, 20, 30, 54]

ctx.fillStyle = "gray"
ctx.fillRect(0,0,500,500)

// drawing

ctx.fillStyle = "blue"
for(let i = 0; i < myData.length; i++) {
    let dp = myData[i]
    ctx.fillRect(40 + i * 100, 460 - dp * 5, 50, dp * 5)
}

// drawing axis lines

ctx.fillStyle = "black"
ctx.clientWidth = 2
ctx.beginPath()
ctx.moveTo(30,10)
ctx.lineTo(30,460)
ctx.lineTo(490,460)
ctx.stroke()

// drawing text and vertical lines

ctx.fillStyle = "black"
for(let i = 0; i < 6; i++) {
    ctx.fillStyle = "white"
    ctx.fillText((5 - i) * 20 + "", 4, i * 80 + 63)
    ctx.beginPath()
    ctx.moveTo(23, i * 80 + 60)
    ctx.lineTo(30, i * 80 + 60)
    ctx.stroke()
}

let labels = ["JAN", "FEB", "MAR", "APR", "MAY"]
// drawing horizontal text
for(let i = 0; i < 5; i++) {
    ctx.fillText(labels[i], 50 + i * 100, 475)
}








