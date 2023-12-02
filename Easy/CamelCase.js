/*
 * CODERBYTE CAMEL CASE CHALLENGE
 *
 * Problem Statement
 * Have the function CamelCase(str) take the str parameter being
 * passed and return it in proper camel case format where the
 * first letter of each word is capitalized (excluding the first
 * letter). The string will only contain letters and some
 * combination of delimiter punctuation characters separating
 * each word.
 *
 * For example: if str is "BOB loves-coding" then your program
 *  should return the string bobLovesCoding.
 *
 * Examples
 * Input 1: "cats AND*Dogs-are Awesome"
 * Output 1: catsAndDogsAreAwesome
 *
 * Input 2: "a b c d-e-f%g"
 * Output 2: aBCDEFG
 *
 */

function CamelCase(str) {
  const words = str.split(/[^\w]+/);

  for (let i = 0; i < words.length; i++) {
    if (i !== 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    } else {
      words[i] = words[i].toLowerCase();
    }
  }

  return words.join('');
}

// Test cases
console.log(CamelCase('BOB loves-coding')); // Output: bobLovesCoding
console.log(CamelCase('cats AND*Dogs-are Awesome')); // Output: catsAndDogsAreAwesome
console.log(CamelCase('a b c d-e-f%g')); // Output: aBCDEFG
