//we passing a string that is the tag name of the element that we want to create

let olElement = document.createElement("ol") 
console.log(olElement);

// then we put it in html
//this will insert it after script tag in body
document.body.appendChild(olElement)

//we want to insert it before script tag in body

let scriptElement = document.querySelector("script")

document.body.insertBefore(olElement, scriptElement)