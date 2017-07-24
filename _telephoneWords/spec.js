describe('telephoneWords', function() {
  var result;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should enumaerate the single permutation of 0000', function() {
    result = telephoneWords('0000');
    expect(result).to.eql(['0000']);
  });

  it('should enumaerate the three permutations of 0002', function() {
    result = telephoneWords('0002');
    expect(result).to.eql(['000A', '000B', '000C']);
  });

  it('should enumerate all of the permutations for 1123', function() {
    result = telephoneWords('1123');
    expect(result.length).to.equal(9);
  });

  it('should enumerate all of the permutations for 1234', function() {
    result = telephoneWords('1234');
    expect(result.length).to.equal(27);
  });

  it('should enumerate all of the permutations for 2745', function() {
    result = telephoneWords('2745');
    expect(result.length).to.equal(108);
  });

  it('should enumerate all of the permutations for 5987', function() {
    result = telephoneWords('5987');
    expect(result.length).to.equal(144);
  });

  it('should enumerate all of the permutations for 9999', function() {
    result = telephoneWords('9999');
    expect(result.length).to.equal(256);
  });

});
