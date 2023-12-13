// Call the .filter() method on randomNumbers to return values that are less than 250. 
// Save them to a new array called smallNumbers, declared with const.

// Now let’s work with an array of strings. Invoke .filter() on the favoriteWords 
// array to return elements that have more than 7 characters. 
// Save the returned array to a const variable named longFavoriteWords.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => num < 250)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(myWords => myWords.length > 7)