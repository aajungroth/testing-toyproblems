describe('insertionSort', function() {
  var result;
  var expected;
  var array;

// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should sort an array of three values from least to greatest', function() {
    array = [{value: 2}, {value: 1}, {value: 3}];
    expected = [{value: 1}, {value: 2}, {value: 3}]
    result = insertionSort(array);
    console.log('result', result);
    expect(result).to.eql(expected);
  });

  it('should sort an array of five values with a duplicate from least to greatest', function() {
    array = [{value: 6}, {value: 1}, {value: 5}, {value: 4, order: 1}, {value: 4, order: 2}];
    expected = [{value: 1}, {value: 4, order: 1}, {value: 4, order: 2}, {value: 5}, {value: 6}];
    result = insertionSort(array);
    console.log('result', result);
    expect(result).to.eql(expected);
  });

});
