let myText = document.createTextNode("this is prepend")
let myElementOne = document.createElement("p")
let body = document.querySelector("body")
myElementOne.append(myText)
body.prepend(myElementOne)

let myElementTwo = document.createElement("p")
myElementTwo.innerText= "this is after"
let middle = document.querySelector(".middle")
middle.after(myElementTwo)

let elementThree = document.createElement("p")
elementThree.innerText= ("this is apend child")
let list = document.querySelector("ul")
list.appendChild(elementThree)











