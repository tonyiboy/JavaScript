let list = document.querySelector("ul")
let middle = document.getElementsByClassName("middle")[0]
let createElement = document.createElement("li")
createElement.innerText= "this is replaced list"

list.replaceChild(createElement, middle)

let clonedNode = middle.cloneNode()
clonedNode.innerText="this is cloned list"
list.append(clonedNode)











