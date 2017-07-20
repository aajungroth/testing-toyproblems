describe('treeMap', function() {
  var result;
  var root1;
  var branch2;
  var branch3;
  var leaf4;
  var leaf5;
  var leaf6;
  var leaf7;
  var newTree;

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

  it('should return a new tree with the mapped values', function() {
    newTree = root1.map(function (value) {
      return value * 2;
    });
    result = newTree.value; // 2
    expect(result).to.equal(2);
    result = newTree.children[0].value; // 4
    expect(result).to.equal(4);
    result = newTree.children[1].value; // 6
    expect(result).to.equal(6);
    result = newTree.children[0].children[1].value; // 10
    expect(result).to.equal(10);
    result = newTree.children[1].children[1].value; // 14
    expect(result).to.equal(14);
    result = root1.value; // still 1
    expect(result).to.equal(1);
  });

  it('should map the values of the original tree', function() {
    root1.mapInPlace(function (value) {
      return value * 2;
    });
    result = root1.value; // 2
    expect(result).to.equal(2);
    result = root1.children[0].value; // 4
    expect(result).to.equal(4);
    result = root1.children[1].value; // 6
    expect(result).to.equal(6);
    result = root1.children[0].children[1].value; // 10
    expect(result).to.equal(10);
    result = root1.children[1].children[1].value; // 14
    expect(result).to.equal(14);
  });

});
