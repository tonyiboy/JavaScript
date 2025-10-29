// Given a string, you have to return a string in which each character 
// (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
  let result = ""
  let i = 0
  while(i < str.length) {
    
      result += str[i] + str[i]
      i++
  }
  
  return result
}