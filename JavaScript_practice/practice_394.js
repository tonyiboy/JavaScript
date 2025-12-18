// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function distinct(a) {

  let result = [a[0]]  

  for (let i = 1; i < a.length; i++) {
    
    let temp = false

    for (let k = 0; k < result.length; k++) {
        if (result[k] === a[i]) {
            temp = true
            break
        }
    }

    if(!temp) {
        result.push(a[i])
        temp = false
    }

  }

  return result
}

console.log(distinct([1,1,2]));
