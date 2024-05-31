const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const image = document.querySelector("img")

const player = {
    w:50,
    h:70,
    x:20,
    y:200,
    speed: 5,
    dx: 0,
    dy: 0
}

function drawPlayer() {
    ctx.drawImage(image, player.x, player.y, player.w, player.h)
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function newPos() {
    player.x += player.dx
    player.y += player.dy

    detectWall()
}

function detectWall() {
    if(player.x < 0){
        player.x = 0
    }

    if(player.x + player.w > canvas.width){
        player.x = canvas.width . player.w
    }

    if(player.y < 0){
        player.y = 0
    }

    if(player.y + player.h > canvas.height){
        player.y = canvas.width - player.h
    }
}

function update() {
    clear()
    drawPlayer()
    newPos()

    requestAnimationFrame(update)
}

function moveUp() {
    player.dy = -player.speed
}

function moveDown() {
    player.dy = player.speed
}

function moveRight() {
    player.dx = player.speed
}

function moveLeft() {
    player.dx = -player.speed
}

function keyDown(e) {
    if(e.key === "ArrowRight"){
        moveRight()
    }else if(e.key === "ArrowLeft"){
        moveLeft()
    }else if(e.key === "ArrowUp"){
        moveUp()
    }else if(e.key === "ArrowDown"){
        moveDown()
    }
}

function keyUp(e) {
    if(e.key == "ArrowRight" || e.key == "ArrowLeft" || e.key == "ArrowUp" || e.key == "ArrowDown"){
        player.dx = 0
        player.dy = 0
    }
}

update()

document.addEventListener("keydown", keyDown)
document.addEventListener("keyup", keyUp)
