// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
  let myName = str.split(" ")

  let result = myName[1] + " " + myName[0]

  return result
}
