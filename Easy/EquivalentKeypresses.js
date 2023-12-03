/*
 * CODERBYTE EQUIVALENT KEYPRESSES CHALLENGE
 *
 * Problem Statement
 * Have the function EquivalentKeypresses(strArr) read the array
 * of strings stored in strArr which will contain 2 strings
 * representing two comma separated lists of keypresses.
 * Your goal is to return the string true if the keypresses
 * produce the same printable string and the string false if
 * they do not.
 *
 * A keypress can be either a printable character or a backspace
 * represented by -B.
 *
 * You can produce a printable string from such a string of
 * keypresses by having backspaces erase one preceding character
 *
 * For example: if strArr contains ["a,b,c,d", "a,b,c,c,-B,d"]
 * the output should return true because those keypresses
 * produce the same printable string.
 *
 * The array given will not be empty. The keypresses will only
 * contain letters from the alphabet and backspaces.
 *
 * Examples
 * Input 1: ["a,b,c,d", "a,b,c,d,-B,d"]
 * Output 1: true
 *
 * Input 2: ["c,a,r,d", "c,a,-B,r,d"]
 * Output 2: false
 *
 */

function EquivalentKeypresses(strArr) {
  function getPrintableString(str) {
    const stack = [];
    const strSlices = str.split(',');
    for (let i = 0; i < strSlices.length; i++) {
      if (strSlices[i] === '-B') {
        stack.pop();
      } else {
        stack.push(strSlices[i]);
      }
    }
    return stack.join('');
  }

  const str1 = getPrintableString(strArr[0]);
  const str2 = getPrintableString(strArr[1]);

  return str1 === str2;
}

// Test cases
console.log(EquivalentKeypresses(['a,b,c,d', 'a,b,c,c,-B,d'])); // Output: true
console.log(EquivalentKeypresses(['a,b,c,d', 'a,b,c,d,-B,d'])); // Output: true
console.log(EquivalentKeypresses(['c,a,r,d', 'c,a,-B,r,d'])); // Output: false
