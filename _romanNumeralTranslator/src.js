
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

//output a number
//input a string of roman numerals
//constraints none stated
//edgec cases return null for invalid input
var translateRomanNumeral = function(romanNumeral) {
  var total = 0;
  var wasSmallerThan = false;

  if (typeof romanNumeral !== 'string') {
    return null;
  }

  //if the length is less than 1
  if (romanNumeral.length < 1) {
    return 0;
  //else if the length is 1
  } else if (romanNumeral.length === 1) {
    //return the numeral as a base 10 number
    return DIGIT_VALUES[romanNumeral];
  }

  //iterate through the string in reverse
  for (var i = romanNumeral.length - 1; i >= 0; i--) {
    //if current index equals the last index
    if (i === romanNumeral.length - 1) {
      //add the number to the total
      total += DIGIT_VALUES[romanNumeral[i]];
    //else if the current number is less than the previous
    } else if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i + 1]]) {
      //if wasSmallerThan is true
      if (wasSmallerThan) {
        return null;
      } else {
        //subtract it from the total
        total -= DIGIT_VALUES[romanNumeral[i]];
        //set wasSmallerThan to true
        wasSmallerThan = true;
      }
    } else {
      //add the number to the total
      total += DIGIT_VALUES[romanNumeral[i]];
      //set wasSmallerThan to false
      wasSmallerThan = false;
    }
  }
  return total;
};
