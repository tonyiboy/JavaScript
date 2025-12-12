// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "aeiou" --> "!!!!!"
// "ABCDE" --> "!BCD!"

function replace(s) {
   
    
    let result = ""

    for (let i = 0; i < s.length; i++) {
        if(s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u") {
           result += "!" 
        } else result += s[i]
    }



    return result
}

console.log(replace("Hi!"));






