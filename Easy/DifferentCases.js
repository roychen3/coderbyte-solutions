/*
 * CODERBYTE DIFFERENT CASES CHALLENGE
 *
 * Problem Statement
 * Have the function DifferentCases(str) take the str parameter
 * being passed and return it in upper camel case format where
 * the first letter of each word is capitalized. The string will
 * only contain letters and some combination of delimiter
 * punctuation characters separating each word.
 *
 * Examples
 * Input 1: "Daniel LikeS-coding"
 * Output 1: DanielLikesCoding
 *
 * Input 2: "cats AND*Dogs-are Awesome"
 * Output 2: CatsAndDogsAreAwesome
 *
 * Input 3: "a b c d-e-f%g"
 * Output 3: ABCDEFG
 *
 */

function DifferentCases(str) {
  const words = str.split(/[^\w]+/);
  return words
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

// Test cases
console.log(DifferentCases('Daniel LikeS-coding')); // Output: DanielLikesCoding
console.log(DifferentCases('cats AND*Dogs-are Awesome')); // Output: CatsAndDogsAreAwesome
console.log(DifferentCases('a b c d-e-f%g')); // Output: ABCDEFG
