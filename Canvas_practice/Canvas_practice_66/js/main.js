// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

//drawing line for player
function drawLine() {
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.moveTo(0,400)
    ctx.lineTo(canvas.width,400)
    ctx.stroke()
    ctx.closePath()
}

/*******BOX*****/
/***************/
/***************/

//properties box
let boxX = 20
let boxY = 350
let boxW = 50
let boxH = 50

let boxDx = 2

// creating a box
function drawBox() {
    ctx.fillStyle = "black"
    ctx.fillRect(boxX,boxY,boxW,boxH)
}

//box movement
function boxMovement() {
    boxX += boxDx
}

//collision box detection
function boxCollision() {
    if(boxX + boxW > canvas.width) {
        boxX = 0
    }
}

/*****************/
/****PLAYER*******/
/*****************/

let playerX = 100
let playerY = 350
let playerW = 50
let playerH = 50

let playerJump = -10
let gravity = 0.5
let playerDy = 0
let playerDx = 2

let playerRotation = 0

// draw player
function drawPlayer() {
    ctx.save()
    ctx.translate(playerX + playerW / 2, playerY + playerH / 2); // Translate to the center of the player rectangle
    ctx.rotate(playerRotation * Math.PI / 180); // Rotate by the current rotation angle (converted to radians)
    ctx.fillStyle = "red";
    ctx.fillRect(-playerW / 2, -playerH / 2, playerW, playerH);
    ctx.restore()
}

// properties keyboard
let left = false
let right = false
let jump = false


//movement
canvas.addEventListener("keydown", function(e) {
    if(e.key === "ArrowLeft") left = true
    if(e.key === "ArrowRight") right = true
    if(e.key === " " && !jump) {
        playerDy = playerJump
        jump = true
             
    }      
})

canvas.addEventListener("keyup", function(e) {
    if(e.key === "ArrowLeft") left = false
    if(e.key === "ArrowRight") right = false 
    
})

// player movement
function playerMove() {
    if(left) playerX -= playerDx
    if(right) playerX += playerDx

    if(jump) {
        playerY += playerDy
        playerDy += gravity   
        playerRotation += 10
    }

    if(playerY >= 350) {
        playerY = 350
        playerDy = 0
        jump = false
        playerRotation = 0
    }
 
}

function playerCollision() {
    if(playerX + playerW > canvas.width) {
        playerX = canvas.width - playerW
    }

    if(playerX < 0) {
        playerX = 0
    }

}

// Player and box collision detection
function collisionBoxes() {
    // Calculate player's bounding box
    let playerBounds = {
        left: playerX,
        right: playerX + playerW,
        top: playerY,
        bottom: playerY + playerH
    };

    // Calculate box's bounding box
    let boxBounds = {
        left: boxX,
        right: boxX + boxW,
        top: boxY,
        bottom: boxY + boxH
    };

    // Check for collision between player and box
    if (playerBounds.right > boxBounds.left &&
        playerBounds.left < boxBounds.right &&
        playerBounds.bottom > boxBounds.top &&
        playerBounds.top < boxBounds.bottom) {
        // Handle collision behavior here
        // For example, change box color or reset its position
        ctx.fillStyle = "blue";
        ctx.fillRect(boxX, boxY, boxW, boxH);

        // Reset box position
        boxX = 20;
        boxY = 350;
        boxDx = 2;
        
    } else {
        // No collision, draw box normally
        ctx.fillStyle = "black";
        ctx.fillRect(boxX, boxY, boxW, boxH);
    }
}

//animation
function animation() {

    ctx.clearRect(0,0,canvas.width,canvas.height)

    drawLine()
    drawBox()
    playerMove()
    boxCollision()
    
    playerCollision()
    
    boxMovement()
    drawPlayer()
    collisionBoxes()
   
    requestAnimationFrame(animation)
}

animation()