// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.

//output a number
//input two numbers
//constraints none stated
//edges cases work with decimals for extra credit
//x * y
var multiply = function(x, y) {
  var product = 0;
  var isNegative = false;

  if ((x < 0) && (y < 0)) {
    x = Math.abs(x);
    y = Math.abs(y);
  } else if ((x >= 0) && (y < 0)) {
    y = Math.abs(y);
    isNegative = true;
  }
  for (var i = 0; i < y; i++) {
    product += x;
  }
  if (isNegative) {
    product = product.toString();
    product = '-' + product;
    product = parseFloat(product, 10);
  }
  return product;
};

//output a number
//input two numbers
//constraints none stated
//edge cases produce answers to three decimal places
//x / y
var divide = function(x, y) {
  var quotient;
  var dividend;
  var place = 1;
  var isNegative = false;

  if ((x < 0) && (y < 0)) {
    x = Math.abs(x);
    y = Math.abs(y);
  } else if ((x < 0) && (y >= 0)) {
    x = Math.abs(x);
    isNegative = true;
  } else if ((x >= 0) && (y < 0)) {
    y = Math.abs(y);
    isNegative = true;
  }
  if (y === 0) {
    return undefined;
  }
  do {
    quotient = 0;
    dividend = multiply(x, place);
    while (dividend >= y) {
      quotient++;
      dividend -= y;
    }
    place = multiply(place, 10);
  } while (dividend !== 0 && place <= 1000);
  if (dividend !== 0) {
    quotient++;
  }
  if (place > 1000) {
    quotient = quotient.toString();
    quotient = quotient.slice(0, -3) + '.' + quotient.slice(-3);
    quotient = parseFloat(quotient, 10);
  } else if (place > 100) {
    quotient = quotient.toString();
    quotient = quotient.slice(0, -2) + '.' + quotient.slice(-2);
    quotient = parseFloat(quotient, 10);
  } else if (place > 10) {
    quotient = quotient.toString();
    quotient = quotient.slice(0, -1) + '.' + quotient.slice(-1);
    quotient = parseFloat(quotient, 10);
  }
  if (isNegative) {
    quotient = quotient.toString();
    quotient = '-' + quotient;
    quotient = parseFloat(quotient, 10);
  }
  return quotient;
};

//output an number
//input two numbers
//constraints none stated
//edge cases assume inputs will be integers
//x % y
var modulo = function(x, y) {
  var remainder = x;

  if (y === 0) {
    return undefined;
  }
  while (remainder >= y) {
    remainder -= y;
  }
  return remainder;
};


