/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

//input a accumulator and a counter
//output boolean based on test
//procedure test coutner to see if it equals 2
var checkCounters = function(accumulator, counter) {
  if (accumulator === false) {
    return false;
  } else if (counter < 2) {
    return false
  } else {
    return true;
  }
};

//input  a counter
//output the permutations
//procedure return the correct term
  //rock = 0, paper = 1, scissors = 2
var convertCounters = function(counter) {
  if (counter === 0) {
    return 'rock';
  } else if (counter === 1) {
    return 'paper';
  } else if (counter === 2) {
    return 'scissors';
  }
  return '';
};

//input none
//output should return all permutations of throws
  //in a 3 round game of rock paper scissors
  //as an array of arrays of strings
//procedure should recursively generate the permutations
var rockPaperScissors = function(rounds) {
  //The index of the total number of counters needed
  var totalCountersMaxIndex = 2;
  //Array of base three counters
  var counters = [0, 0, 0];
  //Array of permutations
  var permutations = [];
  //A new permutation
  var permutation = [];

  //handles any number of rounds
  if ((rounds !== undefined) && (rounds > 0)) {
    totalCountersMaxIndex = rounds - 1;
    counters = [];
    for (var i = 0; i < rounds; i++) {
      counters.push(0);
    }
  }

  //while loop
  while (counters.reduce(checkCounters, true) === false) {
    //stop condition
    //if all counters are at 2

    //else
    //add permutation of rock paper or scissors to the
      // permutations array based on the counters
    permutation = counters.map(convertCounters);
    permutations.push(permutation);

    //inner recursive function
    var incrementCounters = function (index) {
      //increment the counter
      counters[index]++;

      //base case
      //The counter is less than three

      //recursive case
      //if the counter is equal to three
      if (counters[index] > 2) {
        //set it equal to 0
        counters[index] = 0;
        //recurse on the next counter
        index--;
        incrementCounters(index);
      }
    }
    incrementCounters(totalCountersMaxIndex);
  }
  //add final permutation
  permutation = counters.map(convertCounters);
  permutations.push(permutation);

  //return array of permutations
  return permutations;
};

console.log(rockPaperScissors(4));