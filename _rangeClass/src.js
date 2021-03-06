/**
 * Build a class to represent a range of numbers that takes:
 *   - a beginning index,
 *   - an end index (optional)
 *     If there is no end index, the range should include only the passed-in start value.
 *   - a 'step' (optional)
 *     The step is the interval at which elements are included.
 *     For instance, a step of 1 includes every element in the range,
 *     while a step of 2 includes every other element.
 *
 * The range should have a constructor that accepts these arguments in that order.
 *
 * It should also support the following utility functions:
 *   - size(): return the number of items represented by the range
 *   - each(callback(index)): iterate over the range, passing each value to a callback function
 *   - includes(index): return whether or not the range includes the passed value
 *
 * You should also be aware of the following caveats:
 *   - You should allow a negative value for 'step' to count backwards.
 *   - If no step is provided, it should default to 1.
 *   - If the start value is greater than the end value, assume we're counting backwards.
 *   - Should return null if we are given no 'start' value.
 *
 * Range should use constant space, even during the `each` method. i.e. you should *not*
 * use an Array as backing storage. Any given range could potentially be thousands of numbers long,
 * so find a way to represent the range without actually storing each element.
 *
 * USAGE EXAMPLES:
 * var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)
 *
 * var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
 * evenNumbers.each(function(val){
 *   console.log(val+"!");
 * });
 * console.log("Who do we appreciate!?");
 *
 * evenNumbers.size() should be 4
 * evenNumbers.includes(2) should be true, evenNumbers.includes(3) should be false
 */

//output a class with start, end, and step properties
//input numbers all of which are optional
//constaints the range class must have constant space
//edge cases see above
var Range = function(start, end, step) {
  if (start === undefined) {
    this.start = null;
  } else {
    this.start = start;
  }
  if (end === undefined) {
    this.end = null;
  } else {
    this.end = end;
  }
  if (step === undefined) {
    this.step = null;
  } else {
    this.step = step;
  }
};

Range.prototype.size = function () {
  if (this.start === null) {
    return null;
  } else if (this.end === null) {
    return 1;
  } else if (this.step === null) {
    if (this.start <= this.end) {
      /*
      //if this.start >= 0 and this.end >= 0
      if (this.start >= 0 && this.end >= 0) {
        return (this.end - this.start) + 1;
      }
      //-no-if this.start >= 0 and this.end < 0
      //if this.start < 0 and this.end >= 0
      if (this.start < 0 && this.end >= 0) {
        return (this.end - this.start) + 1;
      }
      //if this.start < 0 and this.end < 0
      if (this.start < 0 && this.end < 0) {
        return (this.end - this.start) + 1;
      }
      */
      return (this.end - this.start) + 1;
    } else {
      return (this.start - this.end) + 1;
    }
  } else {
    if (this.start <= this.end) {
      return Math.round(((this.end - this.start) + 1) / Math.abs(this.step));
    } else {
      return Math.round(((this.start - this.end) + 1) / Math.abs(this.step));
    }
  }
};

Range.prototype.each = function (callback) {
  if (this.start === null) {
    callback(null);
  } else if (this.end === null) {
    return callback(this.start);
  } else if (this.step === null) {
    if (this.start <= this.end) {
      for (var i = this.start; i <= this.end; i++) {
        callback(i);
      }
    } else {
      for (var i = this.start; i >= this.end; i--) {
        callback(i);
      }
    }
  } else {
    if ((this.start <= this.end) && (this.step > 0)) {
      for (var i = this.start; i <= this.end; i += this.step) {
        callback(i);
      }
    } else if ((this.start > this.end) && (this.step > 0)) {
      for (var i = this.start; i >= this.end; i -= this.step) {
        callback(i);
      }
    } else if ((this.start <= this.end) && (this.step < 0)) {
      for (var i = this.end; i >= this.start; i += this.step) {
        callback(i);
      }
    } else if ((this.start > this.end) && (this.step < 0)) {
      for (var i = this.start; i >= this.end; i += this.step) {
        callback(i);
      }
    }
  }
};

Range.prototype.includes = function (val) {
  if (this.start === null) {
    return null;
  } else if (this.end === null) {
    return this.start === val;
  } else if ((this.step === null) && (this.start <= this.end)) {
    if ((val >= this.start) && (val <= this.end)) {
      return true;
    }
  } else if ((this.step === null) && (this.start > this.end)) {
    if ((val <= this.start) && (val >= this.end)) {
      return true;
    }
  } else {
    if (this.start <= this.end) {
      if ((val >= this.start) && (val <= this.end)) {
        return val % this.step === 0;
      }
    } else {
      if ((val <= this.start) && (val >= this.end)) {
        return val % this.step === 0;
      }
    }
  }
  return false;
};

var range = new Range(1);
