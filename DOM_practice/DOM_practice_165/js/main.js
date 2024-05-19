let buttonRight = document.querySelector(".right")
let buttonLeft = document.querySelector(".left")

let p = document.querySelector("p")

buttonRight.addEventListener("click", () => {
    p.style.transform += "translateX(10px)"
})

buttonLeft.addEventListener("click", () => {
    p.style.transform += "translateY(10px)"
})