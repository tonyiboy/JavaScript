// Reassign the color property of the spaceship object to have a value of 'glorious gold'

// Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.

// Use the delete operator to remove the 'Secret Mission' property from the spaceship object.

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  
  spaceship.color = 'glorious gold';
  
  spaceship.numEngines = 9;
  
  delete spaceship['Secret Mission'];