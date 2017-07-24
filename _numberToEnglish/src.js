/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

//output a string
//input the fuction will be called on a number
//constraints none stated
//edge cases numbers ending in ty need a hyphen instead of a space after them
Number.prototype.toEnglish = function () {
  // return my value as english words
  //the source number
  var source = this;
  //mod value
  var modValue = 1;
  //array of numbers place and value
  var placeValue = [];
  //translation string
  var translation = '';
  var tempPlaceValue = [1, 1];
  var tempValue;

  //if the number is less than twenty-one
  if (source < 21) {
    //return numbersToWords source
    return numbersToWords[source];
  }
  //iterate until the mod value is greater than the source number
  while (modValue <= source) {
    //if the mod value is less than or equal to 100
    if (modValue <= 100) {
      //multiply the mod value by 10
      modValue *= 10;
    //else
    } else {
      //multiply the mod value by 1000
      modValue *= 1000;
    }
  }
  //iterate until the mod value is less than 100
  while (modValue >= 100) {
    //if the mod value is greater than 1000
    if (modValue > 1000) {
      //divide the mod value by 1000
      modValue /= 1000;
    //else
    } else {
      //divide the mod value by 10
      modValue /= 10;
    }
    if (modValue === 10) {
      tempPlaceValue = [1, 1];
      //save the source in the value part of the tuple
      tempPlaceValue[1] = source;
      //save the mod value in the place part of the tuple
      tempPlaceValue[0] = modValue;
      //add the tuple to the array of numbers place and value
      placeValue.push(tempPlaceValue);
    } else {
      //create a number placeValue tuple
      tempPlaceValue = [1, 1];
      //mod the source by the mod value and save it in the temp value
      tempValue = source % modValue;
      //save the source minus the temp value divide by the mod value in the value part of the tuple
      tempPlaceValue[1] = (source - tempValue) / modValue;
      //save the mod value in the place part of the tuple
      tempPlaceValue[0] = modValue;
      //add the tuple to the array of numbers place and value
      placeValue.push(tempPlaceValue);
      //reduce the source by the place times the value
      source -= tempPlaceValue[0] * tempPlaceValue[1];
    }
  }
  //iterate through the number array
  for (var i = 0; i < placeValue.length; i++) {
    //if the value is 0
    if (placeValue[i][1] === 0) {
      //continue to the next step in the iteration
      continue;
    } else {
      //if the value is less than 20
      if (placeValue[i][1] < 20) {
        //append numbersToWords value to the translation string
        translation += numbersToWords[placeValue[i][1]];
        if (i < placeValue.length - 1) {
          //append a space to the translation string
          translation += ' ';
        }
      //else if the value is less than 100
      } else if (placeValue[i][1] < 100) {
        //set temp value equal to the value minus the value mod 10
        tempValue = placeValue[i][1] - (placeValue[i][1] % 10);
        //append numbersToWords temp value to the translation string
        translation += numbersToWords[tempValue];
        if ((placeValue[i][1] % 10) > 0) {
          //append a - to the translation string
          translation += '-';
          //append the numbersToWords of the value mod 10 to the translation string
          translation += numbersToWords[placeValue[i][1] % 10];
        }
        if (i < placeValue.length - 1) {
          //append a space to the translation string
          translation += ' ';
        }
      //else if the value is 100
      } else if (placeValue[i][1] === 100) {
        //append numbersToPlace value to the translation string
        translation += numbersToPlace[placeValue[i][0]];
        if (i < placeValue.length - 1) {
          //append a space to the translation string
          translation += ' ';
        }
      //else if the value is greater than 100
      } else if (placeValue[i][1] > 100) {
        //set temp value equal to the value minus the value mod 100
        tempValue = placeValue[i][1] - (placeValue[i][1] % 100);
        //append the numbersToWords temp Value divided by 100 to the translation string
        translation += numbersToWords[tempValue / 100];
        //append a space to the the translation string
        translation += ' ';
        //append numbersToPlace 100 to the translation string
        translation += numbersToPlace[100];
        //set temp value to the value minus tempValue minus the value mod 10
        tempValue = (placeValue[i][1] - tempValue) - (placeValue[i][1] % 10);
        if (tempValue > 0) {
          //append a space to the the translation string
          translation += ' ';
          //append numbersToWords temp value to the translation string
          translation += numbersToWords[tempValue];
        }
        if ((placeValue[i][1] % 10) > 0) {
          //append a - to the translation string
          translation += '-';
          //append the numbersToWords of the value mod 10 to the translation string
          translation += numbersToWords[placeValue[i][1] % 10];
        }
        if (i < placeValue.length - 1) {
          //append a space to the translation string
          translation += ' ';
        }
      }
      if (placeValue[i][0] > 10) {
        //append the numbersToPlace place to the translation string
        translation += numbersToPlace[placeValue[i][0]];
        if (i < placeValue.length - 1) {
          //append a space to the translation string
          translation += ' ';
        }
      }
    }
  }
  //Remove trailing white space
  if (translation[translation.length - 1] === ' ') {
    translation = translation.slice(0, translation.length - 1);
  }

  //return the translation string
  return translation;
};
