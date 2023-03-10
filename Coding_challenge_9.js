/*Neither yes nor no
Write a program that plays "neither yes, nor no" with the user. 
Specifically, the programs asks the user to enter text 
until either "yes" or "no" is typed, which ends the game. */

let userWord = ""

while (userWord !== "no" && userWord !== "yes"){
    userWord = prompt ("Enter a word")
}