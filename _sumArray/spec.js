describe('sumArray', function() {
  var result;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return the greatest contiguous sum of a single positie number', function() {
    result = sumArray([1]); // => 1
    expect(result).to.equal(1);
  });

  it('should return the greatest contiguous sum of a single negative number', function() {
    result = sumArray([-1]); // => -1
    expect(result).to.equal(-1);
  });

  it('should return the greatest contiguous sum of numbers for a negative array', function() {
    result = sumArray([-3, -2, -1]); // => -1
    expect(result).to.equal(-1);
  });

  it('should return the greatest contiguous sum of numbers for a positive array', function() {
    result = sumArray([1, 2, 3]); // => 6
    expect(result).to.equal(6);
  });

  it('should return the greatest contiguous sum of numbers for a positive array with a negative at the end', function() {
    result = sumArray([1, 2, 3, -4]); // => 6
    expect(result).to.equal(6);
  });

  it('should return the greatest contiguous sum of numbers for a positive array where the second to last number is a negative', function() {
    result = sumArray([1, 2, 3, -4, 5]); // => 7
    expect(result).to.equal(7);
  });

  it('should return the greatest contiguous sum of numbers for a positive array with a negative in the middle', function() {
    result = sumArray([4, -1, 5]); // => 8
    expect(result).to.equal(8);
  });

  it('should return the greatest contiguous sum of numbers for a positive array with the last number being the greates contiguous sum', function() {
    result = sumArray([10, -11, 11]); // => 11
    expect(result).to.equal(11);
  });

});
