/*
 * CODERBYTE CODELAND USERNAME VALIDATION CHALLENGE
 *
 * Problem Statement
 * Have the function CodelandUsernameValidation(str) take the
 * str parameter being passed and determine if the string is a
 * valid username according to the following rules:
 * 1. The username is between 4 and 25 characters.
 * 2. It must start with a letter.
 * 3. It can only contain letters, numbers, & underscore.
 * 4. It cannot end with an underscore character.
 * If the username is valid then your program should return the
 * string true, otherwise return the string false.
 *
 * Examples
 * Input 1: "aa_"
 * Output 1: false
 *
 * Input 2: "u__hello_world123"
 * Output 2: true
 *
 */

function CodelandUsernameValidation(str) {
  if (str.length < 4 || 25 < str.length) return false;

  const firstChar = str[0];
  if (!/[a-zA-Z]/g.test(firstChar)) return false;

  const lastChar = str[str.length - 1];
  if (lastChar === '_') return false;

  const middleString = str.slice(1, str.length - 1);
  if (!/^[a-zA-Z0-9_]+$/.test(middleString)) {
    return false;
  }

  return true;
}

// Test cases
console.log(CodelandUsernameValidation('a1')); // Output: false
console.log(CodelandUsernameValidation('abcdef12345678901234567890')); // Output: false
console.log(CodelandUsernameValidation('_u_world123')); // Output: false
console.log(CodelandUsernameValidation('1u_world123')); // Output: false
console.log(CodelandUsernameValidation('u_world123_')); // Output: false
console.log(CodelandUsernameValidation('u__hello-world123')); // Output: false
console.log(CodelandUsernameValidation('u__hello.world123')); // Output: false
console.log(CodelandUsernameValidation('u__hello_world123')); // Output: true
