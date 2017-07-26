describe('coinSums', function() {
  var result;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should count all the ways to make 0p', function() {
    result = makeChange(0);
    expect(result).to.equal(1);
  });

  it('should count all the ways to make 1p', function() {
    result = makeChange(1);
    expect(result).to.equal(1);
  });

  it('should count all the ways to make 2p', function() {
    result = makeChange(2);
    expect(result).to.equal(2);
  });

  it('should count all the ways to make 3p', function() {
    result = makeChange(3);
    expect(result).to.equal(2);
  });

  it('should count all the ways to make 5p', function() {
    result = makeChange(5);
    expect(result).to.equal(4);
  });

  it('should count all the ways to make 10p', function() {
    result = makeChange(10);
    expect(result).to.equal(11);
  });

  it('should count all the ways to make 20p', function() {
    result = makeChange(20);
    expect(result).to.equal(41);
  });

  it('should count all the ways to make 50p', function() {
    result = makeChange(50);
    expect(result).to.equal(451);
  });

  it('should count all the ways to make f1 (100p)', function() {
    result = makeChange(100);
    expect(result).to.equal(4563);
  });

  it('should count all the ways to make f2 (200p)', function() {
    result = makeChange(200);
    expect(result).to.equal(73682);
  });

});
