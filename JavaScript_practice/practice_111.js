// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let result = weight / height ** 2
  
  switch(true) {
      case result <= 18.5:
        return "Underweight";
      break;
      case result <= 25.0:
        return "Normal";
      break;
      case result <= 30.0:
        return "Overweight";
      break;
      default:
        return "Obese";
      break;
  }
  
}

