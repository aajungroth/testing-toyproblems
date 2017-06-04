describe('largestProductOfThree', function() {
  var result;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return the largest product of three numbers in an array', function() {
    result = largestProductOfThree([2, 1, 3, 7]);
    expect(result).to.equal(42);
  });

  it('should return the largest product of three numbers', function() {
    result = largestProductOfThree([2, 1, 3]);
    expect(result).to.equal(6);
  });

  it('should handle negaitve numbers', function(){
    result = largestProductOfThree([2, 3, -10, 7, 5, -20]);
    expect(result).to.equal(1400);
    result = largestProductOfThree([-31, 41, 34, -37, -17, 29]);
    expect(result).to.equal(47027);
  });

});
