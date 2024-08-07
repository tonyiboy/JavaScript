// // parent node traversal

let ul = document.querySelector("ul")

console.log(ul.parentNode)
console.log(ul.parentElement) //elements are type of node (it can be comments,txt,line breaks etc)

//////////////////////////////////////////////////////////////////////////////////////////////////

// if we want to find grandparent of ul we just double it

console.log(ul.parentNode.parentNode)
console.log(ul.parentElement.parentElement)


////////////////////////////////////////////////////////////////////////////////////////////////////
const html = document.documentElement

//document node and elements node are not the same type of node 

// parentNode property will try to retrieve and node regardless that type of node
// so parentNode is commonly used when we are traversing the dom

console.log(html.parentNode) 

// returning us null because the job of parentElement property is to try retrive
// parent element of the html element 

console.log(html.parentElement)  



