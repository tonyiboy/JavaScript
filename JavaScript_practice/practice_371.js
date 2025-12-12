// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "aeiou" --> "!!!!!"
// "ABCDE" --> "!BCD!"

function replace(s) {
   
    
    let result = ""
    let i = 0

    while(i < s.length) {


        if(s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u" ||
            s[i] === "A" || s[i] === "E" || s[i] === "I" || s[i] === "O" || s[i] === "U") {
           result += "!" 
        } else result += s[i]
        i++
    }



    return result
}

console.log(replace("Hi!"));






