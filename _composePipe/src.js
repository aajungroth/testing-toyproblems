/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 *
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';

//output a function that is the composition of functions
  //calls from right to left
//input a list of functions
//constraints none stated
//edge cases all inputs will be function references
var compose = function() {
  var functions = Array.from(arguments);

  var composed = function() {
    var returnValues = arguments;

    for(var i = functions.length - 1; i >= 0; i--) {
      if (returnValues === arguments) {
        returnValues = functions[i].apply(null, returnValues);
      } else {
        returnValues = functions[i].call(null, returnValues);
      }
    }
    return returnValues;
  };

  return composed;
};

//output a function that is the composition of functions
  //calls from left to right
//input a list of functions
//constraints none stated
//edge cases all inputs will be function references
var pipe = function() {
  var functions = Array.from(arguments);

  var piped = function() {
    var returnValues = arguments;

    for(var i = 0; i < functions.length; i++) {
      if (returnValues === arguments) {
        returnValues = functions[i].apply(null, returnValues);
      } else {
        returnValues = functions[i].call(null, returnValues);
      }
    }
    return returnValues;
  };

  return piped;
};
