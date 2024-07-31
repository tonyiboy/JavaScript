let button = document.querySelector("button")
let p = document.querySelector("p")

button.addEventListener("click", () => {
    p.style.transform += "rotate(50deg)"
})