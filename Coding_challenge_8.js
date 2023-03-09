// Multiplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.

let number = prompt ("What times table do you want", 0)

for (let i = 1; i < 10; i++){
    let times = number * i
    console.log(`${number} * ${i} = ${times}`)
}


// When you are done, improve the program so it only accepts numbers between 2 and 9 
//(use the previous exercise as a blueprint).

let userInput = 0

while (userInput < 2 || userInput > 9 ){
    userInput = prompt("Enter an integer", 0)
}
for (let i = 1; i < 10; i++){
    let times = userInput * i
    console.log(`${userInput} * ${i} = ${times}`)
}