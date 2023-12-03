// create element

const ul = document.querySelector("ul")
const li = document.createElement("li")

// adding element

ul.append(li)

// modifying the text

li.innerText = "movie 6"

// modifying classes

 li.classList.add("list-items") //this console log true because it there

 li.classList.remove("list-items") //this console log false because its removed

console.log(li.classList.contains("list-items"))
