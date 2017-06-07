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
  var minIndex = 0;
  var maxIndex = array.length - 1;
  var currentIndex = 0;

  //initial currentIndex
  currentIndex = Math.floor((maxIndex - minIndex) / 2);

  //inner function
  var findIndex = function() {
    //if the currentIndex's value equals the target
    if (array[currentIndex] === target) {
      //return the current index
      return currentIndex;
    }
    else if ((currentIndex === maxIndex) || (currentIndex === minIndex)) {
      return null;
    //else if currentIndex's value is less than the target
    } else if (array[currentIndex] < target) {
      minIndex = currentIndex;
      currentIndex += Math.ceil((maxIndex - currentIndex) / 2);
      return findIndex();
    //else if currentIndex's value is greater than the target
    } else if (array[currentIndex] > target) {
      maxIndex =  currentIndex;
      currentIndex = Math.floor((currentIndex - minIndex) / 2);
      return findIndex();
    }
  }
  //return the result of the inner function
  return findIndex();
};
