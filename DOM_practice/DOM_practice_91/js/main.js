let list = document.querySelector("ul")

let createEl = document.createElement("p")
createEl.innerText = "this is p"

let createList = document.createElement("li")
createList.innerText="this is list"

// list.insertAdjacentElement("beforebegin", createEl)
list.insertAdjacentElement("afterend", createEl)

// list.insertAdjacentElement("afterbegin", createList)
list.insertAdjacentElement("beforeend", createList)













