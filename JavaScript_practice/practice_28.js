// Invoke .findIndex() on the animals array to find the index of the element 
// that has the value 'elephant' and save the returned value to a const variable named foundAnimal.

// Let’s see if we can find the index of the first animal that starts with the letter 's'.

// Call .findIndex() on the animals array and return the index of the first element that starts with 's'. 
// Assign the returned value to a const variable named startsWithS.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(myAnimals => myAnimals === "elephant")

const startsWithS = animals.findIndex(startingWithS => startingWithS.charAt() === "s")