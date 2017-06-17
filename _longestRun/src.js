/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

//output an array of two indexs
//input a string
//constraints none stated
//edge cases empty string should return null and
  //return the first longest run
var longestRun = function (string) {
  // TODO: Your code here!
  var maxRunMarks = [0, 0];
  var currentRunMarks = [0, 0];
  var currentRunner;

  //returns null when an empty string is received
  if (string === '') {
    return null;
  }

  //iterate through the string
  for (var i = 0; i < string.length; i++) {
    //if the current character equals the current runner
    if (currentRunner === string[i]) {
      //increment the current second runner mark
      currentRunMarks[1]++;
    } else {
      //if the current Run is longer than the max run
      if ((currentRunMarks[1] - currentRunMarks[0]) > (maxRunMarks[1] - maxRunMarks[0])) {
        //update the max run
        maxRunMarks[0] = currentRunMarks[0];
        maxRunMarks[1] = currentRunMarks[1];
      }
      //update the first run mark to the current index
      currentRunMarks[0] = i;
      //update the second run mark to the current index
      currentRunMarks[1] = i;
      //upate the currentRunner
      currentRunner = string[i];
    }
  }
  return maxRunMarks;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
