/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

//output the largest number, will splice it from the array
  //array will be mutated as a result
//input an array of numbers
//constraints linear time
//edge cases, will never be given an empty array,
  //only given array of numbers
var findLargest = function(array) {
  var max;
  var maxIndex;

  //iterate through the array
  for (var i = 0; i < array.length; i++) {
    //if the max is undefined
      //or if the current element is larger than the max
     if ((max === undefined) || (Math.abs(array[i]) > max)) {
      //update the max
      max = Math.abs(array[i]);
      //update the max index
      maxIndex = i;
    }
  }
  //return the value at the max index by splicing
  return Math.abs(array.splice(maxIndex, 1));
};

//output the largest product of any three numbers in the array as a number
//input an array of numbers
//constraints none stated
//edge cases empty array I will return 1,
  //negative numbers will be taken into account
  //in case of less than three numbers given
    //I will multiply the numbers that are given
var largestProductOfThree = function(array) {
  var product = 1;
  var largest = 0;

  //if the array length is three or less
  if (array.length <= 3) {
    //iterate on the array once
    for (var i = 0; i < array.length; i++) {
      //multiple the numbers together
      product *= array[i];
    }
    //return the product
    return product;
  }

  //iterate on the array three times
  for (i = 0; i < 3; i++) {
    //find the largest number
    //remove the number from the array
    largest = findLargest(array);
    //multiply it with the product
    product *= largest;
  }
  //return the product
  return product;
};

console.log(largestProductOfThree([2, 1, 3, 7]));
