/*
 * CODERBYTE COUNTING ANAGRAMS CHALLENGE
 *
 * Problem Statement
 * Have the function CountingAnagrams(str) take the str
 * parameter & determine how many anagrams exist in the string.
 * An anagram is a new word that is produced from rearranging
 * the characters in a different word.
 * For example: cars and arcs are anagrams.
 *
 * Your program should determine how many anagrams exist in a
 * given string and return the total number.
 *
 * For example: "cars are very cool so are arcs and my os"
 * then your program should return 2 because "cars" and "arcs"
 * form 1 anagram and "so" and "os" form a 2nd anagram.
 *
 * The word "are" occurs twice in the string but it isn't an
 * anagram because it is the same word just repeated.
 * The string will contain only spaces and lowercase letters,
 * no punctuation, numbers, or uppercase letters.
 *
 * Examples
 * Input 1: "aa aa odg dog gdo"
 * Output 1: 2
 *
 * Input 2: "a c b c run urn urn"
 * Output 2: 1
 *
 */

function isRepeatContinuously(str) {
  if (str.length < 2) return false;
  return new Set(str.split('')).size === 1;
}

function getAnagrams(words) {
  const wordMap = {};
  for (const word of words) {
    if (wordMap[word]) {
      wordMap[word] += 1;
    } else {
      wordMap[word] = 1;
    }
  }
  return Object.values(wordMap).filter((count) => count > 1);
}

function CountingAnagrams(str) {
  const words = str.split(' ');
  const repeatContinuouslyWords = words.filter((word) =>
    isRepeatContinuously(word)
  );
  const repeatContinuouslyAnagramsWords = getAnagrams(repeatContinuouslyWords);

  const uniqueSortedWords = [...new Set(words)].map((word) =>
    word.split('').sort().join('')
  );
  const uniqueAnagramsWords = getAnagrams(uniqueSortedWords);

  return repeatContinuouslyAnagramsWords.length + uniqueAnagramsWords.length;
}

// Test cases
console.log(CountingAnagrams('cars are very cool so are arcs and my os')); // Output: 2
console.log(CountingAnagrams('aa aa odg dog gdo')); // Output: 2
console.log(CountingAnagrams('a c b c run urn urn')); // Output: 1
