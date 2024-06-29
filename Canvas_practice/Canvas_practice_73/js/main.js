const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500
let textStartGame = "Start the game"

ctx.save()
ctx.font = "40px Arial"
ctx.textAlign = "center"
ctx.shadowColor = "white"
ctx.shadowOffsetY = 5
ctx.shadowBlur = 10
ctx.fillText("ALIEN GAME", canvas.width / 2,150)

ctx.restore()
ctx.textAlign = "center"
ctx.font = "30px Roboto"
ctx.shadowColor = "green"
ctx.shadowOffsetY = 5
ctx.fillStyle = "white"
ctx.shadowBlur = 10
ctx.fillText(textStartGame, canvas.width / 2,canvas.height / 2)

// looking for cordinates of text and width and height 
let widthOfTextStartGame = ctx.measureText(textStartGame).width
let textMetrics = ctx.measureText(textStartGame)
let heightOfTextStartGame = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent

let startGameX = canvas.width / 2 - widthOfTextStartGame / 2
let startGameY = canvas.height / 2 - textMetrics.actualBoundingBoxAscent

//event listener and checking if i clicked inside of text start the game
canvas.addEventListener("click", function(event) {
  let x = event.offsetX
  let y = event.offsetY  
  
  if(x >= startGameX  && x <= startGameX + widthOfTextStartGame && y >= startGameY && y <= startGameY + heightOfTextStartGame) {
    ctx.clearRect(0,0,canvas.width,canvas.height)
  }

})



