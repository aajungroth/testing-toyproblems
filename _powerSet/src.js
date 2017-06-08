/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

//returns a duplicate free version of the string
var removeDuplicates = function(str) {
  var setStr = '';
  var usedChars = {};

  for (var i = 0; i < str.length; i++) {
    if (usedChars.hasOwnProperty(str[i]) === false) {
      setStr += str[i];
      usedChars[str[i]] = true;
    }
  }
  return setStr;
};

//output an array of all possible subsets
//input a string
//constraints none stated
//edge cases duplicates are ignored
var powerSet = function(str) {
  var set = [];

  //removes duplicates from the string
  str = removeDuplicates(str);

  set.push('');
  //inner function, the removed character(s) and a string
  var constructSet = function(removedCharacters, string) {
    var reducedString = [];
    var removedCharacter = '';

    //iterate through the string
    for (var i = 0; i < string.length; i++) {
      //add the removed characters and each character to the array
      set.push(removedCharacters + string[i]);
    }
    //iterate through the string again
    for (i = 0; i < string.length; i++) {
      //take the current character away from the string
      reducedString = string.slice(i, string.length).split('');
      removedCharacter = reducedString.splice(0, 1);
      //add a new character to the the removed characters
      removedCharacters += removedCharacter[0];

      //recurse on the new removed characters and the remaining string
      constructSet(removedCharacters, reducedString.join(''));
      //remove the current character from the removed characters
      removedCharacters = removedCharacters.slice(0, removedCharacters.length - 1);
    }
  }
  constructSet('', str);
  return set;
};
