/*
 * CODERBYTE LARGEST FOUR CHALLENGE
 *
 * Problem Statement
 * Have the function LargestFour(arr) take the array of integers
 * stored in arr, and find the four largest elements and return
 * their sum.
 *
 * For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6] then the
 * four largest elements in this array are 6, 6, 4, and 5 and
 * the total sum of these numbers is 21, so your program should
 * return 21.
 *
 * If there are less than four numbers in the array your program
 * should return the sum of all the numbers in the array.
 *
 * Examples
 * Input 1: [1, 1, 1, -5]
 * Output 1: -2
 *
 * Input 2: [0, 0, 2, 3, 7, 1]
 * Output 2: 13
 *
 */

function LargestFour(arr) {
  arr.sort((a, b) => b - a);
  const largestFour = arr.slice(0, 4);

  return largestFour.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(LargestFour([4, 5, -2, 3, 1, 2, 6, 6])); // Output: 21
console.log(LargestFour([1, 1, 1, -5])); // Output: -2
console.log(LargestFour([0, 0, 2, 3, 7, 1])); // Output: 13