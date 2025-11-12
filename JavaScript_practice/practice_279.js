// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function lowAndHigh (num1,num2,num3){
    let min = Math.min(num1,num2,num3)
    let high = Math.max(num1,num2,num3)
    console.log(`The lowest value is ${min} and the highest value is ${high}`)
  }
  
lowAndHigh(2,5,8) 