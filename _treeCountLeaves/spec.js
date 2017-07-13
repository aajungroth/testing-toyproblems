describe('treeCountLeaves', function() {
  var result;
  var rootNode;

  beforeEach(function() {
    // Something do to before each test
    rootNode = new Tree();
    rootNode.addChild(new Tree());
    rootNode.addChild(new Tree());
    rootNode.children[0].addChild(new Tree());
    rootNode.children[0].addChild(new Tree());
    rootNode.children[0].children[0].addChild(new Tree());
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return one for trees with 1 node', function() {
    rootNode = new Tree();
    result = rootNode.countLeaves();
    expect(result).to.equal(1);
  });

  it('should count the leaves on a tree with three leaves', function() {
    result = rootNode.countLeaves();
    expect(result).to.equal(3);
  });

  it('should count the leaves on a tree with eight leaves', function() {
    rootNode.addChild(new Tree());
    rootNode.addChild(new Tree());
    rootNode.children[0].addChild(new Tree());
    rootNode.children[0].addChild(new Tree());
    rootNode.children[0].children[0].children[0].addChild(new Tree());
    rootNode.children[0].children[0].children[0].addChild(new Tree());
    result = rootNode.countLeaves();
    expect(result).to.equal(8);
  });

});
