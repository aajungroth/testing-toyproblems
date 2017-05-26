/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

//input a string
//output the first non repeated character
//procedure iterate through the string and find the
// first character with no duplicates
var firstNonRepeatedCharacter = function(string) {
  //array of unique characters in the string in order of they appear in the string
  var characters = [];
  //object containing the characters appearances in the string
  var characterCounts = {};

  //iterate through the string
  for (var i = 0; i < string.length; i++) {
    //if a character is new
    if (characterCounts.hasOwnProperty(string[i]) === false) {
      //add it to the characters array
      characters.push(string[i]);
      //sets its character count to 1
      characterCounts[string[i]] = 1;
    }
    //else
    else {
      //increment its character count by 1
      characterCounts[string[i]]++;
    }
  }
  //iterate through the individual characters
  for (var i = 0; i < characters.length; i++) {
    //if the characters count is one
    if (characterCounts[characters[i]] === 1) {
      //return it
      return characters[i];
    }
  }
  //return empty string if no such character exists
  return null;
};
