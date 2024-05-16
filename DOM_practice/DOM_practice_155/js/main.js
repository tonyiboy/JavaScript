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


// buttons


let buttons = document.querySelector(".buttons")
let allButtons = document.getElementsByClassName("btn")
console.log(allButtons);

buttons.addEventListener("click", () => {
     for(let element of allButtons){
         element.style.color = "aqua"
     }
}) 

// buttons.addEventListener("click", () => {
//     for(let i = 0; i < allButtons.length; i++){
//         allButtons[i].style.color = "aqua"
//     }
// })

console.log(ol.parentElement);
console.log(ol.parentNode);


