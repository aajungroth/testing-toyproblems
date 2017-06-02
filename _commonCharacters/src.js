/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

//ouput a string will all the characters in both strings without duplication
//input two strings
//constraints none stated, but I think linear time complexity, no space constraints
//edge cases only strings as inputs,
  //if the strings have nothing in common return empty string
var commonCharacters = function(string1, string2) {
  var characters1 = {};
  var characters2 = {};
  var intersection = '';

  //iterate through the second string
  for (var i = 0; i < string2.length; i++) {
    //put each character into the second characters object
    characters2[string2[i]] = string2[i];
  }
  //iterate through the first string
  for (i = 0; i < string1.length; i++) {
    //if the element is a space or in the first characters object skip it
    if (!(string1[i] === ' ') && !(characters1.hasOwnProperty(string1[i]))) {
      //add the element to the first characters object
      characters1[string1[i]] = string1[i];
      //if the element is in the second characters object
      if (characters2.hasOwnProperty(string1[i])) {
        //add the element to the intersection string
        intersection += string1[i];
      }
    }
  }
  return intersection;
};

console.log(commonCharacters('acexivou', 'aegihobu'));