describe('commonAncestor', function() {
  var result;
  var expected;
  var grandma;
  var mom;
  var aunt;
  var cousin;
  var brother;
  var potato;

  beforeEach(function() {
    // Something do to before each test
    grandma = new Tree();
    mom = new Tree();
    aunt = new Tree();
    uncle = new Tree();
    grandma.addChild(mom);
    grandma.addChild(aunt);
    grandma.addChild(uncle);
    me = new Tree();
    brother = new Tree();
    mom.addChild(me);
    mom.addChild(brother);
    cousin = new Tree();
    aunt.addChild(cousin);
    potato = new Tree();
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should find the path from the tree root to the target if it exists', function() {
    result = grandma.getAncestorPath(me);
    expected = [grandma, mom, me];
    expect(result).to.eql(expected);
  });

  it('should find the path from the tree root to the target when they are one depth apart', function() {
    result = mom.getAncestorPath(me);
    expected = [mom, me];
    expect(result).to.eql(expected);
  });

  it('should find the path from the tree root to the target when they are the same', function() {
    result = me.getAncestorPath(me);
    expected = [me];
    expect(result).to.eql(expected);
  });

  it('should return null when the tree root and the target are not related', function() {
    result = grandma.getAncestorPath(potato);
    expected = null;
    expect(result).to.equal(expected);
  });

  it('should find the closest common ancestor of two sibling nodes', function() {
    result = grandma.getClosestCommonAncestor(me, brother);
    expected = mom;
    expect(result).to.equal(expected);
  });

  it('should find the closest common ancestor of two cousin nodes', function() {
    result = grandma.getClosestCommonAncestor(me, cousin);
    expected = grandma;
    expect(result).to.equal(expected);
  });

  it('should find the closest common ancestor of a node compared to itself', function() {
    result = grandma.getClosestCommonAncestor(me, me);
    expected = mom;
    expect(result).to.equal(expected);
  });

  it('should find the closest common ancestor of a node compared to itself when it is the root node', function() {
    result = grandma.getClosestCommonAncestor(grandma, grandma);
    expected = grandma;
    expect(result).to.equal(expected);
  });

  it('should return null if the two target nodes have no common ancestor', function() {
    result = grandma.getClosestCommonAncestor(me, potato);
    expected = null;
    expect(result).to.equal(expected);
  });

});
