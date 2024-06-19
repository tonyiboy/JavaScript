// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const button = document.getElementById("button")

canvas.width = 500
canvas.height = 500


// function that draws circle
function draw(x,y) {
    ctx.beginPath()
    ctx.arc(x,y,30,0,Math.PI * 2)
    ctx.stroke()
}

//will create circle on my mouse cordinates
canvas.addEventListener("click", (event) =>{
    let x = event.offsetX
    let y = event.offsetY

    draw(x,y)
})

//button that will clear canvas
button.addEventListener("click", () => {
    ctx.clearRect(0,0,canvas.width,canvas.height)
})


