const para = document.querySelector(".second")

document.querySelector("button").addEventListener("click",changeColor)

function changeColor(){
    para.classList.replace("second", "first")
}