describe('rotatedArraySearch', function() {
  var result;
  var expected;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should find the target number in a rotated array', function() {
    result = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
    expected = 5;
    expect(result).to.equal(expected);
  });

  it('should find the target number in the duplicated half of the array', function() {
    result = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 5);
    expected = 1;
    expect(result).to.equal(expected);
  });

  it('should return null for numbers that are not in the array', function() {
    result = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
    expected = null;
    expect(result).to.equal(expected);
  });

});
