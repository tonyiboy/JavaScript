// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override 
// are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct 
// alias.

// Notes:
// Two objects that return a one word name in response to the first letter of the first name 
// and one for the first letter of the surname are already given. See the examples below for 
// further details.

// If the first character of either of the names given to the function is not a letter from A - Z, 
// you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should 
// accommodate for these grammatical errors.

function aliasGen(first, last){
    if ( 
      ( (first.codePointAt(0) >= 65 && first.codePointAt(0) <= 90) || (first.codePointAt(0) >= 97 && first.codePointAt(0) <= 122) )
        && ( (last.codePointAt(0) >= 65 && last.codePointAt(0) <= 90 )
       || (last.codePointAt(0) >= 97 && last.codePointAt(0) <= 122 ) ) ) {
      return firstName[first[0].toUpperCase()] + " " + surname[last[0].toUpperCase()]
    }else return "Your name must start with a letter from A - Z."
}