let buttonRotate = document.getElementById("rotate")
let buttonScaleUp = document.getElementById("scaleUp")
let buttonScaleDown = document.getElementById("scaleDown")
let buttonSkew = document.getElementById("skew")

let boxOne = document.getElementById("boxOne")

buttonRotate.addEventListener("click", function() {
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

buttonScaleUp.addEventListener("click", function() {
    boxOne.style.transform = "scale(2.5)"
})

buttonScaleDown.addEventListener("click", function() {
    boxOne.style.transform = "scale(0.5)"
})

buttonSkew.addEventListener("click", function() {
    boxOne.style.transform = "skew(300deg)"

})
