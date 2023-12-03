/*
 * CODERBYTE FIND INTERSECTION CHALLENGE
 *
 * Problem Statement
 * Have the function FindIntersection(strArr) read the array of
 * strings stored in strArr which will contain 2 elements: the
 * first element will represent a list of comma-separated
 * numbers sorted in ascending order, the second element will
 * represent a second list of comma-separated numbers
 * (also sorted).
 *
 * Your goal is to return a comma-separated string containing
 * the numbers that occur in elements of strArr in sorted order.
 * If there is no intersection, return the string false.
 *
 * Examples
 * Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
 * Output: 1,4,13
 *
 * Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
 * Output: 1,9,10
 *
 */

function FindIntersection(strArr) {
  const arr1 = strArr[0].split(', ').map(Number);
  const arr2 = strArr[1].split(', ').map(Number);
  const set = new Set();
  let idx1 = 0;
  let idx2 = 0;
  while (idx1 < arr1.length && idx2 < arr2.length) {
    const num1 = arr1[idx1];
    const num2 = arr2[idx2];

    if (num1 < num2) {
      idx1++;
    } else if (num1 > num2) {
      idx2++;
    } else {
      set.add(num1);
      idx1++;
      idx2++;
    }
  }

  return Array.from(set, String);
}

// Test cases
console.log(FindIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'])); // Output: 1,4,13
console.log(FindIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10'])); // Output: 1,9,10
