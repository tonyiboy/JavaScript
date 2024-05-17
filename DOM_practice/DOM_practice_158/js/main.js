let button = document.querySelector(".btn-order")
let ol = document.querySelector("ol")

button.addEventListener("click", () => {
    if(ol.hasAttribute("reversed")) {
        ol.removeAttribute("reversed")
    }else ol.setAttribute("reversed", "true")
    console.log("hi");
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

buttons.addEventListener("click", () => {
    for(let element of allButtons){
        if (element.style.color === "aqua") {
            element.style.color = ""; // Reset to default
        } else {
            element.style.color = "aqua"; // Change to aqua
        }
    }
})

// buttons.addEventListener("click", () => {
//     for(let i = 0; i < allButtons.length; i++){
//         allButtons[i].style.color = "aqua"
//     }
// })


