// You need to write a function that reverses the words in a given string. 
// Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

function reverse(string){
    let result = ""
    let word = ""

    for (let i = string.length - 1; i >= 0; i--) {

        
        if (string[i] !== " ") {
            word = string[i] + word
        } else {
            result += word + " "
            word = ""
            
        } 
        
    }

    result += word

    return result 
}




