let ul = document.querySelector("ul")
let createEl = document.createElement("li")
let textNode = document.createTextNode("this is created list by Javasript")
createEl.append(textNode)

let existingEl = document.querySelectorAll("li")
console.log(existingEl);

ul.appendChild(createEl)

ul.appendChild(existingEl[1])
























