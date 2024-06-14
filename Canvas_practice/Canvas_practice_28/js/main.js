const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500


// box 1
let box1X = 50
let box1Y = 100
let box1W = 100
let box1H = 100

function drawRectOne() {
  ctx.fillStyle = "green"
  ctx.fillRect(box1X,box1Y, box1W, box1H)
}

drawRectOne()

//box 2

let box2X = 150
let box2Y = 100
let box2W = 100
let box2H = 100

function drawRectTwo() {
  ctx.fillStyle = "red"
  ctx.fillRect(box2X,box2Y, box2W, box2H)
}

drawRectTwo()

// checking collision

if(box1X + box1W >= box2X) {
  console.log("collision happend!!!")
}else {
  console.log("collision not happend!!!");
}








