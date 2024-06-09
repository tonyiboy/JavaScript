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

console.log(button.parentNode);
console.log(button.parentElement);