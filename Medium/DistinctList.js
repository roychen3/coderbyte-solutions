/*
 * CODERBYTE DISTINCT LIST CHALLENGE
 *
 * Problem Statement
 * Have the function DistinctList(arr) take the array of numbers
 * stored in arr and determine the total number of duplicate
 * entries. For example if the input is [1, 2, 2, 2, 3] then
 * your program should output 2 because there are two duplicates
 * of one of the elements.
 *
 * Examples
 * Input 1: [0,-2,-2,5,5,5]
 * Output 1: 3
 *
 * Input 2: [100,2,101,4]
 * Output 2: 0
 *
 */

// solution 1
function DistinctList(arr) {
  return arr.length - [...new Set(arr)].length;
}

// solution 2
function DistinctList(arr) {
  // Sort the array to make it easier to find duplicates
  arr.sort((a, b) => a - b);

  let duplicates = 0;
  let i = 0;

  // Traverse through the sorted array to find duplicates
  while (i < arr.length - 1) {
    if (arr[i] === arr[i + 1]) {
      duplicates += 1;
      i++;
    } else {
      i++;
    }
  }

  return duplicates;
}

// Test cases
console.log(DistinctList([1, 2, 2, 2, 3])); // Output: 2
console.log(DistinctList([0, -2, -2, 5, 5, 5])); // Output: 3
console.log(DistinctList([100, 2, 101, 4])); // Output: 0
console.log(DistinctList([-1, 0, 0, 22, 33, 33, 33, 444, 555, 555, 555, 555])); // Output: 6
