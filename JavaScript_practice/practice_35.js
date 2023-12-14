// Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. 
// Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)

// Right now the passengers property has a value of null. Instead, assign as its value an array of objects. 
// These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger 
// object in the array that has at least one key-value pair on it.

// Create a variable firstPassenger and assign the first passenger as its value 
// (the element in the 0th index of the spaceship.passengers array you just made). 
// Make sure to use bracket and dot notation to get the passenger object through 
// nested access (don’t just copy the object into the variable!)

let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship.crew.captain["favorite foods"][0]
  
  spaceship.passengers = [{people:"person 1"}]
  
  let firstPassenger = spaceship.passengers[0]
