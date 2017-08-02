/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

//output an array of anagrams
//input a string
//constraints the time complexity of this solution is factorial, O(n!)
//edge cases empty string returns an array with the empty string
var allAnagrams = function(string) {
  //declare results array
  var anagrams = [];
  var uniqueAnagrams = {};
  //declare a temp string
  var temp = '';

  //inner recursive function
  var findAnagrams = function(currentString) {
    //if temp string length is greater than or equal to the strings length
    if (temp.length >= string.length) {
      //add the temp string to the results array
      anagrams.push(temp);
      return;
    }
    //iterate through the string with the counter
    for (var i = 0; i < currentString.length; i++) {
      //add the current character to the temp string
      temp += currentString[i];
      //call the inner recursive function with the counter plus one
      var remainingString = currentString.filter(function(character, key) {
        return key !== i;
      });
      findAnagrams(remainingString);
      //remove the current character from the temp string
      temp = temp.slice(0, temp.length - 1);
    }
  }
  //call the inner recursive function
  findAnagrams(string.split(''));

  //iterate through the anagrams
  for (var i = 0; i < anagrams.length; i++) {
    //if the anagram is not in the unqiue anagrams
    if (uniqueAnagrams.hasOwnProperty(anagrams[i]) === false) {
      //add it to the unqiue anagrams
      uniqueAnagrams[anagrams[i]] = true;
    }
  }
  //reset the anagrams array
  anagrams = [];
  //iterate throught the anagrams object
  for (var anagram in uniqueAnagrams) {
    //add the current anagram to the anagrams array
    anagrams.push(anagram);
  }

  //return array of results
  return anagrams;
};
