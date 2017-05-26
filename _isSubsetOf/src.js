/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

//input the this binding to a potential subset and an array
//output a boolean
//procedure if every element in the potential subset is in the array, than
//  that potential subset is a subset
Array.prototype.isSubsetOf = function (arr) {
  //declare an input array object
  var inputArray = {};

  //iterate through the input array
  for (var i = 0; i < arr.length; i++) {
    //add each element to the input array object
    inputArray[arr[i]] = arr[i];
  }
  //iterate through the array from the this binding
  for (var i = 0; i < this.length; i++) {
    //if an element from the array from the this binding is
      //is not in the input array object
    if (inputArray[this[i]] === undefined) {
      return false;
    }
  }
  return true;
};
