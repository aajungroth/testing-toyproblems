/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Important note:
 *   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
 *   the number of *rows* and n is the number of *columns*. So an [i][j] address in a matrix
 *   will be i places down, and j places over. This usually matches the way arrays are
 *   addressed in code, but keep in mind that it differs from use in geometry and computer
 *   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

//output a NxN matrix rotated 90 degress clock wise
//input a NxN matrix
//constraints none stated
//edge cases should handle any values in the arrays
var rotateMatrix = function(matrix, direction) {
  var rotatedMatrix = [];
  var rotatedRow = [];

  //if matrix is 0x0
  if (matrix.length <= 0) {
    return rotatedMatrix;
  }

  //rotate counter clockwise
  if (direction === -1) {
    //iterate through the matrix by column starting at the first column
    for (var j = matrix[0].length - 1; j >= 0; j--) {
      //iterate throught the matrix by row starting at the last row
      for (var i = 0; i < matrix.length; i++) {
        //push the current array value onto the rotated row
        rotatedRow.push(matrix[i][j]);
      }
      //push the rotatedRow onto the rotatedMatrix
      rotatedMatrix.push(rotatedRow);
      //reset the rotatedRow
      rotatedRow = [];
    }
    return rotatedMatrix;
  }

  //iterate through the matrix by column starting at the first column
  for (var j = 0; j < matrix[0].length; j++) {
    //iterate throught the matrix by row starting at the last row
    for (var i = matrix.length - 1; i >= 0; i--) {
      //push the current array value onto the rotated row
      rotatedRow.push(matrix[i][j]);
    }
    //push the rotatedRow onto the rotatedMatrix
    rotatedMatrix.push(rotatedRow);
    //reset the rotatedRow
    rotatedRow = [];
  }
  return rotatedMatrix;
};
