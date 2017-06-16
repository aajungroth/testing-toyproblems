/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
//output true or false based on if the parens are balanced
//input a string containing parens {,},[,],(,)
//constraints none stated
//edge-cases ignore non-paren characters, return false if there are no parens
var balancedParens = function(input) {
  //create an array of characters from the input
  var characters = input.split('');
  //create a stack for open parens
  var parenStack = [];
  //top of stack variable
  var topParen;

  //filter the array of all non parens
  characters = characters.filter(function(character) {
    return (character === '(') ||
      (character === ')') ||
      (character === '[') ||
      (character === ']') ||
      (character === '{') ||
      (character === '}');
  });
  //if the array is empty
  if (characters.length <= 0) {
    return true;
  }
  //iterate on the arrray
  for (var i = 0; i < characters.length; i++) {
    //if open paren
    if ((characters[i] === '(') || (characters[i] === '[') || (characters[i] === '{')) {
      //push onto stack
      parenStack.push(characters[i]);
    //else if closed paren
    } else if ((characters[i] === ')') || (characters[i] === ']') || (characters[i] === '}')) {
      //pop paren stack
      topParen = parenStack.pop();
      //compare closed paren to top of paren stack
      //if they aren't matching parens
      if(!((topParen === '(') && (characters[i] === ')')) &&
        !((topParen === '[') && (characters[i] === ']')) &&
        !((topParen === '{') && (characters[i] === '}'))) {
        return false;
      }
    }
  }
  //if the paren stack's length does not equal zero
  if (parenStack.length !== 0) {
    return false;
  }
  return true;
};
