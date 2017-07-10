/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

//output the number of unique paths from the top left to the bottom right
//input the size n of the nxn board, an nxn array of false values,
  //an i counter and a j counter
//constraints none stated
//edge cases a 0x0 board should return 0, a 1x1 board should return 1
var robotPaths = function(n, board, i, j) {
  if (board === undefined) {
    board = makeBoard(n);
  }
  if (i === undefined) {
    i = 0;
  }
  if (j === undefined) {
    j = 0;
  }
  //declare variable for total unique paths, initialze to zero
  var uniquePaths = 0;

  //Return zero when n is zero
  if (n === 0) {
    return uniquePaths;
  }
  //toggle the starting position so it won't be revisited
  board.togglePiece(i, j);

  //inner recursive function
  var findUniquePaths = function(i, j) {
    //base case if i and j equal n - 1
    if ((i === n - 1) && (j === n - 1)) {
      //increment total unique paths
      uniquePaths++;
    }
    //if i + 1 < n and i + 1, j has not been visited
    if ((i + 1 < n) && !(board.hasBeenVisited(i + 1, j))) {
      //toggle i + 1, j
      board.togglePiece(i + 1, j);
      //recurse on i + 1, j
      findUniquePaths(i + 1, j);
      //toggle i + 1, j
      board.togglePiece(i + 1, j);
    }
    //if i - 1 >= 0 and i - 1, j has not been visited
    if ((i - 1 >= 0) && !(board.hasBeenVisited(i - 1, j))) {
      //toggle i - 1, j
      board.togglePiece(i - 1, j);
      //recurse on i - 1, j
      findUniquePaths(i - 1, j);
      //toggle i - 1, j
      board.togglePiece(i - 1, j);
    }
    //if j + 1 < n and i, j + 1 has not been visited
    if ((j + 1 < n) && !(board.hasBeenVisited(i, j + 1))) {
      //toggle i, j + 1
      board.togglePiece(i, j + 1);
      //recurse on i, j + 1
      findUniquePaths(i, j + 1);
      //toggle i, j + 1
      board.togglePiece(i, j + 1);
    }
    //if j - 1 >= 0 and i, j - 1 has not been visited
    if ((j - 1 >= 0) && !(board.hasBeenVisited(i, j - 1))) {
      //toggle i, j - 1
      board.togglePiece(i, j - 1);
      //recurse on i, j - 1
      findUniquePaths(i, j - 1);
      //toggle i, j - 1
      board.togglePiece(i, j - 1);
    }
  }
  //call inner recursive function with i and j
  findUniquePaths(i, j);
  //return total unique paths
  return uniquePaths;
};
