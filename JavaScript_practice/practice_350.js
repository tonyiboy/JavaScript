// Given an array of numbers, check if any of the numbers are the character codes 
// for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] 
// output Return the resulting array.

function isVow(a){
  let result = []
  let temp = ""

  for (let i of a) {

    if (String.fromCodePoint(i) === "a" || String.fromCodePoint(i) === "e" ||
        String.fromCodePoint(i) === "i" || String.fromCodePoint(i) === "o" ||
        String.fromCodePoint(i) === "u") {
          result.push(String.fromCodePoint(i))
        } else result.push(i)
  }
  
  return result
}

console.log(isVow([100,100,116,105,117,121])) //[100,100,116,"i","u",121]
