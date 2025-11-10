// Write a function that returns the total surface area and volume of a box.

// The given input will be three positive non-zero integers: width, height, and depth.

// The output will be language dependant, so please check sample tests for the corresponding data type, 
// (list, tuple, struct, query, etcetera).

function getSize(w, h, d) {

  let area = 2 * (w * h + w * d + h * d)
  let volume = w * h * d

  return [area, volume]

}
