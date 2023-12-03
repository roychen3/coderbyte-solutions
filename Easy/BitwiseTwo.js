/*
 * CODERBYTE BITWISE TWO CHALLENGE
 *
 * Problem Statement
 * Have the function BitwiseTwo(strArr) take the array of
 * strings stored in strArr, which will only contain two
 * strings of equal length that represent binary numbers, and
 * return a final binary string that performed the
 * bitwise AND operation on both strings. A bitwise AND
 * operation places a 1 in the new string where there is a 1 in
 * both locations in the binary strings, otherwise it places
 * a 0 in that spot.
 * For example: if strArr is ["10111", "01101"] then your
 * program should return the string "00101"
 *
 * Examples
 * Input 1: ["100", "000"]
 * Output 1: 000
 *
 * Input 2: ["10100", "11100"]
 * Output 2: 10100
 *
 */

function BitwiseTwo(strArr) {
  const binary1 = strArr[0];
  const binary2 = strArr[1];
  let result = '';

  for (let i = 0; i < binary1.length; i++) {
    result += binary1[i] === '1' && binary2[i] === '1' ? '1' : '0';
  }

  return result;
}

// Test cases
console.log(BitwiseTwo(['10111', '01101'])); // Output: 00101
console.log(BitwiseTwo(['100', '000'])); // Output: 000
console.log(BitwiseTwo(['10100', '11100'])); // Output: 10100
