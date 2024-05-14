let button = document.querySelector("button")
let ol = document.querySelector("ol")

button.addEventListener("click", () => {
    if(ol.hasAttribute("reversed")) {
        ol.removeAttribute("reversed")
    }else ol.setAttribute("reversed", "true")
})

// color
let buttonColor = document.querySelector(".btn-color")

buttonColor.addEventListener("click", () => {
    ol.style.color = "red"
    })
    

// background

let buttonBackgroundColor = document.querySelector(".btn-bg-color")

buttonBackgroundColor.addEventListener("click", () => {
    ol.style.backgroundColor = "green"
} )



