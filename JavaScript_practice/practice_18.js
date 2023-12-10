// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headsOrTails(){
    let result = Math.random()
    if (result < .5){
      return "heads"
    } else {
      return "tails"
    }
  }
  
  console.log(headsOrTails())