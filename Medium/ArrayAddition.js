/*
 * CODERBYTE ARRAY ADDITION CHALLENGE
 *
 * Problem Statement
 * Have the function ArrayAddition(arr) take the array of
 * numbers stored in arr and return the string true if any
 * combination of numbers in the array (excluding the largest
 * number) can be added up to equal the largest number in the
 * array, otherwise return the string false.
 * For example: if arr contains [4, 6, 23, 10, 1, 3] the output
 * should return true because 4 + 6 + 10 + 3 = 23. The array
 * will not be empty, will not contain all the same elements,
 * and may contain negative numbers.
 *
 * Examples
 * Input 1: [5,7,16,1,2]
 * Output 1: false
 *
 * Input 2: [3,5,-1,8,12]
 * Output 2: true
 *
 */

function ArrayAddition(arr) {
  const maxNum = Math.max(...arr);
  if (maxNum <= 1) return false;
  const arrWithoutMax = arr.filter((num) => num !== maxNum);

  function canAddUp(target, nums) {
    if (target === 0) return true;
    if (target < 0 || nums.length === 0) return false;

    const currentNum = nums[0];
    const remainingNums = nums.slice(1);

    return (
      canAddUp(target - currentNum, remainingNums) ||
      canAddUp(target, remainingNums)
    );
  }

  return canAddUp(maxNum, arrWithoutMax);
}

// Test cases
console.log(ArrayAddition([4, 6, 23, 10, 1, 3])); // Output: true
console.log(ArrayAddition([5, 7, 16, 1, 2])); // Output: false
console.log(ArrayAddition([3, 5, -1, 8, 12])); // Output: true
console.log(ArrayAddition([1, 2])); // Output: false
console.log(ArrayAddition([0, 1, 1])); // Output: false
console.log(ArrayAddition([1, 1, 2])); // Output: true
console.log(ArrayAddition([0, -1, -2])); // Output: false
console.log(ArrayAddition([-2, -1, -3])); // Output: false
