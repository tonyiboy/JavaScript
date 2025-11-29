// Complete the square sum function so that it squares each number 
// passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9


function squareSum(numbers){
    
  if (numbers.length === 0) return 0
  
  let result = 0    
   let i = 0
    
  while(i < numbers.length) {
      result += Math.pow(numbers[i],2)
      i++
      }

    return result
}

console.log(squareSum([1,2]));
