/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

//output a boolean
//input a 2-dimensional array and the count of numbers
//constraints none
//edge cases
var isInnerMatrix = function(matrix, numberCount) {
  var countLengths = 0;

  //iterate through the array of arrays
  for (var i = 0; i < matrix.length; i++) {
    //count the lengths of each array
    countLengths += matrix[i].length;
  }
  //if the count of numbers is less than the lengths
  if (numberCount < countLengths) {
    //continue to iterate on matrices return true
    return true;
  }
  return false;
};

//output a 2-dimensional array
//input a 2-dimensional array
//constraints do not mutate the input
//edge cases
var getInnerMatrix = function(matrix) {
  //create a new array of arrays
  var innerMatrix = [];
  var temp = [];

  //iterate from the second array to the second to last array
  for (var i = 1; i < matrix.length - 1; i++) {
    //iterate from the second number to the second to last number
    for (var j = 1; j < matrix[i].length - 1; j++) {
      //save off the numbers in the array of arrays
      temp.push(matrix[i][j]);
    }
    innerMatrix.push(temp);
    temp = [];
  }
  //return the new array of arrays
  return innerMatrix;
};

//output an array of numbers
//input a 2-dimensional array
//constraints the array must be traversed in
  //a spiral from the upper left ot the center
//edge cases mxn matrixs
var spiralTraversal = function(matrix) {
  //declare an object for storing indexes of visited numbers
  var visited = {};
  //declare an array of numbers
  var result = [];
  //iteraters
  var i = 0;
  var j = 1;
  var k = matrix[matrix.length - 1].length - 2;
  var m = matrix.length - 2;

  //iterate from position zero in array 0 to length - 1 or a visited number
  while ((i < matrix[0].length) && (visited['0, ' + i] !== true)) {
    //add the value to the array of numbers
    result.push(matrix[0][i]);
    //add the indexes to the object of visited numbers
    visited['0, ' + i] = true;
    i++;
  }
  //iterate from array 1 in position length - 1 to length -1 or a visited number
  while ((j < matrix.length) && (visited[j + ', ' + (matrix[j].length - 1)] !== true)) {
    //add the value to the array of numbers
    result.push(matrix[j][matrix[j].length - 1]);
    //add the indexes to the object of visited numbers
    visited[j + ', ' + (matrix[j].length - 1)] = true;
    j++;
  }
  //iterate from position length - 1 in array length - 1 to 0 or a visited number
  while ((k >= 0) && (visited[(matrix.length - 1) + ', ' + k] !== true)) {
    //add the value to the array of numbers
    result.push(matrix[matrix.length - 1][k]);
    //add the indexes to the object of visited numbers
    visited[(matrix.length - 1) + ', ' + k] = true;
    k--;
  }
  //iterate from array length - 2 in position 0 to array 1 or a visited number
  while ((m >= 0) && (visited[m + ', 0'] !== true)) {
    //add the value to the array of numbers
    result.push(matrix[m][0]);
    //add the indexes to the object of visited numbers
    visited[m + ', 0'] = true;
    m--;
  }
  //if there is an inner matrix, call is isInnerMatrix
  if (isInnerMatrix(matrix, result.length)) {
    //strip out the inner matrix, call is getInnerMatrix and save result
    var innerMatrix = getInnerMatrix(matrix);
    //recurse on the inner matrix, call spiralTraversal
    var innerMatrixResult = spiralTraversal(innerMatrix);

    //add the result to the array of numbers
    result = result.concat(innerMatrixResult);
  }
  //return the array of numbers
  return result;
};
