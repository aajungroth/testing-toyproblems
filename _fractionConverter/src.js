/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

//output a string that represents a reduced fraction
//input a number
//constraints
//edge cases whole numbers and mixed fractions
  //will return irregular fractions
var toFraction = function(number) {
  var multipliedNumber;
  var modNumber = 1;
  var greatestCommonDivisor = 1;
  var numerator = "";
  var denominator = "";
  var counter = 0;
  var callStackLimit = 0;

  if (number === 0) {
    return '0/1';
  }

  multipliedNumber = number * modNumber;
  //loop until the multipliedNumber mod multipliedNumber
    //rounded down is zero
  while ((multipliedNumber % Math.floor(multipliedNumber) !== 0) && (counter <= 10)) {
    //multiply the modNumber by 10
    modNumber *= 10;
    //multiply the number by the modNumber, save the result
      //in multipliedNumber
    multipliedNumber = number * modNumber;
    counter++;
  }

  var reduceFraction = function(multipliedNumber, modNumber) {
    if (callStackLimit > 10) {
      return [multipliedNumber, modNumber];
    }

    //iterate until the multipliedNumber is reached
    for (var i = 0; i <= Math.abs(multipliedNumber) && i <= 10; i++) {
      //if the multipliedNumber mod currentValue and
        //the modNumber mod currentValue equal zero
      if ((multipliedNumber % i === 0) && (modNumber % i === 0)) {
        //if the current value is greater than the gretest
        //common divisor
        if (i > greatestCommonDivisor) {
          //update greatest common divisor
            // with the current value
          //greatestCommonDivisor = i;
          multipliedNumber /= i;
          modNumber /= i;
          if (modNumber >= 10) {
            callStackLimit++;
            return reduceFraction(multipliedNumber, modNumber);
          } else {
            return [multipliedNumber, modNumber];
          }
        }
      }
    }
    return [multipliedNumber, modNumber];
  }

  if (modNumber > 1) {
    var result = reduceFraction(multipliedNumber, modNumber);
  } else {
    return multipliedNumber + '/' + modNumber;
  }
  //divide the multipliedNumber by the greatestCommonDivisor
    //to get the numerator
  //numerator = '' + (multipliedNumber / greatestCommonDivisor);
  //divide the modNumber by the greatestCommonDivisor
    //to get the denominator
  //denominator = '' + (modNumber / greatestCommonDivisor);
  //return the numerator concated to / concated to the denominator
  //return numerator + '/' + denominator;
  return result[0] + '/' + result[1];
};
