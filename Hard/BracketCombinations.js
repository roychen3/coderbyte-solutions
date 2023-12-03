/*
 * CODERBYTE BRACKET COMBINATIONS CHALLENGE
 *
 * Problem Statement
 * Have the function BracketCombinations(num) read num which
 * will be an integer greater than or equal to zero, and return
 * the number of valid combinations that can be formed with num
 * pairs of parentheses.
 *
 * For example, if input is 3, then the possible combinations
 * of 3 pairs of parenthesis,
 * namely: ()()(), are ()()(), ()(()), (())(), ((())), & (()())
 *
 * There are 5 total combinations when the input is 3, so your
 * program should return 5.
 *
 * Examples
 * Input 1: 3
 * Output 1: 5
 *
 * Input 2: 2
 * Output 2: 2
 *
 */

function BracketCombinations(num) {
  const result = [];

  function generateCombinations(left, right, str) {
    if (str.length === num * 2) {
      result.push(str);
      return;
    }

    if (left < num) {
      generateCombinations(left + 1, right, str + '(');
    }

    if (right < left) {
      generateCombinations(left, right + 1, str + ')');
    }
  }

  generateCombinations(0, 0, '');
  return result.length;
}

// Test cases
console.log(BracketCombinations(0)); // Output: 1
console.log(BracketCombinations(1)); // Output: 1
console.log(BracketCombinations(2)); // Output: 2
console.log(BracketCombinations(3)); // Output: 5
console.log(BracketCombinations(4)); // Output: 14
console.log(BracketCombinations(5)); // Output: 42
console.log(BracketCombinations(6)); // Output: 132
console.log(BracketCombinations(7)); // Output: 429
console.log(BracketCombinations(8)); // Output: 1430
console.log(BracketCombinations(9)); // Output: 4862
console.log(BracketCombinations(10)); // Output: 16796
console.log(BracketCombinations(11)); // Output: 58786
console.log(BracketCombinations(12)); // Output: 208012

// !!note!!
// console.log(BracketCombinations(13)); // Output: 742900
// console.log(BracketCombinations(14)); // Output: 2674440
// console.log(BracketCombinations(15)); // Output: 9694845
// console.log(BracketCombinations(16)); // Output: 35357670
// console.log(BracketCombinations(17)); // Output: 129644790
// console.log(BracketCombinations(18)); // Output: 477638700
// console.log(BracketCombinations(19)); // Output: 1767263190
