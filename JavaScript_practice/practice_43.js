// Instead of making individual robots like we’ve been doing, let’s make a factory function to make robots as we please!

// Create a factory function named robotFactory that has two parameters model and mobile. Make the function return an object. 
// In the object, add a key of model with the value of the model parameter. Add another property that has a key of mobile with a 
// value of the mobile parameter.

// Then add a method named beep without a parameter that will log 'Beep Boop' to the console.

// Use your factory function by declaring a const variable named tinCan. Assign to tinCan the value of calling robotFactory 
// with the first argument of 'P-500' and the second argument of true.

// Let’s now check what tinCan can do! Call .beep() on tinCan.

// You should see 'Beep Boop' printed to the console which means the factory function produced a robot object! Play around 
// with tinCan to check the other properties!

const robotFactory = (model, mobile) => {
    return {
      model : model,
          mobile: mobile,
          beep () { 
        console.log('Beep Boop'); 
      }
      };
  };
  
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();