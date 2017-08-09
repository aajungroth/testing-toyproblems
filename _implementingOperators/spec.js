describe('implementingOperators', function() {
  var result;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should multiply two numbers', function() {
    result = multiply(10, 5);
    expect(result).to.equal(50);
  });

  it('should return a negative when the first number is a negative', function() {
    result = multiply(-10, 5);
    expect(result).to.equal(-50);
  });

  it('should return a negative when the second number is a negative', function() {
    result = multiply(10, -5);
    expect(result).to.equal(-50);
  });

  it('should return a positive when both numbers are negative', function() {
    result = multiply(-10, -5);
    expect(result).to.equal(50);
  });

  it('should divide return undefined when dividing by zero', function() {
    result = divide(4, 0);
    expect(result).to.equal(undefined);
  });

  it('should divide two numbers', function() {
    result = divide(9, 3);
    expect(result).to.equal(3);
  });

  it('should return a negative when the dividend is negative', function() {
    result = divide(-9, 3);
    expect(result).to.equal(-3);
  });

  it('should return a negative when the divisor is negative', function() {
    result = divide(9, -3);
    expect(result).to.equal(-3);
  });

  it('should return a positive when the dividend and divisor is negative', function() {
    result = divide(-9, -3);
    expect(result).to.equal(3);
  });

  it('should produce answers to three decimal places when dividing', function() {
    result = divide(2, 3);
    expect(result).to.equal(0.667);
  });

  it('should produce a negative answer to three decimal places when dividing a negative by a positive', function() {
    result = divide(-2, 3);
    expect(result).to.equal(-0.667);
  });

  it('should produce a negative answer to three decimal places when dividing a positive by a negative', function() {
    result = divide(2, -3);
    expect(result).to.equal(-0.667);
  });

  it('should produce a positive answer to three decimal places when dividing a negative by a negative', function() {
    result = divide(-2, -3);
    expect(result).to.equal(0.667);
  });

  it('should divide return undefined when modding by zero', function() {
    result = modulo(5, 0);
    expect(result).to.equal(undefined);
  });

  it('should mod two numbers', function() {
    result = modulo(11, 5);
    expect(result).to.equal(1);
  });

});
