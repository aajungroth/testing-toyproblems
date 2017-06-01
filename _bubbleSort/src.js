/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency
var i;

// Feel free to add helper functions if needed.

//Time complexity with out optimizations
//0(n^2) because the sort iterates over the array for every element,
  //ie there is a for loop inside a for loop

//Time complexitly with extra credit optimization
//

var bubbleSort = function(array){
  var temp;
  var wasSwapped = true;

  //iterate through the array
  for (i = 0; i < array.length; i++) {
    //iterate through the array again
    if (wasSwapped === true ) {
      //if no swapping occurs in this loop then the function ends
      wasSwapped = false;
      for (var j = 0; j < array.length; j++) {
        //if the first number is less than the second
        if (array[i] < array[j]) {
          //swap the numbers
          //set temp equal to the first number
          temp = array[i];
          //overite the the first number with the second number
          array[i] = array[j];
          //over write the second number with temp
          array[j] = temp;
          //resets wasSwapped when the swapping happens
          wasSwapped = true;
        }
      }
    } else {
      break;
    }
  }
  return array;
};
