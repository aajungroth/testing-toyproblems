/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

//output the first number that occures an even number of times
//input an array of numbers
//constraints none stated
//edge cases return null if no number occures an even number of times
var evenOccurrence = function(arr) {
  var occurences = {};

  //iterate through the array
  for (var i = 0; i < arr.length; i++) {
    //if a number has occured
    if (occurences.hasOwnProperty(arr[i])) {
      //increase its count in the occurences object by 1
      occurences[arr[i]]++;
    } else {
      //set the count of the new number in the occurences object to 1
      occurences[arr[i]] = 1;
    }
  }
  //iterate through the array
  for (i = 0; i < arr.length; i++) {
    //if the current number's count is even
    if (occurences[arr[i]] % 2 === 0) {
      //return the number
      return arr[i];
    }
  }
  return null;
};
