describe('robotPaths', function() {
  var result;
  var expected;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should find zero unique paths in a 0x0 board', function() {
    result = robotPaths(0);
    expected = 0;
    expect(result).to.equal(expected);
  });

  it('should find one unique path in a 1x1 board', function() {
    result = robotPaths(1);
    expected = 1;
    expect(result).to.equal(expected);
  });

  it('should find two unique paths in a 2x2 board', function() {
    result = robotPaths(2);
    expected = 2;
    expect(result).to.equal(expected);
  });

  it('should find twelve unique paths in a 3x3 board', function() {
    result = robotPaths(3);
    expected = 12;
    expect(result).to.equal(expected);
  });

  it('should find all the unique paths in a 4x4 board', function() {
    result = robotPaths(4);
    expected = 184;
    expect(result).to.equal(expected);
  });

  it('should find all the unique paths in a 5x5 board', function() {
    result = robotPaths(5);
    expected = 8512;
    expect(result).to.equal(expected);
  });

  it('should find all the unique paths in a 6x6 board', function() {
    this.timeout(4000);
    result = robotPaths(6);
    expected = 1262816;
    expect(result).to.equal(expected);
  });

});
