describe('mergeSort', function() {
  var result;
  var array;
  var expected;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should use mergeSort to sort the input array', function() {
    array = [4, 7, 4, 3, 9, 1, 2]
    result = mergeSort(array);
    expected = [1, 2, 3, 4, 4, 7, 9];
    expect(result).to.eql(expected);
  });

});
