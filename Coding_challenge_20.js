// The previous chapter introduced the standard function Math.min that returns its smallest argument. 
// We can build something like that now. 
// Write a function min that takes two arguments and returns their minimum.

const min = (num1, num2) => (num1 < num2) ? num1 :num2

console.log(min(0, 10));
// // → 0
console.log(min(0, -10));
// // → -10