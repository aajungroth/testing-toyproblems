describe('powerSet', function() {
  var result;
  var expected;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return an array for the power set of jump', function() {
    this.timeout(3000);
    result = powerSet('jump');
    console.log('expected: ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]');
    console.log('actual: ' + result);
    expect(result.length).to.equal(16);
  });

  it('should return an array for the power set of jumps', function() {
    this.timeout(3000);
    result = powerSet('jumps');
    console.log('actual: ' + result);
    console.log(result.length);
    expect(result.length).to.equal(32);
  });

  it('should return an array for the power set of banana', function() {
    this.timeout(3000);
    result = powerSet('banana');
    expected = powerSet('ban');
    console.log('expected: ' + expected);
    console.log('actual: ' + result);
    console.log(result.length);
    expect(result).to.eql(expected);
  });

});
