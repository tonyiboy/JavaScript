// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

function findAverage(array) {
  
 
  let result = 0
  
  for (item of array) {
    result += item
  }
  
     if (array.length === 0) {
    return 0
  } else  {
    return result / array.length}
  
}
