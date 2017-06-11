/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

//output the index of the target if it exits, otherwise null
//input a sorted array with no duplicates that has been
  //rotated and a target value
//contraints logarithmic time complexity
//edge cases it should be able to handle arrays that are
  //sorted, but skip values
var rotatedArraySearch = function (rotated, target) {
  //save off the orginal length for later
  var rotatedLength = rotated.length;
  //append the rotated array to itself
  rotated = rotated.concat(rotated);
  //find the midpoint
  var minIndex = 0;
  var maxIndex = rotated.length - 1
  var currentIndex = Math.floor(maxIndex / 2);
  var targetIndex;

  //inner function
  var findTarget = function() {
    //base cases
    //if the midpoint equals the target
    if (rotated[currentIndex] === target) {
      //return the currentIndex
      return currentIndex;
    //else if the currentIndex equals the max or min index
    } else if ((currentIndex === maxIndex) || (currentIndex === minIndex)) {
      //return null
      return null;
    //recursive cases
    //else if the midpoint's value is greater than the target
    } else if (rotated[currentIndex] > target) {
      //update the maxpoint to the currentindex
      maxIndex = currentIndex;
      //calcuate a new midpoint between
        //the current and midpoint's value
      currentIndex -= Math.floor((currentIndex - minIndex) / 2);
      //recuse on the new index postions
      return findTarget();
    //else if the midpoint's value is less than the target
    } else {
      //update the min index to the current index
      minIndex = currentIndex;
      //calculate a new midpoint between
        //the max and current indexes
      currentIndex += Math.floor((maxIndex - currentIndex) / 2);
      //recurse on the new index positons
      return findTarget();
    }
  }
  //Get the target index and adjust as needed
  targetIndex = findTarget();
  if ((targetIndex !== null) && (targetIndex >= rotatedLength)) {
    targetIndex -= rotatedLength;
  }
  //return the result of the inner funtion
  return targetIndex;
};
