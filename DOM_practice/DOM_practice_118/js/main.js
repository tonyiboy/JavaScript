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






























