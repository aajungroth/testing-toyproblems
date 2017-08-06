describe('longestPalindrome', function() {
  var result;
  var expected;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should determine if a string is a palindrome', function() {
    result = detectPalindrome('a racecar a');
    expected = true;
    expect(result).to.equal(expected);
  });

  it('should handle the empty string', function() {
    result = longestPalindrome('');
    expected = '';
    expect(result).to.equal(expected);
  });

  it('should find the longest palindrome', function() {
    result = longestPalindrome('My dad is a racecar athlete');
    expected = 'a racecar a';
    expect(result).to.equal(expected);
  });

  it('should find the longest palindrome when the longest palindrom has even length', function() {
    result = longestPalindrome('My dad is a abcdefghijjihgfedcba.');
    expected = 'abcdefghijjihgfedcba';
    expect(result).to.equal(expected);
  });

});
