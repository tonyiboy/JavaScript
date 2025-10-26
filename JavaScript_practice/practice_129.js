// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
   
  let result = ""
  
  for (let char of str) {
    result = char + result
  }
  
  return result
  
} 




