describe('toFraction', function() {
  var result;
  var expected;
  var decimal

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return 0/1: the decimal number as a string representing a reduced fraction', function() {
    decimal = 0.0;
    result = toFraction(decimal)
    expected = '0/1';
    expect(result).to.equal(expected);
  });

  it('should handle negative decimal numbers', function() {
    decimal = -0.75;
    result = toFraction(decimal)
    expected = '-3/4';
    expect(result).to.equal(expected);
  });

  it('should handle negative integers', function() {
    decimal = -75.0;
    result = toFraction(decimal)
    expected = '-75/1';
    expect(result).to.equal(expected);
  });

  it('should handle negative mixed fractions', function() {
    decimal = -1.75;
    result = toFraction(decimal)
    expected = '-7/4';
    expect(result).to.equal(expected);
  });

  it('should return 1/2: the decimal number as a string representing a reduced fraction', function() {
    decimal = 0.5;
    result = toFraction(decimal)
    expected = '1/2';
    expect(result).to.equal(expected);
  });

  it('should return 1/8: the decimal number as a string representing a reduced fraction', function() {
    decimal = 0.125;
    result = toFraction(decimal)
    expected = '1/8';
    expect(result).to.equal(expected);
  });

  it('should return 1/16: the decimal number as a string representing a reduced fraction', function() {
    decimal = 0.0625;
    result = toFraction(decimal)
    expected = '1/16';
    expect(result).to.equal(expected);
  });

  it('should return 1/1000000: the decimal number as a string representing a reduced fraction', function() {
    decimal = 0.000001;
    result = toFraction(decimal)
    expected = '1/1000000';
    expect(result).to.equal(expected);
  });

  it('should return 3/1: the whole number as a string representing a reduced fraction', function() {
    decimal = 3.0;
    result = toFraction(decimal)
    expected = '3/1';
    expect(result).to.equal(expected);
  });

  it('should return 500000000/1: the whole number as a string representing a reduced fraction', function() {
    decimal = 500000000.0;
    result = toFraction(decimal)
    expected = '500000000/1';
    expect(result).to.equal(expected);
  });

  it('should return 5/2: the mixed fraction as a string representing a reduced fraction', function() {
    decimal = 2.5;
    result = toFraction(decimal)
    expected = '5/2';
    expect(result).to.equal(expected);
  });

  it('should return 200000001/2: the mixed fraction as a string representing a reduced fraction', function() {
    decimal = 100000000.5;
    result = toFraction(decimal)
    expected = '200000001/2';
    expect(result).to.equal(expected);
  });

  it('should return 3065994661843781/12500: the mixed fraction as a string representing a reduced fraction', function() {
    //This is just what the function consistently returns
      //it may not be mathematically accurate
      //needs third party verification
    decimal = 245279572947.5024805882;
    result = toFraction(decimal)
    expected = '3065994661843781/12500';
    expect(result).to.equal(expected);
  });
});
