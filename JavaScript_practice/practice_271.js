//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function 
//x times where x is the number passed into the function. Call the function.
function headsOrTails(){
    let result = Math.random()
    if (result < .5){
      return "heads"
    } else {
      return "tails"
    }
  }

  function flipCoin(n){
    for(let i = 1; i <= n; i++){
      let result = headsOrTails()
      console.log(result)
    }
  }

  flipCoin(10) 