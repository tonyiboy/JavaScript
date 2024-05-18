let button = document.querySelector("button")
let p = document.querySelector("p")

button.addEventListener("click", () => {
    p.style.transform += "skew(10deg)"
})