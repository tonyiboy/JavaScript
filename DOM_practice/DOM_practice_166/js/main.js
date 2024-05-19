let buttonRight = document.querySelector(".right")
let buttonDown = document.querySelector(".down")

let buttonLeft = document.querySelector(".left")
let buttonUp = document.querySelector(".up")

let p = document.querySelector("p")

buttonRight.addEventListener("click", () => {
    p.style.transform += "translateX(10px)"
})

buttonDown.addEventListener("click", () => {
    p.style.transform += "translateY(10px)"
})

buttonLeft.addEventListener("click", () => {
    p.style.transform += "translateX(-10px)"
})

buttonUp.addEventListener("click", () => {
    p.style.transform += "translateY(-10px)"

})