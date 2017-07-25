describe('functionBind', function() {
  var result;
  var expected
  var alice;
  var boundShout;
  var func;
  var boundFunc;

  beforeEach(function() {
    // Something do to before each test
    alice = {
      name: 'alice',
      shout: function(){
        return(this.name);
      }
    }
    func = function(a, b){ return a + b };
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should bind names to the shout function', function() {
    boundShout = bind(alice.shout, alice);
    result = boundShout(); // returns 'alice'
    expected = 'alice';
    expect(result).to.equal(expected);
    boundShout = bind(alice.shout, {name: 'bob'});
    result = boundShout(); // returns 'bob'
    expected = 'bob';
    expect(result).to.equal(expected);
  });

  it('should bind parameters to func', function() {
    boundFunc = bind(func, null, 'foo');
    result = boundFunc('bar');
    expected = 'foobar';
    expect(result).to.equal(expected);
  });

  it('should be able to bind a parameter', function() {
    boundShout = alice.shout.bind(alice);
    result = boundShout(); // returns 'alice'
    expected = 'alice';
    expect(result).to.equal(expected);
    boundShout = alice.shout.bind({name: 'bob'});
    result = boundShout(); // returns 'bob'
    expected = 'bob';
    expect(result).to.equal(expected);
  });

  it('should be able to bind multiple parameters', function() {
    boundFunc = func.bind(null, 'foo');
    result = boundFunc('bar');
    expected = 'foobar';
    expect(result).to.equal(expected);
  });

});
