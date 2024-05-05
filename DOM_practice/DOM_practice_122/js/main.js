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
    main.style.backgroundColor = "#2E8B57"
})

// font size
let fontSize = document.querySelector(".font-size")

fontSize.addEventListener("click", () => {
    p.style.fontSize = "30px"
})

// buttons color
let buttonsColor = document.querySelector(".buttons-color")
let buttons = document.querySelectorAll("button")

buttonsColor.addEventListener("click", () => {
    buttons.forEach(button => {
        button.style.color = "red";
    });
});

// buttons backgroundColor

let buttonBackgroundColor = document.querySelector(".buttons-background-color")

buttonBackgroundColor.addEventListener("click", () => {
    buttons.forEach(button => {
        button.style.backgroundColor = "white";
    });
})

// header backgroundColor

let headerBackgroundColor = document.querySelector(".header-background-color")
let header = document.querySelector("header")

headerBackgroundColor.addEventListener("click", () => {
    header.style.backgroundColor = "#6c35de"
})






























