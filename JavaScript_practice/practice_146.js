// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  
  let sequence = []
  
  let i = n
  
  do {
    sequence.push(i)
    i--
  } while (i > 0)
  
  return sequence
}

