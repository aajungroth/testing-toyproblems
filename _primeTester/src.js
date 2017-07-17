/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

//output boolean
//input number
//constraints none stated
//edge cases provided
var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // TODO: return true if n is prime, false otherwise
  if (n === 1) {
    return false;
  }
  //if n equal 2
  if ((n === 2) || (n === 3)) {
    return true;
  }
  //if n is even
  if (n % 2 === 0) {
    return false;
  }
  //iterate up to half n rounded down
  for (var i = 3; i <= Math.sqrt(n); i += 2) {
    //if n mod the current number is zero
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

//output array of prime numbers
//input two numbers
//constraints none stated
//edge cases a range with no primes returns an empty array
var primeSieve = function (start, end) {
  //declare a list of prime numbers
  var numbers = [false, false];
  var primes = [];

  //initialize numbers
  for (var i = 2; i <= end; i++) {
    numbers[i] = true;
  }
  //iterate from the first prime number to the square root of the end
  for (i = 2; i <= Math.sqrt(end); i++) {
    //if the number is prime
    if (numbers[i] === true) {
      //iterate from the current prime to the end
      for (var j = Math.pow(i, 2); j <= end; j += i) {
        //mark each multiple of that prime to false
        numbers[j] = false;
      }
    }
  }
  //iterate from the start to the end
  for (i = start; i <= end; i++) {
    //if the number is prime
    if (numbers[i]) {
      //add it to the array of primes
      primes.push(i);
    }
  }
  //return the list of prime numbers
  return primes;
};


