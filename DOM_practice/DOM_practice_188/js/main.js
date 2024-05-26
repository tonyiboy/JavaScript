let p = document.querySelector("p")
let buttonHide = document.getElementById("button-hide")
let buttonShow = document.getElementById("button-show")
let buttonRemove = document.getElementById("button-remove")



buttonHide.addEventListener("click", () => {
    p.setAttribute("class", "hide")
})

buttonShow.addEventListener("click", () => {
    p.setAttribute("class", "show")
})

buttonRemove.addEventListener("click", () => {
    p.setAttribute("class" , "remove")
})