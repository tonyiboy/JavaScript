let myText = document.createTextNode("this is my text node")
let myElement = document.createElement("p")
let body = document.querySelector("body")

myElement.append(myText)

body.append(myElement)






