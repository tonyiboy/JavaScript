// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


function maps(x){
    let result = []  
    x.forEach(function(item) { 
      result.push(item * 2)
    })
  
  return result
}

console.log(maps([1, 2, 3]));
