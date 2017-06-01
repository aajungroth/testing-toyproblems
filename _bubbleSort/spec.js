describe('bubbleSort', function() {
  var result;
  var array;
  var expected;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should sort an sorted array from least to greatest', function() {
    array = [2, 1, 3, 4, 7, 5, 6];
    result = bubbleSort(array);
    expected = [1, 2, 3, 4, 5, 6, 7];
    expect(result).to.eql(expected);
  });

  it('should sort continue to swap even if the first number doesn\'t need to be swapped', function() {
    array = [1, 2, 3, 4, 7, 5, 6];
    result = bubbleSort(array);
    expected = [1, 2, 3, 4, 5, 6, 7];
    expect(result).to.eql(expected);
  });

});
