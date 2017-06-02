describe('deepEquality', function() {
  var result;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return true for deeply equal objects', function() {
    result = deepEquals({a:1, b: {c:3}}, {a:1, b: {c:3}});
    expect(result).to.equal(true);
  });

  it('should return true for deeply equal objects with primitives', function() {
    result = deepEquals({a:1, b:3, c:6}, {a:1, b:3, c:6});
    expect(result).to.equal(true);
  });

  it('should return true for deeply equal objects with arrays', function() {
    result = deepEquals({a:1, b:[1,2,3], c:6}, {a:1, b:[1,2,3], c:6});
    expect(result).to.equal(true);
  });

  it('should return false for non-deeply equal objects with primitives that do not equal each other', function() {
    result = deepEquals({a:1, b:3, c:5}, {a:1, b:3, c:6});
    expect(result).to.equal(false);
  });

  it('should return false for non-deeply equal objects of different lengths', function() {
    result = deepEquals({a:1, b:3, c:5}, {a:1, b:3});
    expect(result).to.equal(false);
  });

  it('should return false for non-deeply equal objects of objects with different primitives values', function() {
    result = deepEquals({a:1, b: {c:5}}, {a:1, b: {c:6}});
    expect(result).to.equal(false);
  });

  it('should return false for deeply equal objects with arrays that do not equal each other', function() {
    result = deepEquals({a:1, b:[1,5,3], c:6}, {a:1, b:[1,2,3], c:6});
    expect(result).to.equal(false);
  });

  it('should return false for deeply equal objects with arrays that are not the same length', function() {
    result = deepEquals({a:1, b:[1,3], c:6}, {a:1, b:[1], c:6});
    expect(result).to.equal(false);
  });

});
