// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
// const button = document.getElementById("button")

canvas.width = 600
canvas.height = 600

let x = 100
let y = 200
let r = 30

// Movement flags
let moveUp = false;
let moveDown = false;
let moveLeft = false;
let moveRight = false;

// function that draws circle
function draw(x,y,r) {
   
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = "red"
    ctx.fill()

}

// Event listener for keydown events
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp") moveUp = true;
    if (e.key === "ArrowDown") moveDown = true;
    if (e.key === "ArrowLeft") moveLeft = true;
    if (e.key === "ArrowRight") moveRight = true;
});

// Event listener for keyup events
document.addEventListener("keyup", function(e) {
    if (e.key === "ArrowUp") moveUp = false;
    if (e.key === "ArrowDown") moveDown = false;
    if (e.key === "ArrowLeft") moveLeft = false;
    if (e.key === "ArrowRight") moveRight = false;
});

function updatePosition() {
    dx = 0;
    dy = 0;

    if (moveUp) dy = -5;
    if (moveDown) dy = 5;
    if (moveLeft) dx = -5;
    if (moveRight) dx = 5;

    y += dy
    x += dx
}


// Function to handle collisions
function collision() {
    if (x + r > canvas.width) {
        x = canvas.width - r; // Adjust x to stay within canvas boundaries
    }
    if (x - r < 0) {
        x = r; // Adjust x to stay within canvas boundaries
    }
    if (y + r > canvas.height) {
        y = canvas.height - r; // Adjust y to stay within canvas boundaries
    }
    if (y - r < 0) {
        y = r; // Adjust y to stay within canvas boundaries
    }
}

//animation
function animation() {

    ctx.clearRect(0,0,canvas.width,canvas.height)

    updatePosition()
    collision()
    draw(x,y,r)

    requestAnimationFrame(animation)
}

animation()

