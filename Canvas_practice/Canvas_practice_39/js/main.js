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

// new stage draw
function newStage() {
  ctx.clearRect(0,0,canvas.width, canvas.height)


  let particles = []
  let tick = 0
  
  function loop() {
      window.requestAnimationFrame(loop)
      createParticles()
      updateParticles()
      killParticles()
      drawParticles()
      ctx.textAlign = "center"
      ctx.fillText("WELCOME TO NEW STAGE",canvas.width / 2,100)
  }
  
  loop()
  
  // createParticles function will check if there are less than 100 particles.If so 
  // it will create a new particles.
  function createParticles() {
      if(tick % 10 === 0) {
          if(particles.length < 100) {
              particles.push({
                  x: Math.random() * canvas.width, // between 0 and canvas
                  y: 0,
                  speed: 2 + Math.random() * 3, // between 2 and 5
                  radius: 5 + Math.random() * 5, // between 5 and 10
                  color: "white",
              })
          }
      }
  }
  
  // updateParticles function its simply updates y coordinate of each particles
  // by adding it's speed.This will move the snow flake down the screen
  function updateParticles() {
      for(let i in particles) {
          let part = particles[i]
          part.y += part.speed
      }
  }
  
  // killParticles it checks if the particle is below the bottom of the canvas
  // Since this app will show continuous snow instead we will recycle the particle
  // by setting the y back to 0.
  function killParticles() {
      for(let i in particles){
          let part = particles[i]
          if(part.y > canvas.height) {
              part.y = 0
          }
      }
  }
  
  // Here we draw the particles.Clear background then draw circle with the
  // current particle's x,y,radius,color
  
  function drawParticles() {
      ctx.fillStyle = "black"
      ctx.fillRect(0,0,canvas.width,canvas.height)
      for(let i in particles) {
          let part = particles[i]
          ctx.beginPath()
          ctx.arc(part.x, part.y, part.radius, 0 , Math.PI * 2)
          ctx.closePath()
          ctx.fillStyle = part.color
          ctx.fill()
      }
  
  }

}

//event listener and checking if i clicked inside of text start the game
canvas.addEventListener("click", function(event) {
  let x = event.offsetX
  let y = event.offsetY  
  
  if(x >= startGameX  && x <= startGameX + widthOfTextStartGame && y >= startGameY && y <= startGameY + heightOfTextStartGame) {
     newStage()
  }

})



