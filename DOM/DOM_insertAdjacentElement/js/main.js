//we passing a string that is the tag name of the element that we want to create

let olElement = document.createElement("ol") 
console.log(olElement);

// we using here h1 as a reference point
//insertAdjacentElement has 2 arguments the first is string that tells where we want to insert the element that we pass in second argument
// and 4 values

let h1Element = document.getElementById("main")

// it will insert the olElement before h1 element
//h1Element.insertAdjacentElement("beforebegin",olElement) 

//it will insert the olElement after the opening h1 tag
//h1Element.insertAdjacentElement("afterbegin", olElement)

// it will insert the olElement before the ending tag of the h1 element
//h1Element.insertAdjacentElement("beforeend", olElement)

// it will insert the olElement after the closing h1 tag
h1Element.insertAdjacentElement("afterend", olElement)