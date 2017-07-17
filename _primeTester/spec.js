describe('primeTester', function() {
  var result;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return true for two', function() {
    result = primeTester(2);
    expect(result).to.equal(true);
  });

  it('should return false for an even number', function() {
    result = primeTester(50);
    expect(result).to.equal(false);
  });

  //Testing time complexity
  it('should return false for a large odd number that is not prime in less than two seconds', function() {
    result = primeTester(20000001);
    expect(result).to.equal(false);
  });

  it('should return false for 15485867 * 15485867', function() {
    result = primeTester(15485867 * 15485867);
    expect(result).to.equal(false);
  })

  it('should return to true for 19', function() {
    result = primeTester(19);
    expect(result).to.equal(true);
  });

  it('should return all the primes in range of numbers', function() {
    result = primeSieve(2, 20);
    expect(result).to.eql([2, 3, 5, 7, 11, 13, 17, 19]);
  });

  //Testing time complexity
  it('should return all the primes in a large range of prime numbers in less than two seconds', function() {
    result = primeSieve(2, 20000000);
    expect(result.length).to.eql(1270607);
  });

});
