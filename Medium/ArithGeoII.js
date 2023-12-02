/*
 * CODERBYTE ARITHMETC GEOMETRIC II CHALLENGE
 *
 * Problem Statement
 * Have the function ArithGeoII(arr) take the array of numbers
 * stored in arr and return the string "Arithmetic" if the
 * sequence follows an arithmetic pattern or return "Geometric"
 * if it follows a geometric pattern. If the sequence doesn't
 * follow either pattern return -1. An arithmetic sequence is
 * one where the difference between each of the numbers is
 * consistent, where as in a geometric sequence, each term after
 * the first is multiplied by some constant or common ratio.
 * Arithmetic example: [2, 4, 6, 8] and
 * Geometric example: [2, 6, 18, 54]. Negative numbers may be
 * entered as parameters, 0 will not be entered, and no array
 * will contain all the same elements.
 *
 * Examples
 * Input 1: new int[] {5,10,15}
 * Output 1: Arithmetic
 *
 * Input 2: new int[] {2,4,16,24}
 * Output 2: -1
 *
 */

function ArithGeoII(arr) {
  function isArithmetic(sequence) {
    const diff = sequence[1] - sequence[0];
    for (let i = 1; i < sequence.length - 1; i++) {
      if (sequence[i + 1] - sequence[i] !== diff) {
        return false;
      }
    }
    return true;
  }

  function isGeometric(sequence) {
    const ratio = sequence[1] / sequence[0];
    for (let i = 1; i < sequence.length - 1; i++) {
      if (sequence[i + 1] / sequence[i] !== ratio) {
        return false;
      }
    }
    return true;
  }

  if (isArithmetic(arr)) {
    return 'Arithmetic';
  } else if (isGeometric(arr)) {
    return 'Geometric';
  } else {
    return -1;
  }
}

// Test cases
console.log(ArithGeoII([5, 10, 15, 20, 25, 30])); // Output: "Arithmetic"
console.log(ArithGeoII([-4, -1, 2, 5, 8, 11])); // Output: "Arithmetic"
console.log(ArithGeoII([5, 10, 20, 40, 80, 160])); // Output: "Geometric"
console.log(ArithGeoII([-2, 4, -8, 16, -32, 64])); // Output: "Geometric"
console.log(ArithGeoII([2, 4, 16, 24])); // Output: -1
