const head = document.head
const body = document.body

let h1 = document.querySelector("h1")

console.log(h1);

console.log(head.nodeType);
console.log(body.nodeType);


if(h1.nodeType === document.ELEMENT_NODE) {
    console.log("Body is an element node");
} else {
    console.log("Body is a textual node");
}