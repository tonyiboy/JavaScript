let food = document.querySelector("main")

food.addEventListener("click", clickMe)

function clickMe(event){
    let liElement = event.target
    if(liElement.tagName === "LI"){
        let ulElement = liElement.querySelector("ul")
        if(ulElement){
            ulElement.classList.toggle("hide")
        }
    }

}