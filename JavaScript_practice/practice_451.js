// Your task is to create a change machine.

// The machine accepts a single coins or notes, and returns change in 20p and 10p coins. 
// The machine will try to avoid returning its exact input, but will otherwise return as 
// few coins as possible. For example, a 50p piece should become two 20p pieces and one 10p piece, 
// but a 20p piece should become two 10p pieces.

// The machine can exclusively process these coins and notes: £5, £2, £1, 50p, 20p. 
// Any coins and notes which are not accepted by the machine will be returned unprocessed. 
// For example, if you were to put a £20 note into the machine, it would be returned to you 
// and not broken into change. (Note that £1 is worth 100p.)

// This change machine is programmed to accept and distribute strings rather than numbers. 
// The input will be a string containing the coin or note to be processed, 
// and the change should be returned as one string with the coin names separated by single 
// spaces with no commas. The values of the string should be in descending order. For example, 
// an input of "50p" should yield the exact string "20p 20p 10p".

function changeMe(moneyIn){
   let exchange = 0
   
   if (moneyIn === "£5") {
      exchange = 500
   } else if (moneyIn === "£2") {
      exchange = 200
   } else if (moneyIn === "£1") {
      exchange = 100
   } else if (moneyIn === "50p") {
      exchange = 50
   } else if (moneyIn === "20p") {
      exchange = 20
   } else {
      return moneyIn
   }

   let count = 0

   if (exchange === 500) {
      count = 25
   } else if (exchange === 200) {
      count = 10
   } else if (exchange === 100) {
      count = 5
   } else if (exchange === 50) {
      count = 2
   } else count = 1

   let result = ""

    if (count === 2) {
        return  result = "20p 20p 10p"
      }else if (count === 1) {
        return  result = "10p 10p"
      } else  result = ""

   for (let i = 0; i < count; i++) {
      result += "20p "
   }

   return result.slice(0,-1)
}
