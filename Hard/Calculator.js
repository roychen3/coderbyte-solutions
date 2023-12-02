/*
 * CODERBYTE CALCULATOR CHALLENGE
 *
 * Problem Statement
 * Have the function Calculator(str) take the str parameter
 * being passed and evaluate the mathematical expression within
 * in. For example, if str were "2+(3-1)*3" the output should
 * be 8. Another example: if str were "(2-0)(6/2)" the output
 * should be 6. There can be parenthesis within the string so
 * you must evaluate it properly according to the rules of
 * arithmetic.
 * The string will contain the operators: +, -, /, *, (, and ).
 * If you have a string like this: #/#*# or #+#(#)/#, then
 * evaluate from left to right. So divide then multiply, and
 * for the second one multiply, divide, then add.
 * The evaluations will be such that there will not be any
 * decimal operations, so you do not need to account for
 * rounding and whatnot.
 *
 * Examples
 * Input 1: "6*(4/2)+3*1"
 * Output 1: 15
 *
 * Input 2: "6/3-1"
 * Output 2: 1
 *
 */

function Calculator(str) {
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  };

  const numbersStack = [];
  const operatorsStack = [];

  const calculate = () => {
    const op = operatorsStack.pop();
    const b = numbersStack.pop();
    const a = numbersStack.pop();
    numbersStack.push(operators[op](a, b));
  };

  const tokens = str.match(/(\d+|[\+\-\*\/\(\)])/g);

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (/\d+/.test(token)) {
      if (/\)/g.test(tokens[i - 1])) {
        operatorsStack.push('*');
      }
      numbersStack.push(parseFloat(token));
    } else if (token === '(') {
      if (/(\d+|[\)])/g.test(tokens[i - 1])) {
        operatorsStack.push('*');
      }
      operatorsStack.push(token);
    } else if (token === ')') {
      while (operatorsStack[operatorsStack.length - 1] !== '(') {
        calculate();
      }
      operatorsStack.pop();
    } else {
      while (
        operatorsStack.length > 0 &&
        precedence[operatorsStack[operatorsStack.length - 1]] >=
          precedence[token]
      ) {
        calculate();
      }
      operatorsStack.push(token);
    }
  }

  while (operatorsStack.length > 0) {
    calculate();
  }

  return numbersStack.pop();
}

// Test cases
console.log(Calculator('2*((2+1)*(1+1)((1+1-1)*2)+2)')); // Output: 28
console.log(Calculator('2+(3-1+1)*3')); // Output: 11
console.log(Calculator('2+(3-1)*3')); // Output: 8
console.log(Calculator('(2-0)2(6/2)')); // Output: 12
console.log(Calculator('(2-0)(6/2)')); // Output: 6
console.log(Calculator('6*(4/2)+3*1')); // Output: 15
console.log(Calculator('6/3-1')); // Output: 1
