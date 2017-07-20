/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

//output a number
//input an array of numbers
//constraints Solved in O(n) time with O(1) memory
//edge cases a single arry item will count as a contiguous sum
var sumArray = function(array) {
  //declare max sum
  var maxSum;
  //declare sum
  var sum;

  //iterate through the array
  for (var i = 0; i < array.length; i++) {
    //if the max sum is undefined
    if (maxSum === undefined) {
      //set the max sum equal to the current value
      maxSum = array[i];
      //set the sum equal to the current value
      sum = array[i];
    } else {
      //if the current number is greater than the current number plus the sum
      if (array[i] > array[i] + sum) {
        //set the sum equal to the current number
        sum = array[i];
      } else {
        //add the current number to the sum
        sum += array[i];
      }
      //if the max sum is less than the sum
      if (maxSum < sum) {
        //update the max sum with sum
        maxSum = sum;
      }
    }
  }

  //return max sum
  return maxSum;
};
