const canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")


function clockFace() {

    // Draw the outer circle
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, 210, 0, Math.PI * 2)
    ctx.fillStyle = "white"
    ctx.fill()
    ctx.lineWidth = 1; // Set the line width for the outline
    ctx.strokeStyle = "d#1d1c1c"; // Set the stroke color
    ctx.stroke(); // Apply the outline
    
    // Draw the surrounding circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 230, 0, Math.PI * 2); // Slightly larger radius for surrounding circle
   ctx.fillStyle = "transparent"
    ctx.fill();
    ctx.lineWidth = 1; // Set the line width for the outline
    ctx.strokeStyle = "d#1d1c1c"; // Set the stroke color
    ctx.stroke(); // Apply the outline

    // filling space
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 220, 0, Math.PI * 2); // Slightly larger radius for surrounding circle
    ctx.fillStyle = "transparent"
    ctx.fill();
    ctx.lineWidth = 16; // Set the line width for the outline
    ctx.strokeStyle = "#2196F3"; // Set the stroke color
    ctx.stroke(); // Apply the outline
    
    // Draw the inner circle
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, Math.PI * 2)
    ctx.fillStyle = "#2196F3"
    ctx.fill()
}

clockFace()







