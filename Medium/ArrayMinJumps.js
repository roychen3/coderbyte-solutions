/*
 * CODERBYTE ARRAY MIN JUMPS CHALLENGE
 *
 * Problem Statement
 * Have the function ArrayMinJumps(arr) take the array of
 * integers stored in arr, where each integer represents the
 * maximum number of steps that can be made from that position,
 * and determine the least amount of jumps that can be made to
 * reach the end of the array.
 * For example: if arr is [1, 5, 4, 6, 9, 3, 0, 0, 1, 3] then
 * your program should output the number 3 because you can reach
 * the end of the array from the beginning via the following
 * steps: 1 -> 5 -> 9 -> END or 1 -> 5 -> 6 -> END.
 * Both of these combinations produce a series of 3 steps.
 * And as you can see, you don't always have to take the maximum
 * number of jumps at a specific position, you can take less
 * jumps even though the number is higher.
 *
 * If it's not possible to reach the end of the array, return -1
 *
 * Examples
 * Input 1: [3, 4, 2, 1, 1, 100]
 * Output 1: 2
 *
 * Input 2: [1, 3, 6, 8, 2, 7, 1, 2, 1, 2, 6, 1, 2, 1, 2]
 * Output 2: 4
 *
 */

function ArrayMinJumps(arr) {
  if (arr.length <= 1 || arr[0] === 0) {
    return -1;
  }

  let maxReach = arr[0];
  let steps = arr[0];
  let jumps = 1;

  for (let i = 1; i < arr.length; i++) {
    if (i === arr.length - 1) {
      return jumps;
    }

    maxReach = Math.max(maxReach, i + arr[i]);
    steps--;

    if (steps === 0) {
      jumps++;
      if (i >= maxReach) {
        return -1;
      }
      steps = maxReach - i;
    }
  }

  return -1;
}

// Test cases
console.log(ArrayMinJumps([1, 5, 4, 6, 9, 3, 0, 0, 1, 3])); // Output: 3
console.log(ArrayMinJumps([3, 4, 2, 1, 1, 100])); // Output: 2
console.log(ArrayMinJumps([1, 3, 6, 8, 2, 7, 1, 2, 1, 2, 6, 1, 2, 1, 2])); // Output: 4
console.log(ArrayMinJumps([5, 3, 1, 1, 1, 1, 5])); // Output: 2
console.log(ArrayMinJumps([5, 4, 6, 7, 1, 1, 1, 1, 1, 1, 4])); // Output: 2
console.log(ArrayMinJumps([5, 0, 0, 0, 1, 0, 1, 4])); // Output: -1
console.log(ArrayMinJumps([0, 8, 7, 0, 1, 0, 1, 4])); // Output: -1
