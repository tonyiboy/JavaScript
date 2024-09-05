// even listener

const NewBackgroundColor = document.querySelector(".box-3")


NewBackgroundColor.addEventListener("dblclick", changeBgColor)

function changeBgColor() {
    NewBackgroundColor.style.backgroundColor = "blue"
}

