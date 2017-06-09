describe('treeBFSelect', function() {
  var result;
  var expected;
  var root1;
  var branch2;
  var branch3;
  var leaf4;
  var leaf5;
  var leaf5;
  var leaf6;
  var leaf7;

  beforeEach(function() {
    // Something do to before each test
    root1 = new Tree(1);
    branch2 = root1.addChild(2);
    branch3 = root1.addChild(3);
    leaf4 = branch2.addChild(4);
    leaf5 = branch2.addChild(5);
    leaf6 = branch3.addChild(6);
    leaf7 = branch3.addChild(7);
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should filter the nodes in breadth first order by odd value', function() {
    result = root1.BFSelect(function (value, depth) {
      return value % 2;
    });
    expected = [1, 3, 5, 7];
    expect(result).to.eql(expected);
  });

  it('should filter the nodes in breadth first order by depth 1', function() {
    result = root1.BFSelect(function (value, depth) {
      return depth === 1;
    })
    expected = [2, 3];
    expect(result).to.eql(expected);
  });

  it('should filter the nodes in breadth first order by depth 2', function() {
    result = root1.BFSelect(function (value, depth) {
      return depth === 2;
    })
    expected = [4, 5, 6, 7];
    expect(result).to.eql(expected);
  });

});
