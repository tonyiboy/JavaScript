let createElement = document.createElement("p")
let section = document.querySelector("section")
createElement.innerText = "beforebegin text"

section.insertAdjacentElement("afterend" , createElement)



