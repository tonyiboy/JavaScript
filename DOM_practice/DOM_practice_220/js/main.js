let button = document.getElementById("rotate")
let boxOne = document.getElementById("boxOne")

button.addEventListener("click", function() {
    boxOne.style.transform += "rotate(360deg)"
    boxOne.style.transitionDuration = "3s"
    
    let currentColor = window.getComputedStyle(boxOne).backgroundColor;
    if (currentColor === "rgb(0, 255, 255)") { // 'aqua' in RGB
        boxOne.style.backgroundColor = "#2E8B57"; // SeaGreen
        boxOne.style.color = "#FF4081"; // Pink
    } else {
        boxOne.style.backgroundColor = "aqua";
        boxOne.style.color = "black";
    }
})