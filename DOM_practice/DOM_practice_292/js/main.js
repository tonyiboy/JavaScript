let box = document.querySelector("div")
let button = document.querySelector("button")

let movement = 50

function clickMe() {
    box.style.marginLeft = `${movement}px`
    movement += 50
   
}


button.addEventListener("click", clickMe )









