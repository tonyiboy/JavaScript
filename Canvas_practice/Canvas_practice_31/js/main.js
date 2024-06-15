const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

/**********************************************/
/*****************PART 1***********************/
/**********************************************/

// box1 properties

let boxX = 30
let boxY = 200
let boxWidth = 100
let boxHeight = 100
let box1Move = 2

// function that draws box 1
function drawBox1() {
  ctx.fillStyle = "red"
  ctx.fillRect(boxX, boxY, boxWidth, boxHeight)
}

// box2 properties

let box2X = 30
let box2Y = 30
let box2Width = 100
let box2Height = 100
let box2Move = 2

// function that draws box 2
function drawBox2() {
  ctx.fillStyle = "green"
  ctx.fillRect(box2X, box2Y, box2Width, box2Height)
}

/**********************************************/
/*****************PART 2***********************/
/**********************************************/

// box3 properties
let box3X = 200
let box3Y = 200
let box3Width = 100
let box3Height = 100

// function that draws box 3
function drawBox3() {
  ctx.fillStyle = "blue"
  ctx.fillRect(box3X, box3Y, box3Width, box3Height)
}

// box4 properties
let box4X = 200
let box4Y = 30
let box4Width = 100
let box4Height = 100
let box4Move = 2

// function that draws box 4
function drawBox4() {
  ctx.fillStyle = "purple"
  ctx.fillRect(box4X, box4Y, box4Width, box4Height)
}

/**********************************************/
/*****************PART 3***********************/
/**********************************************/
// box5 properties
let box5X = 350
let box5Y = 200
let box5Width = 100
let box5Height = 100
let box5Move = 2

// function that draws box 5
function drawBox5() {
  ctx.fillStyle = "blue"
  ctx.fillRect(box5X, box5Y, box5Width, box5Height)
}

// box6 properties
let box6X = 350
let box6Y = 30
let box6Width = 100
let box6Height = 100
let box6Move = 2

// function that draws box 6
function drawBox6() {
  ctx.fillStyle = "purple"
  ctx.fillRect(box6X, box6Y, box6Width, box6Height)
}

/**********************************************/
/*****************COLLISION********************/
/**********************************************/
function collision() {
  if(boxY + boxHeight >= canvas.height || boxY <= 0) {
    box1Move = -box1Move
  }

  if(box2Y + box2Height >= canvas.height || box2Y <= 0) {
    box2Move = -box2Move
  }

  if(box4Y + box4Height >= box3Y || box4Y <= 0) {
    box4Move = -box4Move
  }

   if(box5Y + box5Height >= canvas.height || box5Y < box6Y + box6Height) {
     box5Move = -box5Move
 }

  if(box6Y + box6Height >= box5Y || box6Y < 0) {
    box6Move = -box6Move
  }

}

/**********************************************/
/*****************ANIMATION********************/
/**********************************************/
function animation() {
    
  // moves in Y direction
    boxY += box1Move 
    box2Y += box2Move
    box4Y += box4Move
    box5Y += box5Move
    box6Y += box6Move

    // clear canvas to paint again
    ctx.clearRect(0, 0, canvas.width, canvas.height) 

    collision()
    drawBox1()
    drawBox2()
    drawBox3()
    drawBox4()
    drawBox5()
    drawBox6()
    requestAnimationFrame(animation)
}

animation()
