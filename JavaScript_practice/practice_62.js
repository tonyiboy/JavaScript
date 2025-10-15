// Rules of the "Rock, Paper, Scissors" game are:

// Rock beats Scissors
// Scissors beat Paper,
// Paper beats Rock.
// Let's play! You have to return which player won! 
// In case of a draw return Draw!.

// Examples:
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  
  const win = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  }
  
  if (p1 === p2) {
    return "Draw!"
  }
  
  return win[p1] === p2 ? "Player 1 won!" : "Player 2 won!"
};







