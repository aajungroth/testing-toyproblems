describe('translateRomanNumeral', function() {
  var result;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return null for a non string type', function() {
    result = translateRomanNumeral(0) //null
    expect(result).to.equal(null);
  });

  it('should return zero for empty string', function() {
    result = translateRomanNumeral("") // 0
    expect(result).to.equal(0);
  });

  it('should return null for an invalid string', function() {
    result = translateRomanNumeral("LXIVX") // null
    expect(result).to.equal(null);
  });

  it('should return a number for a single roman numeral', function() {
    result = translateRomanNumeral("C") // 100
    expect(result).to.equal(100);
  });

  it('should return a number for valid strings', function() {
    result = translateRomanNumeral("LX") // 60
    expect(result).to.equal(60);
  });

  it('should return a number for strings with only one number smaller than the next number per pairs of numbers', function() {
    result = translateRomanNumeral("IV") // 4
    expect(result).to.equal(4);
  });

});
