const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

class Circle {
  constructor(xPosition,yPosition,radius,color) {
    this.x = xPosition
    this.y = yPosition
    this.r = radius
    this.color = color
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x,this.y, this.r, 0, Math.PI* 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }

  changeColor(newColor) {
      this.color = newColor
      this.draw()
  }

  checkDistance(xmouse,ymouse){
      const distance = Math.sqrt((xmouse - this.x) * (xmouse - this.x) + (ymouse - this.y) * (ymouse - this.y))
      console.log(distance);
      if(distance < this.r){
        this.changeColor("blue")
      } else {
        this.changeColor("red")
      }
  }
}

let circle = new Circle(100,100,30,"red")
circle.draw()

canvas.addEventListener("click", (event) => {
  let rect = canvas.getBoundingClientRect()
  const x = event.offsetX 
  const y = event.offsetY 
  ctx.clearRect(0,0, canvas.width,canvas.height)
 circle.checkDistance(x,y)
})