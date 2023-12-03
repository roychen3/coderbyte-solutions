/*
 * CODERBYTE MAX SUBARRAY CHALLENGE
 *
 * Problem Statement
 * Have the function MaxSubarray(arr) take the array of numbers
 * stored in arr and determine the largest sum that can be
 * formed by any contiguous subarray in the array.
 * For example, if arr is [-2, 5, -1, 7, -3] then your program
 * should return 11 because the sum is formed by the subarray
 * [5, -1, 7]. Adding any element before or after this subarray
 * would make the sum smaller.
 *
 * Examples
 * Input 1: [1, -2, 0, 3]
 * Output 1: 3
 *
 * Input 2: [3, -1, -1, 4, 3, -1]
 * Output 2: 8
 *
 */

// solutions 1
function MaxSubarray(arr) {
  let maxEndingHere = arr[0];
  let maxSoFar = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// solutions 2
function MaxSubarray(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > 0) {
      arr[i] += arr[i - 1];
    }
  }
  return Math.max(...arr);
}
// Test cases
console.log(MaxSubarray([-2, 5, -1, 7, -3])); // Output: 11
console.log(MaxSubarray([1, -2, 0, 3])); // Output: 3
console.log(MaxSubarray([3, -1, -1, 4, 3, -1])); // Output: 8
console.log(MaxSubarray([2, -1, -1, -1, 1, 1, 1, 1, -1])); // Output: 4
console.log(MaxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(MaxSubarray([5, 4, -1, 7, 8])); // Output: 23
