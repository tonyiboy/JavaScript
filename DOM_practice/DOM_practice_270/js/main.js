// even listener

const NewBackgroundColor = document.querySelector(".box-1")


NewBackgroundColor.addEventListener("mouseover", changeBgColor)

function changeBgColor() {
    NewBackgroundColor.style.backgroundColor = "brown"
}

