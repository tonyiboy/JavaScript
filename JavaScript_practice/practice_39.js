// Currently the .checkEnergy() method is not producing the correct output because it is using arrow function syntax.

// Refactor, or change, the method to use a function expression. You can write the function using either longhand or shorthand format.

// After refactoring the method, notice that .checkEnergy() has access to the other internal properties of the robot object.

const robot = {
    energyLevel: 100,
    checkEnergy () {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();