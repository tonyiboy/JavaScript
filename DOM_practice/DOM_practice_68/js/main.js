let table = document.querySelector("table")
let selectedEl = ""

table.addEventListener("click", tableClick)

function tableClick(event){
    if(event.target.tagName === "TD"){
        highLightColor(event.target)
    }
    
}

function highLightColor(node){
    if(selectedEl){
        selectedEl.classList.remove("highlited-color")
    }

    node.classList.add("highlited-color")
    selectedEl = node
}