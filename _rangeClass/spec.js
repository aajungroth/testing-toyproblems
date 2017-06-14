describe('rangeClass', function() {
  var result;
  var expected;
  var myRange;
  var evenNumbers;
  var countBackwards;
  var range5;
  var nullRange;
  var addToArray;

  beforeEach(function() {
    // Something do to before each test
    myRange = new Range(0, 10);
    evenNumbers = new Range(2, 8, 2);
    countBackwards = new Range(4, -2);
    range5 = new Range (5);
    nullRange = new Range();
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return null if nothing is passed to the constructor', function() {
    result = [];
    addToArray = function(val) {
       result.push(val);
    };
    nullRange.each(addToArray);
    expected = [null];
    expect(result).to.eql(expected);
  });

  it('should run a call back on every number in a consecutive range', function() {
    result = [];
    addToArray = function(val) {
       result.push(val);
    };
    myRange.each(addToArray);
    expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(result).to.eql(expected);
  });

  it('should run a call back on every number in a non- consecutive range', function() {
    result = [];
    addToArray = function(val) {
       result.push(val);
    };
    evenNumbers.each(addToArray);
    expected = [2, 4, 6, 8];
    expect(result).to.eql(expected);
  });

  it('should run a call back on every number in a reversed range', function() {
    result = [];
    addToArray = function(val) {
       result.push(val);
    };
    countBackwards.each(addToArray);
    expected = [4, 3, 2, 1, 0, -1, -2];
    expect(result).to.eql(expected);
  });

  it('should run a call back the number in a one number range', function() {
    result = [];
    addToArray = function(val) {
       result.push(val);
    };
    range5.each(addToArray);
    expected = [5];
    expect(result).to.eql(expected);
  });

  it('should return null when nothing is passed to the constructor', function() {
    result = nullRange.size();
    expected = null;
    expect(result).to.equal(expected);
  });

  it('should return the size of a consecutive range', function() {
    result = myRange.size();
    expected = 11;
    expect(result).to.equal(expected);
  });

  it('should return the size of a non-consecutive range', function() {
    result = evenNumbers.size();
    expected = 4;
    expect(result).to.equal(expected);
  });

  it('should return the size of a reversed range', function() {
    result = countBackwards.size();
    expected = 7;
    expect(result).to.equal(expected);
  });

  it('should return a size of one for a range of one number', function() {
    result = range5.size();
    expected = 1;
    expect(result).to.equal(expected);
  });

  it('should return null when nothing is passed into the constructor', function() {
    result = nullRange.includes(2);
    expected = null;
    expect(result).to.equal(expected);
  });

  it('should return true for numbers inside of a consecutive range', function() {
    result = myRange.includes(3);
    expected = true;
    expect(result).to.equal(expected);
  });

  it('should return true for numbers at the end of a consecutive range', function() {
    result = myRange.includes(10);
    expected = true;
    expect(result).to.equal(expected);
  });

  it('should return false for numbers outside of a consecutive range', function() {
    result = myRange.includes(11);
    expected = false;
    expect(result).to.equal(expected);
  });

  it('should return true for even numbers inside of a non-consecutive range of even numbers', function() {
    result = evenNumbers.includes(2);
    expected = true;
    expect(result).to.equal(expected);
  });

  it('should return true for even numbers at the end of a non-consecutive range of even numbers', function() {
    result = evenNumbers.includes(8);
    expected = true;
    expect(result).to.equal(expected);
  });

  it('should return false for odd numbers indside of a non-consecutive range of even numbers', function() {
    result = evenNumbers.includes(7);
    expected = false;
    expect(result).to.equal(expected);
  });

  it('should return false for even numbers outside of a non-consecutive range of even numbers', function() {
    result = evenNumbers.includes(10);
    expected = false;
    expect(result).to.equal(expected);
  });

  it('should return true for numbers inside of a reversed range of numbers', function() {
    result = countBackwards.includes(3);
    expected = true;
    expect(result).to.equal(expected);
  });

  it('should return true for numbers at the end of a reversed range of numbers', function() {
    result = countBackwards.includes(-2);
    expected = true;
    expect(result).to.equal(expected);
  });

  it('should return false for numbers outside of a reversed range of numbers', function() {
    result = countBackwards.includes(-4);
    expected = false;
    expect(result).to.equal(expected);
  });

  it('should return true for the number in the one number in the range', function() {
    result = range5.includes(5);
    expected = true;
    expect(result).to.equal(expected);
  });

  it('should return false for any numbers besides the one number in the range', function() {
    result = countBackwards.includes(6);
    expected = false;
    expect(result).to.equal(expected);
  });

});
