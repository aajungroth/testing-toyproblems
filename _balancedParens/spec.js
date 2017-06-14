describe('balancedParens', function() {
  var expected;
  var result0;
  var result1;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return true for balanced parens', function() {
    result0 = balancedParens('()'); // true
    result1 = balancedParens('(())');  // true
    expected = true;
    expect(result0).to.equal(expected);
    expect(result1).to.equal(expected);
  });

  it('should return false for unbalanced parens', function() {
    result0 = balancedParens('(');  // false
    result1 = balancedParens(')(');  // false
    expected = false;
    expect(result0).to.equal(expected);
    expect(result1).to.equal(expected);
  });

  it('should return true for balanced parens of any type', function() {
    result0 = balancedParens('[](){}'); // true
    result1 = balancedParens('[({})]');   // true
    expected = true;
    expect(result0).to.equal(expected);
    expect(result1).to.equal(expected);
  });

  it('should return false for unbalanced parens of any type', function() {
    result0 = balancedParens('[(]{)}'); // false
    expected = false;
    expect(result0).to.equal(expected);
  });

  it('should return true for balanced parens and ignore other characters', function() {
    result0 = balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
    expected = true;
    expect(result0).to.equal(expected);
  });

  it('should return false for unbalanced parens and ignore other characters', function() {
    result0 = balancedParens(' var hubble = function() { telescopes.awesome();'); // false
    expected = false;
    expect(result0).to.equal(expected);
  });

});
