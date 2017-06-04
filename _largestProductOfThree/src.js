/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

//Sorts the array from least to greatest, mutates input array
var sortArrayAscending = function(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
};

//output the largest product of any three numbers in the array as a number
//input an array of numbers
//constraints none stated
//edge cases empty array I will return 1,
  //negative numbers will be taken into account
  //in case of less than three numbers given
    //I will multiply the numbers that are given
var largestProductOfThree = function(array) {
  //sort the array
  sortArrayAscending(array);
  //get the last three numbers and the first two numbers
  var first = array[0];
  var second = array[1];
  var thirdFromLast = array[array.length - 3];
  var secondFromLast = array[array.length - 2];
  var last = array[array.length - 1];

  //if the first two numbers multiplied together are larger
  if ((first * second) > ( thirdFromLast * secondFromLast)) {
    //return the last number times the first two numbers
    return first * second * last;
  }
  //else
  else {
    //return the last three numbers times each other
    return thirdFromLast * secondFromLast * last;
  }
};
