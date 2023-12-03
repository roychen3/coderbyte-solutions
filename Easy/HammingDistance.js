/*
 * CODERBYTE HAMMING DISTANCE CHALLENGE
 *
 * Problem Statement
 * Have the function HammingDistance(strArr) take the array of
 * strings stored in strArr, which will only contain two strings
 * of equal length and return the Hamming distance between them.
 * The Hamming distance is the number of positions where the
 * corresponding characters are different.
 * For example: if strArr is ["coder", "codec"] then your
 * program should return 1. The string will always be of equal
 * length and will only contain lowercase characters from the
 * alphabet and numbers.
 *
 * Examples
 * Input 1: ["10011", "10100"]
 * Output 1: 3
 *
 * Input 2: ["helloworld", "worldhello"]
 * Output 2: 8
 *
 */

function HammingDistance(strArr) {
  const [str1, str2] = strArr;
  let distance = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      distance++;
    }
  }

  return distance;
}

// Test cases
console.log(HammingDistance(['coder', 'codec'])); // Output: 1
console.log(HammingDistance(['10011', '10100'])); // Output: 3
console.log(HammingDistance(['helloworld', 'worldhello'])); // Output: 8
