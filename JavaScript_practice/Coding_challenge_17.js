// Define a recursive function isEven corresponding to this description. 
// The function should accept a single parameter (a positive, whole number) and return a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

function isEven (num) {
    if (num >= 0) {
        if (num === 0) {
            return true
        } else if (num === 1) {
            return false
        } else {
            return (isEven(num -2))
        }
    } else {
        return "negative"
    }
}

console.log(isEven(50));
// → true
 console.log(isEven(75));
// // → false
 console.log(isEven(-1));
// → ??

