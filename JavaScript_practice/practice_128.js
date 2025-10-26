// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
   
  let i = str.length - 1
  let result = ""
  
  while (i >= 0) {
    result += str[i]
    i--
  }
  
  return result
  
} 




