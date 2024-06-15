//canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

//canvas width and height properties
canvas.width = 500
canvas.height = 500

/*************************************************/
/*********************PART 1**********************/
/*************************************************/

//box 1 properties
let box1X = 30
let box1Y = 30
let box1Width = 100
let box1Height = 100
let moveBoxOne = 2

//function that draws box 1
function drawBox1() {
  ctx.fillStyle = "green"
  ctx.fillRect(box1X, box1Y, box1Width, box1Height)
}

// box 2 properties
let box2X = 200
let box2Y = 30
let box2Width = 100
let box2Height = 100
let moveBoxTwo = 2

//function that draws box 2
function drawBox2() {
  ctx.fillStyle = "red"
  ctx.fillRect(box2X, box2Y, box2Width, box2Height)
}


/*************************************************/
/********************COLLISION********************/
/*************************************************/

//function that checks collision
function collision(x,w,move) {

  if(x + w >= canvas.width || x <= 0) {
    return -move // Reverse direction by returning negative movement value
  }
  
  
  return move // No collision, continue moving in the same direction
}

//function that checks collision beetween boxes
function collisionBoxes() {
    if(box3X + box3Width >= box4X || box3X <= 0){
      moveBoxThree = -moveBoxThree
    }
}

//function that checks collision beetween boxes and walls
function collisionBoxesAndWalls() {
  if(box5X + box5Width >= box6X || box5X <= 0){
     moveBoxFive = -moveBoxFive
   }

   if(box6X + box6Width > canvas.width || box6X <= box5X + box5Width ){
    moveBoxSix = -moveBoxSix
  }

}

/*************************************************/
/*********************PART 2**********************/
/*************************************************/

//box 3 properties
let box3X = 30
let box3Y = 220
let box3Width = 100
let box3Height = 100
let moveBoxThree = 2

//function that draws box 3
function drawBox3() {
  ctx.fillStyle = "blue"
  ctx.fillRect(box3X, box3Y, box3Width, box3Height)
}

//box 4 properties
let box4X = 200
let box4Y = 220
let box4Width = 100
let box4Height = 100
let moveBoxFour = 2

//function that draws box 4
function drawBox4() {
  ctx.fillStyle = "purple"
  ctx.fillRect(box4X, box4Y, box4Width, box4Height)
}

/*************************************************/
/*********************PART 3**********************/
/*************************************************/
//box 5 properties
let box5X = 30
let box5Y = 370
let box5Width = 100
let box5Height = 100
let moveBoxFive = 2

//function that draws box 5
function drawBox5() {
  ctx.fillStyle = "white"
  ctx.fillRect(box5X, box5Y, box5Width, box5Height)
}

//box 6 properties
let box6X = 200
let box6Y = 370
let box6Width = 100
let box6Height = 100
let moveBoxSix = 2

//function that draws box 6
function drawBox6() {
  ctx.fillStyle = "black"
  ctx.fillRect(box6X, box6Y, box6Width, box6Height)
}


/*************************************************/
/********************ANIMATION********************/
/*************************************************/

function animation() {

  //moving boxes on X by adding on each painting value 2 so X + 2
  box1X += moveBoxOne
  box2X += moveBoxTwo
  box3X += moveBoxThree
  box5X += moveBoxFive
  box6X += moveBoxSix

  //on each animation clearing previous painting
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  //calling functions
  drawBox1()
  drawBox2()
  drawBox3()
  drawBox4()
  drawBox5()
  drawBox6()
  moveBoxOne = collision(box1X,box1Width,moveBoxOne)
  moveBoxTwo = collision(box2X,box2Width,moveBoxTwo)
  collisionBoxes()
  collisionBoxesAndWalls()
  requestAnimationFrame(animation)
  drawBox3()
}

animation()



