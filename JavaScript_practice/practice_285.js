// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" 
// --> "battle no requires which that is victory greatest The"

function reverseWords(str){
  let result = ""
  let temp = ""

   for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
         temp = temp + str[i]     
      } else {
         result = " " + temp + result
         temp = ""
      }
   }

   result = temp + result
   
   return result
   
}


