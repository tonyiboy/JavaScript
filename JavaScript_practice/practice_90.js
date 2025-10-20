// Write function parseF which takes an input and returns a number or 
// null if conversion is not possible. The input can be one of many different types so be aware.


function parseF(s) {
  if (s === null) return 0;
  if (typeof s === "number") return s;
  if (typeof s !== "string") return null;

  const result = Number(s);
  return Number.isNaN(result) ? null : result;
}


