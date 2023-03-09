// Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

let userGuest = 101

 while (userGuest > 100){
     userGuest = prompt ("Enter an integer" ,200)

}

//When you are done with the above, improve the program so that the terminating number is between 50 and 100.

while (userGuest > 100 || userGuest < 50){
     userGuest = prompt ("Enter an integer" ,0)
}