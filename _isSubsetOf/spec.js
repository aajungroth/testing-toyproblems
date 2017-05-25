describe('isSubsetOf', function() {
  var result;
  var setA;
  var setB;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return true for arrays that are subsets of another array', function() {
    setA = ['commit','push'];
    setB = ['commit','rebase','push','blame'];

    result = setA.isSubsetOf(setB);
    expect(result).to.equal(true);
  });

  it('should return true even if the subset has duplicates', function() {
    setA = ['merge','reset','reset'];
    setB = ['reset','merge','add','commit'];

    result = setA.isSubsetOf(setB);
    expect(result).to.equal(true);
  });

  it('should return false for arrays that are not subsets of another array', function() {
    setA = ['merge','reset','rebase'];
    setB = ['reset','merge','add','commit'];

    result = setA.isSubsetOf(setB);
    expect(result).to.equal(false);
  });

});
