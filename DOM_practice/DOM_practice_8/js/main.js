let myList = ["list number 1","list numebr 2", "list number 3"]

let h1Element = document.getElementById("main")
let olElement = document.createElement("ol")

h1Element.insertAdjacentElement("afterend",olElement)

// lets loop my array that will create list on my page

myList.forEach(text => {
    let liList = document.createElement("li")
    liList.textContent = text

    olElement.appendChild(liList)
})

let storeLastChild = olElement.lastChild
storeLastChild.remove()

let ulElement = document.querySelector("ul")

 ulElement.appendChild(storeLastChild)

