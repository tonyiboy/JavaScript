// Very simple, given a number (integer / decimal / both depending on the language), 
// find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
   let result = String(number)

  if (result[0] === "-") {
    return -number
  } else return  -number
}
