describe('nthFibonacci', function() {
  var result;
  var expected;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should follow the Fibonacci sequence', function() {
    result = [];
    for (var i = 0; i < 10; i++) {
      result.push(nthFibonacci(i));
    }
    expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    expect(result).to.eql(expected);
  });

});
