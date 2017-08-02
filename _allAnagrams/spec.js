describe('allAnagrams', function() {
  var result;
  var expected;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return all anagrams of a three character string', function() {
    result = allAnagrams('abc');
    expected = [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ];
    expect(result).to.eql(expected);
  });

  it('should return all anagrams of a four character string', function() {
    result = allAnagrams('abcd');
    expected = 24;
    expect(result.length).to.equal(expected);
  });

  it('should not include an duplicate anagrams with words that have duplicate characters', function() {
    result = allAnagrams('apps');
    expected = ['apps', 'apsp', 'aspp', 'paps', 'pasp', 'ppas', 'ppsa', 'psap', 'pspa', 'sapp', 'spap', 'sppa'];
    expect(result).to.eql(expected);
  });

});
