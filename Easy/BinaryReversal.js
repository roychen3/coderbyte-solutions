/*
 * CODERBYTE BINARY REVERSAL CHALLENGE
 *
 * Problem Statement
 * Have the function BinaryReversal(str) take the str parameter
 * being passed, which will be a positive integer, take its
 * binary representation (padded to the nearest N * 8 bits),
 * reverse that string of bits, and then finally return the new
 * reversed string in decimal form. For example: if str is "47"
 * then the binary version of this integer is 101111 but we pad
 * it to be 00101111. Your program should reverse this binary
 * string which then becomes: 11110100 and then finally return
 * the decimal version of this string, which is 244.
 *
 * Examples
 * Input 1: "213"
 * Output 1: 171
 *
 * Input 2: "4567"
 * Output 2: 60296
 *
 */

function BinaryReversal(str) {
  let paddedBinaryRepresentation = (+str).toString(2);
  const octal = 8;
  while (paddedBinaryRepresentation.length % octal !== 0) {
    paddedBinaryRepresentation = '0' + paddedBinaryRepresentation;
  }
  const reversePaddedBinaryRepresentation = paddedBinaryRepresentation
    .split('')
    .reverse()
    .join('');
  return parseInt(reversePaddedBinaryRepresentation, 2);
}

// Test cases
console.log(BinaryReversal('47')); // Output: 244
console.log(BinaryReversal('213')); // Output: 171
console.log(BinaryReversal('4567')); // Output: 60296
