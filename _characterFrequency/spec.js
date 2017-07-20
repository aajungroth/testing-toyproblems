describe('characterFrequency', function() {
  var result;
  var expected;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should pass return the correct frequency for mississippi', function() {
    result = characterFrequency('mississippi');
    expected =
    [
      ['i', 4],
      ['s', 4],
      ['p', 2],
      ['m', 1]
    ];
    expect(result).to.eql(expected);
  });

  it('should pass return the correct frequency for miaaiaaippi', function() {
    result = characterFrequency('miaaiaaippi');
    expected =
    [
      ['a', 4],
      ['i', 4],
      ['p', 2],
      ['m', 1]
    ];
    expect(result).to.eql(expected);
  });

  it('should pass return the correct frequency for mmmaaaiiibbb', function() {
    result = characterFrequency('mmmaaaiiibbb');
    expected =
    [
      ['a', 3],
      ['b', 3],
      ['i', 3],
      ['m', 3]
    ];
    expect(result).to.eql(expected);
  });

});
