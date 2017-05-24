describe('firstNonRepeatedCharacter', function() {
  var result;
  var testString;
  var expected;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return an empty string when there are no nonrepeated characters', function() {
    testString = 'ABCABC';
    result = firstNonRepeatedCharacter(testString);
    expected = '';
    expect(result).to.equal(expected);
  });

  it('should find the first nonrepeated character even if the repeating characters are not in a line', function() {
    testString = 'ABA';
    result = firstNonRepeatedCharacter(testString);
    expected = 'B';
    expect(result).to.equal(expected);
  });

  it('should find the first nonrepeated character when preceding repeated characters are all next to each other', function() {
    testString = 'AACBDB';
    result = firstNonRepeatedCharacter(testString);
    expected = 'C';
    expect(result).to.equal(expected);
  });

});
