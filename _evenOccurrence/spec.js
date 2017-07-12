describe('evenOccurrence', function() {
  var result;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return null when no number occures an even number of times', function() {
    var result = evenOccurrence([1, 7, 8, 7, 8, 7, 6, 3, 8, 9]);
    expect(result).to.equal(null);
  });

  it('should find the first number that occures an even number of times', function() {
    var result = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
    expect(result).to.equal(4);
  });

});
