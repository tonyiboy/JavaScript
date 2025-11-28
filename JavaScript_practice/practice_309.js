// Create a function that takes three arguments:

// a value to be evaluated for truthiness.
// a function to execute if the first argument is truthy.
// a function to execute if the first argument is falsy.
// If the first argument evaluates to truthy, call the second argument (a function). 
// If it evaluates to falsy, call the third argument instead (also a function).

// In statically-typed languages, the first argument will be a boolean. 
// In dynamically-typed languages that attribute a truth value to all expressions, it may be of any type.

function _if(bool, func1, func2) {
  return bool ? func1() : func2()
}