// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

const defineSuit = card => card.at(-1) === "♣" ? "clubs" : card.at(-1) === "♦" ? "diamonds" : card.at(-1) === "♥" ? "hearts" : "spades"

