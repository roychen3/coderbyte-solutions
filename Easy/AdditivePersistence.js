/*
 * CODERBYTE ADDITIVE PERSISTENCE CHALLENGE
 *
 * Problem Statement
 * Have the function AdditivePersistence(num) take the num
 * parameter being passed which will always be a positive
 * integer and return its additive persistence which is the
 * number of times you must add the digits in num until you
 * reach a single digit. For example: if num is 2718 then your
 * program should return 2
 * because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
 *
 * Examples
 * Input 1: 4
 * Output 1: 0
 *
 * Input 2: 19
 * Output 2: 2
 *
 */

function AdditivePersistence(num) {
  let count = 0;

  while (num >= 10) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
    count++;
  }

  return count;
}

// Test cases
console.log(AdditivePersistence(2718)); // Output: 2
console.log(AdditivePersistence(4)); // Output: 0
console.log(AdditivePersistence(19)); // Output: 2
console.log(AdditivePersistence(33)); // Output: 1
console.log(AdditivePersistence(1000000001)); // Output: 1
