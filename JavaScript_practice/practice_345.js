// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> 
//   ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){

  let result = []
  let temp = ""

  for (let i of string) {
    if (i !== " ") {
      temp += i 
    } else {
      result.push(temp)
      temp = ""
    }
  }

  result.push(temp)

    return result 
  }

console.log(stringToArray("Robin Singh"));

