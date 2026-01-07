// Add your code under the animals array and before the line console.log(secretMessage.join(''));

// Use .map() to create a new array that contains the first character of each string in the animals array. 
// Save the new array to a const variable named secretMessage.

// Use .map() to divide all the numbers in bigNumbers by 100. 
// Save the returned values to a variable declared with const called smallNumbers.


const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animals => animals.charAt()  ) 

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(el => el / 100)
console.log(smallNumbers)