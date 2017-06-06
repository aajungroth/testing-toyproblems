/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

//output the index of the target in the array
//input an array of numbers and a target value
//constraints none stated
//edge cases if the array is empty or the target value
  //is not in the array it will return null
  //The array will only contain numbers and
    //the target will be a number
var binarySearch = function (array, target) {
  var previousIndex = 0;
  var calculatedIndex = 0;
  var currentIndex = 0;

  //initial calculated index
  calculatedIndex = Math.round((array.length - 1) / 2);
  //update currentIndex
  currentIndex = calculatedIndex;

  var findTarget = function() {
    if (array[currentIndex] === target) {
      return currentIndex;
    } else if (previousIndex === currentIndex) {
      return null;
    } else if (array[currentIndex] < target) {
      calculatedIndex = Math.round((currentIndex - 1) / 2);
      previousIndex = currentIndex;
      currentIndex = calculatedIndex;
      return findTarget();
    } else if (array[currentIndex] > target) {
      calculatedIndex = Math.round((array.length - currentIndex - 1) / 2);
      previousIndex = currentIndex;
      currentIndex += calculatedIndex;
      return findTarget();
    }
  }
  //return the result of the inner function
  return findTarget();
};
