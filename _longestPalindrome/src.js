/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var detectPalindrome = function(string) {
  for (var i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[(string.length - 1) - i]) {
      return false;
    }
  }
  return true;
};

var longestPalindrome = function (string) {
  var current = '';
  var longest = '';

  for (var i = 0; i < string.length; i++) {
    for (var j = i; j < string.length; j++) {
      current += string[j];
      if (detectPalindrome(current)) {
        if (current.length > longest.length) {
          longest = current;
        }
      }
    }
    current = '';
  }
  return longest;
};
