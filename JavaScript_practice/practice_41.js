// In robot, create a getter method named energyLevel using the get keyword. Leave the function body blank for now.

// Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. 
// If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.

// Make sure you return the string and not logging it to the console.

// If this._energyLevel isn’t a number it could be that the _energyLevel property was altered. 
// Let’s add a default return statement for when such a scenario arises.

// Add an else statement that returns 'System malfunction: cannot retrieve energy level'.

// Log the result of calling the getter method energyLevel on robot to the console.

// Notice that the method will return a formatted response rather than just accessing a property!

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof this._energyLevel === 'number') {
        return 'My current energy level is ' + this._energyLevel
      } else {
        return "System malfunction: cannot retrieve energy level"
      }
    }
  };
  
  console.log(robot.energyLevel);
  
  

