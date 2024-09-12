let li = document.querySelector(".list-three")

let liOne = document.createElement("li")
let liTwo = document.createElement("li")
let liThree = document.createElement("li")

liOne.innerText="this is list 1" 
liTwo.innerText="this is list 2"
liThree.innerText="this is list 3"

li.after(liOne,liTwo,liThree)























