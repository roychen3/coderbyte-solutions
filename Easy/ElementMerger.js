/*
 * CODERBYTE ELEMENT MERGER CHALLENGE
 *
 * Problem Statement
 * Have the function ElementMerger(arr) take the array of
 * positive integers stored in arr and perform the following
 * algorithm: continuously get the difference of adjacent
 * integers to create a new array of integers, then do the same
 * for the new array until a single number is left and return
 * that number.
 *
 * For example: if arr is [4, 5, 1, 2, 7] then taking the
 * difference of each pair of elements produces the following
 * new array: [1, 4, 1, 5]. Then do the same for this new array
 * to produce [3, 3, 4] -> [0, 1] -> 1. So for this example your
 * program should return the number 1 because that is what's
 * left at the end.
 *
 * Examples
 * Input 1: [5, 7, 16, 1, 2]
 * Output 1: 7
 *
 * Input 2: [1, 1, 1, 2]
 * Output 2: 1
 *
 */

// solution 1
function ElementMerger(arr) {
  while (arr.length > 1) {
    const newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      newArr.push(Math.abs(arr[i] - arr[i + 1]));
    }
    arr = newArr;
  }
  return arr[0];
}

// solution 2
function ElementMerger(arr) {
  const resultArr = [];
  for (let i = 1; i < arr.length; i++) {
    resultArr.push(Math.abs(arr[i - 1] - arr[i]));
  }
  return resultArr.length > 1 ? ElementMerger(resultArr) : resultArr[0];
}

// Test cases
console.log(ElementMerger([4, 5, 1, 2, 7])); // Output: 1
console.log(ElementMerger([5, 7, 16, 1, 2])); // Output: 7
console.log(ElementMerger([1, 1, 1, 2])); // Output: 1
console.log(ElementMerger([1, 3, 5, 7, 9])); // Output: 0
console.log(ElementMerger([1, 2, 4, 7, 11, 16])); // Output: 0
console.log(ElementMerger([1, 2, 4, 8, 16, 32])); // Output: 1
console.log(ElementMerger([1, 2, 5, 12, 29, 70, 169])); // Output: 8
