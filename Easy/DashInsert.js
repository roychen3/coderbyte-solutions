/*
 * CODERBYTE DASH INSERT CHALLENGE
 *
 * Problem Statement
 * Have the function DashInsert(str) insert dashes ('-')
 * between each two odd numbers in str. For example: if str is
 * 454793 the output should be 4547-9-3. Don't count zero as an
 * odd number.
 *
 * Examples
 * Input 1: 99946
 * Output 1: 9-9-946
 *
 * Input 2: 56730
 * Output 2: 567-30
 */

function DashInsert(str) {
  const isOdd = (num) => parseInt(num) % 2 !== 0;

  let result = '';
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const next = str[i + 1];

    result += current;

    if (next !== undefined && current !== '0' && next !== '0') {
      if (isOdd(current) && isOdd(next)) {
        result += '-';
      }
    }
  }

  return result;
}

// Test cases
console.log(DashInsert('454793')); // Output: 4547-9-3
console.log(DashInsert('99946')); // Output: 9-9-946
console.log(DashInsert('56730')); // Output: 567-30
console.log(DashInsert('21305040687')); // Output: 21-3050406*87
