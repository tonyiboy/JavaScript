// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"


function correctPolishLetters (string) {

   let result = ""

   for (let i = 0; i < string.length; i++) {

      switch(string[i]) {
         case "ą":
            result += "a";
         break;
         case "ć":
            result += "c";
         break;
         case "ę":
            result += "e";
         break;
         case "ł":
            result += "l";
         break;
          case "ń":
            result += "n";
         break;
         case "ó":
            result += "o";
         break;
         case "ś":
            result += "s";
         break;
         case "ź":
            result += "z";
         break;
          case "ż":
            result += "z";
         break;
         default:
            result += string[i];
      }

   }

   return result

}


