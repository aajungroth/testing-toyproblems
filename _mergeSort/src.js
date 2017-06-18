/**
 * Implement a function that sorts an array of numbers using the "mergesort" algorithm.
 *
 * Mergesort is an optimized sorting algorithm which is a common choice to implement `sort`
 * methods in standard libraries as an alternative to quicksort or heapsort. (For example,
 * Firefox's Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
 * Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)
 *
 * Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N
 * as a set of N "sublists" of length 1, which are considered to be sorted. Adjacent sublists are then
 * "merged" into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so
 * on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
 * after the first merge, and so on.)
 *
 * This can be implemented using either a recursive ("top-down") or an iterative ("bottom-up") approach.
 *
 * Illustration of an iterative approach:
 *
 *   Initial step: Input array is split into "sorted" sublists
 *   [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]
 *
 *   Merge step: Adjacent sublists are merged into sorted sublists
 *   [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]
 *
 *   Repeat merge step:
 *   [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]
 *
 *   Repeat merge step:
 *   [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]
 *
 *   Done! Return the sorted array:
 *   [1,2,3,4,4,7,9]
 * Illustration of a recursive approach:
 *
 *   1. Split the input array in half
 *   [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2
 *
 *   2. Both sides are sorted recursively:
 *   [4, 7, 4] -> [4, 4, 7]
 *   [3, 9, 1, 2] -> [1, 2, 3, 9]
 *
 *   3. Both halves are merged:
 *   [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]
 *
 *   Step 2 might seem a bit mystical - how do we sort both sides? The
 *   simple answer is that we use mergesort! After all, mergesort sorts
 *   arrays, right? We can test this on [4, 7, 4] by just following the
 *   steps above but imagining that [4, 7, 4] is the whole array, which
 *   is what happens when you call mergesort on it.
 *
 *   1. Split the input array in half
 *   [4, 7, 4] -> [4], [7, 4]
 *
 *   2. Both sides are sorted recursively:
 *   [4] -> [4]
 *   [7, 4] -> [4, 7]
 *
 *   3. Both halves are merged:
 *   [4], [4, 7] -> [4, 4, 7]
 *
 *   I cheated again by going directly from [7, 4] to [4, 7], but that's
 *   really just:
 *
 *   1. Split the input array in half
 *   [7, 4] -> [7], [4]
 *
 *   2. Both sides are sorted recursively:
 *   [7] -> [7]
 *   [4] -> [4]
 *
 *   3. Both halves are merged:
 *   [7], [4] -> [4, 7]
 *
 *   As you can see, all the work actually gets done in step 3, the merge
 *   step. Everything else is just splitting and recursing.
 *
 *
 * Complexity:
 *   What is the complexity of your algorithm in time and space?
 *   The merge step can be implemented using what is conceptually an insertion sort, and yet its time
 *   complexity is (spoiler alert!) much lower. Why is that?
 *
 *
 * Extra credit:
 *   One of the benefits of mergesort over e.g. quicksort is that it is "stable"; assuming the merge
 *   step is properly implemented, list items with the same value will remain in the same order they were
 *   in in the input. (This is academic in the case of sorting integers, but it is an important consideration
 *   when sorting more complex objects.) Is your implementation a stable sort?
 *
 * Extra credit:
 *   The naive mergesort assumes that the input array is completely unsorted, but in practice even random
 *   data will have "runs" of sorted integers. The "natural mergesort" takes advantage of this by splitting
 *   the input not into sublists of length 1, but into whatever sublists are already sorted in the input.
 *   Implement natural splitting into your mergesort. How much does it improve your average-case runtime?
 *
 */

//output a sorted array of numbers
//input an array of numbers
//contraints mege sort has a time complexity of O(nlog(n))
  //all indexs must be iterated over and this has to happen log(n) times
  //I found this stack over flow post to be helpful:
  //https://softwareengineering.stackexchange.com/questions/297160/why-is-mergesort-olog-n
//edge cases the array will only contain intergers
  //empty array input will return an empty
var mergeSort = function(array) {
  //sorted front half of array
  var frontHalf = [];
  //sorted back half of array
  var backHalf = [];
  var midPoint;
  var sorted = [];
  var i = 0;
  var j = 0;

  //recursive case
  //if the array size is greater than 1
  if (array.length > 1) {
    //calculate the mid point
    //divde the array length by 2 round down
    midPoint = Math.floor(array.length / 2);
    //split the array in half based on the mid point
    //slice the array up to the mid point
    frontHalf = array.slice(0, midPoint);
    //slice the array from the mid point to the end
    backHalf = array.slice(midPoint, array.length);
    //recurse on the first half and save the result
    frontHalf = mergeSort(frontHalf);
    //recurse on the second half and save the result
    backHalf = mergeSort(backHalf);
    //sort the two halfs
    //iterate until either array counter is greater than or
      //equal to their max lengths
    while((i < frontHalf.length) || (j < backHalf.length)) {
      //if the first array's counter is less than the first array's max length
      //and the first array's number is less than the second number
      //or the second array's counter is greater than or equal to the second's array's max length
      if (((i < frontHalf.length) && (frontHalf[i] < backHalf[j])) || (j >= backHalf.length)) {
        //add the first array's number to the sorted array
        sorted.push(frontHalf[i]);
        //increment the first array's counter
        i++;
      } else {
        //add the second array's number to the sorted array
        sorted.push(backHalf[j]);
        //increment the second array's counter
        j++;
      }
    }
    //return the sorted array
    return sorted;
  //base case
  //if the array length is 1 or less
  } else {
    //return the array
    return array;
  }
};