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
    

console.log(ol.previousSibling);
console.log(ol.nextSibling);

console.log(ol.previousElementSibling);
console.log(ol.nextElementSibling);
