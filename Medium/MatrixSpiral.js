/*
 * CODERBYTE MATRIX SPIRAL CHALLENGE
 *
 * Problem Statement
 * Have the function MatrixSpiral(strArr) read the array of
 * strings stored in strArr which will represent a 2D N matrix,
 * and your program should return the elements after printing
 * them in a clockwise, spiral order. You should return the
 * newly formed list of elements as a string with the numbers
 * separated by commas.
 *
 * For example: strArr is "[1, 2, 3]", "[4, 5, 6]", "[7, 8, 9]"
 * then this looks like the following 2D matrix:
 *                              1 2 3
 *                              4 5 6
 *                              7 8 9
 * So your program should return the elements of this matrix in
 * a clockwise, spiral order which is: 1,2,3,6,9,8,7,4,5
 *
 * Examples
 * Input 1: ["[1, 2]", "[10, 14]"]
 * Output 1: 1,2,14,10
 *
 * Input 2: ["[4, 5, 6, 5]", "[1, 1, 2, 2]", "[5, 4, 2, 9]"]
 * Output 2: 4,5,6,5,2,9,2,4,5,1,1,2
 *
 */

function MatrixSpiral(strArr) {
  const matrix = strArr.map((row) => JSON.parse(row));

  const result = [];
  let topRow = 0,
    bottomRow = matrix.length - 1,
    leftCol = 0,
    rightCol = matrix[0].length - 1;

  while (topRow <= bottomRow && leftCol <= rightCol) {
    // Print top row
    for (let i = leftCol; i <= rightCol; i++) {
      result.push(matrix[topRow][i]);
    }
    topRow++;

    // Print right column
    for (let i = topRow; i <= bottomRow; i++) {
      result.push(matrix[i][rightCol]);
    }
    rightCol--;

    if (topRow <= bottomRow) {
      // Print bottom row
      for (let i = rightCol; i >= leftCol; i--) {
        result.push(matrix[bottomRow][i]);
      }
      bottomRow--;
    }

    if (leftCol <= rightCol) {
      // Print left column
      for (let i = bottomRow; i >= topRow; i--) {
        result.push(matrix[i][leftCol]);
      }
      leftCol++;
    }
  }

  return result.join(',');
}

// Test cases
console.log(MatrixSpiral(['[1, 2]', '[10, 14]'])); // Output: 1,2,14,10
console.log(MatrixSpiral(['[4, 5, 6, 5]', '[1, 1, 2, 2]', '[5, 4, 2, 9]'])); // Output: 4,5,6,5,2,9,2,4,5,1,1,2
console.log(MatrixSpiral(['[1, 2, 3]', '[2, 3, 1]', '[1, 3, 2]'])); // Output: 1,2,3,1,2,3,1,2,3
console.log(
  MatrixSpiral([
    '[1, 2, 3, 4, 5, 6]',
    '[2, 3, 4, 5, 6, 1]',
    '[1, 2, 3, 4, 1, 2]',
    '[6, 1, 6, 5, 2, 3]',
    '[5, 6, 5, 4, 3, 4]',
    '[4, 3, 2, 1, 6, 5]',
  ])
); // Output: 1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6
