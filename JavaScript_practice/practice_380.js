// In this simple exercise, you will create a program that will take two lists of integers, 
// a and b. Each list will consist of 3 positive integers above 0, 
// representing the dimensions of cuboids a and b. 
// You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), 
// the volume of a is 12 and the volume of b is 20. Therefore, 
// the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
  
  let result1 = a[0]
  let result2 = b[0] 

  for (let i = 1; i < a.length; i++) {
    result1 *= a[i]
    result2 *= b[i]
  }

  if (result1 < result2) {
    return result2 - result1
  }else {
    return result1 - result2
  }
  

}

console.log(findDifference([11, 2, 5], [1, 10, 8])); // 14
