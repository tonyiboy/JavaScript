// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){

    let upperCaseResult = name.toUpperCase().split(" ")
    
    let firstName = upperCaseResult[0]
    let lastName = upperCaseResult[1]
    return `${firstName[0]}.${lastName[0]}`

}
