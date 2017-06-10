describe('composePipe', function() {
  var result;
  var expected;
  var greet;
  var exclaim;
  var welcome;
  var add2;
  var multiplyBy3;
  var first;
  var shift;
  var fifth;

  beforeEach(function() {
    // Something do to before each test
    greet = function(name){ return 'hi: ' + name;};
    exclaim = function(statement) {
      return statement.toUpperCase() + '!';};
    add2 = function(number){ return number + 2; };
    multiplyBy3 = function(number){ return number * 3; };
    first = function first(array) {
      return array[0];
    };
    shift = function shift(array) {
      return array.slice(1);
    };
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should compose functions from right to left', function() {
    setTimeout(3000);
    welcome = compose(greet, exclaim);
    result = welcome('phillip');
    expected = 'hi: PHILLIP!';
    expect(result).to.equal(expected);
  });

  it('should compose be able to compose multiple functions', function() {
    setTimeout(3000);
    fifth = compose(first, shift, shift, shift, shift);
    result = fifth([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expected = 5;
    expect(typeof fifth).to.equal('function');
    expect(result).to.equal(expected);
  });

  it('should handle multiple composes', function() {
    setTimeout(3000);
    var fifth = compose(first, shift, shift, compose(shift, shift));
    result = fifth([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expected = 5;
    expect(typeof fifth).to.equal('function');
    expect(result).to.equal(expected);
  });

  it('should pipe functions from left to right', function() {
    result = [];
    result.push(pipe(add2, multiplyBy3)(5));
    result.push(pipe(add2, multiplyBy3, multiplyBy3)(5));
    expected = [];
    expected.push(21);
    expected.push(63);
    expect(result).to.eql(expected);
  });

});
