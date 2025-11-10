// You are given two sorted arrays that contain only integers. These arrays may be sorted in 
// either ascending or descending order. Your task is to merge them into a single array, ensuring that:

// The resulting array is sorted in ascending order.

// Any duplicate values are removed, so each integer appears only once.

// If both input arrays are empty, return an empty array.

// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!

function mergeArrays(arr1, arr2) {
  
  // step 1 merge 2 arrays
  let mergedArray = arr1.concat[arr2]

  // step 2 remove duplicate value
  let noDuplicate = []


  for (let i = 0; i < mergedArray.length; i++) {

    let tracker = false

    for (let j = 0; j < noDuplicate.length; j++) {

      if (noDuplicate[j] === mergedArray[i]) {
        tracker = true
        break
      }

    }

    if (!tracker) noDuplicate.push(mergedArray[i])
  }

  //step 3 sorting them ascending order
  // [1, 3, 4, 2]

  for (let i = 0; i < noDuplicate.length; i++) {

    for (let j = i + 1; j < noDuplicate.length; j++) {

      if (noDuplicate[i] > noDuplicate[j]) {
        let temp = noDuplicate[i]
        noDuplicate[i] = noDuplicate[j]
        noDuplicate[j] = temp
      }

    }

  }


  return noDuplicate

}



