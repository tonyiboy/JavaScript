const body = document.querySelector("body")

console.log(body.childNodes);

 for(let i = 0; i < body.childNodes.length; i++) {
     console.log(body.childNodes[i]);
}

body.childNodes.forEach(node => {
     console.log(node);
})

for (let node of body.childNodes) {
    console.log(node);
}