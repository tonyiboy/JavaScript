// Let’s practice calling .reduce() and using console.log() to check the values as .reduce() iterates through the array.
// In main.js, there is an array of numbers, newNumbers.
// To start, declare a new variable named newSum using the const keyword. Assign to newSum the value of calling .reduce() on newNumbers. 
// You don’t need to provide any arguments to .reduce() yet.
// You’ll also see a TypeError: undefined is not a function but we’ll fix that after we add our callback function in the next step!

// Provide .reduce with an argument of a callback function. The callback function has two parameters. 
// The first parameter is accumulator and the second parameter is currentValue. Use either a function expression or an arrow function.

// To check the value being used as we iterate through the array, add three statements to the function body of the callback:
// console.log('The value of accumulator: ', accumulator);
// console.log('The value of currentValue: ', currentValue);
// a return statement that adds accumulator to currentValue.

// Log the value of newSum to the console to see the return value of calling .reduce() on newNumbers.

// While we have this code set up, let’s also check what happens if you add a second argument to .reduce(). 
// The second argument acts as an initial value for the accumulator.Add a second argument of 10 to .reduce().

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator)
  console.log('The value of currentValue: ',currentValue)
  return accumulator + currentValue
},10 )

console.log(newSum)