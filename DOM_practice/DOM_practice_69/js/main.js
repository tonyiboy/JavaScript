let element = document.querySelector("main")

element.addEventListener("click", remove)

function remove(event){
    if(event.target.className === "remove"){
        event.target.parentElement.remove()
    }
   
}