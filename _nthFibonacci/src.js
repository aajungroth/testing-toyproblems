/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

var nthFibonacci = function (n) {
  //create an object that holds solutions
  var solutions = {};
  var solution = 0;

  for (var i = 0; i <= n; i++) {
    if (i === 0) {
      solution = 0;
    } else if (i === 1) {
      solution = 1;
    } else {
      solution = solutions[i - 1] + solutions[i - 2];
    }
    solutions[i] = solution;
  }
  return solution;
};
