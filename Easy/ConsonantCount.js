/*
 * CODERBYTE CONSONANT COUNT CHALLENGE
 *
 * Problem Statement
 * Have the function ConsonantCount(str) take the str string
 * parameter being passed and return the number of consonants
 * the string contains.
 *
 * Examples
 * Input 1: "Hello World"
 * Output 1: 7
 *
 * Input 2: "Alphabets"
 * Output 2: 6
 *
 */

function ConsonantCount(str) {
  const vowelRegex = /[aeiouAEIOU]/g;
  const consonantsStr = str.replace(vowelRegex, '').replace(/[^a-zA-Z]/g, '');
  return consonantsStr.length;
}

// Test cases
console.log(ConsonantCount('Hello World')); // Output: 7
console.log(ConsonantCount('Alphabets')); // Output: 6
console.log(ConsonantCount('aeiouAEIOU bcdfghjklmnpqrstvwxyz')); // Output: 21
console.log(
  ConsonantCount('bcdfghjklmnpqrstvwxyz_aeiouAEIOU BCDFGHJKLMNPQRSTVWXYZ')
); // Output: 42
