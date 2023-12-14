// Let’s use bracket notation to access the value of 'Active Mission' from the spaceship object in the code editor. 
// Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.

// Using bracket notation and the propName variable provided, console.log() the value of the 'Active Mission' property.

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  
  let isActive = spaceship['Active Mission'];
  
  console.log(spaceship[propName]);