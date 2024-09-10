// toggle example

const button = document.querySelector("button")
const list = document.querySelectorAll("li")
button.addEventListener("click", hide)


function hide(){
    for(let i = 0; i < list.length; i++){
   list[i].classList.toggle("list-items")
    }
}
