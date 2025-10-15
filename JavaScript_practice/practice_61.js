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

const rps = (p1, p2) =>  p1 === p2 ? "Draw!" : p1 === "rock" && p2 === "scissors" || p1 === "scissors" && p2 === "paper"|| p1 === "paper" && p2 === "rock" ? "Player 1 won!" : "Player 2 won!" 








