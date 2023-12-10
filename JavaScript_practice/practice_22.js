//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumSecondLowAndHigh (arr){
    let sorted = arr.sort((a,b) => a - b)
    alert(sorted[1] + sorted[sorted.length - 2])
  }
  
  sumSecondLowAndHigh([2,3,1,5,4])