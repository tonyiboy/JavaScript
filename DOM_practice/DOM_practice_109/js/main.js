let ul = document.querySelector("ul")

let createEl = document.createElement("P")
createEl.innerText = "Hello"

// ul.insertAdjacentElement("beforebegin", createEl)
// ul.insertAdjacentElement("afterbegin", createEl)
// ul.insertAdjacentElement("beforeend", createEl)
ul.insertAdjacentElement("afterend", createEl)



























