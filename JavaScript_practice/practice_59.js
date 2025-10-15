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
  if (p1 === p2) {
return 'Draw!';
} else if (p1 === 'rock' && p2 === 'scissors') {
return 'Player 1 won!';
} else if (p1 === 'scissors' && p2 === 'paper') {
return 'Player 1 won!';
} else if (p1 === 'paper' && p2 === 'rock') {
return 'Player 1 won!'; 
} else {
return 'Player 2 won!'
}
};








