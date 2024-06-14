//canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500


// box 1 properties
let box1X = 50
let box1Y = 100
let box1W = 100
let box1H = 100
let dxOne = 2

//function that draws box 1
function drawRectOne() {
  ctx.fillStyle = "green"
  ctx.fillRect(box1X,box1Y, box1W, box1H)
}

//function that use cordinates to check if
//boxes are overlaping if yes they will change direction
function collision() {
  if(box1X + box1W > canvas.width || box1X < 0) {
     dxOne = -dxOne
  }

  if(box2X + box2W > canvas.width || box2X < 0) {
    dxTwo = -dxTwo
  }
} 

// box 2 properties

let box2X = 250
let box2Y = 100
let box2W = 100
let box2H = 100
let dxTwo = 2

//function that draws box 2
function drawRectTwo() {
  ctx.fillStyle = "red"
  ctx.fillRect(box2X,box2Y, box2W, box2H)
}

// animation time :)
function animation() {
  
  //change direction for box 1 and box 2
  box2X += dxTwo
  box1X += dxOne

  //checking collision for box 1
  if(box1X + box1W > box2X){
    dxOne = -dxOne
  }

  //checking collision for box 2
  if(box2X < box1X + box1W) {
    dxTwo = -dxTwo
  }

  //its clearing whole canvas and repainting
  ctx.clearRect(0,0,canvas.width, canvas.height)
  
  // calling functions to chekc collision and to draw again
  collision()
  drawRectOne()
  drawRectTwo()
  requestAnimationFrame(animation)
}

animation()

















