// text color button
let textColor = document.querySelector(".text-color")
let p = document.querySelector("p")

textColor.addEventListener("click", () => {
    p.style.color = "#FF4081"
})

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






























