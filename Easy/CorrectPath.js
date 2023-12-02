/*
 * CODERBYTE CORRECT PATH CHALLENGE
 *
 * Problem Statement
 * Have the function CorrectPath(str) read the str parameter
 * being passed, which will represent the movements made in a
 * 5x5 grid of cells starting from the top left position. The
 * characters in the input string will be entirely composed
 * of: r, l, u, d, ?. Each of the characters stand for the
 * direction to take within the grid,
 * for example: r = right, l = left, u = up, d = down. Your goal
 * is to determine what characters the question marks should be
 * in order for a path to be created to go from the top left of
 * the grid all the way to the bottom right without touching
 * previously traveled on cells in the grid.
 *
 * For example: if str is "r?d?drdd" then your program should
 * output the final correct string that will allow a path to be
 * formed from the top left of a 5x5 grid to the bottom right.
 * For this input, your program should therefore return the
 * string rrdrdrdd. There will only ever be one correct path &
 * there will always be at least one question mark within the
 * input string.
 *
 * Examples
 * Input 1: "???rrurdr?"
 * Output 1: dddrrurdrd
 *
 * Input 2: "drdr??rrddd?"
 * Output 2: drdruurrdddd
 *
 */

function CorrectPath(str) {
  let limit = 0;
  while (true) {
    const route = [];
    const tracePos = [];

    let x = 1;
    let y = 1;
    let answer = 1;

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char === '?') {
        char = ['l', 'r', 'u', 'd'][Math.floor(Math.random() * 4)];
      }

      if (char === 'u') y -= 1;
      else if (char === 'd') y += 1;
      else if (char === 'r') x += 1;
      else if (char === 'l') x -= 1;

      if (tracePos.some((pos) => pos[0] === x && pos[1] === y)) {
        answer = 0;
        break;
      } else {
        tracePos.push([x, y]);
      }
      route.push(char);

      if (x === 0 || x === 6 || y === 0 || y === 6) {
        answer = 0;
        break;
      }
    }

    if (x === 5 && y === 5 && answer === 1) {
      return route.join('');
    }

    if (limit > 1000) break;
    limit++;
  }
}

// Test cases
console.log(CorrectPath('rrdrdrd?')); // Output: rrdrdrdd
console.log(CorrectPath('r?d?drdd')); // Output: rrdrdrdd
console.log(CorrectPath('???rrurdr?')); // Output: dddrrurdrd
console.log(CorrectPath('drdr??rrddd?')); // Output: drdruurrdddd
