// Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot.

// If you need a reminder on how to use destructured assignment, review the example in the narrative or check the hint.

// Since functionality is referencing robot.functionality we can call the methods available to robot.functionality 
// simply through functionality.

// Take advantage of this shortcut and call the .beep() method on functionality. 

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const {functionality} = robot
  
  functionality.beep()