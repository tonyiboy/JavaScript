let ul = document.querySelector("ul")
let button= document.querySelector("button")
let li = document.createElement("li")
li.innerText = "new list"

function clickMe() {
    ul.append(li)
    
}

button.addEventListener("click", clickMe)









