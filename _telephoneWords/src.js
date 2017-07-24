/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

//output all valid string permutations
//input a four digit number as a string
//constraints none stated
//edge cases a string can start with a 1 or 0
var telephoneWords = function(digitString) {
  // TODO: return every combination that can be spelled on a phone with these digits
  //declare an array of string permutations
  var permutations = [];
  //declare a current permutation
  var currentPermutation = '';
  //inner recursive function
  var getAllPermutations = function(digitString) {
    //save of the digit letters for the first number in the string
    var digitLetters = phoneDigitsToLetters[digitString.slice(0, 1)];
    //iterate through the digit letters
    for (var i = 0; i < digitLetters.length; i++) {
      //if the current digit string has a length of 1
      if (digitString.length === 1) {
        //add the the current digit letter to the permutation
        currentPermutation += digitLetters[i];
        //save the current permutation in the array of string permutations
        permutations.push(currentPermutation);
        //remove the current digit letter from the permutation
        currentPermutation = currentPermutation.slice(0, currentPermutation.length - 1);
      //else
      } else {
        //add the current digit letter to the permutation
        currentPermutation += digitLetters[i];
        //call the inner recursive function with the front digit in the digit string removed
        getAllPermutations(digitString.slice(1, digitString.length));
        //remove the current digit letter from the permutation
        currentPermutation = currentPermutation.slice(0, currentPermutation.length - 1);
      }
    }
  }

  //call inner recursive function with digitString
  getAllPermutations(digitString);
  //return array of string permutations
  return permutations;
};
