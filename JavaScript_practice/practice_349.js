// Given an array of numbers, check if any of the numbers are the character codes 
// for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] 
// output Return the resulting array.

function isVow(a){
  let result = []
  let temp = ""

  for (let i in a) {

    if (String.fromCodePoint(a[i]) === "a" || String.fromCodePoint(a[i]) === "e" ||
        String.fromCodePoint(a[i]) === "i" || String.fromCodePoint(a[i]) === "o" ||
        String.fromCodePoint(a[i]) === "u") {
          result.push(String.fromCodePoint(a[i]))
        } else result.push(a[i])
  }
  
  return result
}

console.log(isVow([100,100,116,105,117,121])) //[100,100,116,"i","u",121]
