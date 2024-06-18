// canvas properties
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

//array to store enemies
let enemies = []

// function that creates enemies
function createEnemies() {

    const enemyWidth = 40
    const enemyHeight = 20
    const enemyGap = 40
    
    for(let i = 0; i < 6; i++){
        let x = 30 + i * (enemyWidth + enemyGap)
        let y = 30
        enemies.push({x,y,width: enemyWidth,height:enemyHeight})       
    }
}

createEnemies()

// function that draws enemies
function drawsEnemies() {
    ctx.fillStyle = "blue"
    enemies.forEach(enemy => {
        ctx.fillStyle = "blue"
        ctx.fillRect(enemy.x,enemy.y,enemy.width,enemy.height)
    })
}

// ball properties
let x = 300
let y = 300
let radius = 20
let dx = 2
let dy = 4

// function for collision detection
function collision() {
    if(x + radius > canvas.width || x < radius) {
        dx = -dx
    }

    if(y + radius > canvas.height || y < radius) {
        dy = -dy
    }

    //check collision for enemies
    enemies.forEach((enemy, index) => {
        if(x + radius > enemy.x && x - radius < enemy.x + enemy.width &&
           y + radius > enemy.y && y - radius < enemy.y + enemy.height) {
            enemies.splice(index, 1); // Remove the enemy from the array
            dx = -dx; // Change direction (optional)
            dy = -dy; // Change direction (optional)
        }
    });
}

// function that draws ball
function createBall() {

    ctx.beginPath()
    ctx.arc(x,y,radius,0,Math.PI * 2)
    ctx.fillStyle = "red"
    ctx.fill()
    ctx.closePath()

}

// function that creates animation
function animation() {
    x += dx
    y += dy

    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    createBall()
    collision()
    drawsEnemies()
    requestAnimationFrame(animation)
}

animation()




