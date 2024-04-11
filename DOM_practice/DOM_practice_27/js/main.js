let newElement = document.createElement("p")
let ul = document.querySelector("ul")
let body = document.querySelector("body")

newElement.innerText = "this is inserted p"

body.insertBefore(newElement, ul)



