// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, 
// you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove (string) {
  if(string.at(-1) === "!") {
      return string.slice(0,-1)
  }else return string
}
