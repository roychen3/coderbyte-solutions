/*
 * CODERBYTE LONGEST CONSECUTIVE CHALLENGE
 *
 * Problem Statement
 * Have the function LongestConsecutive(arr) take the array of
 * positive integers stored in arr and return the length of the
 * longest consecutive subsequence (LCS).
 * An LCS is a subset of the original list where the numbers
 * are in sorted order, from lowest to highest, and are in a
 * consecutive, increasing order. The sequence does not need to
 * be contiguous and there can be several different subsequences
 *
 * For example: if arr is [4, 3, 8, 1, 2, 6, 100, 9] then a few
 * consecutive sequences are [1, 2, 3, 4], and [8, 9].
 * For this input, your program should return 4 because that is
 * the length of the longest consecutive subsequence.
 *
 * If there are less than four numbers in the array your program
 * should return the sum of all the numbers in the array.
 *
 * Examples
 * Input 1: [6, 7, 3, 1, 100, 102, 6, 12]
 * Output 1: 2
 *
 * Input 2: [5, 6, 1, 2, 8, 9, 7]
 * Output 2: 5
 *
 */

function LongestConsecutive(arr) {
  if (arr.length < 4) {
    return arr.reduce((sum, num) => sum + num, 0);
  }

  const uniqueNumbers = new Set(arr);
  let maxSequenceLength = 0;

  for (const num of uniqueNumbers) {
    if (!uniqueNumbers.has(num - 1)) {
      let forwardNum = num + 1;
      while (uniqueNumbers.has(forwardNum)) {
        forwardNum++;
      }
      maxSequenceLength = Math.max(maxSequenceLength, forwardNum - num);
    }
  }

  return maxSequenceLength;
}

// Test cases
console.log(LongestConsecutive([4, 3, 8, 1, 2, 6, 100, 9])); // Output: 4
console.log(LongestConsecutive([6, 7, 3, 1, 100, 102, 6, 12])); // Output: 2
console.log(LongestConsecutive([5, 6, 1, 2, 8, 9, 7])); // Output: 5
