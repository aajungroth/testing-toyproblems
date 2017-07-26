/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

//output the total number of ways to make the total
//input a number
//constraints none stated
//edge cases none stated
var makeChange = function(total) {
  //create an array of valid coin pieces
  var coins = [1, 2, 5, 10, 20, 50, 100, 200];
  //declare a counter for the number of combinations
  var coinCombinations = 0;

  //Returns 1 for 0p
  if (total === 0) {
    return 1;
  }

  //inner recursive function with a sum parameter
  var countCoinCombinations = function(sum, counter) {
    //iterate through the array of valid coin pieces
    for (var i = counter; i < coins.length; i++) {
      //add the current coin value to the sum
      sum += coins[i];
      //if the sum is less than the total
      if (sum < total) {
        //call the inner recursive function with the new sum
        countCoinCombinations(sum, i);
      //else if the sum equals the total
      } else if (sum === total) {
        //increment the combination counter
        coinCombinations++;
      }
      //subtract the coin value from the sum
      sum -= coins[i];
    }
  }

  //call the inner recursive function with a sum of zero
  countCoinCombinations(0, 0);
  //return the number of combinations
  return coinCombinations;
};
