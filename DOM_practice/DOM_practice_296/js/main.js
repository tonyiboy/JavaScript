// even listener

const NewBackgroundColor = document.querySelector(".box-2")


NewBackgroundColor.addEventListener("mouseout", changeBgColor)

function changeBgColor() {
    NewBackgroundColor.style.backgroundColor = "yellow"
}

