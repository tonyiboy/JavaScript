let p = document.querySelector("p")
let button = document.querySelector("button")
let body = document.querySelector("body")



button.addEventListener("click", () => {
    let cloned = p.cloneNode()
    cloned.innerText = "good job"
    let result = document.querySelector("#one").value
    if(result === "hello") {
        p.innerText = "hello"
       
    }else {
        cloned.innerText ="bad job"
    }
    body.append(cloned)

})

console.log(body.childNodes)
console.log(body.firstChild)
console.log(body.lastChild)

console.log(body.children)
console.log(body.firstElementChild)
console.log(body.lastElementChild)