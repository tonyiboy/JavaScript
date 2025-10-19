// Write function RemoveExclamationMarks which removes 
// all exclamation marks from a given string.


function removeExclamationMarks(s) {
  let result = ''
  for(let i = 0; i <s.length; i++){
    if(s.at(i) === '!'){
      continue
    }
    else{
      result += s.at(i)
    }
  }
  return result;
}



