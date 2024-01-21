let arr = ["movie1", "movie2","movie3", "movie4", "movie5","movie6","movie7","movie7","movie8","movie9","movie10"]
console.log(arr)
//converting my arr to a string
let movies= arr.join(",")
console.log(movies)

//finding paragraph with id
let p = document.getElementById("para")
console.log(p)

//put my movies inside paragraph
p.textContent= movies

let myAllParagraphs = document.querySelectorAll("p")
console.log(myAllParagraphs);

//looping through all my paragraphs and adding text

 for(let i = 0; i < myAllParagraphs.length; i++){
    myAllParagraphs[i].textContent = "Looping"
 }