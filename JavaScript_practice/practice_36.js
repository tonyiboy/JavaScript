// Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.

// Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true.

// Call your two functions with the spaceship object in the code editor, then console.log() 
// the spaceship object to confirm those properties were changed/added.

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  }
  
  let remotelyDisable = obj => {
    obj.disabled = true;
  }
  
  greenEnergy(spaceship);
  
  remotelyDisable(spaceship);
  
  console.log(spaceship)