describe('longestRun', function() {
  var result;
  var expected;
  var string;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return null for an empty string', function() {
    string = '';
    result = longestRun(string);
    expected = null;
    expect(result).to.eql(expected);
  });

  it('should return the first longestRun in a string with two or more longest runs', function() {
    string = 'daaakvzzztwmz';
    result = longestRun(string);
    expected = [1, 3];
    expect(result).to.eql(expected);
  });

  it('should return the longestRun in a string of 10 characters', function() {
    string = 'ddakvztwmz';
    result = longestRun(string);
    expected = [0, 1];
    expect(result).to.eql(expected);
  });

  it('should return the longestRun in a string of 20 characters', function() {
    string = 'ltkqvvovpikwxxmvvvvzpkano';
    result = longestRun(string);
    expected = [15, 18];
    expect(result).to.eql(expected);
  });

  it('should return the longestRun in a string of 30 characters', function() {
    string = 'hpczfitdvlggtsxbsrgcahlxqphpsxu';
    result = longestRun(string);
    expected = [10, 11];
    expect(result).to.eql(expected);
  });

});
