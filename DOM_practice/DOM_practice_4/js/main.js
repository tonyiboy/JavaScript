let olElement = document.createElement("ol")
console.log(olElement);

let h1Element = document.getElementById("main")
console.log(h1Element);

h1Element.insertAdjacentElement("afterend",olElement)

let list1 = document.createElement("li")
let text = document.createTextNode("this is my first list")

list1.appendChild(text)
olElement.appendChild(list1)