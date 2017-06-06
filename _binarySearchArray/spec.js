describe('binarySearchArray', function() {
  var result;
  var expectedIndex;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should pass a basic test', function() {
    result = binarySearch([1, 2, 3, 4, 5], 4);
    expectedIndex = 3;
    expect(result).to.equal(expectedIndex);
  });

});
