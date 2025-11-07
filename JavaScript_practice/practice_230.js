// Write a function that merges two sorted arrays into a single one. 
// The arrays only contain integers. Also, the final outcome 
// must be sorted and not have any duplicate.

function mergeArrays(a, b) {
  
  let merged = a.concat(b).sort((a,b) => a - b) 

  let result = []

  for (let i = 0; i < merged.length; i++) {
    if (result.length === 0) {
      result.push(merged[i])
    }else if (result.at(-1) !== merged[i] ) {
        result.push(merged[i])
    }

    }
  

  return result
}

