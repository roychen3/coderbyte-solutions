/*
 * CODERBYTE ALPHABET SEARCHING CHALLENGE
 *
 * Problem Statement
 * Have the function AlphabetSearching(str) take the string
 * parameter being passed and return the string true if every
 * single letter of the English alphabet exists in the string,
 * otherwise return the string false.
 * For example: if str is "zacxyjbbkfgtbhdaielqrm45pnsowtuv"
 * then your program should return the string true because every
 * character in the alphabet exists in this string even though
 * some characters appear more than once.
 *
 * Examples
 * Input 1: abcdefghijklmnopqrstuvwxyyyy
 * Output 1: false
 *
 * Input 2: abc123456kmo
 * Output 2: false
 *
 */

function AlphabetSearching(str) {
  const alphabetArray = str.toLowerCase().match(/[a-z]/g);
  const alphabetLength = 26;
  if (!alphabetArray) return false;
  if (alphabetArray.length < alphabetLength) return false;

  const alphabet = new Set(alphabetArray);
  return alphabet.size === alphabetLength;
}

// Test cases
console.log(AlphabetSearching('abcdefghijklmnopqrstuvwxyz')); // Output: true
console.log(AlphabetSearching('zacxyjbbkfgtbhdaielqrm45pnsowtuv')); // Output: true
console.log(AlphabetSearching('a')); // Output: false
console.log(AlphabetSearching('21739821')); // Output: false
console.log(AlphabetSearching('abc123456kmo')); // Output: false
console.log(AlphabetSearching('abcdefghijklmnopqrstuvwxyyyy')); // Output: false
