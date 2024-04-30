let ul = document.querySelector("ul")
let createEl = document.createElement("li")
let textNode = document.createTextNode("this is created list by Javasript and it changed exist test in this list")
createEl.append(textNode)

let existingEl = document.querySelectorAll("li")

ul.replaceChild(createEl,existingEl[1])
























