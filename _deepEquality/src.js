/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
//output: boolean based on if the two objects equal each other
//input: two objects
//constraints: none state
//edge cases: empty objects should equal each other, objects will not
  //have a cyclical structure, values can be array, objects, primitives
var deepEquals = function(apple, orange) {
  //rescursive cases
  //if the first object is an array
  if (Array.isArray(apple) === true) {
    //if the second object is an array
      //and the lengths equal each other
    if ((Array.isArray(orange) === true) && (apple.length === orange.length)) {
      //iterate through the array
      for (var i = 0; i < apple.length; i++) {
        //compare each element to the other array by recursing
        //if the result is false
        if (!deepEquals(apple[i], orange[i])) {
          return false;
        }
      }
    //else
    } else {
      return false;
    }
    return true;
  //else if the first object is an object
  } else if ((apple !== null) && (typeof apple === 'object')) {
    //get the keys from both objects
    if ((orange !== null) && (typeof orange === 'object')) {
      var appleKeys = Object.keys(apple);
      var orangeKeys = Object.keys(orange);
    } else {
      return false;
    }
    //if the lengths are equal
    if (appleKeys.length === orangeKeys.length) {
      //iterate on the object
      for (var key in apple) {
        //if the current key exist on the other object
        if (orangeKeys.hasOwnProperty(key) === false) {
          //recurse on the values
          if (!deepEquals(apple[key], orange[key])) {
            return false;
          }
        //else
        } else {
          return false;
        }
      }
    }
    //else
    else {
      return false;
    }
    return true;
  //base case
  //else the first object is a primitive
  } else {
    //compare the two objects
    //return the result
    return apple === orange;
  }
};

console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}));//true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}));//false