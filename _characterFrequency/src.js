/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

//output array of arrays order by frequency then by character
//input a string
//constraints none stated
//edge cases empty string should return empty array
var characterFrequency = function(string) {
  //create an object for counting characters
  var countCharacters = {};
  //create an array for holding characters and their counts
  var frequencies = [];

  //iterate through the string
  for (var i = 0; i < string.length; i++) {
    //if the object has the current character
    if (countCharacters.hasOwnProperty(string[i])) {
      //increment the object's count for that character
      countCharacters[string[i]]++;
    } else {
      //set the object's count for that character to one
      countCharacters[string[i]] = 1;
    }
  }

  //iterate through the object
  for (var character in countCharacters) {
    //push an array of the character and count onto the array of arrays
    frequencies.push([character, countCharacters[character]]);
  }

  //recursive inner function
  var mergeSortFrequencies = function(unsortedFrequencies) {
    //base case
    //if the input array's length is one
    if (unsortedFrequencies.length <= 1) {
      //return the array
      return unsortedFrequencies;
    //recursive case
    } else {
      //calculate the midpoint of the array
      var midpoint = Math.floor(unsortedFrequencies.length / 2);
      //split the array in half
      var firstHalf = unsortedFrequencies.slice(0, midpoint);
      var secondHalf = unsortedFrequencies.slice(midpoint, unsortedFrequencies.length);
      //call the recursive inner function on the first half
      firstHalf = mergeSortFrequencies(firstHalf);
      //call the recursive inner function on the second half
      secondHalf = mergeSortFrequencies(secondHalf);
      //create a merge array
      var merged = [];
      //create counters
      var i = 0;
      var j = 0;
      //while the first array and second array counters are less than the arrays lengths
      while ((i < firstHalf.length) || (j < secondHalf.length)) {
        //if the first array index count is greater than or equal to the first array length
        if (i >= firstHalf.length) {
          //push the second array index array to the merge array
          merged.push(secondHalf[j]);
          //increment the second array index
          j++;
        //else if the second array index count is greater than or equal to the second array length
        } else if (j >= secondHalf.length) {
          //push the first array index array to the merge array
          merged.push(firstHalf[i]);
          //increment the first array index
          i++;
        //else if the first array index count is greater than the second array index count
        } else if (firstHalf[i][1] > secondHalf[j][1]) {
          //push the first array index array to the merge array
          merged.push(firstHalf[i]);
          //increment the first array index
          i++;
        //else if the first array index count is equal to the second array index count
        } else if (firstHalf[i][1] === secondHalf[j][1]) {
          //if the char count of the first array index character is greater than the second array index char count
          if (firstHalf[i][0].charCodeAt(0) > secondHalf[j][0].charCodeAt(0)) {
            //push the second array index array to the merge array
            merged.push(secondHalf[j]);
            //increment the second array index
            j++;
          } else {
            //push the first array index array to the merge array
            merged.push(firstHalf[i]);
            //increment the first array index
            i++;
          }
        } else {
          //push the second array index array to the merge array
          merged.push(secondHalf[j]);
          //increment the second array index
          j++;
        }
      }
      //return the merged array
      return merged;
    }
  }
  //call recursive inner function
  frequencies = mergeSortFrequencies(frequencies);
  return frequencies;
};
