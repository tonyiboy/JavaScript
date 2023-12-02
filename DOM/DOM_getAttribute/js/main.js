// append() and createElement()


// create element

const ul = document.querySelector("ul")
const li = document.createElement("li")

// adding element

ul.append(li)

// modifying the text

li.innerText = "movie 6"

// modifying attribute

const title = document.querySelector("#title")

console.log(title.getAttribute("id"))


