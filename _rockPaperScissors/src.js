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

//output an array of every valid sequence of rock, paper, and scissors
//input the number of rounds
//constraints none stated
//edge cases zero rounds should return an empty array
  //undefined rounds should default to 3
var rockPaperScissors = function(rounds) {
  if ((rounds === 0) || (rounds === undefined)) {
    rounds = 3;
  }
  var results = [];
  var depth = 0;
  var currentSequence = [];
  //inner recursive function
  var findSequences = function(depth) {
    //if the depth is greater than or equal to rounds
    if (depth >= rounds) {
      //add the current sequence to results
      results.push(currentSequence.slice());
    } else {
      //push rock onto the current sequence
      currentSequence.push('rock');
      //call inner recursive function with depth +1
      findSequences(depth + 1);
      //pop rock off the current sequence
      currentSequence.pop();
      //push paper onto the current sequence
      currentSequence.push('paper');
      //call inner recursive functionwith depth +1
      findSequences(depth + 1);
      //pop paper off the current sequence
      currentSequence.pop();
      //push scissors onto the current sequence
      currentSequence.push('scissors');
      //call inner recursive function with depth + 1
      findSequences(depth + 1);
      //pop scissors off the current sequence
      currentSequence.pop();
    }
  }
  //call inner recursive function
  findSequences(depth);
  return results;
};
