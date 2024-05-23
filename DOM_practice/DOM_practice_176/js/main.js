let body = document.querySelector("body")

let myAlert = prompt("write number between 1-30 for blue color 31-60 or red and any other number for green background color")


if(myAlert > 1 && myAlert <= 30){
    body.style.backgroundColor = "blue"
}else if (myAlert > 30 && myAlert <= 60){
    body.style.backgroundColor = "red"
}else {
    body.style.backgroundColor = "green"
}