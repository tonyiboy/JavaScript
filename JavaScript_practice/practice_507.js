// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. 
// Taking the first letter of all of the inputs and grouping them next to each other. 
// Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length. 

function tripleTrouble(one, two, three){
  
    let resultOne = ""
    let resultTwo = ""
    let resultThree = ""
    let result = ""


    for (let i = 0; i < one.length; i++) {
        resultOne = one.at(i)
        resultTwo = two.at(i)
        resultThree = three.at(i)
        result += resultOne + resultTwo + resultThree

    }

    return result

 }

 console.log(tripleTrouble("aaa","bbb","ccc")); // "abcabcabc"
 