let p = document.querySelector("p")
let buttonHide = document.getElementById("button-hide")

buttonHide.addEventListener("click", () => {
    p.setAttribute("class", "hide")
})