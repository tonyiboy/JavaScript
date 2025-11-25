// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" 
// --> "battle no requires which that is victory greatest The"

function reverseWords(str){
  let result = ""
  let temp = ""

   for (let i = str.length -1; i >= 0; i--) {
      if (str[i] !== " ") {
         temp = str[i] + temp     
      } else {
         result = result + temp + " "
         temp = ""
      }
   }

   result = result + temp
   
   return result
   
}

