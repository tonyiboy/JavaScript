let newTextNode = document.createTextNode("this text is created by JS")
console.log(newTextNode);
console.log(newTextNode.nodeType); // this will give us number 3 which is text node

let createEl = document.createElement("p")
createEl.append(newTextNode)
console.log(createEl);

let body = document.querySelector("body")
let list = document.querySelector("ul")
list.after(createEl)















