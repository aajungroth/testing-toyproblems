describe('commonCharacters', function() {
  var result;
  var stringA;
  var stringB;
  var expected;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return the intersection of the characters', function() {
    stringA = 'acexivou';
    stringB = 'aegihobu';
    result = commonCharacters(stringA, stringB);
    expected = 'aeiou';
    expect(result).to.equal(expected);
  });

});
