/*
 * CODERBYTE AB CHECKS CHALLENGE
 *
 * Problem Statement
 * Have the function ABCheck(str) take the str parameter being
 * passed and return the string true if the characters a and b
 * are separated by exactly 3 places anywhere in the string at
 * least once (ie. "lane borrowed" would result in true because
 * there is exactly three characters between a and b).
 * Otherwise return the string false.
 *
 * Examples
 * Input 1: after badly
 * Output 1: false
 *
 * Input 2: Laura sobs
 * Output 2: true
 * 
 */

function ABCheck(str) {
  return /a...b/.test(str) || /b...a/.test(str);
}

// Test cases
console.log(ABCheck('lane borrowed')); // Output: true
console.log(ABCheck('after badly')); // Output: false
console.log(ABCheck('Laura sobs')); // Output: true
