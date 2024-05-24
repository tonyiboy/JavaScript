let buttonLeft = document.querySelector(".left")
let buttonRight = document.querySelector(".right")

let section = document.querySelector("section")

buttonLeft.addEventListener("click", () => {
    section.style.transform += "translateX(-10px)"
})

buttonRight.addEventListener("click", () => {
    section.style.transform += "translateX(+10px)"
})



