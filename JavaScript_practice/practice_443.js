// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.

function noBoringZeros(n) {  
  let myString = String(n)
  let lengthNumber 
  let result = ""
  
  
  for (let i = myString.length -1; i >= 0; i--) {
    if(myString[i] === "0") { 
      continue
    } else {
      lengthNumber = i + 1
      break
    }
  }
  
  
  for (let i = 0; i < lengthNumber; i++) {
      result += myString[i]

  }

  return Number(result)
}
