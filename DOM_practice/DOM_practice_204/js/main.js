function countElements(element) {
    

    let el = document.querySelectorAll(element)
    return el.length

}

console.log(countElements("p .adjective"));
console.log(countElements("p"));
console.log(countElements("p > .adjective"));
console.log(countElements(".adjective"));















