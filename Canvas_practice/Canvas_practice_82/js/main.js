const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

let x = 150;
let y = 100;
let w = 50;
let h = 50;

let dx = 2;
let dy = 3;

function draw() {
    ctx.fillStyle = "purple";
    ctx.fillRect(x, y, w, h);
}

let boxX = 200;
let boxY = 200;
let boxW = 50;
let boxH = 50;

function box() {
    ctx.fillStyle = "red";
    ctx.fillRect(boxX, boxY, boxW, boxH);
}

function move() {
    x += dx;
    y += dy;
}

function collision() {
    // Check collision with canvas boundaries
    if (x + w > canvas.width || x < 0) {
        dx = -dx;
    }
    if (y + h > canvas.height || y < 0) {
        dy = -dy;
    }

    // Check collision with the stationary box
    if (x < boxX + boxW && x + w > boxX && y < boxY + boxH && y + h > boxY) {
        // Determine the side of collision
        let overlapX = Math.min(x + w - boxX, boxX + boxW - x);
        let overlapY = Math.min(y + h - boxY, boxY + boxH - y);

        if (overlapX < overlapY) {
            dx = -dx;
            if (x < boxX) {
                x = boxX - w; // Move the moving box to the left of the stationary box
            } else {
                x = boxX + boxW; // Move the moving box to the right of the stationary box
            }
        } else {
            dy = -dy;
            if (y < boxY) {
                y = boxY - h; // Move the moving box above the stationary box
            } else {
                y = boxY + boxH; // Move the moving box below the stationary box
            }
        }
    }
}

function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    box();
    move();
    collision();
    requestAnimationFrame(animation);
}

animation();
