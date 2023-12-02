/*
 * CODERBYTE BASIC ROMAN NUMERALS CHALLENGE
 *
 * Problem Statement
 * Have the function BasicRomanNumerals(str) read str which
 * will be a string of Roman numerals. The numerals being used
 * are: I for 1, V for 5, X for 10, L for 50, C for 100, D for
 * 500 and M for 1000. In Roman numerals, to create a number
 * like 11 you simply add a 1 after the 10, so you get XI. But
 * to create a number like 19, you use the subtraction notation
 * which is to add an I before an X or V (or add an X before
 * an L or C). So 19 in Roman numerals is XIX.
 *
 * The goal of your program is to return the decimal equivalent
 * of the Roman numeral given. For example: if str is "XXIV"
 * your program should return 24
 *
 * Examples
 * Input 1: "IV"
 * Output 1: 4
 *
 * Input 2: XLVI
 * Output 2: 46
 *
 */

function BasicRomanNumerals(str) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const currentValue = romanNumerals[str[i]];
    const nextValue = romanNumerals[str[i + 1]];

    // Compare current and next values to determine addition or subtraction
    if (nextValue && currentValue < nextValue) {
      result += nextValue - currentValue;
      i++; // Move to the next Roman numeral after the subtraction
    } else {
      result += currentValue;
    }
  }

  return result;
}

// Test cases
console.log(BasicRomanNumerals('XIX')); // Output: 19
console.log(BasicRomanNumerals('XXIV')); // Output: 24
console.log(BasicRomanNumerals('IV')); // Output: 4
console.log(BasicRomanNumerals('XLVI')); // Output: 46
console.log(BasicRomanNumerals('I')); // Output: 1
console.log(BasicRomanNumerals('II')); // Output: 2
console.log(BasicRomanNumerals('III')); // Output: 3
console.log(BasicRomanNumerals('IV')); // Output: 4
console.log(BasicRomanNumerals('V')); // Output: 5
console.log(BasicRomanNumerals('VI')); // Output: 6
console.log(BasicRomanNumerals('VII')); // Output: 7
console.log(BasicRomanNumerals('VIII')); // Output: 8
console.log(BasicRomanNumerals('IX')); // Output: 9
console.log(BasicRomanNumerals('X')); // Output: 10
console.log(BasicRomanNumerals('XI')); // Output: 11
console.log(BasicRomanNumerals('XII')); // Output: 12
console.log(BasicRomanNumerals('XIII')); // Output: 13
console.log(BasicRomanNumerals('XIV')); // Output: 14
console.log(BasicRomanNumerals('XV')); // Output: 15
console.log(BasicRomanNumerals('XVI')); // Output: 16
console.log(BasicRomanNumerals('XVII')); // Output: 17
console.log(BasicRomanNumerals('XVIII')); // Output: 18
console.log(BasicRomanNumerals('XIX')); // Output: 19
console.log(BasicRomanNumerals('XX')); // Output: 20
console.log(BasicRomanNumerals('XXX')); // Output: 30
console.log(BasicRomanNumerals('XL')); // Output: 40
console.log(BasicRomanNumerals('L')); // Output: 50
console.log(BasicRomanNumerals('LX')); // Output: 60
console.log(BasicRomanNumerals('LXX')); // Output: 70
console.log(BasicRomanNumerals('LXXX')); // Output: 80
console.log(BasicRomanNumerals('XC')); // Output: 90
console.log(BasicRomanNumerals('XCIX')); // Output: 99
console.log(BasicRomanNumerals('C')); // Output: 100
console.log(BasicRomanNumerals('CI')); // Output: 101
console.log(BasicRomanNumerals('CII')); // Output: 102
console.log(BasicRomanNumerals('CXCIX')); // Output: 199
console.log(BasicRomanNumerals('CC')); // Output: 200
console.log(BasicRomanNumerals('CCC')); // Output: 300
console.log(BasicRomanNumerals('CD')); // Output: 400
console.log(BasicRomanNumerals('D')); // Output: 500
console.log(BasicRomanNumerals('DC')); // Output: 600
console.log(BasicRomanNumerals('DCC')); // Output: 700
console.log(BasicRomanNumerals('DCCC')); // Output: 800
console.log(BasicRomanNumerals('CM')); // Output: 900
console.log(BasicRomanNumerals('M')); // Output: 1000
console.log(BasicRomanNumerals('MCD')); // Output: 1400
console.log(BasicRomanNumerals('MCDXXXVII')); // Output: 1437
console.log(BasicRomanNumerals('MD')); // Output: 1500
console.log(BasicRomanNumerals('MDCCC')); // Output: 1800
console.log(BasicRomanNumerals('MCM')); // Output: 1900
console.log(BasicRomanNumerals('MM')); // Output: 2000
console.log(BasicRomanNumerals('MMM')); // Output: 3000
console.log(BasicRomanNumerals('MMMCCCXXXIII')); // Output: 3333
