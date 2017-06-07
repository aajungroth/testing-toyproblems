describe('binarySearchArray', function() {
  var result;
  var expectedIndex;
  var largeArray;

  beforeEach(function() {
    // Something do to before each test
    largeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
      51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
      61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
      71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
      81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
      91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return null for numbers not in the array', function() {
    result = binarySearch([1, 2, 3, 4, 5], 2.5);
    expectedIndex = null;
    expect(result).to.equal(expectedIndex);
  });

  it('should find a number that is equal to the initial mid point', function() {
    result = binarySearch([1, 2, 3, 4, 5], 3);
    expectedIndex = 2;
    expect(result).to.equal(expectedIndex);
  });

  it('should find a number that is greater than the initial mid point', function() {
    result = binarySearch([1, 2, 3, 4, 5], 4);
    expectedIndex = 3;
    expect(result).to.equal(expectedIndex);
  });

  it('should find a number that is less than the initial mid point', function() {
    result = binarySearch([1, 2, 3, 4, 5], 2);
    expectedIndex = 1;
    expect(result).to.equal(expectedIndex);
  });

  it('should find a number that is greater than the intial mid point and will take multiple recursive calls to find', function() {
    result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9);
    expectedIndex = 8;
    expect(result).to.equal(expectedIndex);
  });

  it('should find a number that is less than the intial mid point and will take multiple recursive calls to find', function() {
    result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
    expectedIndex = 1;
    expect(result).to.equal(expectedIndex);
  });

  it('should find the largest number in the array', function() {
    result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
    expectedIndex = 9;
    expect(result).to.equal(expectedIndex);
  });

  it('should find the smallest number in the array', function() {
    result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
    expectedIndex = 0;
    expect(result).to.equal(expectedIndex);
  });

  it('should find the target number less than the intial midpoint in an array of 100 numbers', function() {
    result = binarySearch(largeArray, 37);
    expectedIndex = 36;
    expect(result).to.equal(expectedIndex);
  });

  it('should find the target number greater than the intial midpoint in an array of 100 numbers', function() {
    result = binarySearch(largeArray, 82);
    expectedIndex = 81;
    expect(result).to.equal(expectedIndex);
  });

  it('should find the largest number in an array of 100 numbers', function() {
    result = binarySearch(largeArray, 100);
    expectedIndex = 99;
    expect(result).to.equal(expectedIndex);
  });

  it('should find the smallest number in an array of 100 numbers', function() {
    result = binarySearch(largeArray, 1);
    expectedIndex = 0;
    expect(result).to.equal(expectedIndex);
  });

});
