let button = document.querySelector("button")
let ul = document.querySelector("ul")
let li = document.querySelector("li")

let clonedList = li.cloneNode(true)

button.addEventListener("click", () => {
    ul.append(clonedList)
})












