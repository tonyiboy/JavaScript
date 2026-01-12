// Below the robot object, reassign the _energyLevel property to 'high'.

// Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel.

// What will happen now that _energyLevel isn’t a number? 

// Call .recharge() on robot to find out.

// Notice that a funky string is printed to the console! This is known as a side-effect of type-coercion. 
// No need to worry about what this means for now, but it’s important to understand that you can cause unwanted side-effects 
// when mutating objects and their properties.

const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
  robot._energyLevel = "high"
  robot.recharge()
  
  