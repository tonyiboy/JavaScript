// text color button
let textColor = document.querySelector(".text-color")
let p = document.querySelector("p")

textColor.addEventListener("click", () => {
    let currentColor = window.getComputedStyle(p).color;
    
    // Since computed styles return color in rgb format, we need to compare with rgb
    if (currentColor === "rgb(224, 224, 224)") { //  #e0e0e0 is rgb(224, 224, 224)
        p.style.color = "#FF4081";
    } else {
        p.style.color = "#e0e0e0";
    }
});

// background color
let backgroundColor = document.querySelector(".background-color")
let main = document.querySelector("main")

backgroundColor.addEventListener("click", () => {
    main.classList.toggle("main-background")
})

// font size
let fontSize = document.querySelector(".font-size")

fontSize.addEventListener("click", () => {
    let computedSize = window.getComputedStyle(p)
    if(computedSize.fontSize === "16px"){
        p.style.fontSize = "30px"
    }else p.style.fontSize = "16px"  
})

// buttons color
let buttonsColor = document.querySelector(".buttons-color")
let buttons = document.querySelectorAll("button")

buttonsColor.addEventListener("click", () => {
    buttons.forEach(button => {
        let computedStyle = window.getComputedStyle(button);
        // Toggle the color based on the computed color
        button.style.color = computedStyle.color === "rgb(206, 232, 255)" ? "red" : "#cee8ff";
    });
});

// buttons backgroundColor

let buttonBackgroundColor = document.querySelector(".buttons-background-color")

buttonBackgroundColor.addEventListener("click", () => {
    buttons.forEach(button => {
        let computedStyle = window.getComputedStyle(button);
        // Toggle the color based on the computed color
        button.style.backgroundColor = computedStyle.backgroundColor === "rgb(15, 28, 46)" ? "white" : "#0F1C2E";
    });
})

// header backgroundColor

let headerBackgroundColor = document.querySelector(".header-background-color")
let header = document.querySelector("header")

headerBackgroundColor.addEventListener("click", () => {
    let currentColor = window.getComputedStyle(header).backgroundColor;

    // Convert RGB to hex if necessary or directly compare with RGB values
    if (currentColor === "rgb(77, 100, 141)") { // This is the RGB equivalent of #4d648d
        header.style.backgroundColor = "#6c35de";
    } else {
        header.style.backgroundColor = "#4d648d";
    }

})

console.log(header.childNodes);
console.log(header.firstChild);
console.log(header.lastChild);

console.log(header.children);
console.log(header.firstElementChild);
console.log(header.lastElementChild);





































