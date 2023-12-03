/*
 * CODERBYTE MEAN MODE CHALLENGE
 *
 * Problem Statement
 * Have the function MeanMode(arr) take the array of numbers
 * stored in arr and return 1 if the mode equals the mean, 0 if
 * they don't equal each other (ie. [5, 3, 3, 3, 1] should
 * return 1 because the mode (3) equals the mean (3)).
 *
 * The array will not be empty, will only contain positive
 * integers, and will not contain more than one mode.
 *
 * Examples
 * Input 1: [1, 2, 3]
 * Output 1: 0
 *
 * Input 2: [4, 4, 4, 6, 2]
 * Output 2: 1
 *
 */

function calculateMean(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

function findMostFrequentNumber(arr) {
  const freqMap = {};
  let maxFreq = 0;
  let result = null;

  arr.forEach((num) => {
    freqMap[num] = (freqMap[num] || 0) + 1;
    if (freqMap[num] > maxFreq) {
      maxFreq = freqMap[num];
      result = num;
    }
  });

  return result;
}

function MeanMode(arr) {
  return calculateMean(arr) === findMostFrequentNumber(arr) ? 1 : 0;
}

// Test cases
console.log(MeanMode([5, 3, 3, 3, 1])); // Output: 1
console.log(MeanMode([1, 2, 3])); // Output: 0
console.log(MeanMode([4, 4, 4, 6, 2])); // Output: 1
