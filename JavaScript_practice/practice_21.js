//Create and array of numbers
let nums = [21,56,88,24,99,710]
//Return a new array of numbers that includes every even number from the previous Arrays

let newArr = arr => arr.filter(n => n % 2 === 0)

console.log(newArr(nums))