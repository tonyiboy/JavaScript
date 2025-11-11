// There are pillars near the road. The distance between the pillars is the same and the width of the 
// pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters 
// (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
  
  let resultWidth = (numPill - 2) * width
  let resultGap = (numPill -1) * dist * 100

    

  if (numPill < 2) {
    return 0
  } else {
    return resultGap + resultWidth
  }
  
}
