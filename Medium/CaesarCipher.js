/*
 * CODERBYTE CAESAR CIPHER CHALLENGE
 *
 * Problem Statement
 * Have the function CaesarCipher(str,num) take the str
 * parameter and perform a Caesar Cipher shift on it using the
 * num parameter as the shifting number. A Caesar Cipher works
 * by shifting each letter in the string N places in the
 * alphabet (in this case N will be num). Punctuation, spaces,
 * and capitalization should remain intact.
 * For example if the string is "Caesar Cipher" and num is 2
 * the output should be "Ecguct Ekrjgt".
 *
 * Examples
 * Input 1: "Hello" and num = 4
 * Output 1: Lipps
 *
 * Input 2: "abc" and num = 0
 * Output 2: abc
 *
 */

function CaesarCipher(str, num) {
  const alphabetLength = 26;

  const alphaStrUpp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const upperTest = /[A-Z]/;

  const alphaStrLow = 'abcdefghijklmnopqrstuvwxyz';
  const lowerTest = /[a-z]/;

  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (upperTest.test(str[i])) {
      const currentLetterIdx = alphaStrUpp.indexOf(str[i]);
      const newLetterIdx = (currentLetterIdx + num) % alphabetLength;
      result += alphaStrUpp[newLetterIdx];
    } else if (lowerTest.test(str[i])) {
      const currentLetterIdx = alphaStrLow.indexOf(str[i]);
      const newLetterIdx = (currentLetterIdx + num) % alphabetLength;
      result += alphaStrLow[newLetterIdx];
    } else {
      result += str[i];
    }
  }

  return result;
}

// Test cases
console.log(CaesarCipher('Caesar Cipher', 2)); // Output: Ecguct Ekrjgt
console.log(CaesarCipher('Hello', 4)); // Output: Lipps
console.log(CaesarCipher('abc', 0)); // Output: abc
console.log(CaesarCipher('zZ', 1)); // Output: aA
