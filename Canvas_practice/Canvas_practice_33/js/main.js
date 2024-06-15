const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

 canvas.width = 500
 canvas.height = 500

for(let i = 0; i < 3; i++) {
  ctx.beginPath()
  let x = Math.random() * 500
  let y = Math.random() * 500
  
  ctx.arc(x,y,30,0,Math.PI *2)
  ctx.strokeStyle = "green"
  ctx.stroke()
}
