/*
 * CODERBYTE BITWISE ONE CHALLENGE
 *
 * Problem Statement
 * Have the function BitwiseOne(strArr) take the array of
 * strings stored in strArr, which will only contain two
 * strings of equal length that represent binary numbers, and
 * return a final binary string that performed the bitwise
 * OR operation on both strings. A bitwise OR operation places
 * a 0 in the new string where there are zeroes in both binary
 * strings, otherwise it places a 1 in that spot.
 * For example: if strArr is ["1001", "0100"] then your program
 * should return the string "1101"
 *
 * Examples
 * Input 1: ["100", "000"]
 * Output 1: 100
 *
 * Input 2: ["00011", "01010"]
 * Output 2: 01011
 *
 */

function BitwiseOne(strArr) {
  const binary1 = strArr[0];
  const binary2 = strArr[1];
  let result = '';

  for (let i = 0; i < binary1.length; i++) {
    result += binary1[i] === '1' || binary2[i] === '1' ? '1' : '0';
  }

  return result;
}

// Test cases
console.log(BitwiseOne(['1001', '0100'])); // Output: 1101
console.log(BitwiseOne(['100', '000'])); // Output: 100
console.log(BitwiseOne(['00011', '01010'])); // Output: 01011
