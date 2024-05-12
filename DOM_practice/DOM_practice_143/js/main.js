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
    

console.log(ol.childNodes);
console.log(ol.firstChild);
console.log(ol.lastChild);

console.log(ol.children);
console.log(ol.firstElementChild);
console.log(ol.lastElementChild);

