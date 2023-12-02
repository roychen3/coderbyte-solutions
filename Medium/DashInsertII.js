/*
 * CODERBYTE DASH INSERT TWO CHALLENGE
 *
 * Problem Statement
 * Have the function DashInsertII(str) insert dashes ('-')
 * between each two odd numbers and insert asterisks ('*')
 * between each two even numbers in str.
 *
 * For example: if str is 4546793 the output should be
 * 454*67-9-3. Don't count zero as an odd or even number.
 *
 * Examples
 * Input 1: 99946
 * Output 1: 9-9-94*6
 *
 * Input 2: 56647304
 * Output 2: 56*6*47-304
 *
 */

function DashInsertII(str) {
  const isOdd = (num) => parseInt(num) % 2 !== 0;
  const isEven = (num) => parseInt(num) % 2 === 0;

  let result = '';
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const next = str[i + 1];

    result += current;

    if (next !== undefined && current !== '0' && next !== '0') {
      if (isEven(current) && isEven(next)) {
        result += '*';
      } else if (isOdd(current) && isOdd(next)) {
        result += '-';
      }
    }
  }

  return result;
}

// Test cases
console.log(DashInsertII('4546793')); // Output: 454*67-9-3
console.log(DashInsertII('99946')); // Output: 9-9-94*6
console.log(DashInsertII('56647304')); // Output: 56*6*47-304
console.log(DashInsertII('21305040687')); // Output: 21-3050406*87
