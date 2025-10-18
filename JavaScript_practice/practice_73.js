// Define a method hello that returns "Hello, Name!" to a given name, 
// or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a 
// name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

function hello(name) {

    if (!name) return "Hello, World!"

    let result = ""

    for (let i = 0; i < name.length; i++) {
        if(i === 0) {
            result = name.at(0).toUpperCase()
        }else result += name.at(i).toLowerCase()
    }

    return `Hello, ${result}!`

}
