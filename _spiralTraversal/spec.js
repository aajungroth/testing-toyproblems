describe('spiralTraversal', function() {
  var result;
  var expected;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should traverse the matrix from the upper left to the center', function() {
    result = spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    expect(result).to.eql(expected);
  });

  it('should handle an m by n matrix', function() {
    result = spiralTraversal([
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16],
      [17,18,19,20]
    ]);
    expected = [1, 2, 3, 4, 8, 12, 16, 20, 19, 18, 17, 13, 9, 5, 6, 7, 11, 15, 14, 10];
    expect(result).to.eql(expected);
  });

});
