let buttonLeft = document.querySelector(".left")
let buttonRight = document.querySelector(".right")
let buttonUp = document.querySelector(".up")
let buttonDown = document.querySelector(".down")

let rotateRight = document.querySelector(".rotate-right")

let section = document.querySelector("section")

buttonLeft.addEventListener("click", () => {
    section.style.transform += "translateX(-10px)"
})

buttonRight.addEventListener("click", () => {
    section.style.transform += "translateX(+10px)"
})

buttonUp.addEventListener("click", () => {
    section.style.transform += "translateY(-10px)"
})

buttonDown.addEventListener("click", () => {
    section.style.transform += "translateY(+10px)"
})

rotateRight.addEventListener("click", () => {
    section.style.transform += "rotate(10deg)"
})



